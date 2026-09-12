# Garage drywall repair implementation audit — 2026-09-11

Scope: the attached brief supplies the requested content plan; the user's request establishes the goal of an additional drywall repair service integrated with the whole site. Implement one service, ten city pages, ten guides. No deployment inferred for this new task.

Existing owners: `/services/drywall-repair/` owns general repairs; `/services/drywall-installation/` owns new boarding; `/services/drywall-contractor/` owns contractor selection. `/services/skylight-drywall-repair/` provides the existing specialist-service pattern. No garage service or garage-focused blog exists. Existing general crack, winter movement, patch visibility and Level 4/5 guides overlap only in background knowledge. New articles restrict their intent to garage decisions and link to the established general services when appropriate.

Routing: `/services/garage-drywall-repair/` and ten static child city routes, following the skylight pattern. This is a specialist child in navigation/breadcrumb context of Drywall Repair; no competing root alias. Cities: Mississauga, Oakville, Burlington, Hamilton, Milton, Toronto, Etobicoke, North York, Grimsby, St. Catharines. Eight are in data/cities.js; Grimsby is in app/config.js and existing drywall city routes, St. Catharines is explicitly supported by the services directory and existing service URLs. No invented branch addresses.

Templates: service pages currently compose Next Image/Link, CONTACT/SITE_URL, QuoteForm and local data. Skylight template has inseparable skylight-specific content, so use a new shared garage renderer for the hub and ten cities, preserving the same palette, spacing, buttons and QuoteForm. Layout already supplies global header/footer. Blogs use lib/posts.js registration and the shared fieldGuideLayout in app/blog/[slug]/page.jsx, including quick answer, TOC, photos, FAQs, schema, reviewer and CTAs. No new blog renderer. Service schema references EPF as Organization without new ratings or offers.

Discoverability: a small additional service card inside the existing drywall repair page, one service-directory data entry and one navigation item next to Drywall Repair. Existing text and metadata stay intact. Blog registration is additive. Blog → garage service → general repair; city → garage service; garage service → city and related guides. No nofollow or hidden links. AUTHORITY_FLOW_NEIGHBORHOODS.md is historical strategy context, not a reason to add internal nofollow or unsupported numerical authority claims.

Sitemap: next-sitemap discovers static routes and scans lib/*Posts.js for blog slugs; keep literal slug metadata registrations in lib/garageDrywallPosts.js. Preserve previous sitemap URLs and unrelated timestamps in the tracked artifact. No next.config changes needed.

All guide titles include 2026 in keeping with the user's guide naming preference. Garage repair prices are scope-dependent: do not transplant new-basement finishing rates into repair estimates. Cost guide explains measurable factors without invented fixed charges. Guides each require >=2,200 original words. City pages have distinct repair situations rather than neighbourhood claims or swapped introductions.

## Guide ownership and images

Every blog targets its slug topic, supports the garage repair service, and links to two or three closely related guides plus quote. Each gets an original featured image; no new face/brand/text. Shared supplemental images are identified as generated illustrations, not EPF jobs.

| Slug | Intent/type | Image subject |
|---|---|---|
| why-garage-drywall-tape-peels | Cause and repair decision / problem guide | Close view of peeling paper tape on solid garage wall |
| retape-or-replace-garage-drywall | Repair scope / comparison | Damaged lower board beside otherwise sound taped wall |
| garage-drywall-seams-cracking | Crack assessment / problem guide | Thin crack along garage wall seam |
| garage-ceiling-drywall-tape-coming-loose | Overhead repair / process and problem | Partly detached ceiling tape with garage tracks distant |
| garage-drywall-finishing-levels | Finish specification / comparison | Smooth primed garage with subtle side light |
| fix-bad-drywall-finishing-garage | Retained-board improvement / problem guide | Rough narrow compound ridges on unfinished garage wall |
| drywall-repair-vs-skimming-garage-walls | Joint repair vs surface treatment / comparison | Broad skim work on a stable garage wall |
| garage-drywall-repair-cost-factors | Estimate preparation / cost guide | Empty protected garage with several discrete repairs |
| garage-drywall-repair-before-painting | Preparation and handoff / process guide | Garage wall with spot-primed repairs ready for coating |
| garage-drywall-tape-repair-keeps-failing | Recurring defects / problem guide | Reopened seam through an older wide painted patch |

File naming: public/blog/{slug}-featured.webp. Prompts add: photorealistic Ontario residential garage, ordinary scale, no people, no text/logos/watermarks, landscape composition, credible drywall detailing and hardware. Alt text describes visible subject. One generated finish image may also illustrate the service pages; clearly disclose illustration.

## Technical sources checked

- https://www.americangypsum.com/sites/default/files/2022-05/ga-214-2021_17.pdf — GA-214 terminology; finish is separate from assembly requirements.
- https://www.cgcinc.com/content/dam/USG_Marketing_Communications/canada/product_promotional_materials/finished_assets/cgc-construction-handbook-ch05-finishing-drywall-systems-can-en.pdf — joints, drying, compatibility and common finishing issues.
- https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-sheetrock-taping-joint-compound-submittal-en-J60A.pdf — product-specific conditions, not one universal minimum for all products.
- https://www.ontario.ca/page/ontarios-building-code — applicable requirements need project-specific assessment; no blanket garage fire rating/thickness or permit exemption stated.

Unverified keyword volumes in the attachment are planning suggestions, not published facts. No competitor statistics, false project experience or ranking guarantee.
