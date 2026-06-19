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

// ---------- FUNNEL (blue/neutral gradients, + Happy Client) ----------
function Funnel() {
  const bands = [
    { label: "Plan", icon: "🧭", colors: ["#e0f2fe", "#60a5fa"] },
    { label: "Protect", icon: "🛡️", colors: ["#dbeafe", "#3b82f6"] },
    { label: "Remove", icon: "🧹", colors: ["#dbeafe", "#2563eb"] },
    { label: "Refine", icon: "🧱", colors: ["#e2e8f0", "#94a3b8"] },
    { label: "Prime", icon: "🪣", colors: ["#f1f5f9", "#cbd5e1"] },
    { label: "Paint", icon: "🖌️", colors: ["#f8fafc", "#e2e8f0"] },
    { label: "Clean", icon: "✨", colors: ["#ffffff", "#eef2ff"] },
    { label: "Happy Client", icon: "😊", colors: ["#dcfce7", "#86efac"] },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <svg viewBox="0 0 1000 580" className="w-full">
        <defs>
          {bands.map((b, i) => (
            <linearGradient id={`band${i}`} key={i} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={b.colors[0]} />
              <stop offset="100%" stopColor={b.colors[1]} />
            </linearGradient>
          ))}
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodOpacity="0.18" />
          </filter>
        </defs>
        {bands.map((b, i) => {
          const top = 36 + i * 64;
          const margin = 36 + i * 36; // narrowing → funnel
          const left = margin;
          const right = 1000 - margin;
          const nextTop = top + 56;
          return (
            <g key={i} filter="url(#cardShadow)">
              <polygon
                points={`${left},${top} ${right},${top} ${
                  right - 70
                },${nextTop} ${left + 70},${nextTop}`}
                fill={`url(#band${i})`}
                stroke="#e5e7eb"
              />
              <text
                x={(left + right) / 2}
                y={top + 36}
                textAnchor="middle"
                fontSize="26"
                fontWeight="800"
                fill="#0f172a"
              >
                {b.icon} {b.label}
              </text>
            </g>
          );
        })}
        {/* Spout label */}
        <g>
          <polygon points={`430,560 570,560 545,580 455,580`} fill="#0ea5e9" />
          <text
            x={500}
            y={575}
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill="#ffffff"
          >
            •Best-Quality•
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
