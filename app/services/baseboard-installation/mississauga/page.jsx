import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { cities } from "@/data/cities";

export const revalidate = 86400;

const CITY_NAME = "Mississauga";
const CITY_SLUG = "mississauga";
const SERVICE_URL = `/services/baseboard-installation/${CITY_SLUG}/`;
const HERO_IMAGE =
  "/gallery/baseboard-installation/baseboard-installation00001.jpg";

const cityData = cities.find((entry) => entry.slug === CITY_SLUG);
const signals = cityData && cityData.signals ? cityData.signals : null;

export const metadata = {
  title: `Baseboard Installation Mississauga | Professional Baseboard Contractors`,
  description:
    "Professional baseboard installation in Mississauga. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor. Free quotes, 3-year warranty.",
  keywords: [
    "baseboard installation mississauga",
    "baseboard replacement mississauga",
    "baseboard contractors mississauga",
    "shoe moulding installation",
    "baseboards near me",
  ],
  alternates: { canonical: SERVICE_URL },
  openGraph: {
    title: `Baseboard Installation Mississauga | Professional Baseboard Contractors`,
    description:
      "Professional baseboard installation in Mississauga. Expert baseboard installation, baseboard replacement, shoe moulding.",
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

      {/* HERO SECTION - UNIQUE TO MISSISSAUGA */}
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
                  🏆 Mississauga's #1 Baseboard Contractor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Baseboard Installation in Mississauga
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Looking for expert baseboard installation in Mississauga? Our
                professional contractors specialize in baseboard installation,
                baseboard replacement, and shoe moulding for homes throughout
                Mississauga's diverse neighborhoods—from Port Credit to
                Streetsville, Erin Mills to Clarkson.
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                With over 850 completed baseboard projects across Mississauga,
                we deliver precise craftsmanship including coped corners, tight
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
                  <div className="text-3xl font-bold text-cyan-300">850+</div>
                  <div className="text-sm text-gray-300">
                    Mississauga Projects
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
                  Professional baseboard installation in Mississauga — Fast
                  response, transparent pricing
                </p>

                <QuoteForm />

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Serving all Mississauga neighborhoods:
                  </p>
                  <p className="text-xs text-gray-500">
                    Port Credit • Streetsville • Erin Mills • Clarkson •
                    Meadowvale • Cooksville
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW - UNIQUE CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Baseboard Installation Services in Mississauga
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete baseboard solutions for Mississauga homes and condos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏗️",
                  title: "New Baseboard Installation",
                  desc: "Professional installation of brand new baseboards throughout Mississauga. We work with MDF, hardwood, and PVC profiles with perfect coped inside corners.",
                  features: ["MDF & hardwood", "All profiles", "Coped corners"],
                },
                {
                  icon: "🔄",
                  title: "Baseboard Replacement",
                  desc: "Complete removal of old damaged baseboards in Mississauga homes and installation of new trim with proper wall prep.",
                  features: [
                    "Old trim removal",
                    "Wall repair",
                    "New installation",
                  ],
                },
                {
                  icon: "👞",
                  title: "Shoe Moulding",
                  desc: "Add shoe moulding or quarter round to Mississauga homes to complement baseboards and cover floor expansion gaps.",
                  features: [
                    "Shoe moulding",
                    "Quarter round",
                    "Floor transitions",
                  ],
                },
                {
                  icon: "📏",
                  title: "Tall Baseboards",
                  desc: "Modern tall baseboards (6-8 inches) installation for contemporary Mississauga homes with high ceilings.",
                  features: [
                    "6-8 inch profiles",
                    "Modern styles",
                    "High ceilings",
                  ],
                },
                {
                  icon: "🖌️",
                  title: "Caulking & Finishing",
                  desc: "Professional caulking of all seams for Mississauga projects, nail hole filling, and smooth sanding for paint-ready finish.",
                  features: ["Seamless caulk", "Hole filling", "Paint-ready"],
                },
                {
                  icon: "🎨",
                  title: "Painting & Staining",
                  desc: "Complete priming and painting service for Mississauga baseboard projects or staining for wood baseboards.",
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

      {/* PROCESS SECTION - NEW */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our Mississauga Baseboard Installation Process
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Professional workflow delivering perfect baseboards every time
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Room Assessment & Measurement",
                  desc: "Precise measurements and profile selection for your Mississauga home. We account for wall irregularities, corner angles, and transition points specific to your property.",
                },
                {
                  step: "2",
                  title: "Remove Existing Trim",
                  desc: "Careful removal of old baseboards, shoe moulding, and quarter round without damaging drywall in your Mississauga property. All debris is hauled away.",
                },
                {
                  step: "3",
                  title: "Wall Preparation",
                  desc: "Level check, fill gaps, and prep surfaces for perfect baseboard adhesion and alignment throughout your Mississauga home.",
                },
                {
                  step: "4",
                  title: "Precision Installation",
                  desc: "Coped inside corners, mitered outside corners, and scarf joints for seamless long runs. Professional nail placement for invisible fasteners.",
                },
                {
                  step: "5",
                  title: "Finishing & Caulking",
                  desc: "Fill nail holes, caulk top edge and shoe mould, sand smooth for paint-ready finish across your Mississauga property.",
                },
                {
                  step: "6",
                  title: "Paint & Final Inspection",
                  desc: "Optional primer and finish coat. Final quality check ensuring tight seams and clean lines throughout your Mississauga home.",
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

      {/* PRICING TABLE - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Mississauga Baseboard Installation Pricing
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Transparent pricing for professional baseboard installation
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
                      Tall Baseboards (6-8")
                    </td>
                    <td className="px-6 py-4 text-blue-600 font-bold">
                      $10-15/linear ft
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Modern tall profiles for contemporary homes
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
                      Remove old trim, wall prep, new installation
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
                      Quarter round or shoe moulding installation
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
                      Primer, 2 coats paint, professional finish
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                💡 Pricing Notes for Mississauga Projects:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>
                    Standard bedroom (12x14) with 50 linear ft: $400-750 installed
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
                    Whole house (2000 sq ft): $3200-6000 complete installation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>
                    Bundle with ceiling removal for 10-15% savings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - MISSISSAUGA SPECIFIC */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Why Mississauga Homeowners Choose Us for Baseboard Installation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Baseboard installation in Mississauga requires understanding the
              city's diverse housing stock—from Port Credit's lakeside homes to
              Streetsville's historic properties, modern Erin Mills developments
              to Clarkson's family neighborhoods. Our experienced contractors
              deliver professional results using proper techniques for coping,
              mitering, and finishing that work for Mississauga's varied
              architectural styles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mississauga homeowners choose us because we focus on craftsmanship
              and customer satisfaction. Whether it's a single room baseboard
              replacement in a Port Credit condo or a whole-house baseboard
              installation project in Meadowvale, we deliver consistent quality
              and clean installation every time.
            </p>
          </div>
        </div>
      </section>

      {/* MISSISSAUGA NEIGHBORHOODS - LOCAL SEO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Baseboard Installation Across Mississauga
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional baseboard installation in every Mississauga
              neighborhood
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Port Credit",
                "Streetsville",
                "Erin Mills",
                "Clarkson",
                "Meadowvale",
                "Cooksville",
                "Malton",
                "Lorne Park",
                "Erindale",
                "Hurontario",
                "Churchill Meadows",
                "Central Erin Mills",
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

      {/* LOCAL SIGNALS */}
      {signals && <LocalSignals signals={signals} />}

      {/* MISSISSAUGA LOCAL SEO CONTENT */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6">
                Professional Baseboard Installation in Mississauga, Ontario
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Looking for expert{" "}
                <strong>baseboard installation in Mississauga</strong>? Our
                professional contractors specialize in new baseboard
                installation, baseboard replacement, and complete trim finishing
                for homes throughout Mississauga. Whether you're renovating a
                Port Credit lakefront home, updating a Streetsville heritage
                property, or finishing a new build in Erin Mills, we deliver
                precise craftsmanship and paint-ready results.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Mississauga's Trusted Baseboard Contractors
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Baseboard installation Mississauga</strong> requires
                understanding the city's diverse housing stock and architectural
                styles. Our team has completed over 850 baseboard projects
                throughout Mississauga, mastering the techniques needed for
                coped inside corners, tight miter joints, and seamless
                transitions. We work with MDF, solid hardwood, and PVC
                baseboards to match any style and budget.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Baseboard Installation After Popcorn Ceiling Removal
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many Mississauga homeowners bundle{" "}
                <Link
                  href="/services/popcorn-ceiling-removal/mississauga/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  popcorn ceiling removal
                </Link>{" "}
                with baseboard installation for a complete room transformation.
                When you're already protecting floors and furniture for ceiling
                work, it's the perfect time to upgrade baseboards. This
                coordination saves on setup costs and delivers a cohesive
                finished space throughout your Mississauga home.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Mississauga Baseboard Installation Cost
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Baseboard installation cost Mississauga</strong>{" "}
                typically ranges $8-15 per linear foot installed, depending on
                material choice, profile height, and finishing requirements. A
                standard Mississauga bedroom (12x14) with 50 linear feet costs
                $400-750 including removal of old trim, installation, caulking,
                and paint-ready finishing. We provide transparent written quotes
                after reviewing your room sizes and photos for accurate
                Mississauga pricing.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Complete Baseboard Services for Mississauga Homes
              </h3>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 my-8">
                <h4 className="text-xl font-bold mb-4">
                  Our Services Include:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>New baseboard installation:</strong> MDF,
                      hardwood, and PVC profiles with coped corners for
                      Mississauga homes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Baseboard replacement:</strong> Remove old damaged
                      trim and install fresh baseboards throughout Mississauga
                      properties
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Shoe moulding installation:</strong> Quarter round
                      and shoe moulding to cover floor expansion gaps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Caulking & finishing:</strong> Professional
                      caulking, nail hole filling, and paint-ready delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      <strong>Painting & staining:</strong> Complete painting or
                      wood staining to match your Mississauga home's design
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Coordinating with Other Mississauga Services
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
                final paint coats for optimal results in Mississauga homes. Many
                Mississauga clients appreciate our ability to manage multiple
                trades and deliver turnkey room transformations.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Mississauga Neighborhoods We Serve for Baseboard Installation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our{" "}
                <strong>baseboard installation services in Mississauga</strong>{" "}
                cover every neighborhood from the waterfront to the western
                edge. In <strong>Port Credit</strong>, we work on lakefront
                condos and heritage homes requiring precise trim work.{" "}
                <strong>Streetsville</strong> clients appreciate our experience
                with older properties where walls may not be perfectly square.{" "}
                <strong>Erin Mills</strong> and{" "}
                <strong>Churchill Meadows</strong> homeowners trust us for
                modern baseboard profiles that complement their contemporary
                homes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Clarkson</strong> and <strong>Lorne Park</strong>{" "}
                residents often upgrade baseboards as part of larger
                renovations, while <strong>Meadowvale</strong> and{" "}
                <strong>Cooksville</strong> townhome owners value our efficiency
                and clean installation process. Whether you're in{" "}
                <strong>Malton</strong>, <strong>Erindale</strong>, or along{" "}
                <strong>Hurontario</strong>, we deliver consistent quality
                baseboard installation throughout Mississauga.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Baseboard Installation for Mississauga Condos and Townhomes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Condo baseboard installation in Mississauga</strong>{" "}
                requires special considerations including building access,
                elevator bookings, and noise restrictions. We coordinate with
                property management in Mississauga condo buildings throughout
                Port Credit, Downtown Mississauga, and Square One area to ensure
                smooth project completion. Our teams respect building rules,
                protect common areas, and complete installations efficiently to
                minimize disruption.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For{" "}
                <strong>townhome baseboard installation in Mississauga</strong>,
                we understand the challenges of narrow spaces, shared walls, and
                tight timelines. Our crews work efficiently in Mississauga
                townhome communities, delivering professional results without
                disturbing neighbors. We handle multiple levels, staircases, and
                open-concept layouts common in Mississauga townhomes.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Mississauga Baseboard Materials and Profiles
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Choosing the right baseboard material for your{" "}
                <strong>Mississauga home</strong> depends on budget, style, and
                location. <strong>MDF baseboards</strong> are most popular in
                Mississauga—affordable, paint-ready, and available in profiles
                from 3.5 to 7.25 inches. We source from local Mississauga
                suppliers including Home Depot Burlington, Sherwin-Williams
                Mississauga Dixie, and Benjamin Moore Oakville for consistent
                quality.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Solid hardwood baseboards</strong> (oak, maple, poplar)
                are ideal for Mississauga homes seeking premium durability and
                natural wood beauty. These can be stained to match existing
                woodwork or painted for a clean modern look.{" "}
                <strong>PVC baseboards</strong> work well for Mississauga
                basements and bathrooms, resisting moisture and never
                rotting—perfect for below-grade spaces common in Mississauga
                homes.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Permits and Regulations for Mississauga Baseboard Installation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most{" "}
                <strong>baseboard installation projects in Mississauga</strong>{" "}
                don't require building permits. However, if your baseboard work
                is part of a larger renovation involving structural changes, you
                may need approval from the{" "}
                <a
                  href="https://www.mississauga.ca/services-and-programs/building-and-renovating/permits-and-approvals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  City of Mississauga Building Department
                </a>
                . We help Mississauga homeowners understand permit requirements
                and can coordinate with your contractor for comprehensive
                renovation compliance.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Why Professional Baseboard Installation Matters in Mississauga
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                DIY baseboard installation often results in gaps, uneven
                reveals, and visible nail holes that detract from your
                Mississauga home's appearance. Professional baseboard
                contractors understand techniques like coping inside corners
                (creating seamless joints that don't gap over time), proper nail
                placement (countersunk and filled for invisible fasteners), and
                caulking strategy (flexible sealant that moves with seasonal
                expansion).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In Mississauga's climate with significant temperature swings,
                proper baseboard installation techniques prevent common problems
                like corner gaps in winter and buckling in summer. Our
                experienced contractors deliver results that look professional
                immediately and stay beautiful for years throughout your
                Mississauga home.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Baseboard Installation Timeline for Mississauga Projects
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A typical <strong>Mississauga baseboard installation</strong>{" "}
                timeline depends on project scope. A single room takes 4-6 hours
                including removal, installation, caulking, and cleanup. A full
                2000 sq ft Mississauga home typically takes 2-3 days spread over
                a week to allow for proper drying between steps. We schedule
                Mississauga projects efficiently, working around your routine to
                minimize disruption.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 my-8">
                <h4 className="text-xl font-bold mb-4">
                  Mississauga Local Resources
                </h4>
                <p className="text-gray-700 mb-4">
                  We work with trusted Mississauga-area suppliers and coordinate
                  with local authorities for smooth project completion:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span>
                      <a
                        href="https://www.sherwin-williams.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Sherwin-Williams Mississauga Dixie
                      </a>{" "}
                      — 1315 Dundas St E, paint and primer supply
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span>
                      <a
                        href="https://www.benjaminmoore.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Benjamin Moore Oakville
                      </a>{" "}
                      — 326 Kerr St, premium paint and stain
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span>
                      <a
                        href="https://www.mississauga.ca/services-and-programs/building-and-renovating/permits-and-approvals/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        City of Mississauga Building Permits
                      </a>{" "}
                      — For major renovation coordination
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready for Professional Baseboard Installation in Mississauga?
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Get your free Mississauga baseboard installation quote today.
                  Same-day estimates for most projects throughout Mississauga.
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
            Baseboard Installation FAQ - Mississauga
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How much does baseboard installation cost in Mississauga?",
                a: "Baseboard installation cost in Mississauga typically ranges $8-15 per linear foot installed. A standard bedroom costs $400-750 including old trim removal, installation, caulking, and paint-ready finishing. Share room dimensions for accurate Mississauga pricing.",
              },
              {
                q: "Can you install baseboards after popcorn ceiling removal in Mississauga?",
                a: "Yes. Once ceilings are Level 5 smooth and primed in your Mississauga home, we install new baseboards while protection is still in place, so there's no dust on fresh trim.",
              },
              {
                q: "What types of baseboards do you install in Mississauga?",
                a: "We install MDF (primed or raw), solid wood (oak, maple, poplar), and PVC baseboards for Mississauga homes. We help you choose based on your style and budget.",
              },
              {
                q: "Do you remove old baseboards in Mississauga homes?",
                a: "Yes. We carefully remove existing baseboards from Mississauga properties, patch wall imperfections, and haul away debris.",
              },
              {
                q: "How long does baseboard installation take in Mississauga?",
                a: "A typical Mississauga home (2000 sq ft) takes 2-3 days depending on profile complexity and whether painting is included.",
              },
              {
                q: "Do you caulk and paint baseboards in Mississauga?",
                a: "Yes. We caulk all seams for Mississauga projects and can prime/paint to match your walls or leave paint-ready.",
              },
              {
                q: "What's the difference between shoe moulding and quarter round?",
                a: "Shoe moulding is flatter and follows the baseboard profile, while quarter round is a perfect 90-degree arc. We recommend based on your Mississauga home's flooring type.",
              },
              {
                q: "Can you match existing baseboards in my Mississauga home?",
                a: "Yes. We can source matching profiles for Mississauga homes or mill custom pieces to blend with existing trim in other rooms.",
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
              Get Your Mississauga Quote
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
              Ready for Professional Baseboard Installation in Mississauga?
            </h2>
            <p className="text-2xl mb-8 text-blue-100">
              Your trusted Mississauga baseboard contractor for flawless
              installation
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
