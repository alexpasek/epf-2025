import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Hurontario, Mississauga | Level 5 Smooth, Dust-Controlled",
  description:
    "Hurontario popcorn ceiling removal for detached, semi, and townhomes. Dust control, full skim-coat Level 5, prime & paint-ready finish. Fast photo quotes.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/mississauga/hurontario/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Hurontario, Mississauga",
    description:
      "Residential popcorn/stipple removal in Hurontario with dust control and Level 5 finish. Clean, predictable, paint-ready.",
    url: "/service-areas/popcorn-ceiling-removal/mississauga/hurontario/",
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
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5"],
        areaServed: "Hurontario, Mississauga",
        url: "/service-areas/popcorn-ceiling-removal/mississauga/hurontario/",
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
            name: "Mississauga",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Hurontario",
            item: "/service-areas/popcorn-ceiling-removal/mississauga/hurontario/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does typical Hurontario main-floor removal take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most 600–900 sq.ft. main floors take 2–3 workdays including skim-coat, primer and tidy wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "Can you work around existing pot lights or add cutouts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We feather around fixtures and can coordinate with your electrician for new pot-light cutouts.",
            },
          },
          {
            "@type": "Question",
            name: "Do you test for asbestos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If a home is from the 1970s–early 1980s and you want certainty, we can refer third-party sampling labs before work begins.",
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

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16478129135";

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
              Popcorn Ceiling Removal — Hurontario, Mississauga
            </h1>
            <p className="mt-3 text-gray-700">
              Homes around Hurontario St and Eglinton/Matheson often have
              original stipple that shows seams and shadows. Our residential
              process keeps rooms livable: protect floors, seal vents,{" "}
              <strong>dust-controlled sanding</strong>, full{" "}
              <strong>Level 5 skim</strong>, stain-block primer and a bright,
              even finish.
            </p>
          </div>
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              aria-label="Call for a quote"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>
              <span className="whitespace-nowrap">(647) 812-9135</span>
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
          <h3 className="text-xl font-semibold">Dust-Controlled & Tidy</h3>
          <p className="text-gray-600 mt-2">
            Room-by-room containment, vent masking, HEPA vacuum-assist sanding
            and daily cleanups.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            Full-field skim checked under raking light, then stain-block primer
            for a uniform read.
          </p>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">House-Friendly Scheduling</h3>
          <p className="text-gray-600 mt-2">
            Predictable start/finish windows that work around family routines
            and school runs.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hurontario popcorn ceiling removal — project ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl border shadow"
            data-lightbox="true"
          />
        ))}
      </div>

      {/* LOCAL LONG COPY */}
      <section id="details" className="prose-custom max-w-none mt-10">
        <h2>Local Details for Hurontario</h2>
        <p>
          The Hurontario corridor mixes 1980s–2000s two-storeys, split-levels
          and townhomes. Ceilings here often have painted stipple; scraping
          alone can tear paper and telegraph seams. We test a discreet area
          first, then choose controlled scrape or safe encapsulation before a
          full Level 5 skim so the ceiling reads perfectly flat in morning and
          evening light.
        </p>
        <p>
          Staircase landings and open-to-below spaces are set up with clean drop
          protection and proper access. If you’re planning pot lights or a new
          layout, we coordinate timing with your electrician and blend around
          cutouts so nothing “ghosts” after primer.
        </p>
        <p>
          Pricing is straightforward and based on square footage and condition
          (painted vs. unpainted, repairs needed, access). You’ll get a clear
          written scope, schedule, and a paint-ready surface at the end.
        </p>

        <h3>What you can expect</h3>
        <ul>
          <li>Floor/wall protection, room containment, vent masking</li>
          <li>
            Adhesion check, controlled scrape or encapsulation (as needed)
          </li>
          <li>Full skim to Level 5 standard; raking-light inspection</li>
          <li>Stain-block primer; tidy daily wrap-ups</li>
        </ul>

        <h3>Search terms we commonly match in Hurontario</h3>
        <p className="text-gray-700">
          popcorn ceiling removal Mississauga • remove popcorn ceiling
          Mississauga • stucco/stipple ceiling removal • ceiling smoothing &
          flattening • skim coat ceiling • ceiling resurfacing • dustless
          popcorn removal • “near me” in Hurontario • cost/price per sq.ft.
          depends on condition and access.
        </p>
      </section>

      {/* CASES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Hurontario Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Two-Storey Near Eglinton",
              scope:
                "Painted stipple; safe encapsulation + Level 5 skim; primer.",
              duration: "3 days",
              outcome: "Even read across hallway and living room, paint-ready.",
            },
            {
              title: "Townhome Off Bristol Rd",
              scope: "Scrape + skim; blended around 8 new pot lights; primer.",
              duration: "2.5 days",
              outcome: "Flat ceiling with no joint shadows in evening light.",
            },
            {
              title: "Split-Level by Matheson",
              scope:
                "Minor repairs; full skim; stain-block; clean daily wrap-ups.",
              duration: "2 days",
              outcome: "Smooth finish; family kept spaces usable throughout.",
            },
          ].map((cs, i) => (
            <div key={i} className="card p-5 bg-white">
              <div className="font-semibold">{cs.title}</div>
              <p className="mt-2 text-gray-700">
                <strong>Scope:</strong> {cs.scope}
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {cs.duration}
              </p>
              <p className="text-gray-700">
                <strong>Result:</strong> {cs.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — Hurontario</h2>
        {[
          {
            q: "Do you move furniture?",
            a: "We can help with light items. Larger pieces are covered and floated; floors and stairs are protected.",
          },
          {
            q: "Will there be strong odours?",
            a: "We use low-VOC compounds/primers. Ventilation is set up to keep the house comfortable.",
          },
          {
            q: "How do you quote?",
            a: "Share photos + approximate square footage. We confirm on site and lock the scope before we start.",
          },
        ].map((f, i) => (
          <details key={i} className="card p-6 bg-white mt-4">
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 card p-6 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth ceilings in Hurontario?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan and schedule.
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
          href="/service-areas/popcorn-ceiling-removal/mississauga/"
          className="underline"
        >
          ← Back to Mississauga Popcorn page
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
