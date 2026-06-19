const DEFAULT_RESEARCH_MODEL = "gpt-5.5";

function extractOutputText(payload) {
  if (payload?.output_text) return payload.output_text;
  const chunks = [];
  for (const item of payload?.output || []) {
    for (const content of item?.content || []) {
      if (content?.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n");
}

function parseJsonObject(text) {
  const raw = String(text || "").trim();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {}
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

function normalizeTextItem(item) {
  if (item == null) return "";
  if (typeof item === "string") return item.trim();
  if (typeof item === "number") return String(item);
  if (typeof item === "object") {
    return String(
      item.title ||
        item.keyword ||
        item.url ||
        item.gap ||
        item.reason ||
        item.purpose ||
        item.homeowner_focus ||
        "",
    ).trim();
  }
  return String(item).trim();
}

function toTextArray(value) {
  if (Array.isArray(value)) {
    return [...new Set(value.map(normalizeTextItem).filter(Boolean))];
  }
  const single = normalizeTextItem(value);
  return single ? [single] : [];
}

function toUrlArray(value) {
  const items = Array.isArray(value) ? value : value ? [value] : [];
  return [...new Set(items.map((item) => {
    if (typeof item === "string") return item.trim();
    if (item && typeof item === "object") return String(item.url || "").trim();
    return "";
  }).filter((url) => /^https?:\/\//i.test(url)))];
}

function normalizeAiResearch(parsed, model) {
  return {
    ...parsed,
    used_ai: true,
    model,
    accepted_competitor_urls: toUrlArray(parsed.accepted_competitor_urls),
    rejected_competitor_urls: Array.isArray(parsed.rejected_competitor_urls)
      ? parsed.rejected_competitor_urls.map((item) => (
          typeof item === "string"
            ? { url: item, reason: "Rejected by AI research" }
            : {
                url: String(item?.url || "").trim(),
                reason: normalizeTextItem(item?.reason) || "Rejected by AI research",
              }
        )).filter((item) => item.url || item.reason)
      : [],
    recommended_blog_angles: toTextArray(parsed.recommended_blog_angles),
    content_gaps_to_cover: toTextArray(parsed.content_gaps_to_cover),
    notes_for_human_review: toTextArray(parsed.notes_for_human_review),
    main_keyword: normalizeTextItem(parsed.main_keyword),
    blog_type: normalizeTextItem(parsed.blog_type),
    search_intent: normalizeTextItem(parsed.search_intent),
    summary: normalizeTextItem(parsed.summary),
  };
}

async function callResponsesApi(body, apiKey) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error?.message || `OpenAI request failed: ${response.status}`);
  }
  return payload;
}

async function runAiCompetitorDiscovery(job) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      used_ai: false,
      error: "OPENAI_API_KEY is not set",
      competitor_urls: [],
    };
  }

  const model = process.env.OPENAI_RESEARCH_MODEL || DEFAULT_RESEARCH_MODEL;
  try {
    const payload = await callResponsesApi({
      model,
      tools: [{ type: "web_search_preview" }],
      input: [
        {
          role: "system",
          content:
            "You find real local contractor competitor pages for EPF Pro Services. Use web search. Return strict JSON only.",
        },
        {
          role: "user",
          content: `Find up to 6 real competitor URLs for ${job.service} in ${job.city}. Only include contractor/service pages that offer ceiling/drywall/home renovation services in or near the target city. Exclude EPF Pro Services, directories, marketplaces, social media, ecommerce, food/snack popcorn pages, movie/streaming pages, generic advice articles, and search result pages. Return JSON with keys: competitor_urls (array of {url, title, reason}), search_notes (array of strings).\n\nSeed keywords: ${JSON.stringify(job.seed_keywords || [])}`,
        },
      ],
    }, apiKey);
    const parsed = parseJsonObject(extractOutputText(payload));
    if (!parsed) {
      return {
        used_ai: false,
        model,
        error: "AI web search response was not valid JSON",
        competitor_urls: [],
      };
    }
    return {
      used_ai: true,
      model,
      competitor_urls: toUrlArray(parsed.competitor_urls),
      search_notes: toTextArray(parsed.search_notes),
    };
  } catch (error) {
    return {
      used_ai: false,
      model,
      error: error.message || "AI competitor discovery failed",
      competitor_urls: [],
    };
  }
}

async function runAiCompetitionResearch({ job, epfPage, candidatePages, comparison }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      used_ai: false,
      error: "OPENAI_API_KEY is not set",
    };
  }

  const model = process.env.OPENAI_RESEARCH_MODEL || DEFAULT_RESEARCH_MODEL;
  const input = {
    job: {
      service: job.service,
      city: job.city,
      main_page_url: job.main_page_url,
      seed_keywords: job.seed_keywords || [],
    },
    epf_page: {
      url: epfPage?.url,
      title: epfPage?.title,
      h1: epfPage?.h1,
      h2s: epfPage?.h2s,
      word_count: epfPage?.word_count,
      gaps_found: epfPage?.gaps_found,
      fetch_error: epfPage?.fetch_error,
    },
    candidate_competitors: candidatePages.map((page) => ({
      url: page.url,
      title: page.title,
      h1: page.h1,
      h2s: page.h2s,
      word_count: page.word_count,
      gaps_found: page.gaps_found,
      keyword_angles: page.keyword_angles,
      relevance_score: page.relevance_score,
      relevance_reasons: page.relevance_reasons,
      fetch_error: page.fetch_error,
    })),
    rule_based_summary: comparison?.summary,
  };

  try {
    const payload = await callResponsesApi({
      model,
      input: [
        {
          role: "system",
          content:
            "You are an SEO research analyst for EPF Pro Services. Use only the provided page metadata and headings. Do not copy competitor wording. Return strict JSON only.",
        },
        {
          role: "user",
          content: `Analyze these EPF and competitor page signals. Select only true local/service competitors, reject irrelevant URLs, identify what EPF should support with a blog, and create a homeowner-first blog brief. Return JSON with keys: accepted_competitor_urls, rejected_competitor_urls (array of {url, reason}), summary, recommended_blog_angles, content_gaps_to_cover, main_keyword, blog_type, search_intent, confidence, notes_for_human_review.\n\n${JSON.stringify(input)}`,
        },
      ],
    }, apiKey);
    const parsed = parseJsonObject(extractOutputText(payload));
    if (!parsed) {
      return {
        used_ai: false,
        error: "OpenAI response was not valid JSON",
      };
    }
    return normalizeAiResearch(parsed, model);
  } catch (error) {
    return {
      used_ai: false,
      error: error.message || "AI research failed",
    };
  }
}

module.exports = {
  DEFAULT_RESEARCH_MODEL,
  runAiCompetitorDiscovery,
  runAiCompetitionResearch,
  toTextArray,
};
