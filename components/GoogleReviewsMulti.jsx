// components/GoogleReviewsMulti.jsx
// Server component: shows Google reviews for multiple locations.
// ENV required: GOOGLE_MAPS_API_KEY (server-side), plus your place IDs below.
// Example place IDs (update to yours):
// - Mississauga (Popcorn Ceiling Removal - EPF Pro Services):
//   ChIJLfmJDu9GK4gRBn9bVR5U1H8
// - Second location: REPLACE_WITH_YOUR_SECOND_PLACE_ID

export const revalidate = 14400; // 4h cache

function Stars({ value = 5, size = 16 }) {
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
          aria-hidden="true"
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

// Helper to fetch one place's reviews
async function fetchPlaceDetails(placeId, apiKey) {
  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  );
  url.search = new URLSearchParams({
    place_id: placeId,
    fields: "name,formatted_address,rating,user_ratings_total,reviews,url",
    reviews_sort: "newest",
    key: apiKey,
  }).toString();

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.result ?? null;
}

export default async function GoogleReviewsMulti({
  places = [
    {
      label: "Mississauga",
      placeId: "ChIJLfmJDu9GK4gRBn9bVR5U1H8",
    },
    {
      label: "Second Location",
      placeId:
        process.env.NEXT_PUBLIC_SECOND_PLACE_ID ||
        "REPLACE_WITH_YOUR_SECOND_PLACE_ID",
    },
  ],
  reviewsPerPlace = 2,
  className = "",
}) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return (
      <section className={["container-x", className].join(" ")}>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Google reviews</h3>
          <p className="mt-2 text-gray-700">
            Add <code>GOOGLE_MAPS_API_KEY</code> to <code>.env.local</code>, and
            provide your two Place IDs.
          </p>
        </div>
      </section>
    );
  }

  // fetch all places concurrently
  const results = await Promise.all(
    places.map(async (p) => {
      if (!p.placeId || p.placeId.includes("REPLACE_WITH"))
        return { ...p, data: null };
      const data = await fetchPlaceDetails(p.placeId, apiKey);
      return { ...p, data };
    })
  );

  // Build JSON-LD for multiple locations (as an ItemList of LocalBusiness with aggregateRating)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Locations",
        itemListElement: results.map((r, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "LocalBusiness",
            "@id": `/#business-${(r.data?.name || r.label)
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`,
            name: r.data?.name || r.label,
            address: r.data?.formatted_address || "",
            aggregateRating: r.data
              ? {
                  "@type": "AggregateRating",
                  ratingValue: r.data.rating,
                  reviewCount: r.data.user_ratings_total,
                  bestRating: 5,
                  worstRating: 1,
                }
              : undefined,
          },
        })),
      },
    ],
  };

  return (
    <section
      id="google-reviews-multi"
      className={["mt-10 md:mt-16 scroll-mt-24", className].join(" ")}
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/google_g_24dp.png"
              alt=""
              width="20"
              height="20"
              className="opacity-90"
            />
            <h3 className="text-xl font-semibold">
              Google reviews — our locations
            </h3>
          </div>
        </div>

        {/* Cards per location */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {results.map((r, idx) => {
            const rating = r.data?.rating ?? 0;
            const count = r.data?.user_ratings_total ?? 0;
            const reviews = (r.data?.reviews || []).slice(0, reviewsPerPlace);
            const writeUrl = r.placeId
              ? `https://search.google.com/local/writereview?placeid=${r.placeId}`
              : "#";
            const mapsUrl =
              r.data?.url ||
              (r.placeId
                ? `https://www.google.com/maps/place/?q=place_id:${r.placeId}`
                : "#");

            return (
              <article
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-gray-500">{r.label}</div>
                    <h4 className="text-lg font-semibold">
                      {r.data?.name || "Location"}
                    </h4>
                    {r.data?.formatted_address ? (
                      <div className="text-sm text-gray-600">
                        {r.data.formatted_address}
                      </div>
                    ) : null}
                    <div className="mt-2 flex items-center gap-2">
                      <Stars value={rating} />
                      {count ? (
                        <span className="text-sm text-gray-700">
                          {Number(rating).toFixed(1)} ({count})
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <a
                      href={writeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta"
                    >
                      Write a review
                    </a>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>

                {/* Reviews */}
                <div className="mt-4 grid gap-3">
                  {reviews.length ? (
                    reviews.map((rv, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-gray-200 p-3"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={
                              rv.profile_photo_url ||
                              "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
                            }
                            alt=""
                            width="26"
                            height="26"
                            className="rounded-full border border-black/5"
                            referrerPolicy="no-referrer"
                          />
                          <div className="text-sm font-medium text-gray-900">
                            {rv.author_name || "Google user"}
                          </div>
                          <Stars value={rv.rating} size={14} />
                          <div className="ml-auto text-xs text-gray-500">
                            {rv.relative_time_description || ""}
                          </div>
                        </div>
                        {rv.text ? (
                          <p className="mt-2 text-sm text-gray-700 line-clamp-5 whitespace-pre-line">
                            {rv.text}
                          </p>
                        ) : null}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">
                      No recent reviews found.
                    </p>
                  )}
                </div>

                {/* Mini map (no API key exposed) */}
                {r.placeId ? (
                  <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                    <iframe
                      title={`Map for ${r.data?.name || r.label}`}
                      src={`https://www.google.com/maps?q=place_id:${r.placeId}&output=embed`}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : null}

                <p className="mt-2 text-[11px] text-gray-500">
                  Reviews provided by Google. Some reviews may be filtered by
                  Google’s policies.
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
