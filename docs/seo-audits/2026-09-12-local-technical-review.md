# Local technical SEO review — 12 September 2026

Read-only review of application behaviour and ten live URL variants, plus the live XML sitemap. No SEO implementation or deployment performed. The pending service-specific header fix remains local and preserves popcorn branding.

## Priority 1: indexing correctness

### Missing blog posts return HTTP 200

Verified `/blog/nonexistent-audit-september-2026/` returns 200, title `Post — EPF Pro Services`, no canonical, and a Not found message. `app/blog/[slug]/page.jsx` returns generic metadata at line 513 and a normal div at line 551.

Change: use Next `notFound()` in missing-post branches, handle before response streaming where possible, and verify the actual Cloudflare response status after deployment. Acceptance: invalid URLs return 404 (or a framework streaming fallback is explicitly noindex), valid blogs remain 200. Do not redirect missing articles to the homepage.

### Sitemap contains noindex directory URLs

The live sitemap contains 704 URLs, including 300 `/service-areas/` URLs. `next.config.js` deliberately applies `X-Robots-Tag: noindex, follow` to this directory. The sampled Port Credit directory page also emits index/follow metadata and canonicalizes to `/popcorn-ceiling-removal/mississauga/port-credit/`.

Change: exclude the directory and descendants in `next-sitemap.config.js`; align directory metadata with its intentional noindex policy; retain intended canonical service/neighbourhood pages in the sitemap. Do not remove noindex from all duplicate directory pages just to index them. Consider one-to-one permanent redirects only where the directory page has no distinct navigation purpose, after route review.

### Duplicate brand in search titles

Live drywall repair title ends `| EPF Pro Services — EPF Pro Services`. Garage Mississauga ends `| EPF Pro — EPF Pro Services`. `app/layout.jsx` already appends the brand; some child titles include it again.

Change: use unbranded page title strings plus the existing root template, or `title.absolute` for intentionally complete titles. Adjust affected service/blog metadata, including `components/GarageDrywallRepairPage.jsx`. Do not change visible popcorn branding. Acceptance: each final title includes the brand once and clearly identifies the page service and city where applicable.

## Priority 2: local identity and navigation

### One business entity and verified facts

`components/SEOJsonLd.jsx` uses `/#org`; homepage output also contains `/#business`; garage provider uses `/#organization`. Some service providers have no entity ID. Central config has a blank address, while the drywall installation page separately declares a full Mississauga street address. The installation and repair pages contain hard-coded aggregate rating data; installation uses 4.9 and 127 reviews.

Change: establish one canonical business ID and reuse it from each Service provider. Centralize approved business name, telephone, service areas, sameAs links and publicly appropriate address information in one data source. Separate service labels from company identity. Verify street address, hours and review data against owner-approved records; do not manufacture offices for service cities. Remove unsupported ratings and do not expect self-serving LocalBusiness reviews to generate review stars.

### Shared service context for all navigation

`components/HeaderNav.jsx` uses a broad `.*drywall.*` blog matcher for installation locations and CTAs. Thus repair or finishing blogs may inherit installation navigation. The pending `lib/headerServiceLabel.js` fixes the visible brand label only; it does not yet fix every navigation branch.

Change: use one service-context registry for brand label, quote wording, service hub and city destinations. Prefer explicit article service ownership over broad keyword matching, with deterministic fallbacks for new articles. Preserve popcorn context. Acceptance: repair articles point to repair city pages, installation articles to installation pages, garage articles to garage pages, and every destination resolves.

### URL consolidation

Both www and apex homepage variants return 200. Both slash and non-slash drywall repair URLs return 200. Canonicals already point to apex trailing-slash URLs, so these are not missing-canonical errors.

Change: consider one-hop permanent redirects to the canonical host and page-path convention at Cloudflare Pages/Next. Preserve query strings, avoid API/auth/form redirects, and account for the existing blog rewrite and `skipTrailingSlashRedirect`. Test representative blogs, services and form endpoints before publication. This improves consistency; it is not a guaranteed ranking boost.

## Priority 3: maintainable content signals

### Modification dates and sitemap source

`next-sitemap.config.js` emits the build time as lastmod on every URL. Blog structured data and Open Graph use `post.date` for both publication and modification. Blog sitemap discovery uses regular expressions over source files rather than a shared content registry.

Change: separate publishedAt and updatedAt, use real meaningful content changes for lastmod/dateModified, and generate article routes and sitemap entries from a shared validated content manifest. Add checks for unpublished, missing, noindex and noncanonical entries. Changing sitemap priorities or meta keyword lists is not the priority.

### Duplicate H1 and breadcrumb output

The live drywall repair page contains two H1 elements; source positions are around lines 344 and 548. Several tested pages output a header BreadcrumbList and another page-level BreadcrumbList.

Change: keep one main page H1 and demote the secondary section heading. Prefer one page-owned breadcrumb trail matching the visible hierarchy and canonical URLs. Multiple H1s are a clarity issue here, not evidence of a Google penalty.

### Verifiable neighbourhood content

`lib/seoCopy.js` has repeated neighbourhood copy and a generic fallback labelled `Recent in {HOOD}`. This review cannot verify that those project descriptions or testimonials represent actual jobs.

Change: make real project/review evidence explicit in the data model. Render a recent-project section only when supported by an approved project record; otherwise use honest service/process copy. Keep one primary service URL per city and avoid mechanically generating more neighbourhood pages from name substitution. Existing garage coverage lists are explicitly examples, with citywide coverage; they are not individual neighbourhood landing pages.

### Performance: measure before changing architecture

`next.config.js` disables built-in image optimization. Raw response sizes in this sample range from approximately 48–221 KB; those numbers are not Core Web Vitals. The header logo is a plain img. No Lighthouse, field CWV or mobile visual measurement was performed.

Next step: measure representative city pages and guides, inspect image transfer sizes and LCP, then add suitable pre-sized WebP/AVIF assets, responsive sources and fixed image dimensions where needed. Keep the proven Cloudflare Pages runtime; do not enable unsupported image optimization blindly.

## Confirmed working / limits

- Sampled legitimate service and blog pages return 200 with canonical URLs.
- Sampled garage local page exposes neighbourhood coverage and Service schema in initial HTML.
- The hidden SEO interface is noindex and absent from the sitemap.
- Pending header fix has already passed a production build and 20 initial-HTML branding checks in the earlier task; it is not live yet.
- This review did not inspect Search Console, Google Business Profile ownership/settings, real ranking positions, crawl logs, backlinks or field Core Web Vitals. Code findings cannot establish ranking impact or guarantee local/map placement.
- No build rerun was needed for this read-only audit.

## References

- [Google: HTTP status codes and soft 404s](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)
- [Google: canonical URL consolidation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: sitemaps and accurate lastmod](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: self-serving review rich results](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful)
- [Google: local ranking factors](https://support.google.com/business/answer/7091?hl=en)
