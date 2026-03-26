"use client";

// components/Footer.jsx
import GoogleReviews from "@/components/GoogleReviews";
import { SERVICE_AREAS } from "@/app/config";
import { usePathname } from "next/navigation";
import { isAdsLandingPath } from "@/lib/isAdsLandingPath";

/** Contact + Locations */
const CONTACT = {
  email: "info@epfproservices.com",
  phones: [
    { label: "Tel.", display: "647.923.6784", href: "+16479236784" },
    { label: "Tel.", display: "647.824.3723", href: "+16478243723" },
  ],
};

/** Helper: build /popcorn-ceiling-removal/{city}/ slugs */
const slugifyCity = (city) => {
  const slug = city
    .toLowerCase()
    .normalize("NFKD") // remove diacritics
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return `/popcorn-ceiling-removal/${slug}/`;
};

const DRYWALL_INSTALL_LINKS = [
  {
    href: "/services/drywall-installation/",
    label: "Drywall installation service hub",
  },
  {
    href: "/services/drywall-installation/mississauga/",
    label: "Drywall installation Mississauga",
  },
  {
    href: "/services/drywall-installation/burlington/",
    label: "Drywall installation Burlington",
  },
  {
    href: "/services/drywall-installation/hamilton/",
    label: "Drywall installation Hamilton",
  },
];

const DRYWALL_REPAIR_LINKS = [
  {
    href: "/services/drywall-repair/",
    label: "Drywall repair service hub",
  },
  {
    href: "/services/drywall-repair/mississauga/",
    label: "Drywall repair Mississauga",
  },
  {
    href: "/services/drywall-repair/oakville/",
    label: "Drywall repair Oakville",
  },
  {
    href: "/services/drywall-repair/burlington/",
    label: "Drywall repair Burlington",
  },
  {
    href: "/services/drywall-repair/hamilton/",
    label: "Drywall repair Hamilton",
  },
  {
    href: "/services/drywall-repair/milton/",
    label: "Drywall repair Milton",
  },
  {
    href: "/services/drywall-repair/grimsby/",
    label: "Drywall repair Grimsby",
  },
];

const BASEBOARD_LINKS = [
  {
    href: "/services/baseboard-installation/",
    label: "Baseboard installation service hub",
  },
  {
    href: "/services/baseboard-installation/mississauga/",
    label: "Baseboard installation Mississauga",
  },
  {
    href: "/services/baseboard-installation/toronto/",
    label: "Baseboard installation Toronto",
  },
  {
    href: "/services/baseboard-installation/oakville/",
    label: "Baseboard installation Oakville",
  },
  {
    href: "/services/baseboard-installation/burlington/",
    label: "Baseboard installation Burlington",
  },
  {
    href: "/services/baseboard-installation/hamilton/",
    label: "Baseboard installation Hamilton",
  },
  {
    href: "/services/baseboard-installation/etobicoke/",
    label: "Baseboard installation Etobicoke",
  },
  {
    href: "/services/baseboard-installation/milton/",
    label: "Baseboard installation Milton",
  },
  {
    href: "/services/baseboard-installation/north-york/",
    label: "Baseboard installation North York",
  },
  {
    href: "/services/baseboard-installation/grimsby/",
    label: "Baseboard installation Grimsby",
  },
  {
    href: "/services/baseboard-installation/st-catharines/",
    label: "Baseboard installation St. Catharines",
  },
];

const LOCATIONS = [
  {
    label: "Mississauga Service Hub",
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
    label: "Stoney Creek / Hamilton Service Hub",
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
  const pathname = usePathname();
  if (isAdsLandingPath(pathname || "")) {
    return null;
  }

  const hideReviews = pathname === "/";
  const isDrywallInstallationPage = pathname?.startsWith(
    "/services/drywall-installation"
  );
  const isBaseboardInstallationPage = pathname?.startsWith(
    "/services/baseboard-installation"
  );
  const seoLine = isDrywallInstallationPage ? (
    <>
      <span className="font-semibold">EPF Pro Services</span>: drywall
      installation contractors for board hanging, taping, sanding, and
      paint-ready Level 4 to Level 5 finishing. Visit our drywall service hubs
      at 6855 Glen Erin Dr #33, Mississauga ON L5N 1P6 and 37 Dalegrove
      Crescent, Stoney Creek ON L8J 3R5. Serving {SERVICE_AREAS.join(", ")}.
    </>
  ) : isBaseboardInstallationPage ? (
    <>
      <span className="font-semibold">EPF Pro Services</span>: baseboard
      installation contractors for trim replacement, shoe moulding, caulking,
      and paint-ready finishing. Visit our service hubs at 6855 Glen Erin Dr
      #33, Mississauga ON L5N 1P6 and 37 Dalegrove Crescent, Stoney Creek ON
      L8J 3R5. Serving {SERVICE_AREAS.join(", ")}.
    </>
  ) : (
    <>
      <span className="font-semibold">EPF Pro Services</span>: popcorn ceiling
      removal, drywall installation, drywall repair, wallpaper removal, and
      paint-ready finishing with dust control and Level 5 standards. Visit our
      crews at 6855 Glen Erin Dr #33, Mississauga ON L5N 1P6 and 37 Dalegrove
      Crescent, Stoney Creek ON L8J 3R5. Serving {SERVICE_AREAS.join(", ")}.
    </>
  );
  const contactLinks = isDrywallInstallationPage ? (
    <p className="mt-3 text-gray-700">
      Need drywall installation scope details?{" "}
      <a
        href="/services/drywall-installation/"
        className="font-semibold hover:underline"
      >
        Service hub
      </a>{" "}
      •{" "}
      <a
        href="/services/drywall-installation/mississauga/"
        className="font-semibold hover:underline"
      >
        Mississauga
      </a>{" "}
      •{" "}
      <a
        href="/services/drywall-installation/burlington/"
        className="font-semibold hover:underline"
      >
        Burlington
      </a>{" "}
      •{" "}
      <a
        href="/services/drywall-installation/hamilton/"
        className="font-semibold hover:underline"
      >
        Hamilton
      </a>
    </p>
  ) : isBaseboardInstallationPage ? (
    <p className="mt-3 text-gray-700">
      Need baseboard installation scope details?{" "}
      <a
        href="/services/baseboard-installation/"
        className="font-semibold hover:underline"
      >
        Service hub
      </a>{" "}
      •{" "}
      <a
        href="/services/baseboard-installation/mississauga/"
        className="font-semibold hover:underline"
      >
        Mississauga
      </a>{" "}
      •{" "}
      <a
        href="/services/baseboard-installation/toronto/"
        className="font-semibold hover:underline"
      >
        Toronto
      </a>{" "}
      •{" "}
      <a
        href="/services/baseboard-installation/oakville/"
        className="font-semibold hover:underline"
      >
        Oakville
      </a>{" "}
      •{" "}
      <a
        href="/services/baseboard-installation/burlington/"
        className="font-semibold hover:underline"
      >
        Burlington
      </a>
    </p>
  ) : (
    <p className="mt-3 text-gray-700">
      Need scope details?{" "}
      <a
        href="/services/drywall-installation/"
        className="font-semibold hover:underline"
      >
        Drywall installation
      </a>{" "}
      •{" "}
      <a
        href="/services/drywall-repair/"
        className="font-semibold hover:underline"
      >
        drywall repair
      </a>{" "}
      •{" "}
      <a
        href="/services/popcorn-ceiling-removal/"
        className="font-semibold hover:underline"
      >
        popcorn ceiling removal
      </a>
    </p>
  );

  return (
    <footer
      className="mt-16 border-t bg-white"
      itemScope
      itemType="https://schema.org/Organization"
    >

      {/* Google Reviews */}
      {!hideReviews && (
        <GoogleReviews
          intent={
            isDrywallInstallationPage
              ? "drywall-installation"
              : isBaseboardInstallationPage
                ? "baseboard-installation"
                : "general"
          }
        />
      )}

      {/* SEO line */}
      <div className="container-x pt-6">
        <p className="text-sm text-gray-700">{seoLine}</p>
      </div>

      {/* Main footer grid */}
      <div className="container-x py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Brand + Hours + Contact */}
        <div>
          <div className="font-semibold text-lg" itemProp="name">
            EPF Pro Services
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
            <p className="text-gray-700">
              Prefer forms?{" "}
              <a href="/quote/" className="hover:underline font-medium">
                Request a quote
              </a>{" "}
              or call:
            </p>
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
            <div className="mt-2">
              <span className="text-gray-500 mr-1">Email</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:underline font-medium"
                itemProp="email"
              >
                {CONTACT.email}
              </a>
            </div>
            {contactLinks}
          </div>

          <div className="mt-4 text-sm">
            <div className="font-medium text-gray-900">
              {isDrywallInstallationPage
                ? "Drywall installation service hubs"
                : isBaseboardInstallationPage
                  ? "Baseboard installation service hubs"
                : "Service hubs"}
            </div>
            <ul className="mt-2 space-y-2 text-gray-700">
              {LOCATIONS.map((loc) => (
                <li key={loc.label}>
                  <div className="font-semibold text-gray-900">{loc.label}</div>
                  <a
                    href={loc.mapsUrl}
                    className="hover:underline block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {loc.address.streetAddress}, {loc.address.addressLocality},{" "}
                    {loc.address.addressRegion} {loc.address.postalCode}
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
          <div className="font-semibold text-lg">
            {isDrywallInstallationPage
              ? "Drywall Installation Service Hubs"
              : isBaseboardInstallationPage
                ? "Baseboard Installation Service Hubs"
              : "Our Locations"}
          </div>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc, i) => (
              <MapCard
                key={i}
                loc={loc}
                statusLabel={
                  isDrywallInstallationPage
                    ? "Drywall installation hub"
                    : isBaseboardInstallationPage
                      ? "Baseboard installation hub"
                    : "Local service hub"
                }
                statusNote={
                  isDrywallInstallationPage
                    ? "Board hanging, taping, sanding"
                    : isBaseboardInstallationPage
                      ? "Trim carpentry and finishing"
                    : "Interior finishing crew"
                }
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Local service links for internal linking (SEO) */}
      <div className="container-x pb-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {isDrywallInstallationPage ? (
            <>
              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="font-semibold text-sm mb-2">
                  Drywall Installation Near You
                </div>
                <ul className="text-sm flex flex-wrap gap-3">
                  {DRYWALL_INSTALL_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="font-semibold text-sm mb-2">
                  Drywall Repair Near You
                </div>
                <ul className="text-sm flex flex-wrap gap-3">
                  {DRYWALL_REPAIR_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-gray-700 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : isBaseboardInstallationPage ? (
            <>
              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="font-semibold text-sm mb-2">
                  Baseboard Installation Near You
                </div>
                <ul className="text-sm flex flex-wrap gap-3">
                  {BASEBOARD_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="font-semibold text-sm mb-2">
                  Related Interior Services
                </div>
                <ul className="text-sm flex flex-wrap gap-3">
                  {DRYWALL_INSTALL_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/services/interior-painting/"
                      className="text-gray-700 hover:underline"
                    >
                      Interior painting
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/wallpaper-removal/"
                      className="text-gray-700 hover:underline"
                    >
                      Wallpaper removal
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="font-semibold text-sm mb-2">
                  Popcorn Ceiling Removal Near You
                </div>
                <ul className="text-sm flex flex-wrap gap-3">
                  <li>
                    <a
                      href="/services/popcorn-ceiling-removal/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal service hub
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/mississauga/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Mississauga
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/burlington/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Burlington
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/toronto/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Toronto
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/oakville/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Oakville
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/hamilton/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Hamilton
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/milton/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Milton
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/etobicoke/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Etobicoke
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/grimsby/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal Grimsby
                    </a>
                  </li>
                  <li>
                    <a
                      href="/popcorn-ceiling-removal/st-catharines/"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Popcorn ceiling removal St. Catharines
                    </a>
                  </li>

                  {SERVICE_AREAS.filter(
                    (city) =>
                      city !== "Mississauga" &&
                      city !== "Burlington" &&
                      city !== "Toronto" &&
                      city !== "Oakville" &&
                      city !== "Hamilton" &&
                      city !== "Milton" &&
                      city !== "Etobicoke" &&
                      city !== "Grimsby" &&
                      city !== "St. Catharines"
                  )
                    .slice(0, 6)
                    .map((city) => (
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

              <div className="rounded-2xl border bg-gray-50 p-4">
                <div className="font-semibold text-sm mb-2">
                  Drywall Services Near You
                </div>
                <ul className="text-sm flex flex-wrap gap-3">
                  {DRYWALL_INSTALL_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  {DRYWALL_REPAIR_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-gray-700 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
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
              instagram="https://www.instagram.com/epf_pro_services"
              facebook="https://www.facebook.com/epfproservices/?rdid=Wpko4jNGWEWo6enD"
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
/* -------- Map Card — clean, neutral, blue accent -------- */
function MapCard({
  loc,
  statusLabel = "Local service hub",
  statusNote = "Interior finishing crew",
}) {
  return (
    <li
      className="relative rounded-2xl border border-gray-200 bg-white shadow-sm"
      itemScope
      itemProp="department"
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Top info row */}
      <div className="px-4 pt-4 pb-3 flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-gray-900">{loc.label}</div>

          <address
            className="mt-1 not-italic text-sm text-gray-700"
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
              ,{" "}
              <span itemProp="addressRegion">{loc.address.addressRegion}</span>{" "}
              <span itemProp="postalCode">{loc.address.postalCode}</span>
            </a>
            <meta
              itemProp="addressCountry"
              content={loc.address.addressCountry}
            />
          </address>

          <div className="mt-1 text-sm flex flex-wrap items-center gap-2">
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
        </div>

        {/* Status pill (HomeStars-style blue) */}
        <div className="flex flex-col items-end gap-1 text-xs">
          <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 px-2.5 py-1 font-semibold border border-sky-100">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-1.5" />
            Open 8–21
          </span>
          <span className="text-[11px] text-gray-500">
            {statusLabel}
          </span>
          <span className="text-[11px] text-gray-500">{statusNote}</span>
        </div>
      </div>

      {/* Map block */}
      <div className="px-4 pb-4">
        <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
          {/* subtle top fade so it feels branded, not raw iframe */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/80 to-transparent z-10" />

          {/* smaller, static map (no scroll/zoom) */}
          <div className="h-52 md:h-56">
            <iframe
              src={loc.embedUrl}
              title={`Map — ${loc.label}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              style={{ pointerEvents: "none" }} // no scroll / zoom on hover
            />
          </div>

          {/* bottom actions */}
          <div className="absolute left-4 right-4 bottom-3 flex flex-wrap items-center gap-2 z-20">
            <a
              href={`tel:${loc.phoneHref}`}
              className="inline-flex items-center rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 shadow-sm"
            >
              Call
            </a>
            <a
              href={loc.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white text-blue-700 text-xs font-semibold px-3 py-1.5 shadow-sm border border-blue-200"
              itemProp="hasMap"
            >
              Directions
            </a>
            <a
              href={loc.gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-white text-blue-700 text-xs font-semibold px-3 py-1.5 shadow-sm border border-blue-200"
            >
              Reviews
            </a>
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
