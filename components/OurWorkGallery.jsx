"use client";

import { useMemo, useState, useEffect } from "react";

/**
 * OurWorkGallery — reusable, SEO-first gallery
 * - Rectangular service menu (below header, directly above pictures)
 * - Horizontal tiles (wrap) with fixed sizes (tileW x tileH)
 * - Premium description + keyword chips under each tile
 * - Modal: IMAGE ONLY + keyword ribbon; fixed always-visible Close button
 *
 * Props:
 *  - items: Array<{
 *      src: string; alt?: string; city?: string; nbh?: string;
 *      headline?: string; blurb?: string; bullets?: string[];
 *      service?: string; modalKeyword?: string; ctaHref?: string; ctaLabel?: string;
 *    }>
 *  - tileW?: number (px)  default 500
 *  - tileH?: number (px)  default 320
 *  - layout?: { min?: number; gap?: number; ratio?: string }
 *  - title?: string
 *  - description?: string
 *  - areas?: string[]            // JSON-LD areaServed
 *  - business?: { name?: string; url?: string; phone?: string } // JSON-LD provider
 *  - backdrop?: 'none' | 'dim'   // modal background
 *  - menuItems?: Array<{ label: string; href: string; current?: boolean }>
 */

const FALLBACK = [
  {
    src: "/gallery/mississauga.jpg",
    alt: "Level 5 smooth ceiling after popcorn removal in Mississauga",
    city: "Mississauga",
    nbh: "Mineola",
    headline: "Mississauga — Mineola",
    blurb: "Full containment, HEPA sanding, Level 5 skim, primer + 2 coats.",
    bullets: ["Clean edges", "Even sheen", "On-time completion"],
  },
  {
    src: "/gallery/mississauga.jpg",
    alt: "Smooth white ceiling after painted popcorn removal in Oakville",
    city: "Oakville",
    nbh: "Clearview",
    headline: "Oakville — Clearview",
    blurb: "Removed painted popcorn. Repaired joints. Bright Level 5 finish.",
    bullets: ["Handles painted popcorn", "Level 5 skim", "Premium paints"],
  },
];

const DEFAULT_AREAS = [
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

const DEFAULT_MENU = [
  {
    label: "Popcorn Ceiling Removal",
    href: "/our-work/",
    current: true,
  },
  { label: "Interior Painting", href: "/gallery/interior-painting/" },
  { label: "Drywall Installation", href: "/gallery/drywall-installation/" },
  { label: "Wallpaper Removal", href: "/gallery/wallpaper-removal/" },
  { label: "Design", href: "/gallery/design/" },
];

export default function OurWorkGallery({
  items,
  tileW = 500,
  tileH = 320,
  layout,
  title,
  description,
  areas = DEFAULT_AREAS,
  business,
  backdrop = "none",
  menuItems = DEFAULT_MENU,
}) {
  const GAP = layout?.gap ?? 12;
  const data = useMemo(
    () => (Array.isArray(items) && items.length ? items : FALLBACK),
    [items]
  );
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toSlug = (s) =>
    String(s || "")
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // --- Keyword helpers (for chips + JSON-LD "keywords") ---
  function keywordVariants(service, city, nbh) {
    const svc = (service || "Popcorn Ceiling Removal").toLowerCase();
    const c = city ? city : "GTA";
    const n = nbh ? ` ${nbh}` : "";
    return [
      `${svc} ${c}${n}`.trim(),
      `popcorn removal ${c}${n}`.trim(),
      `ceiling smoothing ${c}${n}`.trim(),
      `level 5 skim ${c}${n}`.trim(),
    ];
  }

  const allKeywords = [];
  data.forEach((it) => {
    keywordVariants(it.service, it.city, it.nbh).forEach((k) =>
      allKeywords.push(k)
    );
  });

  // ---------- JSON-LD (CollectionPage + Service + keywords) ----------
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "/our-work-gallery/#page",
        name: title || "Our Work — Popcorn Ceiling Removal (GTA)",
        description:
          description ||
          "Projects showing dust-controlled popcorn ceiling removal with Level 5 smooth finishes across the GTA.",
        hasPart: data.slice(0, 40).map((it) => ({
          "@type": "ImageObject",
          name:
            (it.service || "Popcorn Ceiling Removal") +
            (it.city ? " in " + it.city : ""),
          contentUrl: it.src,
          thumbnailUrl: it.src,
          caption: it.alt || it.blurb || "",
        })),
        keywords: Array.from(new Set(allKeywords)).join(", "),
      },
      {
        "@type": "Service",
        name: "Popcorn Ceiling Removal",
        areaServed: areas,
        provider: {
          "@type": "LocalBusiness",
          name: business?.name || "EPF Pro Services",
          url: business?.url,
          telephone: business?.phone,
        },
        description:
          "Dust-controlled popcorn ceiling removal with Level 5 smooth finishing across the Greater Toronto Area.",
      },
    ],
  };

  return (
    <section className="py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-x">
        {/* Header */}
        <header className="mx-auto mb-4 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title || "Our Work — Popcorn Ceiling Removal"}
          </h2>
          <p className="mt-2 text-lg text-slate-700">
            {description ||
              "Clean, bright results from dust-controlled popcorn ceiling removal and Level 5 smooth finishing across the GTA."}
          </p>
        </header>

        {/* Top Menu — directly ABOVE the pictures (rectangular, bigger, hover color) */}
        <nav
          aria-label="Gallery sections"
          className="mx-auto mb-6 max-w-6xl overflow-x-auto [scrollbar-width:none]"
        >
          <ul className="flex items-center justify-center gap-3 whitespace-nowrap">
            {menuItems.map((m) => {
              const current = !!m.current;
              return (
                <li key={m.href}>
                  <a
                    href={m.href}
                    aria-current={current ? "page" : undefined}
                    className={[
                      "group inline-flex items-center rounded-md border px-5 py-2.5 text-[15px] font-semibold transition-all duration-150",
                      "shadow-sm hover:-translate-y-[1px]",
                      current
                        ? // ACTIVE (amber solid)
                          "border-amber-600 bg-red-600 text-white shadow-[0_6px_20px_rgba(245,158,11,.35)] hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        : // INACTIVE (white -> amber on hover)
                          "border-slate-300 bg-white text-slate-800 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300",
                    ].join(" ")}
                  >
                    {m.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Tiles row (wraps: works with 1, 2, 6, …) */}
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: (layout?.gap ?? 12) + "px" }}
        >
          {data.map((it, i) => {
            const service = it.service || "Popcorn Ceiling Removal";
            const city = it.city || "GTA";
            const nbh = it.nbh ? ` • ${it.nbh}` : "";
            const h = it.headline || `${city}${nbh ? "" : ""} — ${service}`;
            const blurb =
              it.blurb ||
              `Professional ${service.toLowerCase()} in ${city} with Level 5 finishing for a smooth, modern ceiling.`;
            const bullets =
              Array.isArray(it.bullets) && it.bullets.length
                ? it.bullets
                : [
                    "Dust-controlled removal & HEPA sanding",
                    "Level 5 skim + primer",
                    "Premium paints, uniform sheen",
                  ];
            const cityHref =
              it.ctaHref ||
              `/locations/popcorn-ceiling-removal-${toSlug(city)}/`;
            const ctaLabel =
              it.ctaLabel || `Popcorn Ceiling Removal in ${city} →`;

            const chips = keywordVariants(service, it.city, it.nbh);

            return (
              <article
                key={String(it.src) + i}
                className="overflow-hidden border-2 border-slate-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]"
                style={{ width: tileW + "px" }}
              >
                {/* IMAGE tile */}
                <figure
                  className="relative border-b-2 border-slate-300"
                  style={{ width: tileW + "px", height: tileH + "px" }}
                  onClick={() => setActive(it)}
                  aria-label={`Open ${service} photo`}
                >
                  <img
                    src={it.src}
                    alt={it.alt || `${service} in ${city}`}
                    className="h-full w-full cursor-pointer object-cover transition duration-200 ease-out hover:brightness-110 hover:contrast-110"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                {/* PREMIUM description under image */}
                <div className="px-4 py-4">
                  <h3 className="text-[17px] font-semibold tracking-tight text-slate-900 sm:text-lg">
                    {h}
                    {it.nbh ? ` • ${it.nbh}` : ""}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate-800">
                    <strong>Popcorn ceiling removal</strong> (
                    <strong>popcorn removal</strong>) in <strong>{city}</strong>
                    {it.nbh ? ` • ${it.nbh}` : ""}. {blurb}
                  </p>

                  {/* neat check bullets */}
                  <ul className="mt-3 space-y-1.5 text-[15px] text-slate-800">
                    {bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-[2px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-amber-300 text-amber-700">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Keyword chips (SEO-visible, human-friendly) */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {chips.map((k, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[12px] text-slate-700"
                      >
                        {k}
                      </span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={cityHref}
                      className="text-[15px] font-semibold text-amber-700 underline-offset-4 hover:text-amber-800 hover:underline"
                    >
                      {ctaLabel}
                    </a>
                    <span className="text-slate-400">•</span>
                    <a
                      href="/contact#estimate"
                      className="text-[15px] font-medium text-slate-800 hover:text-slate-900"
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

      {/* MODAL — IMAGE ONLY with keyword ribbon; Close button fixed to viewport */}
      {active && (
        <div
          className={
            "fixed inset-0 z-[1000] flex items-center justify-center p-3 " +
            (backdrop === "dim" ? "bg-black/70" : "bg-transparent")
          }
          onClick={() => setActive(null)}
          aria-modal="true"
          role="dialog"
        >
          {/* image block (click inside should NOT close) */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={active.src}
                alt={
                  active.alt ||
                  `${active.service || "Popcorn Ceiling Removal"}${
                    active.city ? " in " + active.city : ""
                  }`
                }
                className="max-h-[85vh] w-auto max-w-[96vw] object-contain"
              />
              {/* keyword ribbon */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center">
                <div
                  className="mb-2 rounded px-3 py-1 text-[13px] font-semibold uppercase tracking-wide text-white"
                  style={{
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "saturate(120%) blur(1px)",
                  }}
                >
                  {active.modalKeyword ||
                    `${active.service || "Popcorn Ceiling Removal"}${
                      active.city ? " — " + active.city : ""
                    }`}
                </div>
              </div>
            </div>
          </div>

          {/* Always-visible close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            aria-label="Close"
            className="fixed z-[1010] inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/65 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            style={{
              top: "max(env(safe-area-inset-top), 12px)",
              right: "max(env(safe-area-inset-right), 12px)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
