// Next.js App Router API (server-only)
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get("placeId");
  if (!placeId)
    return NextResponse.json({ error: "placeId required" }, { status: 400 });

  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key)
    return NextResponse.json({ error: "API key missing" }, { status: 500 });

  // Places API (New) v1
  const fields = [
    "id",
    "displayName",
    "rating",
    "userRatingCount",
    "reviews",
    "location", // lat/lng for the map chip
  ].join(",");

  const url = `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&key=${key}`;
  const r = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h
  if (!r.ok) {
    const text = await r.text();
    return NextResponse.json(
      { error: "Places API error", details: text },
      { status: 502 }
    );
  }
  const data = await r.json();

  // Normalize minimal payload for the client
  const normalize = {
    name: data.displayName?.text ?? "",
    rating: data.rating ?? null,
    userRatingCount: data.userRatingCount ?? null,
    location: data.location ?? null, // { latitude, longitude }
    // reviews[] in v1 have this shape
    reviews: Array.isArray(data.reviews)
      ? data.reviews.slice(0, 3).map((rv: any) => ({
          author: rv.authorAttribution?.displayName ?? "Google user",
          profilePhotoUrl: rv.authorAttribution?.photoUri ?? "",
          rating: rv.rating ?? null,
          time: rv.relativePublishTimeDescription ?? "",
          text: rv.text?.text ?? "",
        }))
      : [],
  };

  return NextResponse.json(normalize);
}
