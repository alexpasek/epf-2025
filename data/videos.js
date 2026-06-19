import { SITE_URL } from "../app/config.js";

const site = (SITE_URL || "").replace(/\/$/, "");

export const videoLibrary = [
  {
    slug: "ceiling-prep-containment",
    youtubeId: "g8Zl0XlbxBo",
    title: "Ceiling Prep & Containment",
    blurb: "Masking, plastic, and dust control on a live popcorn removal job.",
    description:
      "How we seal rooms, protect floors and vents, and set up dust control before scraping or encapsulating popcorn ceilings.",
    uploadDate: "2024-01-01T00:00:00Z",
  },
  {
    slug: "skim-coat-sanding",
    youtubeId: "73P8rMOy9pc",
    title: "Skim Coat & Sanding",
    blurb: "Level 5 skim, vacuum sanding, and light check for a flat finish.",
    description:
      "Live skim-coating and vacuum-assisted sanding to get a Level 5 smooth ceiling ready for primer and paint.",
    uploadDate: "2024-01-01T00:00:00Z",
  },
  {
    slug: "finished-level-5-ceilings",
    youtubeId: "nSnbyGVqbMQ",
    title: "Finished Level 5 Ceilings",
    blurb: "Walkthrough of finished smooth ceilings after popcorn removal.",
    description:
      "Finished project walkthrough showing bright, uniform ceilings after popcorn removal, skim, prime and paint.",
    uploadDate: "2024-01-01T00:00:00Z",
  },
];

export const videoPagePath = (video) => `/videos/${video.slug}/`;
export const videoEmbedUrl = (video) => `https://www.youtube.com/embed/${video.youtubeId}`;
export const videoWatchUrl = (video) => `https://www.youtube.com/watch?v=${video.youtubeId}`;
export const videoThumbnailUrl = (video) =>
  `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
export const videoPageUrl = (video) => `${site}${videoPagePath(video)}`;
export const getVideoBySlug = (slug) => videoLibrary.find((v) => v.slug === slug);
