import Link from "next/link";
import { CONTACT, SITE_URL } from "@/app/config";
import { cities } from "@/data/cities";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

const PAGE_URL = "/services/drywall-repair/";
const ABSOLUTE_URL = `${
  SITE_URL?.replace(/\/$/, "") || "https://epfproservices.com"
}${PAGE_URL}`;

const PHONE_TEXT = CONTACT?.phone || "(647) 923-6784";
const PHONE_HREF = CONTACT?.phoneHref || "tel:+16479236784";
const PHONE_ARIA = `Call EPF Pro Services at ${PHONE_TEXT}`;

const CORE_KEYWORDS = [
  "drywall repair",
  "drywall repair services",
  "drywall repair company",
  "drywall contractor",
  "drywall contractors",
  "professional drywall repair",
];

export const metadata = {
  title:
    "Drywall Repair Services | Seamless Patching & Water Damage Specialists | EPF Pro Services",
  description:
    "Professional drywall repair company GTA. Expert patching, crack fixes, water damage repair. HEPA sanding, Level 5 finish. Free quote.",
  keywords: [
    ...CORE_KEYWORDS,
    "drywall patch repair",
    "drywall patching",
    "hole in drywall repair",
    "repair holes in drywall",
    "drywall dent repair",
    "nail pop repair",
    "small drywall repair",
    "minor drywall repair",
    "drywall crack repair",
    "wall crack repair",
    "drywall seam repair",
    "drywall tape repair",
    "loose drywall tape repair",
    "bubbling drywall tape repair",
    "joint compound repair",
    "water damaged drywall repair",
    "drywall water damage repair",
    "drywall repair after leak",
    "ceiling water damage repair",
    "repair or replace water damaged drywall",
    "seamless drywall repair",
    "smooth wall repair",
    "paint-ready drywall repair",
    "smooth, flawless finish",
    "ready for painting",
    "ready for wallpaper",
    "no visible patch lines",
    "drywall repair after plumbing",
    "drywall repair after electrical work",
    "drywall repair after HVAC",
    "drywall repair after renovations",
    "residential drywall repair",
    "commercial drywall repair",
    "condo drywall repair",
    "basement drywall repair",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "GTA Drywall Repair Services | Seamless, Paint-Ready Finish | EPF Pro Services",
    description:
      "Professional drywall repair company for holes, cracks, water damage, and trade cut-outs. Seamless, paint-ready drywall repair across the GTA.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "/gallery/drywall-repair/drywall-repair-service00001.webp",
        width: 1200,
        height: 630,
        alt: "Professional drywall repair services - Level 5 seamless finish by expert GTA drywall contractors",
      },
    ],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const areaServed = cities.map((c) => c.name);
  const serviceTypes = [
    ...CORE_KEYWORDS,
    "drywall patch repair",
    "drywall crack repair",
    "water damaged drywall repair",
    "seamless drywall repair",
    "drywall repair after plumbing",
    "condo drywall repair",
    "commercial drywall repair",
    "basement drywall repair",
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Professional Drywall Repair Services",
        serviceType: serviceTypes,
        areaServed,
        provider: {
          "@type": "LocalBusiness",
          name: "EPF Pro Services",
          telephone: PHONE_TEXT,
          url: SITE_URL,
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
            item: { "@id": SITE_URL } || "https://epfproservices.com",
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
            name: "Drywall Repair",
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
    q: "Do you provide seamless drywall repair for both small and large areas?",
    a: "Yes. From nail pop repair and small drywall repair to full wall sections after renovations, we feather, skim, and prime so the surface is paint-ready with no visible patch lines.",
  },
  {
    q: "Can you handle drywall repair after plumbing or electrical work?",
    a: "We coordinate drywall repair after plumbing, electrical, HVAC, or renovation work. We protect finished spaces, match textures, and leave surfaces ready for painting or wallpaper.",
  },
  {
    q: "What about drywall water damage repair?",
    a: "Our team triages water damaged drywall repair by cutting out saturated material, drying the cavity, installing new board if required, and delivering a smooth, flawless finish.",
  },
  {
    q: "Do you work in condos and commercial spaces?",
    a: "Yes. We regularly deliver condo drywall repair, residential drywall repair, and commercial drywall repair with COI, WSIB, and scheduling that respects building quiet hours.",
  },
  {
    q: "How fast can I get drywall repair services scheduled?",
    a: "Share photos for a same-day quote. We hold dedicated crews for urgent drywall repair after leak or trade cut-outs so you can keep projects moving.",
  },
];

const patchKeywords = [
  "drywall patch repair",
  "drywall patching",
  "hole in drywall repair",
  "repair holes in drywall",
  "drywall dent repair",
  "nail pop repair",
  "small drywall repair",
  "minor drywall repair",
];

const crackKeywords = [
  "drywall crack repair",
  "wall crack repair",
  "drywall seam repair",
  "drywall tape repair",
  "loose drywall tape repair",
  "bubbling drywall tape repair",
  "joint compound repair",
];

const waterKeywords = [
  "water damaged drywall repair",
  "drywall water damage repair",
  "drywall repair after leak",
  "ceiling water damage repair",
  "repair or replace water damaged drywall",
];

const finishKeywords = [
  "seamless drywall repair",
  "smooth wall repair",
  "paint-ready drywall repair",
  "smooth, flawless finish",
  "ready for painting",
  "ready for wallpaper",
  "no visible patch lines",
];

const tradeKeywords = [
  "drywall repair after plumbing",
  "drywall repair after electrical work",
  "drywall repair after HVAC",
  "drywall repair after renovations",
];

const audienceKeywords = [
  "residential drywall repair",
  "commercial drywall repair",
  "condo drywall repair",
  "basement drywall repair",
];

export default function Page() {
  const gallery = [
    {
      src: "/gallery/drywall-repair/drywall-repair-service00001.webp",
      alt: "Level 5 drywall patch repair with seamless finish - GTA drywall contractors",
      caption:
        "Level 5 drywall patch repair and skim coating to erase plumbing cut-outs before painting.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00002.webp",
      alt: "Water damaged drywall repair after leak - emergency ceiling water damage restoration",
      caption:
        "Emergency ceiling drywall repair after a leak with stain blocking primer and HEPA sanding.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00003.webp",
      alt: "Drywall crack repair and tape reinforcement ready for painting",
      caption:
        "Crack and seam repair reinforced with fiberglass mesh to keep condo drywall smooth.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00004.webp",
      alt: "Small drywall repair and nail pop repair - seamless patching service",
      caption:
        "Nail pop repair plus skim coat finishing for paint-ready accent walls in Mississauga homes.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00005.webp",
      alt: "Commercial drywall repair after plumbing work - condo and residential repair services",
      caption:
        "Commercial drywall repair after plumbing upgrades with dust control to protect tenant spaces.",
    },
    {
      src: "/gallery/drywall-repair/drywall-repair-service00007.webp",
      alt: "Drywall repair after renovations - HVAC and electrical cut-out restoration",
      caption:
        "Post-renovation drywall repair tying in HVAC and electrical cut-outs for a flawless ceiling.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess & protect",
      body: "Photos + site visit to log substrates, moisture readings, and how we will protect floors, furniture, and HVAC before any drywall repair services begin.",
    },
    {
      step: "02",
      title: "Cut, patch, or skim",
      body: "We remove loose material, secure backing, install new board if needed, and handle drywall patch repair or crack reinforcement with mesh, tape, or trim.",
    },
    {
      step: "03",
      title: "Feather & refine",
      body: "Multiple coats of joint compound repair are feathered wide. We check drywall seam repair and tape work under strong light to guarantee a smooth, flawless finish.",
    },
    {
      step: "04",
      title: "Sand, prime, confirm",
      body: "HEPA sanding, vacuum detail, sealers or stain-block primer keep the surface ready for painting or ready for wallpaper with no visible patch lines.",
    },
    {
      step: "05",
      title: "Optional paint & turnover",
      body: "Need us to paint? We can deliver a turnkey, paint-ready drywall repair so the space can go back online quickly.",
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
                    Professional{" "}
                    <span className="text-blue-600">Drywall Repair</span>{" "}
                    Services
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                    Expert <strong>drywall repair company</strong> for water
                    damage, cracks, patches & seamless finishes
                  </p>
                </div>

                {/* Key Services List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">💧</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Water Damage Repair
                      </h3>
                      <p className="text-sm text-gray-600">
                        Emergency <strong>ceiling water damage repair</strong> &
                        leak restoration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🔧</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Patching & Holes
                      </h3>
                      <p className="text-sm text-gray-600">
                        <strong>Drywall patch repair</strong>, nail pops & dent
                        fixes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Crack Repair
                      </h3>
                      <p className="text-sm text-gray-600">
                        <strong>Drywall crack repair</strong>, seam & tape
                        reinforcement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🏗️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        Trade Cut-Outs
                      </h3>
                      <p className="text-sm text-gray-600">
                        <strong>Drywall repair after plumbing</strong>,
                        electrical & HVAC work
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 items-center pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      Level 5 Finish Standard
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      3-Year Warranty
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      Same-Day Emergency
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      WSIB + $5M Liability
                    </span>
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
                    <span className="text-xl">📋</span> Free Quote
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Need brand-new drywall hung?{" "}
                  <Link
                    href="/services/drywall-installation/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Visit our drywall installation team
                  </Link>
                  .
                </p>
              </div>

              {/* Right Column - Hero Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/gallery/drywall-repair/drywall-repair.webp"
                    alt="Professional drywall repair services - expert drywall contractors finishing seamless ceiling repair in GTA home"
                    className="w-full h-[500px] object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6">
                    <div className="text-white">
                      <p className="text-sm font-semibold mb-1 text-blue-300">
                        TRUSTED BY 127+ HOMEOWNERS
                      </p>
                      <p className="text-2xl font-bold">
                        Seamless Drywall Repair Across the GTA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border-2 border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">⭐</div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">5</p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Google Rating
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-5 border-2 border-blue-500">
                  <div className="text-white text-center">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-sm font-semibold">
                      Emergency
                      <br />
                      Response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-12"
            >
              <path
                d="M0 48h1440V0c-240 48-480 48-720 0S240 0 0 48z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Content Container */}
        <div className="container-x space-y-16">
          {/* HERO */}
          <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-blue-600 font-semibold">
                GTA Drywall Repair Company
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Seamless drywall repair services for leaks, cracks, dents, and
                trade cut-outs
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                We are the <strong>drywall repair company</strong> homeowners,
                facility managers, and builders call when they need
                <strong> professional drywall repair</strong> that blends
                perfectly. Crews handle patches,
                <strong> drywall contractors</strong> for large scopes, and
                emergency <strong>drywall repair after leak</strong> calls
                daily.
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
                5★ Google rating • 3-year workmanship warranty • Daily
                revalidation keeps this page fresh.
              </p>
            </div>
            <div className="rounded-3xl border bg-white p-6 shadow-xl">
              <h2 className="text-xl font-semibold">
                Need drywall repair after plumbing or leaks?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Send photos of the area, note ceiling height, and let us know if
                the drywall is still wet. Same-day scope plus schedule.
              </p>
              <QuoteForm />
              <p className="mt-3 text-xs text-gray-500">
                📍 Servicing Mississauga, Toronto, Oakville, Burlington,
                Hamilton, Milton, Etobicoke, Grimsby, St. Catharines.
              </p>
            </div>
          </section>

          {/* PATCH + CRACK + WATER */}
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="group relative rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Patching & small jobs
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Tidy <strong>drywall patch repair</strong> from quarter-sized
                dents to full stud-bay cut-outs.
                <strong> Hole in drywall repair</strong>,{" "}
                <strong>drywall dent repair</strong>,{" "}
                <strong>nail pop repair</strong>, and{" "}
                <strong>small drywall repair</strong> or{" "}
                <strong>minor drywall repair</strong> all receive wide feathered
                coats so we can
                <strong> repair holes in drywall</strong> without flash lines.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cracks, seams & tape
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Structural movement, poor framing, or humidity can cause seams
                to fail. We handle
                <strong> drywall crack repair</strong>, reinforce corners,
                perform <strong>drywall tape repair</strong>, and address
                <strong> loose drywall tape repair</strong> or{" "}
                <strong>bubbling drywall tape repair</strong> with the right
                joint compound system.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Water & ceiling damage
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Emergency crews for{" "}
                <strong>water damaged drywall repair</strong> on ceilings,
                walls, and soffits. We isolate the leak, remove compromised
                board, and deliver a <strong>smooth wall repair</strong> that is
                ready for painting.
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
                24/7 Leak Support
              </p>
              <h3 className="text-2xl font-bold">
                Need drywall repair after leak or ceiling water damage?
              </h3>
              <p className="text-blue-100">
                We hold emergency slots for plumbers, HVAC techs, and property
                managers. Stabilize, dry, repair, paint.
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
                Upload leak photos
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
                  Every project targets <strong>seamless drywall repair</strong>{" "}
                  with a <strong>smooth, flawless finish</strong>. Surfaces are
                  <strong> paint-ready drywall repair</strong> and{" "}
                  <strong>ready for wallpaper</strong> installs. We confirm
                  there are
                  <strong> no visible patch lines</strong> under daylight or
                  raking light.
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
                  After-trade & renovation cleanup
                </h3>
                <p className="mt-2 text-gray-600">
                  Coordinating with other trades? We provide{" "}
                  <strong>drywall repair after plumbing</strong>,
                  <strong> drywall repair after electrical work</strong>,{" "}
                  <strong>drywall repair after HVAC</strong>, and punch-list
                  <strong> drywall repair after renovations</strong>, so
                  projects hand off smoothly.
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
                    <span>📞</span> Call for drywall repair
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
                <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-3">
                  WHO WE SERVE
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Spaces we repair every week
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Precision drywall repair services for homeowners, property
                  managers, GC punch-out teams, and designers.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {audienceKeywords.map((kw, i) => {
                  const colors = [
                    "from-blue-500/20 to-blue-600/20 border-blue-400/30",
                    "from-green-500/20 to-green-600/20 border-green-400/30",
                    "from-purple-500/20 to-purple-600/20 border-purple-400/30",
                    "from-amber-500/20 to-amber-600/20 border-amber-400/30",
                  ];
                  return (
                    <div
                      key={kw}
                      className={`group rounded-2xl border-2 bg-gradient-to-br ${
                        colors[i % 4]
                      } backdrop-blur-sm p-5 text-center font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                    >
                      <div className="text-2xl mb-2">
                        {["🏠", "🏢", "🏗️", "🏘️"][i % 4]}
                      </div>
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
                <h3 className="text-3xl font-bold">Drywall repair gallery</h3>
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
                    alt={
                      item.alt || `Professional drywall repair project ${i + 1}`
                    }
                    loading={i < 3 ? "eager" : "lazy"}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    data-lightbox="true"
                  />
                  <div className="p-4 text-sm text-gray-700 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">
                      {item.caption}
                    </p>
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
                    "Emergency water damage repair after pipe burst. Crew
                    arrived same day, dried everything properly, replaced
                    damaged sections. Seamless finish—you can't tell where the
                    patch is. Exactly what we needed."
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
                    "Coordinated drywall repair after our electrician finished.
                    They matched the texture perfectly, primed, and left it
                    paint-ready. Professional crew, zero mess. Highly recommend
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
                    "Multiple crack repairs throughout our older home. They
                    explained the structural issues, reinforced properly, and
                    guaranteed the work. Three years later—still perfect. Worth
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
                    "Commercial property ceiling damage from roof leak. Fast
                    response, proper moisture testing, insurance documentation.
                    Tenants were back in 48 hours. Excellent commercial drywall
                    repair service."
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
                    "Basement flooding repair—removed damaged drywall, dried
                    studs, installed mold-resistant board. HEPA sanding kept
                    dust contained. Professional water damage specialists."
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
                    "Nail pops and small holes throughout condo before listing.
                    They batched everything in one visit, smooth finish, fast
                    turnaround. Place sold above asking—presentation matters!"
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
                Why choose our drywall repair company?
              </h3>
              <p className="mt-2 text-gray-600">
                What sets our <strong>professional drywall repair</strong> apart
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
                  <strong>seamless drywall repair</strong> project gets the same
                  attention—whether it's a small nail pop or full wall section.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-semibold mb-2">
                  Emergency Response
                </h4>
                <p className="text-gray-600 text-sm">
                  Dedicated crews for <strong>drywall repair after leak</strong>{" "}
                  situations. We respond within hours with moisture meters,
                  containment equipment, and insurance documentation. Most{" "}
                  <strong>ceiling water damage repair</strong> projects
                  stabilized same-day.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                <div className="text-4xl mb-3">🔬</div>
                <h4 className="text-xl font-semibold mb-2">Moisture Testing</h4>
                <p className="text-gray-600 text-sm">
                  Calibrated meters verify substrate below 12% before new
                  material installs. This prevents{" "}
                  <strong>bubbling drywall tape repair</strong> callbacks and
                  ensures <strong>water damaged drywall repair</strong> lasts.
                  Readings documented for insurance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
                <div className="text-4xl mb-3">🏗️</div>
                <h4 className="text-xl font-semibold mb-2">
                  Trade Coordination
                </h4>
                <p className="text-gray-600 text-sm">
                  Seamless scheduling for{" "}
                  <strong>drywall repair after plumbing</strong>, electrical, or
                  HVAC work. We coordinate with your trades, respect project
                  timelines, and deliver{" "}
                  <strong>paint-ready drywall repair</strong> that keeps
                  projects moving.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="text-xl font-semibold mb-2">
                  HEPA Dust Control
                </h4>
                <p className="text-gray-600 text-sm">
                  HEPA-connected sanders and negative air containment keep dust
                  out of living spaces. Critical for occupied buildings,{" "}
                  <strong>condo drywall repair</strong>, and{" "}
                  <strong>commercial drywall repair</strong> projects with
                  strict cleanliness requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-white border border-rose-100">
                <div className="text-4xl mb-3">📋</div>
                <h4 className="text-xl font-semibold mb-2">3-Year Warranty</h4>
                <p className="text-gray-600 text-sm">
                  Photo documentation at every stage, moisture readings logged,
                  3-year workmanship warranty. Our{" "}
                  <strong>drywall repair services</strong> include
                  accountability measures that protect your investment and
                  satisfy insurance adjusters.
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
                  Professional drywall repair process
                </h3>
                <p className="mt-2 text-gray-600">
                  Consistent methodology for{" "}
                  <strong>seamless drywall repair</strong> from assessment to
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
              How we price drywall repair services
            </h3>
            <p className="mt-2 text-gray-600">
              Cost depends on substrate condition, number of coats required,
              access difficulty, staging needs, and whether surfaces need
              repainting after <strong>drywall repair</strong>. Factors like{" "}
              <strong>water damaged drywall repair</strong> complexity,
              emergency timing for <strong>drywall repair after leak</strong>,
              and coordination with other trades all influence final pricing.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-5">
                <h4 className="font-semibold text-lg mb-2">Small repairs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • <strong>Nail pop repair</strong> and minor surface fixes
                  </li>
                  <li>
                    • <strong>Small drywall repair</strong> (under 6" holes)
                  </li>
                  <li>
                    • <strong>Drywall dent repair</strong> and dings
                  </li>
                  <li>• Quick turnaround, minimal staging</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <h4 className="font-semibold text-lg mb-2">Large-scale work</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • <strong>Drywall repair after plumbing</strong> or
                    electrical
                  </li>
                  <li>
                    • <strong>Ceiling water damage repair</strong> full sections
                  </li>
                  <li>
                    • Multiple room <strong>drywall crack repair</strong>
                  </li>
                  <li>
                    • <strong>Commercial drywall repair</strong> projects
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Every project receives a firm written quote before work begins.
              Our <strong>drywall repair company</strong> maintains transparent
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
                Send photos + sizes
              </a>
            </div>
          </section>

          {/* EXPERTISE & TECHNIQUES */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Advanced drywall repair techniques
            </h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Structural & substrate repairs
                </h4>
                <p className="text-gray-600 mb-3">
                  Our <strong>drywall contractors</strong> assess framing before
                  any <strong>drywall patch repair</strong>. We identify stud
                  spacing issues, improper backing, and moisture intrusion that
                  causes <strong>loose drywall tape repair</strong> failures.
                </p>
                <p className="text-gray-600">
                  For <strong>water damaged drywall repair</strong>, we use
                  moisture meters to verify substrate is below 12% before new
                  material goes up. This prevents future{" "}
                  <strong>bubbling drywall tape repair</strong> callbacks.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Finish quality standards
                </h4>
                <p className="text-gray-600 mb-3">
                  Every <strong>seamless drywall repair</strong> project targets
                  a <strong>smooth, flawless finish</strong> with{" "}
                  <strong>no visible patch lines</strong>. We feather compounds
                  12-18" beyond patch edges, use multiple thin coats instead of
                  thick single applications, and perform raking-light
                  inspections.
                </p>
                <p className="text-gray-600">
                  Surfaces are <strong>ready for painting</strong> or{" "}
                  <strong>ready for wallpaper</strong> without additional prep
                  work required.
                </p>
              </div>
            </div>
          </section>

          {/* COMMON SCENARIOS */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Common drywall repair scenarios we handle
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-blue-50 p-5">
                <h4 className="font-semibold text-lg mb-2">
                  Emergency water damage
                </h4>
                <p className="text-sm text-gray-700">
                  Burst pipes, roof leaks, HVAC condensation—our teams respond
                  fast for <strong>drywall repair after leak</strong>{" "}
                  situations. We stabilize, dry cavities, remove compromised
                  material, and deliver{" "}
                  <strong>ceiling water damage repair</strong> that prevents
                  mold growth.
                </p>
              </div>
              <div className="rounded-2xl bg-green-50 p-5">
                <h4 className="font-semibold text-lg mb-2">
                  Trade coordination
                </h4>
                <p className="text-sm text-gray-700">
                  <strong>Drywall repair after electrical work</strong>,{" "}
                  <strong>drywall repair after HVAC</strong> installs, and{" "}
                  <strong>drywall repair after renovations</strong> require
                  precise timing. We coordinate with your trades to minimize
                  downtime and deliver punch-list{" "}
                  <strong>paint-ready drywall repair</strong>.
                </p>
              </div>
              <div className="rounded-2xl bg-purple-50 p-5">
                <h4 className="font-semibold text-lg mb-2">
                  Structural failures
                </h4>
                <p className="text-sm text-gray-700">
                  Settlement cracks, foundation movement, and improper framing
                  cause ongoing <strong>drywall crack repair</strong> and{" "}
                  <strong>drywall seam repair</strong> issues. We address root
                  causes, not just symptoms, with proper reinforcement and{" "}
                  <strong>joint compound repair</strong> systems.
                </p>
              </div>
            </div>
          </section>

          {/* MATERIAL SELECTION */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Materials & compounds for lasting results
            </h3>
            <p className="mt-2 text-gray-600">
              Professional <strong>drywall repair services</strong> require
              proper material selection. Our{" "}
              <strong>drywall repair company</strong> stocks multiple compound
              types, mesh and paper tapes, primers, and specialty products for
              different substrates.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4 text-sm">
              <div className="rounded-2xl border border-gray-200 p-4">
                <strong className="text-gray-900">Setting compounds</strong>
                <p className="text-gray-600 mt-1">
                  For quick <strong>hole in drywall repair</strong> and
                  structural patches
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4">
                <strong className="text-gray-900">All-purpose mud</strong>
                <p className="text-gray-600 mt-1">
                  Standard <strong>drywall patching</strong> and{" "}
                  <strong>drywall tape repair</strong>
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4">
                <strong className="text-gray-900">Topping compounds</strong>
                <p className="text-gray-600 mt-1">
                  Final coat for <strong>smooth wall repair</strong> finish
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4">
                <strong className="text-gray-900">Specialty primers</strong>
                <p className="text-gray-600 mt-1">
                  Stain-block for <strong>water damaged drywall repair</strong>
                </p>
              </div>
            </div>
          </section>

          {/* LOCAL SEO & EXPERTISE */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              GTA Drywall Repair Expertise
            </h3>

            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Professional Drywall Repair Company You Can Trust
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  With over a decade delivering Level 5 finishes across
                  residential towers, custom homes, retail build-outs, and
                  insurance-driven
                  <strong> drywall repair after leak</strong> projects, our{" "}
                  <strong>drywall contractors</strong> bring proven expertise to
                  every job.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Seamless Drywall Repair Services
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Every <strong>professional drywall repair</strong> project
                  begins with thorough assessment. We document existing
                  conditions, identify moisture sources for
                  <strong> water damaged drywall repair</strong>, verify framing
                  integrity, and measure ceiling heights before materials
                  arrive.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  For <strong>drywall patch repair</strong> work, we cut clean
                  edges, install proper backing, and feather joint compound
                  12-18 inches beyond patch perimeters. This eliminates the
                  flash lines and ridges common with rushed{" "}
                  <strong>hole in drywall repair</strong> jobs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>drywall repair company</strong> uses raking-light
                  inspection at multiple stages. Before primer goes on, we
                  verify the surface reads flat under harsh side lighting—the
                  same conditions that would reveal imperfections after paint.
                  This attention to detail ensures{" "}
                  <strong>seamless drywall repair</strong> results with{" "}
                  <strong>no visible patch lines</strong>.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Water Damage & Emergency Response
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>Ceiling water damage repair</strong> and{" "}
                  <strong>drywall water damage repair</strong> require immediate
                  action. Our emergency crews respond within hours for{" "}
                  <strong>drywall repair after leak</strong> situations,
                  stabilizing damage before mold growth begins.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use calibrated moisture meters to verify substrate moisture
                  content below 12% before new material installs. This critical
                  step prevents future
                  <strong> bubbling drywall tape repair</strong> callbacks and
                  ensures insurance documentation meets adjuster requirements.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For occupied buildings, we contain work zones with plastic
                  barriers and negative air machines, keeping dust and debris
                  away from living spaces during
                  <strong> water damaged drywall repair</strong> projects.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Structural Crack Repair Expertise
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Not all <strong>drywall crack repair</strong> and{" "}
                  <strong>wall crack repair</strong> projects are equal.
                  Settlement cracks, foundation movement, and improper framing
                  create stress points that standard{" "}
                  <strong>drywall tape repair</strong> cannot address long-term.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Our <strong>drywall contractors</strong> assess crack patterns
                  to identify root causes. For active movement, we install
                  flexible mesh tape systems and apply{" "}
                  <strong>joint compound repair</strong> in multiple thin
                  layers. This approach accommodates ongoing minor movement
                  without re-cracking.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Drywall seam repair</strong> and{" "}
                  <strong>loose drywall tape repair</strong> often indicate
                  moisture issues or inadequate framing. We address these
                  underlying problems before applying new finishes, preventing
                  repeat failures.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Trade Coordination & Renovation Support
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Renovation projects require precise timing for{" "}
                  <strong>drywall repair after plumbing</strong>,{" "}
                  <strong>drywall repair after electrical work</strong>, and
                  <strong> drywall repair after HVAC</strong> installations. We
                  coordinate schedules with other trades to minimize project
                  delays.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  For <strong>drywall repair after renovations</strong>, we
                  match existing textures, blend new finishes with surrounding
                  surfaces, and deliver
                  <strong> paint-ready drywall repair</strong> that painters can
                  work with immediately. This eliminates the back-and-forth
                  common when finish quality doesn't meet painter standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Commercial drywall repair</strong> projects often
                  require after-hours access and strict containment protocols.
                  We adapt our workflows to meet building requirements while
                  maintaining the same <strong>smooth, flawless finish</strong>{" "}
                  standards.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Residential & Condo Services
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>Residential drywall repair</strong> ranges from simple{" "}
                  <strong>nail pop repair</strong> to complex{" "}
                  <strong>basement drywall repair</strong> after flooding.{" "}
                  <strong>Condo drywall repair</strong> adds building access
                  requirements, insurance coordination, and noise restrictions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Our crews arrive with COI documentation, respect quiet hours,
                  protect common areas, and complete{" "}
                  <strong>small drywall repair</strong> and
                  <strong> minor drywall repair</strong> projects efficiently to
                  minimize disruption.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For homeowners tackling multiple repairs, we bundle{" "}
                  <strong>drywall dent repair</strong>,{" "}
                  <strong>repair holes in drywall</strong>, and surface prep
                  into single-visit projects. This approach reduces scheduling
                  complexity and delivers better value than piecemeal repairs.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Quality Materials & Proven Methods
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Professional <strong>drywall repair services</strong> require
                  proper material selection. We stock setting-type compounds for
                  structural
                  <strong> drywall patching</strong>, all-purpose mud for{" "}
                  <strong>drywall tape repair</strong>, and lightweight topping
                  compounds for final skim coats.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  For <strong>smooth wall repair</strong> projects, we apply
                  multiple thin coats rather than single thick applications.
                  Each layer is feathered, dried completely, and sanded before
                  the next coat. This method eliminates ridges and creates
                  surfaces that are <strong>ready for painting</strong> or
                  <strong> ready for wallpaper</strong> without additional
                  preparation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Specialty primers seal porous surfaces, block water stains
                  after <strong>ceiling water damage repair</strong>, and create
                  uniform absorption across patches. These products ensure paint
                  sheen stays consistent across repaired and original surfaces.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Documentation & Warranty
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Every <strong>drywall repair company</strong> project includes
                  photo documentation at key stages: pre-work conditions,
                  substrate preparation, compound application, and final
                  inspection. This record protects both parties and satisfies
                  insurance requirements for{" "}
                  <strong>drywall water damage repair</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our 3-year workmanship warranty covers finish quality,
                  adhesion failures, and cracking under normal conditions. For{" "}
                  <strong>commercial drywall repair</strong>, we provide
                  extended documentation including moisture readings, material
                  certifications, and photo logs that meet building department
                  requirements.
                </p>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                <h4 className="text-xl font-semibold mb-3">
                  Complete Repair Solutions
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beyond standard <strong>drywall repair services</strong>, our
                  teams coordinate with related trades to deliver complete
                  solutions:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Emergency response</strong> for burst pipes and
                      roof leaks requiring immediate{" "}
                      <strong>drywall repair after leak</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Mold remediation coordination</strong> when water
                      damage extends beyond surface repair
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Paint matching services</strong> so repairs blend
                      seamlessly with existing finishes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Texture matching</strong> for orange peel,
                      knockdown, and stipple patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Insurance documentation</strong> with detailed
                      photos and moisture readings
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
                📞 Schedule Repair Assessment
              </a>
              <a
                href="/quote/"
                className="inline-flex items-center rounded-full border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
              >
                Get Written Quote
              </a>
            </div>
          </section>

          {/* SERVICE AREAS */}
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">
              Drywall Repair Near You
            </h3>
            <p className="mt-2 text-gray-600">
              Same team, different neighborhoods: Mississauga condos, Burlington
              detached homes, Hamilton commercial bays, St. Catharines heritage
              residences, Oakville lakefront properties, Milton new builds,
              Etobicoke towers, Grimsby escarpment homes, and Dundas heritage
              districts. Our <strong>drywall repair company</strong> delivers
              consistent <strong>professional drywall repair</strong> quality
              regardless of location—from downtown Toronto high-rises to Niagara
              Region estates.
            </p>

            <div className="mt-6 mb-4">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Core Service Areas
              </h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Link
                  href="/services/drywall-repair/mississauga/"
                  className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-500 transition-all hover:shadow-md"
                >
                  Drywall Repair Mississauga
                </Link>

                <Link
                  href="/services/drywall-repair/burlington/"
                  className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-500 transition-all hover:shadow-md"
                >
                  Drywall Repair Burlington
                </Link>

                <Link
                  href="/services/drywall-repair/milton/"
                  className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-500 transition-all hover:shadow-md"
                >
                  Drywall Repair Milton
                </Link>

                <Link
                  href="/services/drywall-repair/oakville/"
                  className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-500 transition-all hover:shadow-md"
                >
                  Drywall Repair Oakville
                </Link>

                <Link
                  href="/services/drywall-repair/hamilton/"
                  className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-500 transition-all hover:shadow-md"
                >
                  Drywall Repair Hamilton
                </Link>

                <Link
                  href="/services/drywall-repair/grimsby/"
                  className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-500 transition-all hover:shadow-md"
                >
                  Drywall Repair Grimsby
                </Link>

                <Link
                  href="/services/drywall-repair/etobicoke/"
                  className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-500 transition-all hover:shadow-md"
                >
                  Drywall Repair Etobicoke
                </Link>

                {cities
                  .filter(
                    (city) =>
                      ![
                        "Mississauga",
                        "Burlington",
                        "Milton",
                        "Oakville",
                        "Hamilton",
                        "Grimsby",
                        "Etobicoke",
                      ].includes(city.name)
                  )
                  .map((city) => (
                    <div
                      key={city.slug}
                      className="rounded-2xl border border-gray-200 p-4 text-sm font-semibold text-gray-700 hover:border-blue-400 transition"
                    >
                      Drywall Repair {city.name}
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                Extended Niagara Region Coverage
              </h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {["Drywall Repair St. Catharines"].map((text) => (
                  <div
                    key={text}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-gray-700"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                <strong>Extended service radius:</strong> Our{" "}
                <strong>drywall contractors</strong> regularly travel throughout
                the Golden Horseshoe for
                <strong> commercial drywall repair</strong>, emergency{" "}
                <strong>water damaged drywall repair</strong>, and large-scale
                renovation projects. From Niagara Falls to Oakville, we maintain
                the same Level 5 finish standards and 3-year warranty across all
                service areas.
              </p>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Professional <strong>drywall repair services</strong> available in
              all GTA regions. Start with our local repair hubs in{" "}
              <Link
                href="/services/drywall-repair/mississauga/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Mississauga
              </Link>
              ,{" "}
              <Link
                href="/services/drywall-repair/burlington/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Burlington
              </Link>
              ,{" "}
              <Link
                href="/services/drywall-repair/oakville/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Oakville
              </Link>
              ,{" "}
              <Link
                href="/services/drywall-repair/hamilton/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Hamilton
              </Link>
              ,{" "}
              <Link
                href="/services/drywall-repair/milton/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Milton
              </Link>
              , or{" "}
              <Link
                href="/services/drywall-repair/grimsby/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Grimsby
              </Link>
              .
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                Repair Guides
              </p>
              <h3 className="text-3xl font-bold">
                Learn before you book drywall repair
              </h3>
              <p className="text-gray-600 max-w-3xl">
                These repair guides answer the common homeowner questions that
                sit just before a quote request: can this be patched, does the
                wall need new board, and when is DIY still realistic?
              </p>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-4">
              <Link
                href="/blog/how-to-patch-drywall/"
                className="rounded-3xl border-2 border-blue-200 bg-blue-50 p-6 transition hover:border-blue-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Patching Guide
                </p>
                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  How to patch drywall for small and large holes
                </h4>
                <p className="mt-3 text-slate-700">
                  The best repair method changes with hole size, edge condition,
                  and how clean the wall needs to look after paint.
                </p>
                <p className="mt-5 font-semibold text-blue-700">
                  Read guide →
                </p>
              </Link>

              <Link
                href="/blog/how-to-repair-large-drywall-holes-properly/"
                className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-6 transition hover:border-emerald-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Large Hole Guide
                </p>
                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  When a large drywall hole needs more than a patch
                </h4>
                <p className="mt-3 text-slate-700">
                  A straight look at backing, cut-out replacement, and what
                  makes larger repairs show after primer.
                </p>
                <p className="mt-5 font-semibold text-emerald-700">
                  Read guide →
                </p>
              </Link>

              <Link
                href="/blog/diy-drywall-repair-vs-hiring-a-professional/"
                className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-6 transition hover:border-amber-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                  DIY vs Pro
                </p>
                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  When drywall repair is still a DIY job
                </h4>
                <p className="mt-3 text-slate-700">
                  Small repairs are one thing. Ceilings, trade cut-outs, and
                  visible walls are where most homeowner patches fall apart.
                </p>
                <p className="mt-5 font-semibold text-amber-700">
                  Read guide →
                </p>
              </Link>

              <Link
                href="/blog/drywall-repair-complete-guide/"
                className="rounded-3xl border-2 border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                  Main Guide
                </p>
                <h4 className="mt-3 text-2xl font-bold text-slate-900">
                  Complete drywall repair guide
                </h4>
                <p className="mt-3 text-slate-700">
                  The broader repair overview for holes, cracks, water damage,
                  tools, timing, and when to bring in a crew.
                </p>
                <p className="mt-5 font-semibold text-slate-700">
                  Read guide →
                </p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="rounded-3xl border bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-2 mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
                FAQ
              </p>
              <h3 className="text-3xl font-bold">Drywall repair FAQs</h3>
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
                Schedule drywall repair
              </a>
              <a
                href="/quote/"
                className="btn-cta bg-white text-blue-600 border border-blue-600"
              >
                Start photo estimate
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
                Book seamless drywall repair today
              </h3>
              <p className="text-white/80">
                Professional drywall repair services with transparent scope,
                warranty, and photo documentation. Send photos now and we will
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
                Secure my spot
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
