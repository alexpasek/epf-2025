import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { cities } from "@/data/cities";

export const revalidate = 86400;

const CITY_NAME = "Burlington";
const CITY_SLUG = "burlington";
const SERVICE_URL = `/services/baseboard-installation/${CITY_SLUG}/`;
const HERO_IMAGE =
  "/gallery/baseboard-installation/baseboard-installation00003.jpg";

const cityData = cities.find((entry) => entry.slug === CITY_SLUG);
const signals = cityData && cityData.signals ? cityData.signals : null;

export const metadata = {
  title: `Baseboard Installation Burlington | Professional Baseboard Contractors`,
  description:
    "Professional baseboard installation in Burlington. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor. Free quotes, 3-year warranty.",
  keywords: [
    "baseboard installation burlington",
    "baseboard replacement burlington",
    "baseboard contractors burlington",
    "shoe moulding installation",
    "baseboards near me",
  ],
  alternates: { canonical: SERVICE_URL },
  openGraph: {
    title: `Baseboard Installation Burlington | Professional Baseboard Contractors`,
    description:
      "Professional baseboard installation in Burlington. Expert baseboard installation, baseboard replacement, shoe moulding.",
    url: SERVICE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Baseboard Installation in ${CITY_NAME}`,
    serviceType: [
      "Baseboard Installation",
      "Baseboard Replacement",
      "Shoe Moulding",
      "Caulking and Finishing",
    ],
    areaServed: { "@type": "City", name: `${CITY_NAME}, ON` },
    url: SERVICE_URL,
    provider: { "@id": "/#business" },
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: SERVICE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <div className="bg-gray-50">
      <JsonLd />

      {/* HERO SECTION - UNIQUE TO BURLINGTON */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/services/baseboard-installation.jpg)",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-sm font-semibold text-blue-300">
                  🏆 Burlington's #1 Baseboard Contractor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Baseboard Installation in Burlington
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Looking for expert baseboard installation in Burlington? Our
                professional contractors specialize in baseboard installation,
                baseboard replacement, and shoe moulding for homes throughout
                Burlington's waterfront and established neighborhoods—from
                Aldershot to Downtown Burlington, Orchard to Palmer.
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                With over 550 completed baseboard projects across Burlington, we
                deliver precise craftsmanship including coped corners, tight
                miter joints, seamless caulking, and paint-ready finishing that
                transforms your space.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>3-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl">✓</span>
                  <span>Same-Day Quotes</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span className="mr-2">📞</span>
                  {PHONE_NUMBER}
                </a>
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg border-2 border-white/30 transition-all hover:scale-105"
                >
                  Free Quote
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">550+</div>
                  <div className="text-sm text-gray-300">
                    Burlington Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">5.0★</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="space-y-6">
              <figure
                className="overflow-hidden border-2 border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]"
                style={{ height: "320px" }}
              >
                <img
                  src={HERO_IMAGE}
                  alt={`Finished baseboard installation in ${CITY_NAME}`}
                  className="h-full w-full object-cover transition duration-200 ease-out hover:brightness-110 hover:contrast-110"
                  loading="eager"
                  decoding="async"
                />
              </figure>

              <div
                className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900"
                id="quote-form"
              >
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-600 mb-6">
                  Professional baseboard installation in Burlington — Fast
                  response, transparent pricing
                </p>

                <QuoteForm />

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Serving all Burlington neighborhoods:
                  </p>
                  <p className="text-xs text-gray-500">
                    Aldershot • Downtown • Orchard • Palmer • Brant Hills •
                    Tyandaga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Baseboard Installation Services in Burlington
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete baseboard solutions for Burlington's waterfront and
                family neighborhoods
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏗️",
                  title: "New Baseboard Installation",
                  desc: "Professional installation of brand new baseboards throughout Burlington. We work with MDF, hardwood, and PVC profiles with perfect coped inside corners.",
                  features: ["MDF & hardwood", "All profiles", "Coped corners"],
                },
                {
                  icon: "🔄",
                  title: "Baseboard Replacement",
                  desc: "Complete removal of old damaged baseboards in Burlington homes and installation of new trim with proper wall prep.",
                  features: [
                    "Old trim removal",
                    "Wall repair",
                    "New installation",
                  ],
                },
                {
                  icon: "👞",
                  title: "Shoe Moulding",
                  desc: "Add shoe moulding or quarter round to Burlington homes to complement baseboards and cover floor expansion gaps.",
                  features: [
                    "Shoe moulding",
                    "Quarter round",
                    "Floor transitions",
                  ],
                },
                {
                  icon: "📏",
                  title: "Tall Baseboards",
                  desc: "Modern tall baseboards (6-8 inches) installation for contemporary Burlington homes with high ceilings.",
                  features: [
                    "6-8 inch profiles",
                    "Modern styles",
                    "High ceilings",
                  ],
                },
                {
                  icon: "🖌️",
                  title: "Caulking & Finishing",
                  desc: "Professional caulking of all seams for Burlington projects, nail hole filling, and smooth sanding for paint-ready finish.",
                  features: ["Seamless caulk", "Hole filling", "Paint-ready"],
                },
                {
                  icon: "🎨",
                  title: "Painting & Staining",
                  desc: "Complete priming and painting service for Burlington baseboard projects or staining for wood baseboards.",
                  features: [
                    "Primer & paint",
                    "Wood staining",
                    "Color matching",
                  ],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our Burlington Baseboard Installation Process
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Professional workflow delivering perfect baseboards for Burlington
              homes
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Room Assessment & Measurement",
                  desc: "Precise measurements and profile selection for your Burlington home. We account for lakeside humidity, wall conditions, and Burlington's unique architectural styles.",
                },
                {
                  step: "2",
                  title: "Remove Existing Trim",
                  desc: "Careful removal of old baseboards and shoe moulding without damaging walls in Burlington properties. All debris hauled away and disposed.",
                },
                {
                  step: "3",
                  title: "Wall Preparation",
                  desc: "Level check, fill gaps, and prep surfaces for perfect baseboard alignment in Burlington waterfront and inland homes.",
                },
                {
                  step: "4",
                  title: "Precision Installation",
                  desc: "Coped inside corners, mitered outside corners, and seamless scarf joints. Professional techniques for Burlington's established home stock.",
                },
                {
                  step: "5",
                  title: "Finishing & Caulking",
                  desc: "Fill nail holes, caulk top and bottom edges, sand smooth for paint-ready finish across Burlington properties.",
                },
                {
                  step: "6",
                  title: "Paint & Final Inspection",
                  desc: "Optional primer and finish coats. Final walkthrough ensuring quality standards for every Burlington baseboard project.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Burlington Baseboard Installation Pricing
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Transparent pricing for Burlington waterfront and family homes
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-xl border-2 border-gray-200">
                <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">
                      Service
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-bold">
                      Price Range
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-bold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      MDF Baseboard Installation
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $8-12/linear ft
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Standard profiles, caulking, paint-ready
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Hardwood Baseboard Installation
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $12-18/linear ft
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Oak, maple, poplar with staining option
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      PVC Moisture-Resistant
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $10-14/linear ft
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Perfect for Burlington lakeside homes
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Baseboard Replacement
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $9-14/linear ft
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Remove old, wall prep, new installation
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Shoe Moulding Addition
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $3-5/linear ft
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Quarter round or shoe moulding
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Painting & Finishing
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $2-4/linear ft
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Primer, 2 coats, professional finish
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                💡 Burlington Pricing Examples:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>
                    Bedroom (12x14) with 50 linear ft: $400-750 complete
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>
                    Living room (15x20) with 70 linear ft: $560-1050 installed
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>
                    Full Burlington home (2000 sq ft): $3200-6000 turnkey
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>
                    Lakeside homes: PVC moisture-resistant recommended
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Why Burlington Homeowners Choose Us for Baseboard Installation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Baseboard installation in Burlington requires understanding the
              city's unique character—from waterfront properties near Spencer
              Smith Park to established family neighborhoods in Aldershot,
              modern homes in Orchard to heritage properties in Downtown
              Burlington. Our experienced contractors deliver professional
              results using proper techniques for coping, mitering, and
              finishing that work for Burlington's diverse architectural styles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Burlington homeowners choose us because we focus on craftsmanship
              and customer satisfaction. Whether it's a lakeside home needing
              moisture-resistant PVC baseboards or a family home in Brant Hills
              requiring elegant hardwood trim, we deliver consistent quality and
              clean installation every time throughout Burlington.
            </p>
          </div>
        </div>
      </section>

      {/* BURLINGTON NEIGHBORHOODS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Baseboard Installation Across Burlington
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional baseboard installation in every Burlington
              neighborhood
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Aldershot",
                "Downtown Burlington",
                "Orchard",
                "Palmer",
                "Brant Hills",
                "Tyandaga",
                "Roseland",
                "Freeman",
                "Headon",
                "Longmoor",
                "Millcroft",
                "Appleby",
              ].map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all text-center"
                >
                  <p className="font-bold text-gray-900">{neighborhood}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Baseboard installation
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {signals && <LocalSignals signals={signals} />}

      {/* BURLINGTON LOCAL SEO CONTENT */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6">
                Professional Baseboard Installation in Burlington, Ontario
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Looking for expert{" "}
                <strong>baseboard installation in Burlington</strong>? Our
                professional contractors specialize in new baseboard
                installation, baseboard replacement, and complete trim finishing
                for homes throughout Burlington. Whether you're renovating a
                waterfront home near Spencer Smith Park, updating an Aldershot
                family property, or finishing a new build in Orchard, we deliver
                precise craftsmanship and paint-ready results that transform
                your Burlington home.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Burlington's Trusted Baseboard Contractors
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Baseboard installation Burlington</strong> requires
                understanding the city's unique characteristics and housing
                stock. Our team has completed over 550 baseboard projects
                throughout Burlington, mastering techniques for lakeside homes
                (moisture-resistant materials), established neighborhoods
                (matching heritage profiles), and modern developments
                (contemporary tall baseboards). We work with MDF, solid
                hardwood, and PVC baseboards to match any Burlington style and
                budget.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Baseboard Installation After Popcorn Ceiling Removal
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many Burlington homeowners bundle{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/burlington/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  popcorn ceiling removal
                </Link>{" "}
                with baseboard installation for a complete room transformation.
                When you're already protecting floors and furniture for ceiling
                work in your Burlington home, it's the perfect time to upgrade
                baseboards. This coordination saves on setup costs and delivers
                a cohesive finished space throughout your Burlington property.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Burlington Baseboard Installation Cost
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Baseboard installation cost Burlington</strong>{" "}
                typically ranges $8-15 per linear foot installed, depending on
                material choice, profile height, and finishing requirements. A
                standard Burlington bedroom (12x14) with 50 linear feet costs
                $400-750 including removal of old trim, installation, caulking,
                and paint-ready finishing. Lakeside homes may benefit from PVC
                moisture-resistant baseboards ($10-14/ft) for long-term
                durability. We provide transparent written quotes after
                reviewing your Burlington room sizes and photos.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 my-8">
                <h4 className="text-xl font-bold mb-4">
                  Our Burlington Services Include:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>New baseboard installation:</strong> MDF,
                      hardwood, PVC with coped corners for Burlington homes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Baseboard replacement:</strong> Remove old damaged
                      trim and install fresh baseboards throughout Burlington
                      properties
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Shoe moulding installation:</strong> Quarter round
                      and shoe moulding for Burlington floor transitions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Lakeside moisture protection:</strong> PVC
                      baseboards for Burlington waterfront homes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Painting & staining:</strong> Complete finishing
                      to match your Burlington home's design
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Burlington Neighborhoods We Serve for Baseboard Installation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our{" "}
                <strong>baseboard installation services in Burlington</strong>{" "}
                cover every neighborhood from the waterfront to inland
                communities. In <strong>Aldershot</strong>, we work on family
                homes and townhomes requiring durable, family-friendly finishes.{" "}
                <strong>Downtown Burlington</strong> clients appreciate our
                experience with heritage properties and condo buildings near
                Brant Street. <strong>Orchard</strong> and{" "}
                <strong>Palmer</strong> homeowners trust us for modern baseboard
                profiles in newer developments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Brant Hills</strong> and <strong>Tyandaga</strong>{" "}
                residents often upgrade baseboards as part of larger Burlington
                renovations, while <strong>Roseland</strong> and{" "}
                <strong>Freeman</strong> homeowners value our efficient
                installation process. Whether you're in <strong>Headon</strong>,{" "}
                <strong>Longmoor</strong>, <strong>Millcroft</strong>, or{" "}
                <strong>Appleby</strong>, we deliver consistent quality
                baseboard installation throughout Burlington.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Waterfront Home Baseboard Installation in Burlington
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Burlington waterfront baseboard installation</strong>{" "}
                requires special considerations due to lakeside humidity and
                moisture exposure. We recommend PVC moisture-resistant
                baseboards for Burlington homes near Lake Ontario, offering
                superior performance in high-humidity environments. These
                baseboards never rot, warp, or deteriorate—perfect for
                Burlington's lakeside living. Professional caulking and
                finishing ensure water-tight seals that protect walls while
                maintaining beautiful aesthetics throughout your Burlington
                waterfront home.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Coordinating with Other Burlington Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We coordinate baseboard installation with{" "}
                <Link
                  href="/services/interior-painting/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  interior painting
                </Link>
                ,{" "}
                <Link
                  href="/services/drywall-installation/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall repairs
                </Link>
                , and flooring contractors to ensure seamless project flow.
                Baseboards are typically installed after flooring and before
                final paint coats for optimal results in Burlington homes. Many
                Burlington clients appreciate our ability to manage multiple
                trades and deliver turnkey room transformations across their
                property.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Burlington Permits and Regulations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most{" "}
                <strong>baseboard installation projects in Burlington</strong>{" "}
                don't require building permits. However, if your baseboard work
                is part of a larger Burlington renovation involving structural
                changes, you may need approval from the{" "}
                <a
                  href="https://www.burlington.ca/en/services-for-you/building-permits.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  City of Burlington Building Department
                </a>
                . We help Burlington homeowners understand permit requirements
                and can coordinate with your contractor for comprehensive
                renovation compliance.
              </p>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready for Professional Baseboard Installation in Burlington?
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Get your free Burlington baseboard installation quote today.
                  Same-day estimates for waterfront and family homes throughout
                  Burlington.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl"
                  >
                    <span className="mr-2">📞</span>
                    {PHONE_NUMBER}
                  </a>
                  <Link
                    href="/quote/"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-all shadow-xl"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faqs" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Baseboard Installation FAQ - Burlington
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How much does baseboard installation cost in Burlington?",
                a: "Baseboard installation cost in Burlington typically ranges $8-15 per linear foot installed. A standard bedroom costs $400-750 including old trim removal, installation, caulking, and paint-ready finishing. Waterfront homes may benefit from PVC moisture-resistant baseboards at $10-14/ft.",
              },
              {
                q: "Do you install moisture-resistant baseboards for Burlington lakeside homes?",
                a: "Yes. We recommend and install PVC moisture-resistant baseboards for Burlington waterfront properties. These baseboards never rot, warp, or deteriorate in high-humidity lakeside environments.",
              },
              {
                q: "What types of baseboards do you install in Burlington?",
                a: "We install MDF (paint-ready), solid wood (oak, maple, poplar for staining), and PVC (moisture-resistant) baseboards for Burlington homes. We help you choose based on location, budget, and style preferences.",
              },
              {
                q: "Do you remove old baseboards in Burlington homes?",
                a: "Yes. We carefully remove existing baseboards from Burlington properties, patch wall imperfections, and haul away all debris for proper disposal.",
              },
              {
                q: "How long does baseboard installation take in Burlington?",
                a: "A typical Burlington home (2000 sq ft) takes 2-3 days depending on profile complexity and whether painting is included. Single rooms can be completed in 4-6 hours.",
              },
              {
                q: "Can you match existing baseboards in my Burlington home?",
                a: "Yes. We can source matching profiles for Burlington homes or mill custom pieces to blend with existing trim in other rooms throughout your property.",
              },
              {
                q: "Do you work in Burlington condo buildings?",
                a: "Yes. We coordinate with Burlington condo property management for building access, elevator bookings, and noise restrictions to ensure smooth installation.",
              },
              {
                q: "What's the best baseboard material for Burlington homes?",
                a: "For most Burlington homes, primed MDF offers the best value. For waterfront properties, PVC moisture-resistant baseboards are ideal. For luxury finishes, solid hardwood with staining provides premium durability and beauty.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-slate-200 p-5 shadow-sm bg-white hover:border-blue-200 transition-colors"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-2xl hover:scale-105"
            >
              Get Your Burlington Quote
            </a>
            <div className="mt-4">
              <a
                className="font-bold text-blue-700 hover:underline"
                href={PHONE_HREF}
              >
                Or call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Professional Baseboard Installation in Burlington?
            </h2>
            <p className="text-2xl mb-8 text-blue-100">
              Your trusted Burlington baseboard contractor for waterfront and
              family homes
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                <span className="mr-2">📞</span>
                {PHONE_NUMBER}
              </a>
              <Link
                href="/quote/"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Get Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>3-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACK TO HUB */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/services/baseboard-installation/"
            className="inline-flex items-center text-blue-600 font-semibold hover:underline text-lg"
          >
            ← Back to Baseboard Installation Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
