// app/service-areas/popcorn-ceiling-removal/oakville/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Oakville | Dustless Skim Coat Level 5, Prime & Paint",
  description:
    "Oakville popcorn (stucco/stipple) ceiling removal for houses, townhomes & condos: dust-controlled sanding, Level 5 skim coat, stain-block primer, paint-ready. Local, insured, warranty.",
  alternates: { canonical: "/service-areas/popcorn-ceiling-removal/oakville/" },
  openGraph: {
    title:
      "Popcorn Ceiling Removal in Oakville | Dustless, Level 5, Pot-Light Ready",
    description:
      "Ceiling texture removal across Oakville: Bronte, Glen Abbey, River Oaks, Falgarwood, Iroquois Ridge & more. Level 5 skim, prime, paint-ready finish.",
    url: "/service-areas/popcorn-ceiling-removal/oakville/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Popcorn Ceiling Removal Oakville",
      serviceType: [
        "Popcorn ceiling removal",
        "Stucco ceiling removal",
        "Stipple scraping",
        "Ceiling skim coat Level 5",
      ],
      areaServed: "Oakville, Ontario",
      url: "/service-areas/popcorn-ceiling-removal/oakville/",
      potentialAction: {
        "@type": "RequestQuoteAction",
        target: "/quote/",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Service Areas",
          item: "/service-areas",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Popcorn Ceiling Removal",
          item: "/service-areas/popcorn-ceiling-removal",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Oakville",
          item: "/service-areas/popcorn-ceiling-removal/oakville/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does popcorn ceiling removal cost in Oakville?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical Oakville projects range by size, height and paint layers. Small bedrooms often fall in a fixed range; larger main-floor + hallway packages are usually priced by square foot. After a quick photo review, we confirm a firm written quote.",
          },
        },
        {
          "@type": "Question",
          name: "Is the process dustless?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We seal rooms, mask vents and connect sanders to HEPA vacuums. Expect a tidy, contained process with daily cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle painted popcorn and pot light cutouts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For heavily painted texture we test a small area, then either controlled scrape or safe encapsulation followed by a full Level 5 skim. Pot-light rings and past patches are blended so they disappear after primer.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work in two-storey spaces and stairwells?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We bring proper platforms and follow a sequence that keeps hallways usable while achieving an even, bright finish under raking light.",
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function Page() {
  const neighborhoods = [
    { name: "Downtown Oakville", slug: "downtown-oakville" },
    { name: "Old Oakville", slug: "old-oakville" },
    { name: "Kerr Village", slug: "kerr-village" },
    { name: "Bronte", slug: "bronte" },
    { name: "Bronte Creek", slug: "bronte-creek" },
    { name: "Glen Abbey", slug: "glen-abbey" },
    { name: "River Oaks", slug: "river-oaks" },
    { name: "West Oak Trails", slug: "west-oak-trails" },
    { name: "Palermo West", slug: "palermo-west" },
    { name: "Clearview", slug: "clearview" },
    { name: "College Park", slug: "college-park" },
    { name: "Iroquois Ridge North", slug: "iroquois-ridge-north" },
    { name: "Iroquois Ridge South", slug: "iroquois-ridge-south" },
    { name: "Falgarwood", slug: "falgarwood" },
    { name: "Uptown Core", slug: "uptown-core" },
  ];

  const imgs = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Oakville, ON
            </h1>
            <p className="mt-3 text-gray-700">
              Residential{" "}
              <strong>popcorn/stucco/stipple ceiling removal</strong> in
              Oakville: dust-controlled sanding, full-field{" "}
              <strong>Level 5 skim</strong>, stain-block primer and a bright,
              paint-ready finish. Great for{" "}
              <strong>
                detached homes, townhomes, stairwells, and two-storey foyers
              </strong>
              in Bronte, Glen Abbey, River Oaks, Falgarwood, Iroquois Ridge and
              beyond.
            </p>
            <p className="mt-2 text-gray-700">
              We plan around family schedules, coordinate pot-light work with
              your electrician, and keep hallways and bedrooms usable with tidy
              daily wrap-ups. Insured, WSIB, written warranty.
            </p>
          </div>

          {/* CTAs right – both blue */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
            </a>
            <a
              href="/quote/"
              aria-label="Open quote form"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              Get my quote
            </a>
          </div>
        </div>

        {/* Sub-nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#why" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing
          </a>
          <a href="#process" className="underline-offset-2 hover:underline">
            Process
          </a>
          <a href="#areas" className="underline-offset-2 hover:underline">
            Neighbourhoods
          </a>
          <a href="#projects" className="underline-offset-2 hover:underline">
            Recent projects
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQ
          </a>
        </nav>
      </header>

      {/* WHY US */}
      <section id="why" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">
            Dust-Controlled & Family-Safe
          </h3>
          <p className="text-gray-600 mt-2">
            Rooms sealed, vents masked, sander-to-HEPA vacuums, corridor
            protection. Clean, contained and respectful of neighbours.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim checked under raking light so <em>morning sun</em>{" "}
            off Lakeshore windows doesn’t reveal joints or ripples.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Pot-Light & Painted Texture</h3>
          <p className="text-gray-600 mt-2">
            We blend around fixtures, patch past holes and safely handle heavily
            painted popcorn before skimming.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-10 bg-white rounded-2xl p-6 border">
        <h2 className="text-2xl font-semibold">Pricing in Oakville</h2>
        <p className="text-gray-700 mt-3">
          Actual pricing depends on ceiling height, paint layers and repairs.
          After a quick photo tour, we confirm a written quote:
        </p>
        <ul className="mt-4 grid gap-3">
          <li className="rounded-xl border p-4">
            <strong>Bedrooms / home office:</strong> usually quoted as a fixed
            package after photos.
          </li>
          <li className="rounded-xl border p-4">
            <strong>Main floor + hallway:</strong> commonly priced{" "}
            <em>by square foot</em>; Level 5 skim, stain-block primer,
            paint-ready surface.
          </li>
          <li className="rounded-xl border p-4">
            <strong>Two-storey foyer / stairwell:</strong> includes proper
            platforms and extra skim passes checked under raking light.
          </li>
        </ul>
        <div className="mt-5 flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          *If ceilings are from the asbestos era, we recommend lab testing
          before disturbance.
        </p>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-Step Process</h2>
        <ol className="mt-4 grid gap-3">
          <li className="rounded-xl border p-4">
            Protect floors/furniture, seal off rooms, mask returns & supply
            vents.
          </li>
          <li className="rounded-xl border p-4">
            Test a discreet area. If scraping risks damage, we encapsulate and
            proceed to Level 5 skim.
          </li>
          <li className="rounded-xl border p-4">
            Controlled scrape (where suitable) → full-field skim with tight
            knives and straight edges.
          </li>
          <li className="rounded-xl border p-4">
            HEPA-assist sanding between coats; feather around pot-light rings
            and past patches.
          </li>
          <li className="rounded-xl border p-4">
            Stain-block primer; correct any telegraphing joints under raking
            light.
          </li>
          <li className="rounded-xl border p-4">
            Final tidy and hand-off: paint-ready or we can paint for a turnkey
            finish.
          </li>
        </ol>
      </section>

      {/* GALLERY */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Work</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Popcorn ceiling removal Oakville — project ${i + 1}`}
              className="w-full h-56 object-cover rounded-2xl border shadow"
              data-lightbox="true"
            />
          ))}
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section id="areas" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Oakville Neighbourhoods We Serve
        </h2>
        <p className="text-gray-700 mt-2">
          Fast scheduling and tidy crews across Oakville — from Lakeshore to
          Upper Middle, QEW to Ninth Line.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/service-areas/popcorn-ceiling-removal/oakville/${n.slug}/`}
              className="pill"
            >
              {n.name}
            </Link>
          ))}
        </div>
        <p className="text-gray-600 mt-3">
          Also see our main service page:{" "}
          <Link className="underline" href="/services/popcorn/">
            Popcorn Ceiling Removal Services
          </Link>
          .
        </p>
      </section>

      {/* LOCAL CONTENT & SIGNALS */}
      <section className="mt-10 bg-white rounded-2xl p-6 border">
        <h2 className="text-2xl font-semibold">Local Fit for Oakville Homes</h2>
        <ul className="mt-4 grid gap-3">
          <li className="rounded-xl border p-4">
            <strong>Bronte & Lakeshore:</strong> bright lakeside daylight
            demands smooth ceilings; we check lines under raking light.
          </li>
          <li className="rounded-xl border p-4">
            <strong>Glen Abbey & West Oak Trails:</strong> popular two-storey
            foyers and open staircases — we bring proper platforms.
          </li>
          <li className="rounded-xl border p-4">
            <strong>River Oaks & Uptown Core:</strong> family schedules first —
            predictable start/finish and daily tidy wrap-ups.
          </li>
          <li className="rounded-xl border p-4">
            <strong>Falgarwood & Iroquois Ridge:</strong> many homes with prior
            patches — we feather and skim to a consistent Level 5.
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="rounded-xl border p-4">
            <div className="font-semibold">Nearby reference points</div>
            <div className="mt-2">
              Oakville GO • Bronte GO • Glen Abbey Golf Club • Oakville
              Trafalgar Memorial Hospital • Sheridan College (Trafalgar) •
              Sixteen Mile Creek • QEW / 403 / Dundas St
            </div>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-semibold">Popular related searches</div>
            <div className="mt-2">
              popcorn ceiling removal oakville • remove popcorn ceiling oakville
              • stucco ceiling removal oakville • stipple scraping oakville •
              ceiling smoothing oakville • skim coat ceiling oakville • ceiling
              resurfacing oakville • dustless popcorn removal oakville • pot
              light after popcorn removal oakville • painting after removal
              oakville
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section id="projects" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Oakville Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Glen Abbey Two-Storey Foyer",
              near: "Upper Middle Rd W & Third Line",
              scope:
                "Heavily painted stipple; safe encapsulation + Level 5 skim; stain-block primer; pot-light rings blended.",
              duration: "3 days",
              outcome:
                "Bright, even read from balcony to entry; no joint telegraphing in morning sun.",
            },
            {
              title: "Bronte Lakeside Living/Dining",
              near: "Lakeshore Rd W",
              scope:
                "Controlled scrape + skim; HEPA-assist sanding; prime & paint-ready finish.",
              duration: "2.5 days",
              outcome:
                "Smooth ceiling with crisp shadow lines; zero dust migration to kitchen.",
            },
            {
              title: "River Oaks Bedroom Cluster",
              near: "Sixteen Mile Creek area",
              scope:
                "Three bedrooms + hall; Level 5 skim; stain-block primer; tidy daily wrap-ups.",
              duration: "2 days",
              outcome: "Sleep-ready each night; uniform, bright ceilings.",
            },
          ].map((cs, i) => (
            <div key={i} className="card p-5 bg-white">
              <div className="font-semibold">{cs.title}</div>
              <div className="text-sm text-gray-600">{cs.near}</div>
              <p className="mt-2 text-gray-700">
                <strong>Scope:</strong> {cs.scope}
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {cs.duration}
              </p>
              <p className="text-gray-700">
                <strong>Result:</strong> {cs.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Oakville</h2>
        {[
          {
            q: "Do you coordinate with electricians for pot lights?",
            a: "Yes. We can refer you to an electrician or sequence with yours. We skim and feather around new rings for a seamless look.",
          },
          {
            q: "Will my house be livable during the work?",
            a: "Yes. We seal rooms, keep traffic paths open and do daily tidy wrap-ups so bedrooms and hallways stay usable.",
          },
          {
            q: "How long does a typical Oakville project take?",
            a: "Most single rooms: 1–2 days. Main floor + hallway packages: 2–4 days depending on height and paint layers. Two-storey foyers add setup time for platforms.",
          },
          {
            q: "Can you paint after removal?",
            a: "Absolutely. We can deliver paint-ready or provide a full prime + two-coat ceiling paint for a turnkey result.",
          },
        ].map((f, i) => (
          <details key={i} className="card p-6 bg-white mt-4">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth, modern ceilings in Oakville?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* Bottom nav */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/service-areas/popcorn-ceiling-removal/"
          className="underline"
        >
          ← Back to Popcorn Service Areas
        </Link>
        <Link href="/services/popcorn/" className="underline">
          Main Popcorn Service page →
        </Link>
      </nav>

      {/* Sticky mobile CTA */}
      <div className=" ">
        <div className="bg-white/95 backdrop-blur border shadow-xl rounded-2xl p-3 flex items-center justify-between gap-3">
          <a href={phoneHref} className="btn-cta flex-1 text-center">
            📞 Call (647) 923-6784
          </a>
          <a href="/quote/" className="btn-cta flex-1 text-center">
            Get my quote
          </a>
        </div>
      </div>
    </div>
  );
}
