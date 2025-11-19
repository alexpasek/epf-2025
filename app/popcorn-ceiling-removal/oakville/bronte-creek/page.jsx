import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Bronte Creek";
const SLUG = "bronte-creek";
const CITY_BASE = "/popcorn-ceiling-removal/oakville";
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
  title: `Popcorn Ceiling Removal — ${NAME}, Oakville | Level 5 Skim + HEPA Dust Control`,
  description: `House-friendly popcorn/stipple ceiling removal in ${NAME}: sealed rooms, HEPA sanding, Level 5 skim, stain-block priming, and paint-ready finish.`,
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Oakville`,
    description:
      "Clean workflow for lived-in homes. Level 5 skim-coat, HEPA sanding, stain-block primer, paint-ready ceilings.",
    url: `${CITY_BASE}/${SLUG}/`,
    type: "article",
  },
  robots: { index: true, follow: true },
  keywords: [
    "popcorn ceiling removal Bronte Creek",
    "remove popcorn ceiling Oakville",
    "stucco ceiling removal Bronte Creek",
    "stipple ceiling removal Oakville",
    "ceiling smoothing Level 5 Oakville",
    "skim coat ceiling Oakville",
    "dustless popcorn removal Oakville",
    "popcorn ceiling price per square foot Oakville",
    "popcorn ceiling contractors Oakville",
    "asbestos testing popcorn ceiling Oakville",
    "pot light installation after popcorn removal Oakville",
  ],
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
          "Ceiling Smoothing & Resurfacing",
          "Level 5 Skim Coat",
          "Ceiling Painting",
        ],
        areaServed: `${NAME}, Oakville`,
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
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you work around busy family schedules?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We seal rooms, protect corridors, use HEPA-connected sanding, and tidy daily so the rest of the home stays usable.",
            },
          },
          {
            "@type": "Question",
            name: "What if previous owners painted over the texture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small area. If scraping risks damage, we encapsulate and skim full-field to Level 5 for a flat, paint-ready surface.",
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
              Popcorn Ceiling Removal — {NAME}, Oakville
            </h1>
            <p className="mt-3 text-gray-700 max-w-4xl">
              Working across <strong>Dundas St W</strong>,{" "}
              <strong>Bronte Rd</strong>, and near{" "}
              <strong>Bronte Creek Provincial Park</strong>, we deliver{" "}
              <strong>smooth, bright ceilings</strong> without coating your home
              in dust. Rooms are sealed, floors and furniture protected,
              supplies/returns masked, and sanding runs on HEPA. If texture has
              heavy paint, we safely encapsulate then{" "}
              <strong>skim full-field to Level 5</strong>, prime with
              stain-blockers, and leave paint-ready or finish with two coats.
            </p>
            <p className="mt-2 text-gray-700 max-w-4xl">
              Families in {NAME} love the predictable schedule, tidy daily
              clean-ups, and straight answers on
              <em> popcorn ceiling removal cost</em>,{" "}
              <em>price per square foot</em>, and timelines for bedrooms,
              open-plan living/dining, and stair landings with raking light.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md transition"
            >
              <span className="mr-2">📞</span>(647) 923-6784
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
              "Clean, contained workflow",
              "Sealed rooms, protected corridors, HEPA sanding, and daily tidy-ups so the rest of the home stays usable.",
            ],
            [
              "Level 5 smoothness",
              "We skim full-field and check under raking light so joints don’t telegraph under pot-lights or daylight.",
            ],
            [
              "Straight pricing",
              "Clear scope, written numbers, and fair per-sq-ft ranges based on height, paint build-up, and repairs.",
            ],
            [
              "Add-ons handled",
              "Coordinate pot-lights with your electrician; we prime with stain-blockers and can paint or leave paint-ready.",
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
            Protect floors/furniture, seal doorways, mask returns/supplies (HEPA
            dust control).
          </li>
          <li>
            Test a patch; choose controlled scrape or safe encapsulation for
            heavy paint layers.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong>.
          </li>
          <li>HEPA sanding; raking-light inspections; touch-ups.</li>
          <li>Stain-block primer to unify and prevent bleed-through.</li>
          <li>Optional two coats ceiling paint—or leave paint-ready.</li>
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
              <li>Main-floor living/dining + halls</li>
              <li>Stair landings & raking-light areas</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Oakville</li>
              <li>stucco/stipple ceiling removal Oakville</li>
              <li>ceiling smoothing & resurfacing</li>
              <li>skim coat ceiling Level 5</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>price per square foot popcorn ceiling</li>
              <li>asbestos testing referral (when needed)</li>
              <li>pot light installation after removal</li>
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
                  Main Popcorn Service
                </Link>
              </li>
              <li>
                <Link className="underline" href={`${CITY_BASE}/`}>
                  Oakville Index
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
                  Cost & Timeline Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-5xl">
          In {NAME}, <strong>price per square foot</strong> depends on ceiling
          height, texture thickness, paint build-up, number of fixtures, and
          repairs (e.g., water stains). Multi-room bundles reduce mobilization
          and improve unit pricing.
        </p>
      </section>

      {/* LOCAL */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">{NAME} proximity & access</h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We plan parking and access around <strong>Dundas St W</strong>,{" "}
          <strong>Bronte Rd</strong>, and neighbourhood arterials to keep
          workflow quiet and predictable. Many homes mix older and newer
          substrates; our <strong>Level 5 skim</strong> blends everything so the
          ceiling reads flat from morning to evening light.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby links:{" "}
          <Link className="underline" href={`${CITY_BASE}/west-oak-trails/`}>
            West Oak Trails
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/palermo-west/`}>
            Palermo West
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/river-oaks/`}>
            River Oaks
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/glen-abbey/`}>
            Glen Abbey
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
            q: "Can you start soon?",
            a: "Share sizes/photos for a written quote. We’ll confirm start date options and duration by room count.",
          },
          {
            q: "Do you warranty the work?",
            a: "Yes. WSIB and liability insured with a written workmanship warranty and clear scope.",
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
            Ready for smooth ceilings in {NAME}?
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
    </div>
  );
}
