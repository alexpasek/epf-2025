const http = require("http");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");

process.env.EPF_SITE_ROOT ||= repoRoot;
process.env.SEO_BLOG_AGENT_STORE_PATH ||= path.join(
  repoRoot,
  "seo-blog-agent",
  "data",
  "store.json",
);

const { handle } = require("../seo-blog-agent/routes.cjs");

const port = Number(process.env.PORT || process.env.SEO_AGENT_PORT || 8788);
const apiPrefix = normalizePrefix(process.env.SEO_AGENT_API_PREFIX || "/api/seo-blog-agent");
const allowedOrigins = parseOrigins(
  process.env.SEO_AGENT_ALLOWED_ORIGINS ||
    "https://epfproservices.com,https://www.epfproservices.com,http://localhost:3000,http://localhost:3005,http://127.0.0.1:3000,http://127.0.0.1:3005",
);

function normalizePrefix(value) {
  const clean = `/${String(value || "")
    .trim()
    .replace(/^\/+|\/+$/g, "")}`;
  return clean === "/" ? "/api/seo-blog-agent" : clean;
}

function parseOrigins(value) {
  return String(value || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function originAllowed(origin) {
  if (!origin) return true;
  return allowedOrigins.includes("*") || allowedOrigins.includes(origin);
}

function applyCors(headers, origin) {
  if (!origin && !allowedOrigins.includes("*")) return headers;
  if (!originAllowed(origin)) return headers;
  headers.set("Access-Control-Allow-Origin", allowedOrigins.includes("*") ? "*" : origin);
  headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  headers.set(
    "Access-Control-Allow-Headers",
    "Authorization,Content-Type,X-EPF-Agent-Key",
  );
  headers.set("Access-Control-Max-Age", "86400");
  headers.append("Vary", "Origin");
  return headers;
}

function sendJson(res, status, payload, origin) {
  const headers = applyCors(
    new Headers({
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
    }),
    origin,
  );
  const body = JSON.stringify(payload);
  for (const [key, value] of headers) res.setHeader(key, value);
  res.writeHead(status);
  res.end(body);
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function getSegments(url) {
  if (url.pathname === apiPrefix) return [];
  if (!url.pathname.startsWith(`${apiPrefix}/`)) return null;
  return url.pathname
    .slice(apiPrefix.length + 1)
    .split("/")
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));
}

async function sendWebResponse(res, response, origin) {
  const headers = applyCors(new Headers(response.headers), origin);
  headers.set("Cache-Control", "no-store");
  for (const [key, value] of headers) res.setHeader(key, value);
  res.writeHead(response.status, response.statusText);

  const body = Buffer.from(await response.arrayBuffer());
  res.end(body);
}

async function handleIncoming(req, res) {
  const origin = req.headers.origin || "";
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (!originAllowed(origin)) {
    sendJson(res, 403, { ok: false, error: "Origin is not allowed" }, origin);
    return;
  }

  if (req.method === "OPTIONS") {
    const headers = applyCors(new Headers({ "Cache-Control": "no-store" }), origin);
    for (const [key, value] of headers) res.setHeader(key, value);
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "GET" && url.pathname === "/health") {
    sendJson(res, 200, { ok: true, service: "seo-agent" }, origin);
    return;
  }

  const segments = getSegments(url);
  if (!segments) {
    sendJson(res, 404, { ok: false, error: "Route not found" }, origin);
    return;
  }

  try {
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        headers.set(key, value.join(", "));
      } else if (typeof value === "string") {
        headers.set(key, value);
      }
    }
    headers.delete("host");
    headers.delete("content-length");

    const init = {
      method: req.method,
      headers,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
      init.body = await readRequestBody(req);
    }

    const webRequest = new Request(url.toString(), init);
    const response = await handle(webRequest, segments);
    await sendWebResponse(res, response, origin);
  } catch (error) {
    sendJson(
      res,
      500,
      { ok: false, error: error?.message || "SEO agent request failed" },
      origin,
    );
  }
}

const server = http.createServer((req, res) => {
  handleIncoming(req, res).catch((error) => {
    sendJson(
      res,
      500,
      { ok: false, error: error?.message || "SEO agent request failed" },
      req.headers.origin || "",
    );
  });
});

server.listen(port, () => {
  console.log(`SEO agent service listening on http://localhost:${port}${apiPrefix}`);
});
