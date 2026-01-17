// app/popcorn-ceiling-removal/mississauga/erin-mills/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal — Erin Mills, Mississauga | Level 5 Smooth for Homes",
  description:
    "Residential popcorn ceiling removal in Erin Mills: floor & stair protection, dust-controlled workflow, Level 5 skim, stain-block primer and a bright paint-ready finish. Clear schedule, tidy crews, written warranty.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/erin-mills/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal — Erin Mills, Mississauga",
    description:
      "Home-focused popcorn removal with Level 5 skim, prime & paint-ready finish. Clean, contained, guaranteed.",
    url: "/popcorn-ceiling-removal/mississauga/erin-mills/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  var data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5"],
        areaServed: "Erin Mills, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/erin-mills/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Residential workflows (Erin Mills)",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Home protection: floors, stairs, furniture, room containment, HVAC vent masking",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Level 5 skim with raking-light inspection",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Stain-block primer & paint-ready finish",
              },
            },
          ],
        },
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
            name: "Mississauga",
            item: { "@id": "https://epfproservices.com/popcorn-ceiling-removal/mississauga/" },
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Erin Mills",
            item: { "@id": "https://epfproservices.com/popcorn-ceiling-removal/mississauga/erin-mills/" },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will my home be protected during removal and skim-coat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We seal rooms, protect floors and stairs, cover furniture, mask HVAC vents and use HEPA-connected sanding for dust control.",
            },
          },
          {
            "@type": "Question",
            name: "Our ceilings are painted — can you still achieve Level 5 smooth?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We test first. If scraping risks damage, we safely encapsulate and then Level 5 skim for a flat, paint-ready surface.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a typical main floor take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Timelines depend on size and condition, but many main floors finish in a few days with tidy daily wrap-ups.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle pot-light holes, cracks and water stains?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We repair and feather patches, then prime with stain blocker so the finish reads uniform under daylight and LEDs.",
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

const phoneHref = CONTACT?.phoneHref || "tel:+16479236784";

export default function Page() {
  // Prefer Erin Mills signals; fall back to Mississauga city signals
  var miss = null,
    hood = null;
  for (var i = 0; i < cities.length; i++)
    if (cities[i].slug === "mississauga") miss = cities[i];
  if (miss && miss.neighborhoods) {
    for (var j = 0; j < miss.neighborhoods.length; j++) {
      if (miss.neighborhoods[j].slug === "erin-mills")
        hood = miss.neighborhoods[j];
    }
  }
  var signals = hood?.signals || miss?.signals || null;

  var images = Array.from(
    { length: 6 },
    (_, i) => "/services/popcorn-ceiling-removal/" + (i + 1) + ".webp"
  );

  return (
    <>
      <JsonLd />

      {/* MODERN HERO SECTION - TEAL/CYAN THEME */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 text-white min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-teal-500/40 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-tr from-cyan-600/30 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(20,184,166,.02)_25%,transparent_25%,transparent_50%,rgba(20,184,166,.02)_50%,rgba(20,184,166,.02)_75%,transparent_75%,transparent)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 z-10">
              {/* Breadcrumb */}
              <nav className="text-sm text-cyan-200/70">
                <ol className="inline-flex items-center space-x-2 flex-wrap">
                  <li>
                    <Link href="/" className="hover:text-cyan-300 transition">
                      Home
                    </Link>
                  </li>
                  <li className="text-white/30">→</li>
                  <li>
                    <Link
                      href="/services/popcorn-ceiling-removal/"
                      className="hover:text-cyan-300 transition"
                    >
                      Popcorn Ceiling Removal
                    </Link>
                  </li>
                  <li className="text-white/30">→</li>
                  <li>
                    <Link
                      href="/popcorn-ceiling-removal/mississauga/"
                      className="hover:text-cyan-300 transition"
                    >
                      Mississauga
                    </Link>
                  </li>
                  <li className="text-white/30">→</li>
                  <li className="font-semibold text-cyan-300">Erin Mills</li>
                </ol>
              </nav>

              {/* Location Badge */}
              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 backdrop-blur-xl rounded-2xl border-2 border-teal-400/40 shadow-lg shadow-teal-500/20">
                  <span className="text-sm font-bold text-cyan-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Serving Erin Mills & Eglinton West Area
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 animate-gradient">
                    Removal Erin Mills
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional{" "}
                  <strong className="text-cyan-300">
                    popcorn ceiling removal service
                  </strong>{" "}
                  and smooth ceiling contractor in Erin Mills. HEPA dust
                  control, floor protection, and Level 5 paint-ready finish. 2-3
                  day timeline.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-teal-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-teal-300 mb-1">✓ Projects</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    150+
                  </div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-cyan-300 mb-1">⚡ Timeline</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    2-3d
                  </div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-sm rounded-2xl border border-emerald-400/20 hover:border-emerald-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-emerald-300 mb-1">★ Rating</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                    4.9
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="group relative px-8 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-2xl font-bold text-lg shadow-2xl shadow-teal-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>(647) 923-6784</span>
                  </span>
                </a>
                <a
                  href="/quote/"
                  className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-bold text-lg border-2 border-cyan-400/40 hover:border-cyan-400/70 transition-all hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    ✨ Get Free Quote
                  </span>
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-emerald-300 bg-emerald-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-400/30">
                  <span className="text-emerald-400">✓</span> Licensed & Insured
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300 bg-cyan-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-cyan-400/30">
                  <span className="text-cyan-400">✓</span> 3-Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-300 bg-teal-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-teal-400/30">
                  <span className="text-teal-400">✓</span> HEPA Dust Control
                </div>
              </div>
            </div>

            {/* Hero Image with Modern Frame */}
            <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                {/* Floating background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 rounded-[3rem] blur-3xl transform rotate-6 scale-110"></div>

                <div
                  className="relative transform hover:scale-105 transition-transform duration-700"
                  style={{ perspective: "1500px" }}
                >
                  {/* Main image with rounded frame */}
                  <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-teal-400/30 shadow-2xl shadow-teal-500/30 backdrop-blur-sm bg-gradient-to-br from-teal-900/20 to-cyan-900/20">
                    <img
                      src="/services/popcorn-ceiling-removal/1.webp"
                      alt="Erin Mills popcorn ceiling removal Level 5 before and after"
                      loading="eager"
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-500 to-green-600 p-6 rounded-3xl shadow-2xl border-2 border-emerald-300/50 transform hover:scale-110 transition-transform hover:rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">✨</div>
                      <div>
                        <p className="font-black text-white text-xl">Level 5</p>
                        <p className="text-sm text-emerald-100 font-semibold">
                          Paint-ready
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-2xl border-2 border-cyan-300/50 transform hover:scale-110 transition-transform hover:-rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">🏠</div>
                      <div>
                        <p className="font-black text-white text-xl">Home</p>
                        <p className="text-sm text-cyan-100 font-semibold">
                          Protected
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative orbs */}
                <div
                  className="absolute -z-10 top-1/3 -right-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute -z-10 bottom-1/3 -left-16 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION - MODERN CARDS */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Professional Popcorn Ceiling Removal in Erin Mills
            </h2>
            <p className="text-gray-600 text-lg">
              Expert ceiling texture removal and resurfacing for your home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-teal-50 to-white rounded-3xl border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">
                Homeowner-Friendly Process
              </h3>
              <p className="text-gray-600">
                From stipple ceiling removal to smooth ceiling contractor
                services, we protect floors, stairs & furniture while keeping
                your Erin Mills home usable during the project.
              </p>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-cyan-50 to-white rounded-3xl border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">
                Dust-Controlled Removal
              </h3>
              <p className="text-gray-600">
                Whether scraping popcorn ceiling or stripping textured finishes,
                our sealed containment and HEPA-assist sanding keeps your Erin
                Mills house clean.
              </p>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Level 5 Smooth Finish</h3>
              <p className="text-gray-600">
                Our popcorn ceiling removal contractor service includes
                full-field skim, raking-light inspection, and stain-block primer
                for paint-ready perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Recent Erin Mills Transformations
            </h2>
            <p className="text-gray-600 text-lg">
              From textured to smooth Level 5 finish
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={src}
                    alt={`Erin Mills popcorn ceiling removal — project ${
                      i + 1
                    }`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-lg">
                      Erin Mills Project {i + 1}
                    </p>
                    <p className="text-sm text-teal-200">
                      Level 5 Smooth Finish
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL LONG COPY — residential & Erin Mills specific */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              Popcorn Ceiling Removal Contractor Erin Mills
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As a trusted{" "}
              <strong>popcorn ceiling contractor in Erin Mills</strong>, we
              understand this family neighbourhood with two-storey homes,
              side-splits and townhomes where morning sun and evening LEDs can
              reveal every ceiling imperfection. Whether you're looking to get
              rid of popcorn ceiling texture, painted stipple, or cottage cheese
              ceiling texture, our{" "}
              <strong>professional popcorn ceiling removal service</strong>{" "}
              protects the house thoroughly, chooses the safest removal method,
              and finishes with a <strong>Level 5 skim</strong> so your ceilings
              read flat and modern from foyer to family room.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our <strong>ceiling resurfacing in Erin Mills</strong> starts with
              protection: floors and stairs covered, railings wrapped, furniture
              shielded, HVAC vents masked, and rooms sealed so dust stays within
              containment. If the texture has multiple paint layers, we test a
              discreet section to decide between controlled scraping and safe
              encapsulation. Whether it's painted popcorn ceiling removal or
              taking down stucco ceiling texture, your result is the same — a
              uniform surface that looks like fresh drywall once primed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After skimming, we check ceilings in raking light from windows and
              downlights. Any low areas or shadowed seams are re-skimmed, then
              we prime with a stain-blocking system that equalizes porosity and
              prevents flashing. Around <strong>Erin Mills Pkwy</strong>,{" "}
              <strong>Glen Erin Dr</strong>, <strong>Eglinton Ave W</strong> and{" "}
              <strong>Credit Valley Rd</strong>, long sightlines and bright
              rooms can be unforgiving — we inspect from those same angles so
              your ceilings stay smooth in real life, not just in photos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your project includes lighting updates near the kitchen or main
              hallway, we blend pot-light cutouts, fixture moves and prior
              patches so they disappear after primer. For homes with higher
              landings, stairwells or bulkheads, we stage access safely and keep
              edges crisp where planes meet skylight wells and returns.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Communication is simple: you get a clear scope and schedule up
              front, photo updates during the job, and tidy daily wrap-ups so
              routines continue. We are WSIB and liability insured and include a
              written 3-year workmanship warranty.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We provide the same{" "}
              <Link
                href="/popcorn-ceiling-removal/mississauga/"
                className="text-teal-600 hover:text-teal-700 font-semibold underline"
              >
                professional popcorn ceiling removal service across all of Mississauga
              </Link>
              , including nearby{" "}
              <Link
                href="/popcorn-ceiling-removal/mississauga/port-credit/"
                className="text-teal-600 hover:text-teal-700 font-semibold underline"
              >
                Port Credit
              </Link>
              ,{" "}
              <Link
                href="/popcorn-ceiling-removal/mississauga/lorne-park/"
                className="text-teal-600 hover:text-teal-700 font-semibold underline"
              >
                Lorne Park
              </Link>
              , and{" "}
              <Link
                href="/popcorn-ceiling-removal/mississauga/clarkson/"
                className="text-teal-600 hover:text-teal-700 font-semibold underline"
              >
                Clarkson
              </Link>{" "}
              neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SCOPE */}
      <section
        id="scope"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-100">
            <h2 className="text-3xl font-bold mb-6">
              Detailed Scope for a Level 5, Paint-Ready Ceiling
            </h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <strong className="text-gray-900">
                    Protection & Containment:
                  </strong>{" "}
                  Floors, stairs, railings, cabinetry and furniture protected;
                  rooms sealed; vents masked.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <strong className="text-gray-900">Method Test:</strong> Small
                  area test to choose scrape vs encapsulation according to paint
                  build and substrate.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <strong className="text-gray-900">
                    Removal/Encapsulation:
                  </strong>{" "}
                  Remove texture where feasible; otherwise stabilize and proceed
                  to full skim.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <strong className="text-gray-900">Repairs:</strong> Address
                  corner cracks, tape lifts, fixture moves, pot-light rings,
                  previous patch edges and water stains.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  5
                </span>
                <div>
                  <strong className="text-gray-900">Level 5 Skim:</strong>{" "}
                  Full-field skim across the ceiling; feathered through
                  transitions and into bulkheads/returns.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  6
                </span>
                <div>
                  <strong className="text-gray-900">
                    Raking-Light Inspection:
                  </strong>{" "}
                  Check from windows and LEDs; re-skim low areas until the
                  surface reads flat.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  7
                </span>
                <div>
                  <strong className="text-gray-900">
                    Vacuum-Assist Sanding:
                  </strong>{" "}
                  Smooth the surface while capturing dust at the tool.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  8
                </span>
                <div>
                  <strong className="text-gray-900">Stain-Block Primer:</strong>{" "}
                  Lock down marks and equalize porosity for a bright, uniform
                  read.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  9
                </span>
                <div>
                  <strong className="text-gray-900">
                    Paint-Ready Handover:
                  </strong>{" "}
                  Leave a clean, protected site or complete finish coats on
                  request.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">
                  10
                </span>
                <div>
                  <strong className="text-gray-900">Tidy Wrap-Up:</strong>{" "}
                  Remove masking, vacuum and reset rooms so life carries on
                  without mess.
                </div>
              </li>
            </ol>

            <div className="mt-8 p-6 bg-teal-50 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">
                Common Residential Situations We Fix
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Painted popcorn with <em>multiple layers</em> that resists
                  scraping.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Seams <em>telegraphing</em> along long hallways in morning
                  light.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Pot-light and fixture moves that leave rings after repainting.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Subtle <em>waves</em> where additions meet original rooms.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  Water stains near bathrooms or exterior corners.
                </li>
              </ul>
            </div>

            <div className="mt-6 p-6 bg-cyan-50 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">
                Materials & Systems We Trust
              </h3>
              <p className="text-gray-700">
                We use professional taping compounds that sand predictably and
                prime with a stain-blocking system that minimizes flashing. If
                you'd like us to paint, we finish with durable interior coatings
                that keep a clean, even sheen in Erin Mills' bright rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Recent Erin Mills Home Projects
            </h2>
            <p className="text-gray-600 text-lg">
              Real transformations from your neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-2xl font-bold mb-2">
                Eglinton West Two-Storey
              </div>
              <div className="text-sm text-teal-600 font-semibold mb-4 flex items-center gap-2">
                <span>📍</span>near Eglinton Ave W & Erin Mills Pkwy
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Scope:</strong> Painted
                  texture; safe encapsulation; full Level 5 skim; stain-block
                  primer.
                </p>
                <p>
                  <strong className="text-gray-900">Duration:</strong> 3 days
                </p>
                <p>
                  <strong className="text-gray-900">Result:</strong> Even
                  reflectance across living/dining; no seam shadowing in morning
                  light.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-2xl font-bold mb-2">
                Glen Erin Side-Split
              </div>
              <div className="text-sm text-teal-600 font-semibold mb-4 flex items-center gap-2">
                <span>📍</span>south of Credit Valley Rd
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Scope:</strong> Scrape +
                  skim on main; pot-light rings blended; prime; paint-ready.
                </p>
                <p>
                  <strong className="text-gray-900">Duration:</strong> 2.5 days
                </p>
                <p>
                  <strong className="text-gray-900">Result:</strong> Flat,
                  bright ceiling through hallway and family room sightlines.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-2xl font-bold mb-2">
                Near Credit Valley Hospital
              </div>
              <div className="text-sm text-teal-600 font-semibold mb-4 flex items-center gap-2">
                <span>📍</span>Credit Valley Rd area
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Scope:</strong> Vaulted
                  section; full skim; raking-light inspection; primer for
                  sprayed finish.
                </p>
                <p>
                  <strong className="text-gray-900">Duration:</strong> 3–4 days
                </p>
                <p>
                  <strong className="text-gray-900">Result:</strong> Crisp
                  returns and uniform read in skylight well and bulkhead
                  transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local signals */}
      {signals ? <LocalSignals signals={signals} /> : null}

      {/* LOCAL RESOURCES */}
      <section
        id="resources"
        className="py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Local Resources for Erin Mills Homeowners
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-teal-600 text-xl flex-shrink-0">🏛️</span>
                <div>
                  <strong className="text-gray-900">
                    City of Mississauga — Building & Renovation:
                  </strong>{" "}
                  interior work guidance and when permits/inspections may apply.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 text-xl flex-shrink-0">♻️</span>
                <div>
                  <strong className="text-gray-900">
                    Waste & Recycling (Peel Region):
                  </strong>{" "}
                  drywall off-cuts, compound pails and paint handling
                  information.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 text-xl flex-shrink-0">🎨</span>
                <div>
                  <strong className="text-gray-900">Paint & Supplies:</strong>{" "}
                  established retailers along Eglinton Ave W, Erin Mills Pkwy
                  and Ridgeway Dr for colour matching and finishes.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 text-xl flex-shrink-0">🚧</span>
                <div>
                  <strong className="text-gray-900">Access & Staging:</strong>{" "}
                  we plan driveway use, pathway protection and staging so daily
                  routines remain simple.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 text-xl flex-shrink-0">👋</span>
                <div>
                  <strong className="text-gray-900">Neighbour Courtesy:</strong>{" "}
                  brief notices for any short, noisier windows; clean walk-off
                  mats and tidy end-of-day resets.
                </div>
              </li>
            </ul>
            <div className="mt-6 p-6 bg-teal-50 rounded-2xl">
              <p className="text-gray-700 leading-relaxed">
                We coordinate the small logistics that keep projects smooth: pet
                safety, kids' nap times, school pick-ups, and room sequencing so
                key spaces remain usable. The goal is a cleaner, faster path to
                a modern, smooth ceiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            FAQ — Popcorn Ceiling Removal Erin Mills
          </h2>
          {[
            {
              q: "What is the popcorn ceiling removal cost in Erin Mills?",
              a: "The cost to scrape popcorn ceiling in Erin Mills depends on square footage, ceiling height, and condition. Our popcorn removal cost includes protection, removal, Level 5 skim coat, primer, and cleanup. Contact us for a fast, free photo estimate based on your specific project.",
            },
            {
              q: "How do you protect floors, stairs and furniture?",
              a: "We cover floors and stairs, seal rooms, shield furniture and mask HVAC vents. Daily tidy wrap-ups keep living spaces usable.",
            },
            {
              q: "Our ceilings have been painted — can you still make them smooth?",
              a: "Yes. We test first. If scraping risks damage, we encapsulate and then apply a Level 5 skim for an even, paint-ready surface.",
            },
            {
              q: "What about pot-light holes, corner cracks and past patches?",
              a: "We repair and feather these areas during the skim so they disappear after primer and finish coats.",
            },
            {
              q: "How long will a typical main floor take?",
              a: "Timing depends on square footage and condition, but many main floors are completed in a few days with predictable scheduling.",
            },
            {
              q: "Is your work insured and warrantied?",
              a: "Yes. WSIB + liability insured and a written 3-year workmanship warranty.",
            },
          ].map((f, i) => (
            <details
              key={i}
              className="card p-6 bg-white mt-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <summary className="font-medium cursor-pointer text-gray-900 hover:text-teal-600 transition">
                {f.q}
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="relative container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6">
            <h3 className="text-4xl md:text-5xl font-black">
              Ready for a Level 5 Smooth Ceiling in Erin Mills?
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fast photo estimate. Clear plan and schedule. Professional results
              for your Erin Mills home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105"
                href={phoneHref}
              >
                📞 (647) 923-6784
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
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              ← Mississauga ceiling contractor services
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/popcorn-ceiling-removal/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              All GTA coverage areas
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

      {/* Sticky mobile CTA */}
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
    </>
  );
}
