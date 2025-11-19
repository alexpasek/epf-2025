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

// 3 popcorn-ceiling videos for this page
const VIDEOS = [
  {
    id: "g8Zl0XlbxBo",
    title: "Ceiling Prep & Containment",
    blurb:
      "Masking, plastic, and dust control on a live popcorn removal job in the Mississauga.",
    src: "https://www.youtube.com/embed/g8Zl0XlbxBo",
  },
  {
    id: "73P8rMOy9pc",
    title: "Skim Coat & Sanding",
    blurb:
      "How we paint smooth ceiling (after removal of painted or unpainted popcorn).",
    src: "https://www.youtube.com/embed/73P8rMOy9pc",
  },
  {
    id: "nSnbyGVqbMQ",
    title: "Finished Level 5 Ceilings",
    blurb:
      "Walkthrough of finished ceilings  popcorn removal — bright, smooth and modern no dust.",
    src: "https://www.youtube.com/embed/nSnbyGVqbMQ",
  },
];

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
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Watch Our Popcorn Ceiling Removal Process
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Short real-job clips showing dust control, Level 5 skim and finished,
          bright ceilings across the GTA.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VIDEOS.map((v) => (
            <article
              key={v.id}
              className="bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col"
            >
              <div
                className="relative w-full bg-black"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={v.src}
                  title={v.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{v.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{v.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <OurWorkGallery
        title="Popcorn Ceiling Removal — Mississauga, Oakville, Burlington, Hamilton"
        description="Dust-controlled popcorn ceiling removal (painted or unpainted) with Level 5 skim, primer and two coats for a bright, uniform ceiling."
        layout={{ min: 440, gap: 16, ratio: "5/3" }}
        tileW={510}
        tileH={700}
        items={[
          // MISSISSAUGA
          {
            src: "/gallery/popcorn-ceiling-removal4.jpeg",
            alt: "Popcorn ceiling removal / popcorn removal — Mississauga (Mineola) — Level 5 smooth finish",
            city: "Mississauga",
            nbh: "Mineola",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Mississauga (Mineola)",
            blurb:
              "Local popcorn removal in Mississauga — Mineola. Full containment, HEPA sanding, Level 5 skim, primer and two coats for a bright, uniform ceiling.",
            bullets: [
              "Painted & unpainted popcorn removal",
              "Level 5 skim for ultra-smooth results",
              "Dust-controlled with HEPA extraction",
            ],
            modalKeyword: "Popcorn Ceiling Removal — Mississauga (Mineola)",
          },
          {
            src: "/gallery/popcorn-ceiling-removal.jpeg",
            alt: "Popcorn removal / ceiling smoothing — Mississauga (Port Credit) — Level 5 finish",
            city: "Mississauga",
            nbh: "Port Credit",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Removal — Mississauga (Port Credit)",
            blurb:
              "Professional acoustic texture removal in Port Credit, Mississauga. Clean masking, precise taping, Level 5 skim, and premium coatings.",
            bullets: [
              "Low-dust containment & protection",
              "Clean corners and bulkhead lines",
              "Primer + two professional topcoats",
            ],
            modalKeyword: "Popcorn Removal — Mississauga (Port Credit)",
          },
          {
            src: "/gallery/popcorn-ceiling-removal1.jpeg",
            alt: "Popcorn ceiling removal — Mississauga (Lorne Park) — painted popcorn specialist",
            city: "Mississauga",
            nbh: "Lorne Park",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Mississauga (Lorne Park)",
            blurb:
              "Painted popcorn removal in Lorne Park, Mississauga. Joint repair, Level 5 skim, and a consistent white finish without flashing.",
            bullets: [
              "Expertise with painted popcorn",
              "Crack & joint repair included",
              "Uniform matte/satin sheen",
            ],
            modalKeyword: "Popcorn Ceiling Removal — Mississauga (Lorne Park)",
          },

          // OAKVILLE
          {
            src: "/gallery/popcorn ceiling removal_4238 2 Medium.jpeg",
            alt: "Popcorn ceiling removal — Oakville (Clearview) — Level 5 skim & paint",
            city: "Oakville",
            nbh: "Clearview",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Oakville (Clearview)",
            blurb:
              "Clearview, Oakville popcorn removal with careful masking, Level 5 skim, and bright premium coatings for a clean modern ceiling.",
            bullets: [
              "Protective masking throughout",
              "Level 5 skim + primer",
              "Even, bright topcoat finish",
            ],
            modalKeyword: "Popcorn Ceiling Removal — Oakville (Clearview)",
          },
          {
            src: "/gallery/popcorn ceiling removal_4232 2 Medium.jpeg",
            alt: "Popcorn removal — Oakville (Glen Abbey) — smooth, bright ceiling",
            city: "Oakville",
            nbh: "Glen Abbey",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Removal — Oakville (Glen Abbey)",
            blurb:
              "Acoustic texture removal across main areas in Glen Abbey, Oakville. HEPA-connected sanding and Level 5 finishing.",
            bullets: [
              "Low-dust HEPA sanding",
              "Crisp lines at crown/bulkheads",
              "Primer + two coats",
            ],
            modalKeyword: "Popcorn Removal — Oakville (Glen Abbey)",
          },
          {
            src: "/gallery/popcorn ceiling removal_4234 2 Medium.jpeg",
            alt: "Popcorn ceiling removal — Oakville (River Oaks) — Level 5 smoothing",
            city: "Oakville",
            nbh: "River Oaks",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Oakville (River Oaks)",
            blurb:
              "River Oaks, Oakville texture removal and smoothing with neat cut-ins and a uniform, professional finish.",
            bullets: [
              "Flexible multi-area scheduling",
              "Neat cut-ins around fixtures",
              "Consistent, uniform sheen",
            ],
            modalKeyword: "Popcorn Ceiling Removal — Oakville (River Oaks)",
          },

          // BURLINGTON
          {
            src: "/gallery/popcorn ceiling removal_4235 2 Medium.jpeg",
            alt: "Popcorn ceiling removal — Burlington (Roseland) — Level 5 finish",
            city: "Burlington",
            nbh: "Roseland",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Burlington (Roseland)",
            blurb:
              "Roseland, Burlington stipple removal with joint correction and Level 5 skim for a bright, smooth ceiling.",
            bullets: [
              "Doorway & floor protection",
              "Joint correction + skim coat",
              "Primer and two finish coats",
            ],
            modalKeyword: "Popcorn Ceiling Removal — Burlington (Roseland)",
          },
          {
            src: "/gallery/popcorn ceiling remova3.jpeg",
            alt: "Popcorn removal — Burlington (Millcroft) — high-ceiling expertise",
            city: "Burlington",
            nbh: "Millcroft",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Removal — Burlington (Millcroft)",
            blurb:
              "Millcroft, Burlington painted popcorn removal with full containment and safe access for higher ceilings.",
            bullets: [
              "High-ceiling setup & access",
              "Painted popcorn specialists",
              "Level 5 skim & premium paint",
            ],
            modalKeyword: "Popcorn Removal — Burlington (Millcroft)",
          },
          {
            src: "/gallery/popcorn ceiling removal_4236 2 Medium.jpeg",
            alt: "Popcorn ceiling removal — Burlington (Alton Village) — modern smooth ceiling",
            city: "Burlington",
            nbh: "Alton Village",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Burlington (Alton Village)",
            blurb:
              "Alton Village, Burlington popcorn removal for a modern, smooth ceiling with crisp lines and uniform sheen.",
            bullets: [
              "Tight-space containment",
              "Crisp bulkhead edges",
              "Uniform topcoat result",
            ],
            modalKeyword:
              "Popcorn Ceiling Removal — Burlington (Alton Village)",
          },

          // HAMILTON
          {
            src: "/gallery/popcorn ceiling removal_4231 2 Medium.jpeg",
            alt: "Popcorn ceiling removal — Hamilton (Ancaster) — Level 5 smooth finish",
            city: "Hamilton",
            nbh: "Ancaster",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Hamilton (Ancaster)",
            blurb:
              "Ancaster, Hamilton heavy texture removal with crack repair and Level 5 skim for a clean, modern ceiling.",
            bullets: [
              "Crack repair & taping",
              "Level 5 skim coat",
              "Even white finish — no flashing",
            ],
            modalKeyword: "Popcorn Ceiling Removal — Hamilton (Ancaster)",
          },
          {
            src: "/gallery/popcorn ceiling removal_4240 2 Medium.jpeg",
            alt: "Popcorn removal — Hamilton (Stoney Creek) — bright smooth ceiling",
            city: "Hamilton",
            nbh: "Stoney Creek",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Removal — Hamilton (Stoney Creek)",
            blurb:
              "Stoney Creek, Hamilton painted popcorn removal with careful masking and a bright, uniform Level 5 result.",
            bullets: [
              "Painted popcorn removal",
              "HEPA sanding & clean-up",
              "Primer + two coats",
            ],
            modalKeyword: "Popcorn Removal — Hamilton (Stoney Creek)",
          },
          {
            src: "/gallery/popcorn ceiling removal_4230 2 Medium.jpeg",
            alt: "Popcorn ceiling removal — Hamilton (Dundas) — Level 5 finishing",
            city: "Hamilton",
            nbh: "Dundas",
            service: "Popcorn Ceiling Removal",
            headline: "Popcorn Ceiling Removal — Hamilton (Dundas)",
            blurb:
              "Dundas, Hamilton ceiling smoothing to Level 5 with neat cut-ins, consistent sheen, and professional coatings.",
            bullets: [
              "Neat cut-ins at transitions",
              "Level 5 skim throughout",
              "Uniform matte/satin finish",
            ],
            modalKeyword: "Popcorn Ceiling Removal — Hamilton (Dundas)",
          },
        ]}
        business={{
          name: "EPF Pro Services",
          url: "https://epfproservices.com",
          phone: "+1-647-xxx-xxxx",
        }}
        areas={["Mississauga", "Oakville", "Burlington", "Hamilton"]}
      />

      {/* VIDEO STRIP — right after the gallery description */}
    </main>
  );
}
