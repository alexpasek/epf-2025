import Link from "next/link";
import { CONTACT } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Hamilton";
const SERVICE = "Drywall Installation";
const SLUG = "/services/drywall-installation/hamilton/";

const CORE_KEYWORDS = [
  "drywall installation Hamilton",
  "drywall installation services Hamilton",
  "drywall installation contractor Hamilton",
  "drywall contractors for installation Hamilton",
  "new drywall installation Hamilton",
];

const HANGING_KEYWORDS = [
  "drywall hanging Hamilton",
  "hang drywall Hamilton",
  "drywall board installation Hamilton",
  "sheetrock installation Hamilton",
  "gypsum board installation Hamilton",
];

const REBUILD_KEYWORDS = [
  "drywall replacement Hamilton",
  "remove and replace drywall Hamilton",
  "new drywall for renovation Hamilton",
  "drywall installation after demolition Hamilton",
  "drywall installation after water damage Hamilton",
];

const PROJECT_KEYWORDS = [
  "basement drywall installation Hamilton",
  "ceiling drywall installation Hamilton",
  "drywall installation for additions Hamilton",
  "drywall installation for commercial buildouts Hamilton",
];

const FINISH_KEYWORDS = [
  "drywall finishing Hamilton",
  "drywall taping and mudding Hamilton",
  "drywall sanding Hamilton",
  "level 4 finish Hamilton",
  "level 5 finish Hamilton",
  "skim coat Hamilton",
];

const AUDIENCE_KEYWORDS = [
  "residential drywall installation Hamilton",
  "commercial drywall installation Hamilton",
  "condo drywall installation Hamilton",
];

const KEYWORDS = [
  ...CORE_KEYWORDS,
  ...HANGING_KEYWORDS,
  ...REBUILD_KEYWORDS,
  ...PROJECT_KEYWORDS,
  ...FINISH_KEYWORDS,
  ...AUDIENCE_KEYWORDS,
];

const FAQS = [
  {
    q: "Do you handle both industrial and residential drywall in Hamilton?",
    a: "Yes. Our drywall contractors for installation Hamilton run separate crews for industrial loft conversions, downtown condo drywall installation Hamilton, and suburban custom homes. Each quote lists manpower, staging areas, and site-specific safety requirements.",
  },
  {
    q: "How fast can you mobilize for drywall replacement Hamilton?",
    a: "Emergency remove and replace drywall Hamilton services are available in 24 hours for fire or water claims. We document moisture levels, complete drywall installation after water damage Hamilton, and supply reports for insurance adjusters.",
  },
  {
    q: "What finish levels do you provide?",
    a: "We deliver drywall finishing Hamilton from level 4 finish Hamilton to level 5 finish Hamilton plus skim coat Hamilton for gallery lighting. Every project receives dust-controlled drywall sanding Hamilton and spotlight inspections.",
  },
  {
    q: "Can you take on drywall installation after demolition Hamilton projects?",
    a: "Absolutely. Our teams coordinate with demo contractors, clean studs, and install new drywall for renovation Hamilton whether it is a Barton Village storefront or an Ancaster addition.",
  },
  {
    q: "Do you work on commercial buildouts?",
    a: "We routinely complete drywall installation for commercial buildouts Hamilton at business parks, hospitals, and university spaces. Expect WSIB compliance, COR-friendly paperwork, and night shifts when requested.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all Hamilton neighbourhoods including Ancaster, Dundas, Stoney Creek, Waterdown, Hamilton Mountain, and Binbrook. We also support Burlington, Grimsby, and Niagara when projects need the same new drywall installation Hamilton quality.",
  },
];

export const metadata = {
  title:
    "Drywall Installation Hamilton | Basements, Lofts & Industrial Fit-Outs",
  description:
    "Trusted drywall installation contractor Hamilton for basements, ceilings, additions, and commercial buildouts. Skilled hanging, taping, and Level 5 finishing.",
  keywords: KEYWORDS,
  alternates: { canonical: SLUG },
  openGraph: {
    title: "Drywall Installation Services Hamilton | EPF Pro Services",
    description:
      "Full-service drywall contractors for installation Hamilton delivering layout, board delivery, taping, sanding, primer, and punch-list turnover.",
    url: SLUG,
    type: "website",
    images: [
      {
        url: "/services/drywall/3.webp",
        width: 1200,
        height: 630,
        alt: "Drywall installation Hamilton crew hanging board in a loft",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const phoneText = CONTACT?.phone || "(647) 923-6784";
  const hamilton = cities.find((c) => c.slug === "hamilton");
  const areaServed = [
    CITY,
    ...(hamilton?.neighborhoods?.map((n) => `${CITY} - ${n.name}`) || []),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${SERVICE} in ${CITY}`,
        serviceType: KEYWORDS,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          telephone: phoneText,
          url: "https://epfproservices.com",
          image: "/logo.png",
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          address: {
            "@type": "PostalAddress",
            addressRegion: "ON",
            addressCountry: "CA",
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: SLUG,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: "/quote/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "/services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drywall Installation",
            item: "/services/drywall-installation/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: CITY,
            item: SLUG,
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
  const phoneHref = CONTACT?.phoneHref || "tel:+16479236784";
  const phoneText = CONTACT?.phone || "(647) 923-6784";
  const hamilton = cities.find((city) => city.slug === "hamilton");
  const neighborhoods = hamilton?.neighborhoods || [];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/drywall/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-white">
              <p className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-200/40 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-blue-100">
                Steel City Basements • Downtown Lofts • Mountain Additions
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {SERVICE} {CITY}
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                From Barton Street storefronts to Ancaster estates, we provide
                drywall installation services Hamilton that keep framing,
                {` `}
                {HANGING_KEYWORDS[0]}, and {FINISH_KEYWORDS[0]} under one roof.
                Expect tight joints, air-sealed bulkheads, and quick punch-list
                responses.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our crews handle {PROJECT_KEYWORDS[0]}, {PROJECT_KEYWORDS[1]},
                and {PROJECT_KEYWORDS[3]} with waste removal, site heaters, and
                lift rentals included so you can focus on the rest of the build.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏠</div>
                  <div className="text-sm font-semibold">
                    {AUDIENCE_KEYWORDS[0]}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <div className="text-sm font-semibold">
                    {AUDIENCE_KEYWORDS[1]}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏙️</div>
                  <div className="text-sm font-semibold">
                    {AUDIENCE_KEYWORDS[2]}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🧱</div>
                  <div className="text-sm font-semibold">
                    {REBUILD_KEYWORDS[0]}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition shadow-lg hover:shadow-2xl hover:scale-105 transform"
                >
                  <span className="mr-2">📞</span>
                  {phoneText}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow-lg hover:shadow-2xl"
                >
                  Request Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={images[2]}
                  alt="Hamilton drywall crew installing ceiling board"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Clean installs across Hamilton Mountain & the core
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Years of drywall expertise
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4 text-sm font-semibold">
              COVERING ALL {CITY.toUpperCase()} NEIGHBOURHOODS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span
                  key={n.slug}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {n.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section
        id="quote-form"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Send Drawings, Get a Line-Item Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fast pricing for {CORE_KEYWORDS[1]} in Hamilton, Stoney Creek,
                and Niagara West
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <QuoteForm />

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Speak with estimating
                      </div>
                      <a
                        href={phoneHref}
                        className="text-xl font-bold text-blue-600 hover:underline"
                      >
                        {phoneText}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Rapid turnarounds
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        Photo + site visit combo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Hamilton Job Sites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industrial durability plus designer finishes for{" "}
              {CORE_KEYWORDS[0]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛠️",
                title: "Heavy-Duty Hanging",
                text: `${HANGING_KEYWORDS[0]} crews install fire-rated shafts, resilient channel ceilings, and ${HANGING_KEYWORDS[4]} for factories.`,
                bullets: [
                  HANGING_KEYWORDS[1],
                  HANGING_KEYWORDS[2],
                  HANGING_KEYWORDS[3],
                ],
              },
              {
                icon: "🏗️",
                title: "Renovation Support",
                text: `Ideal for ${REBUILD_KEYWORDS[2]}, heritage lofts, and ${REBUILD_KEYWORDS[3]} requiring shoring and temp walls.`,
                bullets: [
                  REBUILD_KEYWORDS[0],
                  REBUILD_KEYWORDS[1],
                  REBUILD_KEYWORDS[4],
                ],
              },
              {
                icon: "✨",
                title: "Finish Obsessed",
                text: `${FINISH_KEYWORDS[0]} specialists produce ${FINISH_KEYWORDS[4]} & ${FINISH_KEYWORDS[5]} that impress architects.`,
                bullets: [
                  FINISH_KEYWORDS[1],
                  FINISH_KEYWORDS[2],
                  FINISH_KEYWORDS[3],
                ],
              },
              {
                icon: "🏢",
                title: "Commercial Ready",
                text: `WSIB crews handle ${PROJECT_KEYWORDS[3]} with hoarding, lift plans, and COR-friendly paperwork.`,
                bullets: [
                  AUDIENCE_KEYWORDS[1],
                  PROJECT_KEYWORDS[1],
                  PROJECT_KEYWORDS[2],
                ],
              },
              {
                icon: "🏡",
                title: "Homeowner Friendly",
                text: `We protect flooring, isolate dust, and keep {AUDIENCE_KEYWORDS[0]} tidy in Ancaster, Dundas, and Waterdown.`,
                bullets: [
                  PROJECT_KEYWORDS[0],
                  REBUILD_KEYWORDS[2],
                  FINISH_KEYWORDS[3],
                ],
              },
              {
                icon: "🪜",
                title: "Ceiling Experts",
                text: `Rigging for {PROJECT_KEYWORDS[1]}, tray ceilings, and {FINISH_KEYWORDS[5]} on long sight lines.`,
                bullets: [
                  PROJECT_KEYWORDS[1],
                  FINISH_KEYWORDS[4],
                  "Critical-light inspections",
                ],
              },
            ].map((card) => (
              <article
                key={card.title}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100 hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl text-white mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hamilton Drywall Installation Projects
            </h2>
            <p className="text-xl text-gray-600">
              Steel town basements, James Street boutiques, and Mountain
              additions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <figure
                key={src}
                className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-400 transition group"
              >
                <img
                  src={src}
                  alt={`Drywall installation Hamilton project ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <p className="text-white font-semibold">
                    {index % 3 === 0
                      ? PROJECT_KEYWORDS[0]
                      : index % 3 === 1
                      ? REBUILD_KEYWORDS[4]
                      : PROJECT_KEYWORDS[3]}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hamilton Drywall Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every step keeps {CORE_KEYWORDS[1]} predictable—even on tight
              industrial sites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Site Readiness",
                text: `Inspect framing, clean debris, and set up heaters or negative air for ${REBUILD_KEYWORDS[3]}.`,
              },
              {
                title: "Material Handling",
                text: `Coordinated deliveries, lifts, and stair carries for ${HANGING_KEYWORDS[4]} and ${AUDIENCE_KEYWORDS[2]}.`,
              },
              {
                title: "Board Installation",
                text: `${HANGING_KEYWORDS[1]} with laser alignment, resilient channel, and ${PROJECT_KEYWORDS[1]} details.`,
              },
              {
                title: "Taping & Mud",
                text: `${FINISH_KEYWORDS[1]} crews apply paper or FibaFuse tapes, Trim-Tex beads, and butt-joint flatteners.`,
              },
              {
                title: "Sanding & QC",
                text: `${FINISH_KEYWORDS[2]} with HEPA vacs, spotlights, and recorded moisture readings before primer.`,
              },
              {
                title: "Prime & Punch",
                text: `${FINISH_KEYWORDS[0]} inspectors flag issues, prime surfaces, and close out {PROJECT_KEYWORDS[3]} paperwork.`,
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="relative bg-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-lg transition"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall Installation Cost in Hamilton
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pricing varies by project scope, finish level, site access, and
              square footage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Small Scopes
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Competitive
                </div>
                <div className="text-sm text-gray-600">
                  Single rooms & repairs
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{HANGING_KEYWORDS[3]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{FINISH_KEYWORDS[1]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{FINISH_KEYWORDS[3]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 border-2 border-blue-500 shadow-xl transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-white text-xs font-bold uppercase mb-4">
                  Most Popular
                </div>
                <div className="text-sm font-bold text-white/90 uppercase tracking-wide mb-2">
                  Full Basements
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  Custom Quote
                </div>
                <div className="text-sm text-white/90">
                  {PROJECT_KEYWORDS[0]}
                </div>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>{AUDIENCE_KEYWORDS[0]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>{FINISH_KEYWORDS[4]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Prime & paint option</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Cleanup + waste removal</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Commercial Work
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Project-Based
                </div>
                <div className="text-sm text-gray-600">
                  {PROJECT_KEYWORDS[3]}
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{AUDIENCE_KEYWORDS[1]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Night shifts available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Scissor lift crews</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What Impacts Your Hamilton Project Cost?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📏",
                  title: "Square Footage",
                  text: "Total area, ceiling height, and material efficiency.",
                },
                {
                  icon: "🏗️",
                  title: "Site Access",
                  text: "Lift rentals, stair carries, loading bays, and parking logistics.",
                },
                {
                  icon: "💧",
                  title: "Damage Scope",
                  text: REBUILD_KEYWORDS[4],
                },
                {
                  icon: "✨",
                  title: "Finish Level",
                  text: `${FINISH_KEYWORDS[3]} vs ${FINISH_KEYWORDS[4]} or ${FINISH_KEYWORDS[5]} upgrades.`,
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl text-center">
              <p className="text-gray-700 font-semibold mb-4">
                Every Hamilton project is unique. Share your drawings, photos,
                and project details for an accurate itemized quote with labour
                crews, board counts, mud usage, and schedule assumptions.
              </p>
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg"
              >
                Get Detailed Estimate →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Drywall Installation Throughout the GTA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drywall installation contractor Hamilton teams serve
              the city and surrounding areas with consistent quality,
              transparent pricing, and professional site management
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Comprehensive Hamilton Coverage
            </h3>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              From Steel City basements to Ancaster estates, our drywall
              contractors for installation Hamilton deliver results across all
              project types. Serving Stoney Creek, Dundas, Waterdown, Hamilton
              Mountain, and Binbrook with the same Level 5 standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 rounded-full font-bold transition-all shadow-xl hover:scale-105"
              >
             Call for Free Quote
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur border-2 border-white text-white hover:bg-white/30 rounded-full font-bold transition-all"
              >
                Get Estimate
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-4">
              Trusted Installation Across Hamilton Neighbourhoods
            </h3>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              From industrial loft conversions in Barton Village to custom homes
              in Ancaster, our licensed crews deliver professional drywall
              installation services throughout Hamilton's diverse areas. Every
              neighbourhood receives the same quality workmanship and attention
              to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span
                  key={n.slug}
                  className="px-5 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:border-blue-400 hover:text-blue-600 transition"
                >
                  {n.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl">⭐</span>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 font-semibold">Google Rating</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted Drywall Contractors in Hamilton
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fully insured, WSIB-compliant, and accustomed to union or GC
              onboarding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🏆",
                title: "Licensed & Insured",
                text: "WSIB + $5M liability certificates delivered with every quote.",
              },
              {
                icon: "🧰",
                title: "Safety & Documentation",
                text: "Daily site logs, toolbox talks, and hazard assessments.",
              },
              {
                icon: "📜",
                title: "3-Year Warranty",
                text: "Coverage on seams, screw pops, and finish failure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition"
              >
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 hover:border-blue-500 rounded-full font-bold text-gray-900 hover:text-blue-600 transition shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">⭐</span>
                <span>Read Our Google Reviews</span>
                <span>→</span>
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold transition shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl"></span>
                <span>Call for Quote</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall Installation Hamilton FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Details on scope, scheduling, and finishes
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition cursor-pointer"
              >
                <summary className="font-bold text-lg flex items-center justify-between cursor-pointer">
                  <span>{faq.q}</span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">
                    ⌄
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Drywall Crew in Hamilton
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Call for {CORE_KEYWORDS[2]} able to execute {FINISH_KEYWORDS[3]}{" "}
              to {FINISH_KEYWORDS[4]} plus {FINISH_KEYWORDS[5]} upgrades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-blue-600 hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <span className="mr-2">📞</span>Call {phoneText}
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-cyan-500 hover:bg-cyan-400 transition shadow-2xl hover:shadow-3xl border-2 border-white/30"
              >
                Book Free Estimate
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">{PROJECT_KEYWORDS[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">{REBUILD_KEYWORDS[4]}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">3-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM COPY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Drywall Installation Services in Hamilton
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                When Hamilton property owners and contractors need reliable{" "}
                <strong>drywall installation services Hamilton</strong>, EPF Pro
                Services delivers professional results across residential,
                commercial, and industrial projects. Our experienced{" "}
                <strong>drywall contractors for installation Hamilton</strong>{" "}
                bring decades of expertise to basement builds, loft conversions,
                commercial tenant improvements, and emergency reconstruction
                work.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Why Hamilton Builders Choose Our Installation Teams
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Licensed & insured:</strong> Full WSIB coverage
                      and $5M liability for every{" "}
                      <strong>drywall installation Hamilton</strong> project
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Industrial experience:</strong> Crews specializing
                      in <strong>drywall hanging Hamilton</strong> for
                      heavy-duty applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Quality guarantee:</strong> Every{" "}
                      <strong>new drywall installation Hamilton</strong> backed
                      by comprehensive 3-year warranty
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Complete Installation Services for Hamilton Properties
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>drywall installation contractor Hamilton</strong>{" "}
                teams handle every phase: framing coordination,{" "}
                <strong>hang drywall Hamilton</strong> work,{" "}
                <strong>drywall taping and mudding Hamilton</strong>,{" "}
                <strong>drywall sanding Hamilton</strong>, and optional
                painting. Whether you need{" "}
                <strong>basement drywall installation Hamilton</strong>,{" "}
                <strong>ceiling drywall installation Hamilton</strong>, or{" "}
                <strong>
                  drywall installation for commercial buildouts Hamilton
                </strong>
                —we deliver consistent results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Sheetrock installation Hamilton</strong> and{" "}
                <strong>gypsum board installation Hamilton</strong> projects
                receive meticulous attention to detail. We verify framing,
                install proper backing for fixtures, and ensure every joint
                aligns perfectly. Our{" "}
                <strong>drywall board installation Hamilton</strong> process
                includes laser layout, mechanical lifts for ceilings, and
                systematic quality checks.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Finishing Excellence: Level 4 and Level 5 Options
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Professional <strong>drywall finishing Hamilton</strong>{" "}
                separates average installations from exceptional ones. Our teams
                offer both <strong>level 4 finish Hamilton</strong> for standard
                applications and <strong>level 5 finish Hamilton</strong> for
                ultra-smooth walls—essential for high-gloss paints, modern LED
                lighting, and architectural spaces.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Skim coat Hamilton</strong> applications create
                glass-smooth surfaces perfect for galleries and feature walls.
                Combined with HEPA-controlled sanding, our finish work delivers
                paint-ready surfaces that meet the highest quality standards for
                Hamilton residential and commercial projects.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to Start Your Hamilton Installation Project?
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Connect with our{" "}
                  <strong>drywall installation contractor Hamilton</strong> team
                  for detailed quotes. We provide itemized estimates covering
                  materials, labor, finishing, and optional painting—transparent
                  pricing with no hidden costs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg"
                  >
                    📞 Call {phoneText}
                  </a>
                  <a
                    href="#quote-form"
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg"
                  >
                    Get Free Estimate
                  </a>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-8">
                For comprehensive information about our drywall installation
                services throughout the GTA, visit our{" "}
                <Link
                  href="/services/drywall-installation/"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                   drywall installation services
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 backdrop-blur border-t-2 border-white/20 shadow-2xl p-4">
          <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
            <a
              href={phoneHref}
              className="flex-1 text-center px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="#quote-form"
              className="flex-1 text-center px-6 py-3 bg-white/20 backdrop-blur text-white font-bold rounded-full hover:bg-white/30 transition border-2 border-white/30"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
