# SEO Agent Architecture

The SEO agent is intentionally separate from the public EPF Pro Services website.

## Production Flow

```txt
Visitor/admin opens /seo on epfproservices.com
        |
        v
Public Next.js site route /api/seo-blog-agent/*
        |
        v
Edge proxy forwards to SEO_AGENT_API_URL
        |
        v
Standalone Node SEO agent service
        |
        v
Research, draft, approve, publish to GitHub prod-stable
        |
        v
Cloudflare Pages rebuilds the public site from GitHub
```

## Why It Is Split

The public site should stay deployable through Cloudflare Pages and GitHub push.

The SEO agent backend needs Node filesystem access for agent state and local draft publishing. Those modules are not safe to bundle directly into Cloudflare Pages Edge routes, so the public site keeps only a lightweight proxy.

## Public Website Settings

Cloudflare Pages project:

```txt
Repository: alexpasek/epf-2025
Production branch: prod-stable
```

Recommended Pages build settings for the old GitHub push flow:

```txt
Build command: npx @cloudflare/next-on-pages@1
Build output directory: .vercel/output/static
Root directory: /
```

Required public site variables:

```txt
SEO_AGENT_API_URL=https://YOUR_AGENT_HOST/api/seo-blog-agent
RESEND_API_KEY=
QUOTE_TO_EMAIL=webtoronto22@gmail.com
RESEND_FROM=
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
```

Do not attach the `wallpaper-removal-pro` Worker route to `epfproservices.com/*` if the domain should be served by Cloudflare Pages.

## SEO Agent Backend Settings

Run the backend with:

```bash
npm run seo:agent
```

Required backend variables:

```txt
SEO_BLOG_AGENT_KEY=
OPENAI_API_KEY=
GITHUB_TOKEN=
GITHUB_REPO=alexpasek/epf-2025
GITHUB_BRANCH=prod-stable
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
```

Optional backend variables:

```txt
OPENAI_RESEARCH_MODEL=
SEO_BLOG_AGENT_DAILY_TOPICS=
SEO_AGENT_PORT=8788
SEO_AGENT_ALLOWED_ORIGINS=https://epfproservices.com,https://www.epfproservices.com
EPF_SITE_ROOT=/absolute/path/to/site/repo
SEO_BLOG_AGENT_STORE_PATH=/absolute/path/to/store.json
```

## AI/Codex Operating Rules

- Keep `app/api/seo-blog-agent/[[...path]]/route.js` as an Edge proxy.
- Keep the Node backend in `seo-agent-service/` and `seo-blog-agent/`.
- Never publish unapproved drafts.
- Keep GitHub publishing pointed at `prod-stable`.
- Follow the root `AGENTS.md` and `docs/rules/*` before generating or changing blog content.
- The UI should show research steps and outcomes so the owner can correct the agent before publishing.
