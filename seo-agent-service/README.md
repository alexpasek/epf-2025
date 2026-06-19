# Standalone SEO Agent Service

This service keeps the SEO research/draft/publish backend separate from the public Next.js site.

The public site keeps the hidden UI at `/seo`. Browser requests go to the site route `/api/seo-blog-agent/*`, and that route proxies to this standalone service through `SEO_AGENT_API_URL`.

## Run Locally

```bash
npm run seo:agent
```

Default local URL:

```txt
http://localhost:8788/api/seo-blog-agent
```

Health check:

```bash
curl http://localhost:8788/health
```

## Required Environment

Set these on the machine or host running this service:

```txt
SEO_BLOG_AGENT_KEY=
OPENAI_API_KEY=
GITHUB_TOKEN=
GITHUB_REPO=alexpasek/epf-2025
GITHUB_BRANCH=main
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
```

`SITE_ADMIN_API_KEY` can be used instead of `SEO_BLOG_AGENT_KEY`.

`SITE_ADMIN_GITHUB_TOKEN` can be used instead of `GITHUB_TOKEN`.

`OPENAI_API_KEY` is strongly recommended for automatic competitor discovery. Without it, the service can still accept manually supplied competitor URLs and score them, but public search discovery may be limited.

Optional:

```txt
OPENAI_RESEARCH_MODEL=
SEO_BLOG_AGENT_DAILY_TOPICS=
SEO_AGENT_PORT=8788
SEO_AGENT_API_PREFIX=/api/seo-blog-agent
SEO_AGENT_ALLOWED_ORIGINS=https://epfproservices.com,https://www.epfproservices.com
EPF_SITE_ROOT=/absolute/path/to/epfproservices2025build
SEO_BLOG_AGENT_STORE_PATH=/absolute/path/to/store.json
```

## Public Site Environment

Set this on the public website deployment:

```txt
SEO_AGENT_API_URL=https://YOUR_AGENT_HOST/api/seo-blog-agent
```

The public site also still needs its normal website secrets, including:

```txt
RESEND_API_KEY=
QUOTE_TO_EMAIL=webtoronto22@gmail.com
RESEND_FROM=
```

## Test Requests

```bash
curl http://localhost:8788/api/seo-blog-agent/config \
  -H "Authorization: Bearer $SEO_BLOG_AGENT_KEY"
```

```bash
curl -X POST http://localhost:8788/api/seo-blog-agent/automation/daily \
  -H "Authorization: Bearer $SEO_BLOG_AGENT_KEY" \
  -H "Content-Type: application/json" \
  -d "{}"
```

Daily automation creates a draft for manual review. It must not publish automatically.
