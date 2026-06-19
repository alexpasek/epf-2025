export const runtime = "edge";
export const dynamic = "force-dynamic";

const API_BASE =
  process.env.SEO_AGENT_API_URL ||
  process.env.NEXT_PUBLIC_SEO_AGENT_API_URL ||
  "";

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function getTargetUrl(req, path = []) {
  if (!API_BASE) return null;

  const incoming = new URL(req.url);
  const base = API_BASE.replace(/\/+$/, "");
  const cleanPath = path.filter(Boolean).map(encodeURIComponent).join("/");
  const target = new URL(`${base}/${cleanPath}`);
  target.search = incoming.search;
  return target;
}

async function proxy(req, context) {
  const params = await context.params;
  const target = getTargetUrl(req, params?.path || []);

  if (!target) {
    return json(
      {
        ok: false,
        error:
          "SEO_AGENT_API_URL is not configured. Deploy the separate SEO agent backend and set the site variable to its API URL.",
      },
      501,
    );
  }

  const headers = new Headers(req.headers);
  headers.delete("host");
  headers.delete("content-length");

  const upstream = await fetch(target, {
    method: req.method,
    headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req.body,
    redirect: "manual",
  });

  const responseHeaders = new Headers(upstream.headers);
  responseHeaders.set("Cache-Control", "no-store");
  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: responseHeaders,
  });
}

export async function GET(req, context) {
  return proxy(req, context);
}

export async function POST(req, context) {
  return proxy(req, context);
}

export async function OPTIONS() {
  return new Response(null, { status: 204 });
}
