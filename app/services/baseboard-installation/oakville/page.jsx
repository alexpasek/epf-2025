import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { PHONE_HREF, PHONE_NUMBER } from "@/app/config";
import { cities } from "@/data/cities";
import { absoluteServiceUrl, buildBaseboardCityGraph } from "../schema";

export const revalidate = 86400;

const CITY_NAME = "Oakville";
const CITY_SLUG = "oakville";
const SERVICE_URL = `/services/baseboard-installation/${CITY_SLUG}/`;
const ABSOLUTE_SERVICE_URL = absoluteServiceUrl(SERVICE_URL);
const HERO_IMAGE =
  "/gallery/baseboard-installation/baseboard-installation00001.jpg";

const cityData = cities.find((entry) => entry.slug === CITY_SLUG);
const signals = cityData && cityData.signals ? cityData.signals : null;

export const metadata = {
  title: `Baseboard Installation Oakville | Professional Baseboard Contractors`,
  description:
    "Professional baseboard installation in Oakville. Expert baseboard installation, baseboard replacement, shoe moulding. Licensed contractor. Free quotes, 3-year warranty.",
  keywords: [
    "baseboard installation oakville",
    "baseboard replacement oakville",
    "baseboard contractors oakville",
    "shoe moulding installation",
    "baseboards near me",
  ],
  alternates: { canonical: ABSOLUTE_SERVICE_URL },
  openGraph: {
    title: `Baseboard Installation Oakville | Professional Baseboard Contractors`,
    description:
      "Professional baseboard installation in Oakville. Expert baseboard installation, baseboard replacement, shoe moulding.",
    url: ABSOLUTE_SERVICE_URL,
    type: "website",
    images: [{ url: absoluteServiceUrl(HERO_IMAGE) }],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = buildBaseboardCityGraph({
    cityName: CITY_NAME,
    serviceUrl: ABSOLUTE_SERVICE_URL,
    description:
      "Professional baseboard installation in Oakville for trim replacement, shoe moulding, caulking, and paint-ready finishing in homes, condos, and renovation projects.",
    faqs: [
      {
        q: `How much does baseboard installation cost in ${CITY_NAME}?`,
        a: `Pricing in ${CITY_NAME} depends on linear footage, profile height, material choice, and whether old trim removal and painting are included.`,
      },
      {
        q: `Do you install baseboards after flooring or drywall work in ${CITY_NAME}?`,
        a: `Yes. We regularly schedule baseboard installation after flooring, drywall repair, or repainting so the final trim package fits the finished room cleanly.`,
      },
      {
        q: `Do you handle caulking and nail-hole filling too?`,
        a: `Yes. Our baseboard scopes include fitment, fastening, filling, caulking, sanding, and a paint-ready handoff.`,
      },
      {
        q: `Do you work in occupied homes and condos in ${CITY_NAME}?`,
        a: `Yes. We protect finished floors, contain dust, and sequence work carefully so occupied spaces stay usable.`,
      },
    ],
  });

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <div className="bg-gray-50">
      <JsonLd />

      {/* HERO SECTION - UNIQUE TO OAKVILLE */}
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
                  🏆 Oakville's #1 Baseboard Contractor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Baseboard Installation in Oakville
              </h1>

              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Need baseboards installed after new flooring or a renovation in
                Oakville? We handle new installs, replacements, and shoe
                moulding for condos, townhomes, and detached homes across
                Bronte, Glen Abbey, Kerr Village, and Old Oakville.
              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Expect tight coped corners, clean returns, and a paint-ready
                finish. We match existing profiles in older Oakville homes and
                recommend moisture-resistant materials for lakeside properties.
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
                  <div className="text-3xl font-bold text-cyan-300">700+</div>
                  <div className="text-sm text-gray-300">Oakville Projects</div>
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
                  Professional baseboard installation in Oakville — Fast
                  response, transparent pricing
                </p>

                <QuoteForm />

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Serving all Oakville neighborhoods:
                  </p>
                  <p className="text-xs text-gray-500">
                    Bronte • Glen Abbey • Kerr Village • Old Oakville • Uptown
                    Core • River Oaks
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
                Baseboard Installation Services in Oakville
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete baseboard solutions for Oakville homes and lakefront
                properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏗️",
                  title: "New Baseboard Installation",
                  desc: "Install new baseboards after flooring or renovations, sized for ceiling height with crisp coped corners.",
                  features: [
                    "After flooring installs",
                    "Profile selection",
                    "Coped corners",
                  ],
                },
                {
                  icon: "🔄",
                  title: "Baseboard Replacement",
                  desc: "Remove worn trim, patch walls, and reset new baseboards to match your floors and paint.",
                  features: ["Safe removal", "Wall patching", "Straight runs"],
                },
                {
                  icon: "👞",
                  title: "Shoe Moulding",
                  desc: "Add shoe moulding to cover expansion gaps after flooring changes or uneven subfloors.",
                  features: [
                    "Covers floor gaps",
                    "Tidy transitions",
                    "Flexible profiles",
                  ],
                },
                {
                  icon: "📏",
                  title: "Tall Baseboards",
                  desc: "6-8 inch profiles for modern builds and higher ceilings common in newer Oakville neighborhoods.",
                  features: [
                    "6-8 inch profiles",
                    "Modern styles",
                    "High ceilings",
                  ],
                },
                {
                  icon: "🖌️",
                  title: "Caulking & Finishing",
                  desc: "Seam caulking, nail-hole fill, and sanding for a smooth, paint-ready edge.",
                  features: ["Seamless caulk", "Hole filling", "Paint-ready"],
                },
                {
                  icon: "🎨",
                  title: "Painting & Staining",
                  desc: "Prime and paint baseboards or stain hardwood to match your trim package.",
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

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our Oakville Baseboard Installation Process
            </h2>
            <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Professional workflow delivering perfect baseboards for Oakville
              homes
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Room Assessment & Measurement",
                  desc: "Confirm linear footage, profile height, door casing returns, and transitions. We account for older walls near Downtown and larger layouts in newer neighborhoods.",
                },
                {
                  step: "2",
                  title: "Remove Existing Trim",
                  desc: "Protect floors, remove old baseboards and shoe moulding, set nails, and haul debris away.",
                },
                {
                  step: "3",
                  title: "Wall Preparation",
                  desc: "Patch gaps, skim rough areas, and snap a straight reference line for consistent reveals.",
                },
                {
                  step: "4",
                  title: "Precision Installation",
                  desc: "Coped inside corners, tight outside miters, and scarf joints on long runs for a seamless look.",
                },
                {
                  step: "5",
                  title: "Finishing & Caulking",
                  desc: "Fill nail holes, caulk top edges and shoe moulding, and sand smooth for paint.",
                },
                {
                  step: "6",
                  title: "Paint & Final Inspection",
                  desc: "Prime and paint or stain on request, then a final walkthrough to confirm clean lines.",
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
              Oakville Baseboard Installation Pricing
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Transparent pricing for Oakville homes and lakefront properties
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
                      Ideal for Oakville lakeside homes
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
                💡 Oakville Pricing Examples:
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
                    Full Oakville home (2000 sq ft): $3200-6000 turnkey
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
              Why Oakville Homeowners Choose Us for Baseboard Installation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Oakville homes range from heritage properties near Lakeshore to
              newer builds in River Oaks and Uptown Core, plus lakeside homes
              near Bronte. Each needs the right profile, material, and prep. We
              handle uneven walls in older homes and humidity considerations
              near the lake.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Homeowners choose us for crisp miters, straight runs, and tidy
              sites. Whether you need PVC for moisture, tall profiles for modern
              interiors, or matching trim for an addition, we deliver consistent
              results and a clean handoff.
            </p>
          </div>
        </div>
      </section>

      {/* OAKVILLE NEIGHBORHOODS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Baseboard Installation Across Oakville
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional baseboard installation in every Oakville neighborhood
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Bronte",
                "Glen Abbey",
                "Kerr Village",
                "Old Oakville",
                "Uptown Core",
                "River Oaks",
                "Palermo",
                "College Park",
                "Iroquois Ridge",
                "Clearview",
                "West Oak Trails",
                "Joshua Creek",
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

      {/* OAKVILLE LOCAL SEO CONTENT */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold mb-6">
                Oakville baseboard installation with clear scope and local fit
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you are upgrading one room or finishing a full
                renovation, we focus on tight corners, straight lines, and a
                paint-ready finish that suits Oakville homes. We work in condos
                near Downtown, townhomes in Uptown Core, and detached homes in
                Bronte, River Oaks, and Glen Abbey.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Replacement vs new installation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are replacing old trim, we remove baseboards carefully,
                set nails, and patch walls before new installation. For new
                builds or post-flooring installs, we confirm profile height,
                door casing returns, and transitions so the trim looks
                intentional in every room.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Material choice for Oakville homes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Primed MDF is the most common option for painted interiors.
                Hardwood (oak, maple, poplar) is best when you want a stained
                finish. For waterfront homes or basements, PVC resists humidity
                and will not swell or rot.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Pricing and estimates
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most Oakville projects price by linear foot, typically $8-15/ft
                depending on profile height, material, wall conditions, and
                whether painting is included. Share room sizes and a few photos
                for a written quote.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Scheduling, access, and timeline
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A single room often takes 4-6 hours; a full home is usually 2-3
                days. For condos, we coordinate elevator bookings and quiet
                hours so work stays compliant.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Sequence with flooring and painting
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Baseboards are typically installed after flooring and before
                final paint coats. We can prime and paint on site or coordinate
                with your painter for a clean finish.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 my-8">
                <h4 className="text-xl font-bold mb-4">
                  Common Oakville requests we handle
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Trim replacement during flooring updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      Matching profiles for additions or partial rooms
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      PVC baseboards for waterfront or basement humidity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Caulk, fill, and paint-ready finishing</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Bundling with other upgrades
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many Oakville clients combine baseboard work with{" "}
                <Link
                  href="/services/drywall-installation/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  drywall installation
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/interior-painting/"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  interior painting
                </Link>{" "}
                for a clean, finished look with better sequencing between
                walls, trim, and final paint.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Waterfront moisture considerations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                For homes near the lake, we recommend PVC and careful caulking
                to manage seasonal humidity and keep joints tight over time.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">
                Permits and regulations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Baseboard work typically does not require a permit unless it is
                part of a larger renovation. If needed, we can point you to the{" "}
                <a
                  href="https://www.oakville.ca/business-and-development/building-permits-and-inspections/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Town of Oakville Building Department
                </a>
                .
              </p>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready for an Oakville baseboard quote?
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Same-day estimates for waterfront and family homes across the
                  city. Share room sizes or photos and we will respond quickly.
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
            Baseboard Installation FAQ - Oakville
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What does baseboard installation cost in Oakville?",
                a: "Most projects are priced by linear foot, typically $8-15/ft depending on material, profile height, wall conditions, and whether paint or stain is included. Share room sizes and photos for a written quote.",
              },
              {
                q: "Do you remove old baseboards and repair walls?",
                a: "Yes. We remove existing trim, set nails, patch drywall, and prep surfaces before installing new baseboards.",
              },
              {
                q: "Which material should I choose for my Oakville home?",
                a: "Primed MDF is the most common choice for painted rooms. Hardwood works best for stained finishes, while PVC is ideal near the waterfront or in basements where humidity is higher.",
              },
              {
                q: "How long does a typical job take?",
                a: "A single room often takes 4-6 hours. A full home is usually 2-3 days depending on scope, profile complexity, and finishing.",
              },
              {
                q: "Can you match existing baseboard profiles?",
                a: "Yes. We source matching profiles or mill close matches so new trim blends cleanly with existing rooms.",
              },
              {
                q: "Do you work in Oakville condo buildings?",
                a: "Yes. We coordinate with property management for elevator bookings, access, and quiet hours.",
              },
              {
                q: "When should baseboards be installed relative to flooring and painting?",
                a: "Baseboards are typically installed after flooring and before final paint coats. We can prime and paint as part of the job.",
              },
              {
                q: "Do you install shoe moulding or quarter round?",
                a: "Yes. We install shoe moulding to cover expansion gaps and create clean transitions along flooring.",
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
              Get Your Oakville Quote
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
              Ready for Professional Baseboard Installation in Oakville?
            </h2>
            <p className="text-2xl mb-8 text-blue-100">
              Your trusted Oakville baseboard contractor for waterfront and
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
            Baseboard Installation
          </Link>
        </div>
      </section>
    </div>
  );
}
