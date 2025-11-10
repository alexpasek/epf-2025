import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Kerr Village";
const SLUG = "kerr-village";
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
  description: `${NAME} popcorn/stipple/stucco ceiling removal with sealed rooms, HEPA sanding and Level 5 skim. Smooth, bright ceilings with stain-block primer and tidy crews.`,
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Oakville`,
    description:
      "House-friendly workflow: sealed rooms, HEPA sanding, Level 5 skim-coat, stain-block primer, paint-ready finish.",
    url: `${CITY_BASE}/${SLUG}/`,
    type: "article",
  },
  robots: { index: true, follow: true },
  keywords: [
    "popcorn ceiling removal Kerr Village",
    "remove popcorn ceiling Kerr Village",
    "stucco ceiling removal Oakville",
    "stipple ceiling removal Oakville",
    "ceiling smoothing Kerr Village",
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
            name: "Is the process dustless in lived-in homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal rooms, protect floors and furniture, mask returns/supplies, and sand with HEPA-connected tools. Daily tidy-ups keep non-work areas usable.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle heavy paint layers and past patches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small patch first. If scraping risks damage, we safely encapsulate then skim full-field to Level 5, prime with stain-blocker and leave paint-ready.",
            },
          },
          {
            "@type": "Question",
            name: "What affects price per square foot?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Texture thickness, paint accumulation, ceiling height, fixtures, repairs, and whether we’re painting after prime. Send sizes/photos for a firm written quote.",
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
              Get <strong>smooth, bright ceilings</strong> without turning your
              house upside down. We protect floors and furniture, seal doorways,
              mask returns and supplies, and use HEPA-connected sanding for a
              clean, house-friendly workflow. Where paint layers are heavy or
              past patches are visible, we safely encapsulate and{" "}
              <strong>skim full-field to Level 5</strong> so the ceiling reads
              flat under raking light. We stain-block prime for a uniform
              finish, then paint—or leave perfectly paint-ready.
            </p>
            <p className="mt-2 text-gray-700 max-w-4xl">
              We work efficiently across <strong>Kerr St</strong>,{" "}
              <strong>Rebecca St</strong>, <strong>Speers Rd</strong>,
              <strong> Trafalgar Rd</strong>, and the residential side streets
              south toward the lake. Older additions and newer renovations often
              meet in the same room here; our Level 5 approach blends substrates
              so you don’t see joint shadowing in daylight or pot lights.
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
              "House-friendly containment",
              "Clean entry paths, protected floors and furniture, sealed doorways, and corridor protection. We keep dust in the work zone and tidy daily so you can live around the project.",
            ],
            [
              "Level 5 smoothness",
              "We skim full-field and inspect under raking light from windows and recessed lighting so joints don’t telegraph. Great for both heritage homes and modern renovations.",
            ],
            [
              "Fast quotes & schedule",
              "Share rough sizes and a few photos for a firm written number. We set a clear start date and arrive with a predictable plan and insured crew.",
            ],
            [
              "Pot-lights & painting",
              "Coordinate with your electrician (or ask for a referral). We stain-block prime and can apply finish coats—or leave paint-ready to match your painter.",
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
            Test a discreet patch: controlled scrape vs safe encapsulation for
            heavy paint layers.
          </li>
          <li>
            Remove texture or encapsulate;{" "}
            <strong>skim full-field to Level 5</strong> for a flat read.
          </li>
          <li>HEPA-connected sanding; raking-light checks and touch-ups.</li>
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
              <li>Open-plan areas and landings</li>
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
                  href="/blog/popcorn-ceiling-removal-cost-timeline"
                >
                  Cost & Timeline Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-5xl">
          In {NAME}, <strong>price per square foot</strong> depends on ceiling
          height, texture thickness, accumulated paint, fixtures (vents,
          detectors), and repairs. Multi-room groupings reduce mobilization time
          and improve unit pricing. Send sizes and photos for a fast, written
          number.
        </p>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">{NAME} proximity & access</h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We regularly service streets off <strong>Kerr St</strong> between{" "}
          <strong>Speers Rd</strong> and <strong>Lakeshore Rd W</strong>, plus
          side streets toward the lake and the <strong>Old Oakville</strong>{" "}
          border. Parking and access are planned ahead to keep workflow
          efficient and the house quiet. Where older plaster meets newer
          drywall, our <strong>Level 5 skim</strong>
          blends substrates so you don’t see seams in strong daylight.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby areas we also cover:{" "}
          <Link className="underline" href={`${CITY_BASE}/old-oakville/`}>
            Old Oakville
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/downtown-oakville/`}>
            Downtown Oakville
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/bronte/`}>
            Bronte
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/clearview/`}>
            Clearview
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/college-park/`}>
            College Park
          </Link>
          .
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Popular searches we fulfill in {NAME}:{" "}
          <em>popcorn ceiling removal Oakville</em>,{" "}
          <em>remove popcorn ceiling Kerr Village</em>,
          <em> stipple/stucco ceiling removal</em>, <em>ceiling smoothing</em>,{" "}
          <em>ceiling resurfacing</em>, <em>skim coat Level 5</em>,
          <em> dustless popcorn removal</em>,{" "}
          <em>asbestos testing referral for popcorn ceiling</em> (when
          appropriate), and
          <em> price per square foot for popcorn ceiling removal</em>.
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
            q: "How long does a typical room take?",
            a: "A standard bedroom is often 1–2 days depending on repairs and whether we’re painting after prime. Multi-room groupings improve efficiency.",
          },
          {
            q: "What paints/primers do you use?",
            a: "We select stain-blockers and low-odour finishes appropriate to the substrate and prior coatings. We’ll discuss options to meet your goals.",
          },
          {
            q: "Do you warranty your work?",
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
