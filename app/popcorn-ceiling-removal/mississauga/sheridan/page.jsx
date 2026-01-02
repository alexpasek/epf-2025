import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title:
    "Sheridan Popcorn Ceiling Removal | Level 5 Smooth Ceilings & Local Crew",
  description:
    "Modernize Sheridan and Sheridan Homelands ceilings with dust-controlled popcorn removal, Level 5 skims, and paint-ready finishes. Fast photo estimates, HEPA protection, 3-year warranty.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/sheridan/",
  },
  openGraph: {
    title: "Sheridan Popcorn Ceiling Removal | Level 5 Smooth Ceilings",
    description:
      "Sheridan Homelands popcorn ceiling removal with HEPA dust control, Level 5 skim, stain-block primer, and trusted local crews.",
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
        name: "Sheridan Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Level 5 Skim Coat",
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
          { "@type": "ListItem", position: 1, name: "Popcorn Ceiling Removal", item: "/services/popcorn-ceiling-removal/" },
          { "@type": "ListItem", position: 2, name: "Mississauga", item: "/popcorn-ceiling-removal/mississauga/" },
          { "@type": "ListItem", position: 3, name: "Sheridan", item: "/popcorn-ceiling-removal/mississauga/sheridan/" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast can you quote Sheridan Homelands ceilings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Text photos + approximate square footage for a same-day popcorn ceiling removal estimate in Sheridan.",
            },
          },
          {
            "@type": "Question",
            name: "Do you control dust in occupied homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We seal rooms, mask vents, run HEPA sanders and tidy daily so Sheridan homes stay livable.",
            },
          },
          {
            "@type": "Question",
            name: "What finish do you deliver?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every Sheridan project receives a Level 5 skim and stain-block primer for a flawless paint-ready ceiling.",
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
const phoneDisplay = (CONTACT && CONTACT.phone) || "(647) 923-6784";

export default function Page() {
  const gallery = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white shadow-2xl">
          <div className="grid gap-10 p-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <div className="inline-flex gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Sheridan & Sheridan Homelands
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  Dust-Controlled Workflow
                </span>
              </div>
              <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                Smooth ceilings for Sheridan homelands bungalows & splits
              </h1>
              <p className="mt-4 text-lg text-slate-100">
                We deliver professional popcorn ceiling removal Sheridan homeowners trust: HEPA dust control, Level 5 skims, stain-block primer, and tidy wrap-ups that keep Royal Windsor & Winston Churchill commutes uninterrupted.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={phoneHref} className="btn-cta bg-white text-slate-900 shadow-lg">
                  📞 {phoneDisplay}
                </a>
                <a
                  href="/quote/"
                  className="btn-cta border border-white/60 bg-transparent text-white hover:bg-white/10"
                >
                  Get my quote
                </a>
                <p className="text-sm text-white/80">
                  Fast photo estimate • 3-year workmanship warranty
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 text-slate-900 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">
                Popcorn ceiling removal quote
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                Contact the Sheridan popcorn ceiling crew
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Tell us about your Sheridan Homelands popcorn ceilings and we’ll reply with a Level 5 plan, timeline, and dust-control notes.
              </p>
              <QuoteForm />
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <p>
                  ✅ Average main floor: 2–3 days room-by-room with HEPA containment.
                </p>
                <p>
                  ✅ Methods include controlled scrape or encapsulate + Level 5 skim depending on painted build-up.
                </p>
                <p>
                  ✅ Familiar with Sheridan Homelands crescents, Credit Woodland pockets, and Erin Mills Pkwy access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="mt-6 flex flex-wrap gap-3 text-sm">
          {[
            ["#why", "Why us"],
            ["#local", "Local insight"],
            ["#services", "Services"],
            ["#pricing", "Pricing"],
            ["#projects", "Projects"],
            ["#resources", "Local resources"],
            ["#faq", "FAQ"],
            ["#neighbourhoods", "Nearby areas"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* WHY */}
      <section id="why" className="mt-12 py-12 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Why Sheridan homeowners choose our crew
          </h2>
          <p className="mt-2 text-center text-gray-600 max-w-3xl mx-auto">
            Sheridan popcorn ceiling removal depends on staging in tight crescents, low carports, and open-to-below foyers. We built a workflow that respects those constraints.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Transit-friendly staging",
                copy: "Gear runs stay compact for Winston Churchill & QEW commutes. Materials stay in containment, not the driveway.",
              },
              {
                title: "Level 5 every time",
                copy: "Popcorn ceiling removal Sheridan Homelands clients expect includes skim, raking-light checks, and stain-block primer.",
              },
              {
                title: "Neighbourly wrap-ups",
                copy: "Daily tidies, clear updates, respectful noise windows in family-heavy streets near Sheridan Park.",
              },
            ].map((card) => (
              <div key={card.title} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((src, i) => (
          <div key={src} className="rounded-3xl overflow-hidden bg-slate-100 shadow">
            <img
              src={src}
              alt={`Sheridan popcorn ceiling removal project ${i + 1}`}
              className="h-56 w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* LOCAL INSIGHT */}
      <section id="local" className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="p-8 rounded-3xl bg-white shadow border border-slate-100">
          <h2 className="text-3xl font-bold">Sheridan Homelands insight</h2>
          <p className="mt-4 text-gray-700">
            Sheridan Homelands bungalows, Erin Mills Parkway splits, and Credit Woodland two-storeys often have painted stipple hiding decades of repairs. We test a discreet area, measure moisture, and choose controlled scrape or encapsulate before Level 5 skimming so pot lights and corridor light don’t telegraph seams.
          </p>
          <p className="mt-4 text-gray-700">
            Tight driveways near Homelands Dr require micro-staging: we load-in once, cart materials inside, and keep separation walls sealed to protect active kitchens and stairs. HEPA sanders, negative-air options, and floor runners keep dust off hardwoods.
          </p>
          <p className="mt-4 text-gray-700">
            Popcorn ceiling removal Sheridan projects commonly book alongside Clarkson or Erin Mills homes. Review our neighbouring routes if you plan multi-home upgrades.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-50 to-white border border-indigo-100">
          <h3 className="text-xl font-semibold">Typical requests</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>Popcorn ceiling removal Sheridan Homelands main floors</li>
            <li>Stipple ceiling removal near Sheridan Centre & Thorn Lodge</li>
            <li>Ceiling resurfacing Sheridan bungalows before listing</li>
            <li>Pot light + Level 5 combo for Royal Windsor / Winston Churchill splits</li>
          </ul>
          <div className="mt-6 p-4 rounded-2xl bg-white shadow">
            <p className="text-sm text-gray-600">
              Need a lofted foyer or skylight return smoothed? We bring engineered planks and guardrails so the job staying on schedule never compromises safety.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-12">
        <h2 className="text-3xl font-bold text-center">
          Sheridan-focused ceiling services
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Popcorn ceiling removal Sheridan",
              copy: "Protect, test, remove or encapsulate, Level 5 skim, prime, and paint-ready handoff.",
            },
            {
              title: "Smooth ceiling contractor Sheridan",
              copy: "Coordinated pot light rings, bulkhead blending, stairwell staging, and trim-ready finishes.",
            },
            {
              title: "Ceiling texture removal Sheridan",
              copy: "Stipple, stucco, or swirls eliminated across bungalows and two-storey foyers with HEPA dust control.",
            },
          ].map((svc) => (
            <div key={svc.title} className="p-6 rounded-3xl bg-white shadow border border-slate-100">
              <h3 className="text-xl font-semibold">{svc.title}</h3>
              <p className="mt-2 text-gray-700">{svc.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-12 rounded-3xl bg-slate-900 text-white p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Pricing & schedule</p>
            <h2 className="text-3xl font-bold mt-2">Sheridan popcorn ceiling removal cost range</h2>
            <p className="mt-4 text-slate-200">
              Unpainted popcorn: $6–$7/sq ft. Painted or stubborn stipple needing encapsulation + Level 5 skim: $8–$9/sq ft. Includes protection, HEPA dust control, skim, stain-block primer, and tidy wrap-ups.
            </p>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>✅ 2–3 days for main floors (room-by-room)
</li>
              <li>✅ Two-storey foyers scheduled around daylight and quiet hours</li>
              <li>✅ Written scope + punch list before final payment</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Method", "Controlled scrape or encapsulate"],
              ["Finish", "Level 5 + stain-block primer"],
              ["Warranty", "3 years workmanship"],
              ["Access", "Stair/foyer staging included"],
            ].map(([label, value]) => (
              <div key={label} className="p-4 rounded-2xl bg-white/10 border border-white/20">
                <p className="text-xs uppercase tracking-wide text-indigo-200">{label}</p>
                <p className="text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-cta bg-white text-slate-900" href="/quote/">
            Get estimate
          </a>
          <a className="btn-cta border border-white/40 text-white" href={phoneHref}>
            Call {phoneDisplay}
          </a>
          <p className="text-sm text-slate-300">
            Includes protection, HEPA dust control, Level 5 skim, primer.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-12">
        <h2 className="text-3xl font-bold text-center">Recent Sheridan projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Sheridan Homelands main floor",
              location:
                "Homelands Dr crescent",
              scope:
                "Encapsulate painted popcorn, Level 5 skim, prime, painter hand-off",
              duration: "3 days",
              result: "Open plan reads flat under new LED pot lights",
            },
            {
              title: "Split near Erin Mills Pkwy",
              location:
                "South Common area",
              scope:
                "Controlled scrape, ceiling resurfacing Sheridan stair + hallway",
              duration: "2.5 days",
              result: "No seam shadows down long hallway sightline",
            },
            {
              title: "Credit Woodland bungalow",
              location: "Liruma Rd pocket",
              scope: "Stipple removal, Level 5, stain-block primer, paint",
              duration: "3 days",
              result: "Bright, modern ceiling ahead of listing",
            },
          ].map((proj) => (
            <div key={proj.title} className="p-6 bg-white rounded-3xl border">
              <p className="text-sm text-indigo-600 uppercase tracking-wide">
                {proj.location}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{proj.title}</h3>
              <p className="mt-3 text-gray-700">
                <strong>Scope:</strong> {proj.scope}
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {proj.duration}
              </p>
              <p className="text-gray-700">
                <strong>Result:</strong> {proj.result}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL RESOURCES */}
      <section id="resources" className="mt-12 bg-gradient-to-r from-purple-50 via-white to-blue-50 p-8 rounded-3xl">
        <h2 className="text-3xl font-bold text-center">Sheridan local resources</h2>
        <p className="mt-2 text-center text-gray-600">
          Handy references we coordinate with around Sheridan Centre, Erin Mills Pkwy, and Winston Churchill Blvd.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-3xl border">
            <h3 className="text-xl font-semibold">Paint & supply counters</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Benjamin Moore — Southdown Rd (colour matches for Level 5 ceilings)</li>
              <li>Sherwin-Williams — Dundas & Erin Mills</li>
              <li>Home Depot — Winston Churchill & QEW for staging supplies</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-3xl border">
            <h3 className="text-xl font-semibold">Permits & waste</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>City of Mississauga building counter for interior clarification</li>
              <li>Peel Community Recycling Centre (Mavis Rd) for drywall/textured waste</li>
              <li>Household hazardous waste drop-off for primer and mud pails</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-12">
        <h2 className="text-3xl font-bold text-center">Sheridan FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Can you work in stages so rooms stay available?",
              a: "Yes. Popcorn ceiling removal Sheridan projects run room-by-room so kitchens, bedrooms, and stairs remain accessible.",
            },
            {
              q: "Do you handle painted popcorn ceiling removal Sheridan homes have?",
              a: "Absolutely. We test adhesion and choose scrape vs encapsulate to protect drywall before Level 5 skimming.",
            },
            {
              q: "What finish do we get?",
              a: "A true Level 5 smooth ceiling contractor Sheridan homeowners can trust: skim, sand, raking-light inspection, stain-block primer.",
            },
            {
              q: "Can you include pot-light coordination?",
              a: "Yes. We sync with your electrician, feather rings, and keep trims from flashing.",
            },
          ].map((faq) => (
            <details key={faq.q} className="p-6 bg-white rounded-3xl border">
              <summary className="font-semibold text-lg">{faq.q}</summary>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SEARCH TERMS */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Searches we match</h2>
        <p className="mt-2 text-gray-700">
          popcorn ceiling removal Sheridan • popcorn ceiling removal Sheridan Homelands • popcorn ceiling removal service Sheridan • popcorn ceiling removal contractor Sheridan • professional popcorn ceiling removal Sheridan • smooth ceiling contractor Sheridan • ceiling texture removal Sheridan • stipple ceiling removal Sheridan • ceiling resurfacing Sheridan • local terms like "popcorn removal Sheridan" "scraping popcorn ceiling Sheridan" "take out popcorn ceiling Sheridan" "painted popcorn ceiling removal Sheridan" (used lightly so we don’t compete with the city hub)
        </p>
      </section>

      {/* NEARBY AREAS */}
      <section id="neighbourhoods" className="mt-12">
        <h2 className="text-3xl font-bold text-center">Neighbourhood links</h2>
        <p className="mt-2 text-center text-gray-600">
          Check the Mississauga hub or nearby routes, then loop back when you’re ready for Sheridan.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/popcorn-ceiling-removal/mississauga/"
            className="p-6 rounded-3xl bg-white border hover:shadow"
          >
            ← Mississauga popcorn ceiling removal overview
          </Link>
          <Link
            href="/popcorn-ceiling-removal/mississauga/clarkson/"
            className="p-6 rounded-3xl bg-white border hover:shadow"
          >
            Clarkson popcorn ceiling removal →
          </Link>
          <Link
            href="/popcorn-ceiling-removal/mississauga/erin-mills/"
            className="p-6 rounded-3xl bg-white border hover:shadow"
          >
            Erin Mills smooth ceiling projects →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">
            Ready to smooth your Sheridan ceilings?
          </h3>
          <p className="text-white/80">
            Send photos, get a clear plan, and relax while our Sheridan crew transforms your ceiling.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta bg-white text-indigo-600" href={phoneHref}>
            📞 {phoneDisplay}
          </a>
          <a className="btn-cta border border-white/60" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* Bottom links */}
      <nav className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link href="/popcorn-ceiling-removal/mississauga/" className="underline">
          ← Popcorn ceiling removal Mississauga
        </Link>
        <Link href="/popcorn-ceiling-removal/" className="underline">
          Popcorn ceiling removal service areas →
        </Link>
        <Link href="/services/popcorn-ceiling-removal/" className="underline">
          Popcorn ceiling removal services →
        </Link>
      </nav>
    </div>
  );
}
