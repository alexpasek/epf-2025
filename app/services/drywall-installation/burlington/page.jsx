import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { ServiceCopy } from "@/components/LocalSEOCopy";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Burlington";
const SERVICE = "Drywall Installation";
const SLUG = "/services/drywall-installation/burlington/";
const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const ABSOLUTE_URL = `${BASE_URL}${SLUG}`;
const SERVICES_URL = `${BASE_URL}/services/`;
const INSTALL_URL = `${BASE_URL}/services/drywall-installation/`;
const QUOTE_URL = `${BASE_URL}/quote/`;
const EMAIL = CONTACT?.email || "info@epfproservices.com";
const SERVICE_HUB_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "37 Dalegrove Crescent",
  addressLocality: "Stoney Creek",
  addressRegion: "ON",
  postalCode: "L8J 3R5",
  addressCountry: "CA",
};
const PROVIDER_DESCRIPTION =
  "EPF Pro Services is a Burlington-area drywall installation contractor handling board hanging, taping, sanding, and Level 4 to Level 5 finishing for basements, additions, homes, condos, and commercial buildouts.";

const CORE_KEYWORDS = [
  "drywall installation Burlington",
  "drywall installation services Burlington",
  "drywall installation contractor Burlington",
  "drywall contractors for installation Burlington",
  "new drywall installation Burlington",
];

const HANGING_KEYWORDS = [
  "drywall hanging Burlington",
  "hang drywall Burlington",
  "drywall board installation Burlington",
  "sheetrock installation Burlington",
  "gypsum board installation Burlington",
];

const REBUILD_KEYWORDS = [
  "drywall replacement Burlington",
  "remove and replace drywall Burlington",
  "new drywall for renovation Burlington",
  "drywall installation after demolition Burlington",
  "drywall installation after water damage Burlington",
];

const PROJECT_KEYWORDS = [
  "basement drywall installation Burlington",
  "ceiling drywall installation Burlington",
  "drywall installation for additions Burlington",
  "drywall installation for commercial buildouts Burlington",
];

const FINISH_KEYWORDS = [
  "drywall finishing Burlington",
  "drywall taping and mudding Burlington",
  "drywall sanding Burlington",
  "level 4 finish Burlington",
  "level 5 finish Burlington",
  "skim coat Burlington",
];

const AUDIENCE_KEYWORDS = [
  "residential drywall installation Burlington",
  "commercial drywall installation Burlington",
  "condo drywall installation Burlington",
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
    q: "How much does drywall installation cost in Burlington?",
    a: "Drywall installation cost in Burlington depends on square footage, ceiling height, board thickness, finish level, and job access. A basement, condo, or commercial suite will not price the same, so we quote from drawings, photos, or a site visit and spell out the real scope instead of giving one vague line item.",
  },
  {
    q: "Do you install drywall in basements?",
    a: "Yes. We install drywall in Burlington basements for rec rooms, bedrooms, home offices, and in-law layouts. That includes soffits, bulkheads, stair transitions, ceiling board, and the finish level needed for cleaner lighting conditions.",
  },
  {
    q: "Do you handle taping and mudding too?",
    a: "Yes. We handle the full drywall installation sequence in Burlington: framing checks, board hanging, taping, mudding, sanding, and Level 4 or Level 5 finishing. If you want a paint-ready surface, we quote to that standard directly.",
  },
  {
    q: "Do you work in occupied homes and condos?",
    a: "We do. Occupied Burlington homes and condo units get floor protection, dust control, scheduled deliveries, elevator coordination where needed, and daily cleanup so the install stays organized instead of taking over the property.",
  },
  {
    q: "Do you install drywall after plumbing/electrical rough-ins?",
    a: "Yes. Most Burlington projects are boarded after plumbing, electrical, HVAC, backing, and inspections are ready. Once the rough-ins are confirmed, we hang drywall, tape, mud, sand, and prepare the room for primer or paint.",
  },
];

export const metadata = {
  title: "Drywall Installation Burlington | Hanging, Taping & Level 5 Finish",
  description:
    "Licensed drywall installation contractor Burlington for basements, ceilings, additions, and commercial buildouts. Fast quotes, precise hanging, and flawless finishing.",
  keywords: KEYWORDS,
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    title: "Drywall Installation Services Burlington | EPF Pro Services",
    description:
      "Professional drywall installation services Burlington covering framing coordination, sheetrock hanging, taping, sanding, and painting. Level 4 and Level 5 finishes.",
    url: ABSOLUTE_URL,
    type: "website",
    images: [
      {
        url: "/services/drywall/1.webp",
        width: 1200,
        height: 630,
        alt: "Drywall installation Burlington crew hanging new board",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const phoneText = CONTACT?.phone || "(647) 923-6784";
  const burlington = cities.find((c) => c.slug === "burlington");
  const areaServed = [
    CITY,
    ...(burlington?.neighborhoods?.map((n) => `${CITY} - ${n.name}`) || []),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${SERVICE} in ${CITY}`,
        description:
          "Drywall installation contractor in Burlington for basements, ceilings, additions, condos, and commercial spaces with framing coordination, board hanging, taping, sanding, and Level 4 to Level 5 finishing.",
        serviceType: KEYWORDS,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          description: PROVIDER_DESCRIPTION,
          telephone: phoneText,
          email: EMAIL,
          url: "https://epfproservices.com",
          image: `${BASE_URL}/logo.png`,
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          address: SERVICE_HUB_ADDRESS,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: ABSOLUTE_URL,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: QUOTE_URL,
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": `${BASE_URL}/` },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: { "@id": SERVICES_URL },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drywall Installation",
            item: { "@id": INSTALL_URL },
          },
          {
            "@type": "ListItem",
            position: 4,
            name: CITY,
            item: { "@id": ABSOLUTE_URL },
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
  const burlington = cities.find((city) => city.slug === "burlington");
  const neighborhoods = burlington?.neighborhoods || [];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/drywall/${i + 1}.webp`
  );
  const galleryAlts = [
    "Burlington drywall crew hanging board for a residential renovation",
    "Basement drywall installation in Burlington before final sanding",
    "Ceiling drywall installation in Burlington around lights and vents",
    "Commercial drywall fit-out work in Burlington during boarding stage",
    "Level 5 drywall finishing in Burlington before primer",
    "Completed Burlington drywall installation ready for paint and trim",
  ];
  const authorityGuides = [
    {
      href: "/blog/drywall-contractor-burlington-guide/",
      title: "Drywall contractor Burlington guide",
      text: "Compare repair, installation, taping, finishing, dust control, and quote scope.",
    },
    {
      href: "/blog/drywall-repair-or-installation-burlington/",
      title: "Repair or installation Burlington",
      text: "How to decide whether a Burlington project needs patching or new board.",
    },
    {
      href: "/blog/drywall-hanging-taping-finishing-gta/",
      title: "Drywall hanging, taping and finishing GTA",
      text: "What each stage should include when the quote is written properly.",
    },
    {
      href: "/blog/level-4-vs-level-5-drywall-finish-gta/",
      title: "Level 4 vs Level 5 drywall finish GTA",
      text: "Where the upgrade is worth it for open walls and ceilings.",
    },
    {
      href: "/blog/commercial-drywall-installation-mississauga/",
      title: "Commercial drywall installation guide",
      text: "Scope, scheduling, access, and turnover notes for tenant buildouts.",
    },
  ];
  const authorityProjects = [
    {
      href: "/blog/commercial-fit-out-drywall-project-burlington/",
      title: "Commercial fit-out drywall project in Burlington",
      text: "Real project notes on staging, finish levels, and handoff timing.",
    },
    {
      href: "/blog/basement-drywall-install-mississauga-project/",
      title: "Basement drywall install project",
      text: "A useful reference for bulkheads, lighting, and finish-level decisions.",
    },
  ];

  return (
    <>
      <JsonLd />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-semibold text-blue-300">
                  {CITY}'s Trusted Drywall Crew
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {SERVICE} {CITY}
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Work with the drywall installation contractor Burlington
                builders call for smooth, paint-ready surfaces. We deliver
                drywall installation services Burlington wide for homes, condos,
                and tenant improvements with union-friendly site etiquette.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our drywall contractors for installation Burlington manage new
                drywall installation Burlington from layout and delivery through
                drywall finishing Burlington, drywall taping and mudding
                Burlington, and optional paint so every room is ready faster.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <div className="text-sm font-semibold">
                    {AUDIENCE_KEYWORDS[0]}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏗️</div>
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
                  <div className="text-3xl mb-2">🛠️</div>
                  <div className="text-sm font-semibold">
                    {PROJECT_KEYWORDS[3]}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition shadow-lg hover:shadow-2xl hover:scale-105 transform"
                >
                  <span className="mr-2">📞</span>
                  {phoneText}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow-lg hover:shadow-2xl"
                >
                  Request Drywall Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={images[0]}
                  alt="Crew hanging drywall board for Burlington renovation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Precise hanging, tight joints, and clean job sites
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  1,500+
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Boards installed monthly
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4 text-sm font-semibold">
              SERVING EVERY {CITY.toUpperCase()} NEIGHBOURHOOD
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.slice(0, 10).map((n) => (
                <span
                  key={n.slug}
                  className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {n.name}
                </span>
              ))}
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold">
                Aldershot • Tyandaga • Shoreacres • Millcroft
              </span>
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
              {" "}
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get a Detailed Drywall Estimate
              </h2>
              <p className="text-xl text-gray-600">
                Upload drawings or photos for accurate drywall installation
                services Burlington quotes in less than 24 hours
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
                        Prefer to call?
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
                        Fast Response
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        Same-Day Quotes
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
              Why Burlington Builders Trust Our Drywall Crew
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lean scheduling, WSIB coverage, and finish-focused pros for every
              {` `}
              {SERVICE.toLowerCase()} milestone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl mb-6">
                🏆
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Drywall Pros</h3>
              <p className="text-gray-600 mb-4">
                Licensed crews specializing in {CORE_KEYWORDS[0]}, permit-ready
                documentation, and continuous site supervision.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{CORE_KEYWORDS[2]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{CORE_KEYWORDS[4]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{AUDIENCE_KEYWORDS[0]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border-2 border-cyan-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl mb-6">
                🧰
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Hanging & Boarding Experts
              </h3>
              <p className="text-gray-600 mb-4">
                Tight joints, laser-aligned layout, and lift equipment for
                high-ceiling {HANGING_KEYWORDS[0]} projects.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{HANGING_KEYWORDS[1]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{HANGING_KEYWORDS[2]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{HANGING_KEYWORDS[3]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center text-3xl mb-6">
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-4">Flawless Finishing</h3>
              <p className="text-gray-600 mb-4">
                Dedicated finishing teams for {FINISH_KEYWORDS[0]},{" "}
                {FINISH_KEYWORDS[1]}, and {FINISH_KEYWORDS[2]} with clean HEPA
                control.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{FINISH_KEYWORDS[3]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{FINISH_KEYWORDS[4]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{FINISH_KEYWORDS[5]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl mb-6">
                🧱
              </div>
              <h3 className="text-2xl font-bold mb-4">Renovation Friendly</h3>
              <p className="text-gray-600 mb-4">
                Experienced working around trades for {REBUILD_KEYWORDS[2]} and
                rapid turnover schedules.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{REBUILD_KEYWORDS[0]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{REBUILD_KEYWORDS[1]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{REBUILD_KEYWORDS[3]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-3xl mb-6">
                🏠
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Flexibility</h3>
              <p className="text-gray-600 mb-4">
                From {PROJECT_KEYWORDS[0]} to boutique retail suites, we align
                manpower with your schedule.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{PROJECT_KEYWORDS[1]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{PROJECT_KEYWORDS[2]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{PROJECT_KEYWORDS[3]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border-2 border-pink-100 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-2xl bg-pink-500 flex items-center justify-center text-3xl mb-6">
                📦
              </div>
              <h3 className="text-2xl font-bold mb-4">Material Handling</h3>
              <p className="text-gray-600 mb-4">
                Lift deliveries, board elevators, and stair carries handled by
                insured labour for seamless {HANGING_KEYWORDS[4]}.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{AUDIENCE_KEYWORDS[2]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Elevator & hallway protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Daily debris removal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Burlington Drywall Installation Projects
            </h2>
            <p className="text-xl text-gray-600">
              Recent drywall installation Burlington snapshots from condos,
              basements, and home additions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <figure
                key={src}
                className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition group"
              >
                <img
                  src={src}
                  alt={galleryAlts[index % galleryAlts.length]}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <p className="text-white font-semibold">
                    {index % 3 === 0
                      ? PROJECT_KEYWORDS[0]
                      : index % 3 === 1
                      ? PROJECT_KEYWORDS[1]
                      : REBUILD_KEYWORDS[4]}
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
              Our Burlington Drywall Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent six-step workflow covering layout, drywall hanging
              Burlington, drywall finishing Burlington, and punch-list cleanup
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Site Prep & Logistics",
                text: `Floor protection, elevator bookings, and delivery coordination for ${AUDIENCE_KEYWORDS[2]} and ${AUDIENCE_KEYWORDS[1]}.`,
              },
              {
                title: "Layout & Framing Check",
                text: `Verify stud spacing, blocking, and backing so ${HANGING_KEYWORDS[2]} lines up with fixtures and millwork.`,
              },
              {
                title: "Professional Hanging",
                text: `Board lifts and tall crew ladders handle ${HANGING_KEYWORDS[1]} plus ${HANGING_KEYWORDS[4]} for soffits and bulkheads.`,
              },
              {
                title: "Taping & Mud",
                text: `${FINISH_KEYWORDS[1]} with mechanical tapers, paper or FibaFuse, plus corner bead installs for ${PROJECT_KEYWORDS[1]}.`,
              },
              {
                title: "Sanding & Detail",
                text: `${FINISH_KEYWORDS[2]} using HEPA extractors, spotlight inspection, and prep for ${FINISH_KEYWORDS[3]} or ${FINISH_KEYWORDS[4]}.`,
              },
              {
                title: "Prime, Punch & Turnover",
                text: `Optional prime/paint, walk-through corrections, and documentation for ${PROJECT_KEYWORDS[3]} schedules.`,
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="relative bg-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-lg transition"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pricing, Process, and Timeline in Burlington
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Burlington drywall jobs move better when the budget, finish
              standard, and schedule are written clearly from day one.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-8">
              <h3 className="text-2xl font-bold mb-3">Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                We price Burlington drywall installs based on square footage,
                ceiling height, finish level, and site access, whether the job
                is a basement, condo unit, addition, or commercial space.
              </p>
            </article>
            <article className="rounded-2xl border-2 border-cyan-100 bg-cyan-50 p-8">
              <h3 className="text-2xl font-bold mb-3">Process</h3>
              <p className="text-gray-700 leading-relaxed">
                The work starts with framing and rough-in checks, then board
                hanging, taping, mudding, sanding, inspection, and a clean
                handoff for primer or paint.
              </p>
            </article>
            <article className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-8">
              <h3 className="text-2xl font-bold mb-3">Timeline</h3>
              <p className="text-gray-700 leading-relaxed">
                Small rooms move quickly, while basements and commercial suites
                need more time for drying, cleanup, staging, and coordination
                with other trades.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drywall Installation Cost in Burlington
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pricing depends on square footage, finish level, wall height, and project scope
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Small Projects
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Affordable
                </div>
                <div className="text-sm text-gray-600">
                  Single room repairs & patches
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Hole and crack repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Standard taping & mudding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Level 4 finish quality</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 border-2 border-blue-400 shadow-xl transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-white text-xs font-bold uppercase mb-4">
                  Most Popular
                </div>
                <div className="text-sm font-bold text-white/90 uppercase tracking-wide mb-2">
                  Medium Projects
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  Competitive
                </div>
                <div className="text-sm text-white/90">
                  Full basements & multiple rooms
                </div>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Complete basement installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Professional taping & finishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Level 5 finish available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Optional prime & paint</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Large Projects
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Custom Quote
                </div>
                <div className="text-sm text-gray-600">
                  Commercial & whole-home builds
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Fire rated assemblies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Commercial tenant improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Cost Factors We Consider
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📏",
                  title: "Square Footage",
                  text: "Total area and ceiling height impact material and labor requirements.",
                },
                {
                  icon: "🏗️",
                  title: "Site Access",
                  text: "Elevator use, stair carries, and parking affect project logistics.",
                },
                {
                  icon: "💧",
                  title: "Condition",
                  text: "Water damage repairs and demolition work require additional preparation.",
                },
                {
                  icon: "⚙️",
                  title: "Finish Level",
                  text: "Level 4 standard finish vs Level 5 premium smooth finish options.",
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
                Every project is unique. Share your project details, photos, or drawings for an accurate itemized quote tailored to your Burlington property.
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
              Complete Drywall Installation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drywall installation services Burlington backed by
              our proven process and quality guarantee
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Expert Drywall Installation Throughout the GTA
            </h3>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our drywall installation contractor Burlington teams serve the
              city and surrounding areas with consistent quality, transparent
              pricing, and professional site management. From basement drywall
              installation Burlington to commercial buildouts, we deliver
              results across all project types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-bold transition-all shadow-xl hover:scale-105"
              >
                📞 Call Drywall Team
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur border-2 border-white text-white hover:bg-white/30 rounded-full font-bold transition-all"
              >
                Request Drywall Quote
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-4">
              Areas We Serve in Burlington
            </h3>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              From Aldershot waterfront condos to Millcroft custom homes, our licensed crews deliver professional drywall installation services throughout Burlington's diverse communities. Every neighbourhood receives the same quality workmanship and attention to detail.
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

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Burlington Drywall Guides and Project Pages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These pages connect the Burlington install template to the broader
              drywall hub, finish guides, and real project examples so Google
              sees a separate drywall cluster, not a generic finishing page.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold">Drywall info pages</h3>
                <Link
                  href="/services/drywall-installation/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Back to drywall hub
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {authorityGuides.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border-2 border-cyan-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">
                Project pages and nearby install hubs
              </h3>
              <div className="space-y-4 mb-6">
                {authorityProjects.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border border-gray-200 p-5 hover:border-cyan-400 hover:shadow-md transition"
                  >
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  </Link>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/services/drywall-installation/mississauga/"
                  className="rounded-2xl bg-blue-50 p-4 font-semibold text-blue-700 hover:bg-blue-100 transition"
                >
                  Drywall Installation Mississauga
                </Link>
                <Link
                  href="/services/drywall-installation/hamilton/"
                  className="rounded-2xl bg-blue-50 p-4 font-semibold text-blue-700 hover:bg-blue-100 transition"
                >
                  Drywall Installation Hamilton
                </Link>
              </div>
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
              Burlington Drywall Contractors You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WSIB insured, background-checked, and ready for condo board or GC
              onboarding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🏆",
                title: "Licensed & Insured",
                text: "WSIB + $5M liability, clearance certificates on request.",
              },
              {
                icon: "✅",
                title: "Documented Process",
                text: `Daily reports for ${PROJECT_KEYWORDS[3]} and renovation tracking.`,
              },
              {
                icon: "📜",
                title: "3-Year Warranty",
                text: "Coverage on seams, fastener pops, and finish integrity.",
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
                <span className="text-2xl">📞</span>
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
              Drywall Installation Burlington FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Everything about drywall installation services Burlington from
              timelines to finish levels
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
              Ready for Seamless Walls & Ceilings?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Book drywall installation Burlington with finish options from
              level 4 finish Burlington to level 5 finish Burlington and keep
              your renovation on schedule.
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
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition shadow-2xl hover:shadow-3xl border-2 border-white/30"
              >
                Request Drywall Quote
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">
                  Drywall Finishing Burlington
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">Water Damage Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-blue-100">3-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM SEO CONTENT */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Drywall Installation Services in Burlington
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                When Burlington property owners and contractors need reliable{" "}
                <strong>drywall installation services Burlington</strong>, EPF
                Pro Services delivers professional results across residential,
                commercial, and industrial projects. Our experienced{" "}
                <strong>drywall contractors for installation Burlington</strong>{" "}
                bring decades of expertise to basement builds, whole-home
                renovations, commercial tenant improvements, and emergency
                reconstruction work.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Why Burlington Builders Choose Our Installation Teams
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Licensed & insured:</strong> Full WSIB coverage
                      and $5M liability for every{" "}
                      <strong>drywall installation Burlington</strong> project
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Professional crews:</strong> Experienced teams
                      specializing in{" "}
                      <strong>drywall hanging Burlington</strong> and finishing
                      work
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Quality guarantee:</strong> Every{" "}
                      <strong>new drywall installation Burlington</strong>{" "}
                      backed by comprehensive 3-year warranty
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Complete Installation Services for Burlington Properties
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>drywall installation contractor Burlington</strong>{" "}
                teams handle every phase: framing coordination,{" "}
                <strong>hang drywall Burlington</strong> work,{" "}
                <strong>drywall taping and mudding Burlington</strong>,{" "}
                <strong>drywall sanding Burlington</strong>, and optional
                painting. Whether you need{" "}
                <strong>basement drywall installation Burlington</strong>,{" "}
                <strong>ceiling drywall installation Burlington</strong>, or{" "}
                <strong>drywall installation for additions Burlington</strong>
                —we deliver consistent results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Sheetrock installation Burlington</strong> and{" "}
                <strong>gypsum board installation Burlington</strong> projects
                receive meticulous attention to detail. We verify framing,
                install proper backing for fixtures, and ensure every joint
                aligns perfectly. Our{" "}
                <strong>drywall board installation Burlington</strong> process
                includes laser layout, mechanical lifts for ceilings, and
                systematic quality checks.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Finishing Excellence: Level 4 and Level 5 Options
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Professional <strong>drywall finishing Burlington</strong>{" "}
                separates average installations from exceptional ones. Our teams
                offer both <strong>level 4 finish Burlington</strong> for
                standard paint applications and{" "}
                <strong>level 5 finish Burlington</strong> for ultra-smooth
                walls with zero visible seams—essential for high-gloss paints
                and modern LED lighting.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Skim coat Burlington</strong> applications create
                glass-smooth surfaces perfect for accent walls and feature
                ceilings. Combined with HEPA-controlled sanding, our finish work
                delivers paint-ready surfaces that meet the highest quality
                standards for Burlington residential and commercial projects.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Renovation & Replacement Expertise
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Drywall replacement Burlington</strong> projects require
                more than installation skills—they demand demolition expertise,
                moisture remediation knowledge, and insurance documentation. We
                specialize in{" "}
                <strong>remove and replace drywall Burlington</strong> work
                following water damage, fire restoration, or complete
                renovations.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>
                  Drywall installation after water damage Burlington
                </strong>{" "}
                includes moisture meter verification, anti-microbial treatment,
                and detailed photo documentation for insurance claims. Our{" "}
                <strong>
                  drywall installation after demolition Burlington
                </strong>{" "}
                services coordinate with environmental teams, electricians, and
                plumbers to ensure proper sequencing.
              </p>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 my-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Burlington Project Specializations
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Residential Projects:</p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        •{" "}
                        <strong>
                          Basement drywall installation Burlington
                        </strong>{" "}
                        with proper vapor barriers
                      </li>
                      <li>• Whole-home renovations and additions</li>
                      <li>• Custom home builds and luxury finishes</li>
                      <li>
                        • <strong>Condo drywall installation Burlington</strong>{" "}
                        with building compliance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Commercial Work:</p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        •{" "}
                        <strong>
                          Commercial drywall installation Burlington
                        </strong>{" "}
                        tenant improvements
                      </li>
                      <li>• Retail buildouts with tight schedules</li>
                      <li>• Office renovations and partitions</li>
                      <li>• Fire-rated assemblies and acoustical systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Material Handling & Site Management
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Professional{" "}
                <strong>drywall installation services Burlington</strong>{" "}
                include comprehensive site logistics. We coordinate material
                deliveries with building schedules, provide elevator protection
                for <strong>condo drywall installation Burlington</strong>, and
                maintain clean work areas with daily debris removal. Board
                lifts, laser levels, and scaffolding ensure safety and precision
                on every job.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Quality Control & Warranty Coverage
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Every <strong>new drywall installation Burlington</strong>{" "}
                project includes multi-stage inspections: framing verification,
                board installation review, taping quality checks, and final
                finish inspection. Our 3-year workmanship warranty covers seam
                integrity, fastener performance, and finish quality—giving
                Burlington property owners complete peace of mind.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to Start Your Burlington Installation Project?
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Connect with our{" "}
                  <strong>drywall installation contractor Burlington</strong>{" "}
                  team for detailed quotes. We provide itemized estimates
                  covering materials, labor, finishing, and optional
                  painting—transparent pricing with no hidden costs.
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
                    Request Drywall Quote
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
              📞 Call Drywall Team
            </a>
            <a
              href="#quote-form"
              className="flex-1 text-center px-6 py-3 bg-white/20 backdrop-blur text-white font-bold rounded-full hover:bg-white/30 transition border-2 border-white/30"
            >
              Drywall Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
