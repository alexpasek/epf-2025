#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { config: loadEnv } = require("dotenv");

for (const file of [".env.local", ".env"]) {
  loadEnv({ path: file, override: false, quiet: true });
}

const dataPath = path.join(process.cwd(), "data", "generated-posts.json");
const staticPostsPath = path.join(process.cwd(), "lib", "posts.js");
const sentPath = path.join(process.cwd(), ".blog-webhook-sent.json");
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://epfproservices.com")
  .replace(/\/$/, "");
const webhookUrl =
  process.env.GMB_POSTER_WEBHOOK_URL || process.env.BLOG_CREATED_WEBHOOK_URL;
const secret =
  process.env.EPF_WEBHOOK_SECRET || process.env.GMB_POSTER_WEBHOOK_SECRET;

function log(message, details = {}) {
  console.log("[blog-webhook]", message, details);
}

function warn(message, details = {}) {
  console.warn("[blog-webhook]", message, details);
}

function safeWebhookTarget(url) {
  try {
    const parsed = new URL(url);
    return `${parsed.origin}${parsed.pathname}`;
  } catch (error) {
    return "invalid webhook URL";
  }
}

function parseJsonOrNull(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}

function isDuplicateAccepted(response, text) {
  if (response.status !== 409) return false;
  const json = parseJsonOrNull(text);
  return json?.error === "Duplicate blog url" && Boolean(json?.duplicate);
}

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readStringField(source, key) {
  const pattern = new RegExp(`${key}:\\s*(["'\`])([\\s\\S]*?)\\1`);
  const match = source.match(pattern);
  return match ? match[2] : "";
}

function cityFromSlug(slug) {
  const cityMap = {
    mississauga: "Mississauga",
    toronto: "Toronto",
    oakville: "Oakville",
    burlington: "Burlington",
    hamilton: "Hamilton",
    milton: "Milton",
    etobicoke: "Etobicoke",
    grimsby: "Grimsby",
    "north-york": "North York",
    "st-catharines": "St. Catharines",
  };
  return Object.entries(cityMap).find(([citySlug]) => slug.includes(citySlug))?.[1] || "";
}

function readStaticPostBySlug(slug) {
  if (!fs.existsSync(staticPostsPath)) return null;
  const source = fs.readFileSync(staticPostsPath, "utf8");
  const slugPattern = new RegExp(`slug:\\s*(["'\`])${escapeRegExp(slug)}\\1`);
  const slugMatch = source.match(slugPattern);
  if (!slugMatch || slugMatch.index === undefined) return null;

  const objectStart = source.lastIndexOf("\n    {", slugMatch.index);
  const nextObjectStart = source.indexOf("\n    {", slugMatch.index + slugMatch[0].length);
  const objectSource = source.slice(
    objectStart >= 0 ? objectStart : Math.max(0, slugMatch.index - 4000),
    nextObjectStart >= 0 ? nextObjectStart : Math.min(source.length, slugMatch.index + 12000)
  );

  return {
    slug,
    title: readStringField(objectSource, "title") || slug,
    date: readStringField(objectSource, "date") || new Date().toISOString().split("T")[0],
    publishedAt: readStringField(objectSource, "publishedAt") || "",
    excerpt: readStringField(objectSource, "excerpt") || "",
    city: readStringField(objectSource, "city") || cityFromSlug(slug),
    service:
      readStringField(objectSource, "service") ||
      readStringField(objectSource, "serviceType") ||
      readStringField(objectSource, "articleSection") ||
      "",
  };
}

function mergeStaticSlugPosts(posts, slugs) {
  if (!slugs.length) return posts;
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  for (const slug of slugs) {
    if (!slug || bySlug.has(slug)) continue;
    const staticPost = readStaticPostBySlug(slug);
    if (staticPost) {
      bySlug.set(slug, staticPost);
    }
  }
  return Array.from(bySlug.values());
}

function parseArgs(argv) {
  const args = { limit: 1, force: false, dryRun: false, slugs: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (item === "--force") {
      args.force = true;
    } else if (item === "--dry-run") {
      args.dryRun = true;
    } else if (item === "--all") {
      args.limit = Infinity;
    } else if (item === "--limit") {
      args.limit = Number(argv[++i] || 1);
    } else if (item === "--slug") {
      args.slugs.push(argv[++i]);
    }
  }
  return args;
}

function getPostUrl(post) {
  return `${siteUrl}/blog/${post.slug}/`;
}

function buildPayload(post) {
  return {
    event: "BLOG_POST_CREATED",
    url: getPostUrl(post),
    title: post.title,
    excerpt: post.excerpt || "",
    city: post.city || "",
    service: post.service || "Popcorn Ceiling Removal",
    publishedAt:
      post.publishedAt || new Date(`${post.date}T12:00:00Z`).toISOString(),
  };
}

async function verifyLiveUrl(url) {
  log("Verifying live blog URL", { url });
  let response = await fetch(url, { method: "HEAD", redirect: "follow" });
  if (response.status === 405) {
    log("HEAD returned 405; retrying with GET", { url });
    response = await fetch(url, { method: "GET", redirect: "follow" });
  }
  log("Live blog URL verification finished", { url, status: response.status });
  return {
    ok: response.status >= 200 && response.status < 400,
    status: response.status,
  };
}

async function sendWebhook(post, { dryRun = false } = {}) {
  const payload = buildPayload(post);
  log("Preparing webhook", {
    slug: post.slug,
    title: post.title,
    url: payload.url,
    dryRun,
    webhookTarget: safeWebhookTarget(webhookUrl),
  });
  const verification = await verifyLiveUrl(payload.url);
  if (!verification.ok) {
    return {
      ok: false,
      skipped: true,
      error: "Blog URL is not live",
      url: payload.url,
      verification,
    };
  }

  if (dryRun) {
    return { ok: true, dryRun: true, status: verification.status, url: payload.url };
  }

  log("Sending webhook request", {
    slug: post.slug,
    url: payload.url,
    webhookTarget: safeWebhookTarget(webhookUrl),
  });
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-epf-webhook-secret": secret,
    },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  const duplicateAccepted = isDuplicateAccepted(response, text);
  log("Webhook response received", {
    slug: post.slug,
    status: response.status,
    ok: response.ok,
    duplicateAccepted,
    response: text.slice(0, 500),
  });
  return response.ok || duplicateAccepted
    ? {
        ok: true,
        status: response.status,
        url: payload.url,
        duplicate: duplicateAccepted,
      }
    : {
        ok: false,
        status: response.status,
        error: text || response.statusText,
        url: payload.url,
      };
}

async function run() {
  if (!webhookUrl) throw new Error("Missing GMB_POSTER_WEBHOOK_URL");
  if (!secret) throw new Error("Missing EPF_WEBHOOK_SECRET");

  const args = parseArgs(process.argv.slice(2));
  const posts = mergeStaticSlugPosts(readJson(dataPath, []), args.slugs);
  const sent = readJson(sentPath, {});

  log("Starting deployed blog webhook sender", {
    siteUrl,
    dataPath,
    staticPostsPath,
    sentPath,
    postCount: posts.length,
    sentCount: Object.keys(sent).length,
    args,
    hasWebhookUrl: Boolean(webhookUrl),
    hasSecret: Boolean(secret),
    webhookTarget: safeWebhookTarget(webhookUrl),
  });

  const selected = posts
    .filter((post) => {
      if (!post || !post.slug) return false;
      if (args.slugs.length) return args.slugs.includes(post.slug);
      return args.force || !sent[post.slug];
    })
    .slice(0, args.limit);

  if (!selected.length) {
    log("No deployed blog webhooks to send", {
      requestedSlugs: args.slugs,
      limit: args.limit,
      force: args.force,
    });
    return;
  }

  log("Selected posts for webhook", {
    count: selected.length,
    slugs: selected.map((post) => post.slug),
  });

  let failures = 0;
  for (const post of selected) {
    const result = await sendWebhook(post, { dryRun: args.dryRun });
    if (result.ok) {
      if (result.dryRun) {
        console.log(`Dry run ok: ${result.url}`);
      } else {
        sent[post.slug] = {
          url: result.url,
          sentAt: new Date().toISOString(),
          duplicate: Boolean(result.duplicate),
        };
        console.log(
          result.duplicate
            ? `Webhook already accepted by poster agent: ${result.url}`
            : `Webhook sent: ${result.url}`
        );
      }
    } else {
      failures += 1;
      warn("Webhook not sent", {
        slug: post.slug,
        error: result.error || result.status,
        verification: result.verification || null,
      });
    }
  }

  if (!args.dryRun) {
    fs.writeFileSync(sentPath, JSON.stringify(sent, null, 2));
    log("Updated webhook sent-state file", { sentPath });
  }
  if (failures) process.exit(1);
  log("Deployed blog webhook sender finished", { failures });
}

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
