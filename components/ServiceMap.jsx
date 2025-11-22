"use client";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "16px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
};

const center = { lat: 43.6532, lng: -79.3832 }; // Toronto center (example)

const locations = [
  {
    id: 1,
    name: "Popcorn Ceiling Removal – Mississauga",
    city: "Mississauga, ON",
    position: { lat: 43.589, lng: -79.6441 },
    photo: "/projects/mississauga-popcorn.webp",
  },
  {
    id: 2,
    name: "Drywall Finishing – Oakville",
    city: "Oakville, ON",
    position: { lat: 43.4675, lng: -79.6877 },
    photo: "/projects/oakville-drywall.webp",
  },
  {
    id: 3,
    name: "Interior Painting – Burlington",
    city: "Burlington, ON",
    position: { lat: 43.3255, lng: -79.799 },
    photo: "/projects/burlington-paint.webp",
  },
];

export default function ServiceMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Our Completed Projects Across the GTA
      </h2>

      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        preventGoogleFontsLoading={true}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
              { featureType: "poi", stylers: [{ visibility: "off" }] },
              {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
        >
          {locations.map((loc) => (
            <Marker
              key={loc.id}
              position={loc.position}
              onClick={() => setSelected(loc)}
              icon={{
                url: "/map-dot.svg", // your custom red dot or brand pin
                scaledSize: new window.google.maps.Size(24, 24),
              }}
            />
          ))}

          {selected && (
            <InfoWindow
              position={selected.position}
              onCloseClick={() => setSelected(null)}
            >
              <div className="p-2">
                <img
                  src={selected.photo}
                  alt={`${selected.name} project`}
                  className="w-40 h-24 rounded mb-2 object-cover"
                />
                <h3 className="font-semibold">{selected.name}</h3>
                <p className="text-gray-600 text-sm">{selected.city}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
