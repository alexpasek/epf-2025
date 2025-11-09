import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Elizabeth Gardens";
const SLUG = "elizabeth-gardens";
const CITY_BASE = "/service-areas/popcorn-ceiling-removal/burlington";
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
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Dust-Controlled Level 5 Finish`,
  description: `${NAME} texture removal around Burloak & Lakeshore: sealed rooms, HEPA sanding, full-field Level 5 skim, stain-block primer & optional paint. Ideal for bungalows, split-levels and townhomes at the Burlington–Oakville border.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Elizabeth Gardens",
    "stucco/stipple ceiling removal Burloak",
    "smooth ceilings Burlington southeast",
    "Level 5 skim Burlington",
    "dustless popcorn removal HEPA",
    "pot light patch Elizabeth Gardens",
    "popcorn ceiling price per square foot Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Border-area specialists: containment, Level 5 skim, HEPA sanding, primer & paint. Pot light coordination, predictable scheduling near Burloak Waterfront Park.",
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
            item: "/service-areas/popcorn-ceiling-removal/",
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
            name: "Can you bundle multiple rooms to reduce cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—bundling bedrooms, hallway and main-floor areas improves efficiency and usually lowers per-sq-ft pricing.",
            },
          },
          {
            "@type": "Question",
            name: "Is painted popcorn harder to remove?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Paint binds the texture. We test a patch first; if scraping risks damage, we safely encapsulate and then skim to Level 5 for a flawless read.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot lights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We coordinate with your electrician (or refer), cut and patch openings, and blend to seamless before primer and paint.",
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
              Popcorn Ceiling Removal — {NAME}, Burlington
            </h1>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Bordering Oakville at <strong>Burloak Dr</strong>, {NAME} has
              bungalows, split-levels and townhomes where texture shadows show
              up under pot lights and strong daylight. We modernize fast without
              turning your home upside down: sealed rooms, corridor protection,
              HVAC masking, controlled scrape or safe encapsulation,{" "}
              <strong>full-field Level 5 skim</strong>, HEPA sanding and
              stain-block primer—then paint on request.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We’re in the area often (near{" "}
              <strong>Burloak Waterfront Park</strong> and{" "}
              <strong>Lakeshore</strong>), so scheduling is easy. Send photos
              and sizes for a quick written quote; we’ll coordinate pot-light
              layout, cut/patch cleanly and keep common areas tidy with daily
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
            <h3 className="text-xl font-semibold">Border-area logistics</h3>
            <p className="mt-2 text-gray-700">
              Fast access via Burloak/Lakeshore/QEW keeps starts on time. We
              stage materials smartly to keep parking and entryways clear.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Level 5 for small rooms</h3>
            <p className="mt-2 text-gray-700">
              Compact bedrooms and hallways show every ripple. Our full-field
              skim with raking-light QA makes spaces read crisp and modern.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot lights & vents</h3>
            <p className="mt-2 text-gray-700">
              We coordinate layout, cut, patch and blend around fixtures so the
              final ceiling is seamless—no rings or flash lines.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Clear pricing</h3>
            <p className="mt-2 text-gray-700">
              Photo sizes → written number → firm date. Materials & HST
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
            Containment & protection (rooms, floors, corridors, HVAC masking).
          </li>
          <li>
            Test patch to select scrape vs encapsulate for painted texture.
          </li>
          <li>
            <strong>Skim full-field to Level 5</strong> with extra passes at
            seams and bulkheads.
          </li>
          <li>HEPA sanding; raking-light inspections and micro touch-ups.</li>
          <li>Stain-block primer for a uniform, paint-ready surface.</li>
          <li>Optional: two finish coats premium ceiling paint.</li>
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
              <li>Townhome corridors & landings</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stucco/stipple removal Burloak</li>
              <li>Level 5 skim Burlington</li>
              <li>dustless popcorn removal HEPA</li>
              <li>pot light patch Burlington</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Helpful links</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>
                <Link className="underline" href="/services/popcorn/">
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
          What changes price here: painted texture, ceiling height, fixture
          count, previous patches and whether you choose Level 5 + paint.
          Bundling rooms lowers per-sq-ft. Materials & HST are separate. Share
          sizes for a firm written quote.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We serve streets off <strong>Burloak Dr</strong>,{" "}
          <strong>Lakeshore Rd</strong>, and <strong>New St</strong> with quick
          QEW access. Our staging keeps townhome entries clear and common
          corridors protected. Level 5 finishing is ideal for compact rooms that
          show every ripple.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/shoreacres/`}>
            Shoreacres
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/pinedale/`}>
            Pinedale
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/longmoor/`}>
            Longmoor
          </Link>
          .
        </p>
      </section>

      {/* PREP */}
      <section id="prep" className="mt-10">
        <h2 className="text-2xl font-semibold">Prep & expectations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>
            Please clear small items; we’ll handle protection and corridor
            runners.
          </li>
          <li>
            We test a spot first; heavy paint often means encapsulate + Level 5
            skim for the best outcome.
          </li>
          <li>
            Low-odour primers; we ventilate appropriately and share aftercare
            tips.
          </li>
          <li>
            Written scope, insured crews, and workmanship warranty provided.
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
            q: "How long for a bedroom?",
            a: "1–2 days typically; painted texture and bulkheads can add time, especially with Level 5 finish.",
          },
          {
            q: "Do you handle water stains and nail pops?",
            a: "Yes—repairs happen during skim and sanding, then we stain-block prime before paint.",
          },
          {
            q: "Do you work weekends?",
            a: "We can review timing options during quoting to match your schedule and building quiet hours.",
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
