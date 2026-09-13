# Image sizing and local image SEO audit — 12 September 2026

## Scope

Inventoried all 341 raster/vector files under public and inspected 548 generated HTML documents plus responses from all 166 sitemap-listed blog routes. Some static blogs overlap with the blog crawl; these are 714 inspected documents, not 714 distinct public pages. CSS background images, external image bytes, interactive-only gallery states, mobile visual layout and field Core Web Vitals were not comprehensively measured. This is a markup/file audit, not a claim to have visually examined every photograph.

## Findings before changes

- One missing local image reference: `/services/epf-services-hero.png` on `/services/` (also referenced in its social metadata).
- No img element missing its alt attribute among 2,457 inspected elements. Five empty alt values occur on skylight imagery; inspect whether decorative before changing. Alt presence alone does not establish descriptive accuracy or valid local provenance.
- 2,283 img occurrences omit one or both dimension attributes, across 235 assets. Many have fixed-height or aspect-ratio CSS, so this count is not a count of layout-shift bugs. Header logo and uncropped blog images are useful targets.
- All 2,457 inspected img elements lack srcset. Existing `sizes` attributes alone do not make browsers download smaller images. Next image optimization is disabled in this Cloudflare Pages project.
- 143 public files exceed 500 KB, of which 138 are referenced in inspected image tags. The largest is `/gallery/mississauga.jpg` at 4,236,061 bytes. Size thresholds are audit flags, not a Google ranking rule.
- 32 local social-image dimension mismatches across the inspected pages. Another two tags use the .ca host and disagree with same-path local files; verify those remote files before calling their dimensions incorrect.
- Four files cannot be decoded by sharp; none were referenced by the inspected img elements. Three have timestamped icon filenames; one is `/gallery/Popcorn-ceiling-removal-stcatharines/popcorn-ceiling-removal00022.jpg`.
- 42 files have extensions inconsistent with detected content format. Browsers can often decode these, but metadata/content-type and future optimization should use the actual format. No asset URLs were renamed in this pass.
- Blog field-guide hero markup used 1600×900 for files with other intrinsic ratios, including the 1536×1024 garage images.

## Corrections made

- `lib/imageDimensions.json`: checked-in dimensions for decodable public assets, generated from actual file metadata. Regenerate when replacing assets; do not guess dimensions.
- `lib/imageDimensions.js`: safe local-asset lookup; external/unknown assets receive no invented dimensions. No filesystem or sharp dependency enters the Edge runtime.
- `app/blog/[slug]/page.jsx`: actual dimensions for shared hero, figure, related-card and gallery img elements; blog Open Graph images get actual local dimensions and existing descriptive alt text. Existing CSS crop choices remain. Special dedicated blog components remain separate and are included in the audit, not automatically rewritten.
- `components/HeaderNav.jsx`: intrinsic 200×56 logo dimensions. Existing popcorn CSS and visible branding remain unchanged.
- `app/services/page.jsx`: replaced the missing image with the existing ceiling repair comparison at `/gallery/drywall-installation/drywall-installation-hero.webp`, inspected visually; added its actual 1529×900 dimensions and descriptive alt text to visible and social markup. Removed the unsupported crew description from this image tag.

These changes are additional to the earlier pending title/header fixes. No images were generated, resized, recompressed or geotagged. No other local SEO audit recommendations were implemented.

## Recommended next changes

1. Generate appropriately sized WebP/AVIF variants for the heavy, actually used assets; wire srcset and sizes into shared components. Retain source assets and URLs until references are migrated. Test against Cloudflare Pages rather than simply enabling unsupported optimization.
2. Fix the remaining service-page Open Graph dimensions listed in `social-image-dimensions-before.csv`. Use actual dimensions or generate a deliberate social crop; do not label every image 1200×630. Confirm .ca image URLs separately.
3. Extend the dimension lookup to other shared image components where CSS does not already reserve the correct space. Preserve intentional aspect-ratio crops.
4. Review alt descriptions against the actual photographs. Add city names only for confirmed local projects or clearly labelled illustrations; never imply that a generic/generated image was photographed in a neighbourhood. Page titles, headings, captions and service-area links already provide local context.
5. Verify current mobile crops and LCP/CLS with a browser and field/performance tools. This audit has no measured Core Web Vitals result.
6. Consolidate malformed/unreferenced image files after checking hidden gallery and metadata consumers. Do not delete them solely because the current HTML crawl does not reference them.

## Evidence files

- `asset-inventory.csv`: every inventoried asset, dimensions, detected format, size and decoder errors.
- `image-usage-before.csv`: page-level image tags, alt text, dimensions, sizes/srcset and CSS before corrections.
- `social-image-dimensions-before.csv`: the social metadata discrepancies before corrections.

## Verification

`npm run build` passed. Re-fetched all 166 blog routes and rescanned 548 generated documents: no broken local img sources remain. Verified shared header logo dimensions, the Services hero replacement and actual 1536×1024 garage hero attributes. Dedicated ad-page logos and other service-gallery tags remain separate. The earlier title fix remains valid across 548 generated titles. `git diff --check` passed. Build-only sitemap timestamps were restored. Browser visual/mobile and field performance review remain manual. No deployment performed.

## Source guidance

Google uses alt text together with image content and surrounding page content: [Google Image SEO](https://developers.google.com/search/docs/appearance/google-images).

Intrinsic dimensions reserve image space; responsive sources let browsers choose an appropriate download: [web.dev responsive images](https://web.dev/learn/design/responsive-images).
