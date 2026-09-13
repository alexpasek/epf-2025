import dimensions from "./imageDimensions.json";

// Local asset dimensions are recorded at build preparation, never read from disk at runtime.
export function imageDimensions(src) {
  if (!src) return {};
  try {
    const url = new URL(src, "https://epfproservices.com");
    if (!["epfproservices.com", "www.epfproservices.com"].includes(url.hostname)) return {};
    return dimensions[decodeURIComponent(url.pathname)] || {};
  } catch {
    return {};
  }
}
