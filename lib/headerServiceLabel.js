// Keep the logo as the brand; the adjacent text describes the current service.
const serviceLabels = {
  "drywall-installation": "Drywall Installer",
  "drywall-contractor": "Drywall Contractor",
  "drywall-repair": "Drywall Repair",
  "garage-drywall-repair": "Garage Drywall Repair",
  "skylight-drywall-repair": "Skylight Drywall Repair",
  "popcorn-ceiling-removal": "Popcorn Ceiling Removal",
  "wallpaper-removal": "Wallpaper Removal",
  "interior-painting": "Interior Painting",
  "house-painter": "House Painter",
  "baseboard-installation": "Baseboard Installation",
};

export function headerServiceLabel(pathname = "") {
  const parts = pathname.toLowerCase().split("/").filter(Boolean);
  // Service/city pages have an explicit owner; do not infer it from city names.
  if (parts[0] === "services" && serviceLabels[parts[1]]) return serviceLabels[parts[1]];
  if (parts.some(part => part === "popcorn" || part === "popcorn-ceiling-removal")) return "Popcorn Ceiling Removal";
  if (parts[0] === "locations" && parts[1]?.startsWith("drywall-repair")) return "Drywall Repair";
  if (parts[0] === "blog" && parts[1]) {
    const topic = parts[1];
    if (/garage/.test(topic)) return "Garage Drywall Repair";
    if (/skylight|cathedral/.test(topic)) return "Skylight Drywall Repair";
    if (/popcorn|stucco/.test(topic)) return "Popcorn Ceiling Removal";
    if (/wallpaper/.test(topic)) return "Wallpaper Removal";
    if (/baseboard/.test(topic)) return "Baseboard Installation";
    if (/drywall/.test(topic)) {
      if (/repair|patch|crack|hole|humidity/.test(topic)) return "Drywall Repair";
      if (/contractor/.test(topic)) return "Drywall Contractor";
      if (/taping|mudding/.test(topic)) return "Drywall Taping & Mudding";
      if (/level-?[45]|finish|skim/.test(topic) && !/install/.test(topic)) return "Drywall Finishing";
      return "Drywall Installer";
    }
    if (/ceiling-rebuild/.test(topic)) return "Drywall Installer";
    if (/paint/.test(topic)) return "Interior Painting";
    if (/skim|smooth-ceiling/.test(topic)) return "Smooth Ceiling Finishing";
    if (/ceiling.*(?:repair|crack|leak)/.test(topic)) return "Ceiling Repair";
    return "Popcorn Ceiling Removal";
  }
  if (parts.length === 0) return "Popcorn Ceiling Removal";
  return "Popcorn Ceiling Removal";
}
