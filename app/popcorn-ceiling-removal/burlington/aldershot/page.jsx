import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Aldershot";
const SLUG = "aldershot";
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
  ["millcroft", "Millcroft"],
  ["alton-village", "Alton Village"],
  ["brant", "Brant"],
  ["roseland", "Roseland"],
  ["shoreacres", "Shoreacres"],
  ["longmoor", "Longmoor"],
  ["pinedale", "Pinedale"],
  ["maple", "Maple"],
  ["corporate", "Corporate"],
  ["freeman", "Freeman"],
  ["dynes", "Dynes"],
];

export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Dust-Controlled Level 5 Finish`,
  description: `${NAME} popcorn / stucco / stipple ceiling removal with HEPA dust control, Level 5 skim-coat, prime & paint. Smooth, bright ceilings—fast quotes, tidy crews, written warranty.`,
  keywords: [
    "popcorn ceiling removal Aldershot Burlington",
    "remove popcorn ceiling Aldershot",
    "stucco ceiling removal Aldershot",
    "stipple ceiling removal Aldershot",
    "ceiling texture removal Aldershot",
    "ceiling smoothing Aldershot",
    "skim coat ceiling Aldershot",
    "popcorn ceiling price per square foot Burlington",
    "popcorn ceiling contractors Burlington",
    "dustless popcorn removal Burlington",
    "asbestos testing popcorn ceiling Burlington",
    "pot light installation after popcorn removal Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "House-friendly workflow: sealed rooms, HEPA sanding, Level 5 skim-coat, stain-block primer, paint-ready finish.",
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
            name: "How much does popcorn ceiling removal cost in Aldershot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on texture thickness, paint layers, ceiling repairs and square footage. Bedrooms often land in a competitive per-sq-ft range. Share room sizes/photos for a fast written number.",
            },
          },
          {
            "@type": "Question",
            name: "Is the process dustless?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms, mask returns/supplies, and sand with HEPA-connected tools. Corridors and non-work areas stay clean with daily tidy wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "What if the ceiling is painted or has old patches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small patch. If scraping risks damage, we safely encapsulate and skim full-field to Level 5, then prime for an even, paint-ready surface.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot-lights or painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We stain-block prime and can apply finish coats, or leave perfectly paint-ready.",
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
              Smooth, bright ceilings—without turning your home upside down. We
              protect floors, cover furniture, seal doorways, mask returns and
              supplies, and sand with HEPA-connected tools. Where heavy paint
              layers or previous patches make scraping risky, we safely
              encapsulate and skim <strong>full-field to Level 5</strong> for a
              flat, even read under raking light. Stain-block primer ensures a
              uniform finish ready for your chosen paint.
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
            Local SEO details
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
              House-friendly containment
            </h3>
            <p className="mt-2 text-gray-700">
              Clean entry paths, wrapped furniture, sealed rooms, and corridor
              protection keep dust in the work zone. We tidy daily so bedrooms
              and main-floor living spaces remain usable.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Level 5 smoothness</h3>
            <p className="mt-2 text-gray-700">
              We skim full-field and inspect under raking light from{" "}
              <strong>LaSalle Park</strong> and lakeside daylight exposures so
              joints don’t telegraph—ideal for both mid-century homes and modern
              renovations in Aldershot.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot-lights & painting</h3>
            <p className="mt-2 text-gray-700">
              Coordinate with your electrician (or request a referral). We
              stain-block prime and can apply finish coats—or leave perfectly
              paint-ready.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Predictable quotes & schedule
            </h3>
            <p className="mt-2 text-gray-700">
              Send rough sizes and a few photos for a fast, written number.
              Choose a start date—our insured crew arrives with a clear scope
              and tidy workflow.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Protect floors & furniture, seal doorways, mask returns/supplies
            (HEPA dust control).
          </li>
          <li>
            Test a discreet patch: controlled scrape vs safe encapsulation (when
            paint layers are heavy).
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> for a flat read.
          </li>
          <li>HEPA-connected sanding; raking-light checks and touch-ups.</li>
          <li>
            Stain-block primer to unify the surface and prevent bleed-through.
          </li>
          <li>
            Optional: two coats premium ceiling paint, or leave paint-ready.
          </li>
        </ol>
      </section>

      {/* PRICING & INTENT */}
      <section id="pricing" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Pricing & high-intent services
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Typical scopes</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>Bedrooms & primary suites</li>
              <li>Main-floor living/dining + hallways</li>
              <li>Open-plan areas and landings</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()} burlington</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stucco / stipple ceiling removal</li>
              <li>ceiling smoothing & resurfacing</li>
              <li>skim coat ceiling Level 5</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>popcorn ceiling price per square foot Burlington</li>
              <li>asbestos testing referral (when needed)</li>
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
                  href="/blog/popcorn-ceiling-removal-cost-timeline/"
                >
                  Popcorn Removal: Cost & Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-4xl">
          Factors that influence <strong>price per square foot</strong> in{" "}
          {NAME} include ceiling height, paint accumulation on texture, number
          of fixtures (smoke detectors, vents), prior patching, water stains,
          and whether you’d like us to <em>paint after prime</em> or leave
          paint-ready. We keep pricing competitive for single rooms and
          multi-room groups; share sizes for a firm quote.
        </p>
      </section>

      {/* LOCAL SEO DETAILS / PROXIMITY */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We regularly serve homes off <strong>Plains Rd W/E</strong>, near{" "}
          <strong>Waterdown Rd</strong> and <strong>King Rd</strong>, around{" "}
          <strong>LaSalle Park & Marina</strong> and the{" "}
          <strong>Royal Botanical Gardens</strong> corridor. Many Aldershot
          ceilings are a mix of older plaster and newer drywall additions—our{" "}
          <strong>Level 5 skim</strong> blends substrates so the ceiling reads
          smooth across daylight and pot-lights. Parking and access are planned
          around QEW/403 ramps to keep workflow efficient.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Looking nearby? We also cover{" "}
          <Link className="underline" href={`${CITY_BASE}/tyandaga/`}>
            Tyandaga
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/brant-hills/`}>
            Brant Hills
          </Link>{" "}
          and{" "}
          <Link
            className="underline"
            href={`${CITY_BASE}/downtown-burlington/`}
          >
            Downtown Burlington
          </Link>
          .
        </p>

        <p className="mt-4 text-gray-700 max-w-5xl">
          Popular searches we fulfill in {NAME}:{" "}
          <em>popcorn ceiling removal Burlington</em>,{" "}
          <em>remove popcorn ceiling Aldershot</em>,{" "}
          <em>stucco/stipple ceiling removal</em>,
          <em> ceiling texture removal</em>, <em>skim coat Level 5</em>,{" "}
          <em>dustless popcorn removal (HEPA)</em>,{" "}
          <em>pot light installation after popcorn removal</em>, and
          <em> popcorn ceiling price per square foot</em>.
        </p>
      </section>

      {/* LINKS TO OTHER BURLINGTON NEIGHBOURHOODS */}
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
            q: "How long does a typical room take?",
            a: "Most bedrooms take 1–2 days depending on repairs and whether we’re painting after prime. Multi-room groupings improve efficiency.",
          },
          {
            q: "Will there be odours or strong solvents?",
            a: "We use low-odour products and ventilate appropriately. If stain-blocking is required, we’ll review primer options and ventilation.",
          },
          {
            q: "Are you insured and do you warranty the work?",
            a: "Yes—WSIB and liability insured. We include a written workmanship warranty and a clear scope before we begin.",
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
