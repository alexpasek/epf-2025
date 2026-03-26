import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const CITY = "Mississauga";
const SERVICE = "Drywall Installation";
const SLUG = "/services/drywall-installation/mississauga/";
const BASE_URL = (SITE_URL || "https://epfproservices.com").replace(/\/$/, "");
const ABSOLUTE_URL = `${BASE_URL}${SLUG}`;
const SERVICES_URL = `${BASE_URL}/services/`;
const INSTALL_URL = `${BASE_URL}/services/drywall-installation/`;
const QUOTE_URL = `${BASE_URL}/quote/`;
const EMAIL = CONTACT?.email || "info@epfproservices.com";
const SERVICE_HUB_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "6855 Glen Erin Dr #33",
  addressLocality: "Mississauga",
  addressRegion: "ON",
  postalCode: "L5N 1P6",
  addressCountry: "CA",
};
const PROVIDER_DESCRIPTION =
  "EPF Pro Services is a Mississauga drywall installation contractor handling board hanging, taping, sanding, and Level 4 to Level 5 finishing for condos, homes, basements, additions, and commercial buildouts.";

const CORE_KEYWORDS = [
  "drywall installation Mississauga",
  "drywall installation services Mississauga",
  "drywall installation contractor Mississauga",
  "drywall contractors for installation Mississauga",
  "new drywall installation Mississauga",
];

const HANGING_KEYWORDS = [
  "drywall hanging Mississauga",
  "hang drywall Mississauga",
  "drywall board installation Mississauga",
  "sheetrock installation Mississauga",
  "gypsum board installation Mississauga",
];

const REBUILD_KEYWORDS = [
  "drywall replacement Mississauga",
  "remove and replace drywall Mississauga",
  "new drywall for renovation Mississauga",
  "drywall installation after demolition Mississauga",
  "drywall installation after water damage Mississauga",
];

const PROJECT_KEYWORDS = [
  "basement drywall installation Mississauga",
  "ceiling drywall installation Mississauga",
  "drywall installation for additions Mississauga",
  "drywall installation for commercial buildouts Mississauga",
];

const FINISH_KEYWORDS = [
  "drywall finishing Mississauga",
  "drywall taping and mudding Mississauga",
  "drywall sanding Mississauga",
  "level 4 finish Mississauga",
  "level 5 finish Mississauga",
  "skim coat Mississauga",
];

const AUDIENCE_KEYWORDS = [
  "residential drywall installation Mississauga",
  "commercial drywall installation Mississauga",
  "condo drywall installation Mississauga",
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
    q: "How much does drywall installation cost in Mississauga?",
    a: "Drywall installation cost in Mississauga depends on square footage, ceiling height, finish level, board type, and access. A basement, condo, or commercial suite all price differently, so we quote from photos, drawings, or a site visit and spell out hanging, taping, mudding, sanding, and any primer or paint.",
  },
  {
    q: "Do you install drywall in basements?",
    a: "Yes. We handle basement drywall installation in Mississauga for rec rooms, bedrooms, home offices, rental suites, and utility-room transitions. That includes bulkheads, soffits, stair details, ceiling board, and the finish level needed for modern pot lights.",
  },
  {
    q: "Do you handle taping and mudding too?",
    a: "Yes. Our Mississauga drywall crews handle the full installation scope: layout checks, board hanging, taping, mudding, sanding, and Level 4 or Level 5 finishing. If you want a paint-ready handoff, we build the quote around that exact standard instead of leaving the finish vague.",
  },
  {
    q: "Do you work in occupied homes and condos?",
    a: "We do. For occupied homes and condo units in Mississauga we plan dust control, hallway protection, elevator bookings, quiet-hour work windows, and daily cleanup so the property stays manageable while the drywall install moves forward.",
  },
  {
    q: "Do you install drywall after plumbing/electrical rough-ins?",
    a: "Yes. That is the normal sequence for most Mississauga renovations. We verify that plumbing, electrical, HVAC, backing, and inspections are ready before board goes up, then install drywall, tape, mud, sand, and prepare the space for the finishing trades.",
  },
];

export const metadata = {
  title: "Drywall Installation Mississauga | Condos, Homes & Commercial Builds",
  description:
    "Professional drywall installation contractor Mississauga for basements, ceilings, condos, and office buildouts. Expert hanging, taping, and Level 5 finishing.",
  keywords: KEYWORDS,
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    title: "Drywall Installation Services Mississauga | EPF Pro Services",
    description:
      "Full-service drywall installation services Mississauga covering residential, commercial, and condo projects with Level 5 finish quality.",
    url: ABSOLUTE_URL,
    type: "website",
    images: [
      {
        url: "/gallery/drywall-installation/drywall-instalation-mississauga/drywall-instalation-mississdauga.webp",
        width: 1200,
        height: 630,
        alt: "Drywall installation Mississauga project completed by EPF Pro Services",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const phoneText = CONTACT?.phone || "(647) 923-6784";
  const mississauga = cities.find((c) => c.slug === "mississauga");
  const areaServed = [
    CITY,
    ...(mississauga?.neighborhoods?.map((n) => `${CITY} - ${n.name}`) || []),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${SERVICE} in ${CITY}`,
        description:
          "Drywall installation contractor in Mississauga for condos, homes, basements, ceilings, and office buildouts with hanging, taping, sanding, and Level 5 finishing.",
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
            reviewCount: "107",
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
  const mississauga = cities.find((city) => city.slug === "mississauga");
  const neighborhoods = mississauga?.neighborhoods || [];

  const images = [
    "/gallery/drywall-installation/drywall-instalation-mississauga/drywall-instalation-mississdauga.webp",
    ...Array.from({ length: 5 }, (_, i) => `/services/drywall/${i + 1}.webp`),
  ];
  const galleryAlts = [
    "Drywall installation crew working in a Mississauga condo suite",
    "Basement drywall installation in Mississauga with bulkheads and straight ceiling lines",
    "Mississauga ceiling drywall installation after rough-ins were completed",
    "Commercial drywall installation in Mississauga during fit-out framing stage",
    "Level 5 drywall finishing in Mississauga before primer and paint",
    "Completed Mississauga drywall installation ready for trim and paint",
  ];
  const authorityGuides = [
    {
      href: "/blog/basement-drywall-installation-mississauga/",
      title: "Basement drywall installation Mississauga",
      text: "Bulkheads, ceiling height, sound control, and finish expectations.",
    },
    {
      href: "/blog/ceiling-drywall-installation-mississauga/",
      title: "Ceiling drywall installation Mississauga",
      text: "Pot-light planning, flat ceilings, and no wavy joints.",
    },
    {
      href: "/blog/drywall-installation-after-water-damage-mississauga/",
      title: "Drywall installation after water damage Mississauga",
      text: "Replacement scope, drying, sealing, and paint-ready finishing.",
    },
    {
      href: "/blog/commercial-drywall-installation-mississauga/",
      title: "Commercial drywall installation Mississauga",
      text: "Offices, clinics, retail units, and turnover planning.",
    },
  ];
  const authorityProjects = [
    {
      href: "/blog/basement-drywall-install-mississauga-project/",
      title: "Basement drywall install in Mississauga",
      text: "Project notes from a full reframe with bulkheads and pot lights.",
    },
    {
      href: "/blog/ceiling-rebuild-after-leak-oakville-project/",
      title: "Ceiling rebuild after leak in Oakville",
      text: "Real leak-driven replacement sequencing from opening to final finish.",
    },
  ];

  return (
    <>
      <JsonLd />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 overflow-hidden">
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
              <p className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-200/40 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-purple-100">
                Square One • Port Credit • Streetsville • Meadowvale
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {SERVICE} {CITY}
              </h1>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Mississauga is a mix of Square One high-rises, Port Credit
                waterfront condos, and Meadowvale family homes. We provide
                drywall installation services Mississauga with condo-ready
                coordination, clean job sites, and a finish level that stands up
                to bright LED lighting.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our drywall installation contractor Mississauga teams handle
                basement drywall installation Mississauga, ceiling drywall
                installation Mississauga, and airport-area commercial buildouts
                with lift equipment, off-hour scheduling, and daily cleanup.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <div className="text-sm font-semibold">Condo Specialists</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏠</div>
                  <div className="text-sm font-semibold">
                    Residential Builds
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🏗️</div>
                  <div className="text-sm font-semibold">
                    Commercial Fit-Outs
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">💧</div>
                  <div className="text-sm font-semibold">Water Damage</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition shadow-lg hover:shadow-2xl hover:scale-105 transform"
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
                  alt="Mississauga drywall installation crew working in condo"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">
                    Professional installation across Mississauga
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]">
                <div className="text-4xl font-bold text-purple-600 mb-1">
                  2,400+
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Rooms delivered across Mississauga
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-4 text-sm font-semibold">
              SERVING ALL {CITY.toUpperCase()} NEIGHBOURHOODS
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.slice(0, 12).map((n) => (
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
                Get Your Detailed Drywall Quote
              </h2>
              <p className="text-xl text-gray-600">
                Fast, accurate pricing for drywall installation services
                Mississauga across all project types
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <QuoteForm />

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">
                        Prefer to call?
                      </div>
                      <a
                        href={phoneHref}
                        className="text-xl font-bold text-purple-600 hover:underline"
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
              Why Mississauga Chooses Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Condo-ready crews, Level 5 quality, and flexible scheduling for
              drywall installation Mississauga across busy towers, lakefront
              homes, and commercial sites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Condo & High-Rise Logistics",
                text: `Condo drywall installation Mississauga teams coordinate COI approvals, elevator padding, and after-hours work near Square One and the Lakeshore corridor.`,
                bullets: [
                  "Quiet-hour scheduling & hallway protection",
                  "Secure material staging for tower sites",
                  "COI + WSIB compliance packages",
                ],
              },
              {
                icon: "🛠️",
                title: "Professional Hanging",
                text: `Precision drywall hanging Mississauga with laser layout, board lifts, and measured spacing for consistent drywall board installation Mississauga.`,
                bullets: [
                  "hang drywall Mississauga",
                  "sheetrock installation Mississauga",
                  "gypsum board installation Mississauga",
                ],
              },
              {
                icon: "✨",
                title: "Premium Finishing",
                text: `Exceptional drywall finishing Mississauga from level 4 finish Mississauga to level 5 finish Mississauga with HEPA-controlled sanding for clean turnovers.`,
                bullets: [
                  "drywall taping and mudding Mississauga",
                  "drywall sanding Mississauga",
                  "skim coat Mississauga",
                ],
              },
              {
                icon: "🏗️",
                title: "Renovation Ready",
                text: `Complete drywall replacement Mississauga for renovations, water damage, and demolition projects with clear documentation.`,
                bullets: [
                  "remove and replace drywall Mississauga",
                  "drywall installation after demolition Mississauga",
                  "drywall installation after water damage Mississauga",
                ],
              },
              {
                icon: "🏢",
                title: "Commercial Expertise",
                text: `Professional drywall installation for commercial buildouts Mississauga near Airport Corporate Centre and Heartland with night shifts and phased handoffs.`,
                bullets: [
                  "commercial drywall installation Mississauga",
                  "Office buildouts",
                  "Retail fit-outs",
                ],
              },
              {
                icon: "🏡",
                title: "Residential Quality",
                text: `Complete residential drywall installation Mississauga including basement drywall installation Mississauga and ceiling drywall installation Mississauga.`,
                bullets: [
                  "drywall installation for additions Mississauga",
                  "Basement rec rooms & home offices",
                  "Accent walls and smooth ceilings",
                ],
              },
            ].map((card) => (
              <article
                key={card.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl text-white mb-6">
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
              Mississauga Drywall Installation Projects
            </h2>
            <p className="text-xl text-gray-600">
              Recent installations across condos, homes, and commercial spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <figure
                key={src}
                className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl hover:border-purple-300 transition group"
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
                      ? AUDIENCE_KEYWORDS[2]
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
              Our Mississauga Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six-step workflow for reliable drywall installation services
              Mississauga with condo coordination and commercial staging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Site Preparation",
                text: "Building coordination, elevator booking, floor protection, and material staging for condo or commercial sites near Square One and Port Credit.",
              },
              {
                title: "Framing Verification",
                text: "Inspect framing, install backing, and verify spacing for precise drywall board installation Mississauga alignment.",
              },
              {
                title: "Professional Hanging",
                text: "Mechanical lifts, laser alignment, and experienced crews for hang drywall Mississauga projects of all sizes.",
              },
              {
                title: "Taping & Mudding",
                text: "Multiple coats with drywall taping and mudding Mississauga using quality compounds and proper drying time.",
              },
              {
                title: "Sanding & Finishing",
                text: "HEPA-controlled drywall sanding Mississauga with spotlight inspection for level 4 or level 5 finish.",
              },
              {
                title: "Prime & Turnover",
                text: "Optional priming, final punch-list, and complete cleanup for paint-ready surfaces and handoff scheduling.",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="relative bg-white rounded-2xl p-8 border-2 border-purple-200 hover:shadow-lg transition"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
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
              Pricing, Process, and Timeline in Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A tighter drywall installation scope starts with a realistic price
              range, a defined workflow, and a schedule that matches the site.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border-2 border-purple-100 bg-purple-50 p-8">
              <h3 className="text-2xl font-bold mb-3">Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                Mississauga drywall pricing changes with board count, ceiling
                height, finish level, elevator access, and whether the scope is
                a basement, condo, or commercial unit.
              </p>
            </article>
            <article className="rounded-2xl border-2 border-indigo-100 bg-indigo-50 p-8">
              <h3 className="text-2xl font-bold mb-3">Process</h3>
              <p className="text-gray-700 leading-relaxed">
                We check framing and rough-ins first, hang board, tape and mud,
                sand under controlled dust conditions, then hand off for primer
                or paint-ready finishing.
              </p>
            </article>
            <article className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-8">
              <h3 className="text-2xl font-bold mb-3">Timeline</h3>
              <p className="text-gray-700 leading-relaxed">
                Small rooms may move in a few working days. Full basements,
                condo suites, and commercial scopes take longer because drying
                time, staging, and inspections affect the schedule.
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
              Drywall Installation Cost in Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing based on scope, square footage, and finish
              quality for Mississauga homes and condos
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
                  Single rooms, repairs, and patch work
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Drywall repairs and ceiling blends</span>
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

            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-8 border-2 border-purple-400 shadow-xl transform scale-105">
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
                  Full basements, condos, and additions
                </div>
              </div>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Complete basement installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Condo renovations with elevator booking</span>
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
                  Commercial, multi-unit, and whole-home
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Commercial buildouts and tenant improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Multi-unit projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Flexible scheduling</span>
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
                      text: "Total area and ceiling height impact materials and labor.",
                    },
                    {
                      icon: "🏗️",
                      title: "Site Access",
                      text: "Elevator use, parking permits, and delivery logistics.",
                    },
                    {
                      icon: "💧",
                      title: "Condition",
                      text: "Water damage or demolition requires additional prep.",
                    },
                    {
                      icon: "⚙️",
                      title: "Finish Level",
                  text: "Level 4 standard vs Level 5 premium smooth finish.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl text-center">
              <p className="text-gray-700 font-semibold mb-4">
                Every project is unique. Share your project details, photos, or
                drawings for an accurate itemized quote tailored to your
                Mississauga property.
              </p>
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all shadow-lg"
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
              Professional drywall installation contractor Mississauga teams
              deliver consistent quality across all neighbourhoods
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Expert Installation Throughout Mississauga
            </h3>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Our drywall contractors for installation Mississauga serve the
              entire city with consistent quality, transparent pricing, and
              professional site management. From Square One condos to Port
              Credit homes and Meadowvale additions, we deliver results across
              all project types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-full font-bold transition-all shadow-xl hover:scale-105"
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
              Areas We Serve in Mississauga
            </h3>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              From Square One high-rises to Churchill Meadows estates and
              Streetsville renovations, our licensed crews deliver professional
              drywall installation services throughout Mississauga's diverse
              communities. Every neighbourhood receives the same quality
              workmanship and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span
                  key={n.slug}
                  className="px-5 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-semibold hover:border-purple-400 hover:text-purple-600 transition"
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
              Mississauga Drywall Guides and Project Pages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use the local guides below to move from the main drywall hub into
              basement, ceiling, water-damage, and commercial install topics,
              then back into the service page when you are ready for pricing.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border-2 border-purple-100 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold">Supporting drywall guides</h3>
                <Link
                  href="/services/drywall-installation/"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Back to drywall hub
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {authorityGuides.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-gray-200 p-5 hover:border-purple-400 hover:shadow-md transition"
                  >
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border-2 border-indigo-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">
                Project examples and nearby city pages
              </h3>
              <div className="space-y-4 mb-6">
                {authorityProjects.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border border-gray-200 p-5 hover:border-indigo-400 hover:shadow-md transition"
                  >
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                  </Link>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/services/drywall-installation/burlington/"
                  className="rounded-2xl bg-purple-50 p-4 font-semibold text-purple-700 hover:bg-purple-100 transition"
                >
                  Drywall Installation Burlington
                </Link>
                <Link
                  href="/services/drywall-installation/hamilton/"
                  className="rounded-2xl bg-purple-50 p-4 font-semibold text-purple-700 hover:bg-purple-100 transition"
                >
                  Drywall Installation Hamilton
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 rounded-full px-6 py-3 mb-6">
              <span className="text-3xl">⭐</span>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 font-semibold">Google Rating</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted Drywall Contractors in Mississauga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WSIB insured, fully licensed, and ready for condo board or GC
              requirements
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
                title: "Quality Process",
                text: "Multi-stage inspections and documented project tracking.",
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
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-4xl mx-auto mb-4">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 hover:border-purple-500 rounded-full font-bold text-gray-900 hover:text-purple-600 transition shadow-lg hover:shadow-xl"
              >
                <span className="text-2xl">⭐</span>
                <span>Read Our Google Reviews</span>
                <span>→</span>
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full font-bold transition shadow-lg hover:shadow-xl"
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
              Drywall Installation Mississauga FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services, process, and pricing
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-300 transition cursor-pointer"
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
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 relative overflow-hidden">
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
              Ready for Professional Drywall Installation?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Book drywall installation Mississauga with finish options from
              level 4 finish to level 5 finish and keep your project on
              schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-purple-600 hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <span className="mr-2">📞</span>Call {phoneText}
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition shadow-2xl hover:shadow-3xl border-2 border-white/30"
              >
                Request Drywall Quote
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">Condo Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">Level 5 Finish</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-purple-100">3-Year Warranty</span>
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
              Professional Drywall Installation Services in Mississauga
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                Mississauga property owners need drywall contractors who can
                navigate tower rules, lakefront humidity, and busy commercial
                schedules. Our{" "}
                <strong>drywall installation services Mississauga</strong>{" "}
                focus on clean logistics, tight scheduling, and durable
                finishes that look sharp in bright condo lighting. Experienced{" "}
                <strong>drywall contractors for installation Mississauga</strong>{" "}
                handle residential, condo, and commercial scopes without
                disrupting neighboring units or tenants.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-8 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  What Makes Mississauga Projects Different
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Condo access:</strong> We plan elevator bookings,
                      material staging, and quiet-hour compliance for{" "}
                      <strong>condo drywall installation Mississauga</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Traffic-aware scheduling:</strong> Jobs near
                      Hurontario, the QEW, and the airport require smart
                      delivery windows and on-site safety protocols.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      <strong>Finish quality:</strong> Every{" "}
                      <strong>new drywall installation Mississauga</strong>{" "}
                      includes multi-stage inspections and a 3-year warranty.
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Complete Installation Services for Mississauga Properties
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>drywall installation contractor Mississauga</strong>{" "}
                teams handle every phase: framing coordination,{" "}
                <strong>hang drywall Mississauga</strong> work,{" "}
                <strong>drywall taping and mudding Mississauga</strong>,{" "}
                <strong>drywall sanding Mississauga</strong>, and optional
                painting. Whether you need{" "}
                <strong>basement drywall installation Mississauga</strong>,{" "}
                <strong>ceiling drywall installation Mississauga</strong>, or{" "}
                <strong>drywall installation for additions Mississauga</strong>,
                we deliver consistent results with clear scheduling and clean
                handoffs.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Sheetrock installation Mississauga</strong> and{" "}
                <strong>gypsum board installation Mississauga</strong> projects
                receive meticulous attention to detail. We verify framing,
                install proper backing for fixtures, and ensure every joint
                aligns perfectly. Our{" "}
                <strong>drywall board installation Mississauga</strong> process
                includes laser layout, mechanical lifts for ceilings, and
                systematic quality checks that help keep condo suites and homes
                on schedule.
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Finishing Excellence: Level 4 and Level 5 Options
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Professional <strong>drywall finishing Mississauga</strong>{" "}
                separates average installations from exceptional ones. Our teams
                offer both <strong>level 4 finish Mississauga</strong> for
                standard paint applications and{" "}
                <strong>level 5 finish Mississauga</strong> for ultra-smooth
                walls with zero visible seams—ideal for modern LED lighting in
                Square One towers and custom homes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Skim coat Mississauga</strong> applications create
                glass-smooth surfaces perfect for accent walls and feature
                ceilings. Combined with HEPA-controlled sanding, our finish work
                delivers paint-ready surfaces that meet the highest quality
                standards for Mississauga residential and commercial projects.
              </p>

              <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 my-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Mississauga Project Snapshots
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Square One condo suite: full{" "}
                    <strong>drywall installation Mississauga</strong> with
                    elevator booking, level 5 finish, and low-dust sanding.
                  </li>
                  <li>
                    • Meadowvale basement:{" "}
                    <strong>basement drywall installation Mississauga</strong>{" "}
                    with moisture checks and sound-dampening board.
                  </li>
                  <li>
                    • Airport Corporate Centre buildout: commercial partitions
                    and{" "}
                    <strong>
                      drywall installation for commercial buildouts Mississauga
                    </strong>{" "}
                    on an accelerated schedule.
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Ready to Start Your Mississauga Installation Project?
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Connect with our{" "}
                  <strong>drywall installation contractor Mississauga</strong>{" "}
                  team for detailed quotes. We provide itemized estimates
                  covering materials, labor, finishing, and optional
                  painting—transparent pricing with no hidden costs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all shadow-lg"
                  >
                    📞 Call {phoneText}
                  </a>
                  <a
                    href="#quote-form"
                    className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all shadow-lg"
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
                  className="text-purple-600 hover:text-purple-700 font-semibold underline"
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur border-t-2 border-white/20 shadow-2xl p-4">
          <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
            <a
              href={phoneHref}
              className="flex-1 text-center px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition shadow-lg"
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
