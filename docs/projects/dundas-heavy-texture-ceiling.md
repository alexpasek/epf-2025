# Dundas heavy texture ceiling project — preparation record

Status: implemented and checked locally; not deployed. Owner supplied 14 chat previews and confirmed EPF removed heavy texture, replastered and finished the ceiling in Dundas, Ontario. Permission to use these photos is explicit. All 14 supplied originals are now matched to their visible stages and optimized.

- URL: `/our-work/heavy-texture-ceiling-removal-dundas/`
- Primary keyword: heavy texture ceiling removal Dundas.
- Type/intent: completed-project case study; inspect a comparable local result and evaluate a contractor.
- Actual locality: Dundas, Hamilton, Ontario. Burlington is nearby service coverage, never the job location.
- Cluster/pillar: texture removal and smooth ceiling finishing; `/services/popcorn-ceiling-removal/`.
- Content and relationships: `data/projects.json`; shared cards and detail template reuse `ResponsiveImage`.
- Incoming placements prepared: Our Work, homepage, Hamilton, Dundas and Burlington (nearby label). The shared record now enables all five placements.
- Outgoing links: main service, Hamilton, Dundas, Burlington, Hamilton skim-coating guide, `/quote/`.
- Unknowns omitted: exact completion date, room use, address, coordinates, size, price, duration, formal finish level, paint products/coats, hazard tests, electrical scope.
- Metadata: unique title/description/canonical/social photo, Article and BreadcrumbList prepared. Publication date is November 8, 2026 for this release; job completion date is not asserted.

## Photo plan (numbers refer to supplied message order)

All photographs are genuine supplied job photos. No new generated image is needed. Preserve source files unchanged and their existing GPS metadata per the owner's instruction. Do not infer GPS values from Dundas. Web derivatives may strip metadata; do not publish precise coordinates in text/schema or a map. No private source paths or coordinate values belong in committed data.

| Number | Stage/group | Suggested filename stem | Alt text and caption subject |
| --- | --- | --- | --- |
| 1 | Preparation / 2 | dundas-ceiling-texture-removed | Partly stripped ceiling with exposed patches and recessed-light openings |
| 2 | Before / 0 | dundas-heavy-ceiling-texture-detail | Raised floral ceiling texture around a recessed-light opening |
| 3 | Removal / 1 | dundas-texture-sanding-closeup | Illuminated ceiling sander against the raised texture |
| 4 | Before / 0 | dundas-patterned-ceiling-corner | Heavy decorative texture above crown moulding and glazed doors |
| 5 | Finished / 3 | dundas-smooth-ceiling-room-view | Smooth ceiling above the protected floor, with tools still in the room |
| 6 | Finished / 3 | dundas-smooth-ceiling-wide-view | Finished smooth ceiling viewed toward the window and glazed doors |
| 7 | Protection / 1 | dundas-floor-protection | Protective floor covering taped along the baseboard |
| 8 | Preparation / 2 | dundas-ceiling-patch-preparation | Exposed patch, joints and fasteners during ceiling preparation |
| 9 | Finished / 3 / featured | dundas-finished-smooth-ceiling | Finished smooth ceiling with recessed lights on above the shuttered window |
| 10 | Removal / 1 | dundas-ceiling-texture-removal | Sander working across the textured ceiling, with the room visible below |
| 11 | Preparation / 2 | dundas-ceiling-surface-preparation | Stripped surface and exposed repair areas around light openings |
| 12 | Preparation / 2 | dundas-ceiling-patch-detail | Close view of the patch and visible washers before replastering |
| 13 | Before / 0 | dundas-original-textured-ceiling | Original patterned ceiling above the window, with protection and equipment below |
| 14 | Removal / 1 | dundas-texture-sanding-progress | Partially smoothed ceiling beside remaining raised texture |

Use proportionate resizing, auto-orientation and WebP compression, preserving real conditions. Aim for a maximum 1280-pixel long edge, then use the existing responsive pipeline for smaller displays. Confirm detail remains readable; never enlarge a smaller original. Featured image 9 represents the confirmed finished ceiling; tools/floor protection remain honestly visible. Do not brighten images to conceal defects.

## Completed asset preparation

- 14 originals read and retained unchanged; SHA-256 comparison confirmed byte-for-byte preservation.
- Existing GPS latitude/longitude tags present in 4 originals, absent in 10. No coordinates were invented, printed in public content or added to untagged files.
- Original GPS metadata stays in the originals. Public web derivatives omit metadata.
- Original total: 28,264,185 bytes; 14 WebP source derivatives: 1,630,862 bytes (94.2% reduction).
- Auto-oriented web images: 960 × 1280 pixels, WebP quality 78. Individual files range from 16,256 to 272,712 bytes.
- Existing pipeline generated 320-, 640- and 960-pixel responsive widths for each photo. Hero is eager/high priority; other photos lazy-load.
- Featured finished image visually inspected. All 14 photos have descriptive alt text and stage captions; the finished hero appears once, with other finished views in the result section.

## Verification

- `npm run build` passed, including responsive-image checks, compilation and 563 static pages. Existing external Google Maps/generated-post fetches were unavailable; fallback completed successfully.
- `git diff --check` passed.
- Project canonical added to sitemap, preserving prior unrelated sitemap entries.
- Browser verification results recorded after the final check below.
- No production deployment or live indexing verification has been performed.

Final browser checks passed at 360, 768 and 1280 pixels: HTTP 200, one H1, no horizontal overflow, 14 loaded images with alt text and responsive sources, correct canonical, Article/Organization and BreadcrumbList schema. All outgoing links returned 200. Incoming cards verified on Our Work, homepage, Hamilton, Dundas and Burlington; Burlington explicitly says “Nearby project · Dundas, Ontario.” Mobile and desktop screenshots inspected. Reused the site's header breadcrumb rather than adding a second visible row.

A scoped native-routing exception was added in `middleware.js` for the linked Hamilton skim-coating guide after its existing trailing-slash rewrite caused a failed request. Rebuilt and reran the full browser check successfully.

Files implemented: `data/projects.json`, `lib/projects.js`, `components/ProjectCard.jsx`, `app/our-work/[slug]/page.jsx`; placements in `app/our-work/page.jsx`, `app/page.jsx`, the Hamilton/Burlington city pages and Dundas page, with an optional content slot in `components/hamilton/NeighborhoodPage.jsx`; sitemap configuration/output; image manifests; 14 assets under `public/projects/dundas-heavy-texture-ceiling/` plus 42 responsive variants. Publication status in the data enables site rendering; it does not indicate a production deployment.
