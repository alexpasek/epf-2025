import Link from "next/link";
import { CONTACT } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — College Park, Oakville | Level 5 Smooth Finish",
  description:
    "Popcorn ceiling removal in College Park, Oakville with sealed dust control and Level 5 skim‑coat. Fast turnarounds for family homes and rentals, tidy crews, written warranty.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/oakville/college-park/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — College Park, Oakville",
    description:
      "Popcorn ceiling removal in College Park, Oakville with sealed dust control and Level 5 skim‑coat. Fast turnarounds for family homes and rentals, tidy crews, written warranty.",
    url: "/service-areas/popcorn-ceiling-removal/oakville/college-park/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16478129135";

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
        areaServed: "College Park, Oakville",
        url: "/service-areas/popcorn-ceiling-removal/oakville/college-park/",
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
            name: "College Park",
            item: "/service-areas/popcorn-ceiling-removal/oakville/college-park/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you work between move‑out and move‑in dates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—our schedule is built for tight turnarounds. We can work evenings or weekends when arranged in advance.",
            },
          },
          {
            "@type": "Question",
            name: "Will dust travel to other rooms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We seal doorways, mask return/heat vents and connect sanders to HEPA vacuums so dust stays in containment.",
            },
          },
          {
            "@type": "Question",
            name: "What if the popcorn is heavily painted?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test a small area. If scraping risks damage, we encapsulate safely and proceed with a Level 5 skim for a flat surface.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle pot light rings and previous patches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We feather around fixtures and seams so they disappear after primer.",
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
              Popcorn Ceiling Removal — College Park, Oakville
            </h1>
            <p className="mt-3 text-gray-700">
              College Park homes span multiple build eras—so we tailor the
              method: controlled scrape where safe, or clean encapsulation
              followed by a full Level 5 skim. Rooms stay livable thanks to
              sealed containment and HEPA‑linked sanding; you get a bright, even
              ceiling ready for primer and paint.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="btn-cta"
              aria-label="Call for a quote"
            >
              📞 (647) 812-9135
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
          <h3 className="text-xl font-semibold">Dust-Controlled Setup</h3>
          <p className="text-gray-600 mt-2">
            Rooms sealed, vents masked, and vacuum‑assist sanding to keep the
            rest of the house clean.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smoothness</h3>
          <p className="text-gray-600 mt-2">
            Full‑field skim, checked under raking light for a flat read from any
            angle.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Tidy & On‑Time</h3>
          <p className="text-gray-600 mt-2">
            We stage around move‑in/out dates and family schedules—clear
            start/finish each day.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Popcorn ceiling removal in College Park — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
          />
        ))}
      </div>

      {/* LOCAL LONG COPY */}
      <section id="details" className="mt-10">
        <section className="mt-10">
          <h3 className="text-xl font-semibold">
            Local Details for College Park
          </h3>
          <p className="mt-2 text-gray-700">
            College Park blends 1970s–90s homes with modern infill. That means
            you’ll see everything from sprayed stucco to heavy roller texture.
            We assess a discreet test patch, then choose a controlled scrape or
            safe encapsulation before a full Level 5 skim.
          </p>
          <p className="mt-2 text-gray-700">
            With student rentals and busy family schedules, speed matters. We
            stage work so bedrooms and common areas stay usable, and we set dust
            containment with taped poly, sealed vents, and HEPA-connected
            sanding.
          </p>
          <p className="mt-2 text-gray-700">
            After skimming, we inspect under raking light to prevent seam
            shadowing and keep paint readings uniform in morning and evening
            sun.
          </p>
        </section>
        <section className="mt-10">
          <h3 className="text-xl font-semibold">What You Get</h3>
          <p className="mt-2 text-gray-700">
            Predictable schedule, tidy daily wrap-ups, and photo updates. We’re
            fully insured and include a written 3‑year workmanship warranty.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Level 5 skim-coat on full ceiling field</li>
            <li>Stain-blocking primer for a bright, even finish</li>
            <li>Pot light cut-out blending and patch feathering</li>
            <li>Optional ceiling paint applied after primer</li>
          </ul>
        </section>
        <section className="mt-10">
          <h3 className="text-xl font-semibold">
            Pricing Signals (Indicative)
          </h3>
          <p className="mt-2 text-gray-700">
            Final numbers depend on paint layers, prior patches, and access.
            These ballparks help you compare apples to apples.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>
              Popcorn removal with minor touch-ups: typical condo bedroom
              $650–$1,100
            </li>
            <li>Level 5 skim across living areas: $2.50–$4.50 per sq.ft</li>
            <li>Prime + ceiling paint: add $0.90–$1.60 per sq.ft</li>
          </ul>
        </section>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Recent Projects in College Park
        </h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="card p-5 bg-white">
            <div className="font-semibold">White Oaks Semi</div>
            <div className="text-sm text-gray-600">
              near Sixth Line & McCraney St
            </div>
            <p className="mt-2 text-gray-700">
              <strong>Scope:</strong> Painted stipple; careful encapsulation +
              Level 5 skim; prime.
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> 2.5 days
            </p>
            <p className="text-gray-700">
              <strong>Result:</strong> Bright, flat ceiling with even roller
              finish.
            </p>
          </div>
          <div className="card p-5 bg-white">
            <div className="font-semibold">Rental Near College</div>
            <div className="text-sm text-gray-600">
              Upper Middle & Trafalgar
            </div>
            <p className="mt-2 text-gray-700">
              <strong>Scope:</strong> Night-before protection; scrape; Level 5
              skim; stain-block prime.
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> 2 days
            </p>
            <p className="text-gray-700">
              <strong>Result:</strong> Ready for paint before tenant move‑in.
            </p>
          </div>
          <div className="card p-5 bg-white">
            <div className="font-semibold">Townhome Refresh</div>
            <div className="text-sm text-gray-600">Munn’s Creek trail area</div>
            <p className="mt-2 text-gray-700">
              <strong>Scope:</strong> Old patch blend; skim under raking light;
              prime & paint-ready.
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> 3 days
            </p>
            <p className="text-gray-700">
              <strong>Result:</strong> No joint shadows under LEDs.
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
            href="/service-areas/popcorn-ceiling-removal/oakville/iroquois-ridge-north/"
            className="pill"
          >
            Iroquois Ridge North
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
        <h2 className="text-2xl font-semibold">FAQ — College Park</h2>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Can you work between move‑out and move‑in dates?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes—our schedule is built for tight turnarounds. We can work
            evenings or weekends when arranged in advance.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Will dust travel to other rooms?
          </summary>
          <p className="mt-2 text-gray-700">
            We seal doorways, mask return/heat vents and connect sanders to HEPA
            vacuums so dust stays in containment.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            What if the popcorn is heavily painted?
          </summary>
          <p className="mt-2 text-gray-700">
            We test a small area. If scraping risks damage, we encapsulate
            safely and proceed with a Level 5 skim for a flat surface.
          </p>
        </details>
        <details className="card p-6 bg-white mt-4">
          <summary className="font-medium">
            Can you handle pot light rings and previous patches?
          </summary>
          <p className="mt-2 text-gray-700">
            Yes. We feather around fixtures and seams so they disappear after
            primer.
          </p>
        </details>
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for a bright, flat ceiling in College Park?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear scope and schedule. Written warranty.
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
            📞 Call (647) 812-9135
          </a>
          <a href="/quote/" className="btn-cta flex-1 text-center">
            Get my quote
          </a>
        </div>
      </div>
    </div>
  );
}
