const { makeId, normalizeService, SERVICES, cityLabel, citySlug } = require("./models.cjs");

const COMMERCIAL = ["cost", "price", "quote", "contractor", "near me", "company"];
const HELPFUL_ANGLES = [
  "painted",
  "dustless",
  "dust control",
  "skim coat",
  "smooth ceiling",
  "basement",
  "repair",
  "timeline",
  "prep",
  "level 5",
];

function scoreKeyword(keyword, city, serviceLabel, metrics = {}) {
  const text = String(keyword || "").toLowerCase();
  const cityText = String(city || "").toLowerCase();
  const serviceWords = serviceLabel.toLowerCase().split(/\s+/).filter(Boolean);
  let score = 0;
  if (cityText && text.includes(cityText)) score += 25;
  if (serviceWords.some((word) => word.length > 3 && text.includes(word))) score += 25;
  if (COMMERCIAL.some((word) => text.includes(word))) score += 15;
  if (HELPFUL_ANGLES.some((word) => text.includes(word))) score += 20;
  if (Number(metrics.avgMonthlySearches || 0) >= 20) score += 10;
  if (Number(metrics.conversions || 0) > 0) score += 15;
  return Math.min(score, 100);
}

function localKeywordVariants(job, competitorPages = []) {
  const serviceKey = normalizeService(job.service);
  const service = SERVICES[serviceKey];
  const city = cityLabel(job.city);
  const base = service.label.toLowerCase();
  const seedKeywords = Array.isArray(job.seed_keywords) ? job.seed_keywords : [];
  const competitorAngles = competitorPages.flatMap((page) => page.keyword_angles || []);
  const variants = [
    `${base} ${city}`,
    `${base} cost ${city}`,
    `${base} contractor ${city}`,
    `dustless ${base} ${city}`,
    `how long does ${base} take`,
    `what affects ${base} price`,
    `best finish after ${base}`,
    ...seedKeywords,
    ...competitorAngles,
  ];

  if (serviceKey === "popcorn") {
    variants.push(
      `painted popcorn ceiling removal ${city}`,
      `skim coat after popcorn ceiling removal ${city}`,
      `smooth ceiling refinishing ${city}`,
      `popcorn ceiling removal with pot lights ${city}`,
      `basement popcorn ceiling removal ${city}`,
    );
  }

  if (serviceKey === "drywall_repair") {
    variants.push(
      `drywall crack repair ${city}`,
      `ceiling drywall repair ${city}`,
      `drywall repair before painting ${city}`,
      `water damaged drywall repair ${city}`,
    );
  }

  return [...new Set(variants.map((value) => value.trim()).filter(Boolean))];
}

async function researchKeywords(job, options = {}) {
  const serviceKey = normalizeService(job.service);
  const service = SERVICES[serviceKey];
  const city = cityLabel(job.city);
  const keywords = localKeywordVariants(job, options.competitorPages || []);
  const scored = keywords.map((keyword, index) => {
    const avgMonthlySearches = Math.max(10, 90 - index * 7);
    return {
      id: makeId("kw"),
      job_id: job.id,
      keyword,
      avg_monthly_searches: avgMonthlySearches,
      competition: index < 3 ? "HIGH" : index < 7 ? "MEDIUM" : "LOW",
      source: (options.competitorPages || []).some((page) => (page.keyword_angles || []).includes(keyword))
        ? "competitor_angle"
        : "local_fallback",
      intent_score: scoreKeyword(keyword, city, service.label, {
        avgMonthlySearches,
      }),
      selected: false,
      clicks: 0,
      cost_micros: 0,
      conversions: 0,
    };
  }).sort((a, b) => b.intent_score - a.intent_score);
  if (scored[0]) scored[0].selected = true;
  return scored;
}

function selectBestKeyword(keywordIdeas) {
  return [...keywordIdeas].sort((a, b) => b.intent_score - a.intent_score)[0] || null;
}

module.exports = {
  scoreKeyword,
  researchKeywords,
  selectBestKeyword,
  citySlug,
};
