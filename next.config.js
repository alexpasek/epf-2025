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
  // DO NOT set: output: 'export'
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
      {
        source: "/popcorn-ceiling-removal/mississauga/lorne-park",
        destination: "/popcorn-ceiling-removal/mississauga/lorne-park/",
        permanent: true,
      },
      {
        source: "/popcorn-ceiling-removal/mississauga/lorne-park/",
        destination: "/popcorn-ceiling-removal/mississauga/lorne-park/",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
