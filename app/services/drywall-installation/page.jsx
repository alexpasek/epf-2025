import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const PAGE_URL = "/services/drywall-installation/";
const ABSOLUTE_URL = `${
  SITE_URL?.replace(/\/$/, "") || "https://epfproservices.com"
}${PAGE_URL}`;

const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const PHONE_ARIA = `Call EPF Pro Services at ${PHONE_TEXT}`;
const EMAIL = CONTACT?.email || "info@epfproservices.com";
const PRIMARY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "6855 Glen Erin Dr #33",
  addressLocality: "Mississauga",
  addressRegion: "ON",
  postalCode: "L5N 1P6",
  addressCountry: "CA",
};
const PROVIDER_DESCRIPTION =
  "EPF Pro Services is a drywall installation contractor serving the GTA with board hanging, taping, sanding, and Level 4 to Level 5 finishing for basements, additions, ceilings, condo renovations, and commercial buildouts.";

const CORE_KEYWORDS = [
  "drywall installation",
  "drywall installation services",
  "drywall installation contractor",
  "drywall contractors for installation",
  "new drywall installation",
];

const patchKeywords = [
  "drywall hanging",
  "hang drywall",
  "drywall board installation",
  "sheetrock installation",
  "gypsum board installation",
];

const crackKeywords = [
  "drywall replacement",
  "remove and replace drywall",
  "new drywall for renovation",
  "drywall installation after demolition",
  "drywall installation after water damage",
];

const waterKeywords = [
  "basement drywall installation",
  "framing and drywall installation",
  "ceiling drywall installation",
  "drywall installation for additions",
  "drywall installation for commercial buildouts",
];

const finishKeywords = [
  "drywall finishing",
  "drywall taping and mudding",
  "drywall sanding",
  "level 4 finish",
  "level 5 finish",
  "skim coat",
];

const tradeKeywords = [
  "framing and drywall installation",
  "drywall installation after mechanical trades",
  "drywall installation for commercial buildouts",
  "drywall installation for tenant improvements",
];

const audienceKeywords = [
  "residential drywall installation",
  "commercial drywall installation",
  "condo drywall installation",
  "builder drywall installation",
];

export const metadata = {
  title:
    "Drywall Installation Services | GTA Hanging, Taping & Level 5 Finish",
  description:
    "Professional drywall installation contractors for basements, additions, ceilings, and commercial buildouts. Precise hanging, framing coordination, and Level 5 finishing across the GTA.",
  keywords: [
    ...CORE_KEYWORDS,
    ...patchKeywords,
    ...crackKeywords,
    ...waterKeywords,
    ...finishKeywords,
    ...audienceKeywords,
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "GTA Drywall Installation Contractors | Hanging to Level 5 | EPF Pro Services",
    description:
      "Drywall hanging, taping, sanding, and Level 5 finishing for renovations, basements, ceilings, and commercial spaces across the GTA.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "/gallery/drywall-installation/drywall-installation-hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional drywall installation services - GTA crew hanging and finishing new walls",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const areaServed = cities.map((c) => c.name);
  const serviceTypes = [
    ...CORE_KEYWORDS,
    ...patchKeywords,
    ...crackKeywords,
    ...waterKeywords,
    ...finishKeywords,
    ...tradeKeywords,
    ...audienceKeywords,
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Professional Drywall Installation Services",
        description:
          "Drywall installation contractors for basements, additions, ceilings, and commercial buildouts across the GTA with board hanging, taping, sanding, and Level 4 to Level 5 finishing.",
        serviceType: serviceTypes,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          description: PROVIDER_DESCRIPTION,
          telephone: PHONE_TEXT,
          email: EMAIL,
          url: SITE_URL,
          image: `${SITE_URL}/logo.png`,
          sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          address: PRIMARY_ADDRESS,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          url: ABSOLUTE_URL,
        },
        potentialAction: {
          "@type": "RequestQuoteAction",
          target: `${ABSOLUTE_URL}#quote`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": SITE_URL || "https://epfproservices.com" },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: { "@id": `${SITE_URL || "https://epfproservices.com"}/services/` },
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drywall Installation",
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

const faqItems = [
  {
    q: "Do you provide drywall installation for full renovations and additions?",
    a: "Yes. We hang, tape, and finish new drywall for basements, additions, commercial buildouts, and multi-room renovations with Level 4 or Level 5 finish standards.",
  },
  {
    q: "Can you remove and replace damaged drywall after demolition or water events?",
    a: "We handle drywall replacement after demolition, mold remediation, or water damage. Crews demo what is needed, dry the cavity, re-board, tape, sand, and prime so the space can move into finishing.",
  },
  {
    q: "Do you hang ceilings and work with framers and other trades?",
    a: "We coordinate with framers, electricians, HVAC, and plumbers to hang ceilings, bulkheads, shafts, and tricky angles. We provide layout support and protect finished floors, glazing, and millwork.",
  },
  {
    q: "What finish levels do you offer?",
    a: "Most installs are completed to Level 4 or Level 5. We skim coat, sand under critical light, and prime so painters can roll immediately. Skim-only and Venetian plaster base coats are available on request.",
  },
  {
    q: "Do you work in condos, commercial sites, and high-rises?",
    a: "Yes. We provide residential, condo, and commercial drywall installation with WSIB, $5M liability, COI, elevator bookings, and noise-window scheduling that fits building rules.",
  },
];

export default function Page() {
  const authorityGroups = {
    cities: [
      {
        href: "/services/drywall-installation/mississauga/",
        title: "Drywall Installation Mississauga",
        text: "Homes, condos, basements, and commercial buildouts.",
      },
      {
        href: "/services/drywall-installation/burlington/",
        title: "Drywall Installation Burlington",
        text: "Basements, additions, fit-outs, and paint-ready finishing.",
      },
      {
        href: "/services/drywall-installation/hamilton/",
        title: "Drywall Installation Hamilton",
        text: "Basements, lofts, commercial spaces, and rebuild work.",
      },
    ],
    guides: [
      {
        href: "/blog/basement-drywall-installation-mississauga/",
        title: "Basement drywall installation Mississauga",
        text: "Bulkheads, headroom, and what a clean basement scope should include.",
      },
      {
        href: "/blog/ceiling-drywall-installation-mississauga/",
        title: "Ceiling drywall installation Mississauga",
        text: "Flat ceilings, pot-light planning, and finish expectations.",
      },
      {
        href: "/blog/drywall-installation-after-water-damage-mississauga/",
        title: "Drywall installation after water damage",
        text: "Replacement sequencing from moisture testing to final finishing.",
      },
      {
        href: "/blog/level-4-vs-level-5-drywall-finish-gta/",
        title: "Level 4 vs Level 5 drywall finish GTA",
        text: "Where the finish upgrade is worth it and where it is not.",
      },
    ],
    projects: [
      {
        href: "/blog/basement-drywall-install-mississauga-project/",
        title: "Basement drywall install in Mississauga",
        text: "Project notes from a reframe, bulkhead, and pot-light layout.",
      },
      {
        href: "/blog/condo-drywall-installation-toronto-project/",
        title: "Condo drywall installation in Toronto",
        text: "A real condo scope with building logistics and finish details.",
      },
      {
        href: "/blog/commercial-fit-out-drywall-project-burlington/",
        title: "Commercial fit-out drywall project in Burlington",
        text: "A commercial drywall handoff with staged finish levels by area.",
      },
    ],
  };
  const gallery = [
    {
      src: "/gallery/drywall-repair/drywall-repair-service00001.webp",
      alt: "Drywall installation crew hanging new boards in GTA home",
      caption:
        "Crew hanging new drywall boards with laser layout before Level 4 taping and mudding.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00002.webp",
      alt: "Ceiling drywall installation after water damage demo",
      caption:
        "Ceiling drywall replacement after water damage with new board, screws, and skim coat finish.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00003.webp",
      alt: "Drywall taping, mudding, and sanding for Level 5 finish",
      caption:
        "Taping, mudding, and sanding sequences to deliver a Level 5 finish ready for primer.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00004.webp",
      alt: "Basement drywall installation framing to finish",
      caption:
        "Complete basement drywall installation including bulkheads, soffits, and stair stringers.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00005.webp",
      alt: "Commercial drywall installation for tenant fit-out",
      caption:
        "Commercial fit-out drywall installation with dust control, COI, and after-hours scheduling.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00007.webp",
      alt: "Condo drywall installation with skim coat finish",
      caption:
        "Condo drywall installation tied into existing concrete columns and skim coated for wallpaper.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Scope & stage",
      body: "Photos + site visit to confirm framing, insulation, vapor barrier, and how we will protect floors, glazing, and HVAC before any drywall installation begins.",
    },
    {
      step: "02",
      title: "Hang & fasten",
      body: "We hang drywall, sheetrock, or DensGlass with the right fasteners, glue, and backing. Ceilings, columns, and shaft walls are boarded before walls for tight seams.",
    },
    {
      step: "03",
      title: "Tape & fill",
      body: "We tape, mud, and embed trims. Corners, control joints, and level transitions are reinforced before building up coats to Level 4 or Level 5.",
    },
    {
      step: "04",
      title: "Sand & inspect",
      body: "HEPA sanding, critical-light inspection, and touch-ups make sure seams disappear before primer.",
    },
    {
      step: "05",
      title: "Prime & turnover",
      body: "Need primer or paint? We can deliver a turnkey, paint-ready drywall installation so trades can keep moving.",
    },
  ];

  return (
    <div className="pt-0 pb-10">
      <JsonLd />
      <div className="space-y-12">

      {/* HERO SECTION - Clean & SEO-Focused */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        
        <div className="relative container-x py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                  <span>📍</span> GTA & Golden Horseshoe
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Professional <span className="text-blue-600">Drywall Installation</span> Services
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                  Expert <strong>drywall installation contractors</strong> for basements, additions, ceilings & commercial buildouts
                </p>
              </div>

              {/* Key Services List */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hanging & Boarding</h3>
                    <p className="text-sm text-gray-600"><strong>Drywall hanging</strong>, sheetrock & <strong>gypsum board installation</strong></p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Replacement & Rebuild</h3>
                    <p className="text-sm text-gray-600"><strong>Remove and replace drywall</strong> after demolition or water damage</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ceilings & Additions</h3>
                    <p className="text-sm text-gray-600"><strong>Ceiling drywall installation</strong> plus additions & commercial buildouts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Finishing & Level 5</h3>
                    <p className="text-sm text-gray-600"><strong>Drywall taping and mudding</strong>, sanding & Level 5 skim coat</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 items-center pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">Level 5 Finish Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">3-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">Dust-Controlled Hanging</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span className="text-sm font-semibold text-gray-700">WSIB + $5M Liability</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href={PHONE_HREF}
                  aria-label={PHONE_ARIA}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
                >
                  <span className="text-xl">📞</span> {PHONE_TEXT}
                </a>
                <a
                  href="/quote/"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition-all"
                >
                  <span className="text-xl">📋</span> Request Drywall Quote
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Need patching or crack repair?{" "}
                <Link
                  href="/services/drywall-repair/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Visit our drywall repair team
                </Link>
                .
              </p>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/gallery/drywall-installation/drywall-installation-hero.webp"
                  alt="Professional drywall installation services - expert crew hanging and finishing new drywall in GTA home"
                  className="w-full h-[500px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                  <div className="text-white">
                    <p className="text-sm font-semibold mb-1 text-blue-300">TRUSTED BY 127+ BUILDERS</p>
                    <p className="text-2xl font-bold">Flawless Drywall Installation Across the GTA</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border-2 border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">5</p>
                    <p className="text-sm text-gray-600 font-semibold">Google Rating</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-5 border-2 border-blue-500">
                <div className="text-white text-center">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm font-semibold">Emergency<br/>Response</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0 48h1440V0c-240 48-480 48-720 0S240 0 0 48z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content Container */}
      <div className="container-x space-y-16">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-semibold">
              GTA Drywall Installation Contractors
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Drywall hanging, taping, and finishing for basements, additions, and buildouts
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We are the <strong>drywall installation contractor</strong>{" "}
              homeowners, builders, and facility managers call for{" "}
              <strong>new drywall installation</strong> scopes. Crews handle
              basements, additions, ceilings, commercial buildouts, and
              <strong> drywall replacement</strong> after demolition or water
              damage.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
              {CORE_KEYWORDS.map((kw) => (
                <li key={kw} className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>{kw}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                aria-label={PHONE_ARIA}
                className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                📞 {PHONE_TEXT}
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center rounded-full border border-blue-600 px-6 py-3 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
              >
                Get my drywall quote
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              4.9★ Google rating • WSIB + 5M liability • 3-year workmanship
              warranty • Daily revalidation keeps this page fresh.
            </p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">
              Need drywall installed after framing or demolition?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Send drawings, ceiling height, board type, and square footage.
              Same-day scope review plus schedule confirmation.
            </p>
            <QuoteForm />
            <p className="mt-3 text-xs text-gray-500">
              📍 Servicing Mississauga, Toronto, Oakville, Burlington, Hamilton,
              Milton, Etobicoke, Grimsby, St. Catharines.
            </p>
          </div>
        </section>

        {/* KEY SERVICES */}
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="group relative rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Hanging & boarding</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Straight, tight seams start with accurate layout. We{" "}
              <strong>hang drywall</strong>, install sheetrock ceilings, set
              control joints, and fasten gypsum board on metal or wood studs.
              Blocking, glue, and screw schedules keep everything flat before
              finishing even begins.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {patchKeywords.map((kw) => (
                <li key={kw} className="flex items-center gap-2">
                  <span className="text-blue-500">▸</span>
                  <span>{kw}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group relative rounded-3xl border-2 border-green-100 bg-gradient-to-br from-green-50 via-white to-green-50/30 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Replacement & rebuilds</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Removing damaged drywall after water, fire, or renovations? We
              <strong> remove and replace drywall</strong>, dry cavities, and
              rebuild bulkheads or shafts. Fresh board means new tape, trims,
              and perfectly aligned reveals ready for finish trades.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {crackKeywords.map((kw) => (
                <li key={kw} className="flex items-center gap-2">
                  <span className="text-green-500">▸</span>
                  <span>{kw}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group relative rounded-3xl border-2 border-red-100 bg-gradient-to-br from-red-50 via-white to-red-50/30 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/20 rounded-full blur-3xl -z-10"></div>
            <div className="text-4xl mb-4">💧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Project-scale installs</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Basements, additions, commercial offices, and retail buildouts
              demand clean coordination. We install drywall on ceilings, high
              walls, stairwells, and glass-line returns while keeping GC punch
              lists tight.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {waterKeywords.map((kw) => (
                <li key={kw} className="flex items-center gap-2">
                  <span className="text-red-500">▸</span>
                  <span>{kw}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA BAR */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
              Fast Scheduling
            </p>
            <h3 className="text-2xl font-bold">
              Need drywall installation on your renovation timeline?
            </h3>
            <p className="text-blue-100">
              We slot crews for GC punch lists, basement finishing, and
              commercial turnover windows so framing, inspections, and paint
              stay aligned.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              aria-label={PHONE_ARIA}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg hover:bg-blue-50"
            >
              📞 Call dispatch
            </a>
            <a
              href="/quote/#photos"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Upload plans/photos
            </a>
          </div>
        </section>

        {/* FINISH & AFTER TRADE */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border-2 border-purple-100 bg-gradient-to-br from-purple-50 via-white to-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                <span>✨</span> PREMIUM FINISH
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Finish outcomes you can trust
              </h3>
            <p className="mt-2 text-gray-600">
              Every project targets <strong>Level 4 or Level 5 drywall finish</strong>{" "}
              with a <strong>smooth, flawless surface</strong>. Walls and ceilings are
              <strong> paint-ready</strong> or{" "}
              <strong>ready for wallpaper</strong> installs. We confirm there
              are <strong>no visible joints</strong> under daylight or raking light.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
              {finishKeywords.map((kw) => (
                <li key={kw} className="flex items-center gap-2">
                  <span className="text-purple-500 text-lg">✓</span>
                  <span className="font-medium">{kw}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border-2 border-amber-100 bg-gradient-to-br from-amber-50 via-white to-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                <span>🔄</span> TRADE COORDINATION
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Trade coordination & commercial turnover
              </h3>
            <p className="mt-2 text-gray-600">
              Coordinating with other trades? We provide{" "}
              <strong>framing and drywall installation</strong>,
              <strong> drywall installation after mechanical trades</strong>,{" "}
              and punch-list
              <strong> drywall installation for commercial buildouts</strong>, so
              projects turn over smoothly.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
              {tradeKeywords.map((kw) => (
                <li key={kw} className="flex items-center gap-2">
                  <span className="text-amber-500 text-lg">✓</span>
                  <span className="font-medium">{kw}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={PHONE_HREF}
                aria-label={PHONE_ARIA}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <span>📅</span> Book install window
              </a>
            </div>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-3">WHO WE SERVE</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Spaces we install every week
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Precision drywall installation services for homeowners, property managers,
                GC punch-out teams, and designers.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audienceKeywords.map((kw, i) => {
                const colors = ['from-blue-500/20 to-blue-600/20 border-blue-400/30', 'from-green-500/20 to-green-600/20 border-green-400/30', 'from-purple-500/20 to-purple-600/20 border-purple-400/30', 'from-amber-500/20 to-amber-600/20 border-amber-400/30'];
                return (
                  <div
                    key={kw}
                    className={`group rounded-2xl border-2 bg-gradient-to-br ${colors[i % 4]} backdrop-blur-sm p-5 text-center font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                  >
                    <div className="text-2xl mb-2">{['🏠', '🏢', '🏗️', '🏘️'][i % 4]}</div>
                    {kw}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                Proof of work
              </p>
              <h3 className="text-3xl font-bold">Drywall installation gallery</h3>
            </div>
          </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <div
              key={item.src}
              className="group overflow-hidden rounded-3xl border shadow bg-white flex flex-col"
            >
              <img
                src={item.src}
                alt={item.alt || `Professional drywall installation project ${i + 1}`}
                loading={i < 3 ? "eager" : "lazy"}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                data-lightbox="true"
              />
              <div className="p-4 text-sm text-gray-700 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-12 bg-gradient-to-br from-amber-50 to-white rounded-3xl border shadow-sm">
          <div className="container-x">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
                Real GTA Reviews
              </p>
              <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Homeowners & Property Managers Say…
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "Emergency water damage rebuild after pipe burst. Crew arrived
                  same day, dried everything properly, installed new mold-resistant
                  board, and finished to paint-ready. Exactly what we needed."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Sarah M., Mississauga Condo
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "Coordinated drywall installation after our electrician and HVAC
                  teams finished rough-ins. They hung, taped, and primed the new
                  walls flawlessly. Professional crew, zero mess. Highly recommend
                  for renovation projects."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — James K., Burlington Home
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "Full basement drywall installation with lots of odd angles.
                  They explained the framing tweaks, hung everything tight, and
                  finished to Level 5. Three years later—still perfect. Worth
                  every penny."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Linda T., Hamilton Heritage Home
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "Commercial office buildout needed new drywall ceilings and
                  bulkheads overnight. Fast response, precise layout, proper
                  documentation. Tenants were back in 48 hours. Excellent commercial
                  drywall installation service."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — David R., Property Manager, Oakville
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "Basement rebuild—removed damaged drywall, dried studs,
                  installed mold-resistant board, and skimmed everything smooth.
                  HEPA sanding kept dust contained. Professional installation team."
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Michael P., Milton
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "Condo refresh before listing. They boarded a new feature wall,
                  skim coated ceilings, and left a flawless finish. Place sold
                  above asking—presentation matters!"
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  — Angela W., Etobicoke Realtor
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">
                5★ average rating across 107 + verified reviews
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition shadow-lg"
                >
                  Read All Google Reviews →
                </a>
                <a
                  href="https://www.homestars.com/profile/2872320-epf-pro-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-800 px-8 py-4 font-semibold text-white hover:bg-amber-900 transition shadow-lg"
                >
                  View HomeStars Profile →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">
              Why choose our drywall installation company?
            </h3>
            <p className="mt-2 text-gray-600">
              What sets our <strong>professional drywall installation</strong> apart
              from competitors
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold mb-2">
                Level 5 Finish Standard
              </h4>
              <p className="text-gray-600 text-sm">
                Unlike contractors who rush single-coat patches, we apply
                multiple feathered layers with raking-light inspection. Every{" "}
                <strong>drywall installation and finishing</strong> project gets the same
                attention—whether it's a small condo bulkhead or full addition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Schedule-Driven</h4>
              <p className="text-gray-600 text-sm">
                Dedicated crews for <strong>drywall installation after demolition</strong>{" "}
                or inspection release. We respond quickly with manpower,
                containment, and documentation so{" "}
                <strong>ceiling drywall installation</strong> and wall scopes
                stay on schedule.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <div className="text-4xl mb-3">🔬</div>
              <h4 className="text-xl font-semibold mb-2">Moisture Testing</h4>
              <p className="text-gray-600 text-sm">
                Calibrated meters verify substrate below 12% before new material
                installs. This prevents{" "}
                <strong>drywall taping and mudding</strong> callbacks and
                ensures <strong>drywall installation after water damage</strong> lasts.
                Readings documented for insurance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
              <div className="text-4xl mb-3">🏗️</div>
              <h4 className="text-xl font-semibold mb-2">Trade Coordination</h4>
              <p className="text-gray-600 text-sm">
                Seamless scheduling for{" "}
                <strong>framing and drywall installation</strong> after plumbing,
                electrical, or HVAC work. We coordinate with your trades, respect project
                timelines, and deliver{" "}
                <strong>paint-ready drywall installation</strong> that keeps projects
                moving.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="text-xl font-semibold mb-2">HEPA Dust Control</h4>
              <p className="text-gray-600 text-sm">
                HEPA-connected sanders and negative air containment keep dust
                out of living spaces. Critical for occupied buildings,{" "}
                <strong>condo drywall installation</strong>, and{" "}
                <strong>commercial drywall installation</strong> projects with strict
                cleanliness requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-white border border-rose-100">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="text-xl font-semibold mb-2">3-Year Warranty</h4>
              <p className="text-gray-600 text-sm">
                Photo documentation at every stage, moisture readings logged,
                3-year workmanship warranty. Our{" "}
                <strong>drywall installation services</strong> include accountability
                measures that protect your investment and satisfy insurance
                adjusters.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                How we work
              </p>
              <h3 className="text-3xl font-bold">
                Professional drywall installation process
              </h3>
              <p className="mt-2 text-gray-600">
                Consistent methodology for{" "}
                <strong>drywall hanging, taping, and finishing</strong> from assessment to
                final inspection
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-gray-200 p-5"
              >
                <span className="text-sm font-semibold text-blue-600">
                  Step {item.step}
                </span>
                <h4 className="mt-2 text-xl font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COST & SCHEDULING */}
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            How we price drywall installation services
          </h3>
          <p className="mt-2 text-gray-600">
            Cost depends on framing readiness, square footage, ceiling height,
            board type, finish level, access, and whether the scope includes
            primer or paint. Factors like{" "}
            <strong>drywall installation after water damage</strong>,
            <strong> drywall installation after demolition</strong>, and
            coordination with other trades influence the final quote.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h4 className="font-semibold text-lg mb-2">Residential scopes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Basement drywall installation</strong></li>
                <li>• <strong>Ceiling drywall installation</strong> and bulkheads</li>
                <li>• <strong>Drywall installation for additions</strong></li>
                <li>• Level 4 or Level 5 finish, primer, and sanding</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h4 className="font-semibold text-lg mb-2">Commercial scopes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Drywall installation for commercial buildouts</strong></li>
                <li>• <strong>Framing and drywall installation</strong> coordination</li>
                <li>• <strong>Drywall installation after mechanical trades</strong></li>
                <li>• After-hours access, COI, and safety compliance</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Every project receives a firm written quote before work begins. Our{" "}
            <strong>drywall installation contractor</strong> team maintains transparent
            pricing with no hidden fees.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={PHONE_HREF} aria-label={PHONE_ARIA} className="btn-cta">
              Talk through scope
            </a>
            <a
              href="/quote/"
              className="btn-cta bg-white text-blue-600 border border-blue-600"
            >
              Send drawings + sizes
            </a>
          </div>
        </section>

        {/* EXPERTISE & TECHNIQUES */}
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            Advanced drywall installation techniques
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Structural & substrate repairs
              </h4>
              <p className="text-gray-600 mb-3">
                Our <strong>drywall contractors</strong> assess framing before
                any <strong>drywall hanging</strong>. We identify stud
                spacing issues, improper backing, and moisture intrusion that
                causes <strong>loose drywall seams</strong>.
              </p>
              <p className="text-gray-600">
                For <strong>drywall installation after water damage</strong>, we use
                moisture meters to verify substrate is below 12% before new
                material goes up. This prevents future{" "}
                <strong>drywall taping and mudding</strong> callbacks.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Finish quality standards
              </h4>
              <p className="text-gray-600 mb-3">
                Every <strong>drywall finishing</strong> project targets a{" "}
                <strong>smooth, flawless finish</strong> with{" "}
                <strong>no visible joints</strong>. We feather compounds
                12-18" beyond seams, use multiple thin coats instead of
                thick single applications, and perform raking-light inspections.
              </p>
              <p className="text-gray-600">
                Surfaces are <strong>ready for painting</strong> or{" "}
                <strong>ready for wallpaper</strong> without additional prep
                work required.
              </p>
            </div>
          </div>
        </section>

        {/* COMMON SCOPES */}
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            Common drywall installation scopes we handle
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-5">
              <h4 className="font-semibold text-lg mb-2">
                Renovations & rebuilds
              </h4>
              <p className="text-sm text-gray-700">
                After demolition, we <strong>remove and replace drywall</strong>,
                rebuild soffits, and deliver <strong>new drywall for renovation</strong>
                scopes with coordinated inspections and finish levels.
              </p>
            </div>
            <div className="rounded-2xl bg-green-50 p-5">
              <h4 className="font-semibold text-lg mb-2">Basements & additions</h4>
              <p className="text-sm text-gray-700">
                Full <strong>basement drywall installation</strong>, stairwells, and
                <strong> drywall installation for additions</strong> with framing tweaks,
                insulation upgrades, and vapor barrier coordination.
              </p>
            </div>
            <div className="rounded-2xl bg-purple-50 p-5">
              <h4 className="font-semibold text-lg mb-2">
                Commercial buildouts
              </h4>
              <p className="text-sm text-gray-700">
                <strong>Drywall installation for commercial buildouts</strong>,
                lobbies, medical suites, and retail spaces requiring precise
                scheduling, COI, and <strong>ceiling drywall installation</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* MATERIAL SELECTION */}
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            Materials & compounds for Level 4 and Level 5 finishes
          </h3>
          <p className="mt-2 text-gray-600">
            Professional <strong>drywall installation services</strong> require proper
            material selection. Our crews stock multiple compound types, trims,
            primers, and specialty boards for different substrates.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4 text-sm">
            <div className="rounded-2xl border border-gray-200 p-4">
              <strong className="text-gray-900">Setting compounds</strong>
              <p className="text-gray-600 mt-1">
                For fast <strong>drywall hanging</strong> tie-ins, butt joints,
                and <strong>drywall replacement</strong> patches
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <strong className="text-gray-900">All-purpose mud</strong>
              <p className="text-gray-600 mt-1">
                Standard <strong>drywall taping and mudding</strong> passes
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <strong className="text-gray-900">Topping compounds</strong>
              <p className="text-gray-600 mt-1">
                <strong>Drywall sanding</strong> and <strong>skim coat</strong> finishes
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-4">
              <strong className="text-gray-900">Specialty primers</strong>
              <p className="text-gray-600 mt-1">
                Sealers for <strong>drywall installation after water damage</strong>
              </p>
            </div>
          </div>
        </section>

        {/* LOCAL SEO & EXPERTISE */}
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            GTA Drywall Installation Expertise
          </h3>

          <div className="mt-4 space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Professional Drywall Installation Contractor You Can Trust
              </h4>
              <p className="text-gray-600 leading-relaxed">
                With over a decade delivering Level 5 finishes across
                residential towers, custom homes, retail buildouts, and
                <strong> drywall installation for commercial buildouts</strong>,
                our <strong>drywall contractors</strong> bring proven expertise to
                every job.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Drywall Hanging, Taping & Skim Coating
              </h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                Every <strong>drywall installation</strong> begins with layout verification,
                blocking, and fastening checks. We document ceiling heights, stud spacing,
                and mechanical penetrations before hanging <strong>drywall board</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                After hanging, we perform <strong>drywall taping and mudding</strong>,
                <strong> drywall sanding</strong>, and a full <strong>skim coat</strong>
                when Level 5 finish is specified. Raking-light inspections happen before primer.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Surfaces are delivered <strong>ready for painting</strong> or
                <strong> ready for wallpaper</strong> with no flashing seams.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Drywall Installation After Water Damage
              </h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>Drywall installation after water damage</strong> requires
                moisture testing, demolition, and drying before new board goes up.
                We provide insurance photos, moisture readings, and use mold-resistant boards
                in basements or bathrooms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Occupied buildings get containment, HEPA filtration, and daily cleanup
                so families or tenants can stay on site while we work.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Ceiling & Commercial Drywall Installation
              </h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                <strong>Ceiling drywall installation</strong> demands proper lifts,
                layout, and control joints. We handle vaulted ceilings, coffers, and
                acoustic ceiling drywall with precise taping and sanding.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For <strong>commercial drywall installation</strong> we meet access requirements,
                provide COI, respect noise windows, and coordinate after-hours work.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Residential, Condo & Builder Programs
              </h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                We execute <strong>residential drywall installation</strong> scopes ranging from
                single rooms to entire custom homes. <strong>Condo drywall installation</strong>
                includes elevator bookings, protection, and clean deliveries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Builders rely on us for <strong>drywall installation for additions</strong> and
                spec homes. We offer progress photos, inspection support, and schedule reporting.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Documentation & Warranty
              </h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                Every <strong>drywall installation contractor</strong> project includes photo
                documentation at key milestones—pre-board, post-hanging, post-taping, and
                final inspection.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our 3-year workmanship warranty covers finish quality, adhesion,
                and cracking under normal conditions across residential, condo, and
                <strong> commercial drywall installation</strong> projects.
              </p>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
              <h4 className="text-xl font-semibold mb-3">
                Complete Installation Solutions
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beyond board and mud, our teams coordinate with related trades to deliver complete
                solutions:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Framing and drywall installation</strong> packages with insulation, vapor barrier, and inspection coordination
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Drywall installation after mechanical trades</strong> with fire caulking and shaft wall tie-ins
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Level 5 finish</strong> programs for high-end residential and gallery spaces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Drywall installation after demolition</strong> with debris removal and dust control
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Insurance documentation</strong> when scope follows water or fire damage
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              aria-label={PHONE_ARIA}
              className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              📞 Schedule Install Assessment
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center rounded-full border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
            >
              Get Installation Quote
            </a>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">
            Drywall Installation Near You
          </h3>
          <p className="mt-2 text-gray-600">
            Same team, different neighborhoods: Mississauga basements, Burlington
            additions, Hamilton commercial bays, St. Catharines heritage rebuilds,
            Oakville lakefront homes, Milton new construction, Etobicoke towers,
            Grimsby escarpment properties, and Dundas infill projects. Our
            <strong> drywall installation contractor</strong> team delivers consistent
            <strong> professional drywall installation</strong> quality from downtown Toronto
            to Niagara.
          </p>

          <div className="mt-6 mb-4">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">
              Core Service Areas
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {cities.map((city) => (
                <div
                  key={city.slug}
                  className="rounded-2xl border border-gray-200 p-4 text-sm font-semibold text-gray-700 hover:border-blue-400 transition"
                >
                  {city.name}
                </div>
              ))}
            </div>
            <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Featured City Pages
              </h4>
              <p className="text-gray-700 mb-4">
                Detailed drywall installation guides for major GTA cities:
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <Link
                  href="/services/drywall-installation/burlington/"
                  className="rounded-xl border-2 border-blue-300 bg-white p-4 text-center font-semibold text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="text-2xl mb-2">🏘️</div>
                  Drywall Installation Burlington
                </Link>
                <Link
                  href="/services/drywall-installation/hamilton/"
                  className="rounded-xl border-2 border-blue-300 bg-white p-4 text-center font-semibold text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="text-2xl mb-2">🏗️</div>
                  Drywall Installation Hamilton
                </Link>
                <Link
                  href="/services/drywall-installation/mississauga/"
                  className="rounded-xl border-2 border-blue-300 bg-white p-4 text-center font-semibold text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="text-2xl mb-2">🏢</div>
                  Drywall Installation Mississauga
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">
              Extended Niagara Region Coverage
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {["Drywall Installation Grimsby", "Drywall Installation St. Catharines"].map(
                (text) => (
                  <div
                    key={text}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-gray-700"
                  >
                    {text}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <p className="text-gray-700 leading-relaxed">
              <strong>Extended service radius:</strong> Our{" "}
              <strong>drywall contractors</strong> regularly travel throughout
              the Golden Horseshoe for
              <strong> commercial drywall installation</strong>,{" "}
              <strong>drywall installation after water damage</strong>, and large-scale
              renovation projects. From Niagara Falls to Oakville, we maintain
              the same Level 5 finish standards and 3-year warranty across all
              service areas.
            </p>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Professional <strong>drywall installation services</strong> available in
            all GTA regions. Need patching instead?{" "}
            <Link
              href="/services/drywall-repair/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Visit our drywall repair service
            </Link>
            . Looking for a local install hub? Start with{" "}
            <Link
              href="/services/drywall-installation/mississauga/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Mississauga
            </Link>
            ,{" "}
            <Link
              href="/services/drywall-installation/burlington/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Burlington
            </Link>
            , or{" "}
            <Link
              href="/services/drywall-installation/hamilton/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Hamilton
            </Link>
            .
          </p>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
              Authority Flow
            </p>
            <h3 className="text-3xl font-bold">
              Drywall city pages, guides, and project stories
            </h3>
            <p className="text-gray-600">
              This hub now feeds the drywall city pages, supporting drywall
              guides, and project pages so the section has its own internal
              loop instead of borrowing authority from popcorn content.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h4 className="text-xl font-semibold mb-4">Drywall city pages</h4>
              <div className="space-y-3">
                {authorityGroups.cities.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition"
                  >
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h4 className="text-xl font-semibold mb-4">
                Supporting drywall guides
              </h4>
              <div className="space-y-3">
                {authorityGroups.guides.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition"
                  >
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h4 className="text-xl font-semibold mb-4">
                Drywall project pages
              </h4>
              <div className="space-y-3">
                {authorityGroups.projects.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition"
                  >
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
              FAQ
            </p>
            <h3 className="text-3xl font-bold">Drywall installation FAQs</h3>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-gray-200 p-5"
              >
                <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-blue-600">▼</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_HREF} aria-label={PHONE_ARIA} className="btn-cta">
              Schedule drywall install
            </a>
            <a
              href="/quote/"
              className="btn-cta bg-white text-blue-600 border border-blue-600"
            >
              Request drywall quote
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white shadow-2xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Ready when you are
            </p>
            <h3 className="text-3xl font-bold">
              Book seamless drywall installation today
            </h3>
            <p className="text-white/80">
              Professional drywall installation services with transparent scope,
              warranty, and photo documentation. Send plans now and we will
              confirm your start date.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              aria-label={PHONE_ARIA}
              className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-slate-800 shadow-lg"
            >
              📞 {PHONE_TEXT}
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Request drywall quote
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
}
