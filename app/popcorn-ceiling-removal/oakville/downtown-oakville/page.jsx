import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Downtown Oakville";
const SLUG = "downtown-oakville";
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
  title: `Popcorn Ceiling Removal — ${NAME} | Dust-Controlled Level 5 Finish`,
  description: `${NAME} popcorn/stipple removal: clean containment, HEPA sanding, Level 5 skim, stain-block prime and paint-ready results.`,
  alternates: {
    canonical: `/popcorn-ceiling-removal/oakville/${SLUG}/`,
  },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}`,
    description:
      "Smooth, bright ceilings without the mess. House-friendly workflow.",
    url: `/popcorn-ceiling-removal/oakville/${SLUG}/`,
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
        areaServed: `${NAME}, Oakville`,
        url: `/popcorn-ceiling-removal/oakville/${SLUG}/`,
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
            item: "/popcorn-ceiling-removal/oakville/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: NAME,
            item: `/popcorn-ceiling-removal/oakville/${SLUG}/`,
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
            <p className="mt-3 text-gray-700 max-w-3xl">
              We make textured ceilings smooth and bright—without turning your
              home upside down. Floors and furniture are protected, doorways
              sealed, vents masked and sanding is vacuum-assisted (HEPA). Where
              scraping risks damage, we safely encapsulate, then skim to{" "}
              <strong>Level 5</strong> for a flat, paint-ready result.
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
          <a href="#links" className="underline-offset-2 hover:underline">
            Neighbourhood links
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
          Why {NAME} homeowners choose us
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              House-friendly containment
            </h3>
            <p className="mt-2 text-gray-700">
              Clean entry paths, wrapped furniture, sealed rooms, masked
              returns/supplies—dust stays in the work zone.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Level 5 smoothness</h3>
            <p className="mt-2 text-gray-700">
              We test a discreet patch; if paint layers are heavy we encapsulate
              and skim full-field for a flat read under raking light.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot-lights & painting</h3>
            <p className="mt-2 text-gray-700">
              We coordinate with your electrician (or refer one). Stain-block
              prime and two coats—or leave paint-ready.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Clear quotes, tidy wrap-ups
            </h3>
            <p className="mt-2 text-gray-700">
              Share photos/sizes for a fast written number and predictable
              schedule. We leave the space livable every day.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6-step process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Protect floors & furniture, seal doorways, mask vents
            (returns/supplies).
          </li>
          <li>
            Test a small area: scrape vs safe encapsulation depending on paint
            layers.
          </li>
          <li>
            Remove texture or encapsulate, then <strong>full-field skim</strong>{" "}
            to Level 5.
          </li>
          <li>
            Vacuum-assist sanding (HEPA) for dust control and uniform surface.
          </li>
          <li>Stain-block primer; raking-light inspection and touch-ups.</li>
          <li>
            Optional: two coats ceiling paint, or leave perfectly paint-ready.
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
              <li>Main-floor living/dining + hallways</li>
              <li>Open-plan spaces and landings</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-intent needs</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>Dustless popcorn removal (HEPA)</li>
              <li>Skim coat to Level 5</li>
              <li>Ceiling resurfacing & painting</li>
              <li>Pot-light coordination</li>
              <li>Asbestos testing referral (when needed)</li>
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
                  Main popcorn service
                </Link>
              </li>
              <li>
                <Link
                  className="underline"
                  href="/popcorn-ceiling-removal/oakville/"
                >
                  Oakville index
                </Link>
              </li>
              <li>
                <Link className="underline" href="/services/interior-painting/">
                  Interior painting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LINKS TO OTHER OAKVILLE NEIGHBOURHOODS */}
      <section id="links" className="mt-10">
        <h2 className="text-2xl font-semibold">More Oakville neighbourhoods</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {ALL.filter(([s]) => s !== SLUG).map(([s, n]) => (
            <Link
              key={s}
              href={`/popcorn-ceiling-removal/oakville/${s}/`}
              className="pill"
            >
              {n}
            </Link>
          ))}
        </div>
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
    </div>
  );
}
