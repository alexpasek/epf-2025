import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title:
    "Hurontario Popcorn Ceiling Removal | Level 5 Smooth Ceilings + HEPA Dust Control",
  description:
    "Popcorn ceiling removal Hurontario homeowners rely on: dust-contained workflow, Level 5 skim coat, stain-block primer, and quick wrap-ups near Hurontario, Mississauga.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/hurontario/",
  },
  openGraph: {
    title: "Hurontario Popcorn Ceiling Removal | Level 5 Finish",
    description:
      "Professional popcorn ceiling removal service Hurontario corridor: HEPA containment, Level 5 skims, stain-block primer, fast photo quotes.",
    url: "/popcorn-ceiling-removal/mississauga/hurontario/",
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
        name: "Hurontario Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Hurontario, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/hurontario/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Popcorn Ceiling Removal",
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hurontario",
            item: "/popcorn-ceiling-removal/mississauga/hurontario/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast do you quote Hurontario popcorn ceilings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Send photos for a same-day popcorn ceiling removal Hurontario estimate. We confirm square footage on site before work begins.",
            },
          },
          {
            "@type": "Question",
            name: "Do you control dust inside condos and townhomes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We seal rooms, mask vents, use HEPA sanders and negative air when needed so hallways stay clean.",
            },
          },
          {
            "@type": "Question",
            name: "What finish do Hurontario projects receive?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every job includes a Level 5 skim, raking-light inspection, and stain-block primer so ceilings are paint-ready.",
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
        <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(15,23,42,0.45)]">
          <div className="absolute -top-24 -left-16 w-72 h-72 bg-purple-500/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -right-20 w-80 h-80 bg-indigo-500/30 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0">
            <img
              src="/services/popcorn-ceiling-removal/5.webp"
              alt="Crew sanding a popcorn ceiling in Hurontario"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-indigo-900/85 to-slate-800/85" />
          <div className="relative grid gap-10 p-10 lg:grid-cols-[1.15fr,0.85fr] text-white">
            <div>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.35em] text-white/70">
                <span className="px-3 py-1 rounded-full border border-white/30 bg-white/5">
                  Hurontario • Mississauga
                </span>
                <span className="px-3 py-1 rounded-full border border-white/30 bg-white/5">
                  Popcorn removal experts
                </span>
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                Popcorn ceiling removal Hurontario condos, semis, detached +
                townhomes
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Professional popcorn ceiling removal Hurontario homeowners rely
                on—HEPA containment, Level 5 skim coat, stain-block primer, and
                tidy wrap-ups that fit Square One and Hazel McCallion LRT
                schedules.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={phoneHref}
                  className="btn-cta bg-white text-slate-900 shadow-lg"
                >
                  📞 {phoneDisplay}
                </a>
                <a
                  href="/quote/"
                  className="btn-cta border border-white/60 bg-white/5 text-white hover:bg-white/10"
                >
                  Get my quote
                </a>
                <p className="text-sm text-white/70">
                  Fast photo estimate • 3-year workmanship warranty
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 text-slate-900 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 right-8 w-44 h-44 bg-gradient-to-br from-indigo-300/50 to-purple-200/40 blur-3xl" />
                <div className="absolute -bottom-20 left-6 w-56 h-56 bg-gradient-to-tr from-purple-400/30 to-slate-200/40 blur-[120px]" />
              </div>
              <div className="relative mb-5 rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 text-white shadow-[0_20px_45px_rgba(79,70,229,0.35)]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">
                  Popcorn ceiling removal contractor Hurontario
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  HEPA sanders • Level 5 skim • Local crew
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  Focused on condos, semis, and townhomes near Square One &
                  Britannia.
                </p>
              </div>
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-semibold">
                  Popcorn ceiling removal quote
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Tell us about your Hurontario ceilings
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Condos near Hurontario & Burnhamthorpe, townhomes off Bristol,
                  and detached homes by Matheson all qualify.
                </p>
                <QuoteForm />
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>
                    ✅ 2–3 day main floors run room-by-room with HEPA
                    containment
                  </li>
                  <li>
                    ✅ Controlled scrape or encapsulate + Level 5 skim depending
                    on texture build-up
                  </li>
                  <li>
                    ✅ Familiar with elevator bookings around Square One and
                    Britannia
                  </li>
                </ul>
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
            ["#resources", "Resources"],
            ["#faq", "FAQ"],
            ["#keywords", "Searches"],
            ["#neighbourhoods", "Nearby"],
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
      <section
        id="why"
        className="mt-12 py-12 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Why Hurontario homeowners choose our crew
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Transit-friendly staging",
                copy: "Square One condos and Hazel McCallion LRT sites get quiet-hour compliance, elevator bookings, and hallway protection.",
              },
              {
                title: "Level 5 guarantee",
                copy: "Every popcorn ceiling removal service Hurontario residents book includes HEPA sanding and a true Level 5 skim.",
              },
              {
                title: "Daily wrap-ups",
                copy: "Townhomes and semis near Britannia Rd stay livable with containment, negative air options, and tidy evenings.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
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
          <div key={src} className="rounded-3xl overflow-hidden shadow">
            <img
              src={src}
              alt={`Hurontario popcorn ceiling removal project ${i + 1}`}
              className="h-56 w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* LOCAL INSIGHT */}
      <section
        id="local"
        className="mt-12 grid gap-8 lg:grid-cols-[1.15fr,0.85fr]"
      >
        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow">
          <h2 className="text-3xl font-bold">Hurontario-specific insight</h2>
          <p className="mt-4 text-gray-700">
            Popcorn ceiling contractor Hurontario teams handle tower suites
            along Hurontario & Burnhamthorpe, stacked towns near Bristol, and
            semis by Matheson. Painted stipple often hides telecom or pot-light
            patches, so we test, choose controlled scrape or encapsulate, then
            skim to Level 5 so corridor light and skyline windows don’t
            telegraph seams.
          </p>
          <p className="mt-4 text-gray-700">
            Condos demand precise elevator timing. We load in once, stage
            materials inside, and keep crews compact so neighbours and property
            managers stay happy.
          </p>
          <p className="mt-4 text-gray-700">
            Need painting, pot lights, or drywall fixes? Our popcorn ceiling
            removal contractor Hurontario lead coordinates those trades so you
            have one point of contact.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-50 to-white border border-indigo-100">
          <h3 className="text-xl font-semibold">Common requests</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Popcorn ceiling removal Hurontario condos before move-in</li>
            <li>
              Smooth ceiling contractor Hurontario townhomes off Bristol Rd
            </li>
            <li>Ceiling texture removal Hurontario semis near Britannia Rd</li>
            <li>Stipple ceiling removal Hurontario basements with low beams</li>
          </ul>
          <div className="mt-6 p-4 rounded-2xl bg-white shadow">
            <p className="text-sm text-gray-600">
              Working with telecom closets or server nooks? We isolate noise
              windows and keep gear away from sensitive equipment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-12">
        <h2 className="text-3xl font-bold text-center">
          Hurontario ceiling services
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Popcorn ceiling removal service Hurontario",
              copy: "Protect, test, remove or encapsulate, skim Level 5, and stain-block prime.",
            },
            {
              title: "Popcorn ceiling removal contractor Hurontario",
              copy: "Elevator bookings, condo board compliance, pot-light coordination, and quick wrap-ups.",
            },
            {
              title: "Ceiling resurfacing Hurontario",
              copy: "Smooth ceiling contractor Hurontario workflows for stairs, lofts, and basements.",
            },
          ].map((svc) => (
            <div
              key={svc.title}
              className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{svc.title}</h3>
              <p className="mt-2 text-gray-700">{svc.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="mt-12 rounded-3xl bg-slate-900 text-white p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">
              Pricing & schedule
            </p>
            <h2 className="text-3xl font-bold mt-2">
              Popcorn ceiling removal cost Hurontario homeowners expect
            </h2>
            <p className="mt-4 text-slate-200">
              Popcorn removal cost Hurontario projects starts around $6–$7/sq ft
              when texture isn’t painted. Heavily painted or condo stipple that
              we encapsulate before Level 5 skimming runs $8–$9/sq ft. That
              includes protection, HEPA dust control, skim coat, and primer.
            </p>
            <p className="mt-3 text-slate-200">
              Popcorn ceiling removal cost Hurontario condos may vary with
              elevator bookings, while the cost to scrape popcorn ceiling
              Hurontario semis usually falls in the mid-range once we confirm
              ceiling height and repairs.
            </p>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>✅ 2–3 day main floors, room-by-room</li>
              <li>✅ Elevator-friendly load-ins for tower suites</li>
              <li>✅ Written scope, punch list, and warranty at handoff</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Method", "Scrape or encapsulate + Level 5"],
              ["Finish", "Stain-block primer paint-ready"],
              ["Warranty", "3 years workmanship"],
              ["Access", "Stair/foyer staging included"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="p-4 rounded-2xl bg-white/10 border border-white/20"
              >
                <p className="text-xs uppercase tracking-wide text-indigo-200">
                  {label}
                </p>
                <p className="text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-cta bg-white text-slate-900" href="/quote/">
            Get estimate
          </a>
          <a
            className="btn-cta border border-white/40 text-white"
            href={phoneHref}
          >
            Call {phoneDisplay}
          </a>
          <p className="text-sm text-slate-300">
            Includes protection, HEPA dust control, Level 5 skim, primer.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-12">
        <h2 className="text-3xl font-bold text-center">
          Recent Hurontario projects
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Square One condo reno",
              near: "Hurontario & Burnhamthorpe",
              scope:
                "Popcorn ceiling removal Hurontario condo, Level 5 skim, stain-block prime, paint",
              duration: "3 days",
              outcome: "Smooth ceilings even with wall-to-wall glazing",
            },
            {
              title: "Townhome off Bristol",
              near: "Bristol Rd corridor",
              scope:
                "Stipple ceiling removal Hurontario main floor + stairwell",
              duration: "2.5 days",
              outcome: "Pot lights blended, zero seam shadowing",
            },
            {
              title: "Detached near Matheson",
              near: "Matheson Blvd East",
              scope:
                "Ceiling texture removal Hurontario bungalow, encapsulate + Level 5",
              duration: "3 days",
              outcome: "Bright, even ceilings for sale-ready finish",
            },
          ].map((proj) => (
            <div key={proj.title} className="p-6 bg-white rounded-3xl border">
              <p className="text-sm uppercase tracking-wide text-indigo-600">
                {proj.near}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{proj.title}</h3>
              <p className="mt-3 text-gray-700">
                <strong>Scope:</strong> {proj.scope}
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> {proj.duration}
              </p>
              <p className="text-gray-700">
                <strong>Result:</strong> {proj.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section
        id="resources"
        className="mt-12 bg-gradient-to-r from-blue-50 via-white to-purple-50 p-8 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-center">
          Hurontario local resources
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-3xl border">
            <h3 className="text-xl font-semibold">Paint & supplies</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Sherwin-Williams — Hurontario & Eglinton (colour matches)</li>
              <li>Benjamin Moore — Central Parkway</li>
              <li>Home Depot — Heartland Town Centre for staging gear</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-3xl border">
            <h3 className="text-xl font-semibold">Permits & disposal</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                City of Mississauga building counter for interior clarifications
              </li>
              <li>
                Peel Community Recycling Centre (Mavis Rd) for drywall/textured
                waste
              </li>
              <li>
                Hazardous waste drop-off (Fewster Dr) for primer/mud pails
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-12">
        <h2 className="text-3xl font-bold text-center">Hurontario FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Can you keep elevators and hallways clean?",
              a: "Yes. We book elevators, cover walls, and run tack mats so shared areas stay spotless.",
            },
            {
              q: "Do you handle painted popcorn ceiling removal Hurontario homes have?",
              a: "Absolutely. We test adhesion, encapsulate when needed, and skim to Level 5 before priming.",
            },
            {
              q: "What about pot lights?",
              a: "We coordinate with your electrician, feather rings, and keep trims flush.",
            },
            {
              q: "Is there a warranty?",
              a: "Yes—3-year workmanship plus WSIB and liability coverage.",
            },
          ].map((faq) => (
            <details key={faq.q} className="p-6 bg-white rounded-3xl border">
              <summary className="font-semibold text-lg">{faq.q}</summary>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "What is the popcorn ceiling removal cost Hurontario owners should budget?",
              a: "Most homes fall within $6–$9 per sq ft depending on paint layers, access, and whether we encapsulate before skimming.",
            },
            {
              q: "Can you help with asbestos testing?",
              a: "If your ceiling predates 1980 we can refer local labs before we begin professional popcorn ceiling removal Hurontario projects.",
            },
            {
              q: "Do you work evenings or weekends?",
              a: "We schedule around condo quiet hours and can stage evening wrap-ups so families keep routines.",
            },
            {
              q: "Can basements with low beams get smooth ceilings?",
              a: "Yes. Our ceiling resurfacing Hurontario team uses slim sanders, encapsulates when needed, and keeps ventilation moving.",
            },
          ].map((faq) => (
            <details key={faq.q} className="p-6 bg-white rounded-3xl border">
              <summary className="font-semibold text-lg">{faq.q}</summary>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* KEYWORDS */}
      <section id="keywords" className="mt-12">
        <h2 className="text-2xl font-semibold">
          Searches we hear in Hurontario
        </h2>
        <p className="mt-2 text-gray-700">
          popcorn ceiling removal Hurontario • popcorn ceiling contractor
          Hurontario • popcorn ceiling removal contractor Hurontario •
          professional popcorn ceiling removal Hurontario • popcorn ceiling
          removal service Hurontario • smooth ceiling contractor Hurontario •
          ceiling texture removal Hurontario • stipple ceiling removal
          Hurontario • ceiling resurfacing Hurontario. Light mentions kept here
          only: popcorn ceiling Hurontario • popcorn removal Hurontario •
          scraping popcorn ceiling Hurontario • stripping popcorn ceiling
          Hurontario • taking off popcorn ceiling Hurontario • taking down
          popcorn ceiling Hurontario • take out popcorn ceiling Hurontario • get
          rid of popcorn ceiling Hurontario • removing stucco ceiling Hurontario
          • stucco ceiling removal Hurontario • cottage cheese ceiling removal
          Hurontario • painted popcorn ceiling removal Hurontario.
        </p>
      </section>

      {/* NEIGHBOURHOODS */}
      <section id="neighbourhoods" className="mt-12">
        <h2 className="text-3xl font-bold text-center">
          Explore Nearby Mississauga Neighborhoods
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Professional popcorn ceiling removal across Mississauga. Compare
          nearby areas and services.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/popcorn-ceiling-removal/mississauga/"
            className="p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="font-bold text-lg text-teal-600">
              ← Popcorn ceiling removal in Mississauga
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              View all neighborhoods and citywide services
            </p>
          </Link>
          <Link
            href="/popcorn-ceiling-removal/mississauga/city-centre/"
            className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="font-bold text-lg">City Centre</h3>
            <p className="text-sm text-gray-600 mt-2">
              Downtown condos & high-rise popcorn removal
            </p>
          </Link>
          <Link
            href="/popcorn-ceiling-removal/mississauga/cooksville/"
            className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="font-bold text-lg">Cooksville</h3>
            <p className="text-sm text-gray-600 mt-2">
              Residential homes & townhome ceiling updates
            </p>
          </Link>
          <Link
            href="/popcorn-ceiling-removal/mississauga/erin-mills/"
            className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="font-bold text-lg">Erin Mills</h3>
            <p className="text-sm text-gray-600 mt-2">
              Family homes with Level 5 smooth finishes
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-black">
              Ready for Professional Popcorn Ceiling Removal in Hurontario?
            </h3>
            <p className="text-xl text-white/90 mt-2">
              Send photos, choose dates, and let our smooth ceiling contractor
              Hurontario team handle the mess.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center px-8 py-5 bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105"
              href={phoneHref}
            >
              📞 {phoneDisplay}
            </a>
            <a
              className="inline-flex items-center justify-center px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105"
              href="/quote/"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Navigation with SEO Links */}
      <section className="py-8 bg-gray-50 rounded-3xl mt-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            className="flex flex-wrap gap-4 text-sm justify-center"
            aria-label="Related pages"
          >
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              ← Mississauga popcorn ceiling removal services
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/popcorn-ceiling-removal/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              All GTA service areas
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/services/popcorn-ceiling-removal/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              Service details & process →
            </Link>
          </nav>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-teal-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a
            href={phoneHref}
            className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            📞 Call
          </a>
          <a
            href="/quote/"
            className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            Quote
          </a>
        </div>
      </div>
    </div>
  );
}
