import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Brant";
const SLUG = "brant";
const CITY_BASE = "/popcorn-ceiling-removal/burlington";
const ALL = [
  ["downtown-burlington", "Downtown Burlington"],
  ["aldershot", "Aldershot"],
  ["tyandaga", "Tyandaga"],
  ["brant-hills", "Brant Hills"],
  ["mountainside", "Mountainside"],
  ["headon-forest", "Headon Forest"],
  ["palmer", "Palmer"],
  ["tansley", "Tansley"],
  ["orchard", "Orchard"],
  ["shoreacres", "Shoreacres"],
  ["roseland", "Roseland"],
  ["longmoor", "Longmoor"],
  ["pinedale", "Pinedale"],
  ["alton-village", "Alton Village"],
  ["millcroft", "Millcroft"],
  ["brant", "Brant"],
  ["freeman", "Freeman"],
  ["maple", "Maple"],
  ["elizabeth-gardens", "Elizabeth Gardens"],
];

export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Downtown/Waterfront Level 5 Finish`,
  description: `Downtown ${NAME} popcorn/stucco/stipple ceiling removal near Brant St, Lakeshore, Spencer Smith Park & the Pier. Sealed rooms, HEPA sanding, full-field Level 5 skim, stain-block primer & optional finish paint. Pot light coordination, tidy crews, written warranty.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Brant Burlington",
    "stucco ceiling removal downtown Burlington",
    "stipple ceiling removal Brant Street Pier",
    "ceiling texture removal Burlington core",
    "Level 5 skim Burlington downtown",
    "dustless popcorn removal HEPA Burlington",
    "condo popcorn removal Burlington core",
    "pot light installation after popcorn removal Burlington",
    "popcorn ceiling price per square foot Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Downtown/waterfront specialists: sealed rooms, HEPA sanding, Level 5 skim & stain-block primer. Paint-ready or fully painted ceilings with pot light coordination.",
    url: `${CITY_BASE}/${SLUG}/`,
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
          "Popcorn/Stipple/Stucco Ceiling Removal",
          "Ceiling Smoothing & Flattening",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
          "Ceiling Painting",
        ],
        areaServed: `${NAME}, Burlington`,
        url: `${CITY_BASE}/${SLUG}/`,
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
            name: "Burlington",
            item: `${CITY_BASE}/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: NAME,
            item: `${CITY_BASE}/${SLUG}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `How much does popcorn ceiling removal cost in ${NAME}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Price is driven by square footage, ceiling height, paint build-up, fixture count and repairs. Downtown condos and older homes often need Level 5 finishing for a flawless read under strong daylight and pot lights. Share sizes/photos for a precise written quote.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work in condos by the waterfront?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—subject to building rules (hours, elevator pads, ventilation). We protect common areas and use HEPA-connected sanding to control dust.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot lights & painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can coordinate your electrician (or refer), cut openings, patch and blend. We also prime and, on request, apply two finish coats.",
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
  const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
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
              Popcorn Ceiling Removal — {NAME}, Burlington
            </h1>
            <p className="mt-3 text-gray-700 max-w-3xl">
              In <strong>{NAME}</strong> (Downtown Burlington), ceilings are
              scrutinized by <strong>strong lake-side daylight</strong>, long
              sightlines along <strong>Brant St</strong> &{" "}
              <strong>Lakeshore Rd</strong>, and tight pot-light grids in
              renovated condos and heritage homes. Texture shadows and old patch
              lines stand out near <strong>Spencer Smith Park</strong>, the{" "}
              <strong>Brant Street Pier</strong>,{" "}
              <strong>Mapleview Centre</strong> and
              <strong> Joseph Brant Museum</strong> corridors. Our workflow is
              built for these conditions: sealed rooms, double floor protection,
              HVAC masking, a<em>test patch</em> to choose controlled scrape vs
              safe encapsulation, <strong>full-field Level 5 skim</strong>,
              HEPA-connected sanding, and stain-block primer. The outcome is a
              smooth, bright ceiling that reads flat under pot lights, skylights
              and raking daylight—modern, resale-ready and photo-clean.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We work carefully in <strong>older plaster homes</strong> near the
              waterfront and in <strong>downtown condos</strong> around
              Lakeshore. Logistics (elevator pads, loading, quiet hours) are
              handled upfront so projects finish on schedule. Share sizes and
              photos for a firm written number; we’ll coordinate pot-light
              layouts with your electrician, cut/patch cleanly, and leave
              paint-ready or fully painted. Insured crews. Written warranty.
            </p>
          </div>

          {/* Blue CTAs */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md"
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
          <a href="#why-us" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#process" className="underline-offset-2 hover:underline">
            Process
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing
          </a>
          <a href="#local" className="underline-offset-2 hover:underline">
            Local details
          </a>
          <a href="#prep" className="underline-offset-2 hover:underline">
            Prep & expectations
          </a>
          <a href="#links" className="underline-offset-2 hover:underline">
            Neighbourhood links
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
            alt={`${NAME} Burlington popcorn ceiling removal — project ${
              i + 1
            }`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* WHY US */}
      <section id="why-us" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Why {NAME} homeowners choose us
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Downtown & waterfront light
            </h3>
            <p className="mt-2 text-gray-700">
              Raking light from the lake exposes micro-waves. Our Level 5 skim +
              raking-light QA makes ceilings read perfectly flat.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Condo & heritage friendly</h3>
            <p className="mt-2 text-gray-700">
              We handle elevator bookings, quiet hours and corridor protection,
              and we seamlessly blend plaster with newer drywall.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot lights & patches</h3>
            <p className="mt-2 text-gray-700">
              We coordinate layouts, cut/patch openings and skim so there are no
              rings or flash lines when lights turn on.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Predictable quotes</h3>
            <p className="mt-2 text-gray-700">
              Sizes/photos → written number → firm date. Materials & HST
              itemized; insured crews; written warranty.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Containment: rooms sealed, floors/corridors protected, HVAC masked
            (HEPA dust control).
          </li>
          <li>
            Test patch: choose controlled scrape vs safe encapsulation for heavy
            paint.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> with extra passes at
            seams and bulkheads.
          </li>
          <li>HEPA sanding; raking-light inspections and micro touch-ups.</li>
          <li>
            Stain-block primer to unify colour & sheen; low-odour options
            available.
          </li>
          <li>Optional: two finish coats; final tidy & walkthrough.</li>
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
              <li>Open-concept living/kitchen + bulkheads</li>
              <li>Condos on Lakeshore/Brant with pot lights</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington downtown</li>
              <li>condo popcorn ceiling removal Burlington</li>
              <li>Level 5 skim Burlington</li>
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
                <Link className="underline" href={`${CITY_BASE}/`}>
                  Burlington Neighbourhood Index
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
                  href="/blog/popcorn-ceiling-removal-cost-timeline"
                >
                  Popcorn Removal: Cost & Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-4xl">
          Downtown factors: painted texture, fixture density, elevator windows
          and older plaster transitions. Bundling rooms improves per-sq-ft
          rates. Materials & HST separate. Share sizes for a firm written quote.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We regularly serve streets off <strong>Brant St</strong>,{" "}
          <strong>Lakeshore Rd</strong>, around{" "}
          <strong>Spencer Smith Park</strong>, the{" "}
          <strong>Performing Arts Centre</strong> and{" "}
          <strong>Joseph Brant Hospital</strong>. Access, loading and parking
          are planned to keep common areas clean and the job on time.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/maple/`}>
            Maple
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/freeman/`}>
            Freeman
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/roseland/`}>
            Roseland
          </Link>
          .
        </p>
      </section>

      {/* PREP */}
      <section id="prep" className="mt-10">
        <h2 className="text-2xl font-semibold">Prep & expectations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>
            Clear small items; we protect floors, cabinetry, corridors and
            elevators (if applicable).
          </li>
          <li>
            Test patch first; heavy paint often means encapsulate + Level 5 skim
            for best results.
          </li>
          <li>
            Low-odour products; ventilation plans reviewed when stain-blocking
            is required.
          </li>
          <li>
            Insured crews, written scope and workmanship warranty included.
          </li>
        </ul>
      </section>

      {/* LINKS */}
      <section id="links" className="mt-10">
        <h2 className="text-2xl font-semibold">
          More Burlington neighbourhoods
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {ALL.filter(([s]) => s !== SLUG).map(([s, n]) => (
            <Link key={s} href={`${CITY_BASE}/${s}/`} className="pill">
              {n}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — {NAME}</h2>
        {[
          {
            q: "How long for a typical bedroom?",
            a: "Often 1–2 days. Painted texture, bulkheads and condo logistics may add time—especially with Level 5 finish.",
          },
          {
            q: "Do you repair prior patches and stains?",
            a: "Yes—repairs are integrated during skim; stain-block primer prevents bleed-through before paint.",
          },
          {
            q: "Can you paint too?",
            a: "Yes—primer + two coats available, or we leave perfectly paint-ready.",
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
            Ready for smooth, bright ceilings in {NAME}?
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
