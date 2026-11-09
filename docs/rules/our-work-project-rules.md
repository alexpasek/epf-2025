# Our Work Project Rules

## Purpose and scope

Create useful, factual records of completed EPF Pro Services work. Help a homeowner see the original condition, understand the actual scope and assess a relevant local result. Local search relevance must come from the documented job, its photographs and useful connections to service pages.

Apply these rules to project posts, case studies, project photographs, Our Work listings and project cards embedded elsewhere. Use the accompanying project brief before writing and the review checklist before finishing. These are repository instructions for agents and editors, not automated validation already implemented in the application.

Project case studies are distinct from educational blogs. Do not require 2,200 words, generate job photographs, force FAQs or copy the full blog field-guide layout. Write enough to explain the documented job without generic padding. If the material cannot support a useful standalone case study, keep it as a verified gallery item or draft until more detail is available.

## Establish the evidence before drafting

1. Identify one actual job, its primary service and the homeowner's goal.
2. Record the owner's confirmation or other authorized job record establishing that EPF completed the work and its city. Keep a private source reference for factual claims.
3. Match each photograph to that job and its actual stage. File names, existing captions, map pins and similar-looking rooms do not independently verify location or provenance.
4. Confirm permission to publish the supplied photographs and any customer quotation or identifying information. Existing explicit permission can be reused; do not ask again unnecessarily.
5. Separate confirmed facts from unknown details and general trade explanations. Photos alone cannot establish elapsed time, cost, a tested hazard, hidden repairs or a formal finish level.
6. Select the existing canonical service and city/service destinations and a useful project-specific search intent.
7. Check existing project records for the same job. Add newly supplied stages to that record rather than making a duplicate case study.

Publication essentials: confirmed EPF job, confirmed city, usable genuine job image with publication permission, confirmed work performed and endpoint, and enough job-specific detail to describe the work honestly. If an essential is missing, prepare the useful draft and request only the missing information. Keep the record non-public and out of the sitemap until resolved.

Optional unknowns do not block publication: neighbourhood, exact completion date, area, ceiling height, duration, materials, price or review. Omit them rather than guess. Never label missing before photos as if they exist. A project with only finished photos can be published if its other evidence is sufficient, but must not be called a before-and-after study.

Private source references, customer contact information, consent notes and original location metadata must not be bundled into public page data, browser JavaScript or JSON-LD. If no approved private store is available, request the fact in conversation; do not copy personal records into the repository.

## Information architecture and placement

- Preserve `/our-work/` as the central library and existing main-navigation destination. Broaden the library to the EPF services actually documented by projects.
- For new project pages, use `/our-work/[project-slug]/` unless a later explicit project decision changes this convention. This is the target architecture, not a claim that the route already exists.
- Use lowercase descriptive slugs, normally service + confirmed city + a meaningful job distinction. Add a neighbourhood only when verified. Avoid street addresses, customer names and arbitrary keyword variants.
- One job has one permanent canonical URL. Multiple services, cities in a visitor filter or new photos do not create duplicate versions of the job.
- Lead the library with completed-project cards. City and service filters should select the same records. Preserve existing useful gallery/video URLs and links when implementing the library.
- Show relevant project cards near the service introduction on city/service pages, before lengthy supporting content where the layout permits. Reuse an existing suitable projects section instead of adding a second one.
- Feature a small curated selection on the homepage. Do not imply an older project is recent without a known completion date.
- Neighbourhood pages may show a confirmed local project. A nearby project must retain its true location and be labelled as nearby, not relabelled to match the page.
- Start with filters instead of creating empty city project archives. Add an indexable city archive only when it offers a useful distinct collection and navigation. Do not index every filter combination; document canonical/indexing behaviour when filters are implemented.
- Use a shared project record to populate the detail page and all cards. Do not maintain conflicting copies of the narrative, dates or job facts in each placement.

## Required project page structure

1. Visible breadcrumbs: Home → Our Work → project.
2. One descriptive H1 naming the primary work and confirmed city; add a real distinguishing detail when helpful.
3. Genuine finished/result image where available, with accurate alt text and a caption. If the endpoint was primer-ready, say so instead of calling it painted.
4. A short opening summary explaining the location, homeowner's goal, work delivered and endpoint.
5. A compact facts panel with confirmed fields only: city, optional neighbourhood, room/property type, service, work period, area, duration and finish.
6. Original condition and the requested improvement, supported by actual before photos if available.
7. Work performed: the real sequence, relevant preparation/protection, repairs, materials/methods and finishing stages. Distinguish EPF's scope from work completed by another trade.
8. One or more genuine job-specific decisions or constraints and how they were handled. Do not invent a challenge to fill a section.
9. During/after photos with explanatory captions, then the delivered result and any confirmed exclusions or remaining work.
10. Contextual links to the matching local service and main service; a related guide/project when useful.
11. EPF attribution and accurate publication/update dates, followed by a useful quote CTA asking for the visitor's city, photos and scope.

Use readable sections, a mobile-friendly facts panel and photo groups. A table of contents is optional for a longer study. FAQs are optional and should answer questions specific to the work; do not append generic city questions simply for schema. Keep planning keywords, evidence notes and editorial checklists out of public copy.

## Local relevance requirements

### Required local connections

- Use the confirmed city naturally in the title/H1, opening summary, facts panel and metadata. Repetition in every heading or caption is unnecessary.
- Make the primary service explicit and connect it to the work shown. Target a job-specific question or example rather than reproducing a general service landing page.
- Link to the existing canonical city/service page and main service page. Verify current routes and redirects; do not default to `/locations/` advertising pages or noindex destinations.
- Add a crawlable incoming link from the Our Work library and the matching city/service page as part of publishing the project. If that city/service page does not exist, use the closest accurate existing service/area hub and record the gap; do not create a thin city page automatically.
- Include the project in the correct city/service filters and keep city names consistent across its record, cards, page and structured data.

### Add these only when supported by the job

- Confirmed neighbourhood/community, including its relationship to the city.
- Property and room type, ceiling height, approximate area and actual condition.
- Actual logistical details: occupied rooms, stairs, condo access, elevator scheduling, furniture protection or a coordinated trade handoff.
- Relevant observed light, substrate, texture, repair or finish conditions. Describe the specific home rather than making city-wide housing assumptions.
- Actual completion month/season and elapsed working time where recorded. Separate time on site from drying/return-visit days.
- A permissioned, genuine customer comment tied to the job. Preserve meaning and attribution; do not convert it into a fabricated review or rating.
- Relevant project video, supplier/material detail or external reference when it helps explain the work and is verified.

These details are evidence and useful context, not a quota. Do not add nearby landmarks, postal codes, roads or neighbourhood lists just to increase location mentions. Never infer an exact neighbourhood from a room image or assign one randomly.

### Location integrity and privacy

- City/neighbourhood is normally enough. Do not publish a customer's exact address, precise coordinates, identifying documents, faces or other personal details without specific authorization.
- Preserve original photos unchanged, including embedded GPS coordinates, when the owner requests it. Do not invent coordinates or replace them with city-centre coordinates. Remove unnecessary GPS/customer metadata from web image derivatives unless the owner specifically requests its retention there; original preservation and public geotagging are separate choices.
- Do not generate house pins or invented street names and present them as jobs. Keep coverage maps clearly labelled as coverage, separate from completed-project evidence.
- If a project map is useful, use confirmed records and disclose that positions are approximate; do not create a pinpoint residential marker by default.
- Do not invent a local office, business address, review, permit, certification, test result or partner relationship. Use only the site's confirmed business identity/contact details where needed.
- A project in one city does not establish work in surrounding cities. Nearby-city placement must remain accurately labelled.
- Do not promise ranking improvements, Google Maps placement or AI citations. Do not treat EXIF geotags, keyword-heavy filenames or schema as a ranking guarantee.
- Google Business Profile posts or other external sharing require a separate authorized action. Preparing a case study does not authorize posting to another service.

## Photograph requirements

- Use genuine photographs of this job for the featured image, process evidence and result. No AI-generated or stock images may stand in for the completed work.
- Prefer before, during and finished views, ideally with comparable angles. Aim for a useful selection, often 4–8 images, but never duplicate or fabricate stages to reach a count.
- If the available endpoint is skimmed, sanded or primed, label it accurately. Do not call a primed surface a final painted finish.
- Keep before/after order consistent and ensure paired images depict the same area. Distinguish separate rooms or phases.
- Permitted preparation includes cropping, rotation, proportionate exposure/colour correction, resizing and compression that preserve the actual condition. Never remove defects, improve workmanship digitally, synthesize missing work or reconstruct a false before image.
- Reuse the existing ResponsiveImage component and responsive-image build pipeline. Responsive variants resize or compress real photos; they do not generate or alter the depicted work.
- Use descriptive lowercase filenames, unique useful alt text, captions, dimensions and responsive WebP/appropriate formats. Add city/room/stage only when true and helpful; avoid keyword strings in alt text.
- Prioritize the featured image and lazy-load supporting images. Images and useful captions must be available in the page, not solely inside a modal or CSS background.
- An optional educational diagram must be clearly labelled and must not be used as job evidence. It does not replace genuine project imagery.

## Internal linking and topic relationships

- Main service and matching city/service links belong near relevant discussion of scope, not only in the footer.
- Link to a confirmed existing neighbourhood service page only if it is the correct place and helps the reader.
- Include one or two closely related guides/projects when useful, plus a quote/contact CTA. Do not force a link quota when fewer destinations are relevant.
- Add a contextual incoming link from an existing related guide when it genuinely demonstrates that guide's subject. Publishing a project includes the necessary library and local-service card integration.
- Use descriptive anchors such as “Burlington popcorn ceiling removal” or “see this occupied-home ceiling project.” Avoid repetitive exact-match links and city keyword lists.
- Reuse short card summaries across placements, all pointing to the same project page. Do not copy the entire case study into city pages or publish it again as a blog.
- Educational companion blogs may explain a broader process, but must have a distinct purpose and link to the case study as evidence.

## Metadata, structured data and indexing

- Give each project a unique title, description, canonical and social image based on its actual service, location and result.
- Keep publication date, modification date and job completion date distinct. Never label the publication date as the work date without confirmation or refresh dates without meaningful changes.
- Render meaningful text, image elements and internal links in crawlable HTML using existing Next.js conventions.
- Use BreadcrumbList matching visible navigation. Use Article for a substantive written case study when appropriate, with EPF as Organization author, truthful dates and actual job images. ImageObject may describe real photos; CollectionPage/ItemList may describe the library.
- Structured data must match visible facts. Do not invent a special Google “project” rich-result type, a branch LocalBusiness at the customer's home, or unsupported ratings. Do not add Service schema automatically merely because a project mentions a service.
- FAQPage is optional only when there is a matching useful visible FAQ; it does not guarantee a search feature.
- Add each public canonical project URL to the sitemap. Drafts, private evidence and empty/filter-only pages must not be exposed as published project URLs.
- Preserve established URLs and redirects. Check the full route with its trailing slash; the existing blog middleware must not be copied blindly into project routes.
- After authorized deployment, verify live responses, canonicals, images and sitemap membership. Indexing checks and later Search Console impressions/clicks are measurement, not promised results.

## Shared record contract

Before implementing a storage format, inspect the current project infrastructure. The existing Oakville record/component is a starting point for verification and should be reused or generalized carefully, not populated with invented jobs.

One record should distinguish:

- Identity: stable job ID, slug, title, content type `project`, draft/published status.
- Confirmed public facts: city, optional neighbourhood, primary/additional services, room/property, problem, work performed, outcome and optional dimensions/materials/timing.
- Dates: publication/update dates separate from optional completion date.
- Images: stable asset, actual stage, room/area, alt text, caption, dimensions and optional verified comparison group.
- Relationships: canonical service URLs, local destination, related guides/projects and featured placements.
- Private verification/permission references: retained separately from exported public content; never serialized into the public record payload.

Keep unknown fields empty; never fill them with plausible defaults. A single `verified: true` flag does not make every optional field verified. Use the brief to record which facts are supported. Do not wire project records into the blog generator without explicitly preserving this content type and its evidence rules.

## Completion report

For each project task, report files changed, project URL/status, confirmed service and locality, search intent, supplied photos/stages, useful local details included, outgoing/incoming links, metadata/schema checks, build/browser checks and any missing facts or publication steps. Distinguish implemented, deployed and indexed. Do not claim automatic enforcement or completed testing that has not occurred.

## Reference principles

- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: image SEO](https://developers.google.com/search/docs/appearance/google-images)
- [Google: spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)

Consult current official documentation when implementing behaviour that may have changed. These references do not override the factual evidence requirement or authorize deployment.
