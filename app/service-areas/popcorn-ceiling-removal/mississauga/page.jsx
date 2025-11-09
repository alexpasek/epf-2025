import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Mississauga | House-Friendly, Dust-Controlled, Level 5 Finish",
  description:
    "Residential popcorn/stipple ceiling removal in Mississauga: clean containment, HEPA dust control, Level 5 skim, stain-block primer, paint-ready finish. Fast photo quotes.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Mississauga",
    description:
      "Make bumpy ceilings flat and bright. We protect floors, control dust, skim to Level 5, and leave a paint-ready finish across Mississauga neighbourhoods.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const neighborhoods = [
    ["port-credit", "Port Credit"],
    ["lorne-park", "Lorne Park"],
    ["clarkson", "Clarkson"],
    ["erin-mills", "Erin Mills"],
    ["streetsville", "Streetsville"],
    ["meadowvale", "Meadowvale"],
    ["meadowvale-village", "Meadowvale Village"],
    ["city-centre", "City Centre"],
    ["hurontario", "Hurontario"],
    ["east-credit", "East Credit"],
    ["lakeview", "Lakeview"],
    ["mineola", "Mineola"],
    ["cooksville", "Cooksville"],
    ["applewood", "Applewood"],
    ["malton", "Malton"],
    ["sheridan", "Sheridan"],
    ["churchill-meadows", "Churchill Meadows"],
  ];

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
        ],
        areaServed: "Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "ItemList",
        name: "Mississauga Neighbourhoods We Serve",
        itemListElement: neighborhoods.map(([slug, name], i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
          url: `/service-areas/popcorn-ceiling-removal/mississauga/${slug}/`,
        })),
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
            name: "Mississauga",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Mississauga?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on paint layers, repairs, and access. Most Mississauga homes fall within a predictable range after a quick photo estimate. We can price by square foot for larger areas or as a fixed scope for bedrooms, hallways, and open-plan spaces.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer dustless or dust-controlled removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—rooms are contained, vents are masked, and sanding tools connect to HEPA vacuums to keep dust contained during Level 5 skimming.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate pot-light installation after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can sync timing with your electrician or refer one. We blend cutouts and patch rings so the final surface reads flat under light.",
            },
          },
          {
            "@type": "Question",
            name: "Do you test for asbestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If the home is from an age where asbestos could be present, we can refer a local lab for a fast test. If needed, we follow the safe approach based on results.",
            },
          },
          {
            "@type": "Question",
            name: "Do you paint after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We prime with a stain-blocking system and can finish with two coats of quality ceiling paint, or leave the surface paint-ready if you prefer to DIY.",
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export default function Page() {
  const neighborhoods = [
    ["port-credit", "Port Credit"],
    ["lorne-park", "Lorne Park"],
    ["clarkson", "Clarkson"],
    ["erin-mills", "Erin Mills"],
    ["streetsville", "Streetsville"],
    ["meadowvale", "Meadowvale"],
    ["meadowvale-village", "Meadowvale Village"],
    ["city-centre", "City Centre"],
    ["hurontario", "Hurontario"],
    ["east-credit", "East Credit"],
    ["lakeview", "Lakeview"],
    ["mineola", "Mineola"],
    ["cooksville", "Cooksville"],
    ["applewood", "Applewood"],
    ["malton", "Malton"],
    ["sheridan", "Sheridan"],
    ["churchill-meadows", "Churchill Meadows"],
  ];

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
              Popcorn Ceiling Removal — Mississauga (Homes & Townhomes)
            </h1>
            <p className="mt-3 text-gray-700">
              Turn stipple into smooth. We protect your floors and furniture,
              seal work areas, control dust with HEPA, and skim to{" "}
              <strong>Level 5</strong> for a bright, even ceiling. Predictable
              scheduling, tidy daily wrap-ups, and clear communication.
            </p>
          </div>
          {/* Blue CTAs (right side) */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 923-6784</span>
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

        {/* Anchor subnav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a
            href="#neighbourhoods"
            className="underline-offset-2 hover:underline"
          >
            Neighbourhoods
          </a>
          <a href="#why-us" className="underline-offset-2 hover:underline">
            Why Homeowners Choose Us
          </a>
          <a href="#process" className="underline-offset-2 hover:underline">
            Our Process
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing & Sq-Ft
          </a>
          <a href="#qa" className="underline-offset-2 hover:underline">
            FAQs
          </a>
          <a href="#links" className="underline-offset-2 hover:underline">
            Useful Links
          </a>
        </nav>
      </header>

      {/* NEIGHBOURHOODS */}
      <section id="neighbourhoods" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Neighbourhoods We Serve Across Mississauga
        </h2>
        <p className="mt-2 text-gray-700 max-w-3xl">
          We regularly work in detached homes, semis and townhomes across
          Mississauga. Pick your neighbourhood for a local page with examples
          and details:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {neighborhoods.map(([slug, name]) => (
            <Link
              key={slug}
              href={`/service-areas/popcorn-ceiling-removal/mississauga/${slug}/`}
              className="pill"
            >
              {name}
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Mississauga popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* WHY US */}
      <section id="why-us" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Why Mississauga Homeowners Choose Us
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              House-Friendly Containment
            </h3>
            <p className="mt-2 text-gray-700">
              Floors protected, furniture wrapped, doorways sealed, and vents
              masked. We keep dust inside the work area and clean up daily so
              your home remains livable during the project.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Level 5 Smoothness</h3>
            <p className="mt-2 text-gray-700">
              After removal or safe encapsulation, we skim the full surface and
              check under raking light so joints don’t telegraph. The result is
              a flat, bright ceiling that looks new.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Predictable Scheduling</h3>
            <p className="mt-2 text-gray-700">
              We set a clear start and finish, coordinate any pot-light work
              with your electrician, and keep you updated with simple,
              no-surprise communication.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Prime & Paint-Ready</h3>
            <p className="mt-2 text-gray-700">
              We use a stain-blocking primer system so old marks don’t bleed
              through. We can finish with two coats of quality ceiling paint or
              leave it perfectly paint-ready for your crew.
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Our 6-Step Process (Optimized for Homes)
        </h2>
        <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700 max-w-3xl">
          <li>
            Protect floors and furniture, seal doorways, mask returns/supplies.
          </li>
          <li>
            Test a small patch: controlled scrape vs. safe encapsulation, based
            on paint layers.
          </li>
          <li>
            Remove texture or encapsulate, then <strong>full-field skim</strong>{" "}
            to Level 5.
          </li>
          <li>
            Sand with vacuum-assist tools for dust control and a uniform
            surface.
          </li>
          <li>
            Prime with a stain-blocking system; inspect under raking light and
            touch-up.
          </li>
          <li>
            Optional: ceiling paint (two coats) or leave paint-ready with a
            written scope.
          </li>
        </ol>
      </section>

      {/* PRICING & KEYWORDS */}
      <section id="pricing" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Pricing & Square-Foot Guidance
        </h2>
        <p className="mt-2 text-gray-700 max-w-3xl">
          Every home is a bit different (paint build-up, repairs, access,
          ceiling height). For larger areas we can price by square foot; for
          bedrooms and hallways, fixed packages are common. Share a few photos
          and rough sizes and we’ll confirm a clear number before we start.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Typical Scopes</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>Bedroom ceilings (incl. minor repairs)</li>
              <li>Main-floor living/dining + hallway</li>
              <li>Open-plan spaces & stair landings</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">High-Intent Services</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>Dust-controlled popcorn removal (HEPA)</li>
              <li>Skim coat ceiling to Level 5 smoothness</li>
              <li>Ceiling resurfacing & flattening</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-2xl border shadow-sm">
            <h3 className="font-semibold">Popular Add-Ons</h3>
            <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
              <li>Pot-light cutout blending</li>
              <li>Crack & patch repairs at corners</li>
              <li>Prime & paint (2 coats)</li>
            </ul>
          </div>
        </div>

        {/* Keyword cluster for Mississauga (natural language, internal-link friendly) */}
        <div className="mt-6 p-5 bg-white rounded-2xl border shadow-sm">
          <h3 className="text-lg font-semibold">People search for:</h3>
          <p className="mt-2 text-gray-700">
            popcorn ceiling removal Mississauga, remove popcorn ceiling
            Mississauga, popcorn ceiling scraping, stucco or stipple ceiling
            removal, ceiling texture removal, ceiling smoothing/flattening, skim
            coat ceiling, ceiling resurfacing,{" "}
            <strong>popcorn ceiling removal cost Mississauga</strong>, price per
            square foot, dustless popcorn removal, popcorn ceiling removal near
            me, contractors in Mississauga, condo & house options, asbestos
            testing referrals, pot-light installation timing, and painting after
            removal.
          </p>
        </div>
      </section>

      {/* Q&A (onsite content + matches FAQ JSON-LD) */}
      <section id="qa" className="mt-10">
        <h2 className="text-2xl font-semibold">Mississauga FAQs</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "How do you keep the house clean?",
              a: "We set up full containment, mask vents, use vacuum-assist sanders, and tidy daily so non-work rooms stay clean.",
            },
            {
              q: "Can you coordinate pot lights?",
              a: "Yes. We’ll align with your electrician or refer one, then blend cutouts so rings don’t show through paint.",
            },
            {
              q: "Is pricing by square foot or fixed?",
              a: "Both are available. Larger areas often suit sq-ft pricing; bedrooms/hallways are usually a fixed scope.",
            },
            {
              q: "Do you paint the ceilings too?",
              a: "We can finish with two coats of quality ceiling paint or leave a perfect paint-ready surface.",
            },
            {
              q: "What about asbestos testing?",
              a: "If the home’s era suggests risk, we can refer a local lab for a quick test and choose the safest method.",
            },
            {
              q: "Do you work in all neighbourhoods?",
              a: "Yes—see the neighbourhood links above for local pages in Port Credit, Lorne Park, Clarkson, Erin Mills and more.",
            },
          ].map((f, i) => (
            <details
              key={i}
              className="p-5 bg-white rounded-2xl border shadow-sm"
            >
              <summary className="font-medium">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* LINKS to strengthen internal relevance */}
      <section id="links" className="mt-10">
        <h2 className="text-2xl font-semibold">Useful Links</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/services/popcorn/" className="underline">
            Main Popcorn Service Page
          </Link>
          <Link href="/services/wallpaper/" className="underline">
            Wallpaper Removal
          </Link>
          <Link href="/services/drywall-installation/" className="underline">
            Drywall Installation
          </Link>
          <Link href="/services/interior-painting/" className="underline">
            Interior Painting
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 p-6 bg-white rounded-2xl border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready to make your ceilings smooth and bright?
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

      {/* BOTTOM NAV */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/service-areas/popcorn-ceiling-removal/"
          className="underline"
        >
          ← Back to Popcorn service areas
        </Link>
        <Link href="/services/popcorn/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>
    </div>
  );
}
