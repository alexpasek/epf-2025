# Responsive image implementation

## Changes

The website now uses prebuilt WebP variants through `components/ResponsiveImage.jsx`. Native image markup and previous Next Image call sites use the same server-renderable component. Existing classes, deliberate crops, alt text, event handlers, and fill positioning are retained. The logo and small icons remain original assets. Animated and external images fall back to their originals. No image optimizer service is required.

`lib/responsiveImages.js` supplies local source lookup and social-image normalization. Open Graph/Twitter image references use actual generated-file dimensions. The two legacy .ca gallery image references in Grimsby/St. Catharines metadata were moved to existing local assets after the legacy host failed DNS lookup from the test environment. Other domain/canonical policy is outside this image task.

`npm run images:build` creates deterministic, content-hashed files under `public/_images/`, updates the manifest and records intrinsic dimensions. `npm run images:check` decodes every variant and validates source presence, monotonic widths, no upscaling, format, aspect ratio and fallback byte limits. Both run before production builds. No new dependency was installed; sharp is already available through the existing Next installation.

Original assets and URLs are preserved. This also avoids breaking links to images already indexed or shared. The four undecodable originals were not referenced by the inspected pages and remain untouched pending a separate asset-retention review.

## Generated assets

- 293 source images.
- 1,289 WebP variants, at available widths from 320 through 1920 pixels, without upscaling.
- 303,154,641 bytes in the original source set versus 15,797,778 bytes across the selected default variants (about 95% less).
- No default variant exceeds 500 KB. Browsers may choose smaller or larger variants from srcset; the default total is not a measured page-weight or traffic saving.

## Local image descriptions

Existing service/city wording remains. No new city provenance or geotags were fabricated. The five empty skylight alt values are decorative mobile background images underneath overlays, with a separate descriptive main image; they intentionally remain empty. Real gallery project locations cannot be authenticated from pixels, so existing location claims still require owner records if their provenance is uncertain.

## Verification

- Production build and Cloudflare Pages adapter build passed, including automatic image generation and validation; 551 static pages generated.
- All 166 blog routes were fetched successfully from the final production preview. Combined with static build output, the scan inspected 714 HTML documents (not 714 unique routes).
- No missing local image files, missing alt attributes, oversized default image references, or incorrect local Open Graph image dimensions were found.
- All inspected local images have width and height attributes. Nine references to three external YouTube thumbnails lack intrinsic attributes; their existing layout remains outside the local asset conversion.
- Local-source lookup, query-string preservation, external fallback and social metadata checks passed.
- `git diff --check` passed. Original image assets, sitemap and dependency lockfile are unchanged.
- All 16 final Chrome page/viewport checks passed across eight representative routes at 390px and 1440px: HTTP 200, no JavaScript page errors, no broken local images and no horizontal overflow. Mobile menus opened and closed; gallery modals loaded responsive images; global lightboxes preserved alt text and their close buttons remained clickable. See `browser-checks-after.json`.
- Desktop and mobile screenshots were visually inspected for representative garage service and blog layouts. Third-party ads/maps were blocked for these deterministic local checks; they were not validated. Existing project-location claims still require owner records where provenance is uncertain.

The Cloudflare adapter emitted nonfatal prerender-configuration warnings for dynamic route patterns, and the build reported old browser-compatibility datasets. It still generated the Pages worker successfully. This is a local production check, not a live deployment or field Core Web Vitals measurement. The user's development server remained running; production checks used `/private/tmp/epf-responsive-check` to avoid concurrent writes to `.next`.

## Page and content scope

Existing service, city, gallery and blog routes are updated in place. This is an image and rendering update, not a new article: existing keywords, blog types, homeowner search intent and internal links are retained. No new pages, article copy, internal links or generated photography were added. Responsive WebP derivatives were generated from the existing assets. The garage blog renderer also recognizes block-level aside content, preventing invalid paragraph nesting and hydration errors.

## Main files

- `components/ResponsiveImage.jsx`: shared responsive markup and intrinsic sizing.
- `lib/responsiveImages.js`, `lib/responsiveImages.json`, `lib/imageDimensions.js`, `lib/imageDimensions.json`: source mapping, image sizes and social metadata.
- `scripts/build-responsive-images.cjs`, `scripts/check-responsive-images.cjs`, `package.json`: reproducible generation and prebuild validation.
- `public/_images/`: generated WebP assets.
- Existing `app/**/page.jsx` and image-rendering components: shared-component integration.
- `components/LightboxGlobal.jsx`, `components/OurWorkGallery.jsx`: full-size responsive gallery behavior; tall images are constrained to the viewport so close/navigation controls remain reachable.

## Scope

This implements the image recommendations. Earlier pending title and header fixes remain present. It does not implement unrelated 404, sitemap-indexing, business-schema identity or canonical-host audit recommendations. No deployment is included unless separately requested.
