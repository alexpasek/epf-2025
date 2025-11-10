import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Mountainside";
const SLUG = "mountainside";
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
];

export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Dust-Controlled Level 5 Finish`,
  description: `${NAME} popcorn / stucco / stipple ceiling removal with sealed rooms, HEPA sanding, Level 5 skim, primer & paint. Smooth, bright ceilings—predictable quotes, tidy crews, written warranty.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    `remove popcorn ceiling ${NAME}`,
    "stucco ceiling removal Mountainside",
    "stipple ceiling removal Mountainside",
    "ceiling texture removal Burlington",
    "smooth ceilings Burlington Mountainside",
    "Level 5 ceiling Burlington",
    "painted popcorn removal Burlington",
    "popcorn ceiling price per square foot Burlington",
    "pot light installation after popcorn removal Burlington",
    "dustless popcorn removal HEPA Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "House-friendly workflow: sealed rooms, HEPA sanding, Level 5 skim, stain-block primer, paint-ready finish. Pot light patching & coordination.",
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
            name: `How much does popcorn ceiling removal cost in ${NAME}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Price depends on paint build-up, repairs, height, and square footage. Bedrooms usually fall into a competitive per-sq-ft range; share photos/sizes for a firm written quote.",
            },
          },
          {
            "@type": "Question",
            name: "Is the process dustless?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms, mask HVAC returns/supplies, and use HEPA-connected sanding. Daily tidy wrap-ups keep corridors and non-work rooms clean.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot lights and painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We cut holes, patch after, stain-block prime, and can apply finish coats or leave paint-ready.",
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
              In {NAME}, many ceilings have mixed substrates (old plaster beside
              newer drywall) and layers of paint over texture. Our workflow is
              tuned for this: room containment, double floor protection, HVAC
              masking, controlled scrape or safe encapsulation, tight{" "}
              <strong>Level 5 skim</strong>, HEPA sanding, stain-block primer,
              and an even finish under raking light. It’s how we deliver smooth,
              bright ceilings—even across long runs and bulkheads—without
              turning the home upside down.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We’re local to Burlington’s QEW/403 corridor, so scheduling is
              easy. Send rough sizes and photos for a fast, written number—then
              lock a start date. We’ll coordinate pot-light cutouts with your
              electrician (or ours), patch cleanly, and hand off paint-ready or
              fully painted.
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
              Entry paths protected, furniture wrapped, doorways sealed, vents
              masked—dust stays in the work zone. We tidy daily so bedrooms and
              main-floor spaces remain usable.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">True Level 5 smoothness</h3>
            <p className="mt-2 text-gray-700">
              Full-field skim with raking-light checks removes texture
              “ghosting.” Great for long living rooms and open kitchens common
              in {NAME}.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot lights & patches</h3>
            <p className="mt-2 text-gray-700">
              We coordinate layout, cut holes, and patch to blend perfectly with
              your new smooth ceiling—no visible rings or ridges.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Predictable quotes & schedule
            </h3>
            <p className="mt-2 text-gray-700">
              Photo sizes → written quote → firm start date. Insured crews
              arrive with a clear scope so projects stay on time.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>Containment: seal rooms, mask HVAC, double floor protection.</li>
          <li>
            Test patch: controlled scrape vs safe encapsulation for heavy paint.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong>.
          </li>
          <li>HEPA-connected sanding; raking-light QA & touch-ups.</li>
          <li>Stain-block primer for uniform colour & sheen.</li>
          <li>Optional: two finish coats premium ceiling paint.</li>
        </ol>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Bulkheads, bays, vaulted transitions, and previous patches are handled
          with extra passes so the finished ceiling reads flat from every angle.
        </p>
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
              <li>Open kitchen + family room ceilings</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stucco / stipple ceiling removal</li>
              <li>ceiling smoothing & resurfacing</li>
              <li>Level 5 skim Burlington</li>
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
                  href="/blog/popcorn-ceiling-removal-cost-timeline"
                >
                  Popcorn Removal: Cost & Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-4xl">
          Unpainted texture prices lower; painted ceilings, repairs, and full
          Level 5 add scope. Materials & HST are separate line items. Share
          sizes for a firm written quote; we often price multi-room bundles to
          keep per-sq-ft lower.
        </p>
      </section>

      {/* LOCAL SEO DETAILS / PROXIMITY */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We regularly serve homes off <strong>Guelph Line</strong>,{" "}
          <strong>Upper Middle Rd</strong>, <strong>Mountainside Dr</strong>,
          and near the <strong>Mountainside Recreation Centre</strong> and{" "}
          <strong>QEW/403</strong>. Quick access keeps timelines tight. Older
          bungalows and split-levels often have low bulkheads and vents that
          need careful detailing—our skimming approach blends everything flat.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Looking nearby? Also see{" "}
          <Link className="underline" href={`${CITY_BASE}/brant-hills/`}>
            Brant Hills
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/tyandaga/`}>
            Tyandaga
          </Link>{" "}
          and{" "}
          <Link className="underline" href={`${CITY_BASE}/headon-forest/`}>
            Headon Forest
          </Link>
          .
        </p>
        <p className="mt-4 text-gray-700 max-w-5xl">
          Popular searches in {NAME}:{" "}
          <em>popcorn ceiling removal Burlington</em>,{" "}
          <em>remove popcorn ceiling {NAME.toLowerCase()}</em>,
          <em> ceiling texture removal</em>, <em>stucco/stipple removal</em>,{" "}
          <em>Level 5 skim</em>, <em>dustless popcorn removal (HEPA)</em>,
          <em> pot light installation after popcorn removal</em>, and{" "}
          <em>popcorn ceiling price per square foot</em>.
        </p>
      </section>

      {/* LINKS TO OTHER NEIGHBOURHOODS */}
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
            a: "Most bedrooms take 1–2 days; larger/painted ceilings or Level 5 finishing may add time.",
          },
          {
            q: "Do you handle water stains and previous patches?",
            a: "Yes—repairs plus stain-blocking primer before finish paint.",
          },
          {
            q: "Are you insured and do you warranty the work?",
            a: "Yes—WSIB + liability insured. Written workmanship warranty provided.",
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
