import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Shoreacres";
const SLUG = "shoreacres";
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
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | HEPA Dust Control & Level 5 Finish`,
  description: `${NAME} (near Paletta Lakefront Park & Lakeshore Rd) popcorn/stucco/stipple ceiling removal. Sealed rooms, HEPA sanding, full-field Level 5 skim, stain-block primer & optional finish paint. Pot light coordination, tidy crews, written warranty.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Shoreacres",
    "stucco ceiling removal Shoreacres Burlington",
    "stipple ceiling removal Shoreacres",
    "ceiling texture removal Burlington south",
    "Level 5 skim Burlington Shoreacres",
    "dustless popcorn removal HEPA Burlington",
    "pot light installation after popcorn removal Burlington",
    "popcorn ceiling price per square foot Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "House-friendly workflow for Shoreacres: sealed rooms, HEPA sanding, Level 5 skim, stain-block primer, paint-ready or fully painted finish.",
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
              text: "Price varies by square footage, ceiling height, paint build-up on texture, fixture count and repair intensity. Bedrooms generally land in a competitive per-sq-ft range; open main floors and painted stipple increase scope. Share photos and sizes for a firm written number.",
            },
          },
          {
            "@type": "Question",
            name: "How do you keep the house clean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rooms are sealed, returns/supplies are masked, floors and paths are protected, and all sanding is HEPA-connected. We tidy daily so non-work areas remain usable.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot lights and painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We coordinate with your electrician (or refer), cut openings, patch seamlessly, stain-block prime and can apply finish coats—or leave paint-ready.",
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
              In {NAME}, sunlight off the lake and long sightlines along{" "}
              <strong>Lakeshore Rd</strong> make ceiling imperfections obvious.
              Our Shoreacres workflow is built for these conditions: sealed
              rooms, double floor protection, corridor runners, HVAC masking,
              controlled scrape (or safe encapsulation when paint layers are
              heavy), <strong>full-field Level 5 skim</strong>, HEPA sanding,
              and stain-block primer. The outcome is a smooth, bright ceiling
              that reads flat under pot lights, bay windows and raking daylight.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We’re local to south Burlington—near{" "}
              <strong>Paletta Lakefront Park & Mansion</strong>,{" "}
              <strong>Walker's Line</strong>, and <strong>Burloak</strong>—so
              scheduling is easy. Send rough sizes and photos for a fast written
              number; we’ll lock a start date, coordinate pot-light layout with
              your electrician (or refer), cut openings cleanly, patch and
              blend, then leave paint-ready or apply two finish coats. Insured
              crews, predictable timelines, written warranty.
            </p>
          </div>

          {/* CTAs */}
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
            <h3 className="text-xl font-semibold">Built for lake-light</h3>
            <p className="mt-2 text-gray-700">
              South-facing rooms near the water exaggerate shadows. Our Level 5
              skim and raking-light QA remove “ghosting” so ceilings look newly
              built.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              House-friendly containment
            </h3>
            <p className="mt-2 text-gray-700">
              Sealed rooms, wrapped cabinetry, protected stairways and
              corridors. HEPA sanding keeps dust in the work zone; daily tidy
              wrap-ups.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot lights & bulkheads</h3>
            <p className="mt-2 text-gray-700">
              We coordinate layout, cut openings, patch and blend around
              bulkheads common along Lakeshore-side additions—no rings or flash
              lines.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Predictable quotes</h3>
            <p className="mt-2 text-gray-700">
              Photo sizes → written number → firm start date. Materials & HST
              itemized separately. Warranty included.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Room containment, floor/corridor protection, HVAC masking (HEPA dust
            control).
          </li>
          <li>
            Test patch: controlled scrape vs safe encapsulation for painted
            texture.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> for a flat read.
          </li>
          <li>HEPA sanding; raking-light inspections and micro touch-ups.</li>
          <li>Stain-block primer to unify colour & sheen.</li>
          <li>
            Optional: two coats premium ceiling paint; final tidy & walkthrough.
          </li>
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
              <li>Corridors, landings & bay windows on Lakeshore</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington</li>
              <li>stucco/stipple ceiling removal south Burlington</li>
              <li>Level 5 skim Burlington</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>pot light installation after popcorn removal</li>
              <li>popcorn ceiling price per square foot Burlington</li>
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
          What affects price in {NAME}: ceiling height, paint accumulation on
          texture, fixture count (vents, detectors), previous patches, water
          stains, and whether you’d like us to paint after prime. Multi-room
          bundles keep per-sq-ft competitive. Materials & HST are separate line
          items; share sizes for a firm written quote.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We regularly serve homes off <strong>Lakeshore Rd</strong>,{" "}
          <strong>Walker's Line</strong>, and the <strong>Paletta Park</strong>{" "}
          corridor. Older plaster rooms meet newer additions here—our Level 5
          skim blends substrates so ceilings read as one plane under strong
          daylight and pot lights. We plan parking and material staging to keep
          the workflow quiet and efficient.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/roseland/`}>
            Roseland
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/elizabeth-gardens/`}>
            Elizabeth Gardens
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
            We handle heavy protection; please clear small items from work
            rooms.
          </li>
          <li>
            We test a discreet spot first; if scraping risks damage, we
            encapsulate and skim to Level 5.
          </li>
          <li>
            Low-odour products and ventilation plans keep living areas
            comfortable.
          </li>
          <li>Written scope, insurance and workmanship warranty included.</li>
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
            q: "Timeline for a typical room?",
            a: "Often 1–2 days; painted texture and large open areas may add time, especially with Level 5 finishing.",
          },
          {
            q: "Can you work around furniture?",
            a: "Cleared rooms are best; we can protect and work around pieces when needed.",
          },
          {
            q: "Do you warranty the work?",
            a: "Yes—WSIB + liability insured and a written workmanship warranty provided.",
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
