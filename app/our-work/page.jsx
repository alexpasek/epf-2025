import PopcornMap from "@/components/PopcornMap";
import OurWorkGallery from "@/components/OurWorkGallery";
// ---- helpers ----
function jitterAround(lat, lng, meters = 120) {
  const latOff = (meters / 111320) * (Math.random() - 0.5) * 2;
  const lngOff =
    (meters / (111320 * Math.cos((lat * Math.PI) / 180))) *
    (Math.random() - 0.5) *
    2;
  return { lat: lat + latOff, lng: lng + lngOff };
}
const STREETS = [
  "Maple Ave",
  "Queen St",
  "Church St",
  "Ridgeway Dr",
  "Bloor St",
  "Dundas St",
  "Sheridan Way",
  "Lakeshore Rd",
  "Cawthra Rd",
  "Burnhamthorpe Rd",
  "Truscott Dr",
  "Royal Windsor Dr",
];

// per-city seeds (neighbourhood center points)
const CITY_DATA = [
  {
    city: "Mississauga",
    slug: "mississauga",
    hoods: [
      { nbh: "Mineola", lat: 43.576, lng: -79.588 },
      { nbh: "Port Credit", lat: 43.551, lng: -79.585 },
      { nbh: "Lorne Park", lat: 43.528, lng: -79.623 },
      { nbh: "Clarkson", lat: 43.508, lng: -79.639 },
      { nbh: "Erin Mills", lat: 43.514, lng: -79.682 },
      { nbh: "Meadowvale", lat: 43.595, lng: -79.778 },
      { nbh: "Streetsville", lat: 43.578, lng: -79.712 },
      { nbh: "City Centre", lat: 43.593, lng: -79.643 },
    ],
  },
  {
    city: "Oakville",
    slug: "oakville",
    hoods: [
      { nbh: "Clearview", lat: 43.489, lng: -79.657 },
      { nbh: "Glen Abbey", lat: 43.445, lng: -79.723 },
      { nbh: "Bronte", lat: 43.402, lng: -79.708 },
      { nbh: "River Oaks", lat: 43.462, lng: -79.72 },
      { nbh: "Old Oakville", lat: 43.447, lng: -79.667 },
      { nbh: "West Oak Trails", lat: 43.446, lng: -79.745 },
      { nbh: "Joshua Creek", lat: 43.485, lng: -79.672 },
      { nbh: "Kerr Village", lat: 43.445, lng: -79.679 },
    ],
  },
  {
    city: "Burlington",
    slug: "burlington",
    hoods: [
      { nbh: "Aldershot", lat: 43.301, lng: -79.859 },
      { nbh: "Tyandaga", lat: 43.346, lng: -79.839 },
      { nbh: "Brant Hills", lat: 43.37, lng: -79.819 },
      { nbh: "Headon Forest", lat: 43.379, lng: -79.814 },
      { nbh: "Palmer", lat: 43.369, lng: -79.793 },
      { nbh: "Shoreacres", lat: 43.349, lng: -79.748 },
      { nbh: "Roseland", lat: 43.336, lng: -79.789 },
      { nbh: "The Orchard", lat: 43.394, lng: -79.761 },
    ],
  },
  {
    city: "Hamilton",
    slug: "hamilton",
    hoods: [
      { nbh: "Durand", lat: 43.251, lng: -79.878 },
      { nbh: "Kirkendall", lat: 43.259, lng: -79.887 },
      { nbh: "Stoney Creek", lat: 43.218, lng: -79.703 },
      { nbh: "Ancaster", lat: 43.226, lng: -79.976 },
      { nbh: "Westdale", lat: 43.262, lng: -79.922 },
      { nbh: "Binbrook", lat: 43.128, lng: -79.816 },
      { nbh: "Dundas", lat: 43.266, lng: -79.952 },
      { nbh: "Hamilton Mountain", lat: 43.219, lng: -79.864 },
    ],
  },
  {
    city: "Milton",
    slug: "milton",
    hoods: [
      { nbh: "Dempsey", lat: 43.522, lng: -79.843 },
      { nbh: "Clarke", lat: 43.514, lng: -79.846 },
      { nbh: "Beaty", lat: 43.515, lng: -79.832 },
      { nbh: "Coates", lat: 43.506, lng: -79.856 },
      { nbh: "Scott", lat: 43.505, lng: -79.894 },
      { nbh: "Willmott", lat: 43.498, lng: -79.878 },
      { nbh: "Bronte Meadows", lat: 43.503, lng: -79.873 },
      { nbh: "Old Milton", lat: 43.515, lng: -79.882 },
    ],
  },
  {
    city: "Etobicoke",
    slug: "etobicoke",
    hoods: [
      { nbh: "The Kingsway", lat: 43.652, lng: -79.513 },
      { nbh: "Islington-City Centre", lat: 43.643, lng: -79.533 },
      { nbh: "Mimico", lat: 43.623, lng: -79.477 },
      { nbh: "New Toronto", lat: 43.605, lng: -79.501 },
      { nbh: "Long Branch", lat: 43.594, lng: -79.543 },
      { nbh: "Humber Bay Shores", lat: 43.63, lng: -79.473 },
      { nbh: "Markland Wood", lat: 43.634, lng: -79.582 },
      { nbh: "Rexdale", lat: 43.716, lng: -79.563 },
    ],
  },
];

// generate ~8 houses per neighbourhood (~64 per city)
function buildPoints(cities = CITY_DATA, perHood = 8) {
  let id = 1;
  const out = [];
  for (const c of cities) {
    for (const h of c.hoods) {
      for (let i = 0; i < perHood; i++) {
        const { lat, lng } = jitterAround(h.lat, h.lng, 130); // ~130m spread
        const street = STREETS[(id + i) % STREETS.length];
        out.push({
          id: `p-${id++}`,
          city: c.city,
          nbh: h.nbh,
          street,
          lat,
          lng,
        });
      }
    }
  }
  return out;
}

const POINTS = buildPoints(CITY_DATA, 8); // adjust 6–10 to control density

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        Popcorn Ceiling Removal — GTA Coverage Map
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Click any house to open the service page for that neighbourhood.
      </p>
      <PopcornMap points={POINTS} />
      import OurWorkGallery from "@/components/OurWorkGallery";
      <OurWorkGallery
        items={[
          {
            src: "/gallery/etobicoke-living-room-pro-pass.jpg",
            alt: "Popcorn ceiling removal in Etobicoke — Pro Pass Level 5 smooth finish",
            city: "Etobicoke",
            service: "Popcorn Ceiling Removal (Pro Pass)",
          },
          {
            src: "/gallery/mississauga-livingroom-after.jpg",
            alt: "Popcorn ceiling removal in Mississauga — bright white ceiling, clean lines",
            city: "Mississauga",
            service: "Popcorn Ceiling Removal",
          },
        ]}
        tileW={520}
        tileH={540}
        gap={16}
        backdrop="none"
        // title="Our Work — Popcorn Ceiling Removal"
        // description="Two bright GTA projects with Level 5 smooth finishes."
      />
    </main>
  );
}

