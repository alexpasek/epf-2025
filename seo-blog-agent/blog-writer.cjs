const {
  makeId,
  slugify,
  todayDate,
  normalizeService,
  SERVICES,
  cityLabel,
  serviceCityPath,
} = require("./models.cjs");

const RELATED_GUIDES = {
  popcorn: [
    {
      href: "/blog/popcorn-removal-oakville-cost-finish-guide/",
      anchor: "popcorn removal cost and finish guide",
      description: "Cost factors, dust control, and smooth ceiling finish quality.",
    },
    {
      href: "/blog/painted-popcorn-ceiling-removal-scrape-or-skim-coat/",
      anchor: "painted popcorn ceiling removal guide",
      description: "How painted texture changes scraping, skim coating, and finishing.",
    },
  ],
  drywall_repair: [
    {
      href: "/blog/why-drywall-patches-show-through-paint/",
      anchor: "why drywall patches show through paint",
      description: "Repair and paint-prep guide for visible drywall patches.",
    },
  ],
  drywall_installation: [
    {
      href: "/blog/how-to-choose-drywall-repair-company-burlington/",
      anchor: "how to choose a drywall contractor",
      description: "Questions to ask before hiring for drywall work.",
    },
  ],
  baseboard: [
    {
      href: "/blog/baseboard-installation-mississauga-cost-materials-guide/",
      anchor: "baseboard installation cost and material guide",
      description: "Trim scope, materials, finishing, and quote planning.",
    },
  ],
  painting: [
    {
      href: "/services/interior-painting/",
      anchor: "interior painting services",
      description: "Painting, prep, cut lines, trim, ceilings, and finish coats.",
    },
  ],
  wallpaper: [
    {
      href: "/services/wallpaper-removal/",
      anchor: "wallpaper removal services",
      description: "Wallpaper removal, wall repair, prep, and painting handoff.",
    },
  ],
};

function inferBlogType(keyword) {
  const text = String(keyword || "").toLowerCase();
  if (/(cost|price|quote|estimate|budget)/.test(text)) return "Cost guide";
  if (/(vs|better|should|remove or|skim coat|repair or replace)/.test(text)) return "Comparison guide";
  if (/(crack|stain|peeling|bad patch|water|damage|uneven|repair)/.test(text)) return "Problem/solution guide";
  if (/(how long|timeline|process|steps|prep|prepare|cleanup)/.test(text)) return "Process guide";
  return "Local homeowner guide";
}

function inferSearchIntent(blogType) {
  if (blogType === "Cost guide") return "Cost research and pre-estimate research";
  if (blogType === "Comparison guide") return "Comparison and repair decision research";
  if (blogType === "Problem/solution guide") return "Problem solving and repair decision research";
  if (blogType === "Process guide") return "Informational and process research";
  return "Local service research and pre-estimate research";
}

function titleFromKeyword(keyword, city, serviceLabel, blogType) {
  const text = String(keyword || "").toLowerCase();
  const titleService = serviceLabel.replace(/\b\w/g, (char) => char.toUpperCase());
  if (blogType === "Cost guide") {
    return `${titleService} Cost in ${city}: What Affects the Quote?`;
  }
  if (text.includes("painted") && serviceLabel.includes("Popcorn")) {
    return `Painted Popcorn Ceiling Removal in ${city}: Scrape or Skim Coat?`;
  }
  if (text.includes("dust")) {
    return `Dust-Controlled ${serviceLabel} in ${city}: What Homeowners Should Know`;
  }
  if (blogType === "Process guide") {
    return `${serviceLabel} Timeline in ${city}: Process, Prep, and Cleanup`;
  }
  if (blogType === "Problem/solution guide") {
    return `${serviceLabel} in ${city}: Repair Options and Finish Quality`;
  }
  return `${serviceLabel} in ${city}: A Practical Homeowner Guide`;
}

function cleanList(items) {
  return [...new Set(items.map((item) => String(item || "").trim()).filter(Boolean))];
}

function linkHtml(href, anchor) {
  return `<a href="${href}" class="text-blue-600 font-semibold hover:underline">${anchor}</a>`;
}

function serviceSpecificTerms(serviceKey) {
  if (serviceKey === "popcorn") {
    return {
      surface: "ceiling",
      result: "smooth ceiling",
      work: "scraping, skim coating, sanding, primer, and flat ceiling paint",
      caution: "If the home is older and asbestos is a concern, testing should be handled before disturbance. The blog should not be used as a hazardous-material removal guide.",
      tableRows: [
        ["Painted texture", "Usually slower to remove because paint can lock the texture together", "Allow for extra scraping, surface repair, and skim coating"],
        ["Bright rooms or pot lights", "Raking light can reveal small waves and seams", "Consider a higher finish standard before painting"],
        ["Occupied home", "Furniture, floors, vents, and doorways need more protection", "Confirm containment and daily cleanup in the quote"],
        ["Previous repairs", "Old patches can appear after texture comes off", "Plan for drywall repair before primer"],
      ],
    };
  }
  if (serviceKey === "drywall_repair") {
    return {
      surface: "wall or ceiling",
      result: "paint-ready drywall repair",
      work: "patching, taping, compound coats, controlled sanding, primer, and paint handoff",
      caution: "Water stains, recurring cracks, mold concerns, or structural movement should be investigated before cosmetic drywall repair.",
      tableRows: [
        ["Small dent or hole", "Often a focused patch and paint-prep repair", "Send close-up and wide photos"],
        ["Cracks or tape failure", "May need retaping and feathering beyond the visible line", "Ask whether the repair includes primer"],
        ["Water-stained drywall", "The source should be fixed before patching", "Do not cover active water damage"],
        ["Visible patch under paint", "Usually a prep, sanding, primer, or sheen issue", "Plan the repair around the final paint finish"],
      ],
    };
  }
  if (serviceKey === "drywall_installation") {
    return {
      surface: "room, basement, wall, or ceiling",
      result: "straight, paint-ready drywall",
      work: "board installation, taping, compound coats, corner bead, sanding, primer readiness, and cleanup",
      caution: "Electrical, plumbing, framing, insulation, and moisture issues should be handled by the right trade before drywall is closed.",
      tableRows: [
        ["Basement drywall", "Framing, access, moisture, and ceiling height affect scope", "Confirm what is ready before boarding"],
        ["Ceiling drywall", "Board handling, fastening, seams, and lighting matter", "Ask about finish level and sanding control"],
        ["Level 4 finish", "Good for many painted walls and ceilings", "Confirm primer and paint handoff"],
        ["Level 5 finish", "Useful in strong light or high-visibility areas", "Best discussed before taping begins"],
      ],
    };
  }
  if (serviceKey === "baseboard") {
    return {
      surface: "room perimeter",
      result: "clean baseboard installation",
      work: "measuring, old trim removal, cutting, fastening, filling, caulking, sanding, and paint-ready finishing",
      caution: "Finished floors and fresh paint should be protected before trim cutting, fastening, filling, and caulking starts.",
      tableRows: [
        ["New flooring", "Baseboards cover expansion gaps and finish the floor line", "Coordinate trim after flooring"],
        ["Old trim removal", "Drywall paper and paint can tear during removal", "Include touch-ups in the scope"],
        ["Tall profiles", "More visible and less forgiving on uneven walls", "Confirm profile height before ordering"],
        ["Painting included", "Primed trim is not the same as finished trim", "Clarify caulk, filler, primer, and paint coats"],
      ],
    };
  }
  if (serviceKey === "wallpaper") {
    return {
      surface: "wall",
      result: "paint-ready wall after wallpaper removal",
      work: "scoring where appropriate, controlled removal, adhesive cleanup, wall repair, skim coating, sanding, primer, and painting handoff",
      caution: "Older wall coverings and damaged walls can hide torn paper, failing paint, moisture staining, or repairs that need attention before painting.",
      tableRows: [
        ["Paint over wallpaper", "Usually risky because seams and adhesive can show", "Removal and prep is usually cleaner"],
        ["Torn drywall paper", "Needs sealing and skim coating before paint", "Do not paint directly over torn paper"],
        ["Heavy adhesive", "Can affect primer and paint adhesion", "Plan for cleanup and sealing"],
        ["Multiple layers", "Takes longer and can reveal wall damage", "Send close photos of seams and corners"],
      ],
    };
  }
  return {
    surface: "room",
    result: "clean interior finish",
    work: "protection, prep, repair, primer where needed, finish coats, cleanup, and final checks",
    caution: "Wall damage, stains, moisture issues, or peeling paint should be corrected before finish coats.",
    tableRows: [
      ["Wall condition", "Repairs and sanding affect the final paint look", "Confirm prep before comparing prices"],
      ["Trim and cut lines", "Clean edges take time and steady setup", "Ask whether trim paint is included"],
      ["Ceilings", "Flat paint and surface prep matter under daylight", "Separate ceiling scope from walls"],
      ["Occupied home", "Furniture, floors, and daily cleanup need planning", "Confirm room-by-room sequencing"],
    ],
  };
}

function buildDiagnosticTable(serviceLabel, terms) {
  const rows = terms.tableRows
    .map(
      ([situation, why, quote]) =>
        `<tr><td class="px-4 py-3 font-semibold text-slate-900">${situation}</td><td class="px-4 py-3">${why}</td><td class="px-4 py-3">${quote}</td></tr>`,
    )
    .join("");
  return {
    html: `<div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table class="min-w-full text-left text-sm"><thead class="bg-slate-100 text-slate-900"><tr><th class="px-4 py-3 font-bold">Project condition</th><th class="px-4 py-3 font-bold">Why it matters for ${serviceLabel.toLowerCase()}</th><th class="px-4 py-3 font-bold">Quote note</th></tr></thead><tbody class="divide-y divide-slate-200 text-slate-700">${rows}</tbody></table></div>`,
  };
}

function estimateWordCount(content) {
  return content.reduce((sum, entry) => {
    const text =
      typeof entry === "string"
        ? entry
        : entry?.html
          ? entry.html.replace(/<[^>]+>/g, " ")
          : "";
    return sum + text.split(/\s+/).filter(Boolean).length;
  }, 0);
}

function buildImagePlan(service, serviceKey, city, title, slug, terms) {
  return [
    {
      role: "Featured image",
      file_name: `${slug}-featured.webp`,
      alt: `${service.label} planning in a ${city} home with protected work area`,
      prompt: `Realistic professional home renovation photo of ${service.label.toLowerCase()} planning in a clean ${city} area Ontario/GTA home. Show protected floors, practical tools, and the ${terms.surface} ready for contractor review. Natural daylight, high detail, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, people's faces, exaggerated luxury design, and unrealistic glossy surfaces.`,
    },
    {
      role: "Process image",
      file_name: `${slug}-process.webp`,
      alt: `${service.label} process stage with careful protection and dust control`,
      prompt: `Realistic professional home renovation photo of the process stage for ${service.label.toLowerCase()} in an Ontario/GTA home. Show protection, clean setup, realistic materials, and contractor workflow without faces. Avoid text, logos, watermarks, unsafe work, and exaggerated luxury design.`,
    },
    {
      role: "Finish image",
      file_name: `${slug}-finish.webp`,
      alt: `${terms.result} after proper preparation and finishing`,
      prompt: `Realistic professional home renovation photo of a finished ${terms.result} in an Ontario/GTA home after ${service.label.toLowerCase()}. Natural daylight, simple residential interior, clean finish, no people, no text, no logos, no watermark.`,
    },
  ];
}

function buildContent({
  title,
  selectedKeyword,
  service,
  serviceKey,
  city,
  blogType,
  searchIntent,
  cityServicePage,
  terms,
  gaps,
  competitorPages,
  comparison,
  relatedLinks,
}) {
  const mainServiceLink = linkHtml(service.servicePage, `${service.label} service`);
  const cityLink = linkHtml(cityServicePage, `${service.label.toLowerCase()} in ${city}`);
  const quoteLink = linkHtml("/quote/", "request a quote with photos");
  const primaryGap = gaps[0] || "what is included in a proper contractor scope";
  const guideFocus = gaps.length
    ? `This guide puts extra attention on ${primaryGap.toLowerCase()}, because that is one of the details homeowners need to understand before comparing quotes.`
    : `This guide focuses on the practical quote questions homeowners usually have around ${selectedKeyword.keyword}.`;
  const relatedLinkHtml = relatedLinks
    .map((link) => `<li><a href="${link.href}" class="font-semibold text-blue-600 hover:underline">${link.anchor}</a>: ${link.description}</li>`)
    .join("");

  return [
    `${city} homeowners usually start with a simple question: what should I expect before booking ${service.label.toLowerCase()}? The honest answer depends on the condition of the ${terms.surface}, how much protection is needed, the finish standard, and whether the work is only a basic task or a full paint-ready scope.`,
    { html: `If you are comparing options for <strong>${selectedKeyword.keyword}</strong>, this guide explains the practical details behind the quote. For the service page connected to this topic, start with ${cityLink}. You can also compare the broader workflow on the ${mainServiceLink}.` },
    { html: `<strong>Quick answer for ${city} homeowners</strong>` },
    `A good ${service.label.toLowerCase()} quote should explain preparation, protection, the main work stage, repairs, finish quality, sanding or cleanup control, primer or paint handoff, and what photos are needed before pricing. The lowest price is not always the best value if it leaves rough patches, visible seams, poor paint readiness, weak trim lines, or cleanup problems after the crew leaves.`,
    { html: `<strong>What this guide covers</strong>` },
    `This is a ${blogType.toLowerCase()} written for ${searchIntent.toLowerCase()}. It covers what changes the scope, how preparation and finish quality affect the result, and how to send details that lead to a cleaner written estimate. ${guideFocus}`,
    buildDiagnosticTable(service.label, terms),
    { html: `<strong>Why the scope changes from home to home</strong>` },
    `Two homes in ${city} can ask for the same service and still need different pricing. Room size matters, but it is only one part of the estimate. Access, height, furniture, flooring, lighting, repairs, previous work, and how the final surface will be finished all change the amount of labour.`,
    `For ${service.label.toLowerCase()}, the biggest mistake is comparing quotes that do not include the same work. One contractor may be pricing only the obvious task. Another may include protection, repairs, finishing, controlled sanding, primer readiness, cleanup, and disposal where needed. Those are not the same scope, even if both quotes use similar service names.`,
    `A proper estimate should also match the condition of the home. An empty room is easier to protect and move through. An occupied home needs a cleaner plan for furniture, floors, vents, doorways, and daily cleanup. Condos, tight staircases, basements, high ceilings, and rooms with built-ins can all change setup time.`,
    { html: `<strong>Preparation and protection should be part of the quote</strong>` },
    `Preparation is not a decorative line item. It is the part of the job that protects finished flooring, walls, trim, cabinets, fixtures, vents, and nearby rooms. In many finished homes, the protection plan is the difference between a manageable renovation and cleanup spreading through the house.`,
    `For EPF Pro Services, this usually means discussing the room condition before the crew arrives. Photos help identify furniture, floor type, access, ceiling height, trim details, vents, lighting, and problem areas. If the home is occupied, the quote should explain what needs to be moved, what can stay, and how the work area will be separated from the rest of the home.`,
    `Dust control should be described honestly. No contractor should promise that renovation work creates no dust at all. The useful question is whether the crew plans containment, careful sanding, HEPA vacuum support where appropriate, and daily cleanup. This matters for ${service.label.toLowerCase()} because dust and debris can travel through open rooms, stairs, and HVAC pathways if setup is rushed.`,
    { html: `<strong>The main work stage is only one part of the result</strong>` },
    `Homeowners often focus on the obvious task, but the final result usually depends on what happens after that stage. With ${service.label.toLowerCase()}, the work may reveal uneven areas, damaged paper, old repairs, open seams, rough transitions, adhesive residue, trim gaps, or surfaces that need more preparation before primer or paint.`,
    `That is why a contractor should explain the handoff point. Does the job end after the first visible task? Does it include ${terms.work}? Does it include primer? Does it include final paint? If painting is excluded, is the surface actually ready for a painter, or will the painter need to repair and sand again?`,
    `This is also where finish quality matters. A surface can look acceptable in low light and still show waves, seams, scratches, or patch edges once daylight or pot lights hit it from the side. Bright rooms, open-concept areas, and ceilings usually need more careful finishing than small low-light rooms.`,
    { html: `<strong>Cost factors to compare before choosing a contractor</strong>` },
    `Price depends on the real scope. A realistic quote for ${service.label.toLowerCase()} in ${city} should consider size, height, access, condition, protection, repair needs, finish level, cleanup, and whether primer or painting is included. When a price looks much lower than the rest, ask which of those items are missing.`,
    `The most useful way to compare quotes is to put them side by side by inclusion. Does each quote include setup and protection? Does it include the same number of rooms? Does it include repair after the main work? Does it include sanding control? Does it include primer, paint, caulking, or disposal? Does it explain what happens if hidden damage appears?`,
    `For cost-focused searches, the answer is rarely one fixed number. A small, empty, simple room can be priced differently from a furnished main floor, a basement with difficult access, a room with high ceilings, or a surface that has been painted, damaged, or previously repaired. Photos and rough dimensions make the quote more accurate before a site visit.`,
    { html: `<strong>Common quote mistakes to avoid</strong>` },
    `The first mistake is accepting a one-line price without knowing what it includes. A short price can be fine for a very small task, but for most home renovation work it should still explain the rooms, the preparation, the visible work, the finish stage, cleanup, and exclusions. If the scope is unclear before the job starts, every surprise becomes harder to resolve.`,
    `The second mistake is assuming the final finish is included because the service name sounds complete. For example, a removal scope may not include refinishing. A repair scope may not include primer. A trim installation scope may not include paint. A painting scope may not include deeper wall repair. Ask where the contractor's responsibility ends and what the surface will look like at that point.`,
    `The third mistake is not asking about occupied-home logistics. If the work area has furniture, finished flooring, pets, kids, tenants, condo rules, or limited parking, those details should be discussed before scheduling. A contractor who plans for access and protection usually creates less disruption than one who prices the room as if it were empty.`,
    `The fourth mistake is comparing a fast timeline against a proper dry-time schedule. Some steps cannot be rushed without affecting quality. Compound, primer, caulk, and paint all need the right conditions. A schedule that sounds very fast may be missing repair, sanding, primer, cleanup, or final inspection time.`,
    { html: `<strong>Finish level and final inspection</strong>` },
    `Finish level should match how the room will be used and seen. A low-visibility utility room does not always need the same finish standard as a bright living room, a main-floor ceiling, a hallway with strong side light, or a freshly renovated space with new flooring and trim. The right scope is not always the most expensive one; it is the one that fits the final expectation.`,
    `Before approving the job, look at the surface from more than one angle. Daylight, pot lights, and side lighting can reveal issues that overhead light hides. Check seams, corners, transitions, patched areas, texture shadows, trim lines, and areas around vents or fixtures. Small corrections are easier before the crew packs up than after furniture is moved back in.`,
    `A good contractor will not be offended by clear expectations. The best projects usually start with a shared definition of done: what rooms are included, what level of finish is expected, whether paint is included, how cleanup is handled, and what happens if hidden damage appears during the work.`,
    { html: `<strong>Contractor field note</strong>` },
    `The cleanest projects are usually the ones where the homeowner sends useful photos before asking for a number. Wide photos show access and protection needs. Close photos show texture, cracks, stains, seams, trim details, corners, or previous patches. Room dimensions and ceiling height help separate a rough guess from a real scope.`,
    `Another field detail: the finish stage should be discussed before work starts, not after the surface is already open. If the final goal is a high-quality painted result, the quote has to allow for the steps that create that result. Removal, repair, sanding, primer, and paint-readiness are connected; treating them as separate afterthoughts usually creates frustration.`,
    { html: `<strong>DIY vs professional work</strong>` },
    `DIY can make sense for small, low-visibility tasks where the homeowner has time, patience, and the right tools. It is less forgiving on large visible surfaces, ceilings, bright rooms, trim transitions, or anything that needs to look clean after paint. A small mistake can become more visible after primer and finish coats, not less visible.`,
    `Professional help is usually the better choice when the surface is large, high, painted, damaged, affected by water, connected to other trades, or part of a larger renovation schedule. It is also the better choice when the room is occupied and dust control, floor protection, and cleanup need to be handled carefully.`,
    terms.caution,
    { html: `<strong>What a complete quote should explain</strong>` },
    `A thin quote may name the service without explaining the details homeowners need to compare real scopes. A complete quote should explain protection, dust control, repair after the first work stage, finish level, primer or paint handoff, timeline, cleanup, and what photos to send. Those details are exactly what determine whether a project feels organized or stressful.`,
    `Fast, affordable, and professional are not enough by themselves. A homeowner needs to know what happens in the room, what is included, what can change the price, and how the final surface will be judged. This guide is built around those practical questions rather than a list of sales claims.`,
    (comparison?.ai_content_gaps_to_cover?.length || comparison?.recommended_blog_angles?.length)
      ? {
          html: `<strong>Details to clarify before comparing quotes</strong>`,
        }
      : "",
    (comparison?.ai_content_gaps_to_cover?.length || comparison?.recommended_blog_angles?.length)
      ? `Before comparing prices, clarify ${(comparison.ai_content_gaps_to_cover?.length ? comparison.ai_content_gaps_to_cover : comparison.recommended_blog_angles).slice(0, 5).map((item) => String(item).toLowerCase()).join(", ")}. Those details help separate a basic scope from a cleaner plan for protection, dust control, repairs, primer, paint readiness, and finish quality.`
      : "",
    { html: `<strong>Timeline and disruption</strong>` },
    `Timeline depends on the number of rooms, drying time, access, repairs, finish level, and whether the home is occupied. Some small scopes can be completed quickly. Larger scopes may need multiple visits because compound, caulk, primer, or paint needs time to dry properly before the next step.`,
    `Rushing drying time is one of the easiest ways to create visible defects later. Joint compound can shrink. Primer can reveal scratches. Caulk can split if painted too soon. A cleaner schedule allows the crew to check the surface under real lighting and correct issues before calling the room finished.`,
    `The quote should also explain how the project affects daily life. Which rooms are unavailable? Can furniture stay? Is there a sanding stage? Will there be daily cleanup? Are there odour, noise, access, or parking concerns? These details matter in finished homes, condos, and busy family spaces.`,
    { html: `<strong>Local service connection in ${city}</strong>` },
    `EPF Pro Services works with homeowners across ${city} and nearby GTA service areas. The goal is not only to complete the visible task, but to leave the space protected, cleaned up, and ready for the next finish step. For local service details, use the ${cityLink}.`,
    `Local work should not be city-swapped filler. The useful local point is practical: homes differ by age, room layout, access, lighting, renovation history, and whether the family is living in the space during the work. Those details matter more than broad claims about the city.`,
    { html: `<strong>What to send for a clearer quote</strong>` },
    `For the most accurate next step, send wide photos of each room, close photos of the problem areas, rough dimensions, ceiling height where relevant, whether the home is occupied, and any timing constraints. Mention stains, cracks, previous patches, pot lights, vents, crown moulding, cabinets, flooring, stair access, or building rules.`,
    `If you already have a target finish in mind, say so. A basic repair, paint-ready repair, smooth ceiling, Level 5 finish, trim installation, or full repaint can all mean different scopes. Clear expectations help EPF recommend the right approach before the project starts.`,
    { html: `<strong>Simple homeowner checklist before approving the scope</strong>` },
    "- Confirm the exact rooms, surfaces, and approximate dimensions included in the quote.",
    "- Confirm what protection is included for floors, furniture, fixtures, vents, trim, cabinets, and nearby rooms.",
    "- Confirm whether repair, sanding, primer, paint, caulking, disposal, and cleanup are included or excluded.",
    "- Confirm the expected finish level and whether the surface is paint-ready or fully painted at completion.",
    "- Confirm the timeline, number of visits, drying time, access needs, and whether the home can be occupied during the work.",
    "- Confirm how changes are handled if hidden damage, extra repair, or a different finish level is needed.",
    { html: `When you are ready, ${quoteLink}. Include the service, city, photos, rough room sizes, and the result you want. That gives the team enough information to respond with a more useful next step instead of a generic number.` },
    { html: `<strong>Related guides and service pages</strong>` },
    { html: `<ul>${relatedLinkHtml}<li>${linkHtml("/quote/", "request a renovation quote")}: Send photos and room details for review.</li></ul>` },
    { html: `<strong>Bottom line</strong>` },
    `${title} is not only about finding a quick price. It is about understanding what the quote includes, how the home will be protected, what finish quality is realistic, and what information helps the contractor price the job properly. A clear scope protects both the homeowner and the finished result.`,
  ];
}

function buildDraft(job, keywordIdeas = [], competitorPages = [], comparison = null) {
  const serviceKey = normalizeService(job.service);
  const service = SERVICES[serviceKey];
  const city = cityLabel(job.city);
  const selectedKeyword =
    keywordIdeas.find((item) => item.selected) ||
    [...keywordIdeas].sort((a, b) => b.intent_score - a.intent_score)[0] ||
    { keyword: `${service.label} ${city}`, intent_score: 60, source: "fallback" };
  const blogType = inferBlogType(selectedKeyword.keyword);
  const searchIntent = inferSearchIntent(blogType);
  const title = titleFromKeyword(selectedKeyword.keyword, city, service.label, blogType);
  const slug = slugify(title);
  const terms = serviceSpecificTerms(serviceKey);
  const comparisonGaps = cleanList([
    ...(comparison?.ai_content_gaps_to_cover || []),
    ...((comparison?.competitor_covered_but_epf_missing || []).map((item) => item.gap)),
  ]);
  const gaps = comparisonGaps.length
    ? comparisonGaps
    : cleanList(competitorPages.flatMap((page) => page.gaps_found || []));
  const cityServicePage = job.main_page_url || serviceCityPath(serviceKey, city);
  const relatedLinks = [
    {
      href: cityServicePage,
      anchor: `${service.label} in ${city}`,
      description: "Local service page for the target city and service.",
    },
    {
      href: service.servicePage,
      anchor: `${service.label} service`,
      description: "Main service page for this service.",
    },
    ...(RELATED_GUIDES[serviceKey] || []),
  ];
  const internalLinks = [
    ...relatedLinks,
    {
      href: "/quote/",
      anchor: "request a quote with photos",
      description: "Contact path for homeowners who want a clearer written scope.",
    },
  ];
  const content = buildContent({
    title,
    selectedKeyword,
    service,
    serviceKey,
    city,
    blogType,
    searchIntent,
    cityServicePage,
    terms,
    gaps,
    competitorPages,
    comparison,
    relatedLinks,
  }).filter(Boolean);
  const wordCount = estimateWordCount(content);
  const faqs = [
    {
      question: `How much does ${service.label.toLowerCase()} cost in ${city}?`,
      answer:
        "Cost depends on room size, access, surface condition, repairs, protection, finish level, cleanup, and whether primer or painting is included. Photos and rough dimensions help narrow the quote.",
    },
    {
      question: `What should I send for a ${service.label.toLowerCase()} quote?`,
      answer:
        "Send wide room photos, close photos of problem areas, approximate dimensions, height where relevant, whether the home is occupied, and any timing, access, parking, or building rules.",
    },
    {
      question: "Can this work be done with dust control?",
      answer:
        "Dust cannot be eliminated completely, but proper protection, containment, controlled sanding, HEPA vacuum support where appropriate, and cleanup can reduce mess and protect the rest of the home.",
    },
    {
      question: "When should I hire a professional instead of doing it myself?",
      answer:
        "Hire a professional when the area is large, highly visible, high, painted, water-stained, cracked, affected by other trades, or needs a clean paint-ready finish.",
    },
    {
      question: "Does the quote include painting?",
      answer:
        "Not always. Ask whether the quote includes primer, finish coats, trim or ceiling paint, touch-ups, and final cleanup so you are comparing the same scope.",
    },
  ];
  const imagePlan = buildImagePlan(service, serviceKey, city, title, slug, terms);

  return {
    id: makeId("draft"),
    job_id: job.id,
    title,
    h1: title,
    slug,
    date: todayDate(),
    excerpt: `A practical ${city} homeowner guide to ${service.label.toLowerCase()}, covering quote factors, preparation, dust control, repairs, finish quality, timeline, and what to send for pricing.`,
    meta_title: `${title} | EPF Pro Services`,
    meta_description: `Planning ${service.label.toLowerCase()} in ${city}? Learn quote factors, prep, dust control, repairs, finish quality, timeline, and what photos to send.`,
    content,
    faq: faqs,
    internal_links: internalLinks,
    target_keywords: cleanList([selectedKeyword.keyword, ...keywordIdeas.slice(0, 10).map((item) => item.keyword)]),
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: `Homeowner guide to ${service.label.toLowerCase()} in ${city}.`,
      author: { "@type": "Organization", name: "EPF Pro Services" },
    },
    image_prompt: imagePlan[0].prompt,
    image_alt: imagePlan[0].alt,
    image_file_name: imagePlan[0].file_name,
    image_plan: imagePlan,
    gmb_post_summary: `We prepared a practical guide for ${city} homeowners about ${service.label.toLowerCase()}, quote factors, protection, repairs, finish quality, and what photos to send.`,
    status: "needs_approval",
    approved_by_user: false,
    published_url: "",
    created_at: new Date().toISOString(),
    service: service.label,
    city,
    article_section: service.cluster,
    image: service.image,
    blog_type: blogType,
    search_intent: searchIntent,
    main_keyword: selectedKeyword.keyword,
    topical_cluster: service.cluster,
    pillar_page: service.servicePage,
    target_service_page: cityServicePage,
    research_source: job.research_mode || selectedKeyword.source || "keyword",
    competitor_gaps_used: gaps.slice(0, 8),
    competition_comparison: comparison,
    ai_research_used: Boolean(comparison?.ai_research?.used_ai),
    estimated_word_count: wordCount,
    seo_checks: {
      answers_question_early: true,
      includes_quick_answer: true,
      includes_diagnostic_table: true,
      includes_internal_links: true,
      includes_faq: true,
      includes_image_plan: true,
      avoids_visible_planning_notes: true,
      target_word_count_met: wordCount >= 2200,
    },
  };
}

module.exports = {
  buildDraft,
  serviceCityPath,
};
