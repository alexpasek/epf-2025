import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { CityCopy } from "@/components/LocalSEOCopy";

// ─────────────────────────────────────────────────────────────────────────────
// Page-level metadata (title, description, canonical, OG/Twitter, robots)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Mississauga — Wallpaper Removal Pro",
  description:
    "Wallpaper removal, dust-free popcorn ceiling removal, drywall installation & repair, and interior painting in Mississauga. Fast quotes and clean results.",
  alternates: {
    // ⬇️ Replace with your absolute URL for this page
    canonical:
      "https://your-domain.com/service-areas/wallpaper-removal/mississauga",
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
  },
  openGraph: {
    type: "website",
    url: "https://your-domain.com/service-areas/wallpaper-removal/mississauga",
    siteName: "Wallpaper Removal Pro",
    title: "Wallpaper & Popcorn Ceiling Removal in Mississauga",
    description:
      "Wallpaper removal, popcorn ceiling smoothing, drywall repair, and painting in Mississauga.",
    images: [
      {
        url: "https://your-domain.com/og/mississauga.jpg",
        width: 1200,
        height: 630,
        alt: "Smooth ceiling and freshly painted room in Mississauga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallpaper & Popcorn Ceiling Removal — Mississauga",
    description:
      "Fast, clean results. Wallpaper removal, popcorn ceiling removal, drywall & painting.",
    images: ["https://your-domain.com/og/mississauga.jpg"],
  },
};

export default function City() {
  const city = "Mississauga";

  // Keep your 6 images; next/image prevents CLS & improves LCP.
  const images = Array.from({ length: 6 }, (_, i) => `/home/${i + 1}.webp`);

  // Unique alts + captions
  const alts = [
    "Wallpaper removal — dining room (before)",
    "Popcorn ceiling removal — Port Credit living room (removal)",
    "Wallpaper removal — Erin Mills",
    "Drywall repair — Cooksville ceiling",
    "Interior painting — Meadowvale ceiling painting",
    "Smooth ceiling — Lorne Park hallway (during)",
  ];

  const captions = [
    "Wallpaper removal — dining room (before)",
    "Popcorn ceiling removal — Port Credit living room (removal)",
    "Wallpaper removal — Erin Mills",
    "Drywall repair — Cooksville ceiling",
    "Interior painting — Meadowvale ceiling painting",
    "Smooth ceiling — Lorne Park hallway (during)",
  ];

  // JSON-LD: LocalBusiness (use real data only; no self-reviews)
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "HousePainter"],
    name: "Wallpaper Removal Pro",
    url: "https://your-domain.com/",
    telephone: "+1-647-812-9135",
    priceRange: "$$",
    image: "https://your-domain.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "736 Dundas St E",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L4Y 2B6",
      addressCountry: "CA",
    },
    hasMap:
      "https://maps.google.com/?q=736+Dundas+St+E,+Mississauga,+ON+L4Y+2B6",
    areaServed: [{ "@type": "City", name: "Mississauga" }],
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
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
  };

  // JSON-LD: Breadcrumbs for this exact page
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://your-domain.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://your-domain.com/service-areas/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mississauga",
        item: "https://your-domain.com/service-areas/wallpaper-removal/mississauga",
      },
    ],
  };

  return (
    <main className="container-x py-10">
      {/* Structured data (JSON-LD) */}
      <Script
        id="ld-local"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Accessible breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/service-areas/" className="hover:underline">
              Service Areas
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-gray-700">
            {city}
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold">
        {city} — Wallpaper, Popcorn Ceiling, Drywall & Painting
      </h1>

      <p className="mt-2 text-gray-700">
        Trusted contractor for wallpaper removal, dust-free popcorn ceiling
        removal, drywall installation & repair, and interior painting in {city}.
      </p>

      <p className="mt-1 text-sm">
        Official site:{" "}
        <a
          className="underline"
          href="https://www.mississauga.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.mississauga.ca/
        </a>
      </p>

      {/* Gallery with next/image, responsive sizes, and priority for first image */}
      <section
        data-lightbox-scope
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        aria-labelledby="gallery-heading"
      >
        <h2 id="gallery-heading" className="sr-only">
          Project gallery in {city}
        </h2>

        {images.map((src, i) => (
          <figure key={i} className="rounded-2xl border shadow overflow-hidden">
            <Image
              src={src}
              alt={alts[i] || `Project photo — ${city}`}
              width={1200}
              height={800}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              className="w-full h-56 object-cover"
            />
            <figcaption className="px-3 py-2 text-xs text-gray-600">
              {captions[i] || `${city} project`}
            </figcaption>
          </figure>
        ))}
      </section>

      {/* Local city copy (keep unique per city) */}
      <CityCopy
        city={city}
        neighborhoods={[
          "Port Credit",
          "Clarkson",
          "Lorne Park",
          "Mineola",
          "Streetsville",
          "Erin Mills",
          "Cooksville",
          "Applewood",
          "Meadowvale",
          "Lisgar",
        ]}
      />

      {/* Internal links to core services (descriptive anchors) */}
      <nav aria-label="Related services" className="mt-6">
        <ul className="flex flex-wrap gap-3 text-sm">
          <li>
            <Link className="btn-ghost underline" href="/wallpaper-removal/">
              Wallpaper removal service
            </Link>
          </li>
          <li>
            <Link
              className="btn-ghost underline"
              href="/popcorn-ceiling-removal/"
            >
              Popcorn ceiling removal (dust-controlled)
            </Link>
          </li>
          <li>
            <Link className="btn-ghost underline" href="/drywall/">
              Drywall installation & repair
            </Link>
          </li>
          <li>
            <Link className="btn-ghost underline" href="/painting/">
              Interior painting
            </Link>
          </li>
        </ul>
      </nav>

      <p className="mt-6 flex gap-3">
        <a className="btn-cta" href="tel:+16478129135">
          📞 (647) 812-9135
        </a>
        <a className="btn-cta" href="/quote/">
          Get a fast quote
        </a>
      </p>
    </main>
  );
}
