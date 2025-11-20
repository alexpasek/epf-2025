"use client";

import { useEffect, useRef, useState } from "react";

function Stars({ value = 5, size = 14 }) {
  const full = Math.round(value ?? 5);
  return (
    <span
      aria-label={`${value} out of 5`}
      className="inline-flex"
      style={{ gap: 2 }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          className={i < full ? "text-amber-500" : "text-gray-300"}
        >
          <path
            fill="currentColor"
            d="M10 1.5l2.8 5.64 6.22.9-4.5 4.39 1.06 6.17L10 15.9l-5.58 2.94 1.06-6.17-4.5-4.39 6.22-.9L10 1.5z"
          />
        </svg>
      ))}
    </span>
  );
}

export default function GoogleReviews({ className = "" }) {
  const [data, setData] = useState({
    ok: false,
    reviews: [],
    rating: 5,
    count: 0,
    mapsUrl: "",
  });
  const [active, setActive] = useState(null);
  const stripRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch("/api/google-reviews", { cache: "no-store" });
        const j = await r.json();
        if (!cancelled) setData(j);
      } catch (e) {
        if (!cancelled) setData((d) => ({ ...d, ok: false }));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const { ok, reviews = [], rating = 5, count = 0, mapsUrl } = data;

  const scroll = (dir) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(680, el.clientWidth * 0.9),
      behavior: "smooth",
    });
  };

  // Build SEO JSON-LD when we have data
  const jsonLd = ok
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "/#business",
            name: "EPF Pro Services",
            url: "https://epfproservices.com/",
            telephone: "+1-647-923-6784",
            areaServed: [
              "Mississauga",
              "Toronto",
              "Oakville",
              "Burlington",
              "Hamilton",
              "Milton",
              "Etobicoke",
              "Grimsby",
              "St. Catharines",
            ],
            description:
              "Popcorn ceiling removal, Level 5 drywall finishing, and interior painting trusted by GTA homeowners.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: Number(rating).toFixed(1),
              reviewCount: count,
              bestRating: 5,
              worstRating: 1,
            },
          },
          ...reviews.slice(0, 4).map((r) => ({
            "@type": "Review",
            author: r?.author_name
              ? { "@type": "Person", name: r.author_name }
              : undefined,
            reviewBody: (r?.text || "").slice(0, 800),
            reviewRating: {
              "@type": "Rating",
              ratingValue: r?.rating || rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        ],
      }
    : null;

  // If API missing keys or failed, render nothing (no dev text in prod)
  if (!ok || !reviews.length) return null;

  return (
    <section
      id="google-reviews"
      aria-label="Customer reviews"
      className={["py-12 md:py-16 bg-slate-50", className].join(" ")}
    >
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}

      <div className="container-x">
        {/* Header */}
        <div className="mx-auto mb-6 max-w-5xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Real Reviews from GTA Homeowners
          </h2>
          <p className="mt-1 text-base text-slate-600">
            {Number(rating).toFixed(1)}★ on Google ({count}+ reviews) — popcorn
            ceiling removal, drywall finishing & interior painting across
            Mississauga, Oakville, Burlington, Hamilton, Milton, Etobicoke,
            Grimsby, St. Catharines, and Toronto.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/brand/google-g.svg"
              alt="Google"
              width="22"
              height="22"
              className="opacity-90"
            />
            <Stars value={rating} />
            <span className="text-sm text-slate-700">
              Verified feedback — quality, cleanliness, and on-time completion.
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="rounded-full border border-slate-200 bg-white p-2 shadow-sm hover:bg-slate-50"
              aria-label="Previous reviews"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="rounded-full border border-slate-200 bg-white p-2 shadow-sm hover:bg-slate-50"
              aria-label="Next reviews"
            >
              ›
            </button>
          </div>
        </div>

        {/* ONE horizontal line of review CARDS */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent" />

          <ul
            ref={stripRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth whitespace-nowrap [scrollbar-width:none] px-1"
            style={{ gap: 16 }}
          >
            {reviews.map((r, idx) => (
              <li key={idx} className="snap-start">
                <article
                  className="inline-flex w-[320px] cursor-pointer select-none flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md"
                  aria-label={`Review by ${r.author_name || "Google user"}`}
                  onClick={() => setActive(r)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={r.profile_photo_url || "/avatars/user-circle.svg"}
                      alt=""
                      width="40"
                      height="40"
                      className="rounded-full border border-black/5"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-medium text-slate-900">
                        {r.author_name || "Google user"}
                      </div>
                      <div className="text-xs text-slate-500">
                        {r.relative_time_description || ""}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Stars value={r.rating} />
                  </div>
                  {r.text ? (
                    <p className="mt-2 line-clamp-5 text-sm text-slate-700">
                      {r.text.replace(/\s+/g, " ").trim()}
                    </p>
                  ) : null}
                  <span className="mt-2 text-xs text-amber-600">
                    Click to read full review
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={mapsUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View more Google reviews
          </a>
          <a
            href={`https://search.google.com/local/writereview?placeid=${
              process.GBP_PLACE_ID || ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Write a review
          </a>
          <a href="/contact#estimate" className="btn-cta">
            Free estimate
          </a>
        </div>

        {/* SEO paragraph (visible copy) */}
        <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-slate-600">
          EPF Pro Services provides dust-controlled{" "}
          <strong>popcorn ceiling removal</strong>, smooth
          <strong> Level 5 drywall finishing</strong>, and meticulous{" "}
          <strong>interior painting</strong>. Homeowners across the{" "}
          <strong>Greater Toronto Area</strong> choose us for clean prep,
          careful protection, reliable timelines, and beautiful results in
          living rooms, kitchens, hallways, bedrooms, and basements.
        </p>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl bg-white p-6 text-left shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={active.profile_photo_url || "/avatars/user-circle.svg"}
                  alt=""
                  width="44"
                  height="44"
                  className="rounded-full border border-black/5"
                />
                <div>
                  <div className="font-semibold text-slate-900">
                    {active.author_name || "Google user"}
                  </div>
                  <div className="text-xs text-slate-500">
                    {active.relative_time_description || ""}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="ml-2 rounded-full p-1 text-slate-500 hover:bg-slate-100"
                aria-label="Close review"
              >
                ✕
              </button>
            </div>
            <div className="mt-3">
              <Stars value={active.rating} />
            </div>
            <p className="mt-3 whitespace-pre-line text-slate-800">
              {active.text}
            </p>
            <div className="mt-4 text-right text-sm">
              <a
                href={mapsUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amber-600 hover:text-amber-700"
              >
                View on Google →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
