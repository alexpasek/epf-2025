import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Sheridan, Mississauga | Level 5 Smooth, Dust-Controlled",
  description:
    "Sheridan & Sheridan Homelands popcorn ceiling removal for detached/semi homes. Dust control, Level 5 skim, stain-block primer and paint-ready results. Fast photo quotes.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/sheridan/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Sheridan, Mississauga",
    description:
      "Residential popcorn/stipple ceiling removal with tidy containment and Level 5 smoothness in Sheridan and Sheridan Homelands.",
    url: "/popcorn-ceiling-removal/mississauga/sheridan/",
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
          "Popcorn Ceiling Removal",
          "Stipple/Stucco Ceiling Removal",
          "Ceiling Skim Coat Level 5",
          "Ceiling Resurfacing",
        ],
        areaServed: "Sheridan, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/sheridan/",
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: "/quote/",
        },
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
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Sheridan",
            item: "/popcorn-ceiling-removal/mississauga/sheridan/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does Sheridan main-floor removal usually take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typical 600–900 sq.ft. main floors take about 2–3 working days including skim, primer and tidy wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate pot lights with an electrician?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We align timing with your electrician and blend around new rings so nothing ghosts after primer.",
            },
          },
          {
            "@type": "Question",
            name: "What about older painted textures?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small patch first, then choose controlled scrape or safe encapsulation before a full Level 5 skim.",
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
              Popcorn Ceiling Removal — Sheridan, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Sheridan Homelands and nearby streets often have legacy stipple
              that shows seams and shadows. Our residential workflow keeps rooms
              livable: floor/wall protection, room containment,{" "}
              <strong>HEPA-assisted sanding</strong>, full-field{" "}
              <strong>Level 5 skim</strong>, and a stain-block primer so your
              top coat covers beautifully.
            </p>
          </div>
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

        {/* Sticky sub-nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#why" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#process" className="underline-offset-2 hover:underline">
            Process
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing
          </a>
          <a href="#compare" className="underline-offset-2 hover:underline">
            Compare methods
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQ
          </a>
          <a
            href="#neighbourhoods"
            className="underline-offset-2 hover:underline"
          >
            Nearby areas
          </a>
        </nav>
      </header>

      {/* HIGHLIGHTS */}
      <section id="why" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Dust-Controlled & Tidy</h3>
          <p className="text-gray-600 mt-2">
            Room containment, vent masking, HEPA vacuum-assist sanding, daily
            cleanups.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim checked under raking light; stain-block primer for
            an even read.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">House-Friendly Scheduling</h3>
          <p className="text-gray-600 mt-2">
            Predictable start/finish windows that work around family routines.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Sheridan popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* PROCESS */}
      <section id="process" className="prose-custom max-w-none mt-10">
        <h2>Exact Process for Sheridan Homes</h2>
        <ol>
          <li>
            <strong>Protection & Containment.</strong> Floors, stairs and
            furniture covered; vents sealed; pathways kept clean.
          </li>
          <li>
            <strong>Test Patch.</strong> We check adhesion on a discreet spot to
            pick the safest, cleanest approach.
          </li>
          <li>
            <strong>Removal / Encapsulation.</strong> Controlled scrape where
            suitable, or safe encapsulation prior to skim.
          </li>
          <li>
            <strong>Level 5 Skim.</strong> Full-field skim with raking-light
            inspection to eliminate joint telegraphing.
          </li>
          <li>
            <strong>Stain-Block Primer.</strong> Locks down the surface so your
            top coat covers fast and even.
          </li>
          <li>
            <strong>Tidy Wrap-Ups.</strong> Daily cleanup; simple hand-over with
            touch-up walkthrough if needed.
          </li>
        </ol>

        <h3>Rooms we typically handle in Sheridan</h3>
        <ul>
          <li>Main-floor living/dining + hallway/stairs</li>
          <li>
            Bedrooms and closets (two coats of primer if requested by painter)
          </li>
          <li>Two-storey foyers with proper access and protection</li>
        </ul>
      </section>

      {/* PRICING GUIDANCE */}
      <section id="pricing" className="mt-10 card p-6 bg-white">
        <h2 className="text-2xl font-semibold">
          Pricing — Clear & Condition-Based
        </h2>
        <p className="text-gray-700 mt-2">
          Quotes are based on square footage, painted vs unpainted texture,
          repairs, and access (stairwells, two-storey foyer). Send photos and
          rough sizes for a fast estimate; we confirm everything on site before
          starting.
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-gray-700">
          <div className="p-4 border rounded-2xl">
            <div className="font-semibold">Touch-ups + Prime</div>
            <div className="text-sm mt-1">
              For newer textures with minor imperfections.
            </div>
          </div>
          <div className="p-4 border rounded-2xl">
            <div className="font-semibold">Full Removal + Level 5</div>
            <div className="text-sm mt-1">
              Most Sheridan jobs. Clean skim, raking-light checks, stain-block
              primer.
            </div>
          </div>
          <div className="p-4 border rounded-2xl">
            <div className="font-semibold">Complex Access / Repairs</div>
            <div className="text-sm mt-1">
              Two-storey foyers, ceiling repairs, and pot-light blending with
              electrician timing.
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* COMPARE METHODS */}
      <section id="compare" className="prose-custom max-w-none mt-10">
        <h2>Compare: Scrape vs. Encapsulate vs. Drywall-Over</h2>
        <ul>
          <li>
            <strong>Controlled Scrape</strong> — Works when texture releases
            cleanly. Faster; minimal height change.
          </li>
          <li>
            <strong>Encapsulation + Skim</strong> — For stubborn or heavily
            painted stipple. Locks in the surface before the Level 5 skim.
          </li>
          <li>
            <strong>Drywall-Over (Selective)</strong> — When ceilings are
            severely damaged or uneven; adds height/trim considerations.
          </li>
        </ul>
        <p className="text-gray-700">
          We recommend the path after a quick test patch. Goal: a durable,
          perfectly flat substrate that looks great in both natural light and
          pot lights.
        </p>
      </section>

      {/* RELATED SERVICES (INTERNAL LINKS) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Related Services in Sheridan</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <Link
            href="/services/wallpaper"
            className="card p-5 bg-white hover:shadow-md transition"
          >
            <div className="font-semibold">
              Wallpaper Removal & Adhesive Wash
            </div>
            <p className="mt-2 text-gray-700">
              Clean removal, skim as needed, primer, paint-ready walls.
            </p>
          </Link>
          <Link
            href="/services/drywall-installation"
            className="card p-5 bg-white hover:shadow-md transition"
          >
            <div className="font-semibold">Drywall Repairs & Patches</div>
            <p className="mt-2 text-gray-700">
              Pot-light holes, bulkhead fixes, cracks and seams blended to
              vanish.
            </p>
          </Link>
          <Link
            href="/services/interior-painting"
            className="card p-5 bg-white hover:shadow-md transition"
          >
            <div className="font-semibold">Interior Painting</div>
            <p className="mt-2 text-gray-700">
              Ceilings, walls and trim — matched to your preferred finish.
            </p>
          </Link>
        </div>
      </section>

      {/* SEO — SEARCH INTENT CLUSTER */}
      <section className="prose-custom max-w-none mt-10">
        <h2>Searches We Commonly Match in Sheridan</h2>
        <p className="text-gray-700">
          popcorn ceiling removal Mississauga • remove popcorn ceiling
          Mississauga • stucco/stipple ceiling removal • ceiling smoothing and
          flattening • skim coat ceiling • ceiling resurfacing • dustless
          popcorn removal • popcorn ceiling removal cost / price per square foot
          (condition dependent) • pot light installation after popcorn removal •
          popcorn ceiling painting after removal • “near me” Sheridan.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Sheridan</h2>
        {[
          {
            q: "Do you move furniture?",
            a: "We can help with light items. Larger pieces are covered and floated; floors and stairs are protected.",
          },
          {
            q: "Will there be odours or strong fumes?",
            a: "We use low-VOC compounds and primers and keep ventilation moving for comfort.",
          },
          {
            q: "How do I get a firm quote?",
            a: "Send photos + approximate square footage. We provide a fast estimate and confirm the scope on site.",
          },
        ].map((f, i) => (
          <details key={i} className="card p-6 bg-white mt-4">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      {/* NEARBY AREAS — INTERNAL LINK SILO */}
      <section id="neighbourhoods" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Nearby Mississauga Areas We Serve
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            [
              "/popcorn-ceiling-removal/mississauga/port-credit/",
              "Port Credit",
            ],
            ["/popcorn-ceiling-removal/mississauga/lorne-park/", "Lorne Park"],
            ["/popcorn-ceiling-removal/mississauga/clarkson/", "Clarkson"],
            ["/popcorn-ceiling-removal/mississauga/erin-mills/", "Erin Mills"],
            ["/popcorn-ceiling-removal/mississauga/lakeview/", "Lakeview"],
            ["/popcorn-ceiling-removal/mississauga/mineola/", "Mineola"],
            [
              "/popcorn-ceiling-removal/mississauga/streetsville/",
              "Streetsville",
            ],
            ["/popcorn-ceiling-removal/mississauga/meadowvale/", "Meadowvale"],
            [
              "/popcorn-ceiling-removal/mississauga/meadowvale-village/",
              "Meadowvale Village",
            ],
            ["/popcorn-ceiling-removal/mississauga/hurontario/", "Hurontario"],
            [
              "/popcorn-ceiling-removal/mississauga/city-centre/",
              "City Centre",
            ],
            [
              "/popcorn-ceiling-removal/mississauga/east-credit/",
              "East Credit",
            ],
            ["/popcorn-ceiling-removal/mississauga/cooksville/", "Cooksville"],
            ["/popcorn-ceiling-removal/mississauga/applewood/", "Applewood"],
            ["/popcorn-ceiling-removal/mississauga/malton/", "Malton"],
          ].map(([href, name]) => (
            <Link key={href} href={href} className="pill">
              {name}
            </Link>
          ))}
        </div>

        <div className="mt-6 text-sm">
          Looking for Toronto West or Oakville? Try{" "}
          <Link
            href="/popcorn-ceiling-removal/etobicoke/"
            className="underline"
          >
            Etobicoke
          </Link>{" "}
          or{" "}
          <Link href="/popcorn-ceiling-removal/oakville/" className="underline">
            Oakville
          </Link>
          .
        </div>
      </section>

      {/* SALES CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready to smooth your Sheridan ceilings?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate today. Clear plan, tidy workflow, paint-ready
            results.
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

      {/* BOTTOM LINKS */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/popcorn-ceiling-removal/mississauga/"
          className="underline"
        >
          ← Back to Mississauga Popcorn page
        </Link>
        <Link href="/popcorn-ceiling-removal/" className="underline">
          Browse all Popcorn service areas →
        </Link>
        <Link href="/services/popcorn-ceiling-removal/" className="underline">
          Main Popcorn service page →
        </Link>
      </nav>

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
