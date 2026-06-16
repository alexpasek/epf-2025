const agent = require("./agents.cjs");

function unauthorized() {
  return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
}

function requireAuth(req) {
  const expected = process.env.SEO_BLOG_AGENT_KEY || process.env.SITE_ADMIN_API_KEY || "";
  if (!expected) {
    return process.env.NODE_ENV === "production"
      ? { ok: false, reason: "SEO_BLOG_AGENT_KEY or SITE_ADMIN_API_KEY is not set" }
      : { ok: true };
  }
  const auth = req.headers.get("authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "").trim();
  const headerToken = req.headers.get("x-epf-agent-key") || "";
  if (token === expected || headerToken === expected) return { ok: true };
  return { ok: false };
}

async function readBody(req) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

async function handle(req, segments = []) {
  const auth = requireAuth(req);
  if (!auth.ok) return unauthorized();

  try {
    const method = req.method;
    const path = segments.filter(Boolean);

    if (method === "GET" && path.length === 0) {
      return Response.json({ ok: true, result: await agent.listState() });
    }

    if (method === "GET" && path[0] === "config") {
      return Response.json({ ok: true, result: agent.getConfigStatus() });
    }

    if (method === "POST" && path[0] === "jobs" && path.length === 1) {
      return Response.json({ ok: true, result: await agent.createJob(await readBody(req)) });
    }

    if (method === "POST" && path[0] === "automation" && path[1] === "daily") {
      return Response.json({ ok: true, result: await agent.runDailyAutomation(await readBody(req)) });
    }

    if (method === "POST" && path[0] === "jobs" && path[2] === "research") {
      return Response.json({ ok: true, result: await agent.runResearch(path[1]) });
    }

    if (method === "POST" && path[0] === "jobs" && path[2] === "draft") {
      return Response.json({ ok: true, result: await agent.createDraft(path[1]) });
    }

    if (method === "POST" && path[0] === "drafts" && path[2] === "approve") {
      return Response.json({ ok: true, result: await agent.approveDraft(path[1]) });
    }

    if (method === "POST" && path[0] === "drafts" && path[2] === "reject") {
      return Response.json({ ok: true, result: await agent.rejectDraft(path[1]) });
    }

    if (method === "POST" && path[0] === "drafts" && path[2] === "publish") {
      return Response.json({ ok: true, result: await agent.publishDraft(path[1]) });
    }

    return Response.json({ ok: false, error: "Route not found" }, { status: 404 });
  } catch (error) {
    return Response.json(
      { ok: false, error: error.message || "SEO blog agent request failed" },
      { status: 400 },
    );
  }
}

module.exports = {
  handle,
};
