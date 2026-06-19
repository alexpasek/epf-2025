"use client";

import { useEffect, useState } from "react";

function normalizeGoogleReviews(items = []) {
  return items
    .filter((item) => item && typeof item.text === "string" && item.text.trim())
    .slice(0, 3)
    .map((item, idx) => ({
      id: `${item.author_name || "google-user"}-${idx}`,
      rating: typeof item.rating === "number" ? item.rating : 5,
      quote: item.text.trim(),
      name: item.author_name || "Google User",
      area: "Google Review",
      meta: item.relative_time_description || "Verified Google review",
    }));
}

function normalizeFallbackReviews(items = []) {
  return items.slice(0, 3).map((item, idx) => ({
    id: `${item.name || "reviewer"}-${idx}`,
    rating: 5,
    quote: item.quote,
    name: item.name || "Customer",
    area: item.area || "Local Review",
    meta: "Recent customer review",
  }));
}

export default function LandingGoogleReviewCards({ fallbackReviews = [] }) {
  const [data, setData] = useState({
    ok: false,
    reviews: [],
    rating: null,
    count: 0,
    mapsUrl: "",
  });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const response = await fetch("/api/google-reviews", { cache: "no-store" });
        const payload = await response.json();
        if (!cancelled) {
          setData({
            ok: !!payload?.ok,
            reviews: Array.isArray(payload?.reviews) ? payload.reviews : [],
            rating: typeof payload?.rating === "number" ? payload.rating : null,
            count: typeof payload?.count === "number" ? payload.count : 0,
            mapsUrl: payload?.mapsUrl || "",
          });
        }
      } catch {
        if (!cancelled) {
          setData((prev) => ({ ...prev, ok: false }));
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const googleCards = data.ok ? normalizeGoogleReviews(data.reviews) : [];
  const cards = googleCards.length ? googleCards : normalizeFallbackReviews(fallbackReviews);

  return (
    <div>
      {data.ok && data.rating ? (
        <p className="mt-2 text-center text-base text-[#325046] md:text-lg">
          {data.rating.toFixed(1)}★ on Google ({data.count}+ reviews)
        </p>
      ) : (
        <p className="mt-2 text-center text-base text-[#325046] md:text-lg">
          Recent customer feedback from completed popcorn ceiling projects.
        </p>
      )}

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {cards.map((review) => (
          <article
            key={review.id}
            className="rounded-2xl border border-[#c8d0c5] bg-white p-5 shadow-sm"
          >
            <p className="text-[#e4b12d]">★★★★★</p>
            <p className="mt-3 text-[#32433d]">"{review.quote}"</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[#0f4f3a]">
              {review.name} | {review.area}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#5d726b]">
              {review.meta}
            </p>
          </article>
        ))}
      </div>

      {data.mapsUrl ? (
        <div className="mt-5 text-center">
          <a
            href={data.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-[#2c6754] bg-[#145640] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white"
          >
            Read More Google Reviews
          </a>
        </div>
      ) : null}
    </div>
  );
}
