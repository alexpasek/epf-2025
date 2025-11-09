import { handlePagesFunction } from "@cloudflare/next-on-pages";

export default {
    async fetch(request, env, ctx) {
        return handlePagesFunction(request, env, ctx);
    },
};