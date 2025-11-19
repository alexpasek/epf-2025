import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Bronte";
const SLUG = "bronte";
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
  title: `Popcorn Ceiling Removal — ${NAME}, Oakville | HEPA Dust Control + Level 5`,
  description: `${NAME} popcorn/stipple ceiling removal with sealed rooms, HEPA sanding and Level 5 skim. Smooth, bright, paint-ready ceilings with stain-block primer.`,
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Oakville`,
    description:
      "Condo- and house-friendly containment: sealed rooms, HEPA sanding, Level 5 skim-coat, stain-block primer, paint-ready finish.",
    url: `${CITY_BASE}/${SLUG}/`,
    type: "article",
  },
  robots: { index: true, follow: true },
  keywords: [
    "popcorn ceiling removal Bronte",
    "remove popcorn ceiling Bronte",
    "stucco ceiling removal Oakville",
    "stipple ceiling removal Oakville",
    "ceiling smoothing Bronte",
    "ceiling resurfacing Oakville",
    "skim coat ceiling Level 5 Oakville",
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
          "Ceiling Smoothing & Flattening",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
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
            name: "Do lake-side windows make imperfections more visible?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Bronte’s waterfront daylight shows ripples fast. We Level 5 skim and inspect under raking light so the surface reads flat before primer and paint.",
            },
          },
          {
            "@type": "Question",
            name: "Can you keep dust out of main living areas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms and routes, use HEPA-connected sanding, and tidy daily. Corridors and non-work areas remain clean and usable.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot-lights and painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—coordinate your electrician (or request a referral). We prime with stain-blockers and can paint or leave paint-ready.",
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
              Bronte’s waterfront light is beautiful—and unforgiving. To avoid
              joint shadowing and ripples, we test a patch and either scrape or
              safely encapsulate, then{" "}
              <strong>skim full-field to Level 5</strong>
              for a flat read under raking light. Rooms are sealed, returns and
              supplies are masked, and sanding is HEPA-connected so dust stays
              contained. We stain-block prime for a uniform finish and can apply
              two coats—or leave paint-ready for your painter.
            </p>
            <p className="mt-2 text-gray-700 max-w-4xl">
              We frequently service homes around <strong>Bronte Harbour</strong>
              , <strong>Marine Dr</strong>, <strong>East St</strong>,{" "}
              <strong>West St</strong>,<strong> Lakeshore Rd W</strong> and
              north toward <strong>Bronte Rd</strong>. Many ceilings mix older
              plaster with newer drywall— our approach blends substrates so the
              ceiling looks consistent from morning sun to evening downlights.
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
            data-lightbox="true"
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
              "Waterfront daylight proof",
              "We Level 5 skim and check under raking light so strong daylight near the harbour doesn’t show seams or ripples.",
            ],
            [
              "Clean, livable workflow",
              "Sealed rooms, protected corridors, HEPA sanding and daily tidy-ups. Families and pets stay comfortable.",
            ],
            [
              "Predictable schedule",
              "Send sizes and photos for a firm quote, pick a start date, and we arrive with a clear scope and insured crew.",
            ],
            [
              "Add-ons handled",
              "Coordinate pot-lights and ceiling paint. We stain-block prime and can apply finish coats or leave paint-ready.",
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
            Protect floors & furniture, seal doorways, mask returns/supplies
            (HEPA dust control).
          </li>
          <li>
            Test a discreet patch; choose controlled scrape or safe
            encapsulation for heavy paint.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> for a flat read.
          </li>
          <li>HEPA sanding; raking-light inspections; touch-ups.</li>
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
              <li>Main-floor living/dining + halls</li>
              <li>Kitchens with pot-lights and vents</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Keywords we match</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>popcorn ceiling removal {NAME.toLowerCase()}</li>
              <li>remove popcorn ceiling Oakville</li>
              <li>stucco / stipple ceiling removal Oakville</li>
              <li>ceiling smoothing & resurfacing</li>
              <li>skim coat ceiling Level 5</li>
              <li>dustless popcorn removal (HEPA)</li>
              <li>popcorn ceiling price per square foot Oakville</li>
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
          height, texture thickness, paint accumulation, fixture count and
          repairs (e.g., water staining near skylights or harbour humidity
          exposure). Multi-area projects reduce mobilization and improve unit
          pricing. Share sizes/photos for a firm written number.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">{NAME} proximity & access</h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We plan parking and elevator/load access around{" "}
          <strong>Bronte Harbour</strong>, <strong>Marine Dr</strong>, and
          <strong> Lakeshore Rd W</strong> to keep the workflow efficient and
          quiet. Waterfront daylight can highlight even small surface
          imperfections; our <strong>Level 5 skim</strong> and raking-light
          checks are designed to handle this.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby areas we also cover:{" "}
          <Link className="underline" href={`${CITY_BASE}/bronte-creek/`}>
            Bronte Creek
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/west-oak-trails/`}>
            West Oak Trails
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/glen-abbey/`}>
            Glen Abbey
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/old-oakville/`}>
            Old Oakville
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/kerr-village/`}>
            Kerr Village
          </Link>
          .
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Searches we fulfil in {NAME}: <em>popcorn ceiling removal Bronte</em>,{" "}
          <em>remove popcorn ceiling Oakville</em>,
          <em> stucco/stipple ceiling removal</em>, <em>ceiling smoothing</em>,{" "}
          <em>skim coat Level 5</em>,<em> dustless popcorn removal (HEPA)</em>,{" "}
          <em>asbestos testing referral for popcorn ceiling</em>, and
          <em> popcorn ceiling price per square foot</em>.
        </p>
      </section>

      {/* LINKS TO OTHER OAKVILLE NEIGHBOURHOODS */}
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
            q: "How long does a standard room take?",
            a: "Often 1–2 days depending on repairs and whether we’re painting after prime. Larger open areas vary—send sizes and we’ll confirm.",
          },
          {
            q: "What about odours and ventilation?",
            a: "We select low-odour options where possible and ventilate appropriately. For stain-blocking we’ll discuss the best product for your situation.",
          },
          {
            q: "Is your work insured and warrantied?",
            a: "Yes—WSIB and liability insured. We include a written workmanship warranty and clear scope/schedule.",
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
