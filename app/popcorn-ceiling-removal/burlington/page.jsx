// app/popcorn-ceiling-removal/popcorn-removal/burlington/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "Burlington";
const CITY_BASE = "/popcorn-ceiling-removal/burlington";
const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

const ALL = [
  ["downtown-burlington", "Downtown Burlington"],
  ["brant", "Brant"],
  ["maple", "Maple"],
  ["freeman", "Freeman"],
  ["aldershot", "Aldershot"],
  ["tyandaga", "Tyandaga"],
  ["brant-hills", "Brant Hills"],
  ["mountainside", "Mountainside"],
  ["headon-forest", "Headon Forest"],
  ["palmer", "Palmer"],
  ["millcroft", "Millcroft"],
  ["tansley", "Tansley"],
  ["orchard", "Orchard"],
  ["alton-village", "Alton Village"],
  ["shoreacres", "Shoreacres"],
  ["roseland", "Roseland"],
  ["longmoor", "Longmoor"],
  ["pinedale", "Pinedale"],
  ["elizabeth-gardens", "Elizabeth Gardens"],
];

export const metadata = {
  title: `Popcorn Ceiling Removal — ${CITY} | Dust-Controlled Level 5 Skim, Prime & Paint`,
  description:
    "Burlington popcorn / stucco / stipple ceiling removal with sealed rooms, HEPA sanding, Level 5 skim, stain-block primer and optional finish paint. Pot-light coordination. Fast quotes. Tidy crews.",
  keywords: [
    "popcorn ceiling removal Burlington",
    "stipple ceiling removal Burlington",
    "stucco ceiling removal Burlington",
    "Level 5 skim Burlington",
    "dustless popcorn removal HEPA Burlington",
    "popcorn ceiling price per square foot Burlington",
    "pot light installation after popcorn removal Burlington",
    "ceiling resurfacing Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${CITY}`,
    description:
      "Sealed rooms, HEPA sanding, full-field Level 5 skim, stain-block primer. Smooth, bright ceilings for Burlington homes and condos.",
    url: `${CITY_BASE}/`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn/Stipple/Stucco Removal",
          "Ceiling Smoothing",
          "Level 5 Skim Coat",
          "Ceiling Painting",
        ],
        areaServed: CITY,
        url: `${CITY_BASE}/`,
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
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
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: CITY,
            item: `${CITY_BASE}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Burlington?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Price depends on square footage, height, paint build-up on texture, fixture counts and repairs. Bedrooms often land in a competitive per-sq-ft range; painted stipple and open plans may require Level 5 skim. Share sizes/photos for a firm written quote.",
            },
          },
          {
            "@type": "Question",
            name: "Is the process dusty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rooms are sealed, floors/corridors protected, HVAC masked, and sanding is HEPA-connected. We tidy daily so non-work areas remain usable.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot lights and painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We cut/patch openings, stain-block prime and can apply two finish coats, or leave paint-ready.",
            },
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — {CITY}
            </h1>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Smooth, bright ceilings without turning your home upside down. We
              protect floors and corridors, seal rooms, mask returns and
              supplies, and sand with <strong>HEPA-connected tools</strong>.
              Where heavy paint layers or old patches make scraping risky, we
              safely encapsulate and <strong>skim full-field to Level 5</strong>{" "}
              so ceilings read perfectly flat under pot lights and Burlington’s
              strong lake-side daylight.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Local to <strong>Brant/Lakeshore</strong>,{" "}
              <strong>Mapleview</strong>, <strong>Guelph Line</strong>,{" "}
              <strong>Appleby</strong> and <strong>Dundas</strong>, we plan
              access/parking for condos and detached homes near{" "}
              <strong>Spencer Smith Park</strong>,{" "}
              <strong>Brant Street Pier</strong>, <strong>Paletta</strong>,{" "}
              <strong>Tyandaga</strong>, <strong>Millcroft</strong>,{" "}
              <strong>Orchard</strong> and <strong>Alton Village</strong>. Fast
              photo estimates, predictable schedules, tidy crews, written
              warranty.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>(647) 923-6784
            </a>
            <a
              href="/quote/"
              aria-label="Open quote form"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md"
            >
              Get my quote
            </a>
          </div>
        </div>

        {/* Sub-nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a
            href="#neighbourhoods"
            className="underline-offset-2 hover:underline"
          >
            Neighbourhoods
          </a>
          <a href="#process" className="underline-offset-2 hover:underline">
            Process
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQ
          </a>
        </nav>
      </header>

      {/* GALLERY */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${CITY} popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* NEIGHBOURHOODS INDEX */}
      <section id="neighbourhoods" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Burlington neighbourhoods we cover
        </h2>
        <p className="mt-3 text-gray-700 max-w-4xl">
          Choose your area for a hyper-local page with logistics, keyword
          variants and links:
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ALL.map(([slug, name]) => (
            <Link
              key={slug}
              href={`${CITY_BASE}/${slug}/`}
              className="p-4 bg-white rounded-2xl border shadow-sm hover:shadow-md transition"
            >
              <div className="font-semibold">{name}</div>
              <div className="mt-1 text-sm text-gray-600">
                Popcorn/stipple removal · Level 5 skim · HEPA sanding · Prime &
                paint
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our house-friendly process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Seal work rooms; protect floors, stairs and corridors; mask HVAC
            (HEPA dust control).
          </li>
          <li>
            Test a discreet patch to choose controlled scrape vs safe
            encapsulation for painted texture.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> for a flat read.
          </li>
          <li>HEPA sanding; raking-light inspections and micro touch-ups.</li>
          <li>
            Stain-block primer to unify colour & sheen; low-odour options
            available.
          </li>
          <li>
            Optional: two finish coats premium ceiling paint; final tidy &
            walkthrough.
          </li>
        </ol>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Pricing & high-intent services
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Typical scopes</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>Bedrooms & primary suites</li>
              <li>Main-floor living/dining + kitchen bulkheads</li>
              <li>Two-storey foyers, landings & condo ceilings</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal burlington</li>
              <li>remove popcorn ceiling {CITY.toLowerCase()}</li>
              <li>stucco/stipple ceiling removal</li>
              <li>Level 5 skim coat</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>pot light installation after popcorn removal</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Helpful links</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>
                <Link
                  className="underline"
                  href="/services/popcorn-ceiling-removal/"
                >
                  Main Popcorn Ceiling Service
                </Link>
              </li>
              <li>
                <Link className="underline" href="/services/interior-painting/">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="/services/drywall-installation/"
                >
                  Drywall & Skim-Coat
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="/blog/popcorn-ceiling-removal-cost-timeline/"
                >
                  Popcorn Removal: Cost & Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-4xl">
          Price per sq-ft varies by height, paint accumulation on texture,
          fixture counts (vents, detectors, lights), previous patches and
          whether you want us to paint after prime. Bundling rooms keeps rates
          competitive. Materials & HST are separate; send sizes/photos for a
          firm written quote.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — {CITY}</h2>
        {[
          {
            q: "Do you work in condos near the waterfront?",
            a: "Yes—subject to building rules (elevator pads, quiet hours). We protect common areas and use HEPA sanding.",
          },
          {
            q: "Can you coordinate pot lights?",
            a: "We coordinate with your electrician (or refer), cut/patch openings and blend to seamless before primer.",
          },
          {
            q: "How long does a bedroom take?",
            a: "Often 1–2 days; painted texture and Level 5 finishing in large open areas may add time.",
          },
        ].map((f, i) => (
          <details
            key={i}
            className="p-6 bg-white rounded-2xl border shadow-sm mt-4"
          >
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 p-6 bg-white rounded-2xl border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth, bright ceilings in {CITY}?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan. Tidy finish.
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
