import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Roseland";
const SLUG = "roseland";
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
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Heritage-Friendly Level 5 Finish`,
  description: `${NAME} popcorn/stipple removal near Lakeshore & Guelph Line: careful containment, Level 5 skim, HEPA sanding, stain-block primer & optional paint. Ideal for mature homes with strong daylight and pot lights.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Roseland Burlington",
    "stucco/stipple ceiling removal Roseland",
    "smooth ceilings Roseland",
    "Level 5 skim Burlington Roseland",
    "heritage home ceiling smoothing Burlington",
    "dustless popcorn removal HEPA Burlington",
    "pot light patch Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Roseland specialists: sealed rooms, HEPA sanding, full-field Level 5 skim, stain-block primer, paint-ready or painted. Pot light coordination, discreet staging.",
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
            name: "Can you work in heritage homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—Roseland’s mature homes often combine plaster and newer drywall. We blend substrates with full-field Level 5 skim for a single, flat read under raking light.",
            },
          },
          {
            "@type": "Question",
            name: "Is it dusty or smelly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms and use HEPA-connected sanding. Primers are low-odour or ventilated appropriately when stain-blocking is required.",
            },
          },
          {
            "@type": "Question",
            name: "Pot lights and paint?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We coordinate layout with your electrician (or refer), cut/patch, prime and can apply two finish coats—or leave paint-ready.",
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
              {NAME} is known for mature trees, lake-light and character homes.
              These features reveal every ceiling ripple and old patch. Our
              process respects the architecture while modernizing the finish:
              clean containment, controlled scrape or safe encapsulation,
              <strong> Level 5 full-field skim</strong> to unify plaster and
              drywall, HEPA sanding, stain-block primer, and optional paint. The
              goal is a seamless, bright ceiling that feels original to the
              home—just without the texture.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We work off <strong>Guelph Line</strong>,{" "}
              <strong>Lakeshore Rd</strong> and the{" "}
              <strong>Roseland Creek</strong> area frequently. Send room sizes
              and photos for a fast written number; we’ll coordinate pot lights,
              patch cleanly and keep living areas usable with daily tidy
              wrap-ups.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md"
            >
              <span className="mr-2">📞</span>(647) 923-6784
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-2xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md"
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
              Heritage-friendly smoothing
            </h3>
            <p className="mt-2 text-gray-700">
              We blend old plaster with newer drywall using Level 5 technique so
              the ceiling reads as one plane—great under lake-side daylight.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Quiet, clean workflow</h3>
            <p className="mt-2 text-gray-700">
              Sealed rooms, HEPA sanding, low-odour primers and daily tidy
              wrap-ups keep living spaces comfortable.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot lights & skylights</h3>
            <p className="mt-2 text-gray-700">
              We coordinate layout, cut/patch, and skim around fixtures so you
              don’t see rings or flash lines later.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Predictable quoting</h3>
            <p className="mt-2 text-gray-700">
              Photo sizes → written number → set start date. Materials & HST
              itemized; warranty included.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Containment & protection (floors, corridors, stair rails); HVAC
            masking.
          </li>
          <li>
            Discreet test patch; choose controlled scrape vs encapsulation for
            painted texture.
          </li>
          <li>
            <strong>Full-field Level 5 skim</strong> to unify substrates and
            remove texture telegraphing.
          </li>
          <li>HEPA sanding; raking-light inspections and micro touch-ups.</li>
          <li>Stain-block primer for an even, paint-ready surface.</li>
          <li>Optional finish paint; final tidy and walkthrough.</li>
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
              <li>Two-storey foyers & skylight zones</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>smooth ceilings Roseland</li>
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
          Roseland factors: older plaster transitions, painted texture, tall
          foyer scaffolding and fixture counts. We bundle rooms to keep
          per-sq-ft competitive. Materials & HST are separate. Share sizes for a
          firm written quote.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We’re frequently on <strong>Lakeshore Rd</strong>,{" "}
          <strong>Guelph Line</strong> and streets feeding the{" "}
          <strong>Roseland Creek</strong> corridor. Our Level 5 approach is
          tailored to large windows and bright lake-side rooms—no seam
          telegraphing under daylight or pot lights.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/shoreacres/`}>
            Shoreacres
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/brant/`}>
            Brant
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/maple/`}>
            Maple
          </Link>
          .
        </p>
      </section>

      {/* PREP */}
      <section id="prep" className="mt-10">
        <h2 className="text-2xl font-semibold">Prep & expectations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>Clear small decor; we handle protection and staging.</li>
          <li>
            We test a discreet area; if needed we encapsulate and skim to Level
            5 for a flawless read.
          </li>
          <li>
            Low-odour products; ventilation plans reviewed when stain-blocking
            is required.
          </li>
          <li>Insurance and written workmanship warranty included.</li>
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
            q: "How long does a bedroom take?",
            a: "Often 1–2 days; painted texture and tall foyer areas can add time with Level 5 finishing.",
          },
          {
            q: "Do you repair previous patches?",
            a: "Yes—repairs are integrated during skim and sanding so the surface reads as one plane before primer.",
          },
          {
            q: "Can you paint too?",
            a: "Yes—primer + two coats available, or we can leave perfectly paint-ready.",
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
