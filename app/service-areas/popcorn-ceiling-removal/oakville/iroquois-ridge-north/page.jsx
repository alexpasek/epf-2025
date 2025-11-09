import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Iroquois Ridge North, Oakville | Level 5 Smooth Finish",
  description:
    "Popcorn ceiling removal in Iroquois Ridge North with sealed dust control and meticulous Level 5 skim‑coat. Excellent under grazing light, pot‑light friendly, tidy crews, written warranty.",
  alternates: {
    canonical:
      "/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Iroquois Ridge North, Oakville",
    description:
      "Popcorn ceiling removal in Iroquois Ridge North with sealed dust control and meticulous Level 5 skim‑coat. Excellent under grazing light, pot‑light friendly, tidy crews, written warranty.",
    url: "/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Smoothing",
          "Level 5 Skim-Coat",
        ],
        areaServed: "Iroquois Ridge North, Oakville",
        url: "/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/",
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
            item: "/service-areas/popcorn-ceiling-removal/oakville/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Iroquois Ridge North",
            item: "/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will this work with our 9–10 ft ceilings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—our Level 5 skim is designed for tall ceilings and grazing light. We add extra checks under raking light before primer.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate with pot‑light installers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We can connect you with an electrician or coordinate with yours. We feather cut‑outs so they disappear after finishing.",
            },
          },
          {
            "@type": "Question",
            name: "How do you control dust?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Doorways, floors and vents are sealed; sanders are connected to HEPA vacuums. Daily tidy‑ups keep non‑work areas clean.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a warranty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—a written 3‑year workmanship warranty with clear scope and schedule.",
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
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Iroquois Ridge North, Oakville
            </h1>
            <p className="mt-3 text-gray-700">
              In Iroquois Ridge North, tall ceilings and bright interiors demand
              precision. We build clean containment, choose scrape or
              encapsulation after a small test, then deliver a measured Level 5
              skim so your paint reads flat—even under new LEDs.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="btn-cta"
              aria-label="Call for a quote"
            >
              📞 (647) 923-6784
            </a>
            <a href="/quote/" className="btn-cta" aria-label="Open quote form">
              Get my quote
            </a>
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#highlights" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#details" className="underline-offset-2 hover:underline">
            Local details
          </a>
          <a href="#cases" className="underline-offset-2 hover:underline">
            Recent projects
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQs
          </a>
        </nav>
      </header>

      {/* HIGHLIGHTS */}
      <section
        id="highlights"
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">
            Precision Skim for Tall Ceilings
          </h3>
          <p className="text-gray-600 mt-2">
            We re‑check under raking light so seams don’t telegraph along long
            sight‑lines.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Clean, Contained Workflow</h3>
          <p className="text-gray-600 mt-2">
            Sealed rooms, masked vents, and HEPA sanding protect the rest of
            your home.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Pot Light Friendly</h3>
          <p className="text-gray-600 mt-2">
            We coordinate with your electrician and blend cut‑outs for a
            continuous read.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in Iroquois Ridge North — project ${
              i + 1
            }`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      {/* LOCAL LONG COPY */}
      <section id="details" className="mt-10">
        <section className="mt-10">
          <h3 className="text-xl font-semibold">
            Local Details for Iroquois Ridge North
          </h3>
          <p className="mt-2 text-gray-700">
            Open layouts, tall ceilings and strong east/west light can reveal
            even tiny ripples. Our process starts with a controlled test and a
            precise plan for either scrape or encapsulation, then a measured
            Level 5 skim.
          </p>
          <p className="mt-2 text-gray-700">
            We stage protection to keep access clear for families—stairs,
            railings and floors get full coverage. Sanding tools are connected
            to HEPA vacuums, and vents/returns are sealed to prevent migration.
          </p>
        </section>
        <section className="mt-10">
          <h3 className="text-xl font-semibold">
            Finish Quality That Holds Up Under LEDs
          </h3>
          <p className="mt-2 text-gray-700">
            We pull raking light across the surface to find micro‑waves and
            seams before primer. Pot light rings and previous patches are
            feathered so they disappear under a stain‑blocking system.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Seam neutrality under grazing light</li>
            <li>Pot‑light and speaker cut‑out blending</li>
            <li>Paint‑ready surface or full paint finish on request</li>
          </ul>
        </section>
        <section className="mt-10">
          <h3 className="text-xl font-semibold">
            Transparent, Predictable Pricing
          </h3>
          <p className="mt-2 text-gray-700">
            Every home is different; to keep it fair, we price after a quick
            in‑home or photo walkthrough.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Minor repair + scrape + prime: best‑case bedrooms and dens</li>
            <li>
              Skim‑heavy ceilings with prior paint: priced per sq.ft based on
              passes
            </li>
            <li>Optional ceiling paint after primer for a complete refresh</li>
          </ul>
        </section>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Projects in Iroquois Ridge North
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="card p-5 bg-white">
            <div className="font-semibold">Family Room Refresh</div>
            <div className="text-sm text-gray-600">
              near Dundas St E & Ninth Line
            </div>
            <p className="mt-2 text-gray-700">
              <strong>Scope:</strong> Painted stipple; safe encapsulation +
              Level 5 skim; prime.
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> 3 days
            </p>
            <p className="text-gray-700">
              <strong>Result:</strong> Flat ceiling that holds up under new
              LEDs.
            </p>
          </div>
          <div className="card p-5 bg-white">
            <div className="font-semibold">Kitchen + Great Room</div>
            <div className="text-sm text-gray-600">Glenashton corridor</div>
            <p className="mt-2 text-gray-700">
              <strong>Scope:</strong> Scrape; multiple skim passes; ring
              blending; stain‑block prime.
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> 3.5 days
            </p>
            <p className="text-gray-700">
              <strong>Result:</strong> No joint shadowing across open plan.
            </p>
          </div>
          <div className="card p-5 bg-white">
            <div className="font-semibold">Primary Retreat</div>
            <div className="text-sm text-gray-600">Wynten Way area</div>
            <p className="mt-2 text-gray-700">
              <strong>Scope:</strong> Skim with raking‑light inspection;
              paint‑ready finish.
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> 2.5 days
            </p>
            <p className="text-gray-700">
              <strong>Result:</strong> Even, bright read from every angle.
            </p>
          </div>
        </div>
      </section>

      {/* NEIGH LINKS */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold">
          Browse Oakville Neighbourhoods
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/old-oakville/"
            className="pill"
          >
            Old Oakville
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/kerr-village/"
            className="pill"
          >
            Kerr Village
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/bronte/"
            className="pill"
          >
            Bronte
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/bronte-creek/"
            className="pill"
          >
            Bronte Creek
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/glen-abbey/"
            className="pill"
          >
            Glen Abbey
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/river-oaks/"
            className="pill"
          >
            River Oaks
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/west-oak-trails/"
            className="pill"
          >
            West Oak Trails
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/palermo-west/"
            className="pill"
          >
            Palermo West
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/clearview/"
            className="pill"
          >
            Clearview
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/college-park/"
            className="pill"
          >
            College Park
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-south/"
            className="pill"
          >
            Iroquois Ridge South
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/falgarwood/"
            className="pill"
          >
            Falgarwood
          </Link>
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/uptown-core/"
            className="pill"
          >
            Uptown Core
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Iroquois Ridge North</h2>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Will this work with our 9–10 ft ceilings?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes—our Level 5 skim is designed for tall ceilings and grazing
            light. We add extra checks under raking light before primer.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Do you coordinate with pot‑light installers?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes. We can connect you with an electrician or coordinate with
            yours. We feather cut‑outs so they disappear after finishing.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">How do you control dust?</summary>
          <p className="mt-2 text-gray-700">
            Doorways, floors and vents are sealed; sanders are connected to HEPA
            vacuums. Daily tidy‑ups keep non‑work areas clean.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">Is there a warranty?</summary>
          <p className="mt-2 text-gray-700">
            Yes—a written 3‑year workmanship warranty with clear scope and
            schedule.
          </p>
        </details>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a bright, flat ceiling in Iroquois Ridge North?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear scope and schedule. Written warranty.
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

      {/* Bottom links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/service-areas/popcorn-ceiling-removal/oakville/"
          className="underline"
        >
          ← Back to Oakville Popcorn page
        </Link>
        <Link
          href="/service-areas/popcorn-ceiling-removal/"
          className="underline"
        >
          Browse all Popcorn service areas →
        </Link>
        <Link href="/services/popcorn/" className="underline">
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
