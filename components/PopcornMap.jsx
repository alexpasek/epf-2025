"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo, useRef, useCallback, useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "420px",
  borderRadius: "20px",
  boxShadow: "0 8px 28px rgba(0,0,0,0.1)",
};

const SILVER_CITY = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  // keep only big city labels
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
];

const TARGET_ZOOM = 10; // tweak 11–13 to taste

export default function PopcornMap({ points = [] }) {
  const mapRef = useRef(null);
  const [iconUrl, setIconUrl] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "gmap-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (!isLoaded) return;
    let cancelled = false;

    const FALLBACK_SVG =
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24'>
           <path fill='#e11d48' d='M12 3 2 12h3v8h6v-6h2v6h6v-8h3z'/>
         </svg>`
      );

    const candidates = ["/icons/house-red.png", "/icons/ouse-red.png"];

    (async () => {
      for (const url of candidates) {
        try {
          await imgReady(url);
          if (!cancelled) return setIconUrl(url);
        } catch {}
      }
      if (!cancelled) setIconUrl(FALLBACK_SVG);
    })();

    return () => {
      cancelled = true;
    };
  }, [isLoaded]);

  const options = useMemo(
    () => ({
      styles: SILVER_CITY,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: true,
      scrollwheel: true,
      gestureHandling: "greedy",
      disableDoubleClickZoom: true,
    }),
    []
  );

  const onLoad = useCallback(
    (map) => {
      mapRef.current = map;
      if (!points.length || !window.google) return;
      const b = new window.google.maps.LatLngBounds();
      points.forEach((p) => b.extend({ lat: p.lat, lng: p.lng }));
      map.fitBounds(b, 40);
      const once = map.addListener("idle", () => {
        if (map.getZoom() < TARGET_ZOOM) map.setZoom(TARGET_ZOOM);
        window.google.maps.event.removeListener(once);
      });
    },
    [points]
  );

  const pinIcon = useMemo(() => {
    if (!isLoaded || !iconUrl || !window.google) return undefined;
    return {
      url: iconUrl,
      scaledSize: new window.google.maps.Size(28, 28),
      anchor: new window.google.maps.Point(14, 28),
    };
  }, [isLoaded, iconUrl]);

  if (!isLoaded || !pinIcon) {
    return (
      <div className="w-full h-[520px] rounded-[20px] bg-gray-100 animate-pulse" />
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={options}
      center={{ lat: 43.6, lng: -79.6 }}
      zoom={9}
      onLoad={onLoad}
    >
      {points.map((p) => {
        const city = slugify(p.city);
        const hood = p.nbh ? slugify(p.nbh) : null;
        const href = hood
          ? `/popcorn-ceiling-removal/${city}/${hood}`
          : `/popcorn-ceiling-removal/${city}`;

        const title =
          `Popcorn ceiling removal — ${p.city}${p.nbh ? `, ${p.nbh}` : ""}` +
          `${p.street ? ` — ${p.street}` : ""}`;

        return (
          <Marker
            key={p.id}
            position={{ lat: p.lat, lng: p.lng }}
            icon={pinIcon}
            title={title} // keyword tooltip
            onClick={() => (window.location.href = href)} // direct nav
            zIndex={2}
          />
        );
      })}
    </GoogleMap>
  );
}

function imgReady(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
