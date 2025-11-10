"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function stars(n = 0) {
  const full = Math.round(n ?? 0);
  return Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={
        i < full
          ? "fill-amber-400 text-amber-400"
          : "fill-gray-200 text-gray-200"
      }
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ));
}

function ReviewCard({ r }) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        {r.profilePhotoUrl ? (
          <img
            src={r.profilePhotoUrl}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        )}
        <div className="text-sm">
          <div className="font-medium text-gray-900">{r.author}</div>
          <div className="flex items-center gap-1">
            {stars(r.rating)}
            <span className="text-xs text-gray-500">{r.time}</span>
          </div>
        </div>
      </div>
      {r.text && (
        <p className="mt-3 text-[15px] text-gray-700 leading-relaxed">
          {r.text}
        </p>
      )}
    </div>
  );
}

function MapChip({ lat, lng, placeId }) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_BROWS_KEY;
  if (!lat || !lng || !key) return null;
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=640x220&scale=2&markers=color:red|${lat},${lng}&key=${key}`;
  const mapsLink = `https://www.google.com/maps?place_id=${placeId}`;
  return (
    <a
      href={mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden border border-black/10 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/30"
    >
      <img src={url} alt="Map" className="w-full h-auto" />
    </a>
  );
}

function LocationReviews({ title, placeId }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/api/places?placeId=${encodeURIComponent(placeId)}`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, [placeId]);

  const writeUrl = `https://search.google.com/local/writereview?placeid=${placeId}`; // official pattern
  const mapsUrl = `https://www.google.com/maps?place_id=${placeId}`;

  return (
    <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-[0_24px_60px_-30px_rgba(0,0,0,.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-gray-900">{title}</h4>
          {data ? (
            <div className="mt-1 flex items-center gap-3">
              <div className="flex">{stars(data.rating)}</div>
              <div className="text-sm text-gray-700">
                <span className="font-semibold">{data.rating?.toFixed(1)}</span>{" "}
                ({data.userRatingCount} reviews)
              </div>
            </div>
          ) : (
            <div className="mt-1 h-5 w-44 bg-gray-100 rounded" />
          )}
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
            className="btn-outline"
          >
            View on Google
          </a>
        </div>
      </div>

      {data?.location && (
        <div className="mt-4">
          <MapChip
            lat={data.location.latitude}
            lng={data.location.longitude}
            placeId={placeId}
          />
        </div>
      )}

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {data?.reviews?.length
          ? data.reviews.map((r, i) => <ReviewCard key={i} r={r} />)
          : Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-32 rounded-xl bg-gray-50 border border-gray-200"
              />
            ))}
      </div>
    </div>
  );
}

export default function GoogleReviewsWall() {
  const places = [
    {
      title: "Mississauga — Popcorn Ceiling Removal",
      placeId: process.env.NEXT_PUBLIC_GBP_MISS ?? "",
    },
    {
      title: "Hamilton / Stoney Creek — Popcorn Ceiling Removal",
      placeId: process.env.NEXT_PUBLIC_GBP_HAM ?? "",
    },
  ];
  return (
    <section id="google-reviews" className="container-x py-10">
      <h3 className="text-2xl font-semibold">What clients say on Google</h3>
      <p className="text-gray-600 mt-1">
        Real reviews pulled directly from our Google Business Profiles.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {places.map((p) => (
          <LocationReviews
            key={p.placeId}
            title={p.title}
            placeId={p.placeId}
          />
        ))}
      </div>
    </section>
  );
}
