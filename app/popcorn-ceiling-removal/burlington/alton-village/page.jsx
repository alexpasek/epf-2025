import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Alton Village";
const SLUG = "alton-village";
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
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Newer-Home Level 5 Finish`,
  description: `${NAME} popcorn/stipple removal near Dundas, Tim Dobbie Dr & Appleby/Walker's Line. Sealed rooms, HEPA sanding, full-field Level 5 skim, stain-block primer & optional paint. Ideal for open-concept plans, two-storey foyers and pot-light upgrades.`,
  keywords: [
    "popcorn ceiling removal Alton Village",
    "remove popcorn ceiling Alton Burlington",
    "stipple ceiling removal Alton Village",
    "Level 5 skim Alton Village Burlington",
    "smooth ceilings for newer homes Burlington",
    "two-storey foyer popcorn removal Burlington",
    "dustless popcorn removal HEPA Burlington",
    "pot light patch Alton Village",
    "popcorn ceiling price per square foot Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Newer-home specialists: containment, Level 5 skim, HEPA sanding, primer & paint. Pot light coordination for open concepts and tall foyers in Alton Village.",
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
            name: "Do newer Alton Village homes still need Level 5?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—open concepts and two-storey foyers with lots of pot lights demand a flat, uniform read. We skim full-field to Level 5 so long runs look seamless.",
            },
          },
          {
            "@type": "Question",
            name: "Is it dusty or disruptive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms, protect floors/stairs, mask HVAC and sand with HEPA-connected tools. Daily tidy means main areas stay usable.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot lights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We cut openings, patch and blend, then prime and can apply finish coats.",
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
              <strong>{NAME}</strong> (north Burlington) is full of newer builds
              around <strong>Dundas St (Hwy 5)</strong>,
              <strong> Tim Dobbie Dr</strong>,{" "}
              <strong>Haber Recreation Centre</strong> &{" "}
              <strong>Norton Community Park</strong>. These homes feature{" "}
              <em>open-concept main floors</em>, <em>pot-light grids</em> and{" "}
              <em>two-storey foyers</em>—lighting that highlights even tiny
              ripples. We remove or encapsulate texture, then{" "}
              <strong>skim full-field to Level 5</strong> so long runs read
              perfectly flat under raking light. Rooms are sealed, floors/stairs
              protected, returns/supplies masked and sanding is HEPA-connected
              for a clean, family-friendly workflow.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              We plan access from <strong>Appleby Line</strong> &{" "}
              <strong>Walker's Line</strong> with quick links to the{" "}
              <strong>407</strong> & <strong>403/QEW</strong> to keep
              start/finish times predictable. Share sizes and photos for a firm
              written number; we’ll schedule, coordinate pot-light layouts with
              your electrician (or refer), cut/patch cleanly, stain-block prime
              and, if you like, apply two finish coats. Insured crews. Written
              warranty.
            </p>
          </div>

          {/* Blue CTAs */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md"
            >
              <span className="mr-2">📞</span>(647) 923-6784
            </a>
            <a
              href="/quote/"
              aria-label="Open quote form"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md"
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
              Long sightlines and pot-light grids reveal everything. Our Level 5
              skim + raking-light QA removes ghosting and wave lines.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Two-storey foyers & bulkheads
            </h3>
            <p className="mt-2 text-gray-700">
              We stage ladders/scaffolds safely, blend bulkheads and tray
              details so tall entries look like new builds—minus the texture.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Pot lights, vents & speakers
            </h3>
            <p className="mt-2 text-gray-700">
              We cut, patch and blend around fixtures so there are no rings or
              flash lines after paint.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Quote clarity</h3>
            <p className="mt-2 text-gray-700">
              Sizes/photos → written number → firm date. Materials & HST
              itemized; insured crews; warranty included.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Room containment; protect floors/stairs; mask HVAC (HEPA dust
            control).
          </li>
          <li>
            Test patch to choose scrape vs encapsulate for painted texture.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> with extra passes at
            seams, tray edges and bulkheads.
          </li>
          <li>HEPA sanding; raking-light inspections + micro touch-ups.</li>
          <li>
            Stain-block primer for a uniform, paint-ready surface; low-odour
            options.
          </li>
          <li>Optional: two finish coats; final tidy & walkthrough.</li>
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
              <li>Main-floor open concepts + kitchen bulkheads</li>
              <li>Two-storey foyer smoothing with pot lights</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent keywords</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Burlington north</li>
              <li>stipple ceiling removal Alton Village</li>
              <li>Level 5 skim Burlington</li>
              <li>dustless popcorn removal (HEPA)</li>
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
          Alton factors: ceiling height, paint build-up, pot-light/vent counts,
          tray ceilings and chosen finish (paint-ready vs painted). Multi-room
          bundles reduce per-sq-ft. Materials & HST separate. Share sizes for a
          firm written quote.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Local details for {NAME} (proximity & access)
        </h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We’re frequently near <strong>Haber Rec Centre</strong>,{" "}
          <strong>Norton Community Park</strong>,{" "}
          <strong>Appleby/Walker’s Line</strong> and <strong>Dundas</strong>.
          Quick 407/403 access helps us start on time and finish cleanly, with
          quiet staging that respects family schedules and school routines.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby:{" "}
          <Link className="underline" href={`${CITY_BASE}/millcroft/`}>
            Millcroft
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

      {/* PREP */}
      <section id="prep" className="mt-10">
        <h2 className="text-2xl font-semibold">Prep & expectations</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>
            Please clear small items; we handle heavy protection and safe
            ladder/scaffold staging.
          </li>
          <li>
            We test a patch first; heavy paint typically means encapsulate +
            Level 5 skim for best results.
          </li>
          <li>Low-odour products; ventilation and aftercare tips provided.</li>
          <li>
            Insurance and written workmanship warranty included with your quote.
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
            q: "Timeline for a bedroom?",
            a: "Typically 1–2 days. Two-storey foyers and painted texture add time—especially with Level 5 finishing.",
          },
          {
            q: "Do you repair nail pops & joint lines?",
            a: "Yes—repairs are integrated into the skim and sanding so the surface reads as one plane before primer.",
          },
          {
            q: "Paint options?",
            a: "We can leave paint-ready or provide primer + two coats premium ceiling paint matched to your home.",
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
