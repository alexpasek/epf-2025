import { handle } from "@/seo-blog-agent/routes.cjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req, context) {
  const params = await context.params;
  return handle(req, params?.path || []);
}

export async function POST(req, context) {
  const params = await context.params;
  return handle(req, params?.path || []);
}
