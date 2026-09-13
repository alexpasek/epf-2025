import "./process.css";
import ProcessExperience from "./ProcessExperience";

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

  return <>
    <ProcessExperience steps={steps} faqs={faqSchema.mainEntity} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </>;
}
