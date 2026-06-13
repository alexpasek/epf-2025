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
  let response = await fetch(url, { method: "HEAD", redirect: "follow" });
  if (response.status === 405) {
    response = await fetch(url, { method: "GET", redirect: "follow" });
  }
  return {
    ok: response.status >= 200 && response.status < 400,
    status: response.status,
  };
}

async function sendWebhook(post, { dryRun = false } = {}) {
  const payload = buildPayload(post);
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

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-epf-webhook-secret": secret,
    },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  return response.ok
    ? { ok: true, status: response.status, url: payload.url }
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

  const selected = posts
    .filter((post) => {
      if (!post || !post.slug) return false;
      if (args.slugs.length) return args.slugs.includes(post.slug);
      return args.force || !sent[post.slug];
    })
    .slice(0, args.limit);

  if (!selected.length) {
    console.log("No deployed blog webhooks to send.");
    return;
  }

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
        };
        console.log(`Webhook sent: ${result.url}`);
      }
    } else {
      failures += 1;
      console.warn(
        `Webhook not sent for ${post.slug}: ${result.error || result.status}`,
        result.verification || ""
      );
    }
  }

  if (!args.dryRun) {
    fs.writeFileSync(sentPath, JSON.stringify(sent, null, 2));
  }
  if (failures) process.exit(1);
}

run().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
