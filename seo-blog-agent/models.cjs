const STATUSES = new Set([
  "researching",
  "keywords_ready",
  "outline_ready",
  "draft_ready",
  "needs_approval",
  "approved",
  "sent_to_website",
  "published",
  "failed",
]);

const SERVICES = {
  popcorn: {
    label: "Popcorn ceiling removal",
    servicePage: "/services/popcorn-ceiling-removal/",
    image: "/services/popcorn-ceiling-removal/1.webp",
    cluster: "Popcorn ceiling removal",
  },
  drywall_repair: {
    label: "Drywall repair",
    servicePage: "/services/drywall-repair/",
    image: "/gallery/drywall-repair/drywall-repair-service00001.webp",
    cluster: "Drywall repair",
  },
  drywall_installation: {
    label: "Drywall installation",
    servicePage: "/services/drywall-installation/",
    image: "/gallery/drywall-installation/drywall-installation-hero.webp",
    cluster: "Drywall installation",
  },
  painting: {
    label: "Interior painting",
    servicePage: "/services/interior-painting/",
    image: "/services/painting/1.webp",
    cluster: "Interior painting",
  },
  wallpaper: {
    label: "Wallpaper removal",
    servicePage: "/services/wallpaper-removal/",
    image: "/services/wallpaper-removal/1.webp",
    cluster: "Wallpaper removal",
  },
  baseboard: {
    label: "Baseboard installation",
    servicePage: "/services/baseboard-installation/",
    image: "/gallery/baseboard-installation/baseboard-installation00001.jpg",
    cluster: "Baseboard installation",
  },
};

const CITY_SLUGS = {
  mississauga: "Mississauga",
  toronto: "Toronto",
  oakville: "Oakville",
  burlington: "Burlington",
  hamilton: "Hamilton",
  milton: "Milton",
  etobicoke: "Etobicoke",
  "north-york": "North York",
  grimsby: "Grimsby",
  "st-catharines": "St. Catharines",
  ancaster: "Ancaster",
};

function serviceCityPath(serviceKey, city) {
  const slug = citySlug(city);
  if (!slug || slug === "gta") return SERVICES[serviceKey].servicePage;
  if (serviceKey === "popcorn") return `/popcorn-ceiling-removal/${slug}/`;
  if (serviceKey === "drywall_repair") return `/services/drywall-repair/${slug}/`;
  if (serviceKey === "drywall_installation") return `/services/drywall-installation/${slug}/`;
  if (serviceKey === "baseboard") return `/services/baseboard-installation/${slug}/`;
  return SERVICES[serviceKey].servicePage;
}

function nowIso() {
  return new Date().toISOString();
}

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function makeId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function normalizeService(service) {
  const key = slugify(service).replace(/-/g, "_");
  if (SERVICES[key]) return key;
  const lower = String(service || "").toLowerCase();
  if (lower.includes("popcorn") || lower.includes("ceiling")) return "popcorn";
  if (lower.includes("repair")) return "drywall_repair";
  if (lower.includes("drywall")) return "drywall_installation";
  if (lower.includes("paint")) return "painting";
  if (lower.includes("wallpaper")) return "wallpaper";
  if (lower.includes("baseboard") || lower.includes("trim")) return "baseboard";
  return "popcorn";
}

function citySlug(city) {
  return slugify(city);
}

function cityLabel(city) {
  const slug = citySlug(city);
  return CITY_SLUGS[slug] || String(city || "").trim() || "GTA";
}

function assertStatus(status) {
  if (!STATUSES.has(status)) throw new Error(`Invalid status: ${status}`);
  return status;
}

module.exports = {
  STATUSES,
  SERVICES,
  CITY_SLUGS,
  nowIso,
  todayDate,
  makeId,
  slugify,
  normalizeService,
  citySlug,
  cityLabel,
  serviceCityPath,
  assertStatus,
};
