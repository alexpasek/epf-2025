import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Millcroft";
const SLUG = "millcroft";
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
  description: `${NAME} popcorn/stucco/stipple removal with sealed rooms, HEPA sanding, tight Level 5 skim, stain-block primer & optional finish paint. Smooth, bright ceilings for golf-course homes, two-storey foyers and open plans.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    `remove popcorn ceiling ${NAME} Burlington`,
    "stucco ceiling removal Millcroft",
    "stipple ceiling removal Millcroft",
    "smooth ceilings Millcroft Burlington",
    "Level 5 skim Millcroft",
    "painted popcorn removal Burlington",
    "popcorn ceiling price per square foot Burlington",
    "pot light patching Burlington",
    "dustless popcorn removal HEPA Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "House-friendly workflow: sealed rooms, HEPA sanding, Level 5 skim, primer & paint-ready finish. Pot light coordination and patches.",
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
              text: "Depends on square footage, height, paint layers and repair intensity. Bedrooms usually fall into a competitive per-sq-ft range; open plans, tall foyers and painted texture increase scope. Share sizes/photos for a firm written quote.",
            },
          },
          {
            "@type": "Question",
            name: "Is it dusty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms and sand with HEPA-connected tools. Corridors and non-work areas stay clean with daily tidy wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot lights and painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We cut, patch and blend; we can paint, or leave perfectly paint-ready.",
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
              {NAME} homes—near <strong>Millcroft Golf Club</strong>,{" "}
              <strong>Appleby Line</strong>, and{" "}
              <strong>Upper Middle Rd</strong>—often mix two-storey foyers, long
              sightlines and extensive pot lighting. Texture shadows and old
              patch lines pop under this lighting. Our workflow contains the
              mess and delivers a <strong>flat, modern read</strong> even in
              tall, bright rooms: sealed rooms, double floor protection, HVAC
              masking, controlled scrape (or safe encapsulation for painted
              texture), <strong>full-field Level 5 skim</strong>, HEPA sanding,
              stain-block primer, and optional finish paint. Result: smooth
              ceilings that make kitchens and open living areas feel bigger and
              brighter.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Send room sizes and a few photos for a fast written number. We
              block the schedule, coordinate pot light locations with your
              electrician, cut and patch cleanly, and deliver paint-ready or
              fully painted ceilings. Tidy crews, predictable timelines, and a
              written warranty are standard.
            </p>
          </div>

          {/* Blue CTAs */}
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
            <h3 className="text-xl font-semibold">Built for bright rooms</h3>
            <p className="mt-2 text-gray-700">
              Raking-light inspections and tight skims eliminate ghosting where
              sunlight and pot lights meet vaulted and two-storey spaces common
              in {NAME} golf-course homes.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Containment that respects your home
            </h3>
            <p className="mt-2 text-gray-700">
              Sealed doorways, protected stairways, wrapped cabinetry and
              corridor runners keep dust contained. Daily tidy wrap-ups mean
              family spaces remain usable.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Pot lights, bulkheads & patches
            </h3>
            <p className="mt-2 text-gray-700">
              We coordinate locations, cut holes, and blend patches so the final
              smooth ceiling looks originally built—not patched.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Predictable quoting & schedule
            </h3>
            <p className="mt-2 text-gray-700">
              Photo sizes → written number → locked start date. We arrive with a
              clear scope, insured crew, and the right tools to finish on time.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>Seal rooms, mask HVAC, double floor protection.</li>
          <li>
            Test patch: controlled scrape vs safe encapsulation for heavy paint.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> with extra passes at
            seams and bulkheads.
          </li>
          <li>HEPA sanding; raking-light QA and micro-touch-ups.</li>
          <li>Stain-block primer for uniform colour and sheen.</li>
          <li>Optional: two finish coats premium ceiling paint.</li>
        </ol>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Two-storey foyers and open kitchens often need scaffold or ladder
          staging; we plan access and safety so the work proceeds smoothly and
          quietly.
        </p>
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
              <li>Open main floors and kitchen bulkheads</li>
              <li>Two-storey foyer smoothing</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stucco/stipple ceiling removal</li>
              <li>Level 5 skim Burlington</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>price per square foot Burlington</li>
              <li>pot light patching Burlington</li>
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
                  href="/blog/popcorn-ceiling-removal-cost-timeline/"
                >
                  Popcorn Removal: Cost & Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-4xl">
          Unpainted texture prices lower; painted texture, tall foyers and full
          Level 5 finishing add scope. Materials & HST are separate. Share sizes
          for a firm quote; multi-room bundles help reduce per-sq-ft.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We work throughout {NAME}: <strong>Millcroft Park</strong>,{" "}
          <strong>Country Club Dr</strong>, <strong>Berwick Dr</strong>, near{" "}
          <strong>Appleby Line</strong> and <strong>Upper Middle</strong>. Homes
          here frequently blend additions with original construction—our Level 5
          skim hides transitions so long runs read perfectly under pot lights
          and daylight. Fast access to the QEW/403 keeps our start and finish
          times predictable.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby choices:{" "}
          <Link className="underline" href={`${CITY_BASE}/headon-forest/`}>
            Headon Forest
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/orchard/`}>
            Orchard
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/tansley/`}>
            Tansley
          </Link>
          .
        </p>
      </section>

      {/* PREP & EXPECTATIONS */}
      <section id="prep" className="mt-10">
        <h2 className="text-2xl font-semibold">Prep & expectations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>
            Clear small items; we’ll handle heavy protection and corridor
            runners.
          </li>
          <li>
            We test a discreet patch first. If scraping risks substrate damage,
            we encapsulate and skim to Level 5 for a flawless read.
          </li>
          <li>
            Stain-block primer is standard to unify colour and sheen; finish
            paint is optional.
          </li>
          <li>Written scope, insurance, and workmanship warranty provided.</li>
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
            q: "How long for a typical room?",
            a: "Often 1–2 days; painted texture and tall foyer/skylight areas can add time, especially with Level 5 finishing.",
          },
          {
            q: "Do you handle water stains and prior patches?",
            a: "Yes—repairs are included during skim and sanding before primer. Stain-block primer prevents bleed-through.",
          },
          {
            q: "Insurance & warranty?",
            a: "WSIB + liability insured. Written workmanship warranty provided with your quote.",
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
