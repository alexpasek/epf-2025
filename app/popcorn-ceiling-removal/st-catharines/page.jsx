// app/popcorn-ceiling-removal/st-catharines/page.jsx
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BRAND_NAME, CONTACT, SITE_URL } from "@/app/config";

export const dynamic = "force-static";
export const revalidate = 86400;

const CITY = "St. Catharines";
const REGION = "Niagara Region";
const PROVINCE = "Ontario";
const SLUG = "/popcorn-ceiling-removal/st-catharines/";
const CANONICAL =
  "https://epfproservices.ca/popcorn-ceiling-removal/st-catharines/";
const BASE_URL = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";

const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";
const phoneE164 = phoneHref?.startsWith("tel:")
  ? phoneHref.replace("tel:", "")
  : phoneHref;

const NEIGHBOURHOODS = [
  ["downtown-stc", "Downtown St. Catharines"],
  ["port-dalhousie", "Port Dalhousie"],
  ["old-glenridge", "Old Glenridge"],
  ["new-glenridge", "New Glenridge"],
  ["north-end", "North End"],
  ["lakeshore", "Lakeshore & Port Weller"],
  ["martindale", "Martindale / Grapeview"],
  ["riverview", "Riverview Boulevard"],
  ["western-hill", "Western Hill"],
  ["merritton", "Merritton"],
  ["queenston", "Queenston / Secord Woods"],
  ["glendale", "Glendale & Brock University"],
];

const FAQS = [
  {
    q: `How much does popcorn ceiling removal cost in ${CITY}?`,
    a: `Pricing depends on ceiling size, height, whether the texture is painted, fixture counts, and how much repair/skim is needed. Share photos and room sizes so we can price your popcorn ceiling removal ${CITY} project with a firm written quote.`,
  },
  {
    q: "Is popcorn ceiling removal dusty?",
    a: "We seal work areas, protect floors and traffic paths, mask HVAC when needed, and use HEPA-connected sanding to reduce airborne dust. We tidy daily to keep the home usable.",
  },
  {
    q: `Do you handle heritage homes and condos as a popcorn ceiling contractor ${CITY}?`,
    a: `Yes. Our crew is the popcorn ceiling contractor ${CITY} homeowners call for character homes in Port Dalhousie, lakefront condos, and Brock-area rentals. We adapt containment, access, and scheduling for each property.`,
  },
  {
    q: "Do you remove stipple or stucco ceilings too?",
    a: "Yes. The best approach depends on the texture type, paint layers, and substrate. We recommend the safest path to a smooth, modern ceiling after a quick assessment.",
  },
  {
    q: "What’s the difference between scraping and skim coating?",
    a: "Scraping removes the texture when feasible. Skim coating (often used for painted texture) creates a smooth surface with better finish control, then we finish to Level 5.",
  },
  {
    q: "How long does a bedroom usually take?",
    a: "Many bedrooms take 1–2 days depending on drying time, repairs, and whether painting is included. Larger spaces or painted ceilings can take longer.",
  },
  {
    q: "Do you provide a Level 5 skim coat finish?",
    a: "Yes. A full-field Level 5 skim coat creates a uniform, smooth surface that looks clean under pot lights and bright windows.",
  },
  {
    q: "Can you repair cracks and old patches at the same time?",
    a: "Yes. We commonly fix cracks, seams, nail pops, and patchy areas as part of delivering a consistent, paint-ready ceiling.",
  },
  {
    q: "Do you use stain-block primer for water stains?",
    a: "When stains are present, we typically recommend a stain-block primer to reduce bleed-through and to unify the surface before paint.",
  },
  {
    q: "Should I test for asbestos before removing popcorn ceiling texture?",
    a: "If your home is older, testing is a smart first step before disturbing texture. If results are positive, the job needs the appropriate next steps and handling.",
  },
];

export const metadata = {
  title: `Popcorn Ceiling Removal St. Catharines | Niagara Level 5 Finish`,
  description:
    "Professional popcorn ceiling removal St. Catharines homeowners rely on. HEPA dust control, Level 5 skim coat, stain-block primer, optional painting. Local popcorn ceiling contractor St. Catharines, ON.",
  keywords: [
    "popcorn ceiling removal St. Catharines",
    "popcorn ceiling contractor St. Catharines",
    "popcorn ceiling removal contractor St. Catharines",
    "professional popcorn ceiling removal St. Catharines",
    "popcorn ceiling removal service St. Catharines",
    "smooth ceiling contractor St. Catharines",
    "ceiling texture removal St. Catharines",
    "stipple ceiling removal St. Catharines",
    "ceiling resurfacing St. Catharines",
    "Niagara Region popcorn ceiling removal",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: `Popcorn Ceiling Removal St. Catharines | Level 5 Finish`,
    description:
      "Professional popcorn/stipple ceiling removal in St. Catharines and Niagara. HEPA dust control, Level 5 skim, stain-block primer, optional painting.",
    url: CANONICAL,
    siteName: "EPF Pro Services",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://epfproservices.ca/gallery/Popcorn-ceiling-removal-stcatharines/popcorn-ceiling-removal00001.jpg",
        width: 1200,
        height: 630,
        alt: "Popcorn ceiling removal St. Catharines project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Popcorn Ceiling Removal St. Catharines | Professional Contractor`,
    description:
      "Professional popcorn ceiling removal St. Catharines with Level 5 skim coat, HEPA dust control, and optional painting.",
    images: [
      "https://epfproservices.ca/gallery/Popcorn-ceiling-removal-stcatharines/popcorn-ceiling-removal00001.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function SeoJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Popcorn Ceiling Removal in ${CITY}, ${PROVINCE}`,
      description:
        "Professional popcorn ceiling removal with HEPA dust control, Level 5 skim coat finish, and optional painting services.",
      serviceType: [
        "Popcorn Ceiling Removal",
        "Popcorn Ceiling Removal Contractor",
        "Popcorn Ceiling Contractor",
        "Ceiling Texture Removal",
        "Stipple Ceiling Removal",
        "Stucco Ceiling Removal",
        "Ceiling Resurfacing",
        "Ceiling Smoothing",
        "Level 5 Skim Coat",
        "Ceiling Priming",
        "Ceiling Painting",
      ],
      provider: {
        "@type": "LocalBusiness",
        name: BRAND_NAME,
        telephone: phoneE164 || phoneText,
        url: "https://epfproservices.ca",
        image: "https://epfproservices.ca/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: CITY,
          addressRegion: PROVINCE,
          addressCountry: "CA",
        },
        priceRange: "$$",
        sameAs: ["https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"],
      },
      areaServed: {
        "@type": "City",
        name: `${CITY}, ${PROVINCE}`,
      },
      url: CANONICAL,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "CAD",
        url: "https://epfproservices.ca/quote/",
      },
      potentialAction: {
        "@type": "RequestQuoteAction",
        target: "https://epfproservices.ca/quote/",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://epfproservices.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Popcorn Ceiling Removal",
          item: "https://epfproservices.ca/services/popcorn-ceiling-removal/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: CITY,
          item: CANONICAL,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  const images = Array.from(
    { length: 9 },
    (_, i) =>
      `/gallery/Popcorn-ceiling-removal-stcatharines/popcorn-ceiling-removal${String(
        i + 1
      ).padStart(5, "0")}.jpg`
  );

  const process = [
    {
      n: "01",
      t: "Protect + Seal the Work Area",
      d: "Rooms sealed, floors and traffic paths protected, HVAC masked where needed.",
    },
    {
      n: "02",
      t: "Texture Strategy (Painted vs Unpainted)",
      d: "We assess painted texture and choose scrape vs skim for the best finish and lowest risk.",
    },
    {
      n: "03",
      t: "Level 5 Skim Coat",
      d: "Full-field skim coat for a flat, modern ceiling that reads clean in strong light.",
    },
    {
      n: "04",
      t: "HEPA Sanding + Light Checks",
      d: "HEPA-connected sanding and strong-light inspection so flaws don’t show after paint.",
    },
    {
      n: "05",
      t: "Prime (Stain-Block When Needed)",
      d: "Primer unifies the surface and helps lock down old stains before paint.",
    },
    {
      n: "06",
      t: "Optional Ceiling Painting",
      d: "Finish coats available, or we leave the ceiling paint-ready.",
    },
  ];

  return (
    <>
      <SeoJsonLd />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images[0]}
            alt={`${CITY} popcorn ceiling removal`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Popcorn Ceiling Removal {CITY}, Ontario
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-gray-100 leading-relaxed">
              Professional <strong>popcorn ceiling removal {CITY}</strong> with{" "}
              <strong>HEPA dust control</strong>, airtight containment, and a{" "}
              <strong>Level 5 skim coat</strong> that still looks great when the
              Niagara sun or pot lights hit the surface.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
              We’re the <strong>popcorn ceiling contractor {CITY}</strong> and{" "}
              <strong>popcorn ceiling removal contractor {CITY}</strong>{" "}
              homeowners call before they list, renovate, or move in. Expect{" "}
              <strong>professional popcorn ceiling removal {CITY}</strong>{" "}
              results—skimmed, primed, and ready for paint.
            </p>

            <ul className="flex flex-wrap justify-center gap-3 mb-10 text-base md:text-lg">
              {[
                "Sealed rooms + protection",
                "HEPA sanding",
                "Level 5 finish",
                "Prime + optional paint",
              ].map((x) => (
                <li
                  key={x}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  ✓ {x}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                📞 {phoneText}
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-200">
              Serving {CITY}, Thorold, Niagara-on-the-Lake, and the entire{" "}
              {REGION} wine route with dust-controlled crews.
            </p>

            <p className="mt-4 text-sm text-gray-300">
              <Link
                href="/services/popcorn-ceiling-removal/"
                className="underline hover:text-white transition"
              >
                View the full popcorn ceiling removal service →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600">
                Photos + room sizes = faster, more accurate pricing.
              </p>
            </div>

            <QuoteForm />

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-3">Prefer to talk?</p>
              <a
                href={phoneHref}
                className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                📞 {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Our {CITY} Popcorn Ceiling Removal Service?
          </h2>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "WSIB coverage",
              "Liability coverage",
              "3-Year workmanship warranty",
              `Local team serving ${REGION}`,
            ].map((x) => (
              <div
                key={x}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200"
              >
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-sm font-semibold text-gray-700">{x}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">
                Home-Friendly Dust Control
              </h3>
              <p className="text-gray-700">
                Our <strong>smooth ceiling contractor {CITY}</strong> team
                protects floors, seals rooms, and runs HEPA sanding setups for
                controlled <strong>ceiling texture removal {CITY}</strong> work.
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Level 5 Smooth Finish</h3>
              <p className="text-gray-700">
                Full-field skim coat for{" "}
                <strong>ceiling resurfacing {CITY}</strong> projects—clean,
                modern ceilings that hold up under raking light and pot lights.
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">
                One Crew, Start-to-Finish
              </h3>
              <p className="text-gray-700">
                <strong>Stipple ceiling removal {CITY}</strong>, repairs,
                primer, and optional painting—our{" "}
                <strong>popcorn ceiling removal service {CITY}</strong> keeps
                everything uniform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
              Real {CITY} Reviews
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
              {CITY} Homeowners Say…
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-500 text-lg">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "Excellent popcorn ceiling removal in our Port Dalhousie home.
                HEPA dust control worked perfectly—no mess anywhere. Level 5
                finish looks amazing under our new pot lights."
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                — Jennifer B., Port Dalhousie
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
                "Best popcorn ceiling contractor in St. Catharines! Fast quote,
                professional crew, and they coordinated perfectly with our
                electrician. Glenridge home looks modern now."
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                — Michael K., Old Glenridge
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
                "Removed painted popcorn from our entire North End home. Daily
                updates, zero mess in living areas, and the smooth finish is
                flawless. Worth every penny."
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                — Angela R., North End
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
                "Completed our Martindale condo in 2 days. HEPA system really
                works—no dust anywhere. Professional ceiling texture removal
                that looks perfect."
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                — Robert D., Martindale
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
                "Heritage home in Merritton with high ceilings—they handled it
                beautifully. Ceiling resurfacing work was meticulous. Great
                communication throughout."
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                — Patricia L., Merritton
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
                "Vaulted ceilings in our Western Hill home—proper scaffolding,
                safety-first approach. Stipple ceiling removal result is
                perfect. Pricing was transparent."
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                — David M., Western Hill
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Read Google Reviews
            </a>
            <a
              href="https://www.homestars.com/profile/2872320-epf-pro-services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-8 py-4 font-semibold text-white hover:bg-amber-700 active:bg-amber-800 transition-colors shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              View HomeStars Profile
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {CITY} Projects & Results
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Smooth Level 5 ceilings that photograph beautifully—ideal for
            refreshes before listing, renovations, or move-ins.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={src}
                  alt={`${CITY} popcorn ceiling removal project ${i + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  data-lightbox="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold">
                      {CITY} Project {i + 1}
                    </p>
                    <p className="text-sm text-gray-200">
                      Level 5 smooth finish
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://maps.app.goo.gl/QkkUQQPZc6oSyvJy9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition"
            >
              <span>⭐</span>
              Read Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white" id="process">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our {CITY} Popcorn Ceiling Removal Process
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            A consistent workflow for {CITY} homes—lakeside, in-town, and
            escarpment areas—so the finish looks clean and stays durable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((s) => (
              <div
                key={s.n}
                className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-gray-700">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING FACTORS (DEDICATED COST SECTION) */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {CITY} Popcorn Ceiling Removal Cost
          </h2>
          <p className="text-center text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Ranges vary by ceiling height, painted texture, repairs, and access.
            These are rough estimates—photos and measurements are required for
            exact pricing.
          </p>
          <p className="text-center text-base text-gray-500 mb-12 max-w-2xl mx-auto">
            <strong>
              Written pricing is always based on your actual ceiling.
            </strong>{" "}
            Every job is different in finish requirements and prep time.
          </p>

          {/* Dedicated keyword block (cost terms ONLY here) */}
          <div className="mb-10 bg-white rounded-3xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold mb-2">
              Cost terms people search in {CITY}
            </h3>
            <p className="text-gray-700">
              popcorn ceiling removal cost St. Catharines ON · popcorn removal
              cost St. Catharines ON · cost to scrape popcorn ceiling St.
              Catharines
            </p>
          </div>

          {/* PRICING CARDS - VISUAL REPRESENTATION */}
          <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    🛏️
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Standard Bedroom
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Unpainted texture removal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Level 5 skim coat finish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>HEPA dust control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Stain-block primer</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-xs text-gray-600 italic">
                    Most common project type
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    🎨
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Painted Ceilings
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Skim encapsulation method</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Level 5 smooth finish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Extra prep work included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Primer & finish ready</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-purple-200">
                  <p className="text-xs text-gray-600 italic">
                    Requires special technique
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    🏠
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Whole Home
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Multiple rooms & hallways</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Consistent finish throughout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Complete dust containment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Volume pricing available</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <p className="text-xs text-gray-600 italic">
                    Best value per square foot
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    ⛰️
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    High/Vaulted Ceilings
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Scaffolding setup included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>10'+ ceiling specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Cathedral ceiling expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Safety-first approach</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-cyan-200">
                  <p className="text-xs text-gray-600 italic">
                    Escarpment homes common
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    🔧
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Living Rooms
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Large open spaces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Crack & seam repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Pot light integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Show-ready finish</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-green-200">
                  <p className="text-xs text-gray-600 italic">
                    Popular for home staging
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border-2 border-indigo-200 hover:border-indigo-400 transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    ➕
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Add-On Painting
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Premium ceiling paint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Two professional coats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Color matching available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Complete turn-key finish</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-indigo-200">
                  <p className="text-xs text-gray-600 italic">
                    Bundle for best value
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-2">Need Exact Pricing?</h3>
            <p className="text-blue-100 mb-4">
              Every project is unique. Send us photos and room dimensions for a
              detailed written quote.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition shadow-lg"
            >
              Get Your Custom Quote →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">
                What changes the price
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ceiling height & access</li>
                <li>• Painted popcorn / heavy texture</li>
                <li>• Lights, vents, detectors</li>
                <li>• Cracks, seams, stains, old patches</li>
                <li>• Prime + paint included or not</li>
                <li>• Bundling rooms for efficiency</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">
                Common repairs we handle
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cracks and failed tape seams</li>
                <li>• Nail pops / screw pops</li>
                <li>• Water stains (primer plan)</li>
                <li>• Bulkheads and transitions</li>
                <li>• Pot light cutouts + patching</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-3xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold mb-4">
                Why it varies in {CITY}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Older ceilings vs newer finishes</li>
                <li>• Lakeshore humidity & stain management</li>
                <li>• Escarpment access and height differences</li>
                <li>• Tight timelines before move-ins</li>
                <li>• Fixture layouts and ceiling complexity</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition shadow-xl"
              href="#quote"
            >
              Get Your {CITY} Quote
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL SEO COPY */}
      <section
        className="py-20 bg-white border-t border-gray-100"
        id="st-catharines-details"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {CITY} Popcorn Ceiling Specialists
              </h2>

              <p>
                {BRAND_NAME} provides{" "}
                <strong>professional popcorn ceiling removal {CITY}</strong>{" "}
                homeowners rely on. Disciplined containment, HEPA sanding, and
                raking-light inspections keep the work precise even in tight
                heritage rooms.
              </p>

              <p>
                Need a <strong>popcorn ceiling contractor {CITY}</strong> who
                can own the schedule before a listing or move-in? Our{" "}
                <strong>popcorn ceiling removal contractor {CITY}</strong> crews
                work across Port Dalhousie, Glenridge, North End, and Thorold
                with predictable timelines and tidy cleanups.
              </p>

              <p>
                Many local ceilings are either painted texture (often best
                handled by skim encapsulation) or unpainted popcorn that can be
                removed and resurfaced more quickly. Whether you're{" "}
                <strong>scraping popcorn ceiling {CITY}</strong>,{" "}
                <strong>taking off popcorn ceiling</strong>,{" "}
                <strong>stripping popcorn ceiling {CITY}</strong>, or{" "}
                <strong>taking down popcorn ceiling</strong> texture, we assess
                the safest method first. Looking to{" "}
                <strong>get rid of popcorn ceiling</strong> or need{" "}
                <strong>removing stucco ceiling {CITY}</strong> work? We focus
                on a consistent end result:{" "}
                <strong>ceiling resurfacing {CITY}</strong> to a smooth Level 5
                finish, then primer and optional paint.
              </p>

              <p>
                For planning, start with our{" "}
                <Link
                  className="text-blue-600 font-semibold hover:underline"
                  href="/services/popcorn-ceiling-removal/"
                >
                  complete popcorn ceiling removal service
                </Link>{" "}
                overview, or send photos through the{" "}
                <Link
                  className="text-blue-600 font-semibold hover:underline"
                  href="/quote/"
                >
                  online quote form
                </Link>{" "}
                to receive a written scope. Our{" "}
                <strong>professional popcorn ceiling removal {CITY}</strong>{" "}
                service handles everything from{" "}
                <strong>painted popcorn ceiling removal {CITY}</strong> to{" "}
                <strong>cottage cheese ceiling removal {CITY}</strong> and
                complete home renovations. Whether you need to{" "}
                <strong>take out popcorn ceiling</strong> in one room or
                transform your entire home, we deliver consistent Level 5
                results.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Local Logistics + Turnaround
              </h3>
              <p>
                Homeowners in {CITY} often want ceilings refreshed before a
                move-in, a renovation milestone, or a listing. We plan around
                access, staging space, and drying times so the schedule stays
                predictable—especially when you’re coordinating electricians for
                pot lights or other trades.
              </p>
              <p>
                We work throughout {REGION} and know the practical realities of
                jobs near the QEW corridor and lakeside areas: protection for
                entryways and stair runners, careful dust control for finished
                basements, and strong-light checks so the surface reads clean
                once paint is on.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Materials, Moisture, and Stains
              </h3>
              <p>
                Ceiling upgrades often reveal old patchwork, tape seams, or
                historic water stains. We address repairs as part of the job,
                then prime appropriately (including stain-block primer when
                needed) so the final paint finish stays consistent.
              </p>
              <p>
                If you’re unsure whether your ceiling should be scraped or
                skim-coated, send a close-up photo and we’ll recommend the
                safest approach for your texture type—especially for painted
                popcorn and heavier textures like stipple or stucco.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Getting Started
              </h3>
              <p>
                To get started, gather ceiling photos, list the rooms, note
                ceiling heights, and flag any access challenges. Submit through
                the{" "}
                <Link
                  className="text-blue-600 font-semibold hover:underline"
                  href="/quote/"
                >
                  quote form
                </Link>{" "}
                and include your preferred timeline. We’ll reply with a clear
                scope and scheduling options.
              </p>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">
                  Sample {CITY} Project Flow
                </h4>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>
                    Review photos, room list, and goals (smooth + paint-ready).
                  </li>
                  <li>
                    Confirm access, ceiling height, and whether texture is
                    painted.
                  </li>
                  <li>Protection plan (floors, doors, HVAC as required).</li>
                  <li>
                    Removal or skim strategy to control risk and achieve a
                    uniform surface.
                  </li>
                  <li>
                    Level 5 skim, HEPA sanding, and raking light inspection.
                  </li>
                  <li>Primer and optional ceiling painting.</li>
                  <li>Walkthrough + tidy cleanup.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
        id="neighbourhoods"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {CITY} Neighbourhoods We Serve
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional popcorn ceiling removal service across all {CITY}{" "}
            areas—from Port Dalhousie to Merritton and wine-route suburbs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBOURHOODS.map(([slug, name]) => {
              // Assign Niagara-themed icons based on area
              let icon = "🏠";
              if (
                name.toLowerCase().includes("beach") ||
                name.toLowerCase().includes("lake")
              )
                icon = "🌊";
              else if (
                name.toLowerCase().includes("mountain") ||
                name.toLowerCase().includes("escarpment")
              )
                icon = "⛰️";
              else if (
                name.toLowerCase().includes("downtown") ||
                name.toLowerCase().includes("central")
              )
                icon = "🏛️";
              else if (name.toLowerCase().includes("vineyard")) icon = "🍇";
              else if (name.toLowerCase().includes("creek")) icon = "🌲";
              else if (name.toLowerCase().includes("qew")) icon = "🛣️";

              return (
                <div
                  key={slug}
                  className="p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Popcorn/stipple removal · Level 5 skim · HEPA sanding ·
                    Prime & optional paint
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Serving all {CITY} neighborhoods with the same professional Level
              5 finish and HEPA dust control.
            </p>
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition shadow-xl"
            >
              Get Your {CITY} Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            FAQ — {CITY}
          </h2>

          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors"
              >
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-2xl"
            >
              Get a Free Quote
            </a>
            <div className="mt-4">
              <a
                className="font-bold text-blue-700 hover:underline"
                href={phoneHref}
              >
                Or call {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur border-2 border-gray-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a
            href={phoneHref}
            className="flex-1 text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
          >
            📞 Call
          </a>
          <a
            href="#quote"
            className="flex-1 text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
          >
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
