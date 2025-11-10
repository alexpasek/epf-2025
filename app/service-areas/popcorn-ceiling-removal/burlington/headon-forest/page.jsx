import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Headon Forest";
const SLUG = "headon-forest";
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
  description: `${NAME} stucco/popcorn ceiling removal with clean containment, Level 5 skim, HEPA sanding, primer & paint. Pot light coordination, predictable quotes, written warranty.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Headon",
    "stucco ceiling removal Headon Forest",
    "ceiling texture removal Burlington",
    "smooth ceilings Headon Forest",
    "Level 5 ceiling Burlington",
    "painted popcorn removal Headon",
    "popcorn ceiling price per square foot Burlington",
    "pot light patching Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Containment, scrape/encapsulate, Level 5 skim, HEPA sanding, primer & finish paint. Clean, modern ceilings for Headon Forest homes.",
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
            name: "Is painted popcorn harder to remove?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We use controlled dry scrape and add skim-coats for a flawless finish under strong lighting common in Headon Forest homes.",
            },
          },
          {
            "@type": "Question",
            name: "Can you finish to Level 5?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On request. Level 5 adds a tight skim & polish for near-perfect flatness—great for open-plan rooms.",
            },
          },
          {
            "@type": "Question",
            name: "Do you patch pot light cut-outs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—layout, cut, patch and blend so the new smooth ceiling is seamless.",
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
              From 2-storey living rooms to cozy bedrooms along{" "}
              <strong>Walker’s Line</strong> and{" "}
              <strong>Upper Middle Rd</strong>, our{" "}
              <strong>Headon Forest</strong> team delivers smooth, modern
              ceilings with minimal disruption. We protect floors and cabinetry,
              seal doorways, mask HVAC returns, and work in self-contained
              zones. Where paint layers make scraping risky, we safely
              encapsulate and <strong>skim full-field to Level 5</strong>, then
              HEPA sand and stain-block prime for a uniform, paint-ready finish.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Lighting in Headon Forest can be unforgiving—pot lights,
              skylights, and tall windows reveal every imperfection. Our
              raking-light QA ensures joints don’t telegraph. We coordinate
              pot-light layout with your electrician, cut and patch, and deliver
              a ceiling that reads flat from every angle.
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
            <h3 className="text-xl font-semibold">Dust control & daily tidy</h3>
            <p className="mt-2 text-gray-700">
              Sealed rooms, protected flooring, and tidy wrap-ups keep busy
              family areas usable while we work.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Lighting-proof finish</h3>
            <p className="mt-2 text-gray-700">
              Raking-light checks ensure a flat read beside big windows on
              Cleaver Ave, Forest Run Park, and Ireland Park areas.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot lights & patches</h3>
            <p className="mt-2 text-gray-700">
              We cut, patch, and skim so the final ceiling is seamless—no rings,
              no flash lines.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Clear pricing</h3>
            <p className="mt-2 text-gray-700">
              Send sizes/photos for a written number. Multi-room bundles keep
              per-sq-ft competitive.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>Containment & double floor protection; HVAC masking.</li>
          <li>Test patch; choose controlled scrape vs encapsulation.</li>
          <li>
            <strong>Skim full-field to Level 5</strong> where needed for a
            flawless read.
          </li>
          <li>HEPA sanding; raking-light QA & touch-ups.</li>
          <li>Stain-block primer; even colour & sheen.</li>
          <li>Optional: two finish coats premium ceiling paint.</li>
        </ol>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Large open areas may get extra passes for bulkheads and long seams so
          your ceiling looks freshly built—not patched.
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
              <li>Bedrooms, lofts & stair landings</li>
              <li>Living/dining + kitchen bulkheads</li>
              <li>Open-plan main floors with pot lights</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>smooth ceilings Headon Forest</li>
              <li>Level 5 ceiling Burlington</li>
              <li>painted popcorn removal</li>
              <li>pot light patch Burlington</li>
              <li>price per square foot Burlington</li>
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
          Pricing reflects paint build-up, height, bulkheads, and finish level.
          Materials & HST are billed separately. Share sizes for a firm quote.
        </p>
      </section>

      {/* LOCAL SEO DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We’re in {NAME} often—<strong>Cleaver Ave</strong>,{" "}
          <strong>Headon Rd</strong>, <strong>Jordan Ave</strong>—with fast
          access to
          <strong> Upper Middle</strong> and <strong>Walker’s Line</strong>.
          Many homes feature long ceiling runs that need Level 5 discipline to
          look perfect under pot lights.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/millcroft/`}>
            Millcroft
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/tansley/`}>
            Tansley
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/palmer/`}>
            Palmer
          </Link>
          .
        </p>
        <p className="mt-4 text-gray-700 max-w-5xl">
          Popular searches in {NAME}:{" "}
          <em>remove popcorn ceiling Headon Forest</em>,{" "}
          <em>smooth ceilings Burlington</em>,<em> Level 5 skim</em>,{" "}
          <em>dust-controlled popcorn removal</em>,{" "}
          <em>pot light ceiling patches</em>.
        </p>
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
            q: "How long does a typical room take?",
            a: "1–2 days for bedrooms; bigger/painted ceilings or Level 5 finishing can add time.",
          },
          {
            q: "Can you work around furniture?",
            a: "Cleared rooms are best, but we can protect and work around when needed.",
          },
          {
            q: "Insurance & warranty?",
            a: "WSIB + liability insured. Written workmanship warranty provided.",
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
