import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const dynamic = "force-static";
export const revalidate = 86400;

const NAME = "Brant Hills";
const SLUG = "brant-hills";
const CITY_BASE = "/popcorn-ceiling-removal/burlington";
const ALL = [
  ["downtown-burlington", "Downtown Burlington"],
  ["aldershot", "Aldershot"],
  ["tyandaga", "Tyandaga"],
  ["brant-hills", "Brant Hills"],
  ["mountainside", "Mountainside"],
  ["headon-forest", "Headon Forest"],
  ["palmer", "Palmer"],
  ["tansley", "Tansley"],
  ["orchard", "Orchard"],
  ["shoreacres", "Shoreacres"],
  ["roseland", "Roseland"],
  ["longmoor", "Longmoor"],
  ["pinedale", "Pinedale"],
  ["alton-village", "Alton Village"],
  ["millcroft", "Millcroft"],
  ["brant", "Brant"],
  ["freeman", "Freeman"],
  ["maple", "Maple"],
];

export const metadata = {
  title: `Popcorn Ceiling Removal — ${NAME}, Burlington | Dust-Controlled Level 5 Finish`,
  description: `${NAME} ceiling texture removal: safe scrape/encapsulate, Level 5 skim, HEPA sanding, stain-block primer & paint. Pot light patches, tidy crews, on-time schedule.`,
  keywords: [
    `popcorn ceiling removal ${NAME}`,
    "remove stucco ceiling Brant Hills",
    "smooth ceilings Burlington",
    "painted popcorn removal Burlington",
    "level 5 ceiling Burlington",
    "ceiling refinishing Burlington",
  ],
  alternates: { canonical: `${CITY_BASE}/${SLUG}/` },
  openGraph: {
    title: `Popcorn Ceiling Removal — ${NAME}, Burlington`,
    description:
      "Local Brant Hills team for dust-controlled popcorn removal, skim-coat to smooth, primer and finish paint.",
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
          "Popcorn Removal",
          "Ceiling Skim-Coat",
          "Level 5 Finish",
          "Ceiling Painting",
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
            item: "/service-areas",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: "/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Burlington",
            item: `${CITY_BASE}/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: NAME,
            item: `${CITY_BASE}/${SLUG}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you repair cracks and nail pops?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes—repairs are included during skim-coat and sanding before primer.",
            },
          },
          {
            "@type": "Question",
            name: "Can you work around furniture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cleared rooms are best, but we can protect and work around items when required.",
            },
          },
          {
            "@type": "Question",
            name: "Insurance & warranty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WSIB + liability insured. Written workmanship warranty provided.",
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

export default function Page() {
  const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
  const phoneDisplay = (CONTACT && CONTACT.phone) || "(647) 923-6784";
  const images = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* MODERN HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/40 to-indigo-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-tr from-indigo-600/30 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,.02)_25%,transparent_25%,transparent_50%,rgba(59,130,246,.02)_50%,rgba(59,130,246,.02)_75%,transparent_75%,transparent)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 z-10">
              <nav className="text-sm text-blue-200/70">
                <ol className="inline-flex items-center space-x-2 flex-wrap">
                  <li><Link href="/" className="hover:text-blue-300 transition">Home</Link></li>
                  <li className="text-white/30">→</li>
                  <li><Link href="/popcorn-ceiling-removal/" className="hover:text-blue-300 transition">Popcorn Ceiling Removal</Link></li>
                  <li className="text-white/30">→</li>
                  <li><Link href={CITY_BASE} className="hover:text-blue-300 transition">Burlington</Link></li>
                  <li className="text-white/30">→</li>
                  <li className="font-semibold text-blue-300">{NAME}</li>
                </ol>
              </nav>

              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-xl rounded-2xl border-2 border-blue-400/40 shadow-lg shadow-blue-500/20">
                  <span className="text-sm font-bold text-blue-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Serving {NAME} Burlington
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-gradient">Removal {NAME}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional <strong className="text-blue-300">popcorn ceiling removal service</strong> for {NAME} homes. HEPA dust control, Level 5 smooth finish, and paint-ready results.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-blue-300 mb-1">✓ Projects</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">50+</div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl border border-indigo-400/20 hover:border-indigo-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-indigo-300 mb-1">⚡ Timeline</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">1-2d</div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-cyan-300 mb-1">★ Rating</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">4.9</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={phoneHref} className="group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>{phoneDisplay}</span>
                  </span>
                </a>
                <a href="/quote/" className="px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-bold text-lg border-2 border-blue-400/40 hover:border-blue-400/70 transition-all hover:scale-105 shadow-lg">
                  <span className="flex items-center justify-center gap-2">✨ Get Free Quote</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-green-300 bg-green-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-green-400/30">
                  <span className="text-green-400">✓</span> Licensed & Insured
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-300 bg-blue-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30">
                  <span className="text-blue-400">✓</span> 3-Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-indigo-300 bg-indigo-950/50 px-4 py-2 rounded-full backdrop-blur-sm border border-indigo-400/30">
                  <span className="text-indigo-400">✓</span> HEPA Dust Control
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-[3rem] blur-3xl transform rotate-6 scale-110"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-700" style={{ perspective: "1500px" }}>
                  <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/30 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
                    <img src="/services/popcorn-ceiling-removal/3.webp" alt="Brant Hills Burlington popcorn ceiling removal Level 5 smooth finish" loading="eager" className="w-full h-auto object-cover aspect-[4/5]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-3xl shadow-2xl border-2 border-blue-300/50 transform hover:scale-110 transition-transform hover:rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">✨</div>
                      <div>
                        <p className="font-black text-white text-xl">Level 5</p>
                        <p className="text-sm text-blue-100 font-semibold">Smooth</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl shadow-2xl border-2 border-indigo-300/50 transform hover:scale-110 transition-transform hover:-rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">🏠</div>
                      <div>
                        <p className="font-black text-white text-xl">{NAME}</p>
                        <p className="text-sm text-indigo-100 font-semibold">Burlington</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/3 -right-16 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute -z-10 bottom-1/3 -left-16 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM - ENHANCED */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-10 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
            </div>

            <div className="relative grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
              <div className="text-white">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Same-day response guaranteed
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                  Get Your {NAME} Popcorn Ceiling Removal Quote
                </h2>
                
                <p className="mt-4 text-white/90 text-lg leading-relaxed">
                  Serving {NAME} Burlington homes. We reply same-day with Level 5 scope, HEPA dust control plan, and paint-ready finish guarantee.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">1–2 Day Projects</h4>
                      <p className="text-white/80 text-sm">Fast turnaround with Level 5 smooth finish for typical rooms</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-xl">
                      ✨
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">HEPA Dust Control</h4>
                      <p className="text-white/80 text-sm">Sealed rooms, masked vents, vacuum-assist sanding keeps your home clean</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{NAME} Specialists</h4>
                      <p className="text-white/80 text-sm">Professional service for all Burlington neighborhoods</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-semibold">✓ WSIB Insured</span>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-semibold">✓ 3-Year Warranty</span>
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
                    <span className="text-sm font-semibold">✓ Paint-Ready Finish</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Quick Quote Form</h3>
                  <p className="text-sm text-gray-600 mt-1">We'll reply within 2 hours on weekdays</p>
                </div>
                <QuoteForm />
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <span>🔒</span>
                  <span>Your information is secure and never shared</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x mx-auto px-4 py-10">
      <JsonLd />

      {/* HERO */}
      <header className="max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Popcorn Ceiling Removal — {NAME}, Burlington
            </h1>
            <p className="mt-3 text-gray-700 max-w-3xl">
              Trade dated texture for <strong>smooth, modern ceilings</strong>.
              We handle containment, scrape/encapsulate, skim-coat to Level 4–5,{" "}
              <strong>HEPA sanding</strong>, stain-block primer, and finish
              paint for a clean, consistent result.
            </p>
          </div>

          {/* Blue CTAs */}
          <div className="flex gap-3 md:shrink-0">
            <a
              href={phoneHref}
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              <span className="mr-2">📞</span>(647) 923-6784
            </a>
            <a
              href="/quote/"
              className="inline-flex items-center h-11 px-4 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 active:brightness-95 transition"
            >
              Get my quote
            </a>
          </div>
        </div>

        {/* Sub-nav */}
        <nav className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <a href="#why-us" className="underline-offset-2 hover:underline">
            Why us
          </a>
          <a href="#process" className="underline-offset-2 hover:underline">
            Process
          </a>
          <a href="#pricing" className="underline-offset-2 hover:underline">
            Pricing
          </a>
          <a href="#local" className="underline-offset-2 hover:underline">
            Local SEO details
          </a>
          <a href="#links" className="underline-offset-2 hover:underline">
            Neighbourhood links
          </a>
          <a href="#faq" className="underline-offset-2 hover:underline">
            FAQ
          </a>
        </nav>
      </header>

      {/* GALLERY */}
      <section className="mt-8 py-12 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recent {NAME} Projects</h2>
          <p className="text-gray-600 mt-2">Level 5 smooth finishes for Burlington homes</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${NAME} Burlington popcorn ceiling removal — project ${
                i + 1
              }`}
              className="w-full h-56 object-cover rounded-2xl border shadow"
              data-lightbox="true"
            />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="mt-10">
        <h2 className="text-2xl font-semibold">
          Why {NAME} homeowners choose us
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">
              Experienced with painted popcorn
            </h3>
            <p className="mt-2 text-gray-700">
              We adapt methods to match existing paint build-up and prior
              patches, then skim and sand for a uniform read.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Clean jobsite routines</h3>
            <p className="mt-2 text-gray-700">
              Daily tidy wrap-ups, sealed rooms, and protected corridors keep
              the rest of your home usable.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Pot light patching</h3>
            <p className="mt-2 text-gray-700">
              We cut and patch around new pot lights, blending to your new
              smooth finish for a seamless look.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h3 className="text-xl font-semibold">Predictable quotes</h3>
            <p className="mt-2 text-gray-700">
              Send sizes/photos for a quick written number and a firm start date
              that fits your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS - ENHANCED */}
      <section id="process" className="mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our Professional Process</h2>
          <p className="text-gray-600 mt-2">6 steps to perfect ceilings in {NAME}</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              1
            </div>
            <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Containment & Protection</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Containment, double floor protection, HVAC masking to keep dust in the work zone.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              2
            </div>
            <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Testing & Assessment</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Test: controlled scrape vs encapsulate for heavy paint layers.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">🛠️</div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Level 5 Skim Coat</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Full-field skim for <strong>Level 4–5 finish</strong> ensuring perfectly smooth surface.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-100 hover:border-cyan-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              4
            </div>
            <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">HEPA Sanding</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              HEPA sanding with raking-light QA and precision touch-ups for flawless results.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              5
            </div>
            <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Stain-Block Primer</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Stain-block primer for uniformity and sheen control, prevents bleed-through.
            </p>
          </div>

          <div className="group relative p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform">
              6
            </div>
            <div className="absolute -top-2 -right-2 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">Final Paint</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Optional: finish paint (two coats) for a complete, ready-to-enjoy ceiling.
            </p>
          </div>
        </div>

      </section>

      {/* PRICING & INTENT - ENHANCED */}
      <section id="pricing" className="mt-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Transparent Pricing & Services</h2>
          <p className="text-gray-600 mt-2">Clear scope, competitive rates, written warranty included</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full filter blur-2xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Typical Scopes</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span>Bedrooms & primary suites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span>Hallways + landings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">✓</span>
                  <span>Family room + dining combinations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full filter blur-2xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High-Intent Keywords</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>popcorn ceiling removal {NAME.toLowerCase()}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>remove popcorn ceiling Burlington</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>smooth ceilings Brant Hills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>Level 5 finish Burlington</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>painted popcorn removal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full filter blur-2xl"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Helpful Links</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link className="text-purple-600 hover:text-purple-800 font-semibold hover:underline" href="/services/popcorn-ceiling-removal/">
                    Main Popcorn Ceiling Service
                  </Link>
                </li>
                <li>
                  <Link className="text-purple-600 hover:text-purple-800 font-semibold hover:underline" href={`${CITY_BASE}/`}>
                    Burlington Neighbourhood Index
                  </Link>
                </li>
                <li>
                  <Link className="text-purple-600 hover:text-purple-800 font-semibold hover:underline" href="/services/interior-painting/">
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link className="text-purple-600 hover:text-purple-800 font-semibold hover:underline" href="/services/drywall-installation/">
                    Drywall & Skim-Coat
                  </Link>
                </li>
                <li>
                  <Link className="text-purple-600 hover:text-purple-800 font-semibold hover:underline" href="/blog/popcorn-ceiling-removal-cost-timeline/">
                    Cost & Timeline Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wider text-blue-300 font-semibold">💎 Pricing Details</p>
              <h3 className="text-2xl font-bold mt-1">What Affects Your Quote</h3>
              <p className="text-gray-300 mt-2">Painted texture, ceiling repairs, and Level 5 finishing add scope; materials & HST are separate. Share sizes for a firm quote.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                ✓ Competitive Rates
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                ✓ Written Quote
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                ✓ No Hidden Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO DETAILS */}
      <section id="local" className="mt-10 py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Local Expertise in {NAME}, Burlington
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border-2 border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Serving {NAME} Neighborhoods
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're in and out of {NAME} around <strong>Duncaster Dr</strong>,{" "}
                <strong>Upper Middle Rd</strong>, and the{" "}
                <strong>Brant Hills Community Centre</strong>, with quick access to{" "}
                <strong>Hwy 407</strong>. Our <strong>Level 5 skim coating</strong> keeps big
                rooms looking flat even under raking light from large windows—perfect for modern {NAME} homes with open-concept layouts.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-indigo-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏘️</span>
                Nearby Burlington Neighborhoods We Serve
              </h3>
              <p className="text-gray-700 mb-4">
                Looking for popcorn ceiling removal in nearby Burlington communities? We provide the same professional Level 5 finishing service throughout the region:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Link 
                  href={`${CITY_BASE}/tyandaga/`}
                  className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 hover:border-blue-400 transition-all group"
                >
                  <span className="text-blue-600 group-hover:scale-110 transition-transform">→</span>
                  <span className="text-sm font-semibold text-gray-800">
                    Popcorn Ceiling Removal Tyandaga
                  </span>
                </Link>
                
                <Link 
                  href={`${CITY_BASE}/mountainside/`}
                  className="flex items-center gap-2 p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl border border-indigo-200 hover:border-indigo-400 transition-all group"
                >
                  <span className="text-indigo-600 group-hover:scale-110 transition-transform">→</span>
                  <span className="text-sm font-semibold text-gray-800">
                    Popcorn Ceiling Removal Mountainside
                  </span>
                </Link>
                
                <Link 
                  href={`${CITY_BASE}/headon-forest/`}
                  className="flex items-center gap-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 hover:border-purple-400 transition-all group"
                >
                  <span className="text-purple-600 group-hover:scale-110 transition-transform">→</span>
                  <span className="text-sm font-semibold text-gray-800">
                    Popcorn Ceiling Removal Headon Forest
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section id="links" className="mt-10 py-12 bg-white rounded-3xl border-2 border-slate-200 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Professional Popcorn Ceiling Removal Across Burlington
            </h2>
            <p className="text-gray-600 mt-2">
              Serving all Burlington neighborhoods with Level 5 smooth finish and HEPA dust control
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {ALL.filter(([s]) => s !== SLUG).map(([s, n]) => (
              <Link 
                key={s} 
                href={`${CITY_BASE}/${s}/`} 
                className="group p-4 bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl border-2 border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 group-hover:scale-125 transition-transform">🏠</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {n}
                    </p>
                    <p className="text-xs text-gray-600">
                      Popcorn Ceiling Removal
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">
              Can't find your Burlington neighborhood?
            </h3>
            <p className="text-blue-100 mb-4">
              We serve all of Burlington and surrounding areas with professional popcorn ceiling removal services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={phoneHref}
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition shadow-lg"
              >
                📞 Call {phoneDisplay}
              </a>
              <Link 
                href={`${CITY_BASE}/`}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition"
              >
                View All Burlington Areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-10">
        <h2 className="text-2xl font-semibold">FAQ — {NAME}</h2>
        {[
          {
            q: "How long does a typical room take?",
            a: "Most bedrooms take 1–2 days; larger/painted ceilings or Level 5 finishing may add time.",
          },
          {
            q: "Do you handle water stains?",
            a: "Yes—repairs plus stain-blocking primer before finish coats.",
          },
          {
            q: "Are you insured and do you warranty the work?",
            a: "Yes—WSIB and liability insured. Written workmanship warranty included.",
          },
        ].map((f, i) => (
          <details
            key={i}
            className="p-6 bg-white rounded-2xl border shadow-sm mt-4"
          >
            <summary className="font-medium">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 p-6 bg-white rounded-2xl border shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            Ready for smooth, bright ceilings in {NAME}?
          </h3>
          <p className="text-gray-600">
            Fast photo estimate. Clear plan. Tidy finish.
          </p>
        </div>
        <div className="flex gap-3">
          <a className="btn-cta" href={phoneHref}>
            📞 (647) 923-6784
          </a>
          <a className="btn-cta" href="/quote/">
            Get my quote
          </a>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className=" ">
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
    </>
  );
}
