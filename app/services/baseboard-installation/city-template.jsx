import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import LocalSignals from "@/components/LocalSignals";
import { CONTACT, SITE_URL } from "@/app/config";
import { BASEBOARD_SERVICE_SLUG } from "./service-areas";

// DEPRECATED: Each city now has its own unique static page
// This file is kept for reference only and should not be used for new cities

const HERO_IMAGES = {
  "north-york": "/gallery/baseboard-installation/baseboard-installation00001.jpg",
  grimsby: "/gallery/baseboard-installation/baseboard-installation00002.jpg",
  milton: "/gallery/baseboard-installation/baseboard-installation00003.jpg",
  "st-catharines":
    "/gallery/baseboard-installation/baseboard-installation00004.jpg",
};
const DEFAULT_HERO_IMAGE =
  "/gallery/baseboard-installation/baseboard-installation00001.jpg";
const getHeroImage = (citySlug) =>
  HERO_IMAGES[citySlug] || DEFAULT_HERO_IMAGE;

export function buildBaseboardMetadata(cityName, citySlug) {
  const slug = `${BASEBOARD_SERVICE_SLUG}${citySlug}/`;
  const heroImage = getHeroImage(citySlug);

  return {
    title: `Baseboard Installation ${cityName} | Trim Carpenter & Replacement`,
    description: `Professional baseboard installation in ${cityName}. Trim carpentry, baseboard replacement, shoe moulding, caulking, and paint-ready finishing. Fast quotes and tidy crews.`,
    keywords: [
      `baseboard installation ${cityName}`,
      `baseboard replacement ${cityName}`,
      `trim carpenter ${cityName}`,
      `shoe moulding ${cityName}`,
      `baseboard installer ${cityName}`,
      "baseboard installation",
      "trim installation",
      "baseboard repair",
    ],
    alternates: { canonical: slug },
    openGraph: {
      title: `Baseboard Installation ${cityName} | Trim Carpenter`,
      description: `Baseboard installation in ${cityName} with clean lines, tight corners, and paint-ready finishing.`,
      url: slug,
      type: "website",
      images: heroImage ? [{ url: heroImage }] : [],
    },
    robots: { index: true, follow: true },
  };
}

function SeoJsonLd({ cityName, serviceUrl, hubUrl, faqs }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Baseboard Installation in ${cityName}`,
      serviceType: [
        "Baseboard Installation",
        "Baseboard Replacement",
        "Shoe Moulding",
        "Trim Carpentry",
        "Caulking and Finishing",
      ],
      areaServed: { "@type": "City", name: `${cityName}, ON` },
      url: serviceUrl,
      provider: { "@id": "/#business" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url: serviceUrl,
      },
      potentialAction: {
        "@type": "RequestQuoteAction",
        target: "/quote/",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Baseboard Installation",
          item: { "@id": hubUrl },
        },
        {
          "@type": "ListItem",
          position: 2,
          name: cityName,
          item: { "@id": serviceUrl },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BaseboardCityPage({ cityName, citySlug, signals }) {
  const phoneHref = (CONTACT && CONTACT.phoneHref) || "tel:+16479236784";
  const phoneText = (CONTACT && CONTACT.phone) || "(647) 923-6784";
  const slug = `${BASEBOARD_SERVICE_SLUG}${citySlug}/`;
  const heroImage = getHeroImage(citySlug);
  const baseUrl = (SITE_URL && SITE_URL.replace(/\/$/, "")) || "";
  const serviceUrl = baseUrl ? `${baseUrl}${slug}` : slug;
  const hubUrl = baseUrl
    ? `${baseUrl}${BASEBOARD_SERVICE_SLUG}`
    : BASEBOARD_SERVICE_SLUG;

  const highlights = [
    {
      title: "Precision Fit",
      desc: "Tight coped corners, clean miters, and straight runs that stay true over time.",
    },
    {
      title: "Paint-Ready Finish",
      desc: "Nail holes filled, seams caulked, and edges sanded for a crisp final look.",
    },
    {
      title: "Tidy Work Areas",
      desc: "Floors and furniture protected, with daily cleanup to keep your home usable.",
    },
  ];

  const services = [
    {
      title: "Baseboard Installation",
      desc: "New baseboards in MDF, pine, poplar, hardwood, or PVC with sharp corners and smooth transitions.",
    },
    {
      title: "Baseboard Replacement",
      desc: "Remove worn trim, prep walls, and install new profiles that match your flooring and style.",
    },
    {
      title: "Shoe Moulding",
      desc: "Add shoe moulding or quarter round to cover expansion gaps and clean up floor edges.",
    },
    {
      title: "Caulking and Finishing",
      desc: "Professional caulking, filling, and sanding for a uniform paint-ready surface.",
    },
  ];

  const process = [
    {
      title: "Measure and Plan",
      desc: "Confirm linear footage, profile choice, and transitions before cutting starts.",
    },
    {
      title: "Remove Old Trim",
      desc: "Careful removal to protect drywall and avoid damaged corners.",
    },
    {
      title: "Install and Align",
      desc: "Coped inside corners, tight outside miters, and consistent reveals along the wall.",
    },
    {
      title: "Fill and Caulk",
      desc: "Fill nail holes, caulk seams, and smooth edges for a seamless finish.",
    },
    {
      title: "Paint-Ready Handover",
      desc: "Final cleanup and walkthrough so the space is ready for paint or stain.",
    },
  ];

  const faqs = [
    {
      q: `How much does baseboard installation cost in ${cityName}?`,
      a: "Pricing depends on linear footage, profile height, material choice, and wall conditions. Share room sizes and photos for a precise, written quote.",
    },
    {
      q: "Do you remove old baseboards?",
      a: "Yes. We remove existing trim, patch wall damage, and prep surfaces before installing new baseboards.",
    },
    {
      q: "Can you match existing baseboard profiles?",
      a: "In many cases, yes. We can source matching profiles or recommend a close alternative that blends cleanly.",
    },
    {
      q: "Do you install baseboards after new flooring?",
      a: "Yes. We regularly install baseboards after flooring projects and can add shoe moulding if needed.",
    },
    {
      q: "Do you caulk and paint baseboards?",
      a: "We caulk seams and fill nail holes as standard. Painting or staining is available on request.",
    },
    {
      q: "How long does a typical job take?",
      a: "Most homes are completed in 1-3 days depending on scope, profile style, and paint add-ons.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <SeoJsonLd
        cityName={cityName}
        serviceUrl={serviceUrl}
        hubUrl={hubUrl}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {heroImage && (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
          )}
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-widest text-blue-200">
                Baseboard Installation {cityName}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Baseboard Installation in {cityName}
              </h1>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Clean lines, tight corners, and a paint-ready finish from trim
                carpenters who specialize in baseboard installation and
                replacement.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-bold text-lg shadow-xl transition-all"
                >
                  Free Quote
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold text-lg border border-white/30 transition-all"
                >
                  {phoneText}
                </a>
                <Link
                  href={BASEBOARD_SERVICE_SLUG}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg shadow-xl hover:bg-gray-100 transition-all"
                >
                  Service Hub
                </Link>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Serving {cityName} homes, townhomes, and condos with licensed,
                insured crews and a 3-year workmanship warranty.
              </p>
            </div>

            <figure
              className="overflow-hidden border-2 border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]"
              style={{ height: "320px" }}
            >
              <img
                src={heroImage}
                alt={`Baseboard installation in ${cityName}`}
                className="h-full w-full object-cover transition duration-200 ease-out hover:brightness-110 hover:contrast-110"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border-2 border-gray-100 bg-white shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Get a Baseboard Installation Quote
              </h2>
              <p className="text-gray-600">
                Share room sizes, photos, and profile preferences for fast
                pricing.
              </p>
            </div>

            <QuoteForm />

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">Prefer to talk?</p>
              <a
                href={phoneHref}
                className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Baseboard Installation Services in {cityName}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Full-service trim work for renovations, refreshes, and new
                flooring projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-8 bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our {cityName} Baseboard Installation Process
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              A clean, predictable workflow that keeps your home tidy and your
              trim lines sharp.
            </p>

            <div className="space-y-6">
              {process.map((step, idx) => (
                <div
                  key={step.title}
                  className="flex gap-6 items-start bg-white p-6 rounded-2xl border-2 border-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr] lg:items-start max-w-6xl mx-auto">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-3xl font-bold mb-3">
                  Professional Baseboard Installation for {cityName} Homes
                </h2>
                <p>
                  Looking for expert{" "}
                  <strong>baseboard installation in {cityName}</strong>? Our
                  professional trim carpenters specialize in baseboard
                  installation, replacement, and finishing for homes throughout
                  the Greater Toronto Area. From older homes to new builds and
                  condo renovations, we deliver precision trim work that
                  transforms your space.
                </p>
                <p className="mt-3">
                  Every <strong>baseboard installation {cityName}</strong>{" "}
                  project starts with accurate measurements and profile
                  selection. We account for wall irregularities, out-of-square
                  corners, and ceiling heights to ensure your trim fits the
                  scale and style of your rooms. Whether you're doing a{" "}
                  <Link
                    href="/services/popcorn-ceiling-removal/"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    popcorn ceiling removal
                  </Link>{" "}
                  project or upgrading after new flooring, we coordinate with
                  your renovation timeline.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Why {cityName} Homeowners Choose Us for Baseboard Installation
                </h3>
                <p>
                  <strong>Baseboard replacement {cityName}</strong> requires
                  more than just nailing trim to walls. Our experienced trim
                  carpenters understand how to handle real-world conditions:
                  uneven floors, out-of-square corners, and long wall runs that
                  need tight scarf joints. We deliver a consistent reveal and
                  crisp finish that looks professional from every angle.
                </p>
                <p className="mt-3">
                  When you search for{" "}
                  <strong>baseboards near me {cityName}</strong>, you want a
                  contractor who shows up on time, protects your floors,
                  installs trim with precision, and leaves your home clean. Our
                  crews deliver exactly that—plus caulking, filling, and
                  paint-ready finishing so your baseboards look flawless.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Complete Baseboard Services in {cityName}
                </h3>
                <p>
                  Our <strong>baseboard installation service</strong> covers
                  everything from simple replacement to complete room makeovers:
                </p>
                <ul className="mt-3 space-y-2 list-disc pl-6">
                  <li>
                    <strong>New baseboard installation:</strong> MDF, hardwood,
                    poplar, and PVC profiles with coped inside corners and tight
                    miter joints
                  </li>
                  <li>
                    <strong>Baseboard replacement:</strong> Remove old damaged
                    trim, prep walls, and install fresh baseboards that match
                    your flooring
                  </li>
                  <li>
                    <strong>Shoe moulding installation:</strong> Add quarter
                    round or shoe moulding to cover expansion gaps and perfect
                    floor transitions
                  </li>
                  <li>
                    <strong>Caulking & finishing:</strong> Professional caulking
                    of all seams, nail hole filling, and smooth sanding for
                    paint-ready delivery
                  </li>
                  <li>
                    <strong>Painting & staining:</strong> Optional primer and
                    finish coats or wood staining to complete your trim work
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Renovation Coordination & Project Phasing
                </h3>
                <p>
                  We regularly install baseboards after{" "}
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
                    drywall installation
                  </Link>
                  , or new flooring projects. If your{" "}
                  <strong>{cityName} baseboard installation</strong> is part of
                  a larger renovation, we coordinate timing with other trades so
                  your trim work lands exactly when needed.
                </p>
                <p className="mt-3">
                  Many {cityName} homeowners bundle baseboard installation with{" "}
                  <strong>popcorn ceiling removal</strong>—once ceilings are
                  smooth and painted, fresh baseboards complete the
                  transformation. We can handle both services with a single crew
                  and timeline for maximum efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Local {cityName} Baseboard Installation Expertise
                </h3>
                <p>
                  Our teams work throughout {cityName} and understand local
                  building styles, common trim profiles, and renovation norms.
                  Whether you're in an older neighborhood with character homes
                  or a newer development with builder-grade trim, we match your
                  existing style or help you upgrade to modern profiles.
                </p>
                <p className="mt-3">
                  For homeowners comparing{" "}
                  <strong>baseboard installation cost {cityName}</strong>, we
                  provide transparent pricing based on linear footage, profile
                  type (MDF vs hardwood), and finishing requirements. Share room
                  sizes and photos for a detailed written quote—most estimates
                  are delivered same-day.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-900">
                  Related Services for {cityName} Homes
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">
                      Before Baseboard Installation:
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/services/popcorn-ceiling-removal/"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Popcorn Ceiling Removal
                        </Link>{" "}
                        — Smooth ceilings first
                      </li>
                      <li>
                        <Link
                          href="/services/drywall-installation/"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Drywall Installation
                        </Link>{" "}
                        — Repair walls before trim
                      </li>
                      <li>
                        <Link
                          href="/services/interior-painting/"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Interior Painting
                        </Link>{" "}
                        — Paint walls before baseboards
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">
                      Complete Room Transformations:
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/our-work/"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Before & After Projects
                        </Link>{" "}
                        — See our completed work
                      </li>
                      <li>
                        <Link
                          href="/our-process/"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Our Installation Process
                        </Link>{" "}
                        — How we work
                      </li>
                      <li>
                        <Link
                          href="/blog/"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          Baseboard Installation Guides
                        </Link>{" "}
                        — Tips & resources
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3 text-lg">
                  <li>
                    <Link
                      className="text-blue-700 font-semibold hover:underline"
                      href={BASEBOARD_SERVICE_SLUG}
                    >
                      ← Baseboard Installation Hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blue-700 font-semibold hover:underline"
                      href="#quote"
                    >
                      Get {cityName} Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blue-700 font-semibold hover:underline"
                      href="/quote/"
                    >
                      Upload Photos for Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blue-700 font-semibold hover:underline"
                      href="/our-work/"
                    >
                      View Completed Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-blue-700 font-semibold hover:underline"
                      href="/blog/"
                    >
                      Baseboard Installation Tips
                    </Link>
                  </li>
                </ul>
                <div className="mt-8 p-5 rounded-2xl bg-white border border-blue-100">
                  <p className="text-sm uppercase tracking-wide text-blue-600 font-bold mb-2">
                    Service Coverage
                  </p>
                  <p className="text-gray-700">
                    Professional baseboard installation, trim replacement, shoe
                    moulding, and paint-ready finishing throughout {cityName}{" "}
                    and surrounding areas.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-3">
                  Ready for Baseboard Installation?
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Get your {cityName} baseboard quote today. Same-day estimates
                  for most projects.
                </p>
                <div className="space-y-3">
                  <a
                    href={phoneHref}
                    className="block text-center py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-gray-100 transition"
                  >
                    📞 {phoneText}
                  </a>
                  <Link
                    href="/quote/"
                    className="block text-center py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {signals ? <LocalSignals signals={signals} /> : null}

      <section id="faqs" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Baseboard Installation FAQ - {cityName}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
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
              href="#quote"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-2xl"
            >
              Get a Free Quote
            </a>
            <div className="mt-4">
              <a
                className="font-bold text-blue-700 hover:underline"
                href={phoneHref}
              >
                Or call {phoneText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Baseboard Installation in {cityName}?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get professional trim work with clean lines and a paint-ready
              finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg rounded-full shadow-2xl transition-all"
              >
                Call {phoneText}
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold text-lg rounded-full shadow-2xl transition-all"
              >
                Get Free Quote
              </a>
            </div>
            <div className="mt-8">
              <Link
                href={BASEBOARD_SERVICE_SLUG}
                className="font-semibold text-blue-100 hover:underline"
              >
                Back to the baseboard installation hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO CONTENT */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold mb-6">
              Professional Baseboard Installation in {cityName}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Looking for expert{" "}
              <strong>baseboard installation in {cityName}</strong>? Our
              professional trim carpenters specialize in new baseboard
              installation, baseboard replacement, and complete trim finishing
              for homes throughout {cityName}. Whether you're renovating a
              single room or upgrading your entire home, we deliver precise
              craftsmanship and paint-ready results.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Why {cityName} Homeowners Choose Our Baseboard Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Baseboard installation in {cityName} requires understanding local
              home styles, from vintage character homes to modern new builds.
              Our team has completed hundreds of baseboard projects throughout{" "}
              {cityName}, mastering the techniques needed for coped inside
              corners, tight miter joints, and seamless transitions. We work
              with MDF, solid hardwood, and PVC baseboards to match any style
              and budget.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Baseboard Installation After Ceiling Removal
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many {cityName} homeowners bundle{" "}
              <Link
                href="/services/popcorn-ceiling-removal/"
                className="text-blue-600 font-semibold hover:underline"
              >
                popcorn ceiling removal
              </Link>{" "}
              with baseboard installation for a complete room transformation.
              When you're already protecting floors and furniture for ceiling
              work, it's the perfect time to upgrade baseboards. This
              coordination saves on setup costs and delivers a cohesive finished
              space.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Baseboard Materials: MDF, Hardwood & PVC
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>MDF baseboards</strong> are the most popular choice for{" "}
              {cityName} homes – affordable, paint-ready, and available in
              countless profiles. <strong>Solid hardwood baseboards</strong>{" "}
              (oak, maple, poplar) offer premium durability and can be stained
              to showcase natural wood grain. <strong>PVC baseboards</strong>{" "}
              are ideal for moisture-prone areas like basements and bathrooms,
              resisting warping and mold.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Cost of Baseboard Installation in {cityName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Baseboard installation cost in {cityName}</strong>{" "}
              typically ranges $8-15 per linear foot installed, depending on
              material choice, profile height, and finishing requirements. A
              standard bedroom (12x14) with 50 linear feet costs $400-750
              including removal of old trim, installation, caulking, and
              paint-ready finishing. We provide transparent written quotes after
              reviewing your room sizes and photos.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Shoe Moulding & Quarter Round
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most baseboard installations in {cityName} include{" "}
              <strong>shoe moulding</strong> or <strong>quarter round</strong>{" "}
              to cover the gap between baseboard and flooring. Shoe moulding
              follows the baseboard profile for a traditional look, while
              quarter round provides a curved transition. Both options allow for
              floor expansion while maintaining a finished appearance.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Coordinating with Other {cityName} Services
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
              Baseboards are typically installed after flooring and before final
              paint coats for optimal results. Many {cityName} clients
              appreciate our ability to manage multiple trades and deliver
              turnkey room transformations.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mt-8">
              <h4 className="text-xl font-bold mb-4">
                Ready for Professional Baseboard Installation in {cityName}?
              </h4>
              <p className="text-gray-700 mb-4">
                Get started with a free quote. Upload photos of your rooms and
                we'll provide a detailed estimate within 4 hours. We serve all{" "}
                {cityName} neighborhoods with expert trim carpentry and clean
                installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all"
                >
                  Get Free Quote
                </Link>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all"
                >
                  📞 {phoneText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Baseboard Installation Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/blog/baseboard-installation-guide-mississauga-gta/"
              className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Complete Installation Guide
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Learn about materials, costs, and the professional installation
                process
              </p>
            </Link>

            <Link
              href="/blog/baseboard-installation-after-popcorn-ceiling-removal/"
              className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                After Ceiling Removal
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Why baseboard installation pairs perfectly with ceiling
                smoothing projects
              </p>
            </Link>

            <Link
              href="/blog/choosing-right-baseboards-mdf-hardwood-pvc/"
              className="group bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">🪵</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                Choosing Materials
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Compare MDF, hardwood, and PVC baseboards for your home
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
