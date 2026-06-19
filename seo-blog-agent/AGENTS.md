# AGENTS.md

## Purpose

This folder contains the SEO agent business logic for EPF Pro Services.

The agent researches keywords and competitors, creates blog drafts, records each agent step for review in the UI, and publishes approved posts into the website blog data.

## Deployment Boundary

Do not import these `.cjs` backend modules directly from the public Next.js app.

The public site route at `app/api/seo-blog-agent/[[...path]]/route.js` is an Edge proxy only. It forwards requests to the standalone Node service in `seo-agent-service/`.

This boundary exists because this folder uses Node APIs such as `fs/promises` and writes local agent state.

## Blog Rules

Before changing research, writing, publishing, or image planning logic, read and follow:

- `../AGENTS.md`
- `../docs/rules/blog-agent-rules.md`
- `../docs/rules/blog-seo-checklist.md`
- `../docs/rules/blog-style-guide.md`
- `../docs/rules/blog-image-rules.md`
- `../docs/rules/internal-linking-rules.md`
- `../docs/rules/blog-review-checklist.md`

## Agent Workflow Rules

- Research must be based on real seed keywords, real competitor URLs, or clearly labeled keyword discovery.
- Reject irrelevant competitor links and record why they were rejected.
- Do not copy competitor text.
- Do not invent reviews, statistics, certifications, project examples, or local facts.
- Drafts must be written for homeowners first, with SEO supporting the content naturally.
- Drafts must include useful internal links to the correct service or city pages.
- Daily automation can create research jobs and drafts, but must stop before publishing.
- A draft can publish only when `approved_by_user` is true and the draft status is `approved`.
- Publishing must target GitHub repo `alexpasek/epf-2025` and branch `prod-stable` unless the user explicitly says otherwise.

## Required Keys

```txt
SEO_BLOG_AGENT_KEY=
OPENAI_API_KEY=
GITHUB_TOKEN=
GITHUB_REPO=alexpasek/epf-2025
GITHUB_BRANCH=prod-stable
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
```

`SITE_ADMIN_API_KEY` may replace `SEO_BLOG_AGENT_KEY`.

`SITE_ADMIN_GITHUB_TOKEN` may replace `GITHUB_TOKEN`.
