import Link from "next/link";
import { CONTACT } from "@/app/config";
export const revalidate = 86400;

export const metadata = {
  title: "Popcorn Ceiling Removal East Credit, Mississauga | Level 5 Finish",
  description:
    "Professional popcorn ceiling removal East Credit for 1990s two-storeys & semis. Expert Level 5 ceiling finish with HEPA dust control. Serving Heartland, Argentia & Creditview area.",
  keywords: [
    "popcorn ceiling removal east credit",
    "ceiling texture removal east credit mississauga",
    "smooth ceiling east credit",
    "ceiling contractor heartland",
    "popcorn ceiling argentia road",
    "level 5 ceiling east credit",
    "ceiling resurfacing creditview",
    "stipple ceiling removal east credit",
    "cottage cheese ceiling removal mississauga",
    "painted popcorn ceiling removal east credit",
    "stucco ceiling removal heartland",
    "ceiling smoothing east credit",
    "dustless popcorn removal near heartland",
  ],
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/east-credit/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal East Credit, Mississauga | Level 5",
    description:
      "Trusted ceiling removal service for East Credit homes. Dust-controlled workflow, Level 5 finish, paint-ready. Licensed contractors near Heartland Town Centre.",
    url: "/popcorn-ceiling-removal/mississauga/east-credit/",
    type: "website",
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
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5"],
        areaServed: "East Credit, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/east-credit/",
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
            item: "https://epfproservices.com/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "East Credit",
            item: "https://epfproservices.com/popcorn-ceiling-removal/mississauga/east-credit/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you handle two-storey foyers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we set safe access and full protection to keep hallways clean.",
            },
          },
          {
            "@type": "Question",
            name: "How do you price?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Square footage + condition (painted vs unpainted) + access. We confirm on site.",
            },
          },
          {
            "@type": "Question",
            name: "Can you coordinate with a painter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We leave a primered, paint-ready surface; we can also handle top-coat if requested.",
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

export default function Page() {
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* UNIQUE HERO SECTION - TEAL/CYAN THEME WITH DIAGONAL DESIGN */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 text-white min-h-[90vh] flex items-center">
        {/* Unique Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-br from-teal-500/40 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-600/30 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Diagonal Stripes Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(20,184,166,.02)_25%,transparent_25%,transparent_50%,rgba(20,184,166,.02)_50%,rgba(20,184,166,.02)_75%,transparent_75%,transparent)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 z-10">
              {/* Breadcrumb with unique style */}
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
                      href="/popcorn-ceiling-removal/"
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
                  <li className="font-semibold text-cyan-300">East Credit</li>
                </ol>
              </nav>

              {/* Unique Badge Design */}
              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 backdrop-blur-xl rounded-2xl border-2 border-teal-400/40 shadow-lg shadow-teal-500/20">
                  <span className="text-sm font-bold text-cyan-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Serving East Credit & Heartland Town Centre
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 animate-gradient">
                    Removal East Credit
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Expert{" "}
                  <strong className="text-cyan-300">
                    Level 5 smooth ceiling
                  </strong>{" "}
                  transformation for East Credit's 1990s two-storeys and semis.
                  HEPA dust control. Professional results. 2-3 day timeline.
                </p>
              </div>

              {/* Unique Stats Design with Icons */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-teal-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-teal-300 mb-1">✓ Projects</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    120+
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

              {/* CTAs with unique styling */}
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

            {/* Unique Image Design with Hexagon Frame */}
            <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                {/* Floating hexagon background */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 rounded-[3rem] blur-3xl transform -rotate-12 scale-110"></div>

                <div
                  className="relative transform hover:scale-105 transition-transform duration-700"
                  style={{ perspective: "1500px" }}
                >
                  {/* Main image with unique border */}
                  <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-teal-400/30 shadow-2xl shadow-teal-500/30 backdrop-blur-sm bg-gradient-to-br from-teal-900/20 to-cyan-900/20">
                    <img
                      src="/services/popcorn-ceiling-removal/1.webp"
                      alt="East Credit popcorn ceiling removal Level 5 before and after"
                      loading="eager"
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Unique floating badges - hexagon style */}
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
                      <div className="text-5xl">🛡️</div>
                      <div>
                        <p className="font-black text-white text-xl">HEPA</p>
                        <p className="text-sm text-cyan-100 font-semibold">
                          Dust-free
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
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

      {/* HIGHLIGHTS SECTION - UNIQUE TEAL THEME */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Us for East Credit
            </h2>
            <p className="text-gray-600 text-lg">
              Professional ceiling transformation for your home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Dust-Controlled</h3>
              <p className="text-gray-600">
                Containment, vent masking, HEPA sanding, respectful crews.
              </p>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Level 5 Smooth</h3>
              <p className="text-gray-600">
                No joint shadows; bright, even primered read for paint.
              </p>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold mb-3">Predictable Windows</h3>
              <p className="text-gray-600">
                Clear start/finish and tidy wrap-ups so the house stays usable.
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
              Recent East Credit Transformations
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
                    alt={`East Credit popcorn ceiling removal — project ${
                      i + 1
                    }`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-lg">
                      East Credit Project {i + 1}
                    </p>
                    <p className="text-sm text-purple-200">
                      Level 5 Smooth Finish
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL KEYWORD-RICH SECTIONS CONTINUE... */}
      {/* (Pricing, Case Studies, Enhanced Local Details, Original Details, FAQ, CTA, Nav, Sticky) */}

      {/* PRICING SECTION - ISOLATED COST KEYWORDS */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-100">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Popcorn Ceiling Removal Cost — East Credit, Mississauga
              </h2>
              <p className="text-xl text-gray-600">
                Transparent pricing for your East Credit home
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  $
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Typical East Credit Project Costs
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>
                      Popcorn ceiling removal cost East Credit Mississauga:
                    </strong>{" "}
                    $6–$9 per square foot for complete service including
                    removal, Level 5 skim coat, and stain-block primer.{" "}
                    <strong>Cost to scrape popcorn ceiling East Credit</strong>{" "}
                    varies based on paint buildup and ceiling height.
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
                      ✓ <strong>Ceiling height:</strong> Two-storey foyers
                      require staging
                    </li>
                    <li>
                      ✓ <strong>Repairs needed:</strong> Water damage, cracks,
                      patches
                    </li>
                    <li>
                      ✓ <strong>Access:</strong> Furniture moving, curved
                      staircases
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
                  Popular Searches: East Credit Ceiling Removal
                </h4>
                <p className="text-sm text-gray-600">
                  <strong>Common keywords:</strong> popcorn ceiling removal cost
                  East Credit | painted popcorn ceiling removal East Credit |
                  cottage cheese ceiling removal East Credit | stucco ceiling
                  removal East Credit | remove popcorn ceiling East Credit |
                  ceiling texture removal East Credit | stipple ceiling removal
                  East Credit | smooth ceiling contractor East Credit | Level 5
                  ceiling finish East Credit | dustless popcorn removal East
                  Credit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES - LOCAL PROJECTS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Recent Projects in East Credit
            </h2>
            <p className="text-gray-600 text-lg">
              Real transformations from your neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-2xl font-bold mb-2">
                Two-Storey Foyer Near Heartland
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-4 flex items-center gap-2">
                <span>📍</span>East Credit townhouse
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Scope:</strong> Safe staging
                  for 18ft ceiling; encapsulation; full Level 5 skim;
                  stain-block prime.
                </p>
                <p>
                  <strong className="text-gray-900">Duration:</strong> 3 days
                </p>
                <p>
                  <strong className="text-gray-900">Result:</strong> Uniform
                  smooth finish visible from all floors; no shadows under
                  chandelier lighting.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-2xl font-bold mb-2">
                Semi-Detached Main Floor
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-4 flex items-center gap-2">
                <span>📍</span>East Credit residential area
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Scope:</strong> Scrape +
                  Level 5 skim across living, dining, kitchen; pot-light rings
                  blended; prime ready.
                </p>
                <p>
                  <strong className="text-gray-900">Duration:</strong> 2.5 days
                </p>
                <p>
                  <strong className="text-gray-900">Result:</strong> Bright,
                  even ceilings; family stayed in home throughout project.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              <div className="text-2xl font-bold mb-2">
                Renovated Open-Concept Home
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-4 flex items-center gap-2">
                <span>📍</span>Near Heartland Town Centre
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Scope:</strong> Mixed
                  old/new drywall; full skim; raking-light checks; primer system
                  for water stains.
                </p>
                <p>
                  <strong className="text-gray-900">Duration:</strong> 3 days
                </p>
                <p>
                  <strong className="text-gray-900">Result:</strong> Premium
                  finish with consistent reflectance under LED track lighting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED LOCAL DETAILS WITH KEYWORDS */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Why East Credit Homes Choose Professional Ceiling Removal
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Popcorn ceiling removal East Credit Mississauga</strong>{" "}
                requires specialized knowledge of 1990s construction methods.
                Many East Credit homes have heavily painted textured ceilings
                that cannot be safely scraped without damaging the underlying
                drywall. Our <strong>Level 5 ceiling finish East Credit</strong>{" "}
                process ensures a smooth, paint-ready surface that eliminates
                texture shadows under modern LED lighting.
              </p>

              <p>
                <strong>Cottage cheese ceiling removal East Credit</strong> and{" "}
                <strong>stipple ceiling removal East Credit</strong> projects in
                two-storey homes with vaulted foyers need proper staging and
                dust containment. We specialize in{" "}
                <strong>
                  ceiling texture removal East Credit near Heartland Town Centre
                </strong>
                , serving East Credit, Erin Mills, and surrounding areas with
                HEPA dust control and daily site cleanup.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">
                Common East Credit Ceiling Problems We Solve:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Painted popcorn ceiling removal East Credit:</strong>{" "}
                  Multiple paint layers make traditional scraping impossible
                </li>
                <li>
                  <strong>Stucco ceiling removal East Credit:</strong> Heavy
                  knockdown or Spanish-style texture requiring encapsulation
                </li>
                <li>
                  <strong>Water stain ceiling repair East Credit:</strong> Old
                  leak marks bleeding through paint
                </li>
                <li>
                  <strong>Smooth ceiling contractor East Credit:</strong> Level
                  5 skim coat for uniform reflectance
                </li>
                <li>
                  <strong>Ceiling smoothing East Credit:</strong> Eliminating
                  texture for modern aesthetic
                </li>
                <li>
                  <strong>Dustless popcorn removal East Credit:</strong> HEPA
                  vacuum-assist sanding at source
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">
                East Credit Neighborhood Coverage:
              </h3>
              <p>
                We provide{" "}
                <strong>popcorn ceiling removal East Credit Mississauga</strong>{" "}
                throughout the entire neighborhood including areas near
                Heartland Town Centre, Argentia Road, Creditview Road, and
                Eglinton Avenue corridor. Our{" "}
                <strong>ceiling contractor East Credit</strong> team understands
                local building methods and common issues in 1990s-built homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIBLING CONTEXT - NEARBY NEIGHBORHOODS */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Serving East Credit & Nearby Mississauga Communities
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              While we specialize in{" "}
              <strong>popcorn ceiling removal East Credit</strong>, our
              experienced teams also serve neighboring Mississauga areas. Each
              community has unique construction patterns from different decades
              requiring specialized knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="text-xl font-bold mb-2">Clarkson</h3>
              <p className="text-gray-600 text-sm">
                1960s-70s lakefront homes with vintage texture patterns and
                unique ceiling heights
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏡</div>
              <h3 className="text-xl font-bold mb-2">Erin Mills</h3>
              <p className="text-gray-600 text-sm">
                1980s-90s suburban homes with stipple and knockdown texture
                applications
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-xl font-bold mb-2">Port Credit</h3>
              <p className="text-gray-600 text-sm">
                Mixed-era properties from heritage homes to modern condos
                requiring varied approaches
              </p>
            </div>

            <Link
              href="/popcorn-ceiling-removal/mississauga/creditview/"
              className="block"
            >
              <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer group">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition">
                  Popcorn Ceiling Removal Creditview
                </h3>
                <p className="text-gray-600 text-sm">
                  2000s construction with lighter texture and modern drywall
                  standards
                </p>
                <div className="mt-3 text-xs text-teal-600 font-semibold flex items-center gap-1">
                  <span>Creditview Services</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link
              href="/popcorn-ceiling-removal/mississauga/meadowvale/"
              className="block"
            >
              <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer group">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition">
                  Popcorn Ceiling Removal Meadowvale
                </h3>
                <p className="text-gray-600 text-sm">
                  1970s-80s planned community with consistent popcorn ceiling
                  applications
                </p>
                <div className="mt-3 text-xs text-teal-600 font-semibold flex items-center gap-1">
                  <span>Meadowvale Services</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link
              href="/popcorn-ceiling-removal/mississauga/streetsville/"
              className="block"
            >
              <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer group">
                <div className="text-3xl mb-3">🏘️</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition">
                  Popcorn Ceiling Removal Streetsville
                </h3>
                <p className="text-gray-600 text-sm">
                  Historic village with diverse ceiling textures across multiple
                  eras
                </p>
                <div className="mt-3 text-xs text-teal-600 font-semibold flex items-center gap-1">
                  <span>Streetsville Services</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Each Mississauga neighborhood has unique construction
              characteristics. Our teams understand local building methods and
              adapt techniques accordingly for optimal results.
            </p>
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span>Popcorn Ceiling Removal Mississauga</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL DETAILS */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose max-w-none">
            <h2>Local Details for East Credit</h2>
            <p>
              Many East Credit ceilings were sprayed then painted over the
              years. Scraping alone can expose joints; we prep, test, choose the
              safest removal method, then skim to Level 5 and prime so top-coat
              covers beautifully.
            </p>
            <p>
              Vaulted foyers and curved staircases get proper protection and
              safe access. Planning pot lights? We coordinate timing and feather
              around rings for a seamless finish.
            </p>
            <h3>Common searches here</h3>
            <p className="text-gray-700">
              popcorn ceiling removal East Credit • remove popcorn ceiling East
              Credit • stipple ceiling removal East Credit • ceiling smoothing
              East Credit • skim coat ceiling East Credit • dustless popcorn
              removal East Credit near Heartland • cottage cheese ceiling East
              Credit • stucco ceiling removal East Credit • cost/price per
              sq.ft. varies by condition.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6">
            FAQ — East Credit Popcorn Ceiling Removal
          </h2>
          {[
            {
              q: "How much does popcorn ceiling removal cost in East Credit, Mississauga?",
              a: "Popcorn ceiling removal cost in East Credit typically ranges from $6-9 per square foot for complete service including removal, Level 5 skim coat, and primer. Heavily painted ceilings or two-storey foyers may cost $8-9/sq ft due to extra prep and staging requirements.",
            },
            {
              q: "Can you remove painted popcorn ceiling in East Credit homes?",
              a: "Yes! Many East Credit homes have painted popcorn ceilings from the 1990s-2000s. We use encapsulation or careful scraping methods to avoid damaging drywall, then apply a Level 5 skim coat for a smooth, paint-ready finish.",
            },
            {
              q: "Do you serve Heartland Town Centre and surrounding East Credit area?",
              a: "Absolutely. We serve all of East Credit including areas near Heartland Town Centre, Argentia Road, Creditview Road, Eglinton Avenue corridor, and surrounding neighborhoods. Local teams understand 1990s construction methods common in the area.",
            },
            {
              q: "What is Level 5 ceiling finish and why is it important?",
              a: "Level 5 is the highest drywall finish standard with a full skim coat that eliminates texture shadows, joint lines, and imperfections. It's essential for modern LED lighting which shows every flaw. Our Level 5 finish ensures smooth, uniform reflectance throughout your East Credit home.",
            },
            {
              q: "How long does popcorn ceiling removal take for a typical East Credit home?",
              a: "Most East Credit projects take 2-3 days: Day 1 for removal and prep, Day 2 for Level 5 skim application and sanding, Day 3 for primer and final touch-ups. Two-storey homes with vaulted foyers may take an extra day for safe staging.",
            },
            {
              q: "Is asbestos testing included for East Credit homes?",
              a: "East Credit homes built after 1990 rarely contain asbestos, but we recommend testing for any home built before 1990. We can coordinate certified asbestos testing or work safely with encapsulation methods if needed.",
            },
            {
              q: "Can you work while we're home?",
              a: "Yes—room-by-room staging keeps life moving with minimal disruption. We use HEPA dust control, plastic containment barriers, and daily cleanup so families can stay comfortably at home during the project.",
            },
            {
              q: "Do you handle small repairs before ceiling smoothing?",
              a: "Yes, minor drywall fixes, crack repairs, and water damage patches are included as needed before final skim. We ensure a perfect substrate for the Level 5 finish.",
            },
            {
              q: "What's included in your East Credit ceiling texture removal service?",
              a: "Complete service includes: room protection, texture removal (scrape or encapsulation), drywall repairs, Level 5 skim coat application, HEPA dust control, stain-blocking primer, daily cleanup, and 3-year workmanship warranty for all East Credit projects.",
            },
            {
              q: "Can you remove stipple ceiling or cottage cheese texture in East Credit?",
              a: "Yes! We remove all ceiling textures in East Credit including popcorn, stipple, knockdown, cottage cheese, and stucco finishes. Each texture requires specific removal techniques which we've mastered over 120+ East Credit projects.",
            },
            {
              q: "Do you coordinate with pot light installation?",
              a: "Absolutely. We often work alongside electricians for pot light upgrades. We can feather and blend around new light rings to create seamless transitions with no visible patches or texture differences.",
            },
            {
              q: "What do you need for a quote?",
              a: "Photos of your ceilings and approximate square footage. We provide a ballpark estimate within hours, then confirm with a free on-site visit to assess paint layers, ceiling height, and access before starting work.",
            },
            {
              q: "How dusty is popcorn ceiling removal in East Credit homes?",
              a: "With our HEPA dust control system, containment barriers, and vacuum-assist methods specifically designed for East Credit homes, we minimize dust by 90%+. Daily cleanup ensures your East Credit home stays livable throughout the project.",
            },
            {
              q: "Can you match new smooth ceiling to existing rooms?",
              a: "Yes! If you're doing one room at a time, we'll match the finish and texture to adjacent areas. Our Level 5 finish creates consistent smoothness across all spaces—perfect for open-concept East Credit homes.",
            },
            {
              q: "Do you offer weekend or evening service?",
              a: "Yes, we offer flexible scheduling including weekends for busy East Credit families. Contact us to discuss timing that works best for your schedule and minimizes disruption.",
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
              for your East Credit home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105"
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
              ← Mississauga Ceiling Removal
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/popcorn-ceiling-removal/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              Popcorn Ceiling Removal Service Areas
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/services/popcorn-ceiling-removal/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              Ceiling Removal Services →
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
