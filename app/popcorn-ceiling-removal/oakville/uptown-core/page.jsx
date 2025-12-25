import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";

export const metadata = {
  title: "Popcorn Ceiling Removal — Uptown Core, Oakville | Smooth Level 5",
  description:
    "Uptown Core popcorn ceiling removal: dust‑controlled, Level 5 skim‑coat, prime & paint‑ready finish. Clear pricing, on‑time schedule, tidy crews.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/oakville/uptown-core/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Uptown Core, Oakville",
    description:
      "Ceiling texture removal in Uptown Core with HEPA dust control and Level 5 finishing. Photo estimates and fast scheduling.",
    url: "/popcorn-ceiling-removal/oakville/uptown-core/",
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
          "Popcorn ceiling scraping",
          "Ceiling smoothing",
          "Skim coat Level 5",
        ],
        areaServed: "Uptown Core, Oakville",
        url: "/popcorn-ceiling-removal/oakville/uptown-core/",
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
            item: "/popcorn-ceiling-removal/oakville/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Uptown Core",
            item: "/popcorn-ceiling-removal/oakville/uptown-core/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the price per square foot for Uptown Core?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most condos and townhomes fall between $3.50–$5.50 per sq. ft for scrape + Level 5 skim. Send a photo for an exact quote.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate with property management?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—elevator windows, protection for common areas, and quiet‑hours compliant scheduling when needed.",
            },
          },
          {
            "@type": "Question",
            name: "Can you paint after removal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can leave a paint‑ready surface or handle the ceiling paint (and walls) for a turnkey finish.",
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
              Popcorn Ceiling Removal — Uptown Core, Oakville
            </h1>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Upgrade your Uptown Core condo or townhome with{" "}
              <strong>dust‑controlled popcorn ceiling removal</strong>,
              <strong> Level 5 skim‑coat</strong>, stain‑block primer and a
              bright, even finish. Predictable schedule, clean jobsite, and a
              3‑year workmanship warranty.
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
            Projects
          </a>
          <a href="#links" className="underline-offset-2 hover:underline">
            Neighbourhoods
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
          <h3 className="text-xl font-semibold">Quiet & Condo‑Friendly</h3>
          <p className="text-gray-600 mt-2">
            Elevator bookings and common‑area protection as needed; respectful
            crews and tidy daily wrap‑ups.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Dust Control & Cleanup</h3>
          <p className="text-gray-600 mt-2">
            Room containment, vent masking and HEPA vacuum‑assist sanding for a
            clean experience.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border shadow-sm">
          <h3 className="text-xl font-semibold">Level 5 Finish</h3>
          <p className="text-gray-600 mt-2">
            Full‑field skim‑coat and raking‑light checks so ceilings read
            perfect under downlights and daylight.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-10">
        <h2 className="text-2xl font-semibold">Pricing — Uptown Core</h2>
        <p className="text-gray-700 mt-2 max-w-4xl">
          Searching for <em>popcorn ceiling removal near me</em> in Uptown Core
          or
          <em> price per square foot Oakville</em>? Most suites fall into these
          ranges—photos let us confirm quickly.
        </p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <div className="font-semibold">Scrape + Prime</div>
            <div className="text-sm text-gray-600">
              Light texture, few paint layers
            </div>
            <div className="mt-2 text-lg font-semibold">$2.75–$3 / sq. ft</div>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <div className="font-semibold">Scrape + Skim (Level 5)</div>
            <div className="text-sm text-gray-600">
              Painted texture, minor repairs
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
              $6.75–$9.75 / sq. ft
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-3 text-sm">
          Options: pot‑light cutouts, repaint ceilings/walls, water‑stain block,
          drywall touch‑ups, and patch blending.
        </p>
      </section>

      {/* PROCESS */}
      <section id="process" className="mt-10">
        <h2 className="text-2xl font-semibold">How We Get a Perfect Finish</h2>
        <ol className="list-decimal pl-5 mt-2 space-y-2 text-gray-700 max-w-4xl">
          <li>Protect floors, cover furniture, and seal work zones.</li>
          <li>Test a discreet spot; choose safe scrape or encapsulation.</li>
          <li>
            Skim‑coat Level 5 across the whole ceiling to flatten the field.
          </li>
          <li>Blend seams, pot‑light rings, prior patches, and transitions.</li>
          <li>
            Prime with stain‑block; optional ceiling paint (and walls) for
            turnkey delivery.
          </li>
          <li>
            Final raking‑light inspection with touch‑ups and a clean hand‑off.
          </li>
        </ol>
      </section>

      {/* PROJECTS */}
      <section id="cases" className="mt-10">
        <h2 className="text-2xl font-semibold">Recent Uptown Core Projects</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Condo by Trafalgar Rd",
              scope:
                "Painted stipple; scrape + Level 5 skim; prime + ceiling paint.",
              duration: "2 days",
              outcome:
                "Zero dust in hallway; smooth read under LED downlights.",
            },
            {
              title: "Townhome near Dundas St E",
              scope: "Encapsulate heavy layers; full skim; stain‑block primer.",
              duration: "3 days",
              outcome:
                "Glass‑flat ceiling across living/dining; ready for wall repaint.",
            },
            {
              title: "1‑Bedroom Suite on Post Rd",
              scope:
                "Light texture; safe scrape + prime; optional wall paint add‑on.",
              duration: "1½ days",
              outcome: "Even finish; owners booked us for bedroom next month.",
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
        <h2 className="text-2xl font-semibold">More Oakville Neighbourhoods</h2>
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
            ["Falgarwood", "falgarwood"],
          ].map(([label, slug]) => (
            <Link
              key={slug}
              href={`/popcorn-ceiling-removal/oakville/${slug}/`}
              className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 shadow-sm bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/popcorn-ceiling-removal/oakville/"
            className="underline underline-offset-2"
          >
            ← Popcorn ceiling removal Oakville
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">Uptown Core FAQ</h2>
        {[
          {
            q: "What if my ceiling has multiple paint layers?",
            a: "We test first. If scraping risks damage, we safely encapsulate and proceed with a Level 5 skim for a perfectly flat read.",
          },
          {
            q: "How noisy is the work?",
            a: "We use quiet methods and schedule tasks to respect condo or townhome quiet windows when necessary.",
          },
          {
            q: "Do you handle paint afterwards?",
            a: "Yes—ceilings, walls, and trim upon request for a turnkey result.",
          },
          {
            q: "Are you insured and do you warranty the work?",
            a: "Yes—WSIB and liability insured; 3‑year workmanship warranty is included.",
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
            Want a modern, smooth ceiling in Uptown Core?
          </h3>
          <p className="text-gray-600">
            Share a few photos and your timeline—we’ll reply with options today.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-semibold shadow-sm hover:shadow-md"
            href={phoneHref}
          >
            📞 (647) 923-6784
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
