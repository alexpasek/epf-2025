"use client";

import { useEffect, useMemo, useState } from "react";

const API = "/api/seo-blog-agent";

const SERVICE_OPTIONS = [
  ["popcorn", "Popcorn ceiling removal"],
  ["drywall_repair", "Drywall repair"],
  ["drywall_installation", "Drywall installation"],
  ["painting", "Interior painting"],
  ["wallpaper", "Wallpaper removal"],
  ["baseboard", "Baseboard installation"],
];

const SERVICE_PATHS = {
  popcorn: "/popcorn-ceiling-removal",
  drywall_repair: "/services/drywall-repair",
  drywall_installation: "/services/drywall-installation",
  painting: "/services/interior-painting",
  wallpaper: "/services/wallpaper-removal",
  baseboard: "/services/baseboard-installation",
};

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function servicePath(service, city) {
  const base = SERVICE_PATHS[service] || SERVICE_PATHS.popcorn;
  const citySlug = slugify(city);
  if (!citySlug || citySlug === "gta") return `${base}/`;
  if (service === "painting" || service === "wallpaper") return `${base}/`;
  return `${base}/${citySlug}/`;
}

function splitLines(value) {
  return String(value || "")
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function StatusPill({ status }) {
  return (
    <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
      {status || "unknown"}
    </span>
  );
}

function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function AgentActivityCard({ activity }) {
  return (
    <article className="rounded-md border border-slate-800 bg-slate-950 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-100">{activity.agent}</h3>
          <p className="mt-1 text-sm text-slate-300">{activity.action}</p>
        </div>
        <div className="text-right">
          <StatusPill status={activity.status} />
          <p className="mt-2 text-xs text-slate-500">{formatDateTime(activity.created_at)}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{activity.outcome}</p>
      {activity.metrics ? (
        <dl className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(activity.metrics).map(([key, value]) => (
            <div key={key} className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2">
              <dt className="text-xs uppercase tracking-[0.12em] text-slate-500">
                {key.replace(/_/g, " ")}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-200">{String(value)}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <p className="mt-3 text-xs text-slate-500">
        {activity.job_id ? `Job: ${activity.job_id}` : null}
        {activity.draft_id ? ` · Draft: ${activity.draft_id}` : null}
      </p>
    </article>
  );
}

function ConfigPill({ configured, required }) {
  const label = configured ? "set" : required ? "missing" : "optional";
  const className = configured
    ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100"
    : required
      ? "border-red-300/40 bg-red-300/10 text-red-100"
      : "border-amber-300/40 bg-amber-300/10 text-amber-100";

  return (
    <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${className}`}>
      {label}
    </span>
  );
}

function ConfigStatusCard({ configStatus }) {
  if (!configStatus) return null;

  const sections = [
    configStatus.auth,
    configStatus.aiResearch,
    configStatus.publishing,
    configStatus.automation,
    configStatus.site,
  ].filter(Boolean);

  return (
    <section className="rounded-lg border border-slate-800 bg-slate-900 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold">Agent Setup</h2>
          <p className="mt-1 text-sm text-slate-400">
            Required keys and feature status. Secret values are never shown here.
          </p>
        </div>
        {configStatus.aiResearch?.model ? (
          <span className="rounded-md border border-blue-300/30 bg-blue-300/10 px-3 py-1.5 text-sm font-semibold text-blue-100">
            AI model: {configStatus.aiResearch.model}
          </span>
        ) : null}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.label} className="rounded-md border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-100">{section.label}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">{section.note}</p>
              </div>
              <ConfigPill configured={section.configured} required={section.required} />
            </div>
            {section.endpoint ? (
              <p className="mt-2 break-all rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-300">
                {section.endpoint}
              </p>
            ) : null}
            {section.repo ? (
              <p className="mt-2 text-xs text-slate-500">
                Repo: {section.repo} · Branch: {section.branch}
              </p>
            ) : null}
            {section.value ? (
              <p className="mt-2 text-xs text-slate-500">Value: {section.value}</p>
            ) : null}
            <dl className="mt-3 space-y-2">
              {(section.keys || []).map((item) => (
                <div key={item.key} className="flex flex-wrap items-center justify-between gap-2">
                  <dt className="font-mono text-xs text-slate-300">{item.key}</dt>
                  <dd className="flex items-center gap-2 text-xs text-slate-500">
                    {item.default ? <span>default {item.default}</span> : null}
                    <ConfigPill configured={item.configured} required={item.required} />
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function SeoBlogAgentClient() {
  const [token, setToken] = useState("");
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    service: "popcorn",
    city: "Oakville",
    mainPageUrl: "/popcorn-ceiling-removal/oakville/",
    researchMode: "both",
    seedKeywords:
      "painted popcorn ceiling removal, dustless popcorn removal, smooth ceiling Oakville",
    competitorUrls: "",
  });

  useEffect(() => {
    setToken(window.localStorage.getItem("seoBlogAgentToken") || "");
  }, []);

  useEffect(() => {
    if (token) window.localStorage.setItem("seoBlogAgentToken", token);
  }, [token]);

  const headers = useMemo(
    () => ({
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }),
    [token],
  );

  async function request(path = "", options = {}) {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(`${API}${path}`, {
        ...options,
        headers: { ...headers, ...(options.headers || {}) },
        cache: "no-store",
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `Request failed: ${response.status}`);
      }
      return payload.result;
    } catch (error) {
      setMessage(error.message || "Request failed");
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function refresh() {
    const result = await request();
    setState(result);
  }

  useEffect(() => {
    refresh().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers.Authorization]);

  async function createJob(event) {
    event.preventDefault();
    await request("/jobs", {
      method: "POST",
      body: JSON.stringify({
        service: form.service,
        city: form.city,
        mainPageUrl: form.mainPageUrl,
        researchMode: form.researchMode,
        seedKeywords: splitLines(form.seedKeywords),
        competitorUrls: splitLines(form.competitorUrls),
      }),
    });
    setMessage("Research job created.");
    await refresh();
  }

  async function action(path, success) {
    await request(path, { method: "POST" });
    setMessage(success);
    await refresh();
  }

  async function runDailyAutomation() {
    await request("/automation/daily", {
      method: "POST",
      body: JSON.stringify({ force: true }),
    });
    setMessage("Daily automation run created a research job and draft.");
    await refresh();
  }

  const jobs = state?.jobs || [];
  const drafts = state?.blogDrafts || [];
  const keywords = state?.keywordIdeas || [];
  const competitors = state?.competitorPages || [];
  const epfPages = state?.epfPages || [];
  const comparisons = state?.competitionComparisons || [];
  const gmbDrafts = state?.gmbDrafts || [];
  const agentActivity = state?.agentActivity || [];
  const automationRuns = state?.automationRuns || [];
  const configStatus = state?.configStatus;

  function updateService(nextService) {
    setForm((current) => ({
      ...current,
      service: nextService,
      mainPageUrl: servicePath(nextService, current.city),
    }));
  }

  function updateCity(nextCity) {
    setForm((current) => ({
      ...current,
      city: nextCity,
      mainPageUrl: servicePath(current.service, nextCity),
    }));
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 border-b border-slate-800 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-300">
              Hidden internal tool
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">EPF SEO Blog Agent</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Research keywords, inspect competitor gaps, create blog drafts, approve manually,
              publish to the existing blog store, and prepare a GBP post draft.
            </p>
          </div>
          <label className="w-full max-w-sm text-sm text-slate-300">
            API token
            <input
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="SEO_BLOG_AGENT_KEY or SITE_ADMIN_API_KEY"
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-red-400"
              type="password"
            />
          </label>
        </header>

        {message ? (
          <div className="mb-5 rounded-md border border-amber-300/40 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
            {message}
          </div>
        ) : null}

        <section className="grid gap-5 lg:grid-cols-[420px_1fr]">
          <form
            onSubmit={createJob}
            className="rounded-lg border border-slate-800 bg-slate-900 p-5"
          >
            <h2 className="text-lg font-bold">Create Research Job</h2>
            <div className="mt-4 grid gap-4">
              <label className="text-sm text-slate-300">
                Service
                <select
                  value={form.service}
                  onChange={(event) => updateService(event.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                >
                  {SERVICE_OPTIONS.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm text-slate-300">
                City or service area
                <input
                  value={form.city}
                  onChange={(event) => updateCity(event.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                />
              </label>
              <label className="text-sm text-slate-300">
                Research mode
                <select
                  value={form.researchMode}
                  onChange={(event) => setForm({ ...form, researchMode: event.target.value })}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                >
                  <option value="both">Keyword + competition research</option>
                  <option value="keyword">New keyword research only</option>
                  <option value="competition">Competition research only</option>
                  <option value="auto">Automatic research</option>
                </select>
              </label>
              <label className="text-sm text-slate-300">
                Main page URL
                <input
                  value={form.mainPageUrl}
                  onChange={(event) => setForm({ ...form, mainPageUrl: event.target.value })}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                />
              </label>
              <label className="text-sm text-slate-300">
                Seed keywords
                <textarea
                  value={form.seedKeywords}
                  onChange={(event) => setForm({ ...form, seedKeywords: event.target.value })}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                />
              </label>
              <label className="text-sm text-slate-300">
                Competitor URLs
                <textarea
                  value={form.competitorUrls}
                  onChange={(event) => setForm({ ...form, competitorUrls: event.target.value })}
                  rows={4}
                  placeholder="Optional. Leave empty and the agent will search automatically."
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                />
                <span className="mt-1 block text-xs text-slate-500">
                  Manual URLs override automatic competitor discovery.
                </span>
              </label>
              <button
                disabled={loading}
                className="rounded-md bg-red-600 px-4 py-2 font-bold text-white disabled:opacity-50"
              >
                {loading ? "Working..." : "Create job"}
              </button>
            </div>
          </form>

          <div className="space-y-5">
            <ConfigStatusCard configStatus={configStatus} />

            <section className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold">Daily Automation</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Runs AI competition research, creates a draft, and waits for approval.
                  </p>
                </div>
                <button
                  disabled={loading}
                  onClick={() => runDailyAutomation().catch(() => {})}
                  className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-bold text-white disabled:opacity-50"
                >
                  Run now
                </button>
              </div>
              <div className="mt-4 space-y-3">
                {automationRuns.length ? automationRuns.slice(0, 5).map((run) => (
                  <article key={run.id} className="rounded-md border border-slate-800 bg-slate-950 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{run.blog_title || `${run.topic?.service || "service"} - ${run.topic?.city || ""}`}</h3>
                        <p className="mt-1 text-xs text-slate-500">
                          {run.date} · {run.job_id || "no job yet"} · {run.draft_id || "no draft yet"}
                        </p>
                      </div>
                      <StatusPill status={run.status} />
                    </div>
                    {run.selected_keyword ? (
                      <p className="mt-2 text-sm text-slate-300">Selected keyword: {run.selected_keyword}</p>
                    ) : null}
                    {run.error ? (
                      <p className="mt-2 text-sm text-amber-300">{run.error}</p>
                    ) : null}
                  </article>
                )) : (
                  <p className="text-sm text-slate-400">No automation runs yet.</p>
                )}
              </div>
            </section>

            <section className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold">Agent Outcomes</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Latest actions from the planner, research, writer, review, publish, and GBP agents.
                  </p>
                </div>
                <span className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300">
                  {agentActivity.length} logged
                </span>
              </div>
              <div className="mt-4 grid gap-3">
                {agentActivity.length ? agentActivity.slice(0, 8).map((activity) => (
                  <AgentActivityCard key={activity.id} activity={activity} />
                )) : (
                  <p className="text-sm text-slate-400">
                    No agent activity yet. Create a job, run research, then create a draft to see outcomes here.
                  </p>
                )}
              </div>
            </section>

            <section className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold">Jobs</h2>
                <button
                  onClick={() => refresh().catch(() => {})}
                  className="rounded-md border border-slate-700 px-3 py-1.5 text-sm"
                >
                  Refresh
                </button>
              </div>
              <div className="mt-4 space-y-3">
                {jobs.length ? jobs.map((job) => (
                  <article key={job.id} className="rounded-md border border-slate-800 bg-slate-950 p-4">
                    {(() => {
                      const epfPage = epfPages.find((item) => item.job_id === job.id);
                      const comparison = comparisons.find((item) => item.job_id === job.id);
                      return (
                        <>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{job.service} - {job.city}</h3>
                        <p className="mt-1 text-xs text-slate-400">
                          {job.id} · {job.research_mode || "keyword"} · {job.main_page_url}
                        </p>
                      </div>
                      <StatusPill status={job.status} />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button onClick={() => action(`/jobs/${job.id}/research`, "Research complete.")} className="rounded-md bg-slate-800 px-3 py-1.5 text-sm">Run research</button>
                      <button onClick={() => action(`/jobs/${job.id}/draft`, "Draft created.")} className="rounded-md bg-slate-800 px-3 py-1.5 text-sm">Create draft</button>
                    </div>
                    {comparison ? (
                      <section className="mt-4 rounded-md border border-blue-400/20 bg-blue-400/10 p-4">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h4 className="text-sm font-bold text-blue-100">EPF vs Competition</h4>
                            <p className="mt-1 text-sm leading-6 text-slate-300">{comparison.summary}</p>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="rounded-md bg-slate-950 px-3 py-2">
                              <p className="text-slate-500">EPF words</p>
                              <p className="mt-1 font-bold text-slate-100">{comparison.epf_word_count}</p>
                            </div>
                            <div className="rounded-md bg-slate-950 px-3 py-2">
                              <p className="text-slate-500">Avg comp.</p>
                              <p className="mt-1 font-bold text-slate-100">{comparison.avg_competitor_word_count}</p>
                            </div>
                            <div className="rounded-md bg-slate-950 px-3 py-2">
                              <p className="text-slate-500">Delta</p>
                              <p className="mt-1 font-bold text-slate-100">{comparison.word_count_delta}</p>
                            </div>
                          </div>
                        </div>
                        {comparison.competitor_covered_but_epf_missing?.length ? (
                          <div className="mt-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">Support gaps to cover in blog</p>
                            <ul className="mt-2 grid gap-1 text-sm text-slate-300 md:grid-cols-2">
                              {comparison.competitor_covered_but_epf_missing.slice(0, 6).map((item) => (
                                <li key={item.gap}>{item.gap} ({item.competitor_count})</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {comparison.search_queries?.length ? (
                          <div className="mt-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">Automatic search queries</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              {comparison.search_queries.map((query) => (
                                <li key={query}>{query}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        <div className="mt-3 rounded-md border border-slate-700 bg-slate-950 p-3">
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">AI research</p>
                          {comparison.ai_research?.used_ai ? (
                            <div className="mt-2 space-y-2 text-sm text-slate-300">
                              <p>{comparison.ai_summary || comparison.ai_research.summary}</p>
                              <p className="text-xs text-slate-500">Model: {comparison.ai_research.model}</p>
                            </div>
                          ) : (
                            <p className="mt-2 text-sm text-amber-200">
                              AI fallback active: {comparison.ai_research?.error || "OPENAI_API_KEY is not set"}
                            </p>
                          )}
                        </div>
                        {comparison.discovered_competitor_urls?.length ? (
                          <div className="mt-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">Discovered candidate pages</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              {comparison.discovered_competitor_urls.map((url) => (
                                <li key={url} className="break-all">{url}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {comparison.accepted_competitor_urls?.length ? (
                          <div className="mt-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-200">Accepted competitors used</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              {comparison.accepted_competitor_urls.map((url) => (
                                <li key={url} className="break-all">{url}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {comparison.rejected_competitor_urls?.length ? (
                          <details className="mt-3 rounded-md border border-slate-700 p-3">
                            <summary className="cursor-pointer text-xs font-bold uppercase tracking-[0.12em] text-amber-200">
                              Rejected links for correction
                            </summary>
                            <ul className="mt-2 space-y-2 text-sm text-slate-300">
                              {comparison.rejected_competitor_urls.map((item) => (
                                <li key={item.url}>
                                  <span className="break-all">{item.url}</span>
                                  <span className="block text-xs text-slate-500">
                                    Score {item.relevance_score || 0}: {item.reason || item.relevance_reasons?.join(", ") || "Rejected"}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ) : null}
                        {comparison.ai_notes_for_human_review?.length ? (
                          <div className="mt-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">Human review notes</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              {comparison.ai_notes_for_human_review.map((note) => (
                                <li key={note}>{note}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {comparison.search_errors?.length ? (
                          <div className="mt-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-200">Search issues</p>
                            <ul className="mt-2 space-y-1 text-sm text-amber-200">
                              {comparison.search_errors.map((error) => (
                                <li key={error}>{error}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {comparison.recommended_blog_angles?.length ? (
                          <div className="mt-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-200">Recommended blog angles</p>
                            <ul className="mt-2 space-y-1 text-sm text-slate-300">
                              {comparison.recommended_blog_angles.slice(0, 5).map((angle) => (
                                <li key={angle}>{angle}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {comparison.epf_fetch_error ? (
                          <p className="mt-3 text-sm text-amber-300">EPF page fetch issue: {comparison.epf_fetch_error}</p>
                        ) : null}
                      </section>
                    ) : epfPage ? (
                      <section className="mt-4 rounded-md border border-slate-800 bg-slate-900 p-4">
                        <h4 className="text-sm font-bold text-slate-300">EPF target page</h4>
                        <p className="mt-1 text-sm text-slate-400">{epfPage.title || epfPage.url}</p>
                        <p className="mt-1 text-xs text-slate-500">{epfPage.word_count || 0} words</p>
                      </section>
                    ) : null}
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-300">Top keywords</h4>
                        <ul className="mt-2 space-y-1 text-sm text-slate-300">
                          {keywords.filter((item) => item.job_id === job.id).slice(0, 6).map((item) => (
                            <li key={item.id} className="flex justify-between gap-3">
                              <span>{item.keyword}</span>
                              <span className="text-red-300">{item.intent_score}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-300">Competitor gaps</h4>
                        <ul className="mt-2 space-y-1 text-sm text-slate-300">
                          {competitors.filter((item) => item.job_id === job.id).slice(0, 3).map((item) => (
                            <li key={item.id}>
                              {item.url}: {(item.gaps_found || []).slice(0, 3).join(", ") || "No obvious gaps"}
                              {item.fetch_error ? <span className="text-amber-300"> ({item.fetch_error})</span> : null}
                              {(item.keyword_angles || []).length ? (
                                <span className="block text-xs text-slate-500">
                                  Angles: {(item.keyword_angles || []).slice(0, 2).join("; ")}
                                </span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <details className="mt-4 rounded-md border border-slate-800 p-3">
                      <summary className="cursor-pointer text-sm font-bold text-slate-200">Agent activity for this job</summary>
                      <div className="mt-3 space-y-3">
                        {agentActivity.filter((activity) => activity.job_id === job.id).length ? (
                          agentActivity
                            .filter((activity) => activity.job_id === job.id)
                            .map((activity) => (
                              <AgentActivityCard key={activity.id} activity={activity} />
                            ))
                        ) : (
                          <p className="text-sm text-slate-400">No agent actions logged for this job yet.</p>
                        )}
                      </div>
                    </details>
                        </>
                      );
                    })()}
                  </article>
                )) : (
                  <p className="text-sm text-slate-400">No jobs yet.</p>
                )}
              </div>
            </section>

            <section className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-lg font-bold">Drafts Awaiting Review</h2>
              <div className="mt-4 space-y-4">
                {drafts.length ? drafts.map((draft) => (
                  <article key={draft.id} className="rounded-md border border-slate-800 bg-slate-950 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold">{draft.title}</h3>
                        <p className="mt-1 text-sm text-slate-400">/blog/{draft.slug}/</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-red-300">
                          {draft.blog_type || "Blog"} · {draft.search_intent || "Search intent"} · {draft.estimated_word_count || 0} words
                        </p>
                      </div>
                      <StatusPill status={draft.status} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{draft.meta_description}</p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-300">Internal links</h4>
                        <ul className="mt-2 space-y-1 text-sm text-slate-300">
                          {(draft.internal_links || []).map((link) => (
                            <li key={link.href}>{link.anchor} - {link.href}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-300">Image prompt</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{draft.image_prompt}</p>
                        {(draft.image_plan || []).length ? (
                          <ul className="mt-2 space-y-1 text-xs text-slate-400">
                            {draft.image_plan.map((image) => (
                              <li key={image.file_name}>{image.role}: {image.file_name}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                    <details className="mt-4 rounded-md border border-slate-800 p-3">
                      <summary className="cursor-pointer text-sm font-bold text-slate-200">Preview content</summary>
                      <div className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                        {(draft.content || []).map((block, index) => (
                          typeof block === "string"
                            ? <p key={index}>{block}</p>
                            : <div key={index} dangerouslySetInnerHTML={{ __html: block.html || "" }} />
                        ))}
                      </div>
                    </details>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button onClick={() => action(`/drafts/${draft.id}/approve`, "Draft approved.")} className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-bold">Approve</button>
                      <button onClick={() => action(`/drafts/${draft.id}/publish`, "Draft published to blog store.")} className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-bold">Publish</button>
                      <button onClick={() => action(`/drafts/${draft.id}/reject`, "Draft rejected.")} className="rounded-md bg-slate-800 px-3 py-1.5 text-sm">Reject</button>
                    </div>
                  </article>
                )) : (
                  <p className="text-sm text-slate-400">No drafts yet.</p>
                )}
              </div>
            </section>

            <section className="rounded-lg border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-lg font-bold">GBP Draft Handoff</h2>
              <div className="mt-3 space-y-3">
                {gmbDrafts.length ? gmbDrafts.map((draft) => (
                  <pre key={draft.id} className="overflow-auto rounded-md bg-slate-950 p-3 text-sm text-slate-300">{draft.body}</pre>
                )) : (
                  <p className="text-sm text-slate-400">Published blog drafts will appear here as GBP post drafts.</p>
                )}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
