import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Tansley";
const SLUG = "tansley";
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
  description: `${NAME} stucco/popcorn removal around Tansley Woods: sealed rooms, HEPA sanding, Level 5 skim, primer & paint. Ideal for townhomes, condos and open plans along Walker’s Line & Upper Middle.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Tansley Burlington",
    "stucco/stipple ceiling removal Tansley",
    "condo popcorn ceiling Burlington",
    "Level 5 skim Burlington",
    "dustless popcorn removal HEPA",
    "pot light patching Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Containment, Level 5 skim, HEPA sanding, primer & finish paint. Pot light coordination. Clean, modern ceilings for Tansley Woods area.",
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
            name: "Can you do condos and townhomes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—subject to building rules for hours, elevator pads and ventilation. We protect common areas and use HEPA sanding to control dust.",
            },
          },
          {
            "@type": "Question",
            name: "Is painted popcorn harder to remove?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We test a patch. If scraping risks damage, we safely encapsulate, then skim to Level 5 and prime for a uniform, paint-ready finish.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot lights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can coordinate your electrician (or refer). We cut, patch and blend around new fixtures.",
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
              Around <strong>Tansley Woods Community Centre</strong>,{" "}
              <strong>Walker’s Line</strong> and{" "}
              <strong>Upper Middle Rd</strong>, many homes and condos still
              carry stipple ceilings. We modernize them with minimal disruption:
              sealed rooms, corridor protection, controlled scrape vs
              encapsulation (based on paint build-up),
              <strong> Level 5 full-field skim</strong>, HEPA sanding,
              stain-block primer, and optional finish paint. The result is a
              bright, flat ceiling that makes compact rooms feel larger and
              lifts the look of open plans.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We respect building rules (hours, elevator pads, loading docks)
              and coordinate logistics so your project moves quickly. Share
              sizes and photos for a fast written quote; we’ll schedule,
              coordinate pot lights, patch seamlessly and keep common areas
              spotless.
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
            <h3 className="text-xl font-semibold">
              Townhome & condo specialists
            </h3>
            <p className="mt-2 text-gray-700">
              Tight logistics, parking windows and elevator bookings handled. We
              protect common areas and work self-contained with HEPA sanding.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Level 5 finish for small rooms
            </h3>
            <p className="mt-2 text-gray-700">
              In compact bedrooms and dens, even minor ripples show. Our
              full-field skim and raking-light QA make spaces read crisp and
              modern.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot lights & vents</h3>
            <p className="mt-2 text-gray-700">
              We coordinate with your electrician, cut openings, then patch/skim
              so the final finish is seamless—no rings or flash lines.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Clear pricing & quick scheduling
            </h3>
            <p className="mt-2 text-gray-700">
              Share sizes/photos → written quote → firm date. We arrive with the
              right crew for a tidy, on-time finish.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>Room containment; protect hallways/elevators if applicable.</li>
          <li>Test patch to choose scrape vs encapsulate for heavy paint.</li>
          <li>
            <strong>Full-field Level 5 skim</strong> with extra passes at seams,
            bulkheads and around vents.
          </li>
          <li>HEPA sanding; raking-light inspections and micro touch-ups.</li>
          <li>
            Stain-block primer to unify surface; optional two finish coats.
          </li>
          <li>Final tidy, walkthrough, and aftercare notes.</li>
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
              <li>Hallways + open kitchen/living</li>
              <li>Condo living rooms with bulkheads</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>condo popcorn removal Burlington</li>
              <li>Level 5 skim Burlington</li>
              <li>dustless popcorn removal</li>
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
                  href="/blog/popcorn-ceiling-removal-cost-timeline/"
                >
                  Popcorn Removal: Cost & Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-4xl">
          Condo rules, height and paint build-up affect scope. Materials & HST
          are separate. Share sizes for a firm written quote; we often bundle
          rooms to keep per-sq-ft efficient.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We’re in {NAME} frequently—<strong>Tansley Woods</strong>,{" "}
          <strong>North Service Rd</strong>, and <strong>Walker's Line</strong>{" "}
          corridors—with fast access to QEW/403. We plan parking, elevator pads
          and loading times so your building stays happy and your project
          finishes on schedule.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/palmer/`}>
            Palmer
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/headon-forest/`}>
            Headon Forest
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/millcroft/`}>
            Millcroft
          </Link>
          .
        </p>
      </section>

      {/* PREP */}
      <section id="prep" className="mt-10">
        <h2 className="text-2xl font-semibold">Prep & expectations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>
            We provide protection for floors, corridors and elevators (where
            needed).
          </li>
          <li>
            We test a small area first; heavy paint often means encapsulate +
            skim to Level 5.
          </li>
          <li>
            Low-odour products; we ventilate appropriately and review options
            for stain-blocking primers.
          </li>
          <li>
            Written scope, insured crews, and workmanship warranty included.
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
            q: "How long for a room?",
            a: "Usually 1–2 days; condos with elevator bookings and painted texture may add time.",
          },
          {
            q: "Do you repair cracks and nail pops?",
            a: "Yes—repairs are integrated during skim and sanding before primer.",
          },
          {
            q: "Can you paint too?",
            a: "Yes—primer + 2 finish coats available, or we can leave perfectly paint-ready.",
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
