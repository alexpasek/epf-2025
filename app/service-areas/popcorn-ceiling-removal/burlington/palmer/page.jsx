import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Palmer";
const SLUG = "palmer";
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
  description: `${NAME} ceiling texture removal: controlled scrape/encapsulate, Level 5 skim, HEPA sanding, stain-block primer & paint. Pot light patches, clear pricing, tidy crews, written warranty.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Palmer Burlington",
    "stucco / stipple ceiling removal Palmer",
    "ceiling texture removal Burlington",
    "smooth ceilings Palmer",
    "Level 5 ceiling Burlington",
    "painted popcorn removal Palmer",
    "popcorn ceiling price per square foot Burlington",
    "ceiling resurfacing Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Local Palmer team for dust-controlled popcorn removal, tight skims to smooth, HEPA sanding, primer and finish paint.",
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
            name: `How much does popcorn ceiling removal cost in ${NAME}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depends on square footage, paint layers, and repairs. Share sizes/photos for a firm written quote. Materials & HST are separate.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle painted popcorn?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—controlled dry scrape, additional skim-coats, and HEPA sanding produce a smooth, paint-ready finish.",
            },
          },
          {
            "@type": "Question",
            name: "Can you paint the ceilings too?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—primer plus two finish coats are available, or we can leave perfectly paint-ready.",
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
              {NAME} homes (between <strong>Guelph Line</strong> and{" "}
              <strong>Walker's Line</strong>, near <strong>Palmer Dr</strong>{" "}
              and <strong>Newlands Cres</strong>) often combine bulkheads, low
              bays, and vent details that highlight ceiling imperfections. Our
              approach—sealed rooms, double floor protection, HVAC masking,{" "}
              <strong>Level 5 skims</strong>, HEPA sanding, and stain-block
              primer—delivers a clean, even read under pot lights and daylight.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We coordinate pot light layout with your electrician (or refer
              one), cut locations, patch seamlessly, and paint on request. Send
              photos and rough sizes for a quick written quote; multi-room
              bundles are priced to keep per-sq-ft competitive.
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
            <h3 className="text-xl font-semibold">Clean containment</h3>
            <p className="mt-2 text-gray-700">
              Sealed rooms, wrapped cabinetry, and protected paths keep dust
              under control—great for lived-in homes.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Level 5 discipline</h3>
            <p className="mt-2 text-gray-700">
              Full-field skim, raking-light QA, and HEPA sanding ensure ceilings
              look newly built—not patched.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Pot lights, vents & bulkheads
            </h3>
            <p className="mt-2 text-gray-700">
              Cut, patch, and blend around fixtures and bulkheads common along
              Palmer Dr and Newlands Crescent layouts.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Predictable quotes</h3>
            <p className="mt-2 text-gray-700">
              Photo sizes → written number → firm start date. Materials & HST
              itemized separately.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>Room containment, HVAC masking, double floor protection.</li>
          <li>Test patch; choose scrape vs encapsulate for heavy paint.</li>
          <li>
            <strong>Skim full-field to Level 5</strong> for a flat read across
            bulkheads and long seams.
          </li>
          <li>HEPA sanding; raking-light QA & touch-ups until uniform.</li>
          <li>Stain-block primer for even colour and sheen.</li>
          <li>Optional: two finish coats premium ceiling paint.</li>
        </ol>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Where previous patches or nail pops show, we repair first so the final
          surface looks consistent in every lighting condition.
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
              <li>Living/dining rooms with pot lights</li>
              <li>Kitchen/bulkhead runs & hallways</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stucco/stipple ceiling removal Palmer</li>
              <li>Level 5 skim Burlington</li>
              <li>dustless popcorn removal HEPA</li>
              <li>ceiling resurfacing Burlington</li>
              <li>pot light patches Burlington</li>
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
          Painted texture and Level 5 finishing add scope; materials & HST are
          separate. Share sizes for a firm quote—bundle rooms to reduce
          per-sq-ft.
        </p>
      </section>

      {/* LOCAL SEO DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We frequently work around <strong>Palmer Dr</strong>,{" "}
          <strong>Newlands Cres</strong>, <strong>Fisher Ave</strong>, with
          quick access to
          <strong> Upper Middle</strong>, <strong>Guelph Line</strong> and the{" "}
          <strong>QEW</strong>. We plan parking and materials staging to keep
          your project quiet and efficient.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/headon-forest/`}>
            Headon Forest
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/mountainside/`}>
            Mountainside
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/tansley/`}>
            Tansley
          </Link>
          .
        </p>
        <p className="mt-4 text-gray-700 max-w-5xl">
          Popular searches in {NAME}: <em>remove popcorn ceiling Palmer</em>,{" "}
          <em>smooth ceilings Burlington</em>, <em>Level 5 skim</em>,
          <em> dust-controlled popcorn removal</em>, <em>pot light patching</em>
          , <em>ceiling resurfacing</em>.
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
            a: "Most bedrooms take 1–2 days; larger or painted ceilings may add time.",
          },
          {
            q: "Do you work around furniture?",
            a: "Cleared rooms are ideal; we can protect and work around items when needed.",
          },
          {
            q: "Are you insured and do you warranty the work?",
            a: "Yes—WSIB + liability insured. Written workmanship warranty included.",
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
