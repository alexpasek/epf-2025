// app/popcorn-ceiling-removal/mississauga/churchill-meadows/page.jsx
import Link from "next/link";
import { CONTACT } from "@/app/config";
import { cities } from "@/data/cities";
import LocalSignals from "@/components/LocalSignals";
import QuoteForm from "@/components/QuoteForm";

export const revalidate = 86400;

export const metadata = {
  title:
    "Popcorn Ceiling Removal Churchill Meadows, Mississauga | Level 5 Smooth Finish",
  description:
    "Professional popcorn ceiling removal Churchill Meadows near Thomas St, Erin Centre Blvd & Tenth Line W. Expert ceiling texture removal with HEPA dust control. Serving newer Mississauga homes.",
  keywords: [
    "popcorn ceiling removal churchill meadows",
    "ceiling texture removal churchill meadows",
    "popcorn ceiling churchill meadows mississauga",
    "ceiling contractor churchill meadows",
    "smooth ceiling churchill meadows",
    "ceiling resurfacing thomas street",
    "popcorn ceiling erin centre blvd",
    "ceiling removal tenth line west",
    "stipple ceiling churchill meadows",
    "level 5 ceiling churchill meadows",
  ],
  alternates: {
    canonical: "/popcorn-ceiling-removal/mississauga/churchill-meadows/",
  },
  openGraph: {
    title: "Popcorn Ceiling Removal Churchill Meadows, Mississauga | Level 5",
    description:
      "Trusted ceiling removal service for Churchill Meadows homes. Dust-controlled workflow, Level 5 finish, paint-ready. Licensed contractors near Thomas St & Erin Centre.",
    url: "/popcorn-ceiling-removal/mississauga/churchill-meadows/",
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
          addressCountry: "CA"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.5890,
          longitude: -79.6441
        },
        url: "https://epfproservices.com/",
        priceRange: "$6-$9 per sq ft",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1"
        },
        areaServed: {
          "@type": "City",
          name: "Churchill Meadows",
          containedIn: {
            "@type": "City",
            name: "Mississauga"
          }
        }
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal Churchill Meadows",
        serviceType: ["Popcorn Ceiling Removal", "Ceiling Skim Coat Level 5", "Stipple Ceiling Removal", "Ceiling Texture Removal", "Ceiling Resurfacing"],
        provider: {
          "@id": "https://epfproservices.com/#organization"
        },
        areaServed: "Churchill Meadows, Mississauga, Ontario",
        url: "/popcorn-ceiling-removal/mississauga/churchill-meadows/",
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "CAD",
            price: "6-9",
            unitText: "per square foot"
          }
        },
        potentialAction: { "@type": "RequestQuoteAction", target: "/quote/" }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://epfproservices.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Popcorn Ceiling Removal",
            item: "https://epfproservices.com/popcorn-ceiling-removal/"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mississauga",
            item: "https://epfproservices.com/popcorn-ceiling-removal/mississauga/"
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Churchill Meadows",
            item: "https://epfproservices.com/popcorn-ceiling-removal/mississauga/churchill-meadows/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does popcorn ceiling removal cost in Churchill Meadows, Mississauga?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typical Churchill Meadows projects run about $6–$9 per sq ft for removal + Level 5 skim + primer, depending on paint build, access, and repairs. Final quote after inspection/photos. Painted ceilings common in newer homes add 30-40% to baseline pricing."
            }
          },
          {
            "@type": "Question",
            name: "Is your process dustless?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rooms are sealed with plastic barriers, vents masked and tools connected to HEPA vacuums. We protect family routes and tidy daily so your kitchen and bedrooms stay clean."
            }
          },
          {
            "@type": "Question",
            name: "Do I need asbestos testing for Churchill Meadows homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most Churchill Meadows homes were built in the 2000s, after asbestos was banned. However, if your home was built before 1990 or has renovations from earlier periods, texture should be lab-tested before disturbance. We can refer third-party testing and wait for clearance."
            }
          },
          {
            "@type": "Question",
            name: "How long does a typical Churchill Meadows project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most two-storey homes take 2-3 days. Open-concept main floors typically complete in 2-2.5 days. Single rooms finish in 1-1.5 days. Timeline depends on paint layers and repairs needed."
            }
          }
        ]
      }
    ]
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
    <div className="bg-gradient-to-b from-slate-50 via-white to-white">
      <JsonLd />

      {/* MODERN HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={images[0]}
            alt="Professional popcorn ceiling removal Churchill Meadows Mississauga"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-6 text-sm text-white/80">
              <ol className="inline-flex items-center space-x-2">
                <li>
                  <Link href="/popcorn-ceiling-removal/" className="hover:underline">
                    Popcorn Ceiling Removal
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li>
                  <Link href="/popcorn-ceiling-removal/mississauga/" className="hover:underline">
                    Mississauga
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li className="font-semibold">Churchill Meadows</li>
              </ol>
            </nav>

            <div className="text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-300">
                  Serving Thomas St, Erin Centre & Tenth Line W
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Popcorn Ceiling Removal
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Churchill Meadows, Mississauga
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                Professional <strong>popcorn ceiling removal contractor Churchill Meadows Mississauga</strong> specializing in <strong>ceiling texture removal</strong>, <strong>stipple ceiling removal</strong>, and <strong>ceiling resurfacing Churchill Meadows</strong>. Serving newer homes near Thomas St, Erin Centre Blvd, and Tenth Line West with HEPA dust control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span className="mr-2">📞</span>{phoneDisplay}
                </a>
                <a
                  href="/quote/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg border-2 border-white/30 transition-all hover:scale-105"
                >
                  Get Free Quote
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>Level 5 Smooth Finish</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>HEPA Dust Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>3-Year Warranty</span>
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
              {[
                { label: "Churchill Meadows ceilings smoothed", value: "180+" },
                { label: "Average quote turnaround", value: "< 4 hrs" },
                { label: "LED-ready Level 5 inspections", value: "100%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK QUOTE FORM */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 md:p-10 shadow-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-blue-500 font-semibold">
                Fast estimate
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Get your Churchill Meadows quote
              </h2>
              <p className="mt-3 text-gray-600">
                Upload photos, list rooms, and choose your timeline. We reply in
                under 4 hours with Level 5 scope, timing, and dust-control notes
                for homes near Erin Mills Parkway.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li>• Same-day quote with written scope + schedule</li>
                <li>• Level 5 skim + HEPA dust control outlined up front</li>
                <li>• Coordination for painting, pot lights, or drywall patches</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-4">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="container mx-auto px-4 max-w-6xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Level 5 Smooth",
              copy: "Full-field skim; raking-light checks so seams don’t telegraph.",
            },
            {
              title: "Dust-Controlled",
              copy: "Sealed rooms, masked vents, HEPA vacuum sanding, daily tidy.",
            },
            {
              title: "Predictable Schedule",
              copy: "Clear scope, photo updates, WSIB + liability, 3-year warranty.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-emerald-100 bg-gradient-to-tr from-emerald-50 via-white to-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-2">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recent Churchill Meadows Projects</h2>
            <p className="text-gray-600 text-lg">See the transformation from textured to smooth Level 5 finish</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, i) => {
              const altTexts = [
                "Professional popcorn ceiling removal Churchill Meadows - Level 5 smooth finish near Thomas St",
                "Ceiling texture removal Churchill Meadows - smooth transformation Erin Centre Blvd",
                "Ceiling resurfacing Churchill Meadows Mississauga - modern open concept finish",
                "Smooth ceiling contractor Churchill Meadows - painted popcorn ceiling removal",
                "Stipple ceiling removal Churchill Meadows - stairwell and hallway Tenth Line West",
                "Level 5 ceiling finish south Mississauga - paint-ready surface"
              ];
              const projectTitles = [
                "Open Concept Near Thomas St",
                "Main Floor Erin Centre Blvd",
                "Two-Storey Churchill Meadows Blvd",
                "Painted Ceiling Transformation",
                "Stairwell & Hallway Tenth Line",
                "Full Home Near Ninth Line"
              ];
              const projectSubtitles = [
                "Level 5 smooth, even reflectance",
                "No seam shadows under LEDs",
                "Hallway sightlines perfected",
                "Pot light rings blended",
                "Tall surfaces, safe staging",
                "Paint-ready throughout"
              ];
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={src}
                      alt={altTexts[i]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm font-semibold">{projectTitles[i]}</p>
                      <p className="text-xs mt-1 opacity-90">{projectSubtitles[i]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">What Churchill Meadows Homeowners Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 italic mb-4">"Open concept kitchen and living done in 2 days. Perfect finish under our pot lights—no shadows anywhere."</p>
              <p className="text-sm font-semibold text-gray-900">— David M., Thomas Street</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 italic mb-4">"They sealed off the work area completely. Kids' rooms stayed clean and we could use the kitchen the whole time."</p>
              <p className="text-sm font-semibold text-gray-900">— Lisa K., Erin Centre Blvd</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 italic mb-4">"Quote was exactly what we paid. Finished on schedule and the ceiling looks brand new."</p>
              <p className="text-sm font-semibold text-gray-900">— James R., Tenth Line West</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE PROCESS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">How We Work</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Free Quote</h3>
                <p className="text-gray-700">Send us photos and room dimensions. We reply in under 4 hours with firm pricing and timeline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Protect Your Home</h3>
                <p className="text-gray-700">Seal doorways, cover floors, mask vents. Room-by-room containment keeps the rest of your house clean.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Remove & Smooth</h3>
                <p className="text-gray-700">Scrape or encapsulate texture, then apply Level 5 skim coat. HEPA dust control throughout.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prime & Finish</h3>
                <p className="text-gray-700">Stain-block primer, final inspection, thorough cleanup. Paint-ready surface with 3-year warranty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL DETAILS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Why Churchill Meadows Homes Need Special Attention</h2>
            <p>
              Built in the 2000s, Churchill Meadows homes typically have newer drywall, but seams still telegraph under bright whites and modern LED pot lights. Open-concept layouts mean reflectance needs to match perfectly across large sightlines—kitchen to living room to hallway.
            </p>
            <p>
              Our <strong>professional popcorn ceiling removal service Churchill Meadows</strong> starts with a test patch. If <strong>scraping popcorn ceiling</strong> risks damaging the substrate or there's heavy paint buildup, we safely encapsulate before applying Level 5 skim. Pot-light rings and any old patches get feathered so edges completely disappear.
            </p>
            <p>
              We work room-by-room with sealed containment so your kitchen and bedrooms stay usable. After skimming, we inspect in raking light, then apply stain-block primer for a bright, even, paint-ready finish.
            </p>
          </div>
        </div>
      </section>

      {/* MICRO-NEIGHBOURHOOD SNAPSHOT */}
      <section className="mt-10 card p-6 bg-white container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-semibold">Micro-neighbourhood snapshot</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-gray-700">
          {[
            {
              title: "Thomas St corridor",
              copy: "Two-storey detached homes with long upstairs hallways. We run LED inspections to ensure seams don’t shadow down staircases.",
            },
            {
              title: "Erin Centre Blvd townhomes",
              copy: "Tight access + finished basements. Portable containment keeps lower floors livable while ceilings cure.",
            },
            {
              title: "Tenth Line W infill",
              copy: "Open kitchen/living combos that demand uniform sheen. We feather pot-light rings introduced during lighting upgrades.",
            },
          ].map((spot) => (
            <div key={spot.title} className="rounded-2xl border border-slate-200 p-4 hover:border-blue-200 transition">
              <div className="font-semibold text-slate-900">{spot.title}</div>
              <p className="mt-2 text-slate-600">{spot.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COSTS */}
      <section id="costs" className="mt-10 card p-6 bg-white container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-semibold">Costs & High-Intent Searches</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Typical pricing:</strong> ~<strong>$6–$9 per sq ft</strong>{" "}
            for Churchill Meadows popcorn removal + Level 5 skim + stain-block
            primer (final quote after photos/inspection; painted ceilings trend
            toward the high side).
          </li>
          <li>
            Searches we match: “Churchill Meadows popcorn ceiling removal cost”,
            “smooth ceiling Erin Centre Blvd”, “stipple ceiling Tenth Line W”.
          </li>
          <li>
            Ask about <strong>pot-light cuts</strong> during ceiling smoothing;
            we blend rings so they vanish after LEDs are installed.
          </li>
          <li>
            <strong>Asbestos testing:</strong> If built pre-1990, texture must
            be tested before disturbance. Third-party labs only.
          </li>
        </ul>
      </section>

      {/* SERVICES/KEYWORDS */}
      <section id="services" className="mt-10 card p-6 bg-white container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-semibold">
          Services (What People Call It)
        </h2>
        <p className="text-gray-700">
          Popcorn / stucco / stipple <strong>ceiling removal</strong>,{" "}
          <strong>ceiling texture removal</strong>,
          <strong> ceiling scraping</strong>,{" "}
          <strong>ceiling smoothing/flattening</strong>,{" "}
          <strong>skim coat ceiling</strong>, and full{" "}
          <strong>ceiling resurfacing</strong> in Mississauga.
        </p>
      </section>

      {/* LOCAL SEO SIGNALS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="card p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold">
              Landmarks & Micro-Areas We Know
            </h2>
            <p className="text-gray-700">
              Churchill Meadows Community Centre, Erin Centre Blvd, Thomas St, Churchill Meadows Blvd, Winston Churchill Blvd, Tenth Line W, Eglinton Ave W. Materials typically sourced via suppliers along Winston Churchill / Erin Mills Pkwy for fast logistics.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SCENARIOS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">Before & After: Churchill Meadows Transformations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-200">
              <h3 className="text-lg font-semibold mb-3">❌ Before</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dated 2000s popcorn texture</li>
                <li>• Seams visible under LED pot lights</li>
                <li>• Dull, light-absorbing surface</li>
                <li>• Visible repair patches & rings</li>
                <li>• Dust collects in texture valleys</li>
                <li>• Lowers home resale appeal</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200">
              <h3 className="text-lg font-semibold mb-3">🔄 During</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Sealed containment (2-3 days)</li>
                <li>• HEPA dust control system</li>
                <li>• Room-by-room workflow</li>
                <li>• Kitchen & bedrooms stay usable</li>
                <li>• Daily progress photos sent</li>
                <li>• Transparent communication</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-200">
              <h3 className="text-lg font-semibold mb-3">✅ After</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Perfectly smooth Level 5 finish</li>
                <li>• No seams under any lighting</li>
                <li>• Bright, light-reflecting surface</li>
                <li>• Invisible pot light integration</li>
                <li>• Easy to clean & maintain</li>
                <li>• Modern look that sells</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Projects in Churchill Meadows</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Two-Storey Near Thomas St",
                near: "Thomas St & Churchill Meadows Blvd",
                scope: "Encapsulation + Level 5 skim; stain-block primer; paint-ready.",
                duration: "3 days",
                outcome: "Flat through hallway sightlines; crisp edges at trims.",
              },
              {
                title: "Open Kitchen/Living",
                near: "Erin Centre Blvd area",
                scope: "Scrape + full skim; rings feathered; raking-light checks; primer.",
                duration: "2.5 days",
                outcome: "Even reflectance under LEDs; owners painted next day.",
              },
              {
                title: "Stairwell & Landing",
                near: "Tenth Line W corridor",
                scope: "Safe staging; full skim; stain-block primer.",
                duration: "1.5 days",
                outcome: "Uniform read on tall surfaces; minimal disruption.",
              },
            ].map((cs, i) => (
              <div key={i} className="card p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="font-semibold text-xl mb-2">{cs.title}</div>
                <div className="text-sm text-blue-600 font-semibold mb-4">{cs.near}</div>
                <p className="mt-2 text-gray-700">
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

      {miss && miss.signals ? (
        <div className="container mx-auto px-4 max-w-6xl">
          <LocalSignals signals={miss.signals} />
        </div>
      ) : null}
      
      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions About Churchill Meadows Projects</h2>
          <div className="space-y-4">
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">How do you handle dust control?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We seal rooms with plastic barriers, mask all vents, use HEPA vacuum-assist sanding, and tidy daily. Your kitchen and bedrooms stay clean and usable throughout the project.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">Can you coordinate with pot light installation?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Yes. We coordinate timing with your electrician and blend pot light rings during our skim coat process so they completely disappear after primer.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">What is Level 5 finish and why does it matter?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Level 5 is the highest drywall finish standard—full-field skim coating for uniform texture and light reflection. Critical for open-concept layouts and modern LED lighting common in Churchill Meadows homes.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">Do you handle painting after removal?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We deliver a paint-ready primer finish. We can also quote finishing coats if you want a complete turnkey solution.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">How long does a typical Churchill Meadows project take?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Most two-storey homes take 2-3 days. Open-concept main floors typically complete in 2-2.5 days. Single rooms 1-1.5 days.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white hover:border-blue-200 transition-colors">
              <summary className="cursor-pointer text-lg font-semibold">What's included in your warranty?</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">
                3-year written workmanship warranty covering finish quality, adhesion, and structural integrity. WSIB + comprehensive liability insurance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - BRIEF & NATURAL */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>About Our Churchill Meadows Service</h2>
            <p>
              <Link href="/" className="text-blue-600 font-semibold hover:underline">EPF Pro Services</Link> has specialized in Churchill Meadows ceiling transformations since the community was first developed in the 2000s. Churchill Meadows is one of south Mississauga's newer master-planned communities, with most homes built in the 2000s. Open-concept layouts are common, which means ceiling reflectance needs to be perfect across large sightlines.
            </p>
            <p>
              Our <strong>smooth ceiling contractor Churchill Meadows Mississauga</strong> team understands the challenges: seam telegraphing under bright LEDs, pot light integration, and the need for uniform Level 5 smoothness. Whether you're <strong>taking off popcorn ceiling</strong> in a two-storey near Thomas St or <strong>removing stucco ceiling</strong> from townhomes along Erin Centre, our approach is the same—test first, choose the safest method, skim to Level 5, and deliver paint-ready.
            </p>
            <p>
              <strong>Why homeowners choose us:</strong> Licensed and insured with WSIB compliance, $5M liability coverage, and comprehensive 3-year written warranty. Our 4.9/5 Google rating from 127+ reviews reflects consistent quality across 1000+ completed projects in Mississauga.
            </p>
            <p>
              We also serve nearby areas including <Link href="/popcorn-ceiling-removal/mississauga/erin-mills/" className="text-blue-600 font-semibold hover:underline">Erin Mills</Link>, <Link href="/popcorn-ceiling-removal/mississauga/port-credit/" className="text-blue-600 font-semibold hover:underline">Port Credit</Link>, and across <Link href="/popcorn-ceiling-removal/mississauga/" className="text-blue-600 font-semibold hover:underline">Mississauga</Link> with the same crews and warranty.
            </p>
            <p>
              <Link href="/quote/" className="text-blue-600 font-semibold hover:underline">Request a quote</Link> with photos and dimensions, or call <a href={phoneHref} className="text-blue-600 font-semibold hover:underline">{phoneDisplay}</a> to discuss your Churchill Meadows project.
            </p>
          </div>
        </div>
      </section>

      {/* NEARBY NEIGHBORHOODS - BILATERAL AUTHORITY FLOW */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Serving Churchill Meadows & Nearby Communities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the same professional ceiling removal service throughout south Mississauga. Explore our service in neighboring areas:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Erin Mills */}
            <Link href="/popcorn-ceiling-removal/mississauga/erin-mills/" className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    Erin Mills
                  </h3>
                  <p className="text-sm text-gray-500">West of Churchill Meadows</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Established neighborhood with 1990s-2000s homes. Similar ceiling challenges with mature subdivisions along Erin Mills Parkway and near Credit Valley Hospital.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                Erin Mills Popcorn Ceiling Removal Service
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Meadowvale */}
            <Link href="/popcorn-ceiling-removal/mississauga/meadowvale/" className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    Meadowvale
                  </h3>
                  <p className="text-sm text-gray-500">North of Churchill Meadows</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Mix of older 1980s homes and newer builds. Common texture removal projects near Meadowvale Town Centre and along Derry Road corridor.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                 Meadowvale Popcorn Ceiling Removal Service
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Lisgar */}
            <Link href="/popcorn-ceiling-removal/mississauga/lisgar/" className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    Lisgar
                  </h3>
                  <p className="text-sm text-gray-500">East of Churchill Meadows</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Newer development similar to Churchill Meadows. Contemporary homes with open-concept layouts requiring Level 5 smooth finishes near Lisgar GO Station.
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:underline">
                Lisgar Popcorn Ceiling Removal Service
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Looking for service in another Mississauga neighborhood?
            </p>
            <Link href="/popcorn-ceiling-removal/mississauga/" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg">
              View All Mississauga Areas
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">DIY vs Professional: Churchill Meadows Edition</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <tr>
                  <th className="p-4 text-left">Factor</th>
                  <th className="p-4 text-center">DIY Approach</th>
                  <th className="p-4 text-center">EPF Pro Services</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Time Required</td>
                  <td className="p-4 text-center text-red-600">2-3 weeks (weekends only)</td>
                  <td className="p-4 text-center text-green-600">2-3 days (complete)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Finish Quality</td>
                  <td className="p-4 text-center text-red-600">Level 3-4 (visible imperfections)</td>
                  <td className="p-4 text-center text-green-600">Level 5 (flawless smooth)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Dust Control</td>
                  <td className="p-4 text-center text-red-600">Dust everywhere for weeks</td>
                  <td className="p-4 text-center text-green-600">HEPA sealed containment</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Tools Needed</td>
                  <td className="p-4 text-center text-red-600">$800-1200 to purchase</td>
                  <td className="p-4 text-center text-green-600">Professional-grade included</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Warranty</td>
                  <td className="p-4 text-center text-red-600">None</td>
                  <td className="p-4 text-center text-green-600">3-year written guarantee</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Open Concept Suitability</td>
                  <td className="p-4 text-center text-red-600">Seams show under lighting</td>
                  <td className="p-4 text-center text-green-600">Perfect for modern layouts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Resale Value Impact</td>
                  <td className="p-4 text-center text-red-600">Risky DIY finish visible</td>
                  <td className="p-4 text-center text-green-600">Premium finish increases value</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-600 italic">Most Churchill Meadows homeowners choose professional service for peace of mind and guaranteed results</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready for Level 5 Smooth Ceilings?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Fast photo estimate. Clear plan and schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-bold rounded-full shadow-xl transition-all hover:scale-105" href={phoneHref}>
                📞 {phoneDisplay}
              </a>
              <a className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white font-bold rounded-full transition-all hover:scale-105" href="/quote/">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom links */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex flex-wrap gap-3 text-sm justify-center" aria-label="Related pages">
            <Link href="/popcorn-ceiling-removal/mississauga/" className="text-blue-600 hover:underline font-semibold">
              ← Popcorn ceiling removal Mississauga
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/popcorn-ceiling-removal/" className="text-blue-600 hover:underline font-semibold">
              All Service Areas
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/services/popcorn-ceiling-removal/" className="text-blue-600 hover:underline font-semibold">
              Main Service Page →
            </Link>
          </nav>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-gray-200 shadow-2xl rounded-2xl p-3 flex items-center gap-3">
          <a href={phoneHref} className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">
            📞 Call
          </a>
          <a href="/quote/" className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition shadow-lg">
            Quote
          </a>
        </div>
      </div>
    </div>
  );
}
