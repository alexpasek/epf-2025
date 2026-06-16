const { makeId } = require("./models.cjs");
const { runAiCompetitionResearch } = require("./ai-research.cjs");

const GAP_CHECKS = [
  "Painted vs unpainted texture difficulty",
  "Dust control and home protection",
  "Skim coat vs basic scrape",
  "Basement ceiling issues",
  "Drywall repair after removal",
  "Primer and paint after removal",
  "Timeline and project disruption",
  "What photos to send for a quote",
];

const BLOCKED_HOST_PARTS = [
  "epfproservices.com",
  "google.",
  "doodles.google",
  "bing.com",
  "duckduckgo.com",
  "facebook.com",
  "instagram.com",
  "youtube.com",
  "youtu.be",
  "tiktok.com",
  "linkedin.com",
  "pinterest.",
  "homestars.com",
  "yelp.",
  "angi.",
  "homeadvisor.",
  "trustedpros.",
  "bbb.org",
  "yellowpages.",
  "mapquest.",
  "wikipedia.org",
  "reddit.com",
  "quora.com",
  "amazon.",
  "walmart.",
  "homedepot.",
  "rona.",
  "homehardware.",
  "thespruce.",
  "architecturaldigest.",
  "bobvila.",
  "bhg.",
  "homenish.",
  "epichomeideas.",
  "upgradedhome.",
  "popcornflix.",
  "popcorntime.",
  "poppacorn.",
  "torontopopcorncompany.",
  "miniplay.",
];

const SERVICE_NEEDLES = {
  popcorn: [
    "popcorn ceiling",
    "popcorn ceiling removal",
    "stucco ceiling",
    "stucco ceiling removal",
    "textured ceiling",
    "ceiling texture",
    "ceiling removal",
    "smooth ceiling",
    "ceiling refinishing",
    "skim coat",
  ],
  drywall_repair: ["drywall repair", "drywall patch", "wall repair", "ceiling repair", "drywall"],
  drywall_installation: ["drywall installation", "drywall contractor", "drywall hanging", "drywall"],
  painting: ["interior painting", "painting", "painter", "wall painting"],
  wallpaper: ["wallpaper removal", "wallpaper", "wall covering"],
  baseboard: ["baseboard", "trim installation", "baseboard installation", "shoe moulding"],
};

const SEARCH_EXCLUSIONS = {
  popcorn: ["snack", "food", "kernel", "kernels", "movie", "streaming", "doodle", "recipe", "amazon", "walmart"],
};

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchOne(html, re) {
  const match = String(html || "").match(re);
  return match ? stripHtml(match[1]) : "";
}

function matchAll(html, re) {
  return [...String(html || "").matchAll(re)]
    .map((match) => stripHtml(match[1]))
    .filter(Boolean)
    .slice(0, 20);
}

function detectGaps(text) {
  const haystack = String(text || "").toLowerCase();
  const map = [
    ["Painted vs unpainted texture difficulty", ["painted", "unpainted"]],
    ["Dust control and home protection", ["dust", "containment", "protection"]],
    ["Skim coat vs basic scrape", ["skim", "scrape"]],
    ["Basement ceiling issues", ["basement"]],
    ["Drywall repair after removal", ["drywall", "repair"]],
    ["Primer and paint after removal", ["primer", "paint"]],
    ["Timeline and project disruption", ["timeline", "days", "schedule"]],
    ["What photos to send for a quote", ["photo", "quote", "estimate"]],
  ];
  return map
    .filter(([, needles]) => !needles.some((needle) => haystack.includes(needle)))
    .map(([label]) => label);
}

function detectTopicCoverage(text) {
  const haystack = String(text || "").toLowerCase();
  const map = [
    ["Painted vs unpainted texture difficulty", ["painted", "unpainted"]],
    ["Dust control and home protection", ["dust", "containment", "protection"]],
    ["Skim coat vs basic scrape", ["skim", "scrape"]],
    ["Basement ceiling issues", ["basement"]],
    ["Drywall repair after removal", ["drywall", "repair"]],
    ["Primer and paint after removal", ["primer", "paint"]],
    ["Timeline and project disruption", ["timeline", "days", "schedule"]],
    ["What photos to send for a quote", ["photo", "quote", "estimate"]],
  ];
  return map
    .filter(([, needles]) => needles.some((needle) => haystack.includes(needle)))
    .map(([label]) => label);
}

function extractKeywordAngles(page, job) {
  const service = String(job.service || "").toLowerCase();
  const city = String(job.city || "").toLowerCase();
  const headings = [page.title, page.h1, ...(page.h2s || [])].filter(Boolean);
  const angles = [];

  headings.forEach((heading) => {
    const clean = String(heading)
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 110);
    if (!clean || clean.length < 8) return;
    const lower = clean.toLowerCase();
    if (service && !lower.includes(service.split(/\s+/)[0]) && !lower.includes("ceiling") && !lower.includes("drywall") && !lower.includes("baseboard") && !lower.includes("paint") && !lower.includes("wallpaper")) {
      return;
    }
    if (city && !lower.includes(city)) {
      angles.push(`${clean} ${job.city}`);
      return;
    }
    angles.push(clean);
  });

  return [...new Set(angles)].slice(0, 8);
}

function resolveUrl(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
  return `${base}${value.startsWith("/") ? value : `/${value}`}`;
}

function decodeHtmlEntities(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function normalizeSearchResultUrl(rawUrl) {
  const decoded = decodeHtmlEntities(rawUrl);
  try {
    const parsed = new URL(decoded);
    if (parsed.hostname.includes("duckduckgo.com") && parsed.searchParams.get("uddg")) {
      return decodeURIComponent(parsed.searchParams.get("uddg"));
    }
    if (parsed.hostname.includes("bing.com") && parsed.pathname === "/ck/a") {
      const target = parsed.searchParams.get("u");
      if (target) {
        const cleanTarget = (target.startsWith("a1") ? target.slice(2) : target)
          .replace(/-/g, "+")
          .replace(/_/g, "/");
        const paddedTarget = cleanTarget.padEnd(cleanTarget.length + ((4 - cleanTarget.length % 4) % 4), "=");
        try {
          return Buffer.from(paddedTarget, "base64").toString("utf8");
        } catch {
          return cleanTarget;
        }
      }
    }
    return parsed.toString();
  } catch {
    return "";
  }
}

function isUsefulCompetitorUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
    const path = parsed.pathname.toLowerCase();
    if (!/^https?:$/.test(parsed.protocol)) return false;
    if (BLOCKED_HOST_PARTS.some((part) => host.includes(part))) return false;
    if (path.includes("/search") || path.includes("/maps") || path.includes("/images")) return false;
    if (/\.(jpg|jpeg|png|webp|gif|pdf|zip)$/i.test(parsed.pathname)) return false;
    return true;
  } catch {
    return false;
  }
}

function getServiceNeedles(job) {
  return SERVICE_NEEDLES[job.service_key] || SERVICE_NEEDLES.popcorn;
}

function getSearchExclusions(job) {
  return SEARCH_EXCLUSIONS[job.service_key] || [];
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasServicePhrase(job, text) {
  const haystack = String(text || "").toLowerCase();
  return getServiceNeedles(job).some((needle) => haystack.includes(needle));
}

function looksLikeWrongPopcornIntent(job, text) {
  if (job.service_key !== "popcorn") return false;
  const haystack = String(text || "").toLowerCase();
  if (hasServicePhrase(job, haystack)) return false;
  return /\b(popcorn|popping corn|kernel|kernels|snack|movie|streaming|doodle|recipe)\b/.test(haystack);
}

function isRelevantSearchCandidate(job, url, context = "") {
  if (!isUsefulCompetitorUrl(url)) return false;
  const haystack = `${url} ${context}`.toLowerCase();
  if (looksLikeWrongPopcornIntent(job, haystack)) return false;
  if (!hasServicePhrase(job, haystack)) return false;
  if (getSearchExclusions(job).some((term) => haystack.includes(term) && !hasServicePhrase(job, haystack))) {
    return false;
  }
  return true;
}

function scoreCompetitorRelevance(job, page, visibleText = "") {
  const haystack = [
    page.url,
    page.title,
    page.h1,
    ...(page.h2s || []),
    visibleText.slice(0, 4000),
  ].join(" ").toLowerCase();
  const city = String(job.city || "").toLowerCase();
  const serviceNeedles = getServiceNeedles(job);
  const reasons = [];
  let score = 0;
  let serviceMatches = 0;

  if (looksLikeWrongPopcornIntent(job, haystack)) {
    return {
      score: 0,
      reasons: ["wrong popcorn intent"],
    };
  }

  serviceNeedles.forEach((needle) => {
    if (haystack.includes(needle)) {
      serviceMatches += 1;
      score += needle.includes(" ") ? 24 : 14;
      reasons.push(`service match: ${needle}`);
    }
  });

  if (!serviceMatches) {
    return {
      score: 0,
      reasons: ["missing service phrase"],
    };
  }

  if (city && haystack.includes(city)) {
    score += 24;
    reasons.push(`city match: ${job.city}`);
  }

  if (/\b(contractor|company|service|services|quote|estimate|cost|near me|renovation|drywall|painting)\b/.test(haystack)) {
    score += 12;
    reasons.push("commercial/service intent");
  }

  if (page.h1) {
    score += 8;
    reasons.push("has H1");
  }

  if ((page.word_count || 0) >= 250) {
    score += 8;
    reasons.push("substantial page");
  }

  const host = (() => {
    try {
      return new URL(page.url).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  })();

  if (host && /(blog|news|magazine|directory|review)/i.test(host)) {
    score -= 25;
    reasons.push("looks less like a contractor service page");
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    reasons: [...new Set(reasons)].slice(0, 8),
  };
}

function extractSearchCandidates(job, html) {
  const candidates = [];
  const rssItemPattern = /<item\b[\s\S]*?<\/item>/gi;
  for (const item of String(html || "").matchAll(rssItemPattern)) {
    const block = item[0];
    const title = decodeHtmlEntities(matchOne(block, /<title[^>]*>([\s\S]*?)<\/title>/i));
    const link = decodeHtmlEntities(matchOne(block, /<link[^>]*>([\s\S]*?)<\/link>/i));
    const description = decodeHtmlEntities(matchOne(block, /<description[^>]*>([\s\S]*?)<\/description>/i));
    const url = normalizeSearchResultUrl(link);
    if (url && isRelevantSearchCandidate(job, url, `${title} ${description}`)) {
      candidates.push({ url, title, description });
    }
  }

  const bingAlgoPattern = /<li[^>]+class="[^"]*\bb_algo\b[^"]*"[\s\S]*?<h2[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?(?:<p[^>]*>([\s\S]*?)<\/p>)?/gi;
  for (const match of String(html || "").matchAll(bingAlgoPattern)) {
    const url = normalizeSearchResultUrl(match[1]);
    const title = decodeHtmlEntities(stripHtml(match[2]));
    const description = decodeHtmlEntities(stripHtml(match[3] || ""));
    if (url && isRelevantSearchCandidate(job, url, `${title} ${description}`)) {
      candidates.push({ url, title, description });
    }
  }

  const duckPattern = /<a[^>]+class="[^"]*\bresult__a\b[^"]*"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?(?:<a[^>]+class="[^"]*\bresult__snippet\b[^"]*"[^>]*>([\s\S]*?)<\/a>)?/gi;
  for (const match of String(html || "").matchAll(duckPattern)) {
    const url = normalizeSearchResultUrl(match[1]);
    const title = decodeHtmlEntities(stripHtml(match[2]));
    const description = decodeHtmlEntities(stripHtml(match[3] || ""));
    if (url && isRelevantSearchCandidate(job, url, `${title} ${description}`)) {
      candidates.push({ url, title, description });
    }
  }

  return candidates;
}

function extractSearchUrls(job, html) {
  const structured = extractSearchCandidates(job, html).map((candidate) => candidate.url);
  if (structured.length) return [...new Set(structured)];

  const urls = [];
  const patterns = [
    /<a[^>]+href="([^"]+)"[^>]*>/gi,
    /<a[^>]+href='([^']+)'[^>]*>/gi,
  ];
  patterns.forEach((pattern) => {
    for (const match of String(html || "").matchAll(pattern)) {
      const url = normalizeSearchResultUrl(match[1]);
      if (isRelevantSearchCandidate(job, url, match[0])) urls.push(url);
    }
  });
  const seenHosts = new Set();
  return [...new Set(urls)].filter((url) => {
    const host = new URL(url).hostname.replace(/^www\./, "");
    if (seenHosts.has(host)) return false;
    seenHosts.add(host);
    return true;
  });
}

async function fetchSearchResults(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 EPF SEO Blog Agent/1.0",
      accept: "text/html,application/xhtml+xml",
    },
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error(`Search HTTP ${response.status}`);
  return response.text();
}

async function discoverCompetitorUrls(job, limit = 6) {
  const city = String(job.city || "").trim();
  const exclusions = getSearchExclusions(job).map((term) => `-${term}`).join(" ");
  const serviceQueries = job.service_key === "popcorn"
    ? [
        `"popcorn ceiling removal" ${city} contractor`,
        `"stucco ceiling removal" ${city} contractor`,
        `"smooth ceiling" ${city} contractor`,
        `"ceiling texture removal" ${city} contractor`,
      ]
    : [
        `"${job.service}" ${city} contractor`,
        `${job.service} ${city}`,
        `${job.service} near ${city}`,
      ];
  const seed = Array.isArray(job.seed_keywords) && job.seed_keywords[0]
    ? String(job.seed_keywords[0]).replace(new RegExp(`\\b${escapeRegExp(city)}\\b`, "ig"), "").trim()
    : "";
  const queries = [
    ...serviceQueries,
    seed ? `"${seed}" ${city} contractor` : "",
  ]
    .filter(Boolean)
    .map((query) => `${query} ${exclusions}`.trim());
  const discovered = [];
  const errors = [];

  for (const query of queries) {
    const encoded = encodeURIComponent(`${query} -epfproservices`);
    const searchUrls = [
      `https://www.bing.com/search?format=rss&q=${encoded}`,
      `https://www.bing.com/search?q=${encoded}`,
      `https://duckduckgo.com/html/?q=${encoded}`,
    ];
    for (const searchUrl of searchUrls) {
      try {
        const html = await fetchSearchResults(searchUrl);
        discovered.push(...extractSearchUrls(job, html));
      } catch (error) {
        errors.push(`${new URL(searchUrl).hostname}: ${error.message || "search failed"}`);
      }
      if ([...new Set(discovered)].length >= limit) break;
    }
    if ([...new Set(discovered)].length >= limit) break;
  }

  return {
    queries,
    urls: [...new Set(discovered)].slice(0, limit),
    errors: [...new Set(errors)].slice(0, 6),
  };
}

async function analyzePage(job, url, source) {
  const resolvedUrl = resolveUrl(url);
  const page = {
    id: makeId(source === "epf" ? "epf" : "cmp"),
    job_id: job.id,
    source,
    url: resolvedUrl,
    title: "",
    h1: "",
    h2s: [],
    word_count: 0,
    gaps_found: GAP_CHECKS,
    topics_covered: [],
    keyword_angles: [],
    relevance_score: 0,
    relevance_reasons: [],
    fetch_error: "",
  };

  try {
    if (!resolvedUrl) throw new Error("Missing URL");
    const response = await fetch(resolvedUrl, {
      headers: { "user-agent": "EPF SEO Blog Agent/1.0" },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const visible = stripHtml(html);
    page.title = matchOne(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    page.h1 = matchOne(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
    page.h2s = matchAll(html, /<h2[^>]*>([\s\S]*?)<\/h2>/gi);
    page.word_count = visible ? visible.split(/\s+/).length : 0;
    page.gaps_found = detectGaps(`${page.title} ${page.h1} ${page.h2s.join(" ")} ${visible}`);
    page.topics_covered = detectTopicCoverage(`${page.title} ${page.h1} ${page.h2s.join(" ")} ${visible}`);
    const relevance = source === "competitor"
      ? scoreCompetitorRelevance(job, page, visible)
      : { score: 100, reasons: ["EPF target page"] };
    page.relevance_score = relevance.score;
    page.relevance_reasons = relevance.reasons;
  } catch (error) {
    page.fetch_error = error.message || "Fetch failed";
  }

  return page;
}

function compareEpfToCompetitors(job, epfPage, competitorPages) {
  const fetchedCompetitors = competitorPages.filter((page) => !page.fetch_error);
  const competitorGapCounts = new Map();
  const competitorAngles = [];

  fetchedCompetitors.forEach((page) => {
    (page.topics_covered || []).forEach((topic) => {
      competitorGapCounts.set(topic, (competitorGapCounts.get(topic) || 0) + 1);
    });
    competitorAngles.push(...(page.keyword_angles || []));
  });

  const epfGaps = epfPage?.gaps_found || [];
  const competitorCoveredButEpfMissing = [...competitorGapCounts.entries()]
    .filter(([gap]) => epfGaps.includes(gap))
    .sort((a, b) => b[1] - a[1])
    .map(([gap, count]) => ({ gap, competitor_count: count }));

  const avgCompetitorWordCount = fetchedCompetitors.length
    ? Math.round(fetchedCompetitors.reduce((sum, page) => sum + page.word_count, 0) / fetchedCompetitors.length)
    : 0;
  const epfWordCount = epfPage?.word_count || 0;
  const wordCountDelta = avgCompetitorWordCount ? epfWordCount - avgCompetitorWordCount : 0;
  const recommendedAngles = [...new Set(competitorAngles)]
    .filter((angle) => !String(epfPage?.h2s?.join(" ") || "").toLowerCase().includes(String(angle).toLowerCase().slice(0, 24)))
    .slice(0, 8);

  return {
    id: makeId("compare"),
    job_id: job.id,
    epf_url: epfPage?.url || resolveUrl(job.main_page_url),
    competitor_urls: competitorPages.map((page) => page.url),
    epf_title: epfPage?.title || "",
    epf_h1: epfPage?.h1 || "",
    epf_word_count: epfWordCount,
    avg_competitor_word_count: avgCompetitorWordCount,
    word_count_delta: wordCountDelta,
    epf_fetch_error: epfPage?.fetch_error || "",
    competitor_fetch_errors: competitorPages.filter((page) => page.fetch_error).map((page) => ({
      url: page.url,
      error: page.fetch_error,
    })),
    competitor_covered_but_epf_missing: competitorCoveredButEpfMissing,
    recommended_blog_angles: recommendedAngles,
    summary: competitorCoveredButEpfMissing.length
      ? `EPF target page should be supported by a blog covering ${competitorCoveredButEpfMissing.slice(0, 3).map((item) => item.gap.toLowerCase()).join(", ")}.`
      : fetchedCompetitors.length
        ? "EPF target page covers the main checked topics; blog should go deeper with homeowner quote, process, and finish-quality detail."
        : "Competitor comparison needs competitor URLs. Keyword-only blog planning can still continue.",
    created_at: new Date().toISOString(),
  };
}

async function analyzeCompetitors(job) {
  const urls = Array.isArray(job.competitor_urls) ? job.competitor_urls : [];
  const pages = await Promise.all(urls.filter(Boolean).slice(0, 12).map((url) => analyzePage(job, url, "competitor")));
  return pages.map((page) => ({
    ...page,
    keyword_angles: extractKeywordAngles(page, job),
  }));
}

async function analyzeCompetition(job) {
  const discovery = Array.isArray(job.competitor_urls) && job.competitor_urls.length
    ? { queries: [], urls: job.competitor_urls, errors: [] }
    : await discoverCompetitorUrls(job);
  const researchJob = {
    ...job,
    competitor_urls: discovery.urls,
  };
  const [epfPage, candidateCompetitorPages] = await Promise.all([
    analyzePage(researchJob, researchJob.main_page_url, "epf"),
    analyzeCompetitors(researchJob),
  ]);
  const candidatePagesWithAngles = candidateCompetitorPages.map((page) => ({
    ...page,
    keyword_angles: extractKeywordAngles(page, job),
  }));
  const isManual = Array.isArray(job.competitor_urls) && job.competitor_urls.length;
  const relevantPages = isManual
    ? candidatePagesWithAngles
    : candidatePagesWithAngles
      .filter((page) => !page.fetch_error && page.relevance_score >= 45)
      .sort((a, b) => b.relevance_score - a.relevance_score)
      .slice(0, 6);
  const ruleComparison = compareEpfToCompetitors(researchJob, epfPage, relevantPages);
  const aiResearch = await runAiCompetitionResearch({
    job: researchJob,
    epfPage,
    candidatePages: candidatePagesWithAngles,
    comparison: ruleComparison,
  });
  const aiAcceptedUrls = new Set(
    Array.isArray(aiResearch.accepted_competitor_urls)
      ? aiResearch.accepted_competitor_urls
      : [],
  );
  const aiSelectedPages = aiResearch.used_ai && aiAcceptedUrls.size
    ? candidatePagesWithAngles.filter((page) => aiAcceptedUrls.has(page.url) && !page.fetch_error && page.relevance_score >= 55)
    : relevantPages;
  const finalCompetitorPages = aiSelectedPages.length ? aiSelectedPages : relevantPages;
  const aiRejectedByUrl = new Map(
    Array.isArray(aiResearch.rejected_competitor_urls)
      ? aiResearch.rejected_competitor_urls.map((item) => [item.url, item.reason || "Rejected by AI research"])
      : [],
  );
  const rejectedPages = candidatePagesWithAngles
    .filter((page) => !finalCompetitorPages.some((accepted) => accepted.url === page.url))
    .map((page) => ({
      url: page.url,
      title: page.title,
      relevance_score: page.relevance_score,
      relevance_reasons: page.relevance_reasons,
      fetch_error: page.fetch_error,
      reason: aiRejectedByUrl.get(page.url) || (page.fetch_error ? page.fetch_error : "Low service/city relevance"),
    }));
  const comparison = {
    ...compareEpfToCompetitors(researchJob, epfPage, finalCompetitorPages),
    discovered_competitor_urls: candidatePagesWithAngles.map((page) => page.url),
    accepted_competitor_urls: finalCompetitorPages.map((page) => page.url),
    rejected_competitor_urls: rejectedPages,
    search_queries: discovery.queries,
    search_errors: discovery.errors,
    discovery_mode: Array.isArray(job.competitor_urls) && job.competitor_urls.length ? "manual_urls" : "automatic_search",
    ai_research: aiResearch,
    ai_summary: aiResearch.used_ai ? aiResearch.summary : "",
    ai_content_gaps_to_cover: aiResearch.used_ai ? aiResearch.content_gaps_to_cover || [] : [],
    ai_notes_for_human_review: aiResearch.used_ai ? aiResearch.notes_for_human_review || [] : [],
  };
  return { epfPage, competitorPages: finalCompetitorPages, comparison, discovery };
}

module.exports = {
  analyzeCompetition,
  analyzeCompetitors,
  discoverCompetitorUrls,
  detectGaps,
  detectTopicCoverage,
  isRelevantSearchCandidate,
  scoreCompetitorRelevance,
  resolveUrl,
};
