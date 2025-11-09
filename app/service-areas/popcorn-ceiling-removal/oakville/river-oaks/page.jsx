import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "River Oaks";
const SLUG = "river-oaks";
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
  title: `Popcorn Ceiling Removal — ${NAME}, Oakville | Dust-Controlled Level 5`,
  description: `Popcorn/stipple removal in ${NAME} with sealed rooms, HEPA sanding, Level 5 skim, stain-block primer and paint-ready finish.`,
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Oakville`,
    description:
      "House-friendly containment, Level 5 skim, and paint-ready ceilings that look flat under raking light.",
    url: `${CITY_BASE}/${SLUG}/`,
    type: "article",
  },
  robots: { index: true, follow: true },
  keywords: [
    "popcorn ceiling removal River Oaks",
    "remove popcorn ceiling Oakville",
    "stucco ceiling removal River Oaks",
    "stipple ceiling removal Oakville",
    "ceiling smoothing River Oaks",
    "skim coat Level 5 Oakville",
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
        areaServed: `${NAME}, Oakville`,
        serviceType: ["Ceiling Smoothing", "Level 5 Skim", "Ceiling Painting"],
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
            name: "Do you work on evenings or weekends?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We plan schedules to minimize disruption. Share timing constraints with your quote request and we’ll propose options.",
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
              Serving around <strong>Sixth Line</strong>,{" "}
              <strong>River Oaks Blvd</strong>, and{" "}
              <strong>Neyagawa Blvd</strong>, we protect floors and furniture,
              seal doorways, mask returns/supplies, and sand with HEPA so dust
              stays contained. Where texture is heavily painted, we encapsulate
              and <strong>skim full-field to Level 5</strong> so ceilings look
              flat in daylight and under pot-lights. Stain-block primer unifies
              the surface; we can finish with two coats or leave paint-ready.
            </p>
            <p className="mt-2 text-gray-700 max-w-4xl">
              Expect straight answers on <em>popcorn ceiling removal cost</em>,{" "}
              <em>price per square foot</em>, and timeline by room. Share sizes
              and photos for a fast written quote and predictable start date.
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
              "Live-in friendly",
              "Sealed rooms, protected corridors, HEPA sanding, daily tidy-ups—kids and pets stay comfortable.",
            ],
            [
              "Lighting-proof smoothness",
              "Raking-light inspections and <strong>Level 5</strong> skim stop joint shadowing and ripples.",
            ],
            [
              "Firm quotes fast",
              "Sizes + photos → written number, clear schedule, insured crew.",
            ],
            [
              "Add-ons covered",
              "Pot-lights with your electrician; we prime with stain-blockers and can paint or leave paint-ready.",
            ],
          ].map(([t, d], i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p
                className="mt-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: d }}
              />
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
            Test a patch; scrape vs safe encapsulation for painted texture.
          </li>
          <li>
            <strong>Skim full-field to Level 5</strong> for a flat surface.
          </li>
          <li>HEPA sanding; raking-light checks; micro-corrections.</li>
          <li>Stain-block primer for uniform tone and adhesion.</li>
          <li>Optional two coats ceiling paint, or paint-ready handoff.</li>
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
              <li>Main-floor living/dining + halls</li>
              <li>Kitchens and landings with heavy lighting</li>
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
                <Link className="underline" href={`${CITY_BASE}/glen-abbey/`}>
                  Glen Abbey
                </Link>
              </li>
              <li>
                <Link className="underline" href={`${CITY_BASE}/bronte-creek/`}>
                  Bronte Creek
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
          In {NAME}, <strong>per-sq-ft pricing</strong> varies by height,
          texture thickness, paint layers, fixture count, and repairs. Grouping
          rooms improves efficiency and pricing. Share sizes/photos for a firm
          written quote.
        </p>
      </section>

      {/* LOCAL */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">{NAME} proximity & access</h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          Access planned around <strong>Sixth Line</strong>,{" "}
          <strong>River Oaks Blvd</strong>, <strong>Dundas St W</strong> and
          <strong> Neyagawa Blvd</strong>. Many homes blend drywall eras; our{" "}
          <strong>Level 5 skim</strong> harmonizes substrates to avoid lines and
          ripples.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby links:{" "}
          <Link className="underline" href={`${CITY_BASE}/glen-abbey/`}>
            Glen Abbey
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/bronte-creek/`}>
            Bronte Creek
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/west-oak-trails/`}>
            West Oak Trails
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

      {/* CTA */}
      <section className="mt-10 p-6 bg-white rounded-2xl border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready to smooth ceilings in {NAME}?
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
