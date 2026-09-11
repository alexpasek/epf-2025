# Higher pricing and local-search refinement

User request: modestly increase the six guides' pricing and improve their ability to compete in local search. Date: 2026-09-11. Scope: the six existing 2026 basement drywall taping and mudding guides; no new pages or deployment.

## Plan

- Topic/keywords: basement drywall taping and mudding, basement drywall taper, finishing-only quotes, and 2026 costs in Mississauga, Oakville, Burlington, Hamilton, Grimsby and Toronto.
- Type: article update and contextual internal-link improvement.
- Intent: local contractor selection plus cost and scope research.
- Cluster/pillar: drywall installation and finishing; /services/drywall-installation/.
- Existing local service targets: installation pages for five cities; Toronto drywall contractor page.
- Added local links: /services/drywall-contractor/{city}/ from every guide. Five are new distinct editorial destinations; Toronto reinforces its existing destination in a hiring context.
- Images: retain all six unique featured images and the existing supporting illustrations; topic has not changed.
- Metadata/schema: reuse 2026 H1/title, BlogPosting, BreadcrumbList and visible FAQ/FAQPage. Include the previously omitted word Drywall in every SEO title.

## Research and limits

Reviewed current search results and selected pages. Results contain contractor services, cost guides, and homeowner quote questions. They already cover finish levels, measured area, preparation, and material/paint inclusions. Do not claim these topics are absent from every competitor. No observed search result is treated as proof of a fixed local ranking or of superiority.

Sources:
- https://gmco.ca/drywall-finishing-costs-guide-mud-and-tape-expenses/ — dated August 23, 2026; scope, unit pricing and finish-level comparison. No wording or technical/legal claims copied.
- https://gtadrywallandtaping.com/cost/taping-cost/ — cost/finish search intent; earlier source review retained in pricing plan.
- https://gtaprofix.ca/services/drywall/taping-mudding — search snippet emphasizes taping-only work on homeowner/GC-installed board; direct open failed, so no unobserved page details used.
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content — people-first content and original useful coverage.
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable — descriptive crawlable links and contextual discovery.

Implemented improvements: service-complete SEO titles under 60 characters; direct answer and EPF range in each hero excerpt; original city-specific hiring/quote-request sections; links to the matching contractor pages; distinct hiring FAQs that match visible schema. Preserve existing incoming blog links, service hub links, canonical URLs, sitemap inclusion and optimized images.

Ranking cannot be guaranteed. No Search Console performance data or live ranking measurement was available for these unpublished guides. Do not promise #1 placement, FAQ rich results, a measurable ranking increase, or that a price increase improves rankings. Real performance must be measured after publication and crawling.

## Current pricing — supersedes the preceding range

The user explicitly requested higher prices. Editorial choice: standard finishing raised from CAD $1.50–$3.00 to $1.75–$3.50 per sq. ft. (about 17% at both ends). Additional Level 5 allowance raised from $0.50–$1.25 to $0.75–$1.50 per sq. ft. of treated surface. These are now identified as EPF planning ranges chosen for the user's requested positioning, not externally measured regional averages or fixed quotes.

Actual drywall surface, not floor area. Same range across six cities. Before HST, minimum charges and identified extras. Preserve exclusions for board supply/hanging, corrections, primer, paint, special access, extra phase visits and separately charged protection/disposal. Final written scope determines price. Do not invent a minimum charge.

| Example | Actual drywall area | Standard calculated allowance |
| --- | ---: | ---: |
| Mississauga basement | 1,630 sq. ft. | CAD $2,852.50–$5,705 |
| Mississauga with partition | 1,950 sq. ft. | CAD $3,412.50–$6,825 |
| Oakville room | 640 sq. ft. | CAD $1,120–$2,240 |
| Burlington phase | 1,000 sq. ft. | CAD $1,750–$3,500 |
| Hamilton ready board | 2,000 sq. ft. | CAD $3,500–$7,000 |
| Grimsby partial room | 524 sq. ft. | CAD $917–$1,834 |
| Toronto compact room | 750 sq. ft. | CAD $1,312.50–$2,625 |

Oakville full-area skim-coat addition: 640 × $0.75–$1.50 = $480–$960. Totals are explicitly arithmetic examples, not completed jobs or firm offers.

## Files for this refinement

- lib/basementTapingAuthorityPosts.js
- lib/localBasementTapingPosts.js
- docs/content-plans/basement-guides-local-search-refinement.md
- docs/content-plans/basement-guides-2026-cost-update.md — supersession notice only.

## Validation completed

- Production build, lint/type checks and sitemap generation passed. All 540 static pages generated; existing external Google Maps/generated-post failures used the site's fallbacks.
- Seven standard-price calculations and the Oakville Level 5 calculation checked against the new multipliers. No old $1.50–$3.00 / $0.50–$1.25 ranges or regional-average wording remain in either active article module.
- All six built canonical trailing-slash pages returned HTTP 200. Verified one H1, 2026 service-specific metadata, prices visible in hero/content, updated BlogPosting headlines, seven FAQ answers matching visible text, valid TOC anchors, and matching city contractor links.
- All six linked contractor pages returned HTTP 200 with indexable metadata. Blog index includes the six 2026 guide titles. Robots.txt permits Googlebot to fetch each guide and sitemap contains all six canonical URLs.
- Editorial destinations: Mississauga 8, Oakville 8, Burlington 8, Hamilton 9, Grimsby 9, Toronto 7. Existing incoming links, related-guide links and quote CTAs preserved. Existing image files and alt text checked; no image generation needed for this revision.
- Body words excluding FAQs/template: Mississauga 2,894; Oakville 2,649; Burlington 2,676; Hamilton 2,668; Grimsby 2,686; Toronto 2,713. SEO titles 53–57 characters; descriptions 154–159.
- git diff --check passed. Restored pre-build sitemap content to avoid changing unrelated timestamps/entries. No packages, service-page code, deployment configuration or automation backend changed.
- Manual review remaining: full desktop/mobile visual inspection. Browser-control execution is unavailable. After publishing, verify live URLs and use actual search performance data to assess visibility; local tests do not establish Google indexation or rankings.
- No deployment or indexing submission performed.
