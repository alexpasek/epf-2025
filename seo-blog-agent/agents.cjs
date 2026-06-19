const { makeId, nowIso, normalizeService, SERVICES, cityLabel, serviceCityPath } = require("./models.cjs");
const { updateStore, readStore, byId, upsert } = require("./store.cjs");
const { researchKeywords } = require("./google-ads-research.cjs");
const { analyzeCompetition } = require("./competitor-research.cjs");
const { buildDraft } = require("./blog-writer.cjs");
const { publishDraftLocally } = require("./publisher.cjs");
const { DEFAULT_RESEARCH_MODEL } = require("./ai-research.cjs");

const DEFAULT_PUBLISH_BRANCH = "main";

const DEFAULT_AUTOMATION_TOPICS = [
  { service: "popcorn", city: "Mississauga", seedKeywords: ["popcorn ceiling removal cost Mississauga", "painted popcorn ceiling removal Mississauga"] },
  { service: "popcorn", city: "Oakville", seedKeywords: ["popcorn ceiling removal Oakville", "smooth ceiling Oakville"] },
  { service: "popcorn", city: "Burlington", seedKeywords: ["popcorn ceiling removal Burlington", "dustless popcorn removal Burlington"] },
  { service: "drywall_repair", city: "Mississauga", seedKeywords: ["drywall repair Mississauga", "ceiling drywall repair Mississauga"] },
  { service: "drywall_installation", city: "Hamilton", seedKeywords: ["drywall installation Hamilton", "drywall contractor Hamilton"] },
  { service: "baseboard", city: "Mississauga", seedKeywords: ["baseboard installation Mississauga", "baseboard replacement Mississauga"] },
  { service: "painting", city: "Toronto", seedKeywords: ["interior painting Toronto", "house painter Toronto"] },
  { service: "wallpaper", city: "Oakville", seedKeywords: ["wallpaper removal Oakville", "remove wallpaper Oakville"] },
];

function logActivity(store, activity) {
  store.agentActivity = Array.isArray(store.agentActivity) ? store.agentActivity : [];
  const entry = {
    id: makeId("activity"),
    status: "completed",
    created_at: nowIso(),
    ...activity,
  };
  store.agentActivity.unshift(entry);
  store.agentActivity = store.agentActivity.slice(0, 200);
  return entry;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function parseAutomationTopics() {
  const raw = process.env.SEO_BLOG_AGENT_DAILY_TOPICS;
  if (!raw) return DEFAULT_AUTOMATION_TOPICS;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length) return parsed;
  } catch {}
  return DEFAULT_AUTOMATION_TOPICS;
}

function pickAutomationTopic(store) {
  const topics = parseAutomationTopics();
  const completedRuns = Array.isArray(store.automationRuns) ? store.automationRuns.length : 0;
  return topics[completedRuns % topics.length];
}

function hasEnv(name) {
  return Boolean(String(process.env[name] || "").trim());
}

function getConfigStatus() {
  const authConfigured = hasEnv("SEO_BLOG_AGENT_KEY") || hasEnv("SITE_ADMIN_API_KEY");
  const githubTokenConfigured = hasEnv("GITHUB_TOKEN") || hasEnv("SITE_ADMIN_GITHUB_TOKEN");

  return {
    auth: {
      label: "Agent access",
      configured: authConfigured,
      required: process.env.NODE_ENV === "production",
      note: authConfigured
        ? "API/UI token protection is configured."
        : "Development can run without a token; production should set one private token.",
      keys: [
        { key: "SEO_BLOG_AGENT_KEY", configured: hasEnv("SEO_BLOG_AGENT_KEY"), required: false },
        { key: "SITE_ADMIN_API_KEY", configured: hasEnv("SITE_ADMIN_API_KEY"), required: false },
      ],
    },
    aiResearch: {
      label: "AI research",
      configured: hasEnv("OPENAI_API_KEY"),
      required: true,
      note: hasEnv("OPENAI_API_KEY")
        ? "AI competitor discovery and competitor review are enabled."
        : "Without this key, automatic competitor discovery is limited and research falls back to rule-based scoring.",
      model: process.env.OPENAI_RESEARCH_MODEL || DEFAULT_RESEARCH_MODEL,
      keys: [
        { key: "OPENAI_API_KEY", configured: hasEnv("OPENAI_API_KEY"), required: true },
        {
          key: "OPENAI_RESEARCH_MODEL",
          configured: hasEnv("OPENAI_RESEARCH_MODEL"),
          required: false,
          default: DEFAULT_RESEARCH_MODEL,
        },
      ],
    },
    publishing: {
      label: "GitHub publishing",
      configured: githubTokenConfigured,
      required: false,
      note: githubTokenConfigured
        ? "Approved posts can be committed to GitHub."
        : "Publishing writes locally during development until GitHub credentials are set.",
      repo: process.env.GITHUB_REPO || "alexpasek/epf-2025",
      branch: process.env.GITHUB_BRANCH || DEFAULT_PUBLISH_BRANCH,
      keys: [
        { key: "GITHUB_TOKEN", configured: hasEnv("GITHUB_TOKEN"), required: false },
        { key: "SITE_ADMIN_GITHUB_TOKEN", configured: hasEnv("SITE_ADMIN_GITHUB_TOKEN"), required: false },
        { key: "GITHUB_REPO", configured: hasEnv("GITHUB_REPO"), required: false, default: "alexpasek/epf-2025" },
        { key: "GITHUB_BRANCH", configured: hasEnv("GITHUB_BRANCH"), required: false, default: DEFAULT_PUBLISH_BRANCH },
      ],
    },
    automation: {
      label: "Daily automation",
      configured: true,
      required: false,
      note: hasEnv("SEO_BLOG_AGENT_DAILY_TOPICS")
        ? "Custom daily topic rotation is configured."
        : "Using the built-in daily topic rotation. Use an external scheduler to call the endpoint.",
      endpoint: "/api/seo-blog-agent/automation/daily",
      keys: [
        { key: "SEO_BLOG_AGENT_DAILY_TOPICS", configured: hasEnv("SEO_BLOG_AGENT_DAILY_TOPICS"), required: false },
      ],
    },
    site: {
      label: "Site URL",
      configured: hasEnv("NEXT_PUBLIC_SITE_URL"),
      required: false,
      value: process.env.NEXT_PUBLIC_SITE_URL || "https://epfproservices.com",
      keys: [
        { key: "NEXT_PUBLIC_SITE_URL", configured: hasEnv("NEXT_PUBLIC_SITE_URL"), required: false, default: "https://epfproservices.com" },
      ],
    },
  };
}

async function listState() {
  return {
    ...(await readStore()),
    configStatus: getConfigStatus(),
  };
}

async function createJob(input) {
  const serviceKey = normalizeService(input.service);
  const service = SERVICES[serviceKey];
  const city = cityLabel(input.city);
  const competitorUrls = Array.isArray(input.competitor_urls)
    ? input.competitor_urls
    : Array.isArray(input.competitorUrls)
      ? input.competitorUrls
      : [];
  const seedKeywords = Array.isArray(input.seed_keywords)
    ? input.seed_keywords
    : Array.isArray(input.seedKeywords)
      ? input.seedKeywords
      : [];
  const requestedMode = String(input.research_mode || input.researchMode || "auto").toLowerCase();
  const researchMode =
    requestedMode === "competition" || requestedMode === "keyword" || requestedMode === "both"
      ? requestedMode
      : "both";
  const job = {
    id: makeId("job"),
    service: service.label,
    service_key: serviceKey,
    city,
    main_page_url: input.main_page_url || input.mainPageUrl || serviceCityPath(serviceKey, city),
    seed_keywords: seedKeywords,
    competitor_urls: competitorUrls,
    research_mode: researchMode,
    status: "researching",
    created_at: nowIso(),
    approved_at: "",
  };

  await updateStore((store) => {
    store.jobs.unshift(job);
    logActivity(store, {
      agent: "Planner Agent",
      job_id: job.id,
      action: "Created research job",
      outcome: `${job.service} in ${job.city}; mode: ${job.research_mode}; target page: ${job.main_page_url}`,
      metrics: {
        seed_keywords: job.seed_keywords.length,
        competitor_urls: job.competitor_urls.length,
      },
    });
    return job;
  });

  return job;
}

async function runResearch(jobId) {
  return updateStore(async (store) => {
    const job = byId(store.jobs, jobId);
    if (!job) throw new Error("Job not found");
    job.status = "researching";
    const useCompetitors = job.research_mode === "competition" || job.research_mode === "both";
    const useKeywords = job.research_mode === "keyword" || job.research_mode === "both" || !job.competitor_urls?.length;
    const competitionResearch = useCompetitors
      ? await analyzeCompetition(job)
      : { epfPage: null, competitorPages: [], comparison: null };
    const { epfPage, competitorPages, comparison, discovery } = competitionResearch;
    const keywordIdeas = await researchKeywords(job, { competitorPages, includeFallback: useKeywords });
    store.keywordIdeas = store.keywordIdeas.filter((item) => item.job_id !== jobId);
    store.competitorPages = store.competitorPages.filter((item) => item.job_id !== jobId);
    store.epfPages = (store.epfPages || []).filter((item) => item.job_id !== jobId);
    store.competitionComparisons = (store.competitionComparisons || []).filter((item) => item.job_id !== jobId);
    store.keywordIdeas.unshift(...keywordIdeas);
    store.competitorPages.unshift(...competitorPages);
    if (epfPage) store.epfPages.unshift(epfPage);
    if (comparison) store.competitionComparisons.unshift(comparison);
    if (discovery?.urls?.length && !job.competitor_urls?.length) {
      job.competitor_urls = discovery.urls;
      job.competitor_discovery_mode = "automatic_search";
    }
    job.status = "keywords_ready";
    if (useCompetitors) {
      const fetched = competitorPages.filter((page) => !page.fetch_error).length;
      const failed = competitorPages.length - fetched;
      logActivity(store, {
        agent: "Competition Research Agent",
        job_id: job.id,
        action: "Compared EPF target page to competitor pages",
        outcome: `${discovery?.urls?.length && discovery?.queries?.length ? `Automatic search found ${discovery.urls.length} competitor URL${discovery.urls.length === 1 ? "" : "s"}. ` : ""}${epfPage?.fetch_error ? "EPF page fetch issue. " : `EPF page inspected (${epfPage?.word_count || 0} words). `}${fetched} competitor page${fetched === 1 ? "" : "s"} inspected; ${failed} fetch issue${failed === 1 ? "" : "s"}. ${comparison?.summary || ""}`,
        metrics: {
          discovery_mode: comparison?.discovery_mode || "manual_urls",
          ai_research: comparison?.ai_research?.used_ai ? "used" : "fallback",
          discovered_urls: discovery?.urls?.length || 0,
          accepted_urls: comparison?.accepted_competitor_urls?.length || 0,
          rejected_urls: comparison?.rejected_competitor_urls?.length || 0,
          epf_word_count: epfPage?.word_count || 0,
          avg_competitor_word_count: comparison?.avg_competitor_word_count || 0,
          epf_vs_competitor_words: comparison?.word_count_delta || 0,
          inspected: fetched,
          failed,
          urls: competitorPages.length,
        },
      });
    }
    logActivity(store, {
      agent: "Keyword Research Agent",
      job_id: job.id,
      action: "Scored keyword opportunities",
      outcome: `${keywordIdeas.length} keyword idea${keywordIdeas.length === 1 ? "" : "s"} scored. Selected: ${keywordIdeas.find((item) => item.selected)?.keyword || "none"}.`,
      metrics: {
        keyword_ideas: keywordIdeas.length,
        competitor_angles: keywordIdeas.filter((item) => item.source === "competitor_angle").length,
      },
    });
    return { job, keywordIdeas, competitorPages };
  });
}

async function createDraft(jobId) {
  return updateStore((store) => {
    const job = byId(store.jobs, jobId);
    if (!job) throw new Error("Job not found");
    const keywordIdeas = store.keywordIdeas.filter((item) => item.job_id === jobId);
    const competitorPages = store.competitorPages.filter((item) => item.job_id === jobId);
    const comparison = (store.competitionComparisons || []).find((item) => item.job_id === jobId);
    const draft = buildDraft(job, keywordIdeas, competitorPages, comparison);
    store.blogDrafts = store.blogDrafts.filter((item) => item.job_id !== jobId);
    store.blogDrafts.unshift(draft);
    job.status = "needs_approval";
    logActivity(store, {
      agent: "Blog Writer Agent",
      job_id: job.id,
      draft_id: draft.id,
      action: "Created blog draft",
      outcome: `${draft.title}; ${draft.estimated_word_count || 0} estimated words; ${draft.blog_type}; ${draft.search_intent}.`,
      metrics: {
        estimated_word_count: draft.estimated_word_count || 0,
        internal_links: draft.internal_links?.length || 0,
        faqs: draft.faq?.length || 0,
        image_prompts: draft.image_plan?.length || 0,
      },
    });
    return { job, draft };
  });
}

async function approveDraft(draftId) {
  return updateStore((store) => {
    const draft = byId(store.blogDrafts, draftId);
    if (!draft) throw new Error("Draft not found");
    draft.status = "approved";
    draft.approved_by_user = true;
    draft.approved_at = nowIso();
    const job = byId(store.jobs, draft.job_id);
    if (job) {
      job.status = "approved";
      job.approved_at = draft.approved_at;
    }
    logActivity(store, {
      agent: "Review Agent",
      job_id: draft.job_id,
      draft_id: draft.id,
      action: "Approved draft",
      outcome: `${draft.title} approved for publishing.`,
    });
    return draft;
  });
}

async function rejectDraft(draftId) {
  return updateStore((store) => {
    const draft = byId(store.blogDrafts, draftId);
    if (!draft) throw new Error("Draft not found");
    draft.status = "rejected";
    draft.approved_by_user = false;
    draft.rejected_at = nowIso();
    logActivity(store, {
      agent: "Review Agent",
      job_id: draft.job_id,
      draft_id: draft.id,
      action: "Rejected draft",
      outcome: `${draft.title} was rejected and should be revised before publishing.`,
    });
    return draft;
  });
}

async function publishDraft(draftId) {
  return updateStore(async (store) => {
    const draft = byId(store.blogDrafts, draftId);
    if (!draft) throw new Error("Draft not found");
    const result = await publishDraftLocally(draft);
    draft.status = "published";
    draft.published_url = result.publishedUrl;
    const job = byId(store.jobs, draft.job_id);
    if (job) job.status = "published";
    upsert(store.publishLogs, result.log);
    upsert(store.gmbDrafts, result.gmbDraft);
    logActivity(store, {
      agent: "Publisher Agent",
      job_id: draft.job_id,
      draft_id: draft.id,
      action: "Published approved draft",
      outcome: `${draft.title} published at ${result.publishedUrl}.`,
      metrics: {
        mode: result.log.website_response?.mode || "local",
      },
    });
    logActivity(store, {
      agent: "GBP Handoff Agent",
      job_id: draft.job_id,
      draft_id: draft.id,
      action: "Prepared GBP draft",
      outcome: `GBP post draft created for ${draft.city} ${draft.service}.`,
      metrics: {
        gmb_draft_id: result.gmbDraft.id,
      },
    });
    return { draft, publishLog: result.log, gmbDraft: result.gmbDraft };
  });
}

async function runDailyAutomation(input = {}) {
  const force = Boolean(input.force);
  const date = todayKey();
  const existingStore = await readStore();
  const existingRun = (existingStore.automationRuns || []).find((run) => run.date === date && run.status === "draft_ready");
  if (existingRun && !force) {
    return {
      skipped: true,
      reason: "Daily automation already created a draft today",
      run: existingRun,
    };
  }

  const topic = input.topic || pickAutomationTopic(existingStore);
  const serviceKey = normalizeService(topic.service);
  const city = cityLabel(topic.city);
  const runId = makeId("auto");
  const seedKeywords = Array.isArray(topic.seedKeywords)
    ? topic.seedKeywords
    : Array.isArray(topic.seed_keywords)
      ? topic.seed_keywords
      : [`${SERVICES[serviceKey].label} ${city}`];

  await updateStore((store) => {
    store.automationRuns = Array.isArray(store.automationRuns) ? store.automationRuns : [];
    const run = {
      id: runId,
      date,
      status: "started",
      topic: {
        service: serviceKey,
        city,
        seed_keywords: seedKeywords,
      },
      created_at: nowIso(),
      job_id: "",
      draft_id: "",
      error: "",
    };
    store.automationRuns.unshift(run);
    store.automationRuns = store.automationRuns.slice(0, 100);
    logActivity(store, {
      agent: "Daily Automation Agent",
      action: "Started daily competition research",
      outcome: `${SERVICES[serviceKey].label} in ${city}; AI competition research will create a draft for review.`,
      metrics: {
        date,
        service: serviceKey,
        city,
      },
    });
    return run;
  });

  try {
    const job = await createJob({
      service: serviceKey,
      city,
      mainPageUrl: topic.mainPageUrl || topic.main_page_url || serviceCityPath(serviceKey, city),
      researchMode: "both",
      seedKeywords,
      competitorUrls: [],
    });
    const research = await runResearch(job.id);
    const draftResult = await createDraft(job.id);
    await updateStore((store) => {
      const run = byId(store.automationRuns || [], runId);
      if (run) {
        run.status = "draft_ready";
        run.job_id = job.id;
        run.draft_id = draftResult.draft.id;
        run.completed_at = nowIso();
        run.selected_keyword = research.keywordIdeas?.find((item) => item.selected)?.keyword || "";
        run.blog_title = draftResult.draft.title;
      }
      logActivity(store, {
        agent: "Daily Automation Agent",
        job_id: job.id,
        draft_id: draftResult.draft.id,
        action: "Completed daily automation",
        outcome: `Draft created for review: ${draftResult.draft.title}`,
        metrics: {
          date,
          status: "draft_ready",
        },
      });
      return run;
    });
    return {
      skipped: false,
      run_id: runId,
      job,
      research,
      draft: draftResult.draft,
    };
  } catch (error) {
    await updateStore((store) => {
      const run = byId(store.automationRuns || [], runId);
      if (run) {
        run.status = "failed";
        run.error = error.message || "Daily automation failed";
        run.completed_at = nowIso();
      }
      logActivity(store, {
        agent: "Daily Automation Agent",
        action: "Daily automation failed",
        status: "failed",
        outcome: error.message || "Daily automation failed",
        metrics: {
          date,
          service: serviceKey,
          city,
        },
      });
      return run;
    });
    throw error;
  }
}

module.exports = {
  getConfigStatus,
  listState,
  createJob,
  runResearch,
  createDraft,
  approveDraft,
  rejectDraft,
  publishDraft,
  runDailyAutomation,
};
