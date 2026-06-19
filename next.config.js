// const path = require("path");
// /** @type {import('next').NextConfig} */
// module.exports = {
//     output: "export",
//     trailingSlash: true,
//     images: { unoptimized: true },
//     outputFileTracingRoot: __dirname,
// };
//
//
/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: { unoptimized: true },
    outputFileTracingRoot: __dirname,
    async redirects() {
        return [
            // 1) popcorn-removal -> popcorn-ceiling-removal (ALL paths)
            {
                source: "/popcorn-removal/:path*",
                destination: "/popcorn-ceiling-removal/:path*/",
                permanent: true,
            },
        ];
    },

    // Add noindex,follow for service-areas directory (Option A)
    async headers() {
        return [
            {
                source: "/service-areas",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex, follow" },
                ],
            },
            {
                source: "/service-areas/:path*",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex, follow" },
                ],
            },
            {
                source: "/locations/popcorn-ceiling-removal-:city",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex, nofollow" },
                ],
            },
            {
                source: "/locations/popcorn-ceiling-removal",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex, nofollow" },
                ],
            },
            {
                source: "/locations/drywall-repair",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex, nofollow" },
                ],
            },
            {
                source: "/locations/popcorn-ceiling-removal-:city/:path*",
                headers: [
                    { key: "X-Robots-Tag", value: "noindex, nofollow" },
                ],
            },
        ];
    },
};
module.exports = nextConfig;
