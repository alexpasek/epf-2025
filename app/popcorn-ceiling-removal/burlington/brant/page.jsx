import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Brant";
const SLUG = "brant";
const CITY_BASE = "/popcorn-ceiling-removal/burlington";

export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Waterfront Level 5 Finish`,
  description:
    "Popcorn ceiling removal Brant homeowners trust for downtown condos and waterfront semis. Containment-first workflow, Level 5 skim, HEPA sanding, primer + optional paint.",
  keywords: [
    "popcorn ceiling removal Brant",
    "popcorn ceiling contractor Brant",
    "popcorn ceiling removal contractor Brant",
    "professional popcorn ceiling removal Brant",
    "popcorn ceiling removal service Brant",
    "smooth ceiling contractor Brant",
    "ceiling texture removal Brant",
    "stipple ceiling removal Brant",
    "ceiling resurfacing Brant",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Downtown Burlington specialists: sealed rooms, Level 5 skim, pot-light coordination and bright finishes for Brant Street homes & condos.",
    url: `${CITY_BASE}/${SLUG}/`,
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
          "Ceiling Resurfacing",
          "Level 5 Skim Coat",
        ],
        areaServed: `${NAME}, Burlington`,
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
            item: { "@id": "https://epfproservices.com/service-areas" },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: { "@id": "https://epfproservices.com/services/popcorn-ceiling-removal/" },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Burlington",
            item: { "@id": `https://epfproservices.com${CITY_BASE}/` },
          },
          {
            "@type": "ListItem",
            position: 4,
            name: NAME,
            item: { "@id": `https://epfproservices.com${CITY_BASE}/${SLUG}/` },
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
    <div className="container-x mx-auto px-4 py-12 space-y-12">
      <JsonLd />

      {/* HERO */}
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl ring-1 ring-slate-700/40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] p-8 md:p-12 relative">
          <div className="relative z-10 space-y-5">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-300">
              Burlington • {NAME}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Smooth ceilings for downtown Brant Street homes & condos
            </h1>
            <p className="text-lg text-slate-200">
              Our <strong>popcorn ceiling removal Brant</strong> crew handles
              lake-facing condos, heritage semis, and boutique infill near
              Spencer Smith Park. As the{" "}
              <strong>popcorn ceiling contractor Brant</strong> residents call
              first, we seal rooms, run HEPA extraction, and deliver{" "}
              <strong>professional popcorn ceiling removal Brant</strong>{" "}
              projects that can stand up to waterfront light.
            </p>
            <p className="text-lg text-slate-200">
              Whether you need a{" "}
              <strong>popcorn ceiling removal contractor Brant</strong> can
              trust for fast condo turnarounds or a{" "}
              <strong>popcorn ceiling removal service Brant</strong> homeowners
              use during renovations, we keep foyers, elevators, and Brant St
              parking clean. Pair it with a{" "}
              <strong>smooth ceiling contractor Brant</strong> electricians
              recommend, plus <strong>ceiling texture removal Brant</strong>,
              <strong> stipple ceiling removal Brant</strong>, and{" "}
              <strong>ceiling resurfacing Brant</strong> finishing for pot-light
              grids.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-slate-200">
              {[
                "Waterfront condos + heritage semis",
                "Level 5 skim for pot-light grids",
                "HEPA containment for live-in projects",
                "Stain-block primer + optional paint",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-2xl bg-white/10 px-4 py-3"
                >
                  <span>✨</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href={phoneHref} className="btn-cta">
                📞 (647) 923-6784
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Send project photos →
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 text-slate-200">
              {[
                ["HEPA-contained", "Dust control you can live through"],
                ["Level 5 skim", "Perfect read in raking daylight"],
                ["Warranty", "Insured crews + written coverage"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 px-4 py-3 bg-white/5"
                >
                  <p className="text-sm uppercase tracking-wide text-slate-300">
                    {title}
                  </p>
                  <p className="text-base font-semibold">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 rounded-3xl bg-white text-slate-900 p-6 shadow-2xl">
            <h2 className="text-xl font-semibold">
              Request your Brant ceiling quote
            </h2>
            <p className="text-sm text-slate-500">
              Share ceiling sizes, paint build-up notes, and condo logistics for
              a same-day scope.
            </p>
            <div className="mt-4">
              <QuoteForm />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* SUB NAV */}
      <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
        {[
          ["#signals", "Why us"],
          ["#workflow", "Process"],
          ["#local", "Local details"],
          ["#gallery", "Gallery"],
          ["#pricing", "Pricing"],
          ["#cost", "Cost"],
          ["#searches", "Search trends"],
          ["#prep", "Prep"],
          ["#city-hub", "Burlington hub"],
          ["#faq", "FAQ"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="underline-offset-2 hover:underline"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* SIGNALS */}
      <section id="signals" className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold">
            Why {NAME} homeowners choose us
          </h2>
          <div className="flex gap-3 text-sm text-slate-500">
            <span>Brant St • Lakeshore • Spencer Smith Park</span>
            <span className="hidden sm:inline">|</span>
            <span>Condos + heritage semis</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Raking light approved",
              body: "Ceiling texture removal Brant projects need Level 5 skim because lake-facing daylight exposes every ripple. We skim entire planes so long sightlines stay perfect.",
            },
            {
              title: "Stipple removal for plaster ceilings",
              body: "Stipple ceiling removal Brant semis often mix drywall + plaster. We blend transitions, patch cracks, and keep trim lines crisp for heritage homes.",
            },
            {
              title: "Pot-light & speaker integrations",
              body: "Ceiling resurfacing Brant condos include pot-light grids, HVAC registers, and speakers. We coordinate electricians, cut openings, and feather around trims.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-slate-600">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8"
      >
        <h2 className="text-3xl font-semibold">Brant workflow</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3 text-slate-700">
          {[
            [
              "01. Containment",
              "Protect elevators or stair treads, seal rooms, mask HVAC, and set up HEPA dust extraction.",
            ],
            [
              "02. Level 5 skim",
              "Controlled scrape or encapsulation, then full-field skim with extra passes at beams, coffers, and soffits.",
            ],
            [
              "03. Prime + finish",
              "HEPA sanding, raking-light touch-ups, stain-block primer, and optional finish coats before handover.",
            ],
          ].map(([title, copy]) => (
            <li key={title} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* LOCAL DETAILS */}
      <section id="local" className="space-y-4">
        <h2 className="text-3xl font-semibold">
          Downtown logistics + neighbours
        </h2>
        <p className="text-slate-600 max-w-4xl">
          Working near Brant St, Lakeshore, and the waterfront requires careful
          staging. We book elevators, protect lobbies, and schedule around pier
          events so buildings stay happy. For detached homes south of Ghent or
          near Mapleview, we keep driveways clear and wrap each day before
          commuters return.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              href: `${CITY_BASE}/maple/`,
              anchor: "Maple waterfront ceiling projects",
              body: "Condos + townhomes west of Brant St.",
            },
            {
              href: `${CITY_BASE}/roseland/`,
              anchor: "Roseland smooth ceiling renovations",
              body: "Heritage homes south of Lakeshore.",
            },
            {
              href: `${CITY_BASE}/shoreacres/`,
              anchor: "Shoreacres popcorn removal case studies",
              body: "Lakefront estates with long sightlines.",
            },
          ].map((card) => (
            <Link
              key={card.anchor}
              href={card.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-slate-900">
                {card.anchor}
              </p>
              <p className="text-sm text-slate-600">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold">Project gallery</h2>
          <Link
            href="/our-work/"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View our work →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <figure
              key={src}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
            >
              <img
                src={src}
                alt={`${NAME} popcorn ceiling project ${i + 1}`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-sm text-slate-600">
                Downtown ceilings finished to Level 5 with HEPA containment.
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Transparent Pricing & Packages
          </h2>
          <p className="text-gray-600 mt-2">
            Clear scope, no surprises, written warranty included
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full filter blur-2xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Popular Scopes
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span>Waterfront condo ceilings ready in 2–3 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span>Heritage semis with plaster/drywall transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span>Live/work lofts with exposed beams + pot lights</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full filter blur-2xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Price Factors
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">•</span>
                  <span>
                    <strong>Square footage</strong> + ceiling height
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">•</span>
                  <span>
                    <strong>Paint build-up</strong> (scrape vs skim)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">•</span>
                  <span>
                    <strong>Fixture counts</strong> + access logistics
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white/60 rounded-xl border border-indigo-200">
                <p className="text-xs text-gray-600">
                  Share photos & room sizes for same-day pricing
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full filter blur-2xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Add-On Services
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">+</span>
                  <span>
                    <strong>Primer</strong> + low-odour finish paint
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">+</span>
                  <span>
                    <strong>Pot-light / speaker</strong> cutout coordination
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">+</span>
                  <span>
                    <strong>Wall touch-ups</strong> around bulkheads or beams
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wider text-blue-300 font-semibold">
                💎 What's Included
              </p>
              <h3 className="text-2xl font-bold mt-1">
                Every Project Includes
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                ✓ HEPA Dust Control
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                ✓ Full Protection
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                ✓ Level 5 Finish
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                ✓ 3-Year Warranty
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST SECTION */}
      <section
        id="cost"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3"
      >
        <h2 className="text-2xl font-semibold">
          Popcorn ceiling removal cost in {NAME}
        </h2>
        <p className="text-slate-700">
          The <strong>popcorn ceiling removal cost Brant</strong> homeowners see
          on our quotes reflects texture type, ceiling height, fixture counts,
          and whether we can scrape or need to encapsulate before skim.
        </p>
        <p className="text-slate-700">
          We outline each line item so you know where the{" "}
          <strong>popcorn removal cost Brant</strong> projects come from—
          protection, Level 5 skim, primer, optional paint, and logistics for
          condos or narrow driveways.
        </p>
        <p className="text-slate-700">
          Comparing methods? We’ll show you the{" "}
          <strong>cost to scrape popcorn ceiling Brant</strong> rooms where
          texture still releases, next to resurfacing totals for painted
          ceilings, so you can choose with confidence.
        </p>
        <p className="text-sm text-slate-500">
          Share photos + rough sizes for a same-day cost range. We finalize
          numbers after a quick walkthrough.
        </p>
      </section>

      {/* SEARCHES */}
      <section
        id="searches"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-2xl font-semibold">
          Searches we hear from Brant homeowners
        </h2>
        <p className="text-sm text-slate-500">
          If you typed one of these into Google, you’re in the right place.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
          {[
            "popcorn ceiling Brant",
            "popcorn removal Brant",
            "scraping popcorn ceiling Brant",
            "stripping popcorn ceiling Brant",
            "taking off popcorn ceiling Brant",
            "taking down popcorn ceiling Brant",
            "take out popcorn ceiling Brant",
            "get rid of popcorn ceiling Brant",
            "removing stucco ceiling Brant",
            "stucco ceiling removal Brant",
            "cottage cheese ceiling removal Brant",
            "painted popcorn ceiling removal Brant",
          ].map((term) => (
            <li
              key={term}
              className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              “{term}”
            </li>
          ))}
        </ul>
      </section>

      {/* PREP */}
      <section id="prep" className="space-y-4">
        <h2 className="text-3xl font-semibold">Prep & expectations</h2>
        <ul className="grid gap-3 md:grid-cols-2 text-slate-700">
          {[
            "Clear décor + electronics; we handle floor/wall protection.",
            "Condo elevator pads + hallway runners installed before we start.",
            "Low-odour products with ventilation notes each evening.",
            "Insurance + 3-year workmanship warranty included in your quote.",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CITY HUB */}
      <section
        id="city-hub"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3"
      >
        <h2 className="text-2xl font-semibold">
          Explore the Burlington service hub
        </h2>
        <p className="text-slate-600 max-w-3xl">
          Need a different neighbourhood? Our Burlington hub lists every area,
          timelines, and booking steps for multi-property owners.
        </p>
        <Link
          href={`${CITY_BASE}/`}
          className="inline-flex items-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:border-blue-400 hover:text-blue-600 transition"
        >
          Burlington popcorn ceiling removal services →
        </Link>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-4">
        <h2 className="text-3xl font-semibold">{NAME} FAQ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "How fast can you finish a Brant Street condo?",
              a: "Most condos are 2–3 days including skim, HEPA sanding, primer, and optional paint. We schedule around elevator windows to stay efficient.",
            },
            {
              q: "Do you coordinate with property managers?",
              a: "Yes. We handle insurance certificates, elevator bookings, and hallway protection so management stays happy.",
            },
            {
              q: "Can families stay home during ceiling resurfacing?",
              a: "Absolutely. We seal rooms, keep pathways tidy, and send a photo recap each day so you know when spaces are usable.",
            },
            {
              q: "Do you work nights or weekends?",
              a: "We can adjust for quiet-hour rules near the pier or for retail spaces along Brant Street—just mention it during quoting.",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="font-semibold text-slate-900">
                {faq.q}
              </summary>
              <p className="mt-2 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 text-white p-8 shadow-2xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            Ready when you are
          </p>
          <h3 className="mt-2 text-3xl font-semibold">
            Book your Brant popcorn ceiling removal
          </h3>
          <p className="text-white/80">
            Share photos for a same-day quote, schedule around waterfront
            events, and enjoy a smooth ceiling that matches your renovation.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden">
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
