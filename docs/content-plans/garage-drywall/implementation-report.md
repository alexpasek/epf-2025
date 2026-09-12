# Garage repair service and guide implementation

Repository findings and routing rationale: [audit.md](audit.md). The target cluster is drywall repair → garage repairs; the commercial owner is the garage service page. Informational posts support that page through repair, comparison, process and cost research intent.

## New URL ownership

| URL | Main keyword | Intent / purpose |
|---|---|---|
| `/services/garage-drywall-repair/` | garage drywall repair | Commercial specialist service within drywall repair |
| `/services/garage-drywall-repair/mississauga/` | garage drywall repair Mississauga | Peeling wall tape and a clear repair boundary |
| `/services/garage-drywall-repair/oakville/` | garage drywall repair Oakville | Rough joints before a smooth painted finish |
| `/services/garage-drywall-repair/burlington/` | garage drywall repair Burlington | Repairs around an occupied garage and retained storage |
| `/services/garage-drywall-repair/hamilton/` | garage drywall repair Hamilton | Previous repairs and seams that reopen |
| `/services/garage-drywall-repair/milton/` | garage drywall repair Milton | From utility finishing to a painted garage |
| `/services/garage-drywall-repair/toronto/` | garage drywall repair Toronto | Ceiling joints and restricted work access |
| `/services/garage-drywall-repair/etobicoke/` | garage drywall repair Etobicoke | Impact damage and wall patch boundaries |
| `/services/garage-drywall-repair/north-york/` | garage drywall repair North York | Workshops, shelving and selective wall refinishing |
| `/services/garage-drywall-repair/grimsby/` | garage drywall repair Grimsby | Localized seam repair and small-job scope |
| `/services/garage-drywall-repair/st-catharines/` | garage drywall repair St. Catharines | Drywall restoration after the moisture source is addressed |
| `/blog/why-garage-drywall-tape-peels/` | garage drywall tape peeling | Problem and repair decision guide |
| `/blog/retape-or-replace-garage-drywall/` | retape or replace garage drywall | Comparison guide |
| `/blog/garage-drywall-seams-cracking/` | garage drywall seams cracking | Problem and diagnosis guide |
| `/blog/garage-ceiling-drywall-tape-coming-loose/` | garage ceiling drywall tape coming loose | Overhead repair process guide |
| `/blog/garage-drywall-finishing-levels/` | garage drywall finishing levels | Finish specification comparison |
| `/blog/fix-bad-drywall-finishing-garage/` | fix bad drywall finishing garage | Problem and improvement guide |
| `/blog/drywall-repair-vs-skimming-garage-walls/` | repair or skim coat garage walls | Comparison guide |
| `/blog/garage-drywall-repair-cost-factors/` | garage drywall repair cost | Cost and quote preparation guide |
| `/blog/garage-drywall-repair-before-painting/` | garage drywall repair before painting | Preparation and process guide |
| `/blog/garage-drywall-tape-repair-keeps-failing/` | garage drywall tape repair keeps failing | Recurring problem guide |

## Integration and modified existing files

- `app/services/drywall-repair/page.jsx`: one additional garage service card. No original text or metadata rewritten.
- `app/services/page.jsx`: one service data entry and an explicit garage anchor case to avoid colliding with the general drywall repair anchor.
- `components/HeaderNav.jsx`: garage service link, label, and garage-only quote/location context. Existing route behaviour remains for other services.
- `lib/posts.js`: import and register ten new posts. Existing posts retained.
- `public/sitemap-0.xml`: add legitimate new URLs while preserving previous entries.

Existing service and content pages were not rewritten. The drywall repair hub and services directory receive additive discovery entries only. No existing blog body, URL, canonical, redirect, contact handler or environment setting changes.

## New files

- `app/services/garage-drywall-repair/burlington/page.jsx`
- `app/services/garage-drywall-repair/etobicoke/page.jsx`
- `app/services/garage-drywall-repair/grimsby/page.jsx`
- `app/services/garage-drywall-repair/hamilton/page.jsx`
- `app/services/garage-drywall-repair/milton/page.jsx`
- `app/services/garage-drywall-repair/mississauga/page.jsx`
- `app/services/garage-drywall-repair/north-york/page.jsx`
- `app/services/garage-drywall-repair/oakville/page.jsx`
- `app/services/garage-drywall-repair/page.jsx`
- `app/services/garage-drywall-repair/st-catharines/page.jsx`
- `app/services/garage-drywall-repair/toronto/page.jsx`
- `components/GarageDrywallRepairPage.jsx`
- `docs/content-plans/garage-drywall/audit.md`
- `docs/content-plans/garage-drywall/implementation-report.md`
- `lib/garage/articleFaqs.js`
- `lib/garage/articles/ceiling.js`
- `lib/garage/articles/cost.js`
- `lib/garage/articles/cracks.js`
- `lib/garage/articles/levels.js`
- `lib/garage/articles/painting.js`
- `lib/garage/articles/peeling.js`
- `lib/garage/articles/recurring.js`
- `lib/garage/articles/replacement.js`
- `lib/garage/articles/rough.js`
- `lib/garage/articles/skimming.js`
- `lib/garage/cityContent.js`
- `lib/garage/serviceContent.js`
- `lib/garageDrywallPosts.js`
- `lib/garageGuidePosts.js`
- `public/blog/drywall-repair-vs-skimming-garage-walls-featured.webp`
- `public/blog/fix-bad-drywall-finishing-garage-featured.webp`
- `public/blog/garage-ceiling-drywall-tape-coming-loose-featured.webp`
- `public/blog/garage-drywall-finishing-levels-featured.webp`
- `public/blog/garage-drywall-repair-before-painting-featured.webp`
- `public/blog/garage-drywall-repair-cost-factors-featured.webp`
- `public/blog/garage-drywall-seams-cracking-featured.webp`
- `public/blog/garage-drywall-tape-repair-keeps-failing-featured.webp`
- `public/blog/retape-or-replace-garage-drywall-featured.webp`
- `public/blog/why-garage-drywall-tape-peels-featured.webp`

## Internal links

Every article links contextually to the garage service in its opening and field note, to two or three related garage guides, and to the existing quote page. Related cards provide a general drywall repair link. Every city page links up to the garage service and to two or three relevant articles. The garage service links up to general repair, to installation where needed, down to all ten city pages and to all ten guides. Navigation and the repair hub make the new service discoverable from the existing ecosystem. No internal nofollow or hidden links.

## Images

Ten unique generated 1536×1024 featured illustrations were visually inspected and converted to WebP with existing sharp. No new package or API credential required. Each article also uses two related illustrations for context; all captions disclose generated imagery. The finish-level image illustrates a compound-finished garage rather than claiming a fully painted completed project.

| File | Alt text |
|---|---|
| `public/blog/why-garage-drywall-tape-peels-featured.webp` | Curled paper drywall tape along a garage wall joint beside a door track |
| `public/blog/retape-or-replace-garage-drywall-featured.webp` | Impact damage in a lower garage drywall panel with intact surrounding walls |
| `public/blog/garage-drywall-seams-cracking-featured.webp` | Narrow vertical seam crack on a gray painted garage wall |
| `public/blog/garage-ceiling-drywall-tape-coming-loose-featured.webp` | Short strip of detached ceiling joint tape above a garage door |
| `public/blog/garage-drywall-finishing-levels-featured.webp` | Empty garage with compound-finished wall and ceiling joints under side light |
| `public/blog/fix-bad-drywall-finishing-garage-featured.webp` | Unfinished garage wall with uneven compound ridges and visible fastener spots |
| `public/blog/drywall-repair-vs-skimming-garage-walls-featured.webp` | Broad skim-coat passes blending into a retained gray garage wall |
| `public/blog/garage-drywall-repair-cost-factors-featured.webp` | Protected garage floor beneath several wall joint repairs and a ceiling patch |
| `public/blog/garage-drywall-repair-before-painting-featured.webp` | Garage wall with prepared joints and spot-primed repairs above a protected floor |
| `public/blog/garage-drywall-tape-repair-keeps-failing-featured.webp` | Reopened vertical garage wall seam through a wider older painted patch |

## Metadata and structured data

All 21 routes use unique titles, H1s and descriptions, index/follow robots and self-referencing trailing-slash canonicals. City titles identify the city; all ten guide titles include 2026. Descriptions and guide titles are recorded in `lib/garageGuidePosts.js`; city descriptions are in `lib/garage/cityContent.js`. Service pages provide Service, Organization relationship, BreadcrumbList and visible FAQPage markup. Guides reuse BlogPosting, breadcrumbs and visible FAQ markup from the existing blog renderer. No ratings, prices or addresses were invented.

## Checks

Completed checks:

- `npm run build`: passed, 551 static pages generated; existing dynamic blog routes retained.
- `npx @cloudflare/next-on-pages@1`: passed and generated the Pages worker bundle. No deployment performed. Build-only dependency-lock flags restored.
- `node /tmp/epf-garage-static.mjs`: all ten authored article bodies exceed 2,200 words; internal body links, featured/supporting images, unique guide titles and metadata lengths passed.
- `python3 /tmp/epf-garage-runtime.py` against `npm run start -- --hostname localhost --port 3100`: all 21 routes returned HTTP 200 with correct self-canonical, indexable robots, metadata, one H1, valid on-page anchors, visible/schema FAQ agreement and service/article/breadcrumb markup. All ten images and blog-index entries resolved. The existing repair hub and services directory expose the new service. Five existing routes passed smoke checks.
- Additional source checks: all 21 H1s are unique and the ten new article slugs do not exist in pre-change content.
- `python3 /tmp/epf-garage-finalize.py`: preserved all original sitemap URL entries and timestamps exactly, adding only the 21 new routes.
- `git diff --check`: passed. No standalone lint script is configured; Next build completed its lint/type validation stage.

 Ten bodies are 2,310–2,478 words, excluding FAQs and template. Unique descriptions are 151–159 characters. City pages have distinct scenarios, openings and FAQ mixes; no invented neighbourhood facts or addresses. Main service has approximately 1,790 section words plus hero, answer, fifteen FAQs, areas and estimate content.

## Manual review

Browser-control execution is unavailable in this session. Full responsive visual and interaction review, including browser hydration checks, remains manual. The existing contact handler is reused; no test message is sent. This implementation has not been deployed.

## Local coverage extension

The five requested city pages now include citywide coverage, 88 named neighbourhood/community examples, local estimate preparation, a fourth FAQ and matching service-area schema. All ten guides have a contextual local service link, with two supporting each requested city. See [local-neighbourhoods.md](local-neighbourhoods.md) for changed files, routes, source references and checks. No neighbourhood-only routes were added.
