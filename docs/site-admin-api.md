# EPF Site Admin API

This API lets a private Custom GPT read and update approved website files by committing changes to GitHub. It is meant for owner/admin use only.

## Routes

- `GET /api/site-admin` checks configuration and shows allowed roots.
- `POST /api/site-admin` runs an admin action.
- `GET /api/site-admin/openapi` returns the OpenAPI schema for a Custom GPT Action.

## Required Environment Variables

Set these in Cloudflare Pages or the deployment environment:

- `SITE_ADMIN_API_KEY`: long private bearer token used by ChatGPT Actions.
- `SITE_ADMIN_GITHUB_TOKEN` or `GITHUB_TOKEN`: GitHub fine-grained token with contents read/write access for the repo.
- `GITHUB_REPO`: optional, defaults to `alexpasek/epf-2025`.
- `GITHUB_BRANCH`: optional, defaults to `main`.
- `SITE_ADMIN_MAX_BYTES`: optional max file size, defaults to `4000000`.

Use a fine-grained GitHub token scoped only to this repository. Do not use a personal token with broad account access.

## Allowed Paths

The API can only touch approved roots:

- `app/`
- `components/`
- `data/`
- `docs/`
- `lib/`
- `public/`
- `scripts/`
- `next.config.js`
- `package.json`
- `package-lock.json`
- `postcss.config.js`
- `tailwind.config.js`

It blocks `.env*`, `.git`, `.next`, `.open-next`, `.vercel`, `node_modules`, and `wrangler.toml`.

## Authentication

Send the admin key as a bearer token:

```bash
Authorization: Bearer YOUR_SITE_ADMIN_API_KEY
```

## Example Requests

Read a file:

```bash
curl https://epfproservices.com/api/site-admin \
  -H "Authorization: Bearer $SITE_ADMIN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"action":"get_file","path":"lib/popcornAuthorityPosts.js"}'
```

Update or create a file:

```bash
curl https://epfproservices.com/api/site-admin \
  -H "Authorization: Bearer $SITE_ADMIN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "action":"upsert_file",
    "path":"docs/example.md",
    "content":"# Example\n\nUpdated through the site admin API.",
    "message":"Update example docs from site admin API"
  }'
```

Delete a file:

```bash
curl https://epfproservices.com/api/site-admin \
  -H "Authorization: Bearer $SITE_ADMIN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "action":"delete_file",
    "path":"docs/example.md",
    "confirm":"DELETE docs/example.md",
    "message":"Delete example docs from site admin API"
  }'
```

## Custom GPT Setup

1. Deploy the site with the environment variables above.
2. Open `https://epfproservices.com/api/site-admin/openapi`.
3. Add that OpenAPI schema as a Custom GPT Action.
4. Set authentication to bearer token and use `SITE_ADMIN_API_KEY`.
5. In the GPT instructions, tell it to read files before editing them and to commit only scoped changes.

## Important Limit

This API commits source changes to GitHub. The live site updates only after your deployment pipeline builds the new commit. If automatic deploys are disabled, you still need to trigger a deploy.
