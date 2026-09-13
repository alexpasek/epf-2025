import variants from './responsiveImages.json';
import dimensions from './imageDimensions.json';

export const DEFAULT_IMAGE_SIZES = '(max-width: 1279px) 100vw, 1280px';
export function localImagePath(src) {
  const value = typeof src === 'string' ? src : src?.src;
  if (!value) return null;
  try {
    const url = new URL(value, 'https://epfproservices.com');
    if (!['epfproservices.com', 'www.epfproservices.com'].includes(url.hostname)) return null;
    if (url.search) return null;
    return decodeURIComponent(url.pathname);
  } catch { return null; }
}
export function responsiveImage(src) {
  const key = localImagePath(src);
  return key ? variants[key] : undefined;
}
export function intrinsicImageSize(src) {
  const key = localImagePath(src);
  return key ? dimensions[key] : undefined;
}
export function socialImages(images) {
  if (!images) return images;
  return (Array.isArray(images) ? images : [images]).map(image => {
    const item = typeof image === 'string' || image instanceof URL ? { url: String(image) } : image;
    if (!item?.url) return item;
    const entry = responsiveImage(String(item.url));
    if (entry) {
      const selected = entry.variants.find(v => v.src === entry.src);
      return { ...item, url: 'https://epfproservices.com' + selected.src, width: selected.width, height: Math.round(entry.height * selected.width / entry.width) };
    }
    const size = intrinsicImageSize(String(item.url));
    return size ? { ...item, ...size } : item;
  });
}
