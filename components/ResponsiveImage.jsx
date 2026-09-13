import { responsiveImage, intrinsicImageSize, DEFAULT_IMAGE_SIZES } from '@/lib/responsiveImages';

// Native, server-renderable images with prebuilt variants; no image optimizer endpoint.
export default function ResponsiveImage({
  src, alt = '', width, height, sizes, srcSet, loading, priority, fetchPriority,
  fill, style, decoding = 'async', unoptimized, quality, loader, placeholder,
  blurDataURL, ...props
}) {
  const original = typeof src === 'string' ? src : src?.src;
  const entry = responsiveImage(src);
  const intrinsic = intrinsicImageSize(src);
  const fallbackSizes = loading === "lazy" && /h-(?:32|40|48|56|64)\b|h-\[\d+px\]|aspect-video/.test(props.className || "")
    ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px"
    : DEFAULT_IMAGE_SIZES;
  const imageStyle = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }
    : style;
  return <img
    {...props}
    src={entry?.src || original}
    data-image-source={original}
    alt={alt}
    width={width || intrinsic?.width || src?.width}
    height={height || intrinsic?.height || src?.height}
    srcSet={entry ? entry.variants.map(v => `${v.src} ${v.width}w`).join(', ') : srcSet}
    sizes={entry ? (sizes || fallbackSizes) : sizes}
    loading={priority ? 'eager' : loading}
    fetchPriority={priority ? 'high' : fetchPriority}
    decoding={decoding}
    style={imageStyle}
  />;
}

// Preserve Next Image's lazy default at migrated Next Image call sites.
export function NextResponsiveImage(props) {
  return <ResponsiveImage loading="lazy" {...props} />;
}
