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
    images: { unoptimized: true },
    outputFileTracingRoot: __dirname,
    experimental: {
        devtoolSegmentExplorer: false,
        // Drop legacy browser transforms/polyfills; target modern browsers only
        legacyBrowsers: false,
    },
    async redirects() {
        return [
            // 1) popcorn-removal -> popcorn-ceiling-removal (ALL paths)
            {
                source: "/popcorn-removal/:path*",
                destination: "/popcorn-ceiling-removal/:path*/",
                permanent: true,
            },

            // 2) /locations/popcorn-ceiling-removal-:city -> /popcorn-ceiling-removal/:city/
            {
                source: "/locations/popcorn-ceiling-removal-:city",
                destination: "/popcorn-ceiling-removal/:city/",
                permanent: true,
            },
            {
                source: "/locations/popcorn-ceiling-removal-:city/:path*",
                destination: "/popcorn-ceiling-removal/:city/:path*/",
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
        ];
    },
};
module.exports = nextConfig;