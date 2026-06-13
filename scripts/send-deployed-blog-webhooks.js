#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { config: loadEnv } = require("dotenv");

for (const file of [".env.local", ".env"]) {
  loadEnv({ path: file, override: false, quiet: true });
}

const dataPath = path.join(process.cwd(), "data", "generated-posts.json");
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
  const posts = readJson(dataPath, []);
  const sent = readJson(sentPath, {});

  log("Starting deployed blog webhook sender", {
    siteUrl,
    dataPath,
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
