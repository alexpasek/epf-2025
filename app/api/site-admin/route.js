import { NextResponse } from "next/server";

export const runtime = "edge";

const DEFAULT_REPO = "alexpasek/epf-2025";
const DEFAULT_BRANCH = "main";
const MAX_CONTENT_BYTES = Number(process.env.SITE_ADMIN_MAX_BYTES || 4_000_000);

const ALLOWED_ROOTS = [
  "app/",
  "components/",
  "data/",
  "docs/",
  "lib/",
  "public/",
  "scripts/",
  "next.config.js",
  "package.json",
  "package-lock.json",
  "postcss.config.js",
  "tailwind.config.js",
];

const BLOCKED_SEGMENTS = new Set([
  ".git",
  ".next",
  ".open-next",
  ".vercel",
  "node_modules",
]);

const BLOCKED_FILENAMES = new Set([
  ".env",
  ".env.local",
  ".env.production",
  ".env.development",
  "wrangler.toml",
]);

function json(data, status = 200) {
  return NextResponse.json(data, { status });
}

function unauthorized(message = "Unauthorized") {
  return json({ ok: false, error: message }, 401);
}

function getBearer(req) {
  const header = req.headers.get("authorization") || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function requireAuth(req) {
  const expected = process.env.SITE_ADMIN_API_KEY || "";
  if (!expected) {
    return { ok: false, response: unauthorized("SITE_ADMIN_API_KEY is not set") };
  }

  const provided = getBearer(req);
  if (!provided || provided !== expected) {
    return { ok: false, response: unauthorized() };
  }

  return { ok: true };
}

function normalizePath(input) {
  const value = String(input || "")
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .trim();

  if (!value || value.includes("\0")) {
    throw new Error("Missing or invalid path");
  }

  const parts = [];
  for (const segment of value.split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") throw new Error("Path traversal is not allowed");
    parts.push(segment);
  }

  const clean = parts.join("/");
  const filename = parts[parts.length - 1] || "";

  if (parts.some((part) => BLOCKED_SEGMENTS.has(part))) {
    throw new Error("Blocked path segment");
  }

  if (BLOCKED_FILENAMES.has(filename) || filename.startsWith(".env")) {
    throw new Error("Blocked file name");
  }

  const allowed = ALLOWED_ROOTS.some((root) =>
    root.endsWith("/") ? clean.startsWith(root) : clean === root,
  );

  if (!allowed) {
    throw new Error(`Path is outside allowed roots: ${ALLOWED_ROOTS.join(", ")}`);
  }

  return clean;
}

function getGithubConfig() {
  const token = process.env.GITHUB_TOKEN || process.env.SITE_ADMIN_GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || DEFAULT_REPO;
  const branch = process.env.GITHUB_BRANCH || DEFAULT_BRANCH;

  if (!token) {
    throw new Error("GITHUB_TOKEN or SITE_ADMIN_GITHUB_TOKEN is not set");
  }

  if (!/^[^/\s]+\/[^/\s]+$/.test(repo)) {
    throw new Error("GITHUB_REPO must be in owner/name format");
  }

  return { token, repo, branch };
}

async function githubFetch(path, options = {}) {
  const { token, repo } = getGithubConfig();
  const response = await fetch(`https://api.github.com/repos/${repo}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : {};

  if (!response.ok) {
    const message = payload?.message || `GitHub request failed: ${response.status}`;
    throw new Error(message);
  }

  return payload;
}

async function getContent(path, ref) {
  const cleanPath = normalizePath(path);
  const params = new URLSearchParams();
  if (ref) params.set("ref", ref);

  const suffix = params.toString() ? `?${params.toString()}` : "";
  const payload = await githubFetch(`/contents/${encodeURIComponent(cleanPath).replace(/%2F/g, "/")}${suffix}`);

  if (Array.isArray(payload)) {
    return {
      type: "directory",
      path: cleanPath,
      entries: payload.map((entry) => ({
        name: entry.name,
        path: entry.path,
        type: entry.type,
        size: entry.size,
        sha: entry.sha,
      })),
    };
  }

  return {
    type: payload.type,
    path: cleanPath,
    name: payload.name,
    sha: payload.sha,
    size: payload.size,
    encoding: payload.encoding,
    contentBase64: payload.content || "",
    downloadUrl: payload.download_url || "",
  };
}

function encodeContent(body) {
  if (typeof body.contentBase64 === "string" && body.contentBase64) {
    const compact = body.contentBase64.replace(/\s/g, "");
    if (!/^[A-Za-z0-9+/=]+$/.test(compact)) {
      throw new Error("contentBase64 is not valid base64");
    }
    if (Math.ceil((compact.length * 3) / 4) > MAX_CONTENT_BYTES) {
      throw new Error(`File is larger than ${MAX_CONTENT_BYTES} bytes`);
    }
    return compact;
  }

  if (typeof body.content !== "string") {
    throw new Error("Provide content or contentBase64");
  }

  const bytes = new TextEncoder().encode(body.content).length;
  if (bytes > MAX_CONTENT_BYTES) {
    throw new Error(`File is larger than ${MAX_CONTENT_BYTES} bytes`);
  }

  return btoa(unescape(encodeURIComponent(body.content)));
}

async function upsertFile(body) {
  const cleanPath = normalizePath(body.path);
  const { branch } = getGithubConfig();
  const targetBranch = body.branch || branch;
  const message =
    body.message || `Update ${cleanPath} through site admin API`;
  const content = encodeContent(body);

  let existingSha = "";
  try {
    const existing = await getContent(cleanPath, targetBranch);
    if (existing.type !== "file") {
      throw new Error(`${cleanPath} is not a file`);
    }
    existingSha = existing.sha;
  } catch (error) {
    if (!String(error.message || "").includes("Not Found")) {
      throw error;
    }
  }

  const payload = await githubFetch(`/contents/${encodeURIComponent(cleanPath).replace(/%2F/g, "/")}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content,
      branch: targetBranch,
      ...(existingSha ? { sha: existingSha } : {}),
    }),
  });

  return {
    path: cleanPath,
    branch: targetBranch,
    commitSha: payload.commit?.sha || "",
    fileSha: payload.content?.sha || "",
    htmlUrl: payload.content?.html_url || "",
  };
}

async function deleteFile(body) {
  const cleanPath = normalizePath(body.path);
  const { branch } = getGithubConfig();
  const targetBranch = body.branch || branch;
  const confirm = String(body.confirm || "");

  if (confirm !== `DELETE ${cleanPath}`) {
    throw new Error(`To delete this file, send confirm: "DELETE ${cleanPath}"`);
  }

  const existing = await getContent(cleanPath, targetBranch);
  if (existing.type !== "file") {
    throw new Error(`${cleanPath} is not a file`);
  }

  const payload = await githubFetch(`/contents/${encodeURIComponent(cleanPath).replace(/%2F/g, "/")}`, {
    method: "DELETE",
    body: JSON.stringify({
      message: body.message || `Delete ${cleanPath} through site admin API`,
      sha: existing.sha,
      branch: targetBranch,
    }),
  });

  return {
    path: cleanPath,
    branch: targetBranch,
    commitSha: payload.commit?.sha || "",
  };
}

export async function GET(req) {
  const auth = requireAuth(req);
  if (!auth.ok) return auth.response;

  const { repo, branch } = getGithubConfig();
  return json({
    ok: true,
    name: "EPF site admin API",
    repo,
    branch,
    allowedRoots: ALLOWED_ROOTS,
    actions: ["get_file", "list_directory", "upsert_file", "delete_file"],
  });
}

export async function POST(req) {
  const auth = requireAuth(req);
  if (!auth.ok) return auth.response;

  try {
    const body = await req.json();
    const action = String(body?.action || "");

    if (action === "get_file" || action === "list_directory") {
      const result = await getContent(body.path, body.ref || body.branch);
      return json({ ok: true, result });
    }

    if (action === "upsert_file") {
      const result = await upsertFile(body);
      return json({ ok: true, result });
    }

    if (action === "delete_file") {
      const result = await deleteFile(body);
      return json({ ok: true, result });
    }

    return json(
      {
        ok: false,
        error:
          "Unsupported action. Use get_file, list_directory, upsert_file, or delete_file.",
      },
      400,
    );
  } catch (error) {
    return json({ ok: false, error: error.message || "Request failed" }, 400);
  }
}
