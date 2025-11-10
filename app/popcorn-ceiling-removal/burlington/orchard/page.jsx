import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Orchard";
const SLUG = "orchard";
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
];

export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Dust-Controlled Level 5 Finish`,
  description: `${NAME} texture removal near Sutton Dr & Dryden Ave: sealed rooms, HEPA sanding, full-field Level 5 skim, primer & paint. Ideal for newer open-concept homes and pot-light upgrades.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Orchard Burlington",
    "stucco/stipple removal Orchard",
    "smooth ceilings Orchard Burlington",
    "Level 5 skim Burlington",
    "pot light patching Burlington",
    "dustless popcorn removal HEPA",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Smooth, modern ceilings for Orchard homes: containment, Level 5 skim, HEPA sanding, primer & finish paint, pot light coordination.",
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
          "Popcorn Removal",
          "Ceiling Skim-Coat",
          "Level 5 Finish",
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
            name: "Can you finish to Level 5?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—full-field skim and polish for a near-flawless read under pot lights and daylight common in Orchard open-concept spaces.",
            },
          },
          {
            "@type": "Question",
            name: "Do you patch around pot lights and vents?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cut, patch and blend to seamless. We coordinate with your electrician or can refer one.",
            },
          },
          {
            "@type": "Question",
            name: "How do you control dust?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sealed rooms, corridor protection, and HEPA-connected sanding. Daily tidy wrap-ups keep the rest of your home usable.",
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
              {NAME} is full of newer open-concept plans where light pours
              across long ceiling runs. Texture shadows and past patches are
              obvious here. We remove or encapsulate texture, then{" "}
              <strong>skim full-field to Level 5</strong> so surfaces read flat
              beside pot lights, skylights and large windows. Rooms are sealed,
              floors protected, returns and supplies masked, and sanding is
              HEPA-connected for a tidy, house-friendly workflow.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We handle pot light layouts with your electrician (or refer), cut
              holes, patch and blend, then stain-block prime and, if you like,
              apply two finish coats. Send sizes and photos for a quick written
              number and a start date that fits your timeline.
            </p>
          </div>

          {/* Blue CTAs */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>(647) 923-6784
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
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
            <h3 className="text-xl font-semibold">Open-concept perfection</h3>
            <p className="mt-2 text-gray-700">
              Long runs from kitchen to family room need consistent flatness.
              Our Level 5 skim and raking-light QA eliminate ripples and
              ghosting.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Dust control that works</h3>
            <p className="mt-2 text-gray-700">
              Sealed rooms, masked HVAC, HEPA sanding, daily tidy. We keep
              nurseries and work-from-home areas usable.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Pot lights & feature ceilings
            </h3>
            <p className="mt-2 text-gray-700">
              We blend around lights, skylights and dropped bulkheads common
              along <strong>Sutton Dr</strong> and <strong>Dryden Ave</strong>.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Quote clarity</h3>
            <p className="mt-2 text-gray-700">
              Share sizes/photos → written number → set date. Insured crews and
              a written warranty included.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>Room containment, floor/cabinet protection, HVAC masking.</li>
          <li>Test patch; scrape or encapsulate based on paint build-up.</li>
          <li>
            <strong>Skim full-field to Level 5</strong>, extra passes at seams
            and bulkheads.
          </li>
          <li>HEPA sanding; raking-light checks & micro touch-ups.</li>
          <li>Stain-block primer for uniformity; optional two finish coats.</li>
          <li>Final tidy, walkthrough and aftercare tips.</li>
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
              <li>Bedrooms & nurseries</li>
              <li>Open kitchen/family ceilings</li>
              <li>Hallways + landings with pot lights</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stipple ceiling removal Orchard</li>
              <li>Level 5 skim Burlington</li>
              <li>dustless popcorn removal HEPA</li>
              <li>pot light patch Burlington</li>
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
          Pricing reflects paint build-up, height, fixture count and chosen
          finish level. Materials & HST are separate. Share sizes for a firm
          written quote; bundling rooms lowers per-sq-ft.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We’re regularly in {NAME} along <strong>Sutton Dr</strong>,{" "}
          <strong>Dryden Ave</strong>, <strong>Blue Spruce Ave</strong> and{" "}
          <strong>Appleby Line</strong>. Many homes were built with
          pot-light-ready layouts; our finish hides old seams so new lighting
          looks showroom-clean.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/millcroft/`}>
            Millcroft
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/alton-village/`}>
            Alton Village
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/tansley/`}>
            Tansley
          </Link>
          .
        </p>
      </section>

      {/* PREP */}
      <section id="prep" className="mt-10">
        <h2 className="text-2xl font-semibold">Prep & expectations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>
            Move small items; we’ll protect floors, cabinets and walk paths.
          </li>
          <li>
            We choose scrape vs encapsulate after a test patch; Level 5 skim is
            standard in bright, open rooms.
          </li>
          <li>
            Low-odour products and good ventilation keep spaces comfortable
            during work.
          </li>
          <li>Insurance and workmanship warranty included with your quote.</li>
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
            q: "Timeline for a bedroom?",
            a: "Often 1–2 days; open-concept main floors and painted texture increase time, especially with Level 5 finish.",
          },
          {
            q: "Can you match older patches?",
            a: "Yes—repairs, full-field skim and raking-light QA create a uniform read before primer and paint.",
          },
          {
            q: "Do you warranty the work?",
            a: "Yes—WSIB + liability insured, written workmanship warranty provided.",
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

      {/* Sticky CTA */}
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
