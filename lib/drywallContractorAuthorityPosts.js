const DATE = "2026-06-17";

const link = (href, anchor) =>
  `<a href="${href}" class="text-blue-600 font-semibold hover:underline">${anchor}</a>`;

const heading = (text) => ({ html: `<strong>${text}</strong>` });

const cta = (city, label = "drywall scope") => ({
  html: `<div class="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"><p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Plan the scope before pricing</p><p class="mt-2 text-lg font-semibold text-slate-950">For a clearer ${city} ${label} quote, send wide room photos, close-ups of seams or damage, rough dimensions, ceiling height, timing, and whether painting is included. EPF can confirm whether the job needs repair, installation, taping, skim coating, or a full paint-ready finish.</p><p class="mt-3"><a href="/quote/" class="inline-flex rounded-lg bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-800">Send photos for a drywall quote</a></p></div>`,
});

const scopeTable = (city) => ({
  html: `<div class="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"><table class="min-w-full text-left text-sm"><thead class="bg-slate-100 text-slate-900"><tr><th class="px-4 py-3 font-bold">Drywall scope</th><th class="px-4 py-3 font-bold">What it includes</th><th class="px-4 py-3 font-bold">Why it matters in ${city}</th></tr></thead><tbody class="divide-y divide-slate-200 text-slate-700"><tr><td class="px-4 py-3 font-semibold text-slate-900">Repair</td><td class="px-4 py-3">Patching holes, cracks, water cut-outs, failed tape, dents, ceiling damage, and trade openings.</td><td class="px-4 py-3">Good repair prevents patch lines from showing after primer and paint.</td></tr><tr><td class="px-4 py-3 font-semibold text-slate-900">Installation</td><td class="px-4 py-3">Board hanging for basements, ceilings, additions, remodels, and rebuilt wall sections.</td><td class="px-4 py-3">Straight layout and proper fastening affect every finishing coat after it.</td></tr><tr><td class="px-4 py-3 font-semibold text-slate-900">Taping and mudding</td><td class="px-4 py-3">Embedding tape, building coats, corner bead, inside corners, and feathered compound work.</td><td class="px-4 py-3">This is where rushed drywall starts to show humps, seams, and corner problems.</td></tr><tr><td class="px-4 py-3 font-semibold text-slate-900">Paint-ready finishing</td><td class="px-4 py-3">Sanding, skim coating where needed, primer planning, and final checks under real light.</td><td class="px-4 py-3">Bright rooms, pot lights, and smooth paint expose weak finish work quickly.</td></tr></tbody></table></div>`,
});

const processItems = [
  "Review photos, room size, ceiling height, access, and existing wall or ceiling condition.",
  "Protect floors, nearby rooms, vents, trim, cabinets, and finished surfaces before work starts.",
  "Hang new drywall or repair damaged board with backing, proper fastening, and clean cut-outs.",
  "Tape, mud, install corner bead, and skim where needed so seams and repairs are feathered properly.",
  "Sand with dust control and HEPA vacuum support where appropriate instead of spreading dust through the home.",
  "Prime or leave the surface paint-ready depending on the written scope and next trade.",
  "Clean the work area, review the finish, and explain what should happen before painting.",
];

const cityConfigs = {
  hamilton: {
    city: "Hamilton",
    install: "/services/drywall-installation/hamilton/",
    repair: "/services/drywall-repair/hamilton/",
    local:
      "Hamilton projects can range from older homes and basement suites to additions, lofts, rental units, and commercial interiors. A useful drywall scope should account for ceiling height, older framing, rough-in timing, stair access, lower-level moisture history, and whether the room is occupied during the work.",
    notes: [
      "In Hamilton basements, ceiling details, bulkheads, service lines, and headroom often decide how clean the finished space feels. Board hanging should be planned around those details before taping begins.",
      "Older Hamilton homes can have mixed surfaces, previous repairs, plaster transitions, or walls that are not perfectly straight. A drywall contractor should identify those conditions instead of pretending every wall is new construction.",
      "When electrical, plumbing, HVAC, or pot-light work happens first, drywall repair and installation should be sequenced after the rough-ins are ready. That prevents repeat cut-outs and patching after the finish stage.",
    ],
  },
  burlington: {
    city: "Burlington",
    install: "/services/drywall-installation/burlington/",
    repair: "/services/drywall-repair/burlington/",
    local:
      "Burlington drywall projects often involve family homes, finished basements, kitchens, stairwells, ceilings, and repair work after other trades. The practical challenge is protecting lived-in spaces while still getting straight seams, clean sanding, and a paint-ready result.",
    notes: [
      "Many Burlington homes need room-by-room sequencing so bedrooms, kitchens, and family spaces can stay usable. That makes protection, cleanup, and clear communication part of the drywall scope.",
      "Stairwells, hallways, and open main floors can show seams under side light. A drywall contractor should plan finishing around how the room will actually be painted and lit.",
      "Repair and installation often overlap in Burlington renovations. A kitchen opening, basement rebuild, or electrical cut-out can need new board in one area and repair blending in the surrounding walls.",
    ],
  },
  oakville: {
    city: "Oakville",
    install: "/services/drywall-installation/oakville/",
    repair: "/services/drywall-repair/oakville/",
    local:
      "Oakville projects often put extra pressure on finish quality because bright rooms, large windows, smooth ceilings, and detailed trim can reveal seams quickly. The quote should define the finish level, sanding control, primer handoff, and how the surface will be checked before paint.",
    notes: [
      "Strong daylight in Oakville living rooms and stairwells can reveal butt joints, patch ridges, and sanding marks that might be hidden in a darker room.",
      "Level 5 finishing is not always necessary, but it can make sense on high-visibility walls, smooth ceilings, long sightlines, or rooms with pot lights and flat paint.",
      "Oakville renovations often connect drywall with painting, trim, and ceiling refinishing. A cleaner drywall plan helps the next finish trades avoid extra touch-ups.",
    ],
  },
  mississauga: {
    city: "Mississauga",
    install: "/services/drywall-installation/mississauga/",
    repair: "/services/drywall-repair/mississauga/",
    local:
      "Mississauga drywall work often happens in occupied homes, condos, townhomes, basements, and main-floor renovations. Access, elevators, parking, furniture protection, and scheduling around other trades can matter as much as the board and compound.",
    notes: [
      "Mississauga condos and townhomes can need tighter access planning, hallway protection, elevator timing, and cleaner daily cleanup.",
      "Basement drywall in Mississauga should be planned around framing, insulation, mechanicals, ceiling bulkheads, and whether the final room needs Level 4 or Level 5 finishing.",
      "Repair work after electricians, plumbers, cable installers, leaks, or fixture changes should be blended wide enough that the patch does not show after painting.",
    ],
  },
};

const relatedBlogLinks = [
  {
    href: "/blog/level-4-vs-level-5-drywall-finish-gta/",
    anchor: "Level 4 vs Level 5 drywall finish",
    description:
      "Helpful if you are deciding how smooth the finished wall or ceiling needs to be.",
  },
  {
    href: "/blog/drywall-hanging-taping-finishing-guide/",
    anchor: "drywall hanging, taping, and finishing guide",
    description:
      "Broader guide to the stages behind board hanging, taping, mudding, sanding, and paint-ready handoff.",
  },
  {
    href: "/blog/why-drywall-patches-show-through-paint/",
    anchor: "why drywall patches show through paint",
    description:
      "Useful if your project includes patching, primer, and interior painting after drywall work.",
  },
];

function baseLinks(city, extraLinks = []) {
  return [
    ...extraLinks,
    {
      href: city.install,
      anchor: `drywall installation in ${city.city}`,
      description: "City service page for board hanging, taping, sanding, and paint-ready finishing.",
    },
    {
      href: city.repair,
      anchor: `drywall repair in ${city.city}`,
      description: "City service page for holes, cracks, ceiling repairs, cut-outs, and patch finishing.",
    },
    {
      href: "/services/drywall-installation/",
      anchor: "drywall installation service",
      description: "Main drywall installation hub for full-room and renovation drywall scopes.",
    },
    {
      href: "/services/drywall-repair/",
      anchor: "drywall repair service",
      description: "Main drywall repair hub for patching, ceiling repair, seams, cracks, and dents.",
    },
    relatedBlogLinks[0],
    {
      href: "/services/interior-painting/",
      anchor: "interior painting after drywall work",
      description: "Helpful when the drywall scope needs primer, wall paint, trim, or ceiling painting.",
    },
    {
      href: "/quote/",
      anchor: "request a drywall quote",
      description: "Send photos, dimensions, timing, and finish expectations for review.",
    },
  ].slice(0, 8);
}

function buildImagePlan(post) {
  return [
    {
      role: "Featured image",
      file_name: post.imageFile,
      alt: post.imageAlt,
      prompt: post.imagePrompt,
    },
    {
      role: "Process image",
      file_name: post.slug + "-taping-process.webp",
      alt: `${post.city.city} drywall taping and mudding process before sanding`,
      prompt: `Realistic professional home renovation photo of drywall taping and mudding in a clean ${post.city.city} area Ontario home. Show protected floors, visible seams, compound pan, broad knives, and a practical work setup. Avoid text, logos, fake watermarks, unsafe work, and people's faces.`,
    },
    {
      role: "Finish image",
      file_name: post.slug + "-paint-ready-finish.webp",
      alt: `${post.city.city} paint-ready drywall finish after sanding and final checks`,
      prompt: `Realistic professional home renovation photo of smooth paint-ready drywall in an Ontario home after sanding and final inspection. Show clean walls or ceiling, natural daylight, simple residential interior, no people, no text, no logos, no watermark.`,
    },
  ];
}

function faqItems(post) {
  const city = post.city.city;
  const isBasement = post.kind === "basement";
  const isComparison = post.kind === "comparison";
  const isLevel5 = post.kind === "level5";
  return [
    {
      question: `How much does a drywall contractor cost in ${city}?`,
      answer:
        "Cost depends on square footage, ceiling height, access, board type, repair size, finish level, number of coats, sanding control, cleanup, and whether primer or painting is included. Photos and rough dimensions help narrow the quote.",
    },
    {
      question: `Do I need drywall repair or drywall installation in ${city}?`,
      answer: isComparison
        ? "Repair is usually enough for isolated holes, cracks, tape failure, dents, and trade cut-outs. Installation is usually needed for full rooms, basements, additions, water-damaged sections, or walls and ceilings that need new board."
        : "Repair is usually for localized damage. Installation is for new rooms, replaced board, basements, additions, or larger renovation areas. Many projects include both.",
    },
    {
      question: "Does drywall work include taping, mudding, and sanding?",
      answer:
        "It should be clearly stated in the quote. EPF scopes can include hanging, repair, taping, mudding, sanding with dust control, primer planning, and paint-ready finishing depending on what the room needs.",
    },
    {
      question: "What does paint-ready drywall mean?",
      answer:
        "Paint-ready drywall should be properly taped, coated, sanded, checked for ridges or scratches, and ready for primer. It does not always mean final paint is included, so that should be confirmed in writing.",
    },
    {
      question: "When is Level 5 drywall finishing worth it?",
      answer: isLevel5
        ? "Level 5 is worth considering on smooth ceilings, high-visibility walls, rooms with large windows, strong side light, pot lights, or darker paint colours that can reveal small surface defects."
        : "Level 5 can make sense on bright walls, smooth ceilings, long sightlines, and areas with strong raking light. Standard rooms may only need a clean Level 4 finish.",
    },
    {
      question: isBasement
        ? `What makes basement drywall different in ${city}?`
        : "Can drywall work be done in an occupied home?",
      answer: isBasement
        ? "Basements need planning around framing, bulkheads, mechanical lines, access, moisture history, ceiling height, stair transitions, and finishing expectations before board is installed."
        : "Yes. Occupied homes need floor protection, dust control, room-by-room sequencing, daily cleanup, and clear access planning so the rest of the home stays usable.",
    },
    {
      question: "What photos should I send for a drywall quote?",
      answer:
        "Send wide photos of each room, close-ups of damage or seams, rough dimensions, ceiling height, photos of electrical or plumbing cut-outs, and notes about timing, access, furniture, and painting.",
    },
    {
      question: "Can drywall repair be coordinated with painting?",
      answer:
        "Yes. Drywall repair and installation should be planned before interior painting so patches, seams, sanding scratches, primer, and finish coats are sequenced cleanly.",
    },
  ];
}

function introParagraphs(post) {
  const city = post.city;
  if (post.kind === "basement") {
    return [
      `${city.city} basement drywall projects need more planning than a basic bedroom wall. Bulkheads, low ceilings, stairs, plumbing, electrical lines, moisture history, insulation, and access can all affect how the board is installed and how clean the final finish looks under paint.`,
      {
        html: `If the basement needs new board, start with ${link(city.install, post.primaryAnchor || `drywall installation in ${city.city}`)} so the hanging, taping, mudding, sanding, and paint-ready handoff are scoped together. If part of the basement already has damage, the related ${link(city.repair, `drywall repair in ${city.city}`)} page explains patching and repair options.`,
      },
      `This guide explains how a basement drywall contractor should think through board hanging, taping, smooth finishing, dust control, timelines, and quote details before the work starts.`,
    ];
  }
  if (post.kind === "comparison") {
    return [
      `Burlington homeowners often ask whether they need drywall repair or drywall installation because the difference is not always obvious. A small hole after electrical work is usually a repair. A basement wall, ceiling rebuild, or damaged section that needs new board is closer to installation.`,
      {
        html: `For isolated damage, start with ${link(city.repair, post.primaryAnchor || "drywall repair in Burlington")}. When the scope becomes a full wall, ceiling, basement, or renovation area, compare it with ${link(city.install, "drywall installation in Burlington")} before approving a quote.`,
      },
      "This guide explains how to choose between repair and installation, what taping and finishing should include, and when a proper drywall contractor is safer than a handyman patch.",
    ];
  }
  if (post.kind === "level5") {
    return [
      `Oakville drywall finishing can be unforgiving when rooms have large windows, smooth ceilings, pot lights, long sightlines, or darker paint. Level 5 drywall finishing is not needed everywhere, but it can be the difference between a wall that looks acceptable and a wall that still looks clean after primer and paint.`,
      {
        html: `For new board or finish-level planning, start with ${link(city.install, post.primaryAnchor || "drywall installation in Oakville")}. If the surface already has damaged seams, dents, or cut-outs, review ${link(city.repair, "drywall repair in Oakville")} before choosing Level 4 or Level 5.`,
      },
      "This guide explains when Level 5 makes sense, what it should include, and how to compare finish quality before hiring a drywall contractor.",
    ];
  }
  return [
    `${city.city} homeowners and renovators often search for a drywall contractor when the project is bigger than a simple patch but not always large enough to feel like a full renovation. The real question is usually scope: do you need installation, repair, taping, mudding, sanding, Level 4 finishing, Level 5 finishing, primer, or a paint-ready handoff?`,
    {
      html: `For full-room or renovation work, start with ${link(city.install, post.primaryAnchor || `drywall installation in ${city.city}`)}. If the issue is holes, cracks, failed tape, ceiling damage, or openings left by other trades, compare that with ${link(city.repair, post.secondaryAnchor || `drywall repair in ${city.city}`)} before choosing a contractor.`,
    },
    `This guide explains what a drywall contractor does, how repair and installation differ, what affects price and timeline, and what EPF Pro Services looks for before leaving a wall or ceiling paint-ready.`,
  ];
}

function focusSection(post) {
  const city = post.city.city;
  if (post.kind === "basement") {
    return [
      heading(`Basement drywall planning in ${city}`),
      `Basement drywall is not only about closing the walls. The contractor has to read the framing, ceiling height, bulkheads, mechanical lines, insulation, vapour control details, and stair access before board is delivered. If these details are ignored, the basement can feel patched together even after it is painted.`,
      `Board hanging in a basement should account for long wall runs, service chases, outside corners, windows, laundry rooms, utility areas, and transitions into stairwells. Taping and mudding also need enough drying time because lower levels can behave differently from upper floors. A rushed schedule can lead to shrinkage, sanding marks, or seams that appear after primer.`,
      `A useful basement quote should separate board installation, taping, sanding, finish level, primer, painting, cleanup, and disposal. It should also confirm whether the contractor is working around existing flooring, finished stairs, storage, furniture, or other trades still on site.`,
    ];
  }
  if (post.kind === "comparison") {
    return [
      heading("Drywall repair vs drywall installation: how to choose"),
      "Choose repair when the damage is isolated and the surrounding drywall is stable. That can include small holes, nail pops, dents, cracks, failed tape, minor ceiling damage, or access holes after plumbing and electrical work. The goal is to rebuild the damaged area, feather the repair wide, sand cleanly, and leave the surface ready for primer.",
      "Choose installation when the scope involves new rooms, full walls, basement finishing, ceiling replacement, additions, large water-damaged areas, or board that has been removed during demolition. Installation includes layout, board hanging, fastening, taping, mudding, sanding, and finish-level planning. It is usually more than a patch.",
      "Some Burlington projects need both. A basement renovation might require new board in one room and repair blending in the stairwell. A kitchen remodel might need installation around an opening and repair on surrounding walls. The quote should explain where repair ends and installation begins.",
    ];
  }
  if (post.kind === "level5") {
    return [
      heading("When Level 5 drywall finishing is worth the extra care"),
      "Level 5 drywall finishing adds a skim coat or full-surface treatment over the finished drywall system to reduce surface variation before primer and paint. It is not magic, and it does not fix bad framing or poor board layout by itself. It works best when the installation and taping are already sound.",
      "In Oakville homes, Level 5 is most useful on smooth ceilings, high walls, rooms with large windows, feature walls, long hallways, and spaces with pot lights or strong side light. These surfaces can reveal small changes in texture, paper face, compound, sanding, and primer. A standard finish can look fine in one room and weak in another simply because the lighting is different.",
      "A Level 5 quote should explain the surface preparation, skim method, sanding control, primer expectations, and final inspection. It should also say where Level 5 is useful and where Level 4 is enough. The right contractor should not sell a higher finish everywhere if the room does not need it.",
    ];
  }
  return [
    heading(`What a drywall contractor does in ${city}`),
    "A drywall contractor handles the work that turns open framing, damaged board, cut-outs, or rough surfaces into walls and ceilings that are ready for the next finish. That can include board hanging, screw pattern, backing, cut-outs, corner bead, taping, mudding, sanding, skim coating, primer planning, and final checks before paint.",
    "The contractor also decides how far the scope should go. A small repair may need backing, a drywall insert, tape, compound coats, sanding, and primer. A full installation may need material delivery, board lifts, ceiling layout, corner bead, taping, mudding, sanding, and a defined finish level. A ceiling or bright wall may need more careful finishing than a utility room.",
    "Good drywall work is quiet quality. The room should not draw attention to seams, fastener spots, patch edges, sanding scratches, or corners after paint. That only happens when installation and finishing are planned together.",
  ];
}

function buildContent(post) {
  const city = post.city;
  const serviceLabel = post.kind === "level5"
    ? "Level 5 drywall finishing"
    : post.kind === "basement"
      ? "basement drywall"
      : "drywall contractor work";
  return [
    ...introParagraphs(post),
    cta(city.city, serviceLabel),
    heading("Quick answer"),
    post.quickAnswer,
    heading("Drywall repair, installation, taping and finishing compared"),
    "Drywall quotes can sound similar while covering very different work. One contractor may price only the board hanging. Another may include taping, mudding, sanding, primer, cleanup, and repair blending. Homeowners should compare the actual scope, not just the word drywall.",
    scopeTable(city.city),
    focusSection(post)[0],
    ...focusSection(post).slice(1),
    heading("Installation vs repair vs taping, mudding and finishing"),
    `Drywall installation is usually the right term when new board is being hung. That includes basements, additions, rebuilt ceilings, remodels, and larger wall sections. The quality starts with layout, board type, fastening, clean cut-outs, and proper backing. If those choices are wrong, taping and paint will not fully hide the problem.`,
    "Drywall repair is more focused. It deals with holes, cracks, failed seams, water-stained sections, dented corners, nail pops, and trade cut-outs. A repair can still require strong backing, new board, tape, multiple compound coats, sanding, primer, and repaint planning. Small does not always mean simple if the repair sits in strong light.",
    "Taping and mudding are the bridge between board and finish. Tape reinforces seams and inside corners. Compound coats build a feathered transition. Corner bead protects outside corners. Each coat needs enough time to dry and enough width to avoid a visible ridge after sanding.",
    "Finishing is the stage homeowners judge after paint. Level 4 is common for many painted walls and ceilings. Level 5 adds extra surface treatment for higher-visibility areas. The right finish level depends on lighting, paint sheen, room use, and how smooth the final surface needs to look.",
    heading("When you need a drywall contractor instead of a handyman"),
    "A handyman may be fine for a tiny low-visibility patch where the final finish is not critical. A drywall contractor is the safer choice when the work affects a larger wall, a ceiling, a basement, a bright room, repeated cracks, failed tape, water damage, or any surface that must look clean after primer and paint.",
    "You should also choose a drywall contractor when the work connects with other trades. Electrical openings, plumbing access, HVAC changes, pot lights, bulkheads, framing changes, and insulation work can all affect drywall sequencing. If the drywall is closed too early or patched too narrowly, another trade may need to open it again.",
    "Ceilings are another reason to hire a drywall specialist. Overhead work is harder to hang, tape, sand, and inspect. Pot lights and daylight can expose small waves, ridges, and sanding marks. A ceiling patch that looks acceptable before primer can become obvious after flat ceiling paint.",
    "The contractor should be able to explain the repair method, finish level, dust-control plan, drying time, and painting handoff. If the quote only says patch drywall with no mention of tape, compound, sanding, primer, protection, or cleanup, it is not detailed enough for a visible room.",
    cta(city.city, serviceLabel),
    heading("What affects drywall cost and timeline"),
    "Drywall cost and timeline depend on the real scope, not only the square footage. Room size matters, but so do ceiling height, board type, number of seams, outside corners, access, furniture, old damage, drying time, sanding control, and whether the job includes primer or paint.",
    "A simple patch can sometimes move quickly. A full basement, ceiling replacement, or multi-room renovation usually needs several stages because compound has to dry between coats. Rushing the schedule can lead to shrinkage, sanding scratches, flashing, and visible seams after paint.",
    `In ${city.city}, access can also affect the day. Finished homes need protection. Condos may need elevator timing. Basements need stair access and material handling. Occupied homes need room-by-room sequencing and daily cleanup. These details are part of the quote, not extras that can be ignored.`,
    "The finish level also changes cost. A utility room may not need the same finish as a bright living room. A smooth ceiling may need more careful sanding and inspection than a closet wall. A Level 5 surface takes more labour because it treats the whole surface, not only the seams.",
    heading("What a paint-ready finish should include"),
    "Paint-ready drywall should be properly fastened, taped, coated, sanded, and checked before primer. It should not have loose tape, proud screws, torn paper, heavy ridges, fuzzy drywall paper, open corner bead, or sanding scratches that will show through the first coat.",
    "Paint-ready does not always mean painted. Some quotes stop when the surface is ready for a painter. Others include primer and finish coats. That line should be clear before work starts. If primer is excluded, the homeowner should still understand whether spot primer or full primer is recommended after repair.",
    "A good handoff also explains what to expect from lighting. Strong side light can reveal small imperfections that normal overhead light hides. A contractor should inspect visible walls and ceilings from more than one angle before calling the job ready.",
    {
      html: `When drywall work is followed by painting, the related ${link("/services/interior-painting/", "interior painting service")} can help coordinate primer, wall paint, trim paint, and final finish coats after the drywall has been repaired or installed.`,
    },
    heading("EPF Pro Services drywall process"),
    "EPF keeps the process practical because homeowners need to know what will happen inside the room. The details change by project, but a clean drywall scope usually follows this sequence:",
    ...processItems.map((item, index) => `${index + 1}. ${item}`),
    "This process is important because drywall is not finished in one visible step. The final look comes from many smaller decisions: how the board is supported, how seams are placed, how wide the compound is feathered, how sanding is controlled, and whether primer or painting is planned after the surface is ready.",
    heading(`Local drywall service notes for ${city.city}`),
    city.local,
    ...city.notes,
    "Local service content should be useful, not a city name swapped into the same sentence. The practical local point is that homes differ by age, access, lighting, room use, and renovation history. A drywall quote should account for those conditions before pricing the job.",
    heading("Questions to ask before hiring a drywall contractor"),
    "Before hiring, ask what exact surfaces are included, whether the work is repair or installation, how many coats are planned, what finish level is included, whether sanding uses dust control, and whether primer or paint is included. These questions make quotes easier to compare.",
    "- Are board hanging, taping, mudding, sanding, and cleanup all included?",
    "- Is the surface being left paint-ready, primed, or fully painted?",
    "- What finish level is recommended for the room and lighting?",
    "- How will floors, vents, furniture, trim, and nearby rooms be protected?",
    "- What happens if hidden damage, moisture staining, or weak framing is found?",
    "- How many visits are expected and what drying time is needed?",
    "- What photos, room sizes, and access details should I send before scheduling?",
    heading("Common drywall quote mistakes to avoid"),
    "The most common mistake is comparing two prices without comparing the scope. One quote may include only board hanging or a quick patch. Another may include protection, taping, compound coats, sanding, primer planning, cleanup, and a paint-ready inspection. Those are not the same job, even if both contractors use the word drywall.",
    "Another mistake is assuming the finish level is obvious. A contractor may think Level 4 is enough for a standard wall, while the homeowner expects a smoother surface for strong daylight, pot lights, or darker paint. That expectation should be discussed before the work begins, not after primer reveals every small ridge.",
    "Homeowners should also avoid approving a quote that ignores the surrounding room. A wall patch beside new trim, fresh flooring, cabinets, or a finished staircase needs more protection and more careful sanding than a rough renovation area. The setup can be part of the value, especially in occupied homes.",
    "The last mistake is treating primer and painting as automatic. Drywall can be left paint-ready, spot-primed, fully primed, or painted depending on the agreement. If that line is unclear, the homeowner may think the room is finished while the painter still sees repair edges, sanding dust, or unsealed compound.",
    heading("What to send before asking for a price"),
    "Good photos help a drywall contractor understand the scope before the first visit. Send one wide photo from each corner of the room, close photos of damage, seams, corners, stains, ceiling areas, and any openings left by electricians, plumbers, HVAC work, TV mounts, pot lights, or old fixtures.",
    "Add rough dimensions, ceiling height, whether the room is furnished, whether floors are finished, and whether painting is already scheduled. For basements, mention bulkheads, low ceilings, storage, stairs, utility rooms, mechanical lines, and any history of moisture or leak repairs. For condos, mention elevator access, parking, building rules, and working-hour limits.",
    "If you already know the final finish expectation, say it clearly. A utility-room repair, a rental refresh, a basement family room, a smooth ceiling, and a high-visibility feature wall all need different levels of care. The better the information, the more useful the quote becomes.",
    heading("How this guide supports your next step"),
    {
      html: `If you are planning the work now, compare the local ${link(city.install, `drywall installation in ${city.city}`)} page with the local ${link(city.repair, `drywall repair in ${city.city}`)} page. For broader service details, review ${link("/services/drywall-installation/", "drywall installation services")} and ${link("/services/drywall-repair/", "drywall repair services")}.`,
    },
    "The best next step is not to guess from a short description. Send photos and a few measurements. EPF can tell you whether the project looks like repair, installation, taping only, finishing correction, basement drywall, or a paint-ready scope that should be quoted in more detail.",
    cta(city.city, serviceLabel),
    heading("Bottom line"),
    `${post.h1} is about more than finding someone to put compound on a wall. The right drywall contractor should understand installation, repair, taping, mudding, sanding, dust control, finish level, and painting handoff. When those details are clear before the job starts, the final room has a much better chance of looking clean after primer and paint.`,
  ];
}

function createPost(post) {
  const content = buildContent(post);
  return {
    title: post.title,
    h1: post.h1,
    slug: post.slug,
    date: DATE,
    excerpt: post.excerpt,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    author: "Alex - EPF Pro Services",
    reviewedBy: "EPF Pro Services",
    image: `/blog/${post.imageFile}`,
    fieldGuideLayout: true,
    schemaType: "BlogPosting",
    articleSection: "Drywall installation",
    serviceType: "Drywall contractor",
    about: post.primaryKeyword,
    blogType: post.blogType,
    searchIntent: post.searchIntent,
    mainKeyword: post.primaryKeyword,
    topicalCluster: "Drywall installation and repair",
    targetServicePage: post.primaryTarget,
    pillarPage: "/services/drywall-installation/",
    quickAnswer: post.quickAnswer,
    content,
    faqs: faqItems(post),
    keywords: [
      post.primaryKeyword,
      `drywall installation ${post.city.city}`,
      `drywall repair ${post.city.city}`,
      `drywall taping and mudding ${post.city.city}`,
      `paint-ready drywall ${post.city.city}`,
      `Level 5 drywall finish ${post.city.city}`,
    ],
    photos: [
      {
        src: `/blog/${post.imageFile}`,
        alt: post.imageAlt,
        description: post.imageDescription,
      },
      {
        src: "/gallery/drywall-installation/drywall-installation-hero.webp",
        alt: "Drywall board installation before taping and finishing",
        description:
          "Straight board layout and proper fastening matter before mudding begins.",
      },
      {
        src: "/gallery/drywall-repair/drywall-repair-service00003.webp",
        alt: "Drywall taping and compound work before sanding",
        description:
          "Taping, mudding, and sanding determine whether the wall is truly paint-ready.",
      },
    ],
    links: baseLinks(post.city, post.extraLinks || []),
    imagePlan: buildImagePlan(post),
    seoChecks: {
      answersQuestionEarly: true,
      includesQuickAnswer: true,
      includesComparisonTable: true,
      includesProcess: true,
      includesFaq: true,
      includesInternalLinks: true,
      avoidsVisiblePlanningNotes: true,
    },
  };
}

const rawPosts = [
  {
    kind: "main",
    city: cityConfigs.hamilton,
    slug: "drywall-contractor-hamilton-guide",
    title:
      "Drywall Contractor Hamilton: Installation, Repair, Taping & Paint-Ready Finishing",
    h1: "Drywall Contractor in Hamilton for Clean, Paint-Ready Walls and Ceilings",
    primaryKeyword: "drywall contractor Hamilton",
    primaryTarget: "/services/drywall-installation/hamilton/",
    primaryAnchor: "drywall installation in Hamilton",
    secondaryAnchor: "drywall repair in Hamilton",
    metaTitle: "Drywall Contractor Hamilton | EPF Pro Services",
    metaDescription:
      "Hamilton drywall contractor guide for installation, repair, taping, mudding, dust control, Level 5 finishing, timelines, cleanup, and quote planning.",
    excerpt:
      "A Hamilton homeowner guide to drywall contractor scopes, installation, repair, taping, sanding, Level 4 and Level 5 paint-ready finishing.",
    quickAnswer:
      "A Hamilton drywall contractor should be able to handle board hanging, drywall repair, taping, mudding, sanding, dust control, and paint-ready finishing. The quote should explain whether the scope includes installation, repair, finishing level, primer, cleanup, and what happens if hidden damage appears.",
    imageFile: "drywall-contractor-hamilton-guide-featured.png",
    imageAlt:
      "Hamilton room with new drywall installation, protected floors, and taped seams before finishing.",
    imageDescription:
      "Generated drywall installation scene showing protected floors, board hanging, and taping prep.",
    imagePrompt:
      "Realistic professional home renovation photo of drywall contractor work in a Hamilton Ontario home. Show new drywall board installed on walls and ceiling, protected floors, visible taped seams, joint compound tools, clean work area, natural daylight, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury design, and people's faces.",
    blogType: "Local homeowner guide",
    searchIntent: "Local service research and pre-estimate research",
  },
  {
    kind: "basement",
    city: cityConfigs.hamilton,
    slug: "basement-drywall-contractor-hamilton",
    title:
      "Basement Drywall Contractor Hamilton: Board Hanging, Taping & Smooth Finishing",
    h1: "Basement Drywall Contractor in Hamilton",
    primaryKeyword: "basement drywall contractor Hamilton",
    primaryTarget: "/services/drywall-installation/hamilton/",
    metaTitle: "Basement Drywall Contractor Hamilton | EPF",
    metaDescription:
      "Hamilton basement drywall guide for board hanging, taping, mudding, sanding, smooth finishing, dust control, cleanup, quote scope, and timelines.",
    excerpt:
      "A Hamilton basement drywall guide covering board hanging, taping, mudding, ceiling details, dust-controlled sanding, finishing, and quote planning.",
    quickAnswer:
      "A basement drywall contractor in Hamilton should plan around framing, bulkheads, stairs, ceiling height, mechanical lines, access, moisture history, taping, sanding, and the final paint-ready finish. The quote should separate board installation, finishing, primer or paint, cleanup, and any repairs to existing drywall.",
    imageFile: "basement-drywall-contractor-hamilton-featured.png",
    imageAlt:
      "Hamilton basement with drywall board installed, protected floor, and taping tools ready for finishing.",
    imageDescription:
      "Generated basement drywall scene showing board installation and a clean contractor setup.",
    imagePrompt:
      "Realistic professional home renovation photo of basement drywall installation in a Hamilton Ontario home. Show basement walls with new drywall board, protected concrete or finished floor, bulkhead detail, taped seams beginning, compound tools, clean work area, natural daylight or realistic work lighting, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury design, and people's faces.",
    blogType: "Process guide",
    searchIntent: "Local service and basement renovation planning",
  },
  {
    kind: "main",
    city: cityConfigs.burlington,
    slug: "drywall-contractor-burlington-guide",
    title: "Drywall Contractor Burlington: Repair, Installation, Taping & Finishing",
    h1: "Drywall Contractor in Burlington for Walls, Ceilings and Renovations",
    primaryKeyword: "drywall contractor Burlington",
    primaryTarget: "/services/drywall-installation/burlington/",
    metaTitle: "Drywall Contractor Burlington | EPF Pro Services",
    metaDescription:
      "Burlington drywall contractor guide for repair, installation, taping, finishing, dust control, paint-ready scope, cost factors, timelines, and quotes.",
    excerpt:
      "A Burlington homeowner guide to drywall contractor scopes for repair, installation, taping, mudding, sanding, finishing, and clean quote planning.",
    quickAnswer:
      "A Burlington drywall contractor should explain whether the work is repair, installation, taping, mudding, sanding, or paint-ready finishing. A strong quote should include protection, dust control, finish level, cleanup, and whether primer or painting is part of the scope.",
    imageFile: "drywall-contractor-burlington-guide-featured.png",
    imageAlt:
      "Burlington home interior with drywall repair and installation prep under clean protection.",
    imageDescription:
      "Generated Burlington drywall contractor image showing clean protection and wall finishing prep.",
    imagePrompt:
      "Realistic professional home renovation photo of drywall contractor work in a Burlington Ontario family home. Show protected hardwood floor, drywall repair patches and new board section, taped seams, compound tray and broad knives, clean work area, natural daylight, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury design, and people's faces.",
    blogType: "Local homeowner guide",
    searchIntent: "Local service research and quote comparison",
  },
  {
    kind: "comparison",
    city: cityConfigs.burlington,
    slug: "drywall-repair-or-installation-burlington",
    title: "Drywall Repair or Installation in Burlington: Which Service Do You Need?",
    h1: "Drywall Repair vs Drywall Installation in Burlington",
    primaryKeyword: "drywall repair or installation Burlington",
    primaryTarget: "/services/drywall-repair/burlington/",
    primaryAnchor: "drywall repair in Burlington",
    metaTitle: "Drywall Repair or Installation Burlington | EPF",
    metaDescription:
      "Burlington guide to choosing drywall repair or installation, with taping, sanding, paint-ready finishing, cost factors, timeline, and quote questions.",
    excerpt:
      "A Burlington comparison guide explaining when drywall repair is enough, when installation is better, and how taping and finishing affect the final result.",
    quickAnswer:
      "Choose drywall repair in Burlington for isolated holes, cracks, dents, failed tape, and trade cut-outs. Choose drywall installation when the project needs new board, a full room, a basement, ceiling replacement, or a larger damaged section. Some projects need both repair blending and new installation.",
    imageFile: "drywall-repair-or-installation-burlington-featured.png",
    imageAlt:
      "Burlington room showing a new drywall board section beside repaired drywall patches.",
    imageDescription:
      "Generated comparison image showing the difference between repair patches and new board installation.",
    imagePrompt:
      "Realistic professional home renovation photo comparing drywall repair and new drywall installation in a Burlington Ontario home. Show one wall section with fresh board inserted and another with taped repair patches, protected floor, compound tools, natural daylight, clean contractor workflow, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury design, and people's faces.",
    blogType: "Comparison guide",
    searchIntent: "Repair decision and service selection research",
  },
  {
    kind: "main",
    city: cityConfigs.oakville,
    slug: "drywall-contractor-oakville-guide",
    title: "Drywall Contractor Oakville: Smooth Finish, Repairs, Installation & Taping",
    h1: "Drywall Contractor in Oakville for High-Quality Interior Finishing",
    primaryKeyword: "drywall contractor Oakville",
    primaryTarget: "/services/drywall-installation/oakville/",
    metaTitle: "Drywall Contractor Oakville | Smooth Finish",
    metaDescription:
      "Oakville drywall contractor guide for smooth finishing, installation, repair, taping, sanding, Level 5 options, cost factors, timelines, and quote scope.",
    excerpt:
      "An Oakville homeowner guide to drywall contractors, smooth finishing, repairs, installation, taping, sanding, Level 5 surfaces, and quote planning.",
    quickAnswer:
      "An Oakville drywall contractor should plan the work around finish quality, not just board and compound. Bright rooms, smooth ceilings, pot lights, trim details, and long sightlines can reveal weak seams, so the quote should define repair, installation, taping, sanding, and finish level.",
    imageFile: "drywall-contractor-oakville-guide-featured.png",
    imageAlt:
      "Oakville bright room with drywall finishing, protected floor, and smooth wall prep.",
    imageDescription:
      "Generated Oakville drywall contractor image focused on smooth finish and bright-room prep.",
    imagePrompt:
      "Realistic professional home renovation photo of drywall finishing in a bright Oakville Ontario home. Show large windows, protected light wood floor, smooth drywall walls with taped seams and skim coat areas, compound tools neatly staged, natural daylight, high-quality residential finish, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury mansion design, and people's faces.",
    blogType: "Local homeowner guide",
    searchIntent: "Local service research and finish-quality comparison",
  },
  {
    kind: "level5",
    city: cityConfigs.oakville,
    slug: "level-5-drywall-finishing-oakville",
    title:
      "Level 5 Drywall Finishing Oakville: When Smooth Walls and Ceilings Need Extra Care",
    h1: "Level 5 Drywall Finishing in Oakville",
    primaryKeyword: "Level 5 drywall finishing Oakville",
    primaryTarget: "/services/drywall-installation/oakville/",
    metaTitle: "Level 5 Drywall Finishing Oakville | EPF",
    metaDescription:
      "Oakville Level 5 drywall finishing guide for smooth walls, ceilings, bright rooms, skim coating, sanding, primer, finish checks, and quote planning.",
    excerpt:
      "An Oakville guide to Level 5 drywall finishing, smooth walls, ceilings, bright rooms, skim coating, sanding, primer, and paint-ready expectations.",
    quickAnswer:
      "Level 5 drywall finishing in Oakville is worth considering when walls or ceilings sit under strong daylight, pot lights, large windows, long sightlines, or darker paint. It adds surface treatment beyond standard taping so the final paint has a more consistent base.",
    imageFile: "level-5-drywall-finishing-oakville-featured.png",
    imageAlt:
      "Oakville room with Level 5 drywall skim coat prep and smooth ceiling finishing.",
    imageDescription:
      "Generated Level 5 drywall finishing image with smooth walls, protected floors, and skim coat prep.",
    imagePrompt:
      "Realistic professional home renovation photo of Level 5 drywall finishing in an Oakville Ontario home. Show smooth drywall walls and ceiling with skim coat areas, protected floor, sanding pole, compound tools, large windows creating natural side light, clean high-quality contractor workflow, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury design, and people's faces.",
    blogType: "Process guide",
    searchIntent: "Finish quality and repair decision research",
  },
  {
    kind: "main",
    city: cityConfigs.mississauga,
    slug: "drywall-contractor-mississauga-guide",
    title:
      "Drywall Contractor Mississauga: Installation, Repair, Taping & Level 5 Finishing",
    h1: "Drywall Contractor in Mississauga for Clean, Paint-Ready Results",
    primaryKeyword: "drywall contractor Mississauga",
    primaryTarget: "/services/drywall-installation/mississauga/",
    metaTitle: "Drywall Contractor Mississauga | EPF Pro Services",
    metaDescription:
      "Mississauga drywall contractor guide for installation, repair, taping, Level 5 finishing, dust control, cost factors, cleanup, timelines, and quotes.",
    excerpt:
      "A Mississauga homeowner guide to drywall contractor scopes, installation, repair, taping, mudding, Level 5 finishing, and paint-ready results.",
    quickAnswer:
      "A Mississauga drywall contractor should be able to handle installation, repair, taping, mudding, sanding, dust control, and Level 4 or Level 5 finishing. The quote should define the finish level, access plan, protection, cleanup, and whether primer or painting is included.",
    imageFile: "drywall-contractor-mississauga-guide-featured.png",
    imageAlt:
      "Mississauga room with drywall installation and repair prep under clean floor protection.",
    imageDescription:
      "Generated Mississauga drywall contractor scene with board installation and paint-ready prep.",
    imagePrompt:
      "Realistic professional home renovation photo of drywall contractor work in a Mississauga Ontario home or condo. Show protected floors, newly installed drywall board, taped seams, patched wall section, clean tools, natural daylight, practical contractor workflow, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury design, and people's faces.",
    blogType: "Local homeowner guide",
    searchIntent: "Local service research and pre-estimate research",
  },
  {
    kind: "basement",
    city: cityConfigs.mississauga,
    slug: "drywall-contractor-basement-renovation-mississauga",
    title:
      "Basement Drywall Contractor Mississauga: Board Installation, Taping and Finishing",
    h1: "Basement Drywall Contractor in Mississauga",
    primaryKeyword: "basement drywall contractor Mississauga",
    primaryTarget: "/services/drywall-installation/mississauga/",
    metaTitle: "Basement Drywall Contractor Mississauga | EPF",
    metaDescription:
      "Mississauga basement drywall guide for board installation, taping, finishing, dust control, Level 5 options, timelines, cleanup, and quote scope.",
    excerpt:
      "A Mississauga basement drywall guide covering board installation, taping, mudding, sanding, finish levels, dust control, and quote planning.",
    quickAnswer:
      "A basement drywall contractor in Mississauga should plan around framing, bulkheads, mechanical lines, stair access, moisture history, ceiling height, protection, taping, sanding, and paint-ready finishing. A clear quote separates installation, finishing, primer, paint, and cleanup.",
    imageFile: "drywall-contractor-basement-renovation-mississauga-featured.png",
    imageAlt:
      "Mississauga basement renovation with drywall board installation and taping prep.",
    imageDescription:
      "Generated Mississauga basement drywall image showing board installation and clean protection.",
    imagePrompt:
      "Realistic professional home renovation photo of basement drywall installation in a Mississauga Ontario home. Show new drywall board on basement walls, bulkhead and ceiling detail, protected floor, taped seams starting, compound tools, clean work area, realistic work lighting, wide-angle editorial style. Avoid text, logos, fake watermarks, unsafe work, exaggerated luxury design, and people's faces.",
    blogType: "Process guide",
    searchIntent: "Basement renovation planning and local service research",
  },
];

export const drywallContractorAuthorityPosts = rawPosts.map(createPost);
