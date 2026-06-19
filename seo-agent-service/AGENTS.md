# AGENTS.md

## Purpose

This folder is the standalone Node.js host for the EPF SEO agent backend.

Keep this service separate from the public Next.js website. The public site must not import `seo-blog-agent/*.cjs` directly because those modules use Node filesystem APIs and cannot be bundled into Cloudflare Pages Edge routes.

## Architecture

- Public website UI: `/seo`
- Public website proxy route: `/api/seo-blog-agent/*`
- Required public site variable: `SEO_AGENT_API_URL`
- Standalone backend entrypoint: `seo-agent-service/server.cjs`
- Agent business logic: `seo-blog-agent/*.cjs`
- Local agent store: `seo-blog-agent/data/store.json` or `SEO_BLOG_AGENT_STORE_PATH`
- Published blog data: `data/generated-posts.json`
- GitHub publishing target: `alexpasek/epf-2025`, branch `prod-stable`

## Rules For AI/Codex Changes

- Do not move the SEO agent backend back into `app/api/seo-blog-agent`.
- Do not change the public site proxy to `runtime = "nodejs"`.
- Keep the public website deployable without Node filesystem access.
- Keep `GITHUB_BRANCH` defaulting to `prod-stable`.
- Keep publishing limited to approved drafts.
- Do not auto-publish daily automation output.
- Do not overwrite existing blog slugs or existing approved posts.
- Do not add packages unless a built-in Node API cannot handle the task.
- Read `../AGENTS.md` and the blog rules in `../docs/rules/` before changing blog generation behavior.

## Expected Workflow

1. Create a job from the UI or daily automation.
2. Run AI-assisted keyword and competitor research.
3. Show the process and outcomes in the UI for correction.
4. Create a draft using EPF blog rules and internal linking rules.
5. Wait for human review.
6. Publish only after approval.
7. Publish by committing the updated blog data to GitHub on `prod-stable`.

## Required Production Variables

```txt
SEO_BLOG_AGENT_KEY=
OPENAI_API_KEY=
GITHUB_TOKEN=
GITHUB_REPO=alexpasek/epf-2025
GITHUB_BRANCH=prod-stable
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
```

Equivalent accepted names:

- `SITE_ADMIN_API_KEY` instead of `SEO_BLOG_AGENT_KEY`
- `SITE_ADMIN_GITHUB_TOKEN` instead of `GITHUB_TOKEN`
