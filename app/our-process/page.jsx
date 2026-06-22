// EPF Pro — Our Process (light UI, blue accents, human tone, local SEO)
// Place at app/our-process/page.jsx

import React from "react";

// ---------- DATA ----------
const steps = [
  {
    id: 1,
    icon: "🧭",
    title: "Plan — Discovery Call",
    summary:
      "Fast ballpark from photos: painted vs unpainted, ceiling height, pot lights, timeline.",
    do: ["Confirm texture (painted/unpainted)", "Flag stains/leaks/repairs"],
    you: ["Text photos of each room"],
  },
  {
    id: 2,
    icon: "📏",
    title: "Assess — On-Site Visit",
    summary: "Verify areas, access, repairs; finalize exact scope.",
    do: ["Measure ceilings & fixtures", "Check coatings/patches"],
    you: ["Make rooms accessible"],
  },
  {
    id: 3,
    icon: "📝",
    title: "Quote — Fixed Price & Date",
    summary:
      "Clear line items: removal, Level-5 finish, prime & paint; simple prep list.",
    do: ["Written scope & inclusions", "Day-by-day plan"],
    you: ["Approve & pick start date"],
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Protect — Containment",
    summary:
      "Poly walls, zipper doors, floor/vent masking; HEPA air control as useful.",
    do: ["Full room protection", "Set HEPA air control"],
    you: ["Keep pets/kids outside zone"],
  },
  {
    id: 5,
    icon: "⚠️",
    title: "Clear — Asbestos (If Needed)",
    summary: "Third-party sampling for older homes before disturbance.",
    do: ["Coordinate quick testing"],
    you: ["Approve testing when recommended"],
  },
  {
    id: 6,
    icon: "🧹",
    title: "Remove — Texture Off/Resurface",
    summary: "Unpainted: wet removal. Painted: create key + bond + skim build.",
    do: ["Wet scrape (unpainted)", "Bond/skim (painted)"],
    you: ["HVAC off in work zone"],
  },
  {
    id: 7,
    icon: "🧱",
    title: "Refine — Level-5 Skims",
    summary:
      "2–3 full-plane coats; seams tuned and edges feathered for flatness.",
    do: ["Full-plane skim coats", "Edge feather & tune-ups"],
    you: ["Allow dry time"],
  },
  {
    id: 8,
    icon: "🌬️",
    title: "QA — HEPA Sand + Raking Light",
    summary: "Vac-attached sanding; raking light to catch pinholes/waves.",
    do: ["Long-board HEPA sanding", "Spot-correct under raking light"],
    you: ["Optional mid-way peek"],
  },
  {
    id: 9,
    icon: "🪣",
    title: "Prime — High-Build",
    summary: "Locks surface; reveals micro-touch-ups before paint.",
    do: ["Uniform primer film", "Mark/patch micro-defects"],
    you: ["Confirm sheen prefs"],
  },
  {
    id: 10,
    icon: "🖌️",
    title: "Paint — Two Coats",
    summary: "Bright, even ceiling; crisp lines at wall junctions.",
    do: ["Spray/roll application", "Clean cut-lines"],
    you: ["Confirm colour (ceiling white)"],
  },
  {
    id: 11,
    icon: "✨",
    title: "Clean — Site Restore",
    summary:
      "Protection off, HEPA vacuum, reinstall trims/fixtures; rooms ready to use.",
    do: ["Final HEPA vacuum & wipe-down", "Fixtures back on"],
    you: ["Walkthrough"],
  },
  {
    id: 12,
    icon: "😊",
    title: "Happy Client — Hand-Off",
    summary:
      "Final walkthrough, little tips for care, and a proud before/after moment. We leave things tidy and comfortable.",
    do: [
      "Friendly walkthrough & touch-ups if needed",
      "Share before/after photos on request",
    ],
    you: ["Enjoy the new brightness — tell us how we did"],
  },
];

// ---------- FUNNEL (blue/green process graphic) ----------
function Funnel() {
  const bands = [
    {
      label: "Plan",
      text: "We start with a detailed plan tailored to your needs.",
      icon: "compass",
      colors: ["#4f8ff8", "#72adff"],
    },
    {
      label: "Protect",
      text: "We protect your property and surrounding areas.",
      icon: "shield",
      colors: ["#85b9ff", "#a7cdfb"],
    },
    {
      label: "Remove",
      text: "We remove dirt, debris, and loose or damaged material.",
      icon: "brush",
      colors: ["#afd4ff", "#d1e8ff"],
    },
    {
      label: "Refine",
      text: "We smooth and perfect the surface for a flawless finish.",
      icon: "blocks",
      colors: ["#d5edf8", "#e8f8fb"],
    },
    {
      label: "Prime",
      text: "We apply a high-quality primer for strong, lasting results.",
      icon: "bucket",
      colors: ["#def8f8", "#edfdfb"],
    },
    {
      label: "Paint",
      text: "We apply premium paints with precision and care.",
      icon: "roller",
      colors: ["#d8f5f2", "#e9fbf2"],
    },
    {
      label: "Clean",
      text: "We leave your space spotless and ready to enjoy.",
      icon: "sparkle",
      colors: ["#e9f9e6", "#d4f6c7"],
    },
    {
      label: "Happy Client",
      text: "Your satisfaction is our greatest reward.",
      icon: "smile",
      colors: ["#b4eb9f", "#86dc73"],
    },
  ];

  function Icon({ type, x, y }) {
    const stroke = type === "smile" || type === "sparkle" ? "#55b94d" : "#1d73f8";

    if (type === "compass") {
      return (
        <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="0" cy="0" r="18" />
          <path d="M-7 8 2 -10 8 -4 -1 13Z" fill="#dbeafe" />
          <path d="M-3 -14 2 -18 7 -14" />
        </g>
      );
    }
    if (type === "shield") {
      return (
        <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 -20 16 -13v11c0 12 -7 20 -16 24 -9 -4 -16 -12 -16 -24v-11Z" fill="#dbeafe" />
          <path d="m-7 1 5 6 10 -13" />
        </g>
      );
    }
    if (type === "brush") {
      return (
        <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-13 14c8 2 14 -2 13 -10" />
          <path d="m0 4 18 -18 -6 -6 -18 18Z" fill="#dbeafe" />
          <path d="M10 -12 16 -6" />
        </g>
      );
    }
    if (type === "blocks") {
      return (
        <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="2.5" fill="#dbeafe" strokeLinejoin="round">
          <path d="M-16 -3h14v12h-14Z" />
          <path d="M2 -3h14v12H2Z" />
          <path d="M-7 -17H7v12H-7Z" />
          <path d="M-7 11H7v12H-7Z" />
        </g>
      );
    }
    if (type === "bucket") {
      return (
        <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-13 -8h26l-3 24h-20Z" fill="#dbeafe" />
          <path d="M-8 -8c1 -8 15 -8 16 0" />
          <path d="M-9 3h18" />
        </g>
      );
    }
    if (type === "roller") {
      return (
        <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-18 -10H8v11h-26Z" fill="#dbeafe" />
          <path d="M8 -5h9v10H3v8" />
          <path d="M3 13v10" />
        </g>
      );
    }
    if (type === "sparkle") {
      return (
        <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-5 -17 0 -5 12 0 0 5 -5 17 -10 5 -22 0 -10 -5Z" fill="#eef9e9" />
          <path d="M14 -18v10M9 -13h10M17 9v8M13 13h8" />
        </g>
      );
    }
    return (
      <g transform={`translate(${x} ${y})`} stroke={stroke} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="0" cy="0" r="18" fill="#eef9e9" />
        <path d="M-8 2c3 8 13 8 16 0" />
        <path d="M-7 -6h.1M7 -6h.1" />
      </g>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <svg
        viewBox="0 0 1000 560"
        className="w-full"
        role="img"
        aria-labelledby="process-funnel-title process-funnel-desc"
      >
        <title id="process-funnel-title">EPF Pro Services process funnel</title>
        <desc id="process-funnel-desc">
          Eight steps: plan, protect, remove, refine, prime, paint, clean, and happy client.
        </desc>
        <defs>
          {bands.map((b, i) => (
            <linearGradient id={`band${i}`} key={i} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={b.colors[0]} />
              <stop offset="100%" stopColor={b.colors[1]} />
            </linearGradient>
          ))}
          <linearGradient id="badgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f4f8ff" />
          </linearGradient>
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodOpacity="0.14" />
          </filter>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.16" />
          </filter>
        </defs>
        {bands.map((b, i) => {
          const top = 18 + i * 60;
          const height = 54;
          const margin = 78 + i * 19;
          const left = margin;
          const right = 1000 - margin;
          const nextTop = top + height;
          const iconX = left + 118;
          const numberX = left + 205;
          const dividerX = left + 252;
          const textX = left + 275;
          const centerY = top + height / 2;
          return (
            <g key={i} filter="url(#cardShadow)">
              <polygon
                points={`${left},${top} ${right},${top} ${
                  right - 22
                },${nextTop} ${left + 22},${nextTop}`}
                fill={`url(#band${i})`}
                stroke="rgba(255,255,255,0.74)"
              />
              <circle cx={iconX} cy={centerY} r="26" fill="#ffffff" filter="url(#softShadow)" />
              <Icon type={b.icon} x={iconX} y={centerY} />
              <circle
                cx={numberX}
                cy={centerY}
                r="18"
                fill={i < 6 ? "#1477f8" : "#59c34d"}
                stroke="#dff1ff"
                strokeWidth="3"
              />
              <text
                x={numberX}
                y={centerY + 6}
                textAnchor="middle"
                fontSize="19"
                fontWeight="800"
                fill="#ffffff"
              >
                {i + 1}
              </text>
              <line
                x1={dividerX}
                x2={dividerX}
                y1={top + 11}
                y2={nextTop - 11}
                stroke="#64748b"
                strokeOpacity="0.34"
              />
              <text
                x={textX}
                y={centerY - 5}
                fontSize="28"
                fontWeight="800"
                fill="#08111f"
              >
                {b.label}
              </text>
              <text x={textX} y={centerY + 17} fontSize="13" fill="#111827">
                {b.text}
              </text>
            </g>
          );
        })}
        <line x1="376" x2="456" y1="528" y2="528" stroke="#c7d6f2" />
        <line x1="544" x2="624" y1="528" y2="528" stroke="#c7d6f2" />
        <g filter="url(#softShadow)">
          <rect x="456" y="508" width="88" height="38" rx="10" fill="url(#badgeGradient)" stroke="#dbe7fb" />
          <path
            d="M478 517 489 513l11 4v8c0 8 -5 13 -11 16 -6 -3 -11 -8 -11 -16Z"
            fill="#1477f8"
          />
          <path d="m484 526 4 4 7 -8" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text
            x={509}
            y={532}
            fontSize="16"
            fontWeight="700"
            fill="#1477f8"
          >
            Best Quality
          </text>
        </g>
      </svg>
    </div>
  );
}

// ---------- VALUE STRIP (aligned to site; removed warranty wording) ----------
function ValueStrip() {
  const items = [
    {
      title: "Dust-Controlled",
      text: "Room sealing, floor & vent protection, vacuum-assist sanding, tidy clean-up.",
    },
    {
      title: "Level-5 Finish",
      text: "Skim-coat & feather, critical-light check, prime & re-touch for a flawless result.",
    },
    {
      title: "Clean & Respectful",
      text: "Friendly team, careful masking, daily tidy, and a comfortable experience from start to finish.",
    },
  ];
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5"
        >
          <h3 className="font-semibold text-lg text-slate-900">{it.title}</h3>
          <p className="mt-1 text-slate-600 text-sm">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

// ---------- STEP CARD (light style, human tone) ----------
function StepCard({ step }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 text-white flex items-center justify-center text-base font-semibold">
          <span aria-hidden>{step.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{step.summary}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                What we do
              </p>
              <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                {step.do.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                What you do
              </p>
              <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                {step.you.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- SERVICE AREA CHIPS (internal linking for local SEO) ----------
function ServiceAreas() {
  const cities = [
    { name: "Toronto", slug: "toronto" },
    { name: "Mississauga", slug: "mississauga" },
    { name: "Oakville", slug: "oakville" },
    { name: "Burlington", slug: "burlington" },
    { name: "Hamilton", slug: "hamilton" },
    { name: "Milton", slug: "milton" },
    { name: "Etobicoke", slug: "etobicoke" },
    
  ];
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {cities.map((c) => (
        <a
          key={c.slug}
          href={`/popcorn-ceiling-removal/${c.slug}`}
          className="rounded-full border border-gray-200 bg-white shadow-sm px-4 py-2 text-sm text-slate-700 hover:shadow"
        >
          {c.name}
        </a>
      ))}
    </div>
  );
}

// ---------- FAQ (human reassurance) ----------
function FAQ() {
  const qa = [
    {
      q: "Will it be dusty?",
      a: "We seal rooms, cover floors and vents, and use vacuum-assist sanding. Most dust is captured at the source.",
    },
    {
      q: "What if my popcorn is painted?",
      a: "We use a resurfacing approach: create key, bond, then full-plane skim to Level-5 flatness.",
    },
    {
      q: "How long does it take?",
      a: "Typical homes: 3–5 days depending on size, drying conditions, and add-ons (repairs, pot-lights).",
    },
    {
      q: "Do you handle clean-up?",
      a: "Yes. Protection comes off, HEPA vacuum, wipe-down, fixtures back on — rooms ready to use.",
    },
  ];
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {qa.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5"
        >
          <h4 className="font-semibold text-slate-900">{item.q}</h4>
          <p className="text-slate-600 mt-1 text-sm">{item.a}</p>
        </div>
      ))}
    </div>
  );
}

// ---------- PAGE ----------
export default function OurProcessPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Popcorn Ceiling Removal — Our Process (EPF Pro)",
    description:
      "Dust-controlled popcorn ceiling removal with Level-5 finishing, primer, and ceiling paint. Clear, fast, on-time process by EPF Pro Services.",
    totalTime: "P5D",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.summary,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will it be dusty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We seal rooms, cover floors and vents, and use vacuum-assist sanding to capture dust at the source.",
        },
      },
      {
        "@type": "Question",
        name: "What if my popcorn is painted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We resurface: create mechanical key, apply bonding, then full-plane skim to Level-5 flatness.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical homes: 3–5 days depending on size, drying conditions, and add-ons like repairs or pot-lights.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle clean-up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Protection comes off, HEPA vacuum, wipe-down, and fixtures back on — rooms are ready to use.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-sky-100 text-sky-800 px-3 py-1 text-xs font-semibold">
            Our Process
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
            Popcorn Ceiling Removal — The EPF Way
          </h1>
          <p className="mt-3 text-slate-600 sm:text-lg">
            Cleaner rooms. Flatter ceilings. Brighter homes. Dust-contained
            removal, Level-5 skim, prime and paint — delivered on a reliable
            schedule.
          </p>
          {/* Local SEO internal links */}
          <ServiceAreas />
        </div>

        {/* Value strip */}
        <ValueStrip />

        {/* Funnel */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white shadow-sm p-4">
          <Funnel />
        </div>

        {/* Steps grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {steps.map((s) => (
            <StepCard key={s.id} step={s} />
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Ready for smooth ceilings?</h3>
            <p className="text-slate-600 mt-1">
              Text photos for a same-day ballpark. Serving Mississauga,
              Oakville, Burlington, Hamilton, Milton, Etobicoke.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
            <a
              href="tel:+16479236784"
              className="rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 text-white px-5 py-3 font-semibold text-center shadow"
            >
              Call 647-923-6784
            </a>
            <a
              href="/contact#estimate"
              className="rounded-xl bg-white text-slate-900 border border-gray-200 px-5 py-3 font-semibold text-center shadow-sm"
            >
              Get Exact Quote
            </a>
          </div>
        </div>

        {/* FAQ */}
        <FAQ />

        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>
            Questions about prep or scheduling? We’re happy to walk you through
            the details.
          </p>
        </footer>
      </section>

      {/* SEO: HowTo + FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
