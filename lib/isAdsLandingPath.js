export function isAdsLandingPath(pathname = "") {
  return (
    pathname === "/locations/popcorn-ceiling-removal" ||
    pathname === "/locations/popcorn-ceiling-removal/" ||
    pathname.startsWith("/locations/popcorn-ceiling-removal-") ||
    pathname === "/locations/drywall-repair" ||
    pathname === "/locations/drywall-repair/"
  );
}
