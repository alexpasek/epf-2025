# AI blog automation

## Production rule

The live EPF Pro Services website is:

```text
https://epfproservices.com
```

The Cloudflare Pages project is:

```text
epf-2025
```

The blog-to-GMB/poster webhook must send the final live EPF URL only:

```text
https://epfproservices.com/blog/example-slug/
```

Do not send `wallpaper-removal-pro.webtoronto22.workers.dev` URLs for EPF blog promotion. That URL belongs to the separate Worker/testing path and is not the real customer-facing EPF website.

## Correct blog-to-GMB flow

Use this order:

1. Create or generate the blog in this repository.
2. Commit and push the blog change.
3. Wait for Cloudflare Pages project `epf-2025` to deploy.
4. Confirm the blog URL is live on `https://epfproservices.com/blog/.../`.
5. Send the webhook to the GMB/poster agent.

The webhook intentionally runs after deployment. It should not run immediately when a blog is generated, because the final URL may still return `404` until Cloudflare Pages finishes deploying.

## Commands

Generate a local AI blog entry:

```bash
npm run blog:generate
```

After the blog is committed, pushed, and deployed, send one specific blog to the poster agent:

```bash
npm run blog:webhook -- --slug example-slug
```

Send the newest not-yet-sent deployed blog:

```bash
npm run blog:webhook
```

Send all not-yet-sent deployed blogs:

```bash
npm run blog:webhook -- --all
```

Test without sending the webhook:

```bash
npm run blog:webhook -- --slug example-slug --dry-run --force
```

## Required environment variables

The webhook sender reads `.env.local`, then `.env`.

Required:

```text
GMB_POSTER_WEBHOOK_URL=https://poster-agent.example.com/api/webhooks/blog-created
EPF_WEBHOOK_SECRET=your-shared-secret
```

Optional:

```text
NEXT_PUBLIC_SITE_URL=https://epfproservices.com
BLOG_CREATED_WEBHOOK_URL=alternate-name-for-GMB_POSTER_WEBHOOK_URL
GMB_POSTER_WEBHOOK_SECRET=alternate-name-for-EPF_WEBHOOK_SECRET
```

Keep `NEXT_PUBLIC_SITE_URL` set to `https://epfproservices.com` for production.

## Webhook payload

The poster agent receives this JSON:

```json
{
  "event": "BLOG_POST_CREATED",
  "url": "https://epfproservices.com/blog/example-slug/",
  "title": "Blog title",
  "excerpt": "Short blog description",
  "city": "Oakville",
  "service": "Popcorn Ceiling Removal",
  "publishedAt": "2026-06-13T12:00:00.000Z"
}
```

The request includes this header:

```text
x-epf-webhook-secret: your-shared-secret
```

## Where to make future changes

Blog generation:

```text
scripts/generate-popcorn-post.js
```

Use this file if you need to change how AI-generated blog entries are created, including title, slug, city, service, internal links, or saved blog data.

Webhook sending after deployment:

```text
scripts/send-deployed-blog-webhooks.js
```

Use this file if you need to change the webhook payload, the live URL check, duplicate-send tracking, command-line flags, webhook headers, or the destination environment variable names.

Blog data file:

```text
data/generated-posts.json
```

Generated blog entries are saved here.

Webhook sent-state file:

```text
.blog-webhook-sent.json
```

This file is local and gitignored. It prevents sending the same blog webhook multiple times from the same machine.

NPM commands:

```text
package.json
```

Use this file if you need to rename or add commands such as `blog:generate` or `blog:webhook`.

Cloudflare Pages deployment:

```text
Cloudflare Pages project: epf-2025
Production domain: https://epfproservices.com
Git branch: prod-stable
```

Use Cloudflare Pages deployment status to confirm the blog is live before running the webhook command.

## How to check logs

Cloudflare Pages live Function logs:

```bash
npx wrangler pages deployment tail --project-name epf-2025 --environment production --format pretty
```

Then trigger the blog refresh or webhook action. In Cloudflare logs, look for:

```text
[blog-automation]
```

Local/manual webhook logs:

```bash
npm run blog:webhook -- --slug example-slug
```

Dry-run local/manual webhook logs without sending to the poster agent:

```bash
npm run blog:webhook -- --slug example-slug --dry-run --force
```

In local terminal logs, look for:

```text
[blog-webhook]
```

## Important behavior

`npm run blog:generate` does not send the webhook by default. It prints the command to run after deployment.

To force old immediate behavior for local testing only:

```bash
SEND_BLOG_WEBHOOK_IMMEDIATELY=1 npm run blog:generate
```

Do not use immediate sending for normal production publishing, because the final EPF blog URL may not exist yet.

`npm run blog:webhook` verifies the live blog URL before sending. If the URL is not live, it skips the webhook and exits with a failure so the poster agent does not receive a broken link.

## Future development checklist

Before changing this automation, confirm:

1. The webhook still sends `https://epfproservices.com/blog/.../`.
2. The script still verifies the live URL before sending.
3. The webhook is still sent after Cloudflare Pages deploys, not before.
4. The payload still includes `event`, `url`, `title`, `excerpt`, `city`, `service`, and `publishedAt`.
5. Secrets are read from environment variables and are not committed.
6. Test with `--dry-run --force` before sending real webhook traffic.
