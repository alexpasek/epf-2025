// app/popcorn-ceiling-removal/mississauga/mineola/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title: "Mineola Popcorn Ceiling Removal | Professional Level 5 Smooth Ceilings",
  description:
    "Professional popcorn ceiling removal Mineola: HEPA containment, Level 5 skim coat, stain-block primer for custom homes. Expert ceiling texture removal along Mineola Rd E/W, Hurontario St, and waterfront area.",
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/mineola/",
  },
  openGraph: {
    title: "Mineola Popcorn Ceiling Removal | Level 5 Finish",
    description:
      "Professional popcorn ceiling removal service Mineola homeowners trust—ceiling texture removal, smooth ceiling contractor, Level 5 skim, primer, and paint-ready handoff.",
    url: "/popcorn-ceiling-removal/mississauga/mineola/",
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
        name: "Mineola Popcorn Ceiling Removal",
        serviceType: [
          "Popcorn Ceiling Removal",
          "Stipple Ceiling Removal",
          "Level 5 Skim Coat",
          "Ceiling Resurfacing",
        ],
        areaServed: "Mineola, Mississauga",
        url: "/popcorn-ceiling-removal/mississauga/mineola/",
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
            name: "Mineola",
            item: "/popcorn-ceiling-removal/mississauga/mineola/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you achieve gallery-flat ceilings in critical light?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We skim full fields and verify in raking light from windows and LEDs, then prime with stain-block system for bright, even finish.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate with painters and electricians?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We coordinate sequence with your trades, feathering rings and patches so they vanish after primer. We can also quote finish coats.",
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
                  <li><Link href="/services/popcorn-ceiling-removal/" className="hover:text-blue-300 transition">Popcorn Ceiling Removal</Link></li>
                  <li className="text-white/30">→</li>
                  <li><Link href="/popcorn-ceiling-removal/mississauga/" className="hover:text-blue-300 transition">Mississauga</Link></li>
                  <li className="text-white/30">→</li>
                  <li className="font-semibold text-blue-300">Mineola</li>
                </ol>
              </nav>

              <div className="inline-block">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-xl rounded-2xl border-2 border-blue-400/40 shadow-lg shadow-blue-500/20">
                  <span className="text-sm font-bold text-blue-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Serving Mineola East & West
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Popcorn Ceiling</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-gradient">Removal Mineola</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Professional <strong className="text-blue-300">popcorn ceiling removal service Mineola</strong> for custom homes. Smooth ceiling contractor specializing in HEPA dust control, Level 5 finish along Mineola Rd E/W, Hurontario St & waterfront area.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="group p-4 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-blue-300 mb-1">✓ Homes</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">80+</div>
                </div>
                <div className="group p-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl border border-indigo-400/20 hover:border-indigo-400/50 transition-all hover:scale-105">
                  <div className="text-sm text-indigo-300 mb-1">⚡ Timeline</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">3-4d</div>
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
                    <img src="/services/popcorn-ceiling-removal/3.webp" alt="Mineola popcorn ceiling removal Level 5 smooth finish" loading="eager" className="w-full h-auto object-cover aspect-[4/5]" />
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
                        <p className="font-black text-white text-xl">Custom</p>
                        <p className="text-sm text-indigo-100 font-semibold">Homes</p>
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
            {/* Animated background elements */}
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
                  Get Your Professional Popcorn Ceiling Removal Mineola Quote
                </h2>
                
                <p className="mt-4 text-white/90 text-lg leading-relaxed">
                  Custom homes, vaulted great rooms, and skylight installations along Mineola Rd E/W and Hurontario St. We reply same-day with ceiling texture removal scope, critical-light inspection plan, and gallery-flat finish guarantee.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">3–4 Day Custom Projects</h4>
                      <p className="text-white/80 text-sm">Gallery-flat finish with critical-light inspection for premium homes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-xl">
                      ✨
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Level 5 Premium Finish</h4>
                      <p className="text-white/80 text-sm">Full-field skim verified in raking light from large windows & skylights</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Mineola Specialists</h4>
                      <p className="text-white/80 text-sm">Familiar with Mineola Rd E/W, Hurontario St, waterfront custom builds</p>
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
                    <span className="text-sm font-semibold">✓ Premium Protection</span>
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

      {/* HIGHLIGHTS */}
      <section id="highlights" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">Gallery-Flat Finish</h3>
              <p className="text-gray-600 mt-2">Level 5 skim verified in critical light from large windows and skylight areas for custom homes.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">HEPA Dust Control</h3>
              <p className="text-gray-600 mt-2">Sealed containment, vacuum-assist sanding, and premium protection for high-end finishes.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border shadow-sm">
              <h3 className="text-xl font-semibold">Trade Coordination</h3>
              <p className="text-gray-600 mt-2">Sequence with painters and electricians, feather pot-light rings, paint-ready handoff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((src, i) => (
              <img key={i} src={src} alt={`Popcorn ceiling removal in a Mineola home — project ${i + 1}`} className="w-full h-56 object-cover rounded-2xl border shadow" data-lightbox="true" />
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL INSIGHT */}
      <section id="local" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Professional popcorn ceiling removal for Mineola custom homes</h2>
            <p>
              Mineola East and West custom homes demand gallery-flat finishes that perform under critical light. Large windows, vaulted great rooms, and open sightlines expose every imperfection. Our popcorn ceiling removal contractor Mineola approach uses full-field Level 5 skim, raking-light inspection from multiple angles, and stain-block primer that delivers uniform reflectance across wide spans. We're the smooth ceiling contractor Mineola custom homeowners trust.
            </p>
            <p>
              Along Mineola Rd E/W, Hurontario St, and near the waterfront, modern renovations often include pot-light upgrades and skylight installations. Our ceiling texture removal Mineola process includes feathering rings and transitions wide, blending seams invisibly, and coordinating with your electrician and painter. Whether you need stipple ceiling removal Mineola or standard popcorn texture removal, every patch, fixture ring, and ceiling plane transition is addressed during the skim coat—nothing left to telegraph after primer.
            </p>
            <p>
              Access and staging for custom homes requires planning. We protect premium hardwood, tile, and millwork with professional-grade materials, coordinate material drops around your schedule, and maintain daily tidy wrap-ups. Our ceiling resurfacing Mineola service delivers clear communication: written scope, photo updates, punch-list walk-through. WSIB and liability insured with 3-year workmanship warranty on every project.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Mineola ceiling services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {title: "Professional popcorn ceiling removal service Mineola", copy: "Premium protection, critical-light inspection, Level 5 skim, stain-block primer, gallery-flat handoff for custom homes. Expert ceiling texture removal."},
              {title: "Popcorn ceiling removal contractor Mineola", copy: "We coordinate pot lights, skylights, vaulted staging, and painter sequence. Your trusted smooth ceiling contractor Mineola premium crew."},
              {title: "Ceiling resurfacing Mineola specialists", copy: "Stipple ceiling removal Mineola workflows for Mineola Rd custom builds, waterfront properties, luxury renovations. Complete surface transformation."},
            ].map((svc) => (
              <div key={svc.title} className="p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
                <div className="text-5xl mb-4">🏠</div>
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
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Pricing & schedule</p>
              <h2 className="text-3xl font-bold mt-2">Popcorn ceiling removal cost Mineola homes expect</h2>
              <p className="mt-4 text-slate-200">
                Popcorn removal cost Mineola typically ranges $7–$9/sq ft for standard texture with scraping popcorn ceiling and basic finish. Custom homes with vaulted ceilings, skylights, or critical-light requirements needing professional removal plus Level 5 skim run $9–$12/sq ft. Cost to scrape popcorn ceiling varies based on ceiling height, texture type (painted vs unpainted), and square footage.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Method", "Scrape or encapsulate + Level 5"],
                ["Finish", "Stain-block primer paint-ready"],
                ["Warranty", "3 years workmanship"],
                ["Custom", "Critical-light inspection"],
              ].map(([label, value]) => (
                <div key={label} className="p-4 rounded-2xl bg-white/10 border border-white/20">
                  <p className="text-xs uppercase tracking-wide text-indigo-200">{label}</p>
                  <p className="text-2xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105" href="/quote/">Get estimate</a>
            <a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105" href={phoneHref}>Call {phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Mineola projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {title: "Custom Home Great Room", near: "Mineola West", scope: "Full Level 5 skim; critical-light inspection; stain-block primer.", duration: "3.5 days", outcome: "Uniform reflectance across wide vaulted spans and skylight wells."},
              {title: "Main Floor + Pot Lights", near: "Mineola East", scope: "Scrape + skim; pot-light rings feathered; prime; paint-ready.", duration: "3 days", outcome: "No seam telegraphing in critical morning light."},
              {title: "Stairwell & Skylight Returns", near: "Hurontario corridor", scope: "Safe staging; edge work at skylight; primer.", duration: "2 days", outcome: "Crisp returns; bright flat finish throughout."},
            ].map((cs, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl border">
                <p className="text-sm uppercase tracking-wide text-teal-600">{cs.near}</p>
                <h3 className="mt-2 text-xl font-semibold">{cs.title}</h3>
                <p className="mt-3 text-gray-700"><strong>Scope:</strong> {cs.scope}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {cs.duration}</p>
                <p className="text-gray-700"><strong>Result:</strong> {cs.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8">Mineola FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {q: "Can you achieve gallery-flat ceilings in critical light?", a: "Yes. Our professional popcorn ceiling removal Mineola service includes full-field skim verified in raking light from large windows, skylights, and LED fixtures for custom home perfection."},
              {q: "Do you coordinate with painters and electricians for pot lights?", a: "We sequence with your trades as your popcorn ceiling removal contractor Mineola, feather pot-light rings wide, and deliver paint-ready surfaces. We can also quote finish coats."},
              {q: "How do you protect premium hardwood and millwork?", a: "Professional-grade floor protection, millwork masking, and sealed containment protect high-end finishes during ceiling texture removal Mineola projects."},
              {q: "How much does popcorn ceiling removal cost in Mineola?", a: "Popcorn ceiling removal cost Mineola ranges $7-$9/sq ft standard, $9-$12/sq ft for custom homes with vaulted ceilings or critical-light requirements. Popcorn removal cost includes scraping, skim, and prime."},
              {q: "How long does a Mineola custom home project take?", a: "Most custom homes take 3-4 days: day 1 protection & removing stucco ceiling texture, day 2-3 Level 5 skim & critical-light inspection, day 4 prime."},
              {q: "Do you test for asbestos before taking off popcorn ceiling?", a: "Yes. For homes built before 1990 we recommend testing. If positive, we encapsulate safely rather than scrape for cottage cheese ceiling removal Mineola safety."},
              {q: "Can you handle vaulted ceilings and skylight transitions?", a: "We bring safe staging for vaulted areas, blend skylight wells, and maintain crisp returns where ceiling planes meet architectural features."},
              {q: "What's your warranty for Mineola custom home projects?", a: "3-year workmanship warranty covering cracks, tape lifts, finish quality. WSIB and liability insured for premium property protection."},
              {q: "Do you handle great rooms with high ceilings?", a: "Yes. Safe scaffolding, raking-light inspection from floor level, and full-field skim ensure uniform appearance across large spans."},
              {q: "Can you handle painted popcorn ceiling removal Mineola projects?", a: "Yes. Painted popcorn ceiling removal Mineola requires careful testing and often encapsulation plus Level 5 skim rather than scraping to avoid damage."},
              {q: "What areas of Mineola do you serve?", a: "We cover all Mineola including Mineola Rd E/W, Hurontario St, Kenollie, Glenburnie, Broadmoor, and waterfront neighborhoods."},
              {q: "Do you handle stipple ceiling removal in Mineola?", a: "Yes. Stipple ceiling removal Mineola follows same Level 5 process—test, scrape or encapsulate, full-field skim, prime for gallery-flat results."},
            ].map((faq) => (
              <details key={faq.q} className="p-6 bg-white rounded-3xl border">
                <summary className="font-semibold text-lg cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KEYWORDS */}
      <section id="keywords" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-semibold mb-4">Common ceiling searches in Mineola</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Most searched:</strong> popcorn ceiling removal Mineola • popcorn ceiling contractor Mineola • popcorn ceiling removal contractor Mineola • professional popcorn ceiling removal Mineola • popcorn ceiling removal service Mineola • smooth ceiling contractor Mineola • ceiling texture removal Mineola • stipple ceiling removal Mineola • ceiling resurfacing Mineola
          </p>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            <strong>Also searched:</strong> popcorn ceiling Mineola • popcorn removal Mineola • scraping popcorn ceiling Mineola • removing stucco ceiling Mineola • stucco ceiling removal Mineola • painted popcorn ceiling removal Mineola • cottage cheese ceiling removal Mineola
          </p>
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section id="neighbourhoods" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Explore popcorn ceiling removal across Mississauga</h2>
          <p className="mt-2 text-center text-gray-600 mb-8">Compare nearby neighborhoods and services</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/popcorn-ceiling-removal/mississauga/" className="p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg text-teal-600">← All Mississauga areas</h3>
              <p className="text-sm text-gray-600 mt-2">Citywide popcorn ceiling removal Mississauga services</p>
            </Link>
            <Link href="/popcorn-ceiling-removal/mississauga/port-credit/" className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg">Port Credit</h3>
              <p className="text-sm text-gray-600 mt-2">Popcorn ceiling removal Port Credit waterfront homes</p>
            </Link>
            <Link href="/popcorn-ceiling-removal/mississauga/lakeview/" className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg">Lakeview</h3>
              <p className="text-sm text-gray-600 mt-2">Popcorn ceiling removal Lakeview residential properties</p>
            </Link>
            <Link href="/popcorn-ceiling-removal/mississauga/cooksville/" className="p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
              <h3 className="font-bold text-lg">Cooksville</h3>
              <p className="text-sm text-gray-600 mt-2">Popcorn ceiling removal Cooksville central homes</p>
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
              <h3 className="text-3xl md:text-4xl font-black">Ready for popcorn ceiling removal in Mineola?</h3>
              <p className="text-xl text-white/90 mt-2">Get a gallery-flat Level 5 finish from custom home ceiling specialists</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a className="inline-flex items-center justify-center px-8 py-5 bg-white text-teal-600 hover:bg-gray-100 font-bold text-lg rounded-2xl shadow-2xl transition-all hover:scale-105" href={phoneHref}>📞 {phoneDisplay}</a>
              <a className="inline-flex items-center justify-center px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white font-bold text-lg rounded-2xl transition-all hover:scale-105" href="/quote/">Get Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAV */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex flex-wrap gap-4 text-sm justify-center" aria-label="Related services">
            <Link href="/popcorn-ceiling-removal/mississauga/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">← Mississauga popcorn ceiling removal services citywide</Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/mississauga/port-credit/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">Port Credit popcorn ceiling removal waterfront homes →</Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/mississauga/lakeview/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">Lakeview popcorn ceiling removal residential properties →</Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/mississauga/cooksville/" className="text-teal-600 hover:text-teal-700 font-semibold hover:underline transition">Cooksville popcorn ceiling removal central homes →</Link>
          </nav>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-teal-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a href={phoneHref} className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">📞 Call</a>
          <a href="/quote/" className="flex-1 text-center py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">Quote</a>
        </div>
      </div>
    </>
  );
}
