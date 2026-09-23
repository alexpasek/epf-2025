# September 2026 homeowner guides

Created from the three approved briefs. Existing article bodies, service pages, city metadata and business entities were not changed by this task. New guides support established pages through contextual links; no claim about verified ranking strength is made because Search Console performance data was not available.

## Can You Stay Home During Popcorn Ceiling Removal?

- Path: `/blog/can-you-stay-home-during-popcorn-ceiling-removal/`
- Main keyword: can you stay home during popcorn ceiling removal
- Type and intent: Process guide / household planning
- Cluster: Popcorn ceiling removal
- Area: GTA and nearby EPF service areas; not a city-swapped article.
- Body word count: 2300
- FAQs: five visible questions with matching FAQPage data.
- Metadata: unique title, description, canonical and social image through the existing renderer.
- Schema: BlogPosting, BreadcrumbList and FAQPage. EPF defaults to Organization authorship.

### Links

- /services/popcorn-ceiling-removal/
- https://www.canada.ca/en/health-canada/services/video/renovation-asbestos.html
- /blog/when-popcorn-ceiling-removal-happens-during-renovation/
- /blog/hepa-sanding-containment-smooth-ceiling-projects/
- /quote/
- /popcorn-ceiling-removal/burlington/

### Images

- `/blog/stay-home-popcorn-ceiling-removal.webp` — Protected living room with a textured ceiling and plastic barrier separating an adjoining hallway
  Generated illustration of a separated work area; not a photograph of an EPF project.
- `/blog/painted-popcorn-ceiling-skim-coat-process.png` — Gloved hands applying compound to a ceiling above protected windows
  Existing site illustration of the coating stage, when a room remains a work area.
- `/blog/painted-popcorn-ceiling-after-flat-finish.png` — Finished living room with smooth ceiling above a sofa and large window
  Existing site illustration of a finished room after the ceiling work.

## After Drywall Repair: Touch Up, Repaint One Wall, or Paint the Room?

- Path: `/blog/repaint-wall-after-drywall-repair/`
- Main keyword: repaint wall after drywall repair
- Type and intent: Comparison guide / painting-scope decision
- Cluster: Drywall repair
- Area: GTA and nearby EPF service areas; not a city-swapped article.
- Body word count: 2306
- FAQs: five visible questions with matching FAQPage data.
- Metadata: unique title, description, canonical and social image through the existing renderer.
- Schema: BlogPosting, BreadcrumbList and FAQPage. EPF defaults to Organization authorship.

### Links

- /services/drywall-repair/
- /blog/why-drywall-patches-show-through-paint/
- https://www.benjaminmoore.com/en-us/interior-exterior-paints-stains/how-to-advice/painting-101/touch-up-paint
- /quote/
- /blog/drywall-repair-drying-time-before-primer-paint/
- /blog/what-should-drywall-repair-quote-include/
- /services/interior-painting/

### Images

- `/blog/repaint-wall-after-drywall-repair.webp` — Feathered drywall repair and rectangular paint test on a neutral wall beside a window
  Generated illustration of a repair and paint test; not a photograph of an EPF project.
- `/blog/drywall-repair-preparation-detail.webp` — Wide feathered compound repair above white baseboard and a protected floor
  Generated illustration: surface preparation precedes the painting decision.
- `/blog/repainted-wall-natural-boundaries.webp` — Consistently painted beige wall ending at corners beside a doorway
  Generated illustration: natural boundaries define a complete wall repaint.

## Smooth Ceiling Inspection Checklist: Before and After Painting

- Path: `/blog/smooth-ceiling-inspection-checklist/`
- Main keyword: smooth ceiling inspection checklist
- Type and intent: Process and inspection guide / pre-handover research
- Cluster: Smooth ceiling refinishing
- Area: GTA and nearby EPF service areas; not a city-swapped article.
- Body word count: 2449
- FAQs: five visible questions with matching FAQPage data.
- Metadata: unique title, description, canonical and social image through the existing renderer.
- Schema: BlogPosting, BreadcrumbList and FAQPage. EPF defaults to Organization authorship.

### Links

- /services/popcorn-ceiling-removal/
- /blog/level-4-vs-level-5-finish-after-popcorn-ceiling-removal/
- https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/finishing-decorating-gypsum-panels-white-paper-en-J2010.pdf
- /services/drywall-installation/
- /blog/ceiling-imperfections-after-popcorn-removal/
- /blog/repaint-wall-after-drywall-repair/
- /quote/
- /popcorn-ceiling-removal/hamilton/

### Images

- `/blog/smooth-ceiling-inspection-checklist.webp` — Smooth matte white ceiling and clean wall junctions in a living room lit by large windows
  Generated illustration of a finished ceiling in natural light; not a photograph of an EPF project.
- `/blog/painted-popcorn-ceiling-skim-coat-process.png` — Ceiling skim coating in progress with a broad finishing knife
  Existing site illustration: preparation is a separate stage from final decoration.
- `/blog/painted-popcorn-ceiling-after-flat-finish.png` — White ceiling perimeter and crown moulding above a bright furnished room
  Existing site illustration: review the perimeter and complete ceiling plane.

## Originality and scope

The competitor topics informed question selection only. No competitor headings, article sequence, prices, examples or copy were imported. The articles distinguish household access from dust-control methods, painting-scope selection from patch diagnosis, and a staged inspection from finish-level comparisons. Existing broad guides are linked rather than rewritten.

Research references: [Patch Dudes blog](https://patchdudes.com/blog/), [removal mess](https://patchdudes.com/how-messy-is-popcorn-ceiling-removal/), [repainting](https://patchdudes.com/can-drywall-repair-be-done-without-repainting-the-whole-wall/), [recurring cracks](https://patchdudes.com/why-drywall-cracks-keep-coming-back-after-repair/), and [Level 5](https://patchdudes.com/level-5-drywall-finish/). Competitor links are planning references only, not included in the articles.

## Image production

Five new images were created with the built-in image_gen tool: three unique featured images and two additional wall-finishing illustrations. Prompts are recorded in `september-2026-homeowner-guide-images.json`. Final WebP assets are in `public/blog/`, with 25 responsive variants in `public/_images/`. Each article also has descriptive alt text and illustrative captions. Two existing ceiling illustrations supplement the ceiling articles; no newly created featured image is shared between posts.

## Files changed by this task

- `lib/september2026HomeownerPosts.js`: three new article definitions and small local data helpers.
- `lib/posts.js`: new import and array spread only, relative to the existing working copy.
- `lib/imageDimensions.json` and `lib/responsiveImages.json`: five new image entries; all earlier entries preserved.
- `public/blog/`: five new WebP assets.
- `public/_images/`: 25 new responsive assets.
- `public/sitemap-0.xml`: three new URLs; all earlier entries preserved relative to the working-copy baseline.
- This report and the image prompt record.

## Validation

Production build and responsive image checks passed. Existing remote Maps and generated-post requests reported network warnings; the build completed with local fallback data. Body length, metadata length, local link destinations, unique slugs and image availability checked. The blog source filename follows the existing sitemap collector pattern. Six browser checks passed across the three articles at 390px and 1440px: HTTP 200, one H1, expected canonical, Organization author, BlogPosting/BreadcrumbList/FAQPage, five FAQs, valid contents anchors, no broken images, no horizontal overflow and no page JavaScript errors. All three articles appear in the blog index. Hero and mobile comparison-table screenshots were visually reviewed.

Local preview limitation: the existing trailing-slash middleware caused a rewrite loop and EMFILE errors in the standalone local server. No routing files were changed. Browser checks used the direct routes without a trailing slash; canonical metadata remains the established trailing-slash format. Verify canonical trailing-slash routes on Cloudflare before release.

## Remaining review

Owner review of wording, image illustrations and service scope before publishing; Cloudflare verification of canonical trailing-slash URLs. Search Console data is needed to assess ranking changes; no ranking improvement or competitor-outperformance guarantee is made. Deployment was subsequently authorized. Release preparation uses a clean checkout of production main plus only the three approved guides and their supporting assets; unrelated local drafts and service-page edits are excluded.
