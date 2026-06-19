import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req) {
  const url = new URL(req.url);
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    `${url.protocol}//${url.host}`.replace(/\/$/, "");

  return NextResponse.json({
    openapi: "3.1.0",
    info: {
      title: "EPF Pro Services Site Admin API",
      version: "1.0.0",
      description:
        "Protected API for reading, creating, updating, and deleting approved website files through GitHub commits.",
    },
    servers: [{ url: origin }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          description:
            "Use SITE_ADMIN_API_KEY as the bearer token. Do not expose this key publicly.",
        },
      },
      schemas: {
        AdminRequest: {
          type: "object",
          properties: {
            action: {
              type: "string",
              enum: [
                "get_file",
                "list_directory",
                "upsert_file",
                "delete_file",
              ],
            },
            path: {
              type: "string",
              description:
                "Repository-relative path inside approved roots such as app/, lib/, components/, docs/, data/, public/, or scripts/.",
            },
            branch: {
              type: "string",
              description:
                "Optional GitHub branch. Defaults to GITHUB_BRANCH or prod-stable.",
            },
            ref: {
              type: "string",
              description:
                "Optional Git ref for read operations. Use branch if editing.",
            },
            content: {
              type: "string",
              description:
                "UTF-8 text content for upsert_file. Use contentBase64 for binary files.",
            },
            contentBase64: {
              type: "string",
              description:
                "Base64 file content for upsert_file, useful for images.",
            },
            message: {
              type: "string",
              description: "Git commit message for write operations.",
            },
            confirm: {
              type: "string",
              description:
                "Required for delete_file. Must equal DELETE followed by the exact path.",
            },
          },
          required: ["action", "path"],
        },
      },
    },
    security: [{ bearerAuth: [] }],
    paths: {
      "/api/site-admin": {
        get: {
          operationId: "getSiteAdminStatus",
          summary: "Check API status and allowed roots",
          responses: {
            "200": {
              description: "Status response",
            },
            "401": {
              description: "Missing or invalid bearer token",
            },
          },
        },
        post: {
          operationId: "runSiteAdminAction",
          summary: "Read or modify approved site files",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/AdminRequest" },
                examples: {
                  getBlogData: {
                    value: {
                      action: "get_file",
                      path: "lib/popcornAuthorityPosts.js",
                    },
                  },
                  updateRobotsDocs: {
                    value: {
                      action: "upsert_file",
                      path: "docs/example.md",
                      content: "# Example\n\nUpdated from ChatGPT.",
                      message: "Update example docs from site admin API",
                    },
                  },
                },
              },
            },
          },
          responses: {
            "200": {
              description:
                "Action completed. For file reads, content is returned as base64 from GitHub.",
            },
            "400": {
              description: "Invalid action, blocked path, or GitHub error",
            },
            "401": {
              description: "Missing or invalid bearer token",
            },
          },
        },
      },
    },
  });
}
