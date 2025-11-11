"use client";

import { useState, useMemo } from "react";

/**
 * OurWorkGallery — 2 horizontal tiles with bold contour + bigger SEO text
 * - Rectangle cards (no rounded corners)
 * - Clear border around image AND description (contour)
 * - Stronger, larger sales copy + amber accents
 *
 * Props (optional):
 *  - items: [{ src, alt?, city?, service?, caption?, headline?, blurb?, bullets?: string[], ctaHref?, ctaLabel? }]
 *  - tileW=420, tileH=280, gap=12, backdrop='none'
 *  - title?, description?, serviceAreas?
 */

const FALLBACK = [
  {
    src: "/gallery/etobicoke-living-room-pro-pass.jpg",
    alt: "Popcorn ceiling removal in Etobicoke — Pro Pass Level 5 smooth finish",
    city: "Etobicoke",
    service: "Popcorn Ceiling Removal (Pro Pass)",
    headline: "Etobicoke — Popcorn Ceiling Removal (Pro Pass)",
    blurb:
      "Dust-controlled popcorn ceiling removal with Level 5 smooth finish for a bright, modern look.",
    bullets: [
      "Full plastic containment & floor protection",
      "HEPA-connected sanding for low dust",
      "Level 5 skim, primer + two coats ceiling paint",
    ],
    ctaHref: "/locations/popcorn-ceiling-removal-etobicoke/",
    ctaLabel: "See Etobicoke service",
  },
  {
    src: "/gallery/mississauga-livingroom-after.jpg",
    alt: "Popcorn ceiling removal in Mississauga — bright white ceiling, clean lines",
    city: "Mississauga",
    service: "Popcorn Ceiling Removal",
    headline: "Mississauga — Popcorn Ceiling Removal",
    blurb:
      "Smooth Level 5 finish with crisp lines and a clean white ceiling to brighten the space.",
    bullets: [
      "Careful masking of walls, fixtures & openings",
      "Uniform sheen with professional primers & paints",
      "On-time completion and spotless clean-up",
    ],
    ctaHref: "/locations/popcorn-ceiling-removal-mississauga/",
    ctaLabel: "See Mississauga service",
  },
];

const DEFAULT_CITIES = [
  "Mississauga",
  "Toronto",
  "Oakville",
  "Burlington",
  "Hamilton",
  "Milton",
  "Etobicoke",
  "Grimsby",
  "St. Catharines",
];

export default function OurWorkGallery({
  items,
  tileW = 420,
  tileH = 280,
  gap = 12,
  backdrop = "none",
  title,
  description,
  serviceAreas = DEFAULT_CITIES,
}) {
  const data = useMemo(
    () => (Array.isArray(items) && items.length ? items.slice(0, 2) : FALLBACK),
    [items]
  );

  const [active, setActive] = useState(null);

  const toSlug = (name) =>
    String(name || "")
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // JSON-LD (CollectionPage + Service)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "/our-work-gallery/#page",
        name: title || "Our Work — Popcorn Ceiling Removal (GTA)",
        description:
          description ||
          "Two recent projects showing dust-controlled popcorn ceiling removal with Level 5 smooth finishes across the GTA.",
        hasPart: data.map((it) => ({
          "@type": "ImageObject",
          name:
            (it.service || "Popcorn Ceiling Removal") +
            (it.city ? " in " + it.city : ""),
          contentUrl: it.src,
          thumbnailUrl: it.src,
          caption: it.alt || it.caption || "",
          contentLocation: it.city
            ? { "@type": "Place", name: it.city }
            : undefined,
        })),
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        areaServed: serviceAreas,
        provider: { "@type": "LocalBusiness", name: "EPF Pro Services" },
        description:
          "Dust-controlled popcorn ceiling removal with Level 5 smooth finishing across the Greater Toronto Area.",
      },
    ],
  };

  return (
    <section className="py-10">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-x">
        {/* Header */}
        <header className="mx-auto mb-6 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title || "Our Work — Popcorn Ceiling Removal"}
          </h2>
          <p className="mt-2 text-lg text-slate-700">
            {description ||
              "Clean, bright results from dust-controlled popcorn ceiling removal and Level 5 smooth finishing across the GTA."}
          </p>
        </header>

        {/* Two tiles in a row, each with image + SEO description underneath */}
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: gap + "px" }}
        >
          {data.map((it, i) => {
            const h =
              it.headline ||
              `${it.city || "GTA"} — ${
                it.service || "Popcorn Ceiling Removal"
              }`;
            const blurb =
              it.blurb ||
              `Professional popcorn ceiling removal in ${
                it.city || "the GTA"
              } with Level 5 finishing for a smooth, modern ceiling.`;
            const bullets =
              Array.isArray(it.bullets) && it.bullets.length
                ? it.bullets
                : [
                    "Dust-controlled removal & HEPA sanding",
                    "Level 5 skim coat, primer & premium paints",
                    "Clean edges, uniform sheen, on-time completion",
                  ];
            const cityLink =
              it.ctaHref ||
              `/locations/popcorn-ceiling-removal-${toSlug(it.city || "gta")}/`;

            return (
              <article
                key={String(it.src) + i}
                className="overflow-hidden border-2 border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]"
                style={{ width: tileW + "px" }}
              >
                {/* IMAGE with its own contour */}
                <figure
                  className="relative border-b-2 border-slate-300"
                  style={{ width: tileW + "px", height: tileH + "px" }}
                  onClick={() => setActive(it)}
                  aria-label={`Open ${it.service || "project"} image`}
                >
                  <img
                    src={it.src}
                    alt={it.alt || ""}
                    className="h-full w-full cursor-pointer object-cover transition duration-200 ease-out hover:brightness-110 hover:contrast-110"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                {/* DESCRIPTION with clear contour and bigger text */}
                <div className="border-t-0 px-4 py-4 text-slate-800">
                  <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                    {h}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base">
                    <strong>Popcorn ceiling removal</strong> in{" "}
                    <strong>{it.city || "the GTA"}</strong>. {blurb}
                  </p>
                  <ul className="mt-3 list-disc pl-4 text-sm sm:text-base">
                    {bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  {/* SEO-friendly CTA row in your amber accent */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={cityLink}
                      className="text-sm font-semibold text-amber-700 underline-offset-4 hover:text-amber-800 hover:underline sm:text-base"
                    >
                      Popcorn Ceiling Removal in {it.city || "GTA"} →
                    </a>
                    <span className="text-slate-400">•</span>
                    <a
                      href="/contact#estimate"
                      className="text-sm font-medium text-slate-800 hover:text-slate-900 sm:text-base"
                    >
                      Free estimate
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Popup (transparent by default; set backdrop='dim' if you prefer) */}
      {active && (
        <div
          className={
            "fixed inset-0 z-50 flex items-center justify-center p-3 " +
            (backdrop === "dim" ? "bg-black/70" : "bg-transparent")
          }
          onClick={() => setActive(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-2 top-2 rounded border border-slate-300 bg-white px-2 py-0.5 text-slate-700 hover:bg-slate-50"
            >
              ✕
            </button>
            <img
              src={active.src}
              alt={active.alt || ""}
              className="max-h-[90vh] w-auto max-w-[95vw] object-contain"
            />
            {active.caption ? (
              <div className="border-t px-4 py-3 text-sm text-slate-800">
                {active.caption}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
