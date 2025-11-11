// app/api/google-reviews/route.js
export const revalidate = 14400; // 4h
// Optional (often good on Cloudflare Pages):
// export const runtime = "edge";
// export const dynamic = "force-dynamic";

export async function GET() {
    const apiKey =
        process.env.GOOGLE_MAPS_API_KEY ||
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const placeId =
        process.env.GBP_PLACE_ID || process.env.NEXT_PUBLIC_GBP_PLACE_ID;

    const json = (obj, init = {}) =>
        new Response(JSON.stringify(obj), {
            ...init,
            headers: {
                "content-type": "application/json",
                ...(init.headers || {}),
            },
        });

    if (!apiKey || !placeId) {
        return json({ ok: false, error: "Missing GOOGLE_MAPS_API_KEY or GBP_PLACE_ID" }, { status: 200, headers: { "Cache-Control": "public, max-age=600" } });
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

    try {
        const r = await fetch(url);
        if (!r.ok) throw new Error("Google response not OK");

        const data = await r.json();
        const result = data && data.result ? data.result : {};
        const reviews = Array.isArray(result.reviews) ? result.reviews : [];

        // rating
        let rating = 5;
        if (typeof result.rating === "number") {
            rating = result.rating;
        } else if (reviews.length > 0) {
            let sum = 0;
            for (let i = 0; i < reviews.length; i++) {
                const rv = reviews[i];
                sum += rv && typeof rv.rating === "number" ? rv.rating : 0;
            }
            rating = sum / reviews.length;
        }

        // count
        const count =
            typeof result.user_ratings_total === "number" ?
            result.user_ratings_total :
            reviews.length;

        return json({ ok: true, rating, count, mapsUrl: result.url, reviews }, {
            headers: {
                "Cache-Control": "public, s-maxage=14400, stale-while-revalidate=86400",
            },
        });
    } catch (e) {
        const message =
            e && typeof e.message === "string" ? e.message : "Fetch error";
        return json({ ok: false, error: message }, { status: 200, headers: { "Cache-Control": "public, max-age=600" } });
    }
}