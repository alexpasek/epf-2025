import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Glen Abbey";
const SLUG = "glen-abbey";
const CITY_BASE = "/service-areas/popcorn-ceiling-removal/oakville";
const ALL = [
  ["downtown-oakville", "Downtown Oakville"],
  ["old-oakville", "Old Oakville"],
  ["kerr-village", "Kerr Village"],
  ["bronte", "Bronte"],
  ["bronte-creek", "Bronte Creek"],
  ["glen-abbey", "Glen Abbey"],
  ["river-oaks", "River Oaks"],
  ["west-oak-trails", "West Oak Trails"],
  ["palermo-west", "Palermo West"],
  ["clearview", "Clearview"],
  ["college-park", "College Park"],
  ["iroquois-ridge-north", "Iroquois Ridge North"],
  ["iroquois-ridge-south", "Iroquois Ridge South"],
  ["falgarwood", "Falgarwood"],
  ["uptown-core", "Uptown Core"],
];

export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Oakville | Level 5 Skim & Paint-Ready`,
  description: `${NAME} popcorn/stipple removal with sealed rooms, HEPA sanding and Level 5 skim-coat for flat, bright, paint-ready ceilings.`,
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Oakville`,
    description:
      "Containment + HEPA + Level 5 = smooth ceilings under pot-lights and daylight.",
    url: `${CITY_BASE}/${SLUG}/`,
    type: "article",
  },
  robots: { index: true, follow: true },
  keywords: [
    "popcorn ceiling removal Glen Abbey",
    "remove popcorn ceiling Oakville",
    "stucco ceiling removal Glen Abbey",
    "stipple ceiling removal Oakville",
    "ceiling smoothing Glen Abbey",
    "skim coat Level 5 Oakville",
    "dustless popcorn removal Oakville",
    "popcorn ceiling price per square foot Oakville",
    "popcorn ceiling contractors Oakville",
    "asbestos testing popcorn ceiling Oakville",
    "pot light installation after popcorn removal Oakville",
  ],
};

function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        areaServed: `${NAME}, Oakville`,
        url: `${CITY_BASE}/${SLUG}/`,
        serviceType: ["Ceiling Smoothing", "Level 5 Skim", "Ceiling Painting"],
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
            name: "Oakville",
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
    ],
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function Page() {
  const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16478129135";
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
              Popcorn Ceiling Removal — {NAME}, Oakville
            </h1>
            <p className="mt-3 text-gray-700 max-w-4xl">
              We service homes around <strong>Dorval Dr</strong>,{" "}
              <strong>Third Line</strong>, <strong>Upper Middle Rd</strong>, and
              the renowned <strong>Glen Abbey Golf Club</strong> area. Our
              process is designed for lived-in houses: full containment,
              HEPA-connected sanding, and <strong>Level 5 skim-coat</strong> so
              ceilings look flat under pot-lights, daylight, and raking light
              from large windows.
            </p>
            <p className="mt-2 text-gray-700 max-w-4xl">
              Where previous owners painted over texture or left uneven patches,
              we test and either scrape or encapsulate before skimming
              full-field. We stain-block prime to unify the surface and can
              apply two coats—or leave paint-ready.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              <span className="mr-2">📞</span>(647) 812-9135
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              Get my quote
            </a>
          </div>
        </div>

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
            alt={`${NAME} Oakville popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      {/* WHY US */}
      <section id="why-us" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Why {NAME} homeowners pick us
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            [
              "Tidy in lived-in homes",
              "Sealed rooms, protected floors and corridors, HEPA sanding, and daily tidy-ups.",
            ],
            [
              "Level 5 finishes",
              "We skim full-field, verify with raking light, and correct telegraphing joints before prime.",
            ],
            [
              "Clear pricing & schedule",
              "Written quotes, predictable start dates, and insured crew.",
            ],
            [
              "Lighting-ready",
              "Pot-light coordination available; we prime and can paint or leave paint-ready.",
            ],
          ].map(([t, d], i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-gray-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-4xl">
          <li>
            Protect & seal the work zone; mask returns/supplies (HEPA dust
            control).
          </li>
          <li>
            Test a patch; choose scrape vs safe encapsulation for painted
            texture.
          </li>
          <li>
            <strong>Level 5 skim</strong> full-field for a flat, light-proof
            surface.
          </li>
          <li>HEPA sanding; raking-light checks; micro-touch-ups.</li>
          <li>Stain-block primer for uniformity and adhesion.</li>
          <li>Optional finishing coats, or we leave paint-ready.</li>
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
              <li>Primary/children’s bedrooms</li>
              <li>Living/dining + hallways</li>
              <li>Kitchens with vents & pot-lights</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Oakville</li>
              <li>stipple/stucco ceiling removal</li>
              <li>ceiling smoothing & resurfacing</li>
              <li>Level 5 skim coat Oakville</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>price per square foot popcorn ceiling</li>
              <li>asbestos testing referral</li>
              <li>pot light installation after removal</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Helpful links</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>
                <Link className="underline" href="/services/popcorn/">
                  Main Popcorn Service
                </Link>
              </li>
              <li>
                <Link className="underline" href={`${CITY_BASE}/`}>
                  Oakville Index
                </Link>
              </li>
              <li>
                <Link className="underline" href={`${CITY_BASE}/river-oaks/`}>
                  River Oaks
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href={`${CITY_BASE}/west-oak-trails/`}
                >
                  West Oak Trails
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="/blog/popcorn-ceiling-removal-cost-timeline"
                >
                  Cost & Timeline Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-5xl">
          For {NAME}, pricing varies by ceiling height, texture thickness, paint
          build-up, fixtures, and repairs. Bundling rooms creates efficiencies
          and stronger unit pricing. Send sizes/photos for a firm written quote.
        </p>
      </section>

      {/* LOCAL */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">{NAME} proximity & access</h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          Access planned around <strong>Dorval Dr</strong>,{" "}
          <strong>Third Line</strong>, and <strong>Upper Middle Rd</strong>; we
          keep routes clean and quiet. Large windows and pot-lights common in{" "}
          {NAME} demand a <strong>Level 5</strong> finish, verified with
          raking-light inspections before primer and paint.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby links:{" "}
          <Link className="underline" href={`${CITY_BASE}/river-oaks/`}>
            River Oaks
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/west-oak-trails/`}>
            West Oak Trails
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/bronte/`}>
            Bronte
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/bronte-creek/`}>
            Bronte Creek
          </Link>
          .
        </p>
      </section>

      {/* LINKS */}
      <section id="links" className="mt-10">
        <h2 className="text-2xl font-semibold">More Oakville neighbourhoods</h2>
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
            q: "How long for a standard bedroom?",
            a: "Often 1–2 days based on repairs and whether we’re painting after prime.",
          },
          {
            q: "Are you insured?",
            a: "Yes—WSIB and liability insured with a written workmanship warranty and clear scope.",
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
            Smooth, modern ceilings in {NAME}
          </h3>
          <p className="text-gray-600">
            Photo estimate in minutes. Predictable start date.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 812-9135
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>
    </div>
  );
}
