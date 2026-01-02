// app/popcorn-ceiling-removal/mississauga/lorne-park/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";

export const revalidate = 86400;

export const metadata = {
  title: "Lorne Park Popcorn Ceiling Removal | Level 5 Smooth Ceilings",
  description:
    "Popcorn ceiling removal Lorne Park: HEPA containment, Level 5 skim coat, stain-block primer for homes along Lakeshore Rd W, Indian Rd, and Lorne Park estates.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/lorne-park/",
  },
  openGraph: {
    title: "Lorne Park Popcorn Ceiling Removal | Level 5 Finish",
    description:
      "Professional popcorn ceiling removal service Lorne Park homeowners trust—ceiling texture removal, Level 5 skim, primer, and paint-ready handoff.",
    url: "/popcorn-ceiling-removal/mississauga/lorne-park/",
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
        name: "Lorne Park Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Lorne Park, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/lorne-park/",
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Popcorn Ceiling Removal",
            item: "/services/popcorn-ceiling-removal/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mississauga",
            item: "/popcorn-ceiling-removal/mississauga/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Lorne Park",
            item: "/popcorn-ceiling-removal/mississauga/lorne-park/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you work in Lorne Park estates near the lake?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Popcorn ceiling removal Lorne Park crews cover Indian Rd, Lorne Park Rd, Lakeshore Rd W, and estates south of the QEW every week.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle vaulted ceilings and skylights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We bring safe staging for vaulted sections, blend skylight wells, and maintain crisp returns where ceiling planes meet bulkheads.",
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
  const gallery = Array.from(
    { length: 6 },
    (_, i) => `/services/popcorn-ceiling-removal/${i + 1}.webp`
  );

  return (
    <>
      <JsonLd />

      {/* MODERN HERO SECTION */}
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
                  <li className="font-semibold text-cyan-300">Lorne Park</li>
                </ol>
              </nav>

              {/* Location Badge */}
              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 backdrop-blur-xl rounded-2xl border-2 border-teal-400/40 shadow-lg shadow-teal-500/20">
                  <span className="text-sm font-bold text-cyan-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Serving Lorne Park & Lakeshore Estates
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 animate-gradient">
                    Removal Lorne Park
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional{" "}
                  <strong className="text-cyan-300">
                    popcorn ceiling removal service
                  </strong>{" "}
                  for Lorne Park estates. HEPA dust control, Level 5 smooth
                  finish along Lakeshore Rd W, Indian Rd & waterfront homes.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-teal-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-teal-300 mb-1">✓ Estates</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    60+
                  </div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-cyan-300 mb-1">⚡ Timeline</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    3-4d
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
                    <span>{phoneDisplay}</span>
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
                      src="/services/popcorn-ceiling-removal/6.webp"
                      alt="Lorne Park popcorn ceiling removal Level 5 smooth finish"
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
                          Smooth
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-2xl border-2 border-cyan-300/50 transform hover:scale-110 transition-transform hover:-rotate-3">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">🏡</div>
                      <div>
                        <p className="font-black text-white text-xl">Estate</p>
                        <p className="text-sm text-cyan-100 font-semibold">
                          Service
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

      {/* HIGHLIGHTS */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">Homeowner-Friendly</h3>
              <p className="text-gray-600 mt-2">
                Floor & stair protection, room containment and daily tidy
                wrap-ups keep key spaces usable while we work.
              </p>
            </div>
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">Dust-Controlled</h3>
              <p className="text-gray-600 mt-2">
                Sealed rooms, HVAC vent masking and HEPA-assist sanding help
                keep the house clean and comfortable.
              </p>
            </div>
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">Level 5 Finish</h3>
              <p className="text-gray-600 mt-2">
                Full-field skim checked under raking light; stain-block primer
                for a uniform, bright read across rooms and hallways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Popcorn ceiling removal in a Lorne Park home — project ${
                  i + 1
                }`}
                className="w-full h-56 object-cover rounded-2xl border shadow"
                data-lightbox="true"
              />
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL INSIGHT */}
      <section id="local" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Popcorn ceiling removal for Lorne Park estates</h2>
            <p>
              Lorne Park is known for mature trees, larger lots and bright
              interiors that show every ceiling flaw. Morning light through big
              windows and evening LEDs along long hallways can reveal waves,
              tape telegraphing and patch edges that looked fine at night. Our
              approach is tailored to those conditions: protect the home
              thoroughly, choose the safest removal method, and finish with a
              Level 5 skim so ceilings read flat and modern from entry to family
              room.
            </p>
            <p>
              We start with protection: floors and stairs covered, railings
              wrapped, furniture shielded, HVAC vents masked, and rooms sealed
              so dust stays inside containment. If the texture carries multiple
              paint layers, we test a discreet section to decide between
              controlled scraping and safe encapsulation. Either route leads to
              a full-field skim, vacuum-assist sanding and a stain-block primer
              that equalizes porosity and prevents flashing when you paint.
            </p>
            <p>
              Around Lorne Park Rd, Indian Rd, Lakeshore Rd W, and streets south
              of the QEW, open sightlines and angled daylight can be
              unforgiving. We inspect surfaces under the same raking light your
              home gets at different times of day. Low areas are re-skimmed
              until the ceiling reads consistently smooth — not just "good
              enough," but truly flat under bright whites and neutral finishes
              popular in Lorne Park.
            </p>
            <p>
              Many projects include lighting upgrades. We blend pot-light
              cutouts, fixture moves and previous patches so they disappear
              after primer. For rooms with vaulted sections or higher landings,
              we add safe staging to reach returns and keep edges crisp where
              ceiling planes meet skylight wells or bulkheads.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Lorne Park ceiling services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Popcorn ceiling removal service Lorne Park",
                copy: "Estate-grade protection, test substrate, scrape or encapsulate, Level 5 skim, stain-block primer, paint-ready handoff.",
              },
              {
                title: "Popcorn ceiling removal contractor Lorne Park",
                copy: "We coordinate skylights, pot lights, vaulted staging, and architectural details so you have one estate crew.",
              },
              {
                title: "Ceiling resurfacing Lorne Park",
                copy: "Smooth ceiling contractor Lorne Park workflows for waterfront homes, foyers, and luxury additions.",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">🏡</div>
                <h3 className="text-xl font-semibold mb-3">{svc.title}</h3>
                <p className="text-gray-600">{svc.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">
                Pricing & schedule
              </p>
              <h2 className="text-3xl font-bold mt-2">
                Popcorn ceiling removal cost Lorne Park estates expect
              </h2>
              <p className="mt-4 text-slate-200">
                Popcorn removal cost Lorne Park waterfront homes typically
                ranges $7–$8/sq ft for unpainted texture. Vaulted ceilings with
                skylights or painted texture needing encapsulation + Level 5
                skim run $9–$11/sq ft.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Method", "Scrape or encapsulate + Level 5"],
                ["Finish", "Stain-block primer paint-ready"],
                ["Warranty", "3 years workmanship"],
                ["Access", "Vaulted staging & skylight coordination"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl bg-white/10 border border-white/20"
                >
                  <p className="text-xs uppercase tracking-wide text-indigo-200">
                    {label}
                  </p>
                  <p className="text-2xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105"
              href="/quote/"
            >
              Get estimate
            </a>
            <a
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105"
              href={phoneHref}
            >
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Lorne Park projects
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Indian Rd Two-Storey",
                near: "north of Lakeshore Rd W",
                scope:
                  "Painted texture; safe encapsulation; full Level 5 skim; stain-block primer.",
                duration: "3 days",
                outcome:
                  "Even reflectance in open living/dining; no joint shadowing in morning sun.",
              },
              {
                title: "Lorne Park Rd Detached",
                near: "south of the QEW",
                scope:
                  "Scrape + skim on main; pot-light rings blended; prime; paint-ready.",
                duration: "2.5 days",
                outcome:
                  "Flat, bright ceiling through hallway and family room sightlines.",
              },
              {
                title: "Near Jack Darling Park",
                near: "west of Lorne Park",
                scope:
                  "Vaulted area with bulkhead; full skim; raking-light inspection; primer for sprayed finish.",
                duration: "3–4 days",
                outcome:
                  "Crisp returns and uniform read in skylight well and bulkhead transitions.",
              },
            ].map((cs, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl border">
                <p className="text-sm uppercase tracking-wide text-teal-600">
                  {cs.near}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{cs.title}</h3>
                <p className="mt-3 text-gray-700">
                  <strong>Scope:</strong> {cs.scope}
                </p>
                <p className="text-gray-700">
                  <strong>Duration:</strong> {cs.duration}
                </p>
                <p className="text-gray-700">
                  <strong>Result:</strong> {cs.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            Lorne Park FAQ
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Can you handle vaulted ceilings with skylights in Lorne Park estates?",
                a: "Yes. We bring safe staging for vaulted sections, blend skylight wells, and maintain crisp returns where ceiling planes meet bulkheads.",
              },
              {
                q: "Do you protect luxury finishes during popcorn ceiling removal Lorne Park projects?",
                a: "We protect floors, stairs, railings, cabinetry, and furniture with estate-grade materials. HVAC vents masked and rooms sealed.",
              },
              {
                q: "What about architectural coordination and pot lights?",
                a: "Our smooth ceiling contractor Lorne Park lead coordinates fixture moves, pot-light blending, and architectural details so everything sits clean.",
              },
              {
                q: "Can you achieve Level 5 smooth on painted popcorn?",
                a: "We test adhesion first. If scraping risks damage, we encapsulate safely then Level 5 skim for raking-light perfection.",
              },
              {
                q: "How much does popcorn ceiling removal cost in Lorne Park?",
                a: "Popcorn removal cost Lorne Park typically ranges $7-$8/sq ft for unpainted texture. Painted or vaulted ceilings with skylights run $9-$11/sq ft for encapsulation + Level 5 skim.",
              },
              {
                q: "How long does a typical Lorne Park estate project take?",
                a: "Most Lorne Park homes take 3-4 days: day 1 protection & scrape, day 2-3 Level 5 skim & sand, day 4 prime. We coordinate around your schedule.",
              },
              {
                q: "Do you test for asbestos in older Lorne Park homes?",
                a: "Yes. For homes built before 1990 we recommend testing. If positive, we encapsulate safely rather than scrape, then Level 5 skim for the same smooth result.",
              },
              {
                q: "Can you match ceiling height transitions in additions?",
                a: "Absolutely. We feather transitions where original rooms meet additions, blend bulkheads, and coordinate with millwork so everything reads continuous.",
              },
              {
                q: "What's included in your warranty for Lorne Park projects?",
                a: "We provide a 3-year workmanship warranty covering cracks, tape lifts, and finish quality. WSIB and liability insurance protect your estate during the work.",
              },
              {
                q: "Do you work evenings or weekends for busy families?",
                a: "Yes. We schedule around school pickups, work-from-home needs, and family routines. Evening or weekend access available for estate projects with flexibility.",
              },
              {
                q: "How do you handle dust in open-concept Lorne Park homes?",
                a: "We seal work areas with zippered barriers, mask HVAC vents, use vacuum-assist sanders, and run HEPA filtration to keep dust out of living spaces.",
              },
              {
                q: "Can you paint after popcorn removal in Lorne Park?",
                a: "Yes. After priming we can spray or roll your ceiling with designer whites, Benjamin Moore or Sherwin-Williams colors to match your estate finishes.",
              },
            ].map((faq) => (
              <details key={faq.q} className="p-6 bg-white rounded-3xl border">
                <summary className="font-semibold text-lg cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KEYWORDS */}
      <section id="keywords" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-4">
            Searches we hear in Lorne Park
          </h2>
          <p className="text-gray-700 leading-relaxed">
            popcorn ceiling removal Lorne Park • popcorn ceiling contractor
            Lorne Park • popcorn ceiling removal contractor Lorne Park •
            professional popcorn ceiling removal Lorne Park • popcorn ceiling
            removal service Lorne Park • smooth ceiling contractor Lorne Park •
            ceiling texture removal Lorne Park • stipple ceiling removal Lorne
            Park • ceiling resurfacing Lorne Park
          </p>
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section
        id="neighbourhoods"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Explore popcorn ceiling removal across Mississauga
          </h2>
          <p className="mt-2 text-center text-gray-600 mb-8">
            Compare nearby neighborhoods and services
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-teal-600">
                ← All Mississauga areas
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Citywide popcorn ceiling removal Mississauga services
              </p>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/clarkson/"
              className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-lg">Clarkson</h3>
              <p className="text-sm text-gray-600 mt-2">
                Popcorn ceiling removal Clarkson bungalows & lakefront homes
              </p>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/port-credit/"
              className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-lg">Port Credit</h3>
              <p className="text-sm text-gray-600 mt-2">
                Popcorn ceiling removal Port Credit waterfront properties
              </p>
            </Link>
            <Link
              href="/popcorn-ceiling-removal/mississauga/cooksville/"
              className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-lg">Cooksville</h3>
              <p className="text-sm text-gray-600 mt-2">
                Popcorn ceiling removal Cooksville central residential
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-black">
                Ready for popcorn ceiling removal in Lorne Park?
              </h3>
              <p className="text-xl text-white/90 mt-2">
                Get a Level 5 smooth finish from estate-grade ceiling
                specialists
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105"
                href={phoneHref}
              >
                📞 {phoneDisplay}
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105"
                href="/quote/"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAV - PROPER AUTHORITY FLOW */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            className="flex flex-wrap gap-4 text-sm justify-center"
            aria-label="Related services"
          >
            <Link
              href="/popcorn-ceiling-removal/mississauga/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              ← Mississauga popcorn ceiling removal services citywide
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/popcorn-ceiling-removal/mississauga/clarkson/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              Clarkson popcorn ceiling removal lakefront bungalows →
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/popcorn-ceiling-removal/mississauga/port-credit/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              Port Credit popcorn ceiling removal waterfront homes →
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/popcorn-ceiling-removal/mississauga/cooksville/"
              className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition"
            >
              Cooksville popcorn ceiling removal central residential →
            </Link>
          </nav>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
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
