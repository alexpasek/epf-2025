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
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });
    const payload = await response.json();
    if (!response.ok) {
      return {
        used_ai: false,
        error: payload?.error?.message || `OpenAI request failed: ${response.status}`,
      };
    }
    const parsed = parseJsonObject(extractOutputText(payload));
    if (!parsed) {
      return {
        used_ai: false,
        error: "OpenAI response was not valid JSON",
      };
    }
    return {
      used_ai: true,
      model,
      ...parsed,
    };
  } catch (error) {
    return {
      used_ai: false,
      error: error.message || "AI research failed",
    };
  }
}

module.exports = {
  DEFAULT_RESEARCH_MODEL,
  runAiCompetitionResearch,
};
