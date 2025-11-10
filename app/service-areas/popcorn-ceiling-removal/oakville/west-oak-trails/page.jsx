import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "West Oak Trails";
const SLUG = "west-oak-trails";
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
    `popcorn ceiling removal ${NAME}`,
    "remove popcorn ceiling Oakville",
    `stucco ceiling removal ${NAME}`,
    "stipple ceiling removal Oakville",
    `ceiling smoothing ${NAME}`,
    "skim coat ceiling Level 5 Oakville",
    "dustless popcorn removal Oakville",
    "popcorn ceiling price per square foot Oakville",
    "popcorn ceiling contractors Oakville",
    "asbestos testing popcorn ceiling Oakville",
    "pot light installation after popcorn removal Oakville",
    "ceiling painting after removal Oakville",
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
              We work across <strong>Dundas St W</strong>,{" "}
              <strong>Postmaster Dr</strong>, and{" "}
              <strong>Westoak Trails Blvd</strong> delivering{" "}
              <strong>smooth, bright ceilings</strong> without coating your home
              in dust. Rooms are sealed, floors and furniture protected,
              supplies/returns masked, and sanding runs on HEPA. If texture has
              heavy paint, we safely encapsulate then{" "}
              <strong>skim full-field to Level 5</strong>, prime with
              stain-blockers, and leave paint-ready or finish with two coats.
            </p>
            <p className="mt-2 text-gray-700 max-w-4xl">
              Homeowners in {NAME} appreciate predictable schedules, tidy daily
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
              "Sealed rooms, protected corridors, HEPA sanding, and daily tidy-ups keep the rest of the home usable.",
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
            Protect floors/furniture; seal doorways; mask returns/supplies (HEPA
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
              <li>
                popcorn ceiling removal{" "}
                {NAME.toLowerCase ? NAME.toLowerCase() : NAME}
              </li>
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
                <Link
                  className="underline"
                  href="/services/drywall-installation/"
                >
                  Drywall & Skim-Coat
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
                  href="/blog/popcorn-ceiling-removal-cost-timeline"
                >
                  Cost & Timeline Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700 max-w-5xl">
          In {NAME}, <strong>per-sq-ft pricing</strong> depends on ceiling
          height, texture thickness, paint build-up, fixture count, and repairs
          (e.g., water stains). Multi-room bundles reduce mobilization and
          improve unit pricing.
        </p>
      </section>

      {/* LOCAL */}
      <section id="local" className="mt-10">
        <h2 className="text-2xl font-semibold">{NAME} proximity & access</h2>
        <p className="mt-3 text-gray-700 max-w-5xl">
          We plan parking and access to keep workflow quiet and predictable.
          Large windows and pot-lights demand a <strong>Level 5</strong> finish
          verified with raking-light inspections before primer and paint.
        </p>
        <p className="mt-2 text-gray-700 max-w-5xl">
          Nearby links:{" "}
          <Link className="underline" href={`${CITY_BASE}/glen-abbey/`}>
            Glen Abbey
          </Link>
          ,{" "}
          <Link className="underline" href={`${CITY_BASE}/river-oaks/`}>
            River Oaks
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

      {/* EXPANDED SEO — COLLAPSIBLE DETAILS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          Deep-dive info for homeowners in {NAME}
        </h2>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Dust Control & HEPA — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling resurfacing, stucco ceiling
            removal, dustless popcorn ceiling removal, West Oak Trails popcorn
            removal, HEPA sanding, price per square foot. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Level 5 Skim — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling resurfacing, HEPA sanding,
            ceiling texture removal, West Oak Trails popcorn removal, ceiling
            painting after removal, stucco ceiling removal. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Raking Light — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: popcorn ceiling contractors,
            stain-block primer, price per square foot, ceiling texture removal,
            popcorn ceiling removal, ceiling smoothing. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Pot Lights & Electrical — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: stain-block primer, remove popcorn
            ceiling, stipple ceiling removal, ceiling texture removal, asbestos
            testing popcorn ceiling, West Oak Trails popcorn removal. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Primer & Paint — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: skim coat ceiling, Oakville popcorn
            removal, asbestos testing popcorn ceiling, pot light installation
            after popcorn removal, West Oak Trails popcorn removal, dustless
            popcorn ceiling removal. For clear numbers, share sizes/photos of
            bedrooms, living/dining, hallways, and stair landings. We’ll provide
            a written quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Scheduling & Access — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: HEPA sanding, stain-block primer,
            popcorn ceiling contractors, stipple ceiling removal, ceiling
            painting after removal, Level 5 finish. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Condos vs Houses — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: dustless popcorn ceiling removal,
            stipple ceiling removal, stucco ceiling removal, pot light
            installation after popcorn removal, HEPA sanding, Level 5 finish.
            For clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Ceiling Repair — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: remove popcorn ceiling, ceiling
            flattening, price per square foot, stipple ceiling removal, ceiling
            resurfacing, stucco ceiling removal. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Water Stains — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: popcorn ceiling contractors,
            stain-block primer, ceiling texture removal, price per square foot,
            ceiling smoothing, asbestos testing popcorn ceiling. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Hairline Cracks — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: stipple ceiling removal, ceiling
            flattening, popcorn ceiling removal, ceiling texture removal, skim
            coat ceiling, popcorn ceiling contractors. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Asbestos Testing — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: asbestos testing popcorn ceiling, pot
            light installation after popcorn removal, stipple ceiling removal,
            Oakville popcorn removal, stain-block primer, dustless popcorn
            ceiling removal. For clear numbers, share sizes/photos of bedrooms,
            living/dining, hallways, and stair landings. We’ll provide a written
            quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Price Per Square Foot — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: West Oak Trails popcorn removal,
            popcorn ceiling removal, ceiling resurfacing, HEPA sanding, popcorn
            ceiling contractors, ceiling texture removal. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Aftercare & Cleaning — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: stain-block primer, ceiling texture
            removal, skim coat ceiling, remove popcorn ceiling, price per square
            foot, Level 5 finish. For clear numbers, share sizes/photos of
            bedrooms, living/dining, hallways, and stair landings. We’ll provide
            a written quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Warranty & Insurance — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling resurfacing, pot light
            installation after popcorn removal, stucco ceiling removal,
            stain-block primer, ceiling painting after removal, stipple ceiling
            removal. For clear numbers, share sizes/photos of bedrooms,
            living/dining, hallways, and stair landings. We’ll provide a written
            quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Ceiling Smoothing — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling resurfacing, ceiling texture
            removal, West Oak Trails popcorn removal, Level 5 finish, ceiling
            flattening, Oakville popcorn removal. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Ceiling Resurfacing — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: price per square foot, stipple
            ceiling removal, ceiling flattening, pot light installation after
            popcorn removal, asbestos testing popcorn ceiling, ceiling painting
            after removal. For clear numbers, share sizes/photos of bedrooms,
            living/dining, hallways, and stair landings. We’ll provide a written
            quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Texture Encapsulation — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: asbestos testing popcorn ceiling,
            stain-block primer, ceiling texture removal, Level 5 finish, West
            Oak Trails popcorn removal, remove popcorn ceiling. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Painted Texture — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling resurfacing, ceiling
            flattening, West Oak Trails popcorn removal, skim coat ceiling,
            ceiling texture removal, pot light installation after popcorn
            removal. For clear numbers, share sizes/photos of bedrooms,
            living/dining, hallways, and stair landings. We’ll provide a written
            quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Stair Landings — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: asbestos testing popcorn ceiling, pot
            light installation after popcorn removal, ceiling texture removal,
            price per square foot, stucco ceiling removal, ceiling flattening.
            For clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Open Concept — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling texture removal, stipple
            ceiling removal, stucco ceiling removal, ceiling resurfacing, price
            per square foot, Oakville popcorn removal. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Bedrooms — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling texture removal, stucco
            ceiling removal, Level 5 finish, asbestos testing popcorn ceiling,
            ceiling resurfacing, ceiling painting after removal. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Living & Dining — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: dustless popcorn ceiling removal,
            popcorn ceiling removal, stucco ceiling removal, Level 5 finish,
            HEPA sanding, ceiling painting after removal. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Kitchens — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling smoothing, pot light
            installation after popcorn removal, Oakville popcorn removal,
            popcorn ceiling removal, stain-block primer, HEPA sanding. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Hallways — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: price per square foot, stain-block
            primer, asbestos testing popcorn ceiling, ceiling texture removal,
            ceiling smoothing, Level 5 finish. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Timeline by Room — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: remove popcorn ceiling, ceiling
            texture removal, HEPA sanding, dustless popcorn ceiling removal,
            ceiling painting after removal, Level 5 finish. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Multi-Room Bundles — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: skim coat ceiling, pot light
            installation after popcorn removal, price per square foot, Oakville
            popcorn removal, stain-block primer, ceiling flattening. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Preparation Checklist — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling smoothing, ceiling texture
            removal, HEPA sanding, remove popcorn ceiling, price per square
            foot, stucco ceiling removal. For clear numbers, share sizes/photos
            of bedrooms, living/dining, hallways, and stair landings. We’ll
            provide a written quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Safety & Venting — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: skim coat ceiling, price per square
            foot, ceiling smoothing, West Oak Trails popcorn removal,
            stain-block primer, Level 5 finish. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Homeowner FAQs — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: asbestos testing popcorn ceiling,
            Level 5 finish, Oakville popcorn removal, remove popcorn ceiling,
            West Oak Trails popcorn removal, ceiling painting after removal. For
            clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Before & After — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: skim coat ceiling, stipple ceiling
            removal, HEPA sanding, West Oak Trails popcorn removal, remove
            popcorn ceiling, ceiling painting after removal. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/downtown-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Local Access & Parking — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: West Oak Trails popcorn removal,
            stain-block primer, popcorn ceiling contractors, Oakville popcorn
            removal, stucco ceiling removal, Level 5 finish. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Noise & Etiquette — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: popcorn ceiling removal, ceiling
            smoothing, ceiling texture removal, HEPA sanding, ceiling
            resurfacing, ceiling painting after removal. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Protection & Masking — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: stucco ceiling removal, Level 5
            finish, ceiling smoothing, West Oak Trails popcorn removal, price
            per square foot, Oakville popcorn removal. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Ceiling Painting Options — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: skim coat ceiling, pot light
            installation after popcorn removal, stucco ceiling removal, asbestos
            testing popcorn ceiling, remove popcorn ceiling, ceiling flattening.
            For clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Ceiling Height Considerations — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: pot light installation after popcorn
            removal, Level 5 finish, ceiling smoothing, ceiling resurfacing,
            stucco ceiling removal, skim coat ceiling. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Fixtures & Shadowing — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: remove popcorn ceiling, popcorn
            ceiling removal, stipple ceiling removal, price per square foot,
            dustless popcorn ceiling removal, popcorn ceiling contractors. For
            clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            LED Upgrades — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: Level 5 finish, West Oak Trails
            popcorn removal, skim coat ceiling, HEPA sanding, pot light
            installation after popcorn removal, ceiling smoothing. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Vent Covers — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: HEPA sanding, West Oak Trails popcorn
            removal, Oakville popcorn removal, ceiling smoothing, dustless
            popcorn ceiling removal, stipple ceiling removal. For clear numbers,
            share sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Surface Adhesion — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: popcorn ceiling removal, ceiling
            painting after removal, ceiling flattening, ceiling texture removal,
            Oakville popcorn removal, stipple ceiling removal. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Primer Types — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: remove popcorn ceiling, stain-block
            primer, ceiling resurfacing, skim coat ceiling, Oakville popcorn
            removal, popcorn ceiling removal. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Moisture Issues — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: Level 5 finish, dustless popcorn
            ceiling removal, ceiling resurfacing, skim coat ceiling, stucco
            ceiling removal, remove popcorn ceiling. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Thermal Movement — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: asbestos testing popcorn ceiling, pot
            light installation after popcorn removal, HEPA sanding, popcorn
            ceiling contractors, stain-block primer, Level 5 finish. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Skim Tools & Compounds — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: Level 5 finish, pot light
            installation after popcorn removal, ceiling resurfacing, HEPA
            sanding, stucco ceiling removal, dustless popcorn ceiling removal.
            For clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Sanding Strategy — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling resurfacing, ceiling painting
            after removal, popcorn ceiling removal, ceiling texture removal,
            asbestos testing popcorn ceiling, popcorn ceiling contractors. For
            clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/glen-abbey/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/palermo-west/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Lighting Angles — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: Level 5 finish, stipple ceiling
            removal, ceiling texture removal, stain-block primer, price per
            square foot, remove popcorn ceiling. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Window Orientation — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: price per square foot, West Oak
            Trails popcorn removal, pot light installation after popcorn
            removal, Level 5 finish, ceiling resurfacing, stucco ceiling
            removal. For clear numbers, share sizes/photos of bedrooms,
            living/dining, hallways, and stair landings. We’ll provide a written
            quote with a predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Quality Control — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: ceiling painting after removal,
            popcorn ceiling removal, ceiling resurfacing, pot light installation
            after popcorn removal, stain-block primer, stipple ceiling removal.
            For clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/kerr-village/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Final Walkthrough — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: remove popcorn ceiling, price per
            square foot, stain-block primer, skim coat ceiling, asbestos testing
            popcorn ceiling, stipple ceiling removal. For clear numbers, share
            sizes/photos of bedrooms, living/dining, hallways, and stair
            landings. We’ll provide a written quote with a predictable start
            date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a
                className="underline"
                href="/blog/popcorn-ceiling-removal-cost-timeline"
              >
                /blog/popcorn-ceiling-removal-cost-timeline
              </a>
              ,{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/falgarwood/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/old-oakville/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Neighbourhood Proximity — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: asbestos testing popcorn ceiling,
            ceiling flattening, stain-block primer, stipple ceiling removal,
            ceiling texture removal, West Oak Trails popcorn removal. For clear
            numbers, share sizes/photos of bedrooms, living/dining, hallways,
            and stair landings. We’ll provide a written quote with a predictable
            start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/quote/">
                /quote/
              </a>
              ,{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/college-park/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/uptown-core/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>

        <details className="p-6 bg-white rounded-2xl border shadow-sm mt-4">
          <summary className="font-medium">
            Emergency Repairs — details for West Oak Trails
          </summary>
          <p className="mt-2 text-gray-700">
            In <strong>West Oak Trails</strong>, homeowners often ask how we
            keep projects tidy and predictable. We use sealed rooms, corridor
            protection, and <strong>HEPA-connected sanding</strong> to control
            dust. Where the texture is heavily painted, we test, then choose a
            controlled scrape or safe encapsulation prior to a full-field{" "}
            <strong>Level 5 skim</strong>. Primer is stain-block and we can
            apply two coats of paint for a “lights-on, daylight-proof” ceiling
            finish.
          </p>
          <p className="mt-2 text-gray-700">
            Search terms we match locally: pot light installation after popcorn
            removal, popcorn ceiling contractors, stain-block primer, remove
            popcorn ceiling, West Oak Trails popcorn removal, ceiling smoothing.
            For clear numbers, share sizes/photos of bedrooms, living/dining,
            hallways, and stair landings. We’ll provide a written quote with a
            predictable start date.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
            <li>
              Helpful internal links:{" "}
              <a className="underline" href="/services/drywall-installation/">
                /services/drywall-installation/
              </a>
              ,{" "}
              <a className="underline" href="/services/interior-painting/">
                /services/interior-painting/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/services/popcorn-ceiling-removal/"
              >
                /services/popcorn-ceiling-removal/
              </a>
            </li>
            <li>
              Nearby neighbourhoods:{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/clearview/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/bronte-creek/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/
              </a>
              ,{" "}
              <a
                className="underline"
                href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
              >
                /service-areas/popcorn-ceiling-removal/oakville/river-oaks/
              </a>
            </li>
            <li>
              Ask about pot-lights, price per square foot, and bundle discounts
              for multi-room projects.
            </li>
          </ul>
        </details>
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
