# AGENTS.md

## Project

This is the EPF Pro Services website.

EPF Pro Services provides:
- Popcorn ceiling removal
- Smooth ceiling refinishing
- Drywall repair
- Drywall installation
- Interior painting
- Wallpaper removal
- Baseboard installation
- Level 4 and Level 5 drywall/ceiling finishing
- Dust-controlled sanding/removal with HEPA vacuum systems

Main service areas:
- Mississauga
- Toronto
- Oakville
- Burlington
- Hamilton
- Milton
- Etobicoke
- North York
- Grimsby
- St. Catharines
- GTA and nearby areas

## Main instruction

Always follow the rules in this file before making changes.

When the task is related to the SEO agent, agent automation, competitor research automation, or the hidden `/seo` interface, also follow:

- seo-blog-agent/AGENTS.md
- seo-agent-service/AGENTS.md
- docs/seo-agent-architecture.md

The SEO agent backend must stay separate from the public Next.js app. The public route at `app/api/seo-blog-agent/[[...path]]/route.js` is an Edge proxy only.

When the task is related to blogs, articles, guides, SEO support content, cost guides, local service support content, or image planning for blog posts, follow these files:

- docs/rules/blog-agent-rules.md
- docs/rules/blog-seo-checklist.md
- docs/rules/blog-style-guide.md
- docs/rules/blog-image-rules.md
- docs/rules/internal-linking-rules.md
- docs/rules/blog-review-checklist.md

## Before starting any blog task

Identify:

1. Main topic
2. Main keyword
3. Search intent
4. Blog type
5. Target service page to support
6. Target city or service area, if local
7. Topical cluster the blog belongs to
8. Main pillar page or money page the blog should support
9. Main internal links needed
10. Whether images are requested
11. Whether schema/metadata is supported by the project

## Blog task types

Use the correct rules depending on the task:

- Cost guide
- Process guide
- Comparison guide
- Problem/solution guide
- Local homeowner guide
- FAQ/support article
- Resale/value guide
- Image-supported blog
- Blog update/rewrite
- Internal-linking improvement task

## General coding rules

- Inspect the existing repo structure before creating new files.
- Reuse existing blog layouts, components, metadata patterns, and image components when available.
- Do not create duplicate components if the repo already has a reusable version.
- Do not change unrelated files.
- Do not add new packages unless clearly necessary.
- Keep changes minimal, clean, and consistent with the existing project.
- Preserve existing routing and deployment structure.
- Check imports before finishing.
- Check for build or type errors where possible.

## Content rules

Every blog must be:

- Helpful to real homeowners
- Clear and practical
- Human-readable for homeowners, not written like an SEO report
- At least 2,200 words unless the user explicitly asks for a short article or FAQ
- Written in EPF Pro Services contractor voice
- Based on real renovation knowledge
- Original
- Not copied from competitors
- Not generic AI filler
- Not keyword-stuffed
- Connected to the correct service pages through internal links
- Connected to the correct topical cluster through related service and blog links
- Written with clear H1/H2/H3 structure
- Finished with a useful CTA

Topical cluster, keyword, intent, pillar page, and competitor notes are planning information.

Do not publish planning notes as article headings or body copy.

Never add visible article sections titled:

- Topical cluster
- Search intent
- Target keyword
- Pillar page
- Money page
- SEO notes
- Internal linking plan
- Competitor research

Use those details to shape the article, metadata, and links only.

## Google-safe SEO rules

Follow people-first SEO principles.

Do not create content only to manipulate rankings.

Use authority-building SEO, not spam tactics.

Every blog should strengthen topical authority by:

- Covering the topic more completely than thin competitor pages
- Answering the main question early, then adding practical depth
- Linking to the correct pillar/money page
- Linking to closely related cluster articles
- Using clear descriptive anchors
- Including useful FAQ answers for long-tail searches
- Including Article/BlogPosting and FAQ schema when supported
- Using realistic images with descriptive alt text
- Showing EPF service knowledge naturally
- Keeping the content readable and useful for homeowners

Do not create thin pages.

Do not create city-swapped duplicate content.

Do not invent fake statistics, fake reviews, fake project examples, fake local facts, or fake certifications.

If a topic involves asbestos, safety, electrical work, structural damage, mold, or water damage, write carefully and recommend proper professional inspection when appropriate.

## Image rules

Every new blog must include a new, unique, realistic generated featured image unless the user explicitly says not to generate images.

The image must match the blog's main keyword, search intent, service topic, and target city or service area when the post is local.

Do not reuse the same featured image across multiple newly created posts.

If image generation is unavailable, add a complete featured image prompt, file name suggestion, and alt text so the image can be generated later.

When the user asks for images, image prompts, blog images, featured images, or visual assets:

- Follow docs/rules/blog-image-rules.md.
- Create an image plan first.
- Use realistic home renovation photography style.
- Generate a different realistic featured image for every new blog post.
- Do not add fake text, fake logos, fake watermarks, or fake brand labels inside images.
- Do not include people's faces unless specifically requested.
- Always include file name suggestions and alt text.

## Internal linking rules

Every blog should support one or more money pages.

Every blog should maintain the correct topical cluster.

Use descriptive anchor text.

Do not use "click here" as anchor text.

Link naturally to:
- Main service page
- Relevant city/service page
- Related blog articles
- Contact/quote page where useful

Follow docs/rules/internal-linking-rules.md.

## Final response after every blog task

Always include:

- Files changed
- New or updated page path
- Target keyword
- Blog type
- Search intent
- Internal links added
- Images or image prompts added
- SEO checks completed
- Build/checks performed, if available
- Anything that still needs manual review
