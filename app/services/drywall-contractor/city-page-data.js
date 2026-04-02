import { cities } from "@/data/cities";

const BASE_URL = "https://epfproservices.com";

function getCityData(slug) {
  return cities.find((city) => city.slug === slug);
}

function getNeighborhoodNames(slug, fallback = []) {
  const city = getCityData(slug);
  if (city?.neighborhoods?.length) {
    return city.neighborhoods.map((item) => item.name);
  }
  return fallback;
}

export const drywallContractorCityPages = {
  oakville: {
    city: "Oakville",
    slug: "oakville",
    path: "/services/drywall-contractor/oakville/",
    heroChips: ["Old Oakville", "Glen Abbey", "Bronte", "Joshua Creek"],
    heroTitle: "Drywall Contractor Oakville",
    heroIntro:
      "Local drywall help in Oakville for custom homes, condos, basements, and renovations that need more than a quick patch.",
    heroSupport:
      "This page is for Oakville homeowners who need wall repairs, smoother surfaces, damaged areas replaced, and walls ready for paint.",
    supportLinks: {
      install: "/services/drywall-installation/oakville/",
      repair: "/services/drywall-repair/oakville/",
    },
    cityHubLink: "/service-areas/oakville/",
    signals: getCityData("oakville")?.signals || null,
    neighborhoods: getNeighborhoodNames("oakville"),
    neighborhoodSummary:
      "Local drywall contractors for Old Oakville, Bronte, Glen Abbey, River Oaks, Joshua Creek, West Oak Trails, and surrounding Oakville neighbourhoods.",
    localSignals: [
      "Custom-home touch-up and smooth-wall expectations in Old Oakville",
      "Basement finishing in Glen Abbey and River Oaks",
      "Bronte and lakeside renovations where daylight shows every flaw",
      "Oakville condo and townhouse jobs that need cleaner setup and cleanup",
    ],
    scopeCards: [
      {
        title: "Custom-home finish standards",
        body:
          "Oakville clients often care less about the patch itself and more about whether the wall will still look flat under daylight, pot lights, and designer paint colours.",
      },
      {
        title: "Renovation and addition work",
        body:
          "Many Oakville projects have opened walls, tricky corners, built-ins, and damaged sections that need one crew to keep the whole job looking consistent.",
      },
      {
        title: "Cleaner ready-to-paint results",
        body:
          "The goal is not a quick patch. It is straight corners, smooth walls, less mess, and a better surface for paint.",
      },
    ],
    quoteHeading: "Get Your Oakville Drywall Quote",
    quoteBody:
      "Send photos and a few room notes so we can tell whether the Oakville job is mostly repairs, wall smoothing, damaged drywall replacement, or a larger job.",
    whyHeading: "Why people search for a drywall contractor in Oakville",
    whyBody:
      "Oakville jobs often need more care than a simple patch but do not need full new drywall everywhere.",
    localScopeHeading: "What our Oakville drywall services usually include",
    localScopeBody: [
      "A typical Oakville drywall job can include fixing damaged walls, smoothing rough spots, replacing damaged sections, cleaning up corners, sanding, and getting everything ready for primer or paint.",
      "We see this on main-floor renovations, basement finishing, opened ceilings after plumbing or electrical work, and custom-home touch-ups where the final look matters.",
    ],
    ctaLabel: "Oakville Drywall Company",
    ctaHeading: "Need a local drywall contractor for a clean Oakville finish?",
    ctaBody:
      "Send room photos, rough sizes, and a note about whether the walls need repair, smoothing, or damaged drywall replaced.",
    faqs: [
      {
        q: "What does a drywall contractor in Oakville usually handle?",
        a: "An Oakville drywall contractor usually handles a mix of jobs like fixing cracks, smoothing walls, replacing damaged drywall, and getting the room ready for paint when a basic patch is not enough.",
      },
      {
        q: "Do you work on custom homes and higher-finish interiors?",
        a: "Yes. Oakville homes often have stronger lighting, larger rooms, and higher finish expectations, so we focus on straighter lines, smoother walls, and a cleaner final look.",
      },
      {
        q: "How is this different from Oakville drywall installation?",
        a: "This page is broader than full drywall installation. If the work is mostly brand-new drywall, our Oakville drywall installation page is the better fit. This page is for jobs that mix repairs, smoothing, and replacement work.",
      },
      {
        q: "Can you quote from renovation photos?",
        a: "Yes. Photos, room sizes, and notes on access usually tell us whether the Oakville job is mostly repairs, wall smoothing, or a larger drywall job with a few things happening at once.",
      },
      {
        q: "Should drywall correction happen before painting in Oakville homes?",
        a: "Yes. If the walls still need smoothing or damaged drywall replaced, that should happen before painting so the final result still looks clean in daylight.",
      },
    ],
  },
  burlington: {
    city: "Burlington",
    slug: "burlington",
    path: "/services/drywall-contractor/burlington/",
    heroChips: ["Aldershot", "Millcroft", "Roseland", "Alton Village"],
    heroTitle: "Drywall Contractor Burlington",
    heroIntro:
      "Local drywall help in Burlington for homes, condos, basements, and renovations that need repairs, smoother walls, and a clean finish before paint.",
    heroSupport:
      "This page is built for Burlington searches where the drywall work is broader than a tight repair but not only full new installation.",
    supportLinks: {
      install: "/services/drywall-installation/burlington/",
      repair: "/services/drywall-repair/burlington/",
    },
    cityHubLink: "/service-areas/burlington/",
    signals: getCityData("burlington")?.signals || null,
    neighborhoods: getNeighborhoodNames("burlington"),
    neighborhoodSummary:
      "Local drywall contractors for Aldershot, Roseland, Millcroft, Tansley, Orchard, Headon Forest, and surrounding Burlington neighbourhoods.",
    localSignals: [
      "Burlington basement drywall work in family homes",
      "Aldershot and Roseland renovations in older layouts",
      "Condo jobs closer to downtown Burlington that need cleaner shared-area protection",
      "Millcroft and Alton Village wall fixes before painters and flooring crews return",
    ],
    scopeCards: [
      {
        title: "Common home projects",
        body:
          "Many Burlington jobs combine holes, cracks, opened walls, smoothing, and damaged drywall replacement instead of one small drywall task.",
      },
      {
        title: "Basement and addition finish work",
        body:
          "Burlington basements, ceilings, and additions often need one crew to keep the finish looking the same across the whole space.",
      },
      {
        title: "Smooth ready-for-paint finish",
        body:
          "The value is in clean prep, smoother walls, and a result that lets painters get started instead of fixing drywall first.",
      },
    ],
    quoteHeading: "Get Your Burlington Drywall Quote",
    quoteBody:
      "Send photos and room notes so we can tell whether the Burlington job is mostly repairs, wall smoothing, damaged drywall replacement, or a larger drywall job.",
    whyHeading: "Why people search for a drywall contractor in Burlington",
    whyBody:
      "Burlington projects often blend repairs, ceiling fixes, and finishing work across occupied homes, basements, and renovation spaces.",
    localScopeHeading: "What our Burlington drywall services usually include",
    localScopeBody: [
      "A typical Burlington drywall job can include fixing cracks, blending patched areas, repairing ceilings, smoothing walls, replacing damaged drywall, straightening corners, sanding, and getting things ready for paint.",
      "We see this after kitchen renovations, plumbing or electrical access, basement finishing, water issues, condo updates, and larger room refreshes where one drywall company needs to handle the whole job.",
    ],
    ctaLabel: "Burlington Drywall Company",
    ctaHeading: "Need a Burlington drywall contractor for a larger job?",
    ctaBody:
      "Send the room photos, rough dimensions, and whether the surfaces are damaged, opened up, uneven, or partly repaired already.",
    faqs: [
      {
        q: "What does a drywall contractor in Burlington usually handle?",
        a: "A Burlington drywall contractor usually handles a mix of jobs like patching, crack repair, wall smoothing, replacing damaged drywall, finishing, and getting the wall or ceiling ready for paint.",
      },
      {
        q: "Do you work in occupied Burlington homes and condos?",
        a: "Yes. We regularly stage drywall work in occupied homes, condos, basements, and commercial interiors in Burlington with floor protection, cleanup, and scheduling that fits the space.",
      },
      {
        q: "How is this different from Burlington drywall installation?",
        a: "This page is for broader contractor intent. If the Burlington job is mainly brand-new drywall hanging and finishing, the Burlington drywall installation page is more specific and should be the better fit.",
      },
      {
        q: "Can you quote Burlington drywall work from photos?",
        a: "Yes. Photos, room sizes, and a short note on access usually let us sort the Burlington project into repairs, wall smoothing, finishing, or a larger drywall job.",
      },
      {
        q: "Should I hire a drywall contractor before painters arrive?",
        a: "Yes. If the wall still needs smoothing or damaged drywall replaced, those issues should be fixed before paint so the final result looks clean under normal light.",
      },
    ],
  },
  hamilton: {
    city: "Hamilton",
    slug: "hamilton",
    path: "/services/drywall-contractor/hamilton/",
    heroChips: ["Ancaster", "Dundas", "Westdale", "Stoney Creek"],
    heroTitle: "Drywall Contractor Hamilton",
    heroIntro:
      "Local drywall contractor Hamilton service for homes, duplexes, basements, additions, and commercial interiors that need more than simple patching.",
    heroSupport:
      "This page is for Hamilton homeowners and property managers who need repairs, smoother walls, ceiling fixes, damaged drywall replaced, and a clean finish before paint.",
    supportLinks: {
      install: "/services/drywall-installation/hamilton/",
      repair: "/services/drywall-repair/hamilton/",
    },
    cityHubLink: "/service-areas/hamilton/",
    signals: getCityData("hamilton")?.signals || null,
    neighborhoods: getNeighborhoodNames("hamilton"),
    neighborhoodSummary:
      "Local drywall contractors for Ancaster, Dundas, Westdale, Stoney Creek, Waterdown, Hamilton Mountain, and surrounding Hamilton neighbourhoods.",
    localSignals: [
      "Hamilton drywall work after plumbing, electrical, and renovation changes",
      "Older-home wall fixes in Westdale, Dundas, and central Hamilton",
      "Basement and lower-level drywall work on Hamilton Mountain and Stoney Creek projects",
      "Commercial and duplex jobs where the finish needs to stay on schedule",
    ],
    scopeCards: [
      {
        title: "Older-home correction work",
        body:
          "Hamilton projects often involve older walls, repeated repairs, plaster patches, and surfaces that need smoothing before paint can hide anything.",
      },
      {
        title: "Basement and addition jobs",
        body:
          "Hamilton basements, lofts, and additions often need one drywall contractor to handle repairs, new drywall, boxed-in areas, and the final finish together.",
      },
      {
        title: "Homes, rentals, and small businesses",
        body:
          "We also see Hamilton jobs where the drywall needs to be clean and ready before painters, flooring, trim, or rental move-ins.",
      },
    ],
    quoteHeading: "Get Your Hamilton Drywall Quote",
    quoteBody:
      "Send photos and room notes so we can tell whether the Hamilton job is mostly repairs, wall smoothing, ceiling fixes, or a larger drywall job.",
    whyHeading: "Why people search for a drywall contractor in Hamilton",
    whyBody:
      "Hamilton jobs often combine older-wall fixes, renovation damage, and extra prep instead of one small drywall task.",
    localScopeHeading: "What our Hamilton drywall services usually include",
    localScopeBody: [
      "A typical Hamilton drywall job can include fixing cracks, blending patched areas, repairing ceilings, smoothing walls, replacing damaged drywall, cleaning up corners, sanding, and getting things ready for paint.",
      "We see this after electrical changes, plumbing access, water damage, basement finishing, rental refreshes, and older-home renovations where the walls have already been repaired more than once.",
    ],
    ctaLabel: "Hamilton Drywall Company",
    ctaHeading: "Need a Hamilton drywall contractor for a renovation-ready finish?",
    ctaBody:
      "Send room photos, rough sizes, and whether the surfaces are open, damaged, uneven, or partly repaired so we can price the job properly.",
    faqs: [
      {
        q: "What does a drywall contractor in Hamilton usually handle?",
        a: "A Hamilton drywall contractor usually handles a mix of jobs like repairs, wall smoothing, damaged drywall replacement, ceiling fixes, finishing, and getting the room ready for paint when a simple patch is not enough.",
      },
      {
        q: "Do you work on older homes in Hamilton?",
        a: "Yes. Hamilton projects often include older walls, plaster patches, and uneven surfaces, so we focus on smoothing the walls and making the finish look right instead of only filling a hole.",
      },
      {
        q: "How is this different from Hamilton drywall installation?",
        a: "This page targets broader contractor intent. If the Hamilton job is mainly new drywall hanging and finishing, the Hamilton drywall installation page is the better match.",
      },
      {
        q: "Can you quote Hamilton drywall work from photos?",
        a: "Yes. Photos, room measurements, and a note on access usually let us sort whether the Hamilton project is mostly repairs, wall smoothing, ceiling work, or a larger drywall job.",
      },
      {
        q: "Should drywall correction happen before painting older Hamilton interiors?",
        a: "Yes. If the walls still need smoothing or damaged drywall replaced, that should happen before painting so the final finish does not highlight the old problems.",
      },
    ],
  },
  grimsby: {
    city: "Grimsby",
    slug: "grimsby",
    path: "/services/drywall-contractor/grimsby/",
    heroChips: ["Grimsby Beach", "Casablanca", "Downtown Grimsby", "Mountainview"],
    heroTitle: "Drywall Contractor Grimsby",
    heroIntro:
      "Local drywall contractor Grimsby service for homes, basements, renovation spaces, and lake-adjacent properties that need more than a basic patch.",
    heroSupport:
      "This page is for Grimsby homeowners who need repairs, smoother walls, ceiling fixes, damaged drywall replaced, and a clean finish before paint.",
    supportLinks: {
      install: "/services/drywall-installation/grimsby/",
      repair: "/services/drywall-repair/grimsby/",
    },
    signals: {
      paintStores: [
        {
          name: "Bennett's Decorating Centre — Benjamin Moore",
          address: "63 Main St E, Grimsby, ON L3M 1M7",
          url: "https://www.benjaminmoore.com/en-ca/store-locator/10007946/bennetts-decorating-centre",
        },
        {
          name: "Sherwin-Williams — Stoney Creek",
          address: "500 Centennial Pkwy N Unit 7, Stoney Creek, ON L8E 0G2",
          url: "https://www.sherwin-williams.com/store-locator/paint-store/stoney-creek/on/707686",
        },
        {
          name: "The Home Depot — Stoney Creek",
          address: "1791 Stone Church Rd E, Stoney Creek, ON L8J 0B4",
          url: "https://stores.homedepot.ca/on/stoney-creek/home-improvement-stoney-creek-on-7115.html",
        },
      ],
      authorities: {
        permitsURL: "https://www.grimsby.ca/en/build-and-invest/building.aspx",
        hazardousWasteURL: "https://www.niagararegion.ca/waste/household/hazardous/default.aspx",
        dropOffDepotsURL: "https://www.niagararegion.ca/waste/collection/items/default.aspx",
      },
    },
    neighborhoods: [
      "Grimsby Beach",
      "Casablanca",
      "Downtown Grimsby",
      "Nelles Estates",
      "Dorchester Estates",
      "Mountainview",
    ],
    neighborhoodSummary:
      "Local drywall contractors for Grimsby Beach, Casablanca, downtown Grimsby, Nelles Estates, Mountainview, and surrounding Grimsby areas.",
    localSignals: [
      "Lake-adjacent drywall repairs after moisture issues and repaint cycles",
      "Basement and lower-level drywall work in Grimsby family homes and newer subdivisions",
      "Downtown and mixed-age homes where walls need more smoothing before paint",
      "Bigger repairs after plumbing access, ceiling stains, or renovation openings",
    ],
    scopeCards: [
      {
        title: "Common homeowner jobs",
        body:
          "Many Grimsby projects combine patching, wall smoothing, damaged drywall replacement, and finishing in one visit instead of one small drywall task.",
      },
      {
        title: "Basement and ceiling repair follow-through",
        body:
          "Grimsby homes often need one drywall contractor to take ceiling openings, wall damage, or basement work all the way to walls that are ready for paint.",
      },
      {
        title: "Cleaner final presentation",
        body:
          "The goal is a smoother surface for painters, not a repair line that still shows after fresh paint.",
      },
    ],
    quoteHeading: "Get Your Grimsby Drywall Quote",
    quoteBody:
      "Send photos and room notes so we can tell whether the Grimsby job is mostly repairs, wall smoothing, ceiling fixes, or a larger drywall job.",
    whyHeading: "Why people search for a drywall contractor in Grimsby",
    whyBody:
      "Grimsby projects often sit between small repair work and full new installation, especially after moisture issues, renovations, and basement updates.",
    localScopeHeading: "What our Grimsby drywall services usually include",
    localScopeBody: [
      "A typical Grimsby drywall job can include fixing cracks, blending patched areas, repairing ceilings, smoothing walls, replacing damaged drywall, sanding, and getting everything ready for paint.",
      "We see this after leaks, plumbing access, basement finishing, renovation openings, and older walls that need more cleanup before they will look right again under fresh paint.",
    ],
    ctaLabel: "Grimsby Drywall Company",
    ctaHeading: "Need a Grimsby drywall contractor for a larger job?",
    ctaBody:
      "Send room photos, rough sizes, and whether the walls or ceilings need repairs, smoothing, or damaged drywall replaced.",
    faqs: [
      {
        q: "What does a drywall contractor in Grimsby usually handle?",
        a: "A Grimsby drywall contractor usually handles a mix of jobs like repairs, wall smoothing, damaged drywall replacement, ceiling fixes, finishing, and getting the space ready for paint.",
      },
      {
        q: "Do you work on occupied Grimsby homes near the lake?",
        a: "Yes. We regularly work in occupied Grimsby homes with floor protection, dust control, organized cleanup, and a setup that suits lived-in spaces.",
      },
      {
        q: "How is this different from Grimsby drywall installation?",
        a: "This page is broader than full new drywall hanging. If the Grimsby project is mainly brand-new board installation and finishing, the Grimsby drywall installation page is the better fit.",
      },
      {
        q: "Can you quote Grimsby drywall work from photos?",
        a: "Yes. Photos, room dimensions, and a note on access usually let us sort whether the Grimsby project is mostly repairs, wall smoothing, or a larger drywall job.",
      },
      {
        q: "Should drywall correction happen before painting in Grimsby homes?",
        a: "Yes. If the wall or ceiling still needs smoothing or damaged drywall replaced, that work should happen before paint so the final finish looks clean.",
      },
    ],
  },
  toronto: {
    city: "Toronto",
    slug: "toronto",
    path: "/services/drywall-contractor/toronto/",
    heroChips: ["Downtown", "Etobicoke", "North York", "Scarborough"],
    heroTitle: "Drywall Contractor Toronto",
    heroIntro:
      "Local drywall help in Toronto for condos, homes, duplexes, basements, and commercial spaces that need repairs, smoother walls, and a clean finish before painting.",
    heroSupport:
      "This page is for Toronto jobs that are bigger than a small patch but do not need full new drywall everywhere.",
    supportLinks: {
      install: "/services/drywall-installation/",
      repair: "/services/drywall-repair/",
    },
    cityHubLink: "/service-areas/toronto/",
    signals: getCityData("toronto")?.signals || null,
    neighborhoods: getNeighborhoodNames("toronto"),
    neighborhoodSummary:
      "Local drywall contractors for Downtown Toronto, Etobicoke, North York, Scarborough, East York, the Junction, Leslieville, and surrounding Toronto neighbourhoods.",
    localSignals: [
      "Downtown condo drywall work with elevator bookings and shared-area protection",
      "Old Toronto and East York renovation walls that need more smoothing before paint",
      "North York, Etobicoke, and Scarborough basement or addition drywall work",
      "Rental and commercial jobs where timing and building rules matter",
    ],
    scopeCards: [
      {
        title: "Condo and access-friendly work",
        body:
          "Toronto drywall work often needs careful setup, protection, elevator timing, and cleaner daily cleanup because building rules are part of the job.",
      },
      {
        title: "Older-home and renovation correction",
        body:
          "Toronto projects often mix old plaster patches, ceiling openings, and damaged areas that need one contractor to make the finish look even again.",
      },
      {
        title: "Homes, rentals, and commercial spaces",
        body:
          "We also see Toronto drywall jobs tied to rental updates, condo refreshes, duplex updates, and room-by-room renovations.",
      },
    ],
    quoteHeading: "Get Your Toronto Drywall Quote",
    quoteBody:
      "Send photos and room notes so we can tell whether the Toronto job is mostly repairs, wall smoothing, ceiling fixes, or a larger drywall job.",
    whyHeading: "Why people search for a drywall contractor in Toronto",
    whyBody:
      "Toronto projects often combine access rules, older-wall fixes, and extra prep across condos, homes, and commercial spaces.",
    localScopeHeading: "What our Toronto drywall services usually include",
    localScopeBody: [
      "A typical Toronto drywall job can include fixing cracks, blending patched areas, repairing ceilings, smoothing walls, replacing damaged drywall, cleaning up corners, sanding, and getting things ready for paint.",
      "We see this after electrical or plumbing openings, condo updates, rental refreshes, kitchen renovations, water damage, and older-home wall repairs where a quick patch is not enough.",
    ],
    ctaLabel: "Toronto Drywall Company",
    ctaHeading: "Need a Toronto drywall contractor for a clean result?",
    ctaBody:
      "Send the room photos, rough dimensions, and whether the space is a condo, house, rental unit, basement, or commercial interior.",
    faqs: [
      {
        q: "What does a drywall contractor in Toronto usually handle?",
        a: "A Toronto drywall contractor usually handles a mix of jobs like repairs, wall smoothing, ceiling fixes, damaged drywall replacement, finishing, and getting the space ready for paint across condos, homes, and commercial interiors.",
      },
      {
        q: "Do you work in Toronto condos and occupied units?",
        a: "Yes. Toronto projects often involve elevator bookings, hallway protection, work-hour limits, and tighter cleanup, so we plan the work around access and building rules as well as the repair itself.",
      },
      {
        q: "How is this different from full drywall installation in Toronto?",
        a: "This page is broader than full new board hanging. If the project is mainly installation, hanging, taping, and finishing of brand-new drywall throughout the space, our main drywall installation page is the better fit.",
      },
      {
        q: "Can you quote Toronto drywall work from photos?",
        a: "Yes. Photos, room dimensions, and a short access note usually tell us whether the Toronto project is mostly repairs, wall smoothing, or a larger drywall job.",
      },
      {
        q: "Should drywall correction happen before painting in Toronto condos or homes?",
        a: "Yes. If the walls or ceilings still need smoothing or damaged drywall replaced, that work should be completed before painting so the final finish does not reveal the old drywall problems.",
      },
    ],
  },
};

export function getDrywallContractorCityPage(slug) {
  return drywallContractorCityPages[slug];
}

export function getAreaServed(config) {
  return [
    config.city,
    ...config.neighborhoods.map((name) => `${config.city} - ${name}`),
  ];
}

export function getMetadata(config) {
  const keywords = [
    `drywall contractor ${config.city}`,
    `drywall company ${config.city}`,
    `drywall services ${config.city}`,
    `local drywall contractors ${config.city}`,
    `residential drywall contractors ${config.city}`,
    `drywall service near me ${config.city}`,
    `drywall contractors in my area ${config.city}`,
    `professional drywall contractor ${config.city}`,
    `drywall company near me ${config.city}`,
    `drywall finishing ${config.city}`,
    `skim coat drywall ${config.city}`,
    `drywall repair and finishing ${config.city}`,
    `wall and ceiling drywall services ${config.city}`,
    `paint-ready drywall contractor ${config.city}`,
  ];

  return {
    title: `Drywall Contractor ${config.city} | Local Drywall Company & Services`,
    description:
      `Drywall contractor ${config.city} for wall and ceiling repairs, smoother surfaces, damaged drywall replacement, and clean ready-for-paint results. Local drywall company for homes, condos, basements, and commercial interiors.`,
    keywords,
    alternates: { canonical: `${BASE_URL}${config.path}` },
    openGraph: {
      title: `Drywall Contractor ${config.city} | Local Drywall Services`,
      description:
        `Local drywall contractors in ${config.city} for repairs, smoother walls, damaged drywall replacement, and clean finishes across homes, condos, and commercial interiors.`,
      url: `${BASE_URL}${config.path}`,
      type: "website",
      images: [
        {
          url: "/gallery/drywall-installation/drywall-installation-hero.webp",
          width: 1200,
          height: 630,
          alt: `Drywall contractor working in a ${config.city} interior`,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}
