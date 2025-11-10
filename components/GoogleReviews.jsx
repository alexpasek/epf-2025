// components/GoogleReviews.jsx
// Server component: pulls real Google reviews via Places Details API
// Env needed: GOOGLE_MAPS_API_KEY, GBP_PLACE_ID

export const revalidate = 14400; // cache 4h on the server

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

export default async function GoogleReviews({ limit = 6, className = "" }) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId =
    process.env.GBP_PLACE_ID || process.env.NEXT_PUBLIC_GBP_PLACE_ID;

  if (!apiKey || !placeId) {
    return (
      <section className={["container-x", className].join(" ")}>
        <div className="card p-6 bg-white">
          <h3 className="text-xl font-semibold">Google reviews</h3>
          <p className="mt-2 text-gray-700">
            Add <code>GOOGLE_MAPS_API_KEY</code> and <code>GBP_PLACE_ID</code>{" "}
            to <code>.env.local</code> to show live reviews.
          </p>
        </div>
      </section>
    );
  }

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  );
  url.search = new URLSearchParams({
    place_id: placeId,
    fields: "rating,user_ratings_total,reviews,url",
    reviews_sort: "newest",
    key: apiKey,
  }).toString();

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  const result = data?.result || {};
  const reviews = (result.reviews || []).slice(0, limit);
  const rating =
    result.rating ||
    (reviews.length
      ? reviews.reduce((a, r) => a + (r.rating || 0), 0) / reviews.length
      : 5);
  const count = result.user_ratings_total || reviews.length || 0;

  const writeUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
  const mapsUrl =
    result.url || `https://www.google.com/maps/place/?q=place_id:${placeId}`;

  return (
    <section
      id="google-reviews"
      className={["mt-10 md:mt-16 scroll-mt-24", className].join(" ")}
    >
      {/* JSON-LD to attach aggregateRating to your LocalBusiness @id */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "/#business",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: rating,
                  reviewCount: count,
                  bestRating: 5,
                  worstRating: 1,
                },
              },
            ],
          }),
        }}
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
            <h3 className="text-xl font-semibold">Google reviews</h3>
            <div className="flex items-center gap-2">
              <Stars value={rating} />
              <span className="text-sm text-gray-700">
                {Number(rating).toFixed(1)} ({count})
              </span>
            </div>
          </div>

          <div className="flex gap-2">
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
              See all on Google
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    r.profile_photo_url ||
                    "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
                  }
                  alt=""
                  width="40"
                  height="40"
                  className="rounded-full border border-black/5"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-medium text-gray-900">
                    {r.author_name || "Google user"}
                  </div>
                  <div className="text-xs text-gray-500">
                    {r.relative_time_description || ""}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Stars value={r.rating} size={14} />
              </div>
              {r.text ? (
                <p className="mt-3 text-gray-700 line-clamp-6 whitespace-pre-line">
                  {r.text}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Reviews provided by Google. Some reviews may be filtered by Google’s
          policies.
        </p>
      </div>
    </section>
  );
}
