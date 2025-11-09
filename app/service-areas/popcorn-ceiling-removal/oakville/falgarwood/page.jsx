import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16478129135";

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Falgarwood, Oakville | Level 5 Smooth Finish",
  description:
    "Falgarwood popcorn ceiling removal, dust-controlled scraping, Level 5 skim coat, stain-block primer and paint-ready finishing. Fast quotes, tidy crews, written warranty.",
  alternates: {
    canonical: "/service-areas/popcorn-ceiling-removal/oakville/falgarwood/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Falgarwood, Oakville",
    description:
      "Ceiling texture removal in Falgarwood with dust control, Level 5 skim, prime & paint-ready finish. Family-friendly workflow and clear pricing.",
    url: "/service-areas/popcorn-ceiling-removal/oakville/falgarwood/",
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
          "Popcorn ceiling removal",
          "Ceiling smoothing",
          "Level 5 skim-coat",
        ],
        areaServed: "Falgarwood, Oakville",
        url: "/service-areas/popcorn-ceiling-removal/oakville/falgarwood/",
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
            item: "/service-areas/popcorn-ceiling-removal",
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
            name: "Falgarwood",
            item: "/service-areas/popcorn-ceiling-removal/oakville/falgarwood/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Falgarwood?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typical Falgarwood homes see ranges from $2.50–$5.50 per sq. ft depending on paint layers, repairs and access. We confirm with a quick photo estimate.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer dustless sanding and room containment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Vents are masked, rooms are sealed, and sanding tools connect to HEPA vacuums to keep the home clean.",
            },
          },
          {
            "@type": "Question",
            name: "Can you test for asbestos before removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If your ceiling may pre‑date the 1990s or you want peace of mind, we can coordinate a quick lab test before work begins.",
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
  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — Falgarwood, Oakville
            </h1>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Family‑friendly, dust‑controlled{" "}
              <strong>ceiling texture removal</strong> for Falgarwood homes. We
              combine safe scraping or encapsulation with a true{" "}
              <strong>Level 5 skim‑coat</strong>, stain‑block priming, and a
              bright, even finish that looks amazing in east‑/west‑facing rooms.
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

        {/* sub‑nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#highlights" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing
          </a>
          <a href="#process" className="underline-offset-2 hover:underline">
            Process
          </a>
          <a href="#cases" className="underline-offset-2 hover:underline">
            Recent projects
          </a>
          <a href="#links" className="underline-offset-2 hover:underline">
            Nearby areas
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQ
          </a>
        </nav>
      </header>

      {/* HIGHLIGHTS */}
      <section
        id="highlights"
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="p-6 bg-white rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Dust‑Controlled & Neat</h3>
          <p className="text-gray-600 mt-2">
            Rooms sealed, vents masked, and HEPA vacuum‑assist sanding to keep
            the rest of the home clean.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Level 5 Smooth</h3>
          <p className="text-gray-600 mt-2">
            Skim‑coat across the full field and raking‑light inspections to
            eliminate ripples and joint shadowing.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Local & Reliable</h3>
          <p className="text-gray-600 mt-2">
            Consistent 5‑star experiences across Oakville with written scope,
            predictable schedule, and photos daily.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-10">
        <h2 className="text-2xl font-semibold">Pricing — Falgarwood</h2>
        <p className="text-gray-700 mt-2 max-w-4xl">
          If you’re searching for <em>popcorn ceiling removal cost Oakville</em>
          , or
          <em> price per square foot Falgarwood</em>, here’s a transparent
          guide. Every home is different; send a couple of photos for a fast,
          no‑pressure estimate.
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <div className="font-semibold">Scrape + Prime</div>
            <div className="text-sm text-gray-600">
              Light texture, minimal paint
            </div>
            <div className="mt-2 text-lg font-semibold">
              $2.50–$3.50 / sq. ft
            </div>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <div className="font-semibold">Scrape + Skim (Level 5)</div>
            <div className="text-sm text-gray-600">
              Painted texture or minor repairs
            </div>
            <div className="mt-2 text-lg font-semibold">
              $5.75–$9.75 / sq. ft
            </div>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <div className="font-semibold">Encapsulate + Skim (Level 5)</div>
            <div className="text-sm text-gray-600">
              Heavily painted or fragile substrate
            </div>
            <div className="mt-2 text-lg font-semibold">
              $6.50–$9.50 / sq. ft
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-3 text-sm">
          Add‑ons: pot light patch blending, water‑stain block, stairwell
          access, paint (ceilings/walls), and drywall fixes.
        </p>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">Our 6‑Step Process</h2>
        <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-700 max-w-4xl">
          <li>Protect floors and furniture, isolate rooms, and mask vents.</li>
          <li>
            Test a small area: choose safe scrape or encapsulate based on paint
            layers and substrate.
          </li>
          <li>
            Full‑field <strong>Level 5 skim‑coat</strong> for a perfectly flat
            read under raking light.
          </li>
          <li>
            Feather repairs and blend pot‑light rings, seams, and patches.
          </li>
          <li>
            Prime with stain‑blocker; optional ceiling paint or full room
            repaint.
          </li>
          <li>
            Daily tidy‑ups; final walkthrough with touch‑ups before we leave.
          </li>
        </ol>
      </section>

      {/* CASES */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Falgarwood Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Split‑Level Near Gainsborough Park",
              scope:
                "Painted stipple, scrape + Level 5 skim, stain‑block prime.",
              duration: "2½ days",
              outcome:
                "No joint shadows in afternoon sun; paint‑ready next morning.",
            },
            {
              title: "Two‑Storey on Falgarwood Dr",
              scope: "Encapsulate fragile texture then Level 5 full skim.",
              duration: "3 days",
              outcome:
                "Glass‑smooth ceilings across main floor; pot‑light rings invisible.",
            },
            {
              title: "Bungalow by Ninth Line",
              scope:
                "Safe scrape, minor drywall repair, prime + ceiling paint.",
              duration: "2 days",
              outcome:
                "Bright, uniform finish; homeowners added wall repaint after.",
            },
          ].map((cs, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border shadow-sm">
              <div className="font-semibold">{cs.title}</div>
              <p className="text-gray-700 mt-2">
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

      {/* INTERNAL LINKS */}
      <section id="links" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Nearby Oakville Neighbourhoods
        </h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {[
            ["Old Oakville", "old-oakville"],
            ["Downtown Oakville", "downtown-oakville"],
            ["Kerr Village", "kerr-village"],
            ["Bronte", "bronte"],
            ["Bronte Creek", "bronte-creek"],
            ["Glen Abbey", "glen-abbey"],
            ["River Oaks", "river-oaks"],
            ["West Oak Trails", "west-oak-trails"],
            ["Palermo West", "palermo-west"],
            ["Clearview", "clearview"],
            ["College Park", "college-park"],
            ["Iroquois Ridge North", "iroquois-ridge-north"],
            ["Iroquois Ridge South", "iroquois-ridge-south"],
            ["Uptown Core", "uptown-core"],
          ].map(([label, slug]) => (
            <Link
              key={slug}
              href={`/service-areas/popcorn-ceiling-removal/oakville/${slug}/`}
              className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 shadow-sm bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/service-areas/popcorn-ceiling-removal/oakville/"
            className="underline underline-offset-2"
          >
            ← Back to Oakville Popcorn Ceiling Removal
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">Falgarwood FAQ</h2>
        {[
          {
            q: "Can you work in lived‑in rooms without moving everything out?",
            a: "Yes. We protect floors/furniture and build light containment so bedrooms and living areas remain usable between days.",
          },
          {
            q: "Do you handle pot light cutouts and patch blending?",
            a: "We feather around fixtures and old patches during the Level 5 skim so the ceiling reads flat after primer and paint.",
          },
          {
            q: "What paint do you recommend after removal?",
            a: "A high‑quality flat or matte ceiling paint hides minor imperfections best and looks soft under raking light.",
          },
          {
            q: "Do you carry insurance?",
            a: "Yes—WSIB and liability insured. You also receive a written 3‑year workmanship warranty.",
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
            Ready for perfect, smooth ceilings in Falgarwood?
          </h3>
          <p className="text-gray-600">
            Text us photos for a same‑day estimate and scheduling options.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-semibold shadow-sm hover:shadow-md"
            href={phoneHref}
          >
            📞 (647) 812-9135
          </a>
          <a
            className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-semibold shadow-sm hover:shadow-md"
            href="/quote/"
          >
            Get my quote
          </a>
        </div>
      </section>
    </div>
  );
}
