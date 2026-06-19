const fs = require("fs/promises");
const path = require("path");
const { makeId, nowIso } = require("./models.cjs");
const { createGmbDraft } = require("./gmb-handoff.cjs");

const SITE_ROOT = process.env.EPF_SITE_ROOT
  ? path.resolve(process.env.EPF_SITE_ROOT)
  : process.cwd();
const POSTS_PATH = path.join(SITE_ROOT, "data", "generated-posts.json");
const POSTS_REPO_PATH = "data/generated-posts.json";
const DEFAULT_REPO = "alexpasek/epf-2025";
const DEFAULT_BRANCH = "prod-stable";

async function readPosts() {
  try {
    const raw = await fs.readFile(POSTS_PATH, "utf8");
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getGithubConfig() {
  const token = process.env.GITHUB_TOKEN || process.env.SITE_ADMIN_GITHUB_TOKEN;
  if (!token) return null;
  const repo = process.env.GITHUB_REPO || DEFAULT_REPO;
  const branch = process.env.GITHUB_BRANCH || DEFAULT_BRANCH;
  if (!/^[^/\s]+\/[^/\s]+$/.test(repo)) {
    throw new Error("GITHUB_REPO must be in owner/name format");
  }
  return { token, repo, branch };
}

async function githubFetch(config, githubPath, options = {}) {
  const response = await fetch(`https://api.github.com/repos/${config.repo}${githubPath}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });
  const text = await response.text();
  const payload = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(payload?.message || `GitHub request failed: ${response.status}`);
  }
  return payload;
}

function decodeBase64(base64) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(base64, "base64").toString("utf8");
  }
  return decodeURIComponent(escape(atob(base64)));
}

function encodeBase64(value) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf8").toString("base64");
  }
  return btoa(unescape(encodeURIComponent(value)));
}

async function publishPostToGithub(websitePost, slug) {
  const config = getGithubConfig();
  if (!config) return null;
  const encodedPath = encodeURIComponent(POSTS_REPO_PATH).replace(/%2F/g, "/");
  const existing = await githubFetch(
    config,
    `/contents/${encodedPath}?ref=${encodeURIComponent(config.branch)}`,
  );
  const current = JSON.parse(decodeBase64(existing.content || "") || "[]");
  if (Array.isArray(current) && current.some((post) => post.slug === slug)) {
    throw new Error(`A blog post with slug "${slug}" already exists in GitHub`);
  }
  const nextPosts = [websitePost, ...(Array.isArray(current) ? current : [])];
  const payload = await githubFetch(config, `/contents/${encodedPath}`, {
    method: "PUT",
    body: JSON.stringify({
      message: `Publish SEO blog: ${slug}`,
      content: encodeBase64(`${JSON.stringify(nextPosts, null, 4)}\n`),
      sha: existing.sha,
      branch: config.branch,
    }),
  });
  return {
    mode: "github",
    repo: config.repo,
    branch: config.branch,
    commitSha: payload.commit?.sha || "",
    htmlUrl: payload.content?.html_url || "",
  };
}

function toWebsitePost(draft) {
  return {
    title: draft.title,
    h1: draft.h1 || draft.title,
    slug: draft.slug,
    date: draft.date,
    excerpt: draft.excerpt,
    metaTitle: draft.meta_title,
    metaDescription: draft.meta_description,
    author: "Alex - EPF Pro Services",
    reviewedBy: "EPF Pro Services",
    image: draft.image,
    fieldGuideLayout: true,
    schemaType: "BlogPosting",
    articleSection: draft.article_section,
    serviceType: draft.service,
    about: draft.title,
    blogType: draft.blog_type,
    searchIntent: draft.search_intent,
    mainKeyword: draft.main_keyword,
    topicalCluster: draft.topical_cluster,
    targetServicePage: draft.target_service_page,
    imagePlan: draft.image_plan,
    seoChecks: draft.seo_checks,
    quickAnswer: typeof draft.content?.[3] === "string" ? draft.content[3] : draft.excerpt,
    content: draft.content,
    faqs: draft.faq,
    keywords: draft.target_keywords,
    photos: [
      {
        src: draft.image,
        alt: draft.image_alt,
        description: draft.image_prompt,
      },
    ],
    links: draft.internal_links,
  };
}

async function publishDraftLocally(draft) {
  if (!draft.approved_by_user || draft.status !== "approved") {
    throw new Error("Draft must be approved before publishing");
  }

  const posts = await readPosts();
  if (posts.some((post) => post.slug === draft.slug)) {
    throw new Error(`A blog post with slug "${draft.slug}" already exists`);
  }

  const websitePost = toWebsitePost(draft);
  const githubResult = await publishPostToGithub(websitePost, draft.slug);
  if (!githubResult) {
    posts.unshift(websitePost);
    await fs.writeFile(POSTS_PATH, `${JSON.stringify(posts, null, 4)}\n`);
  }

  const publishedUrl = `/blog/${draft.slug}/`;
  const log = {
    id: makeId("pub"),
    blog_draft_id: draft.id,
    event_id: makeId("event"),
    status: "published",
    website_response: githubResult || { mode: "local", path: POSTS_PATH, slug: draft.slug, publishedUrl },
    error: "",
    created_at: nowIso(),
  };

  return {
    log,
    publishedUrl,
    gmbDraft: createGmbDraft(draft, publishedUrl),
  };
}

module.exports = {
  publishDraftLocally,
  toWebsitePost,
};
