# Cloudflare Pages Deployment Rules

These rules protect the live EPF Pro Services website, contact form, SEO URLs, and GitHub push deployment flow.

## Production Website Source

The public production website should be served by Cloudflare Pages, not by the old Worker.

```txt
Cloudflare project: epf-2025
Repository: alexpasek/epf-2025
Production branch: main
Build command: npx @cloudflare/next-on-pages@1
Build output directory: .vercel/output/static
Root directory: /
```

The normal deploy flow is:

```bash
git add .
git commit -m "Clear description"
git push origin main
```

If work is done on another branch such as `prod-stable`, sync it to `main` without force-pushing unless the owner explicitly asks for a force operation.

## Do Not Reconnect The Old Worker

Do not connect or route the old `wallpaper-removal-pro` Worker to:

```txt
epfproservices.com/*
www.epfproservices.com/*
epfproservices.com
www.epfproservices.com
```

The Worker caused production issues because it did not have the same Pages variables and secrets. In particular, the contact form returned:

```txt
Missing RESEND_API_KEY
```

That error can happen when the custom domain is accidentally served by the Worker instead of Pages.

## Required Pages Variables

Keep these variables in the Cloudflare Pages project `epf-2025`, Production environment:

```txt
RESEND_API_KEY
QUOTE_TO_EMAIL=webtoronto22@gmail.com
RESEND_FROM
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
NEXT_PUBLIC_BASE_URL=https://epfproservices.com/
GOOGLE_MAPS_API_KEY
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
NEXT_PUBLIC_SECOND_GOOGLE_MAPS_API_KEY
OPENAI_API_KEY
OPENAI_MODEL
GBP_PLACE_ID
CRM_BUSINESS_EMAILS
GMAIL_OAUTH_STATE
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_GMAIL_REDIRECT_URI
```

Secrets such as `RESEND_API_KEY`, `OPENAI_API_KEY`, Gmail OAuth values, and Google client secrets should be stored as Cloudflare secrets, not public plaintext values.

## Verification Checklist

Before pushing a production change when code changed:

```bash
npm run build
npx @cloudflare/next-on-pages@1
```

After Cloudflare deploys:

```bash
curl -I -L https://www.epfproservices.com/
curl -I -L https://epfproservices.com/
```

Expected result:

- Response is `200` or expected redirect.
- Headers do not include `x-opennext`.
- Headers look like Cloudflare Pages / Next output, such as `x-matched-path` or `x-next-cache-tags`.

Test the contact form endpoint after routing or environment changes:

```bash
curl -s -X POST https://www.epfproservices.com/api/sendmail \
  -H 'Content-Type: application/json' \
  -d '{"name":"Deployment Test","email":"test@example.com","phone":"","details":"Testing live contact form routing."}'
```

Expected result:

```json
{"ok":true}
```

If the response says `Missing RESEND_API_KEY`, check the domain routing first. The custom domain is probably still attached to the old Worker or a different Cloudflare project.

## SEO Safety

Before changing deployment settings, make sure existing public pages remain available:

```bash
find app -path '*/page.*' | wc -l
rg '<loc>' public/sitemap-0.xml
```

Do not delete or rename existing service URLs, city URLs, blog URLs, redirects, or sitemap generation unless the owner explicitly asks for that exact URL change.

## SEO Agent Separation

The SEO agent backend must remain separate from the public website deployment.

- Public site: Cloudflare Pages project `epf-2025`
- SEO agent backend: standalone service from `seo-agent-service/`
- Public proxy route: `app/api/seo-blog-agent/[[...path]]/route.js`

Do not solve SEO agent backend problems by moving Node filesystem code back into public Next.js routes.
