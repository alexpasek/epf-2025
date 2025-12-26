// app/popcorn-ceiling-removal/mississauga/clarkson/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal Clarkson, Mississauga | Level 5 Smooth Finish",
  description:
    "Professional popcorn ceiling removal Clarkson for lakeshore bungalows, character homes & split-levels. Expert ceiling texture removal with HEPA dust control. Serving Lakeshore Rd W, Southdown & Rattray Marsh area.",
  keywords: [
    "popcorn ceiling removal clarkson",
    "ceiling texture removal clarkson mississauga",
    "smooth ceiling clarkson",
    "ceiling contractor lakeshore road",
    "popcorn ceiling southdown",
    "level 5 ceiling clarkson",
    "ceiling resurfacing rattray marsh",
    "stipple ceiling removal clarkson",
    "take out popcorn ceiling clarkson",
    "get rid of popcorn ceiling clarkson",
    "removing stucco ceiling clarkson",
    "stucco ceiling removal clarkson",
    "cottage cheese ceiling removal clarkson",
    "painted popcorn ceiling removal clarkson",
  ],
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/clarkson/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal Clarkson, Mississauga | Level 5",
    description:
      "Trusted ceiling removal service for Clarkson homes. Dust-controlled workflow, Level 5 finish, paint-ready. Licensed contractors near Lakeshore & Southdown.",
    url: "/popcorn-ceiling-removal/mississauga/clarkson/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://epfproservices.com/#organization",
        name: "EPF Pro Services",
        image: "https://epfproservices.com/logo.png",
        telephone: "+1-647-923-6784",
        email: "info@epfproservices.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.5089,
          longitude: -79.618,
        },
        url: "https://epfproservices.com/",
        priceRange: "$6-$9 per sq ft",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
        areaServed: {
          "@type": "City",
          name: "Clarkson",
          containedIn: {
            "@type": "City",
            name: "Mississauga",
          },
        },
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal Clarkson",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Ceiling Skim Coat Level 5",
          "Stipple Ceiling Removal",
          "Ceiling Texture Removal",
        ],
        provider: {
          "@id": "https://epfproservices.com/#organization",
        },
        areaServed: "Clarkson, Mississauga, Ontario",
        url: "/popcorn-ceiling-removal/mississauga/clarkson/",
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            price: "6-9",
            unitText: "per square foot",
          },
        },
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://epfproservices.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: "https://epfproservices.com/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Clarkson",
            item: "/popcorn-ceiling-removal/mississauga/clarkson/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "We have a split-level home—can you keep stairs and hallways open?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We protect stairs and routes, isolate rooms, and keep daily tidy so the family can move through the house.",
            },
          },
          {
            "@type": "Question",
            name: "Our ceilings were patched around new pot lights—will those rings show?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We feather around trims during the Level 5 skim so rings and past patch edges disappear after primer.",
            },
          },
          {
            "@type": "Question",
            name: "Can you deal with old leaks or nicotine staining?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We use a stain-blocking primer system so discoloration doesn’t bleed back through the finish.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide a warranty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—3-year workmanship in writing. We’re WSIB and liability insured.",
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
  let miss = null;
  for (let i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];

  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* HERO WITH STUNNING 3D IMAGE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white min-h-[90vh] flex items-center">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* LEFT - Content */}
            <div className="space-y-8 z-10">
              {/* Breadcrumb */}
              <nav className="text-sm text-white/60">
                <ol className="inline-flex items-center space-x-2 flex-wrap">
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li className="text-white/40">/</li>
                  <li>
                    <Link
                      href="/popcorn-ceiling-removal/"
                      className="hover:text-white transition"
                    >
                      Popcorn Ceiling Removal
                    </Link>
                  </li>
                  <li className="text-white/40">/</li>
                  <li>
                    <Link
                      href="/popcorn-ceiling-removal/mississauga/"
                      className="hover:text-white transition"
                    >
                      Mississauga
                    </Link>
                  </li>
                  <li className="text-white/40">/</li>
                  <li className="font-semibold text-white">Clarkson</li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-purple-400/30">
                  <span className="text-sm font-semibold text-purple-300">
                    🏠 Serving Lakeshore Rd W, Southdown & Rattray Marsh
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  Popcorn Ceiling
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400">
                    Removal Clarkson
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Expert{" "}
                  <strong className="text-white">Level 5 smooth ceiling</strong>{" "}
                  transformation for Clarkson's lakeshore bungalows, character homes and
                  split-levels. HEPA dust control. Professional results. Fast
                  timeline.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    150+
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Clarkson Projects
                  </p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    2-3
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Day Timeline</p>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    4.9/5
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Rated (127+)</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="group relative px-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <span className="text-2xl">📞</span>
                    {phoneDisplay}
                  </span>
                </a>
                <a
                  href="/quote/"
                  className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all hover:scale-105"
                >
                  ✨ Get Free Quote
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-green-300 bg-green-950/40 px-4 py-2 rounded-full backdrop-blur-sm border border-green-400/20">
                  <span>✓</span> Licensed & Insured
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-300 bg-blue-950/40 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/20">
                  <span>✓</span> 3-Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-300 bg-purple-950/40 px-4 py-2 rounded-full backdrop-blur-sm border border-purple-400/20">
                  <span>✓</span> HEPA Dust Control
                </div>
              </div>
            </div>

            {/* RIGHT - 3D Image with Modern Effects */}
            <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg lg:max-w-xl">
                {/* Floating Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-[3rem] blur-3xl transform rotate-6 scale-105"></div>

                {/* Image Card with 3D Effect */}
                <div
                  className="relative transform hover:scale-105 transition-transform duration-700"
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl backdrop-blur-sm bg-white/5">
                    {/* Main Image */}
                    <img
                      src="/services/popcorn-ceiling-removal/1.webp"
                      alt="Professional Level 5 smooth ceiling removal in Clarkson Mississauga - Before and after transformation showing HEPA dust control and paint-ready finish"
                      loading="eager"
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>

                    {/* Gloss Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Floating Badge - Bottom Left */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 to-emerald-600 p-5 rounded-2xl shadow-2xl border-2 border-green-400/50 transform hover:scale-110 transition-transform animate-bounce">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">✨</div>
                      <div>
                        <p className="font-bold text-white text-lg">
                          Level 5 Finish
                        </p>
                        <p className="text-sm text-green-100">
                          Paint-ready surface
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge - Top Right */}
                  <div
                    className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-cyan-600 p-5 rounded-2xl shadow-2xl border-2 border-blue-400/50 transform hover:scale-110 transition-transform"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">🛡️</div>
                      <div>
                        <p className="font-bold text-white text-lg">
                          HEPA Safe
                        </p>
                        <p className="text-sm text-blue-100">Dust controlled</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/4 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 bottom-1/4 -left-12 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK QUOTE */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] items-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 md:p-10 shadow-xl">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold">Get My Free Quote</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We'll respond within 4 hours with your personalized estimate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Clarkson’s mix of lakeshore bungalows, character homes and newer
                infill needs a <strong>Level 5 skim</strong> so ceilings read
                flat under both natural light and LEDs. We work dust-contained,
                keep daily tidy, and deliver a paint-ready finish.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  • Full-field skim and raking-light checks for a uniform,
                  premium finish.
                </li>
                <li>
                  • Room isolation, clear paths and daily tidy so normal
                  routines continue.
                </li>
                <li>
                  • Floors/stairs covered, vents masked, HEPA vacuum-assist
                  sanding at source.
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-blue-100 shadow-lg p-4 md:p-6">
              <QuoteForm />
              <p className="text-xs text-gray-600 text-center mt-4">
                We'll respond within 4 hours with your personalized estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS - MODERN CARD DESIGN */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Us for Clarkson
            </h2>
            <p className="text-gray-600 text-lg">
              Professional ceiling transformation for your lakeshore home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Level 5 Smooth</h3>
              <p className="text-gray-600">
                Full-field skim and raking-light checks for uniform, premium
                finish across split-levels and bungalows.
              </p>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-3">
                Family-Friendly Workflow
              </h3>
              <p className="text-gray-600">
                Room isolation, clear paths and daily tidy so normal routines
                continue during the project.
              </p>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Clean Protection</h3>
              <p className="text-gray-600">
                HEPA dust control, sealed containment, protected floors and
                stairs throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN GALLERY WITH OVERLAY EFFECTS */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Recent Clarkson Transformations
            </h2>
            <p className="text-gray-600 text-lg">
              From textured to smooth Level 5 finish
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => {
              const altTexts = [
                "Popcorn ceiling removal Clarkson - Level 5 smooth finish Lakeshore Rd",
                "Ceiling texture removal Clarkson Mississauga - split-level home",
                "Smooth ceiling contractor Clarkson - bungalow transformation Southdown",
                "Ceiling resurfacing Clarkson - Rattray Marsh area post-war home",
                "Level 5 ceiling finish Clarkson - modern smooth ceiling",
                "Professional ceiling removal Clarkson - paint-ready finish",
              ];
              const projectLabels = [
                "Lakeshore Rd Bungalow",
                "Split-Level Southdown",
                "Park Royal Renovation",
                "Rattray Marsh Area",
                "Clarkson Village Home",
                "Meadow Wood Project",
              ];
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={src}
                      alt={altTexts[i]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-bold text-lg">{projectLabels[i]}</p>
                      <p className="text-sm text-purple-200">
                        Level 5 Smooth Finish
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL DETAILS */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose max-w-none">
            <h2>Local Details for Clarkson</h2>
            <p>
              Clarkson homes near Lakeshore Rd W, Southdown Rd and the Rattray
              Marsh area often show a mix of original ceilings and new patches
              from lighting or layout updates. We begin by testing a small area
              to confirm whether a careful scrape or safe encapsulation is best.
              When texture is heavily painted or the substrate is delicate,
              encapsulation prevents damage; we then apply a full{" "}
              <strong>Level 5 skim</strong> for a consistent surface.
            </p>
            <p>
              Split-levels and open plans make lighting transitions reveal
              imperfections. We skim full fields, check under raking light from
              windows and fixtures, and re-touch before primer. Stain-blocking
              primer systems prevent old moisture or nicotine from bleeding back
              through.
            </p>
            <p>
              Families need hallways and kitchens accessible—so we maintain
              protected routes, keep non-work rooms usable, and coordinate day
              by day to reduce disruption. You’ll have a clear written scope at
              the start, photo updates during the job, and a straightforward
              handover to paint or we can finish it.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL RESOURCES */}
      <section
        id="resources"
        className="py-16 bg-gradient-to-r from-purple-50 via-white to-blue-50"
      >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-500 font-semibold">
            Local Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Trusted links for permits, paint, and recycling
          </h2>
          <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
            These are the vendors and municipal references we lean on between
            Clarkson, Cooksville and central Mississauga to keep every job
            smooth.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 text-left">
            <div className="bg-white/95 p-6 rounded-3xl shadow border border-white/60">
              <h3 className="text-2xl font-semibold text-gray-900">
                Quality Paint Stores
              </h3>
              <p className="text-gray-600 mt-2">
                Quick colour matches, primers and sundries within 10–15 minutes
                of Clarkson Village.
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>
                  <strong>Benjamin Moore — The Paint People (Cooksville)</strong>
                  <br />
                  720 Burnhamthorpe Rd W Unit 21, Mississauga, ON L5C 3G1
                </li>
                <li>
                  <strong>Sherwin-Williams — Dundas St E</strong>
                  <br />
                  1560 Dundas St E, Mississauga, ON L4X 1L4
                </li>
                <li>
                  <strong>The Home Depot — Mississauga South</strong>
                  <br />
                  3065 Mavis Rd, Mississauga, ON L5C 1T7
                </li>
              </ul>
            </div>

            <div className="bg-white/95 p-6 rounded-3xl shadow border border-white/60">
              <h3 className="text-2xl font-semibold text-gray-900">
                City & Recycling Links
              </h3>
              <p className="text-gray-600 mt-2">
                Handy municipal contacts we reference before work begins.
              </p>
              <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
                <li>
                  <strong>City permits & inspections:</strong> Mississauga
                  building counter guidance for interior work, insulation
                  changes and fire separations.
                </li>
                <li>
                  <strong>Household hazardous waste:</strong> Peel Region HHW
                  drop-off notes for leftover compounds, primer or solvents.
                </li>
                <li>
                  <strong>Drop-off depots:</strong> Clarkson Community Recycling
                  Centre (2255 Royal Windsor Dr) for drywall scrap, bagged
                  texture debris and empty pails.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOME TYPES */}
      <section id="homes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card p-6 bg-white">
            <h2 className="text-2xl font-semibold">
              Typical Clarkson Homes We Handle
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>Lakeshore bungalows and character homes with multiple paint layers on texture.</li>
              <li>Split-levels where stair lighting exposes waves and seams.</li>
              <li>Renovated main floors needing uniform reflectance end-to-end.</li>
              <li>Pot-light upgrades with visible rings around trims (blended out).</li>
              <li>Rooms with old leak marks or nicotine (blocked at primer).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card p-6 bg-white">
            <h2 className="text-2xl font-semibold">
              On-Site Workflow (Clarkson)
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>
                Protect entries, floors and stairs; seal openings; mask vents.
              </li>
              <li>
                Method test: safe scrape vs. encapsulation, based on substrate
                condition.
              </li>
              <li>
                Level 5 skim across full areas; raking-light checks; re-skim
                where needed.
              </li>
              <li>
                Feather around pot-light cutouts and past patches so edges
                vanish.
              </li>
              <li>
                Stain-blocking primer system; even, bright, paint-ready handoff.
              </li>
              <li>Daily tidy and simple comms; walk-through at completion.</li>
              <li>
                WSIB + liability insured; written 3-year workmanship warranty.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Recent Projects in Clarkson
            </h2>
            <p className="text-gray-600 text-lg">
              Real transformations from your neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Split-Level Near Rattray Marsh",
                near: "Lakeshore Rd W & Meadow Wood Rd",
                scope:
                  "Encapsulation; full Level 5 skim; stain-block prime; edges crisp at trims.",
                duration: "3 days",
                outcome:
                  "Uniform read down stair flight; no seam shadows under LEDs.",
                problemLink: {
                  href: "/services/popcorn-ceiling-removal/painted-popcorn-ceiling",
                  text: "Learn about painted popcorn ceiling removal"
                }
              },
              {
                title: "Bungalow in Park Royal",
                near: "Southdown Rd corridor",
                scope:
                  "Scrape + Level 5 skim; pot-light rings blended; prime & paint-ready main floor.",
                duration: "2.5 days",
                outcome:
                  "Smooth, even ceilings across living/dining/kitchen; family stayed on schedule.",
              },
              {
                title: "Renovated Main Floor",
                near: "Clarkson Village area",
                scope:
                  "Mixed old/new drywall; full skim; raking-light checks; primer system for leaks.",
                duration: "3 days",
                outcome:
                  "Bright, premium finish with consistent reflectance across open plan.",
                problemLink: {
                  href: "/services/popcorn-ceiling-removal/water-stain-ceiling-repair",
                  text: "See how we handle water stain repairs"
                }
              },
            ].map((cs, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-2xl font-bold mb-2">{cs.title}</div>
                <div className="text-sm text-purple-600 font-semibold mb-4 flex items-center gap-2">
                  <span>📍</span>
                  {cs.near}
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong className="text-gray-900">Scope:</strong> {cs.scope}
                  </p>
                  <p>
                    <strong className="text-gray-900">Duration:</strong>{" "}
                    {cs.duration}
                  </p>
                  <p>
                    <strong className="text-gray-900">Result:</strong>{" "}
                    {cs.outcome}
                  </p>
                  {cs.problemLink && (
                    <p className="mt-4 pt-4 border-t border-gray-200">
                      <Link href={cs.problemLink.href} className="text-purple-600 hover:text-purple-700 font-semibold hover:underline inline-flex items-center gap-2">
                        {cs.problemLink.text}
                        <span>→</span>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION - ISOLATED COST KEYWORDS */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-100">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Popcorn Ceiling Removal Cost in Clarkson (Mississauga)
              </h2>
              <p className="text-xl text-gray-600">
                Transparent pricing for your lakeshore home
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  $
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Typical Clarkson Project Costs
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>
                      Popcorn ceiling removal cost Clarkson Mississauga:
                    </strong>{" "}
                    $6–$9 per square foot for complete service including
                    removal, Level 5 skim coat, and stain-block primer. Final
                    quote provided after photo inspection.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-purple-300 transition">
                  <h4 className="font-bold text-lg mb-3 text-purple-600">
                    What Affects Pricing?
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      ✓ <strong>Paint layers:</strong> Heavily painted texture
                      ($8-9/sq ft)
                    </li>
                    <li>
                      ✓ <strong>Ceiling height:</strong> Split-levels require
                      staging
                    </li>
                    <li>
                      ✓ <strong>Repairs needed:</strong> Water damage, cracks,
                      patches
                    </li>
                    <li>
                      ✓ <strong>Access:</strong> Furniture moving, tight spaces
                    </li>
                    <li>
                      ✓ <strong>Timeline:</strong> Rush jobs may cost more
                    </li>
                  </ul>
                </div>

                <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-green-300 transition">
                  <h4 className="font-bold text-lg mb-3 text-green-600">
                    What's Included?
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Full room protection & HEPA dust control</li>
                    <li>✓ Safe texture removal (scrape or encapsulation)</li>
                    <li>✓ Level 5 smooth skim coat application</li>
                    <li>✓ Stain-blocking primer system</li>
                    <li>✓ Daily cleanup & progress updates</li>
                    <li>✓ 3-year written workmanship warranty</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">
                  Cost to Scrape Popcorn Ceiling Clarkson Mississauga
                </h4>
                <p className="text-gray-700 mb-4">
                  The{" "}
                  <strong>
                    cost to scrape popcorn ceiling Clarkson Mississauga
                  </strong>{" "}
                  varies based on paint buildup. Unpainted texture: $6-7/sq ft.
                  Painted texture requiring encapsulation: $8-9/sq ft.{" "}
                  <strong>Popcorn removal cost Clarkson Mississauga</strong>{" "}
                  always includes dust control and primer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/quote/"
                    className="flex-1 text-center px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition shadow-lg hover:shadow-xl"
                  >
                    Get Your Free Estimate
                  </a>
                  <a
                    href={phoneHref}
                    className="flex-1 text-center px-6 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold rounded-xl transition"
                  >
                    Call {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="text-sm text-gray-600 text-center pt-4 border-t-2 border-gray-100">
                <p>
                  <strong>Popular searches:</strong> popcorn ceiling removal
                  cost Clarkson | painted popcorn ceiling removal Clarkson |
                  cottage cheese ceiling removal Clarkson | stucco ceiling
                  removal Clarkson | take out popcorn ceiling Clarkson | get rid
                  of popcorn ceiling Clarkson | removing stucco ceiling Clarkson
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local signals for Mississauga */}
      {miss && miss.signals ? <LocalSignals signals={miss.signals} /> : null}

      {/* BILATERAL NEIGHBORHOOD LINKS - SEO AUTHORITY FLOW */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Serving Clarkson & Nearby Lakeshore Communities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide the same professional ceiling removal service
              throughout the Mississauga lakeshore. Explore our service in
              neighboring areas:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Port Credit */}
            <Link
              href="/popcorn-ceiling-removal/mississauga/port-credit/"
              className="group"
            >
              <div className="relative p-8 bg-white rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                      Port Credit
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold">
                      East of Clarkson
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Historic lakeshore community with similar post-war
                  architecture. Expert ceiling removal for heritage homes and
                  renovated properties near Port Credit Village and Lakeshore
                  Promenade.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:underline">
                  Port Credit Ceiling Removal Service
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* Lorne Park */}
            <Link
              href="/popcorn-ceiling-removal/mississauga/lorne-park/"
              className="group"
            >
              <div className="relative p-8 bg-white rounded-3xl border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    📍
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition">
                      Lorne Park
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold">
                      West of Clarkson
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Established neighborhood near Rattray Marsh with mature homes.
                  Professional ceiling texture removal for split-levels and
                  bungalows along Lakeshore and Lorne Park Road.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:underline">
                  Lorne Park Ceiling Removal Service
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* Mississauga Hub */}
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="group"
            >
              <div className="relative p-8 bg-gradient-to-br from-purple-100 to-white rounded-3xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    🏙️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition">
                      All Mississauga Areas
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold">
                      Full Service Coverage
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  View all neighborhoods we serve throughout Mississauga
                  including Streetsville, Meadowvale, Erin Mills, Churchill
                  Meadows, and more. Same expert service, same quality
                  guarantee.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:underline">
                  View All Mississauga Neighborhoods
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Looking for service in another area?
            </p>
            <Link
              href="/popcorn-ceiling-removal/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              View All Service Areas
              <span className="ml-3 text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold">FAQ — Clarkson</h2>
          {[
            {
              q: "Can you keep kitchen and hallway usable during the job?",
              a: "Yes. We plan room-by-room, protect routes and tidy daily.",
            },
            {
              q: "We see lines around new pot lights—will those disappear?",
              a: "We feather those areas during the Level 5 skim so they vanish after primer.",
            },
            {
              q: "What about old stains from past leaks?",
              a: "We use a stain-blocking primer so discoloration doesn’t return.",
            },
            {
              q: "Are you insured and do you provide a warranty?",
              a: "WSIB + liability insured; 3-year workmanship warranty in writing.",
            },
          ].map((f, i) => (
            <details key={i} className="card p-6 bg-white mt-4">
              <summary className="font-medium">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="relative container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6">
            <h3 className="text-4xl md:text-5xl font-black">
              Ready for Level 5 Smooth Ceilings?
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fast photo estimate. Clear plan and schedule. Professional results
              for your Clarkson home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105"
                href={phoneHref}
              >
                📞 {phoneDisplay}
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105"
                href="/quote/"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom links */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            className="flex flex-wrap gap-4 text-sm justify-center"
            aria-label="Related pages"
          >
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition"
            >
              ← Mississauga Ceiling Removal
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/popcorn-ceiling-removal/"
              className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition"
            >
              All Service Areas
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/services/popcorn-ceiling-removal/"
              className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition"
            >
              Ceiling Removal Services →
            </Link>
          </nav>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-purple-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a
            href={phoneHref}
            className="flex-1 text-center py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            📞 Call
          </a>
          <a
            href="/quote/"
            className="flex-1 text-center py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition shadow-lg"
          >
            Quote
          </a>
        </div>
      </div>
    </>
  );
}
