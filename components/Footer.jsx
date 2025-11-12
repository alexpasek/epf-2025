// components/Footer.jsx
import GoogleReviews from "@/components/GoogleReviews";
import { SERVICE_AREAS } from "@/app/config";

/** Contact + Locations */
const CONTACT = {
  email: "info@epfproservices.com",
  phones: [
    { label: "Tel.", display: "647.923.6784", href: "+16479236784" },
    { label: "Tel.", display: "647.824.3723", href: "+16478243723" },
  ],
};

/** Helper: build /locations/popcorn-ceiling-removal-{city} slugs */
const slugifyCity = (city) =>
  `/locations/popcorn-ceiling-removal-${city
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")}`;

const LOCATIONS = [
  {
    label: "Mississauga (Popcorn Ceiling Removal)",
    phone: "647.923.6784",
    phoneHref: "+16479236784",
    address: {
      streetAddress: "6855 Glen Erin Dr #33",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L5N 1P6",
      addressCountry: "CA",
    },
    mapsUrl:
      "https://maps.google.com/?q=6855+Glen+Erin+Dr+%2333,+Mississauga,+ON+L5N+1P6",
    // Exact EPF embed
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.745147041801!2d-79.76399362333954!3d43.591024471105115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b46ef0e89f92d%3A0x7fd4541e555b7f06!2sPopcorn%20Ceiling%20Removal%20-%20EPF%20Pro%20Services!5e0!3m2!1sen!2sca!4v1762913626664!5m2!1sen!2sca",
    gmbUrl:
      "https://www.google.com/search?q=EPF+Pro+Services+Popcorn+Ceiling+Removal+Mississauga",
    geo: { lat: 43.591024471105115, lng: -79.76399362333954 },
  },
  {
    label: "Stoney Creek / Hamilton",
    phone: "647.824.3723",
    phoneHref: "+16478243723",
    address: {
      streetAddress: "37 Dalegrove Crescent",
      addressLocality: "Stoney Creek",
      addressRegion: "ON",
      postalCode: "L8J 3R5",
      addressCountry: "CA",
    },
    mapsUrl:
      "https://maps.google.com/?q=37+Dalegrove+Crescent,+Stoney+Creek,+ON+L8J+3R5",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.98358975441!2d-79.80457702335748!3d43.188855171128075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c99dc7bdfa485%3A0xd4f28b62b970372f!2sPopcorn%20Ceiling%20Removal%20Burlington%20%2FOakville%2FHamilton%20Grimsby!5e0!3m2!1sen!2sca!4v1762913704943!5m2!1sen!2sca",
    gmbUrl:
      "https://www.google.com/search?q=EPF+Pro+Services+Popcorn+Ceiling+Removal+Stoney+Creek",
    geo: { lat: 43.188855171128075, lng: -79.80457702335748 },
  },
];

export default function Footer() {
  const orgId = "https://www.epfproservices.com/#org";

  /* -------- JSON-LD (SEO) -------- */
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: "Popcorn Ceiling Removal - EPF Pro Services",
    url: "https://www.epfproservices.com/",
    email: CONTACT.email,
    sameAs: [
      "https://www.instagram.com/wallpaperremovalpro",
      "https://www.facebook.com/share/17bsRz3MTi/?mibextid=wwXIfr",
    ],
    areaServed: SERVICE_AREAS,
    knowsAbout: [
      "Popcorn ceiling removal",
      "Level 5 skim coating",
      "HEPA sanding",
      "Ceiling priming and painting",
      "Drywall repair",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-647-923-6784",
        email: CONTACT.email,
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-647-824-3723",
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: ["en"],
      },
    ],
    department: LOCATIONS.map((loc) => ({
      "@type": "LocalBusiness",
      name: `Popcorn Ceiling Removal - EPF Pro Services — ${loc.label}`,
      telephone: loc.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address.streetAddress,
        addressLocality: loc.address.addressLocality,
        addressRegion: loc.address.addressRegion,
        postalCode: loc.address.postalCode,
        addressCountry: loc.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: loc.geo.lat,
        longitude: loc.geo.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
      ],
      hasMap: loc.mapsUrl,
      url: loc.gmbUrl,
      areaServed: SERVICE_AREAS,
      priceRange: "$$",
    })),
    potentialAction: [
      {
        "@type": "ContactAction",
        target: "tel:+1-647-923-6784",
        name: "Call for estimate",
      },
      {
        "@type": "ReserveAction",
        target: "https://www.epfproservices.com/quote/",
        name: "Request a free quote",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Popcorn Ceiling Removal",
    serviceType: "Popcorn Ceiling Removal",
    provider: { "@id": orgId },
    areaServed: SERVICE_AREAS,
    slogan:
      "Dust-controlled popcorn ceiling removal with Level 5 smooth finish.",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      url: "https://www.epfproservices.com/quote/",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <footer
      className="mt-16 border-t bg-white"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* SEO line */}
      <div className="container-x pt-6">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">
            Popcorn Ceiling Removal — EPF Pro Services
          </span>
          : dust-controlled scraping, Level 5 skim + HEPA sanding, primer-ready
          smooth ceilings. Serving {SERVICE_AREAS.join(", ")}.
        </p>
      </div>

      {/* Main footer grid */}
      <div className="container-x py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Brand + Hours + Contact */}
        <div>
          <div className="font-semibold text-lg" itemProp="name">
            Popcorn Ceiling Removal — EPF Pro Services
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Serving {SERVICE_AREAS.join(" · ")}
          </p>

          <div
            className="mt-4 text-sm text-gray-700 rounded-lg bg-gray-50 p-3 border"
            itemProp="openingHoursSpecification"
          >
            <div className="font-medium text-gray-900">🕘 Hours</div>
            <meta itemProp="opens" content="08:00" />
            <meta itemProp="closes" content="21:00" />
            <p itemProp="openingHours">Mon–Sun: 8:00 AM – 9:00 PM</p>
          </div>

          <div className="mt-4 text-sm">
            <div className="font-medium text-gray-900">Contact</div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:underline"
              itemProp="email"
            >
              {CONTACT.email}
            </a>
            <ul className="mt-1 space-y-1">
              {CONTACT.phones.map((p, i) => (
                <li key={i}>
                  <span className="text-gray-500 mr-1">{p.label}</span>
                  <a
                    href={`tel:${p.href}`}
                    className="hover:underline font-medium"
                    itemProp="telephone"
                  >
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            © {new Date().getFullYear()}
          </p>
        </div>

        {/* Branded, fancy maps */}
        <div className="lg:col-span-2">
          <div className="font-semibold text-lg">Our Locations</div>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc, i) => (
              <MapCard key={i} loc={loc} />
            ))}
          </ul>
        </div>
      </div>

      {/* Local service links for internal linking (SEO) */}
      <div className="container-x pb-8">
        <div className="rounded-2xl border bg-gray-50 p-4">
          <div className="font-semibold text-sm mb-2">
            Popcorn Ceiling Removal Near You
          </div>
          <ul className="text-sm flex flex-wrap gap-3">
            {SERVICE_AREAS.slice(0, 12).map((city) => (
              <li key={city}>
                <a
                  href={slugifyCity(city)}
                  className="text-gray-700 hover:underline"
                >
                  {`Popcorn ceiling removal ${city}`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Centered social */}
      <div className="container-x pb-10">
        <div className="mt-2 w-full">
          <div className="text-sm font-medium mb-2 flex justify-center">
            Follow us
          </div>
          <div className="flex justify-center">
            <SocialButtons
              instagram="https://www.instagram.com/wallpaperremovalpro"
              facebook="https://www.facebook.com/share/17bsRz3MTi/?mibextid=wwXIfr"
              size={60}
              icon={26}
              gap={12}
              variant="solid"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------- Fancy Map Card -------- */
function MapCard({ loc }) {
  return (
    <li
      className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-red-400 via-rose-300 to-red-400 shadow-[0_20px_60px_-20px_rgba(225,29,72,0.45)] hover:shadow-[0_28px_80px_-24px_rgba(225,29,72,0.55)] transition-shadow"
      itemScope
      itemProp="department"
      itemType="https://schema.org/LocalBusiness"
    >
      {/* soft glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-red-600/10 via-rose-500/10 to-red-700/10 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

      <div className="relative rounded-[1rem] overflow-hidden bg-white ring-1 ring-black/5">
        {/* header: label + status */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-white to-rose-50/60">
          <div className="font-medium text-gray-900">{loc.label}</div>
          <div className="text-xs font-semibold text-white px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 shadow">
            Open 8–21
          </div>
        </div>

        {/* address */}
        <address
          className="px-4 pt-3 not-italic text-sm text-gray-700"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <a
            className="hover:underline"
            href={loc.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${loc.label} in Google Maps`}
          >
            <span itemProp="streetAddress">{loc.address.streetAddress}</span>,{" "}
            <span itemProp="addressLocality">
              {loc.address.addressLocality}
            </span>
            , <span itemProp="addressRegion">{loc.address.addressRegion}</span>{" "}
            <span itemProp="postalCode">{loc.address.postalCode}</span>
          </a>
          <meta
            itemProp="addressCountry"
            content={loc.address.addressCountry}
          />
        </address>

        {/* phone + GBP */}
        <div className="px-4 pb-3 text-sm flex flex-wrap items-center gap-2">
          <a
            href={`tel:${loc.phoneHref}`}
            className="font-medium hover:underline"
            itemProp="telephone"
          >
            {loc.phone}
          </a>
          <span className="text-gray-300">•</span>
          <a
            href={loc.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Google Business Profile
          </a>
        </div>

        {/* Map with branded frame, shine & CTA chips */}
        <div className="relative">
          {/* gradient rim */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-[6px] rounded-xl ring-1 ring-black/10"></div>
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-tr from-rose-500/40 via-transparent to-red-600/40 opacity-60 mix-blend-normal"></div>
          </div>

          {/* map */}
          <div className="relative aspect-[16/11] overflow-hidden rounded-xl mx-1 mb-1">
            <iframe
              src={loc.embedUrl}
              title={`Map — ${loc.label}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 transform-gpu transition duration-500 group-hover:scale-[1.01]"
            />
            {/* glossy shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute -top-1/2 -left-1/2 w-[140%] h-[140%] rotate-[20deg] bg-gradient-to-b from-white/35 via-white/5 to-transparent blur-xl"></div>
            </div>

            {/* corner badge */}
            <div className="absolute left-3 top-3 pointer-events-none">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-gray-900 shadow">
                <span className="inline-block h-2 w-2 rounded-full bg-red-600"></span>
                EPF • Local
              </div>
            </div>

            {/* bottom CTAs */}
            <div className="absolute left-3 right-3 bottom-3 flex flex-wrap items-center gap-2 pointer-events-auto">
              <a
                href={`tel:${loc.phoneHref}`}
                className="inline-flex items-center rounded-full bg-black text-white text-xs font-semibold px-3 py-1.5 shadow hover:-translate-y-0.5 transition"
              >
                Call
              </a>
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 shadow hover:-translate-y-0.5 transition border border-black/10"
                itemProp="hasMap"
              >
                Directions
              </a>
              <a
                href={loc.gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 shadow hover:-translate-y-0.5 transition border border-black/10"
              >
                Reviews
              </a>

              {/* rating (non-numeric, safe) */}
              <div className="ml-auto hidden sm:flex items-center gap-1 text-[11px] font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-full px-2.5 py-1 shadow">
                <span aria-hidden>★★★★★</span>
                <span className="opacity-90">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

/* Social buttons */
function SocialButtons({
  instagram,
  facebook,
  size = 56,
  icon = 24,
  gap = 10,
  variant = "solid",
  className = "",
}) {
  const btnBase =
    "inline-flex items-center justify-center rounded-full border transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.45),_0_2px_6px_rgba(0,0,0,0.08)] border-black/10 text-white";
  const igBg =
    variant === "gradient"
      ? "conic-gradient(from 210deg, #f58529, #dd2a7b, #8134af, #515bd4, #f58529)"
      : "#E1306C";
  const fbBg = "#1877F2";
  return (
    <ul className={`flex ${className}`} style={{ gap }}>
      <li>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={btnBase}
          style={{
            width: size,
            height: size,
            background: igBg,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.12), 0 18px 36px -16px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.12)",
          }}
        >
          <InstagramIcon style={{ width: icon, height: icon }} />
        </a>
      </li>
      <li>
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={btnBase}
          style={{
            width: size,
            height: size,
            background: fbBg,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,.35), inset 0 -1px 0 rgba(0,0,0,.12), 0 18px 36px -16px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.12)",
          }}
        >
          <FacebookIcon style={{ width: icon, height: icon }} />
        </a>
      </li>
    </ul>
  );
}

/* Icons */
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"
      />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06C2 17.08 5.66 21.21 10.44 22v-6.97H8.25v-2.9h2.19V9.7c0-2.17 1.29-3.36 3.27-3.36.95 0 1.95.17 1.95.17v2.14h-1.1c-1.09 0-1.43.68-1.43 1.38v1.99h2.5l-.4 2.9h-2.1V22C18.34 21.21 22 17.08 22 12.06z"
      />
    </svg>
  );
}
