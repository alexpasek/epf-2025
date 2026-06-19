const baseGallery = [
    "/services/popcorn-ceiling-removal/1.webp",
    "/services/popcorn-ceiling-removal/2.webp",
    "/services/popcorn-ceiling-removal/3.webp",
    "/services/popcorn-ceiling-removal/4.webp",
    "/services/popcorn-ceiling-removal/5.webp",
    "/services/popcorn-ceiling-removal/6.webp",
    "/gallery/popcorn-ceiling-removal.jpeg",
    "/gallery/popcorn-ceiling-removal1.jpeg",
    "/gallery/popcorn-ceiling-removal2.jpeg",
    "/gallery/popcorn-ceiling-removal4.jpeg",
];

const baseFaq = [{
        q: "Can you remove painted popcorn ceilings?",
        a: "Yes. We always test first. In many homes, our popcorn-removal machine can remove even painted texture. If paint layers are too heavy, we switch to a full smooth-finish skim system for a stable result.",
    },
    {
        q: "How long does a typical project take?",
        a: "Most single-room jobs are 1-2 days. Main floors and larger homes are commonly 2-5 days depending on repairs, dry time, and whether painting is included.",
    },
    {
        q: "How messy is popcorn ceiling removal?",
        a: "We use floor protection, wall masking, and dust-control tools to keep work zones contained. Daily cleanup is part of the scope.",
    },
    {
        q: "When should pot lights be installed?",
        a: "Pot-light wiring and rough-ins should be done before removal starts or right at the start of the popcorn ceiling process. Then we complete removal and blend the finish cleanly around each cutout.",
    },
    {
        q: "What affects pricing the most?",
        a: "Square footage, ceiling height, painted texture, patching level, and access complexity are the biggest cost drivers.",
    },
];

function buildGallery(city, captions) {
    return baseGallery.map((src, idx) => ({
        src,
        alt: `${city} popcorn ceiling removal project photo ${idx + 1}`,
        caption: captions[idx],
    }));
}

const baseServicesIncluded = [
    "Popcorn ceiling removal + smooth finish prep",
    "Optional ceiling painting",
    "Optional drywall repair where needed",
    "Optional wall painting, baseboards, and wallpaper removal",
];

const baseOtherServices = [
    {
        title: "Interior Painting",
        description: "Paint-ready ceilings and walls after popcorn removal. Ask for more details in your quote request.",
        href: "/services/interior-painting/",
    },
    {
        title: "Baseboard Installation",
        description: "Upgrade trim after ceiling and wall work for a complete finish. Ask for profile and material options.",
        href: "/services/baseboard-installation/",
    },
    {
        title: "Wallpaper Removal",
        description: "Pair smooth ceilings with clean, stripped walls before paint. Ask for full wall prep details.",
        href: "/services/wallpaper-removal/",
    },
];

const baseHowItWorks = [
    "Send photos and rough room sizes",
    "Get a clear quote and schedule",
    "Protected setup and popcorn removal",
    "Smooth finish, cleanup, and optional paint",
];

const baseHeroStats = [
    "Dust-controlled removal",
    "15+ years experience",
    "4,800+ ceilings completed",
];

const cityReviews = {
    Mississauga: {
        featured: [{
                name: "N. R.",
                area: "Port Credit",
                quote: "Fast response, clean setup, and the ceiling came out perfectly smooth. No mess left behind.",
            },
            {
                name: "A. M.",
                area: "Clarkson",
                quote: "We had painted popcorn and were worried about damage. They explained options clearly and the finish looks great.",
            },
            {
                name: "J. K.",
                area: "Meadowvale",
                quote: "Quoted quickly, showed up on time, and finished exactly when promised. Very professional crew.",
            },
        ],
        compact: [
            "Great communication from first call to final cleanup.",
            "Dust control was much better than expected.",
            "Ceilings look flat and bright now.",
            "Pricing was clear and fair.",
            "Helped us sequence pot lights correctly.",
            "Would hire again for the next floor.",
        ],
    },
    Oakville: {
        featured: [{
                name: "S. D.",
                area: "Glen Abbey",
                quote: "High-quality skim finish and careful prep around our furniture. The room looks brand new.",
            },
            {
                name: "K. T.",
                area: "Bronte",
                quote: "They handled painted texture and old cracks without shortcuts. Final result is clean and modern.",
            },
            {
                name: "R. C.",
                area: "River Oaks",
                quote: "Team was punctual and organized every day. Exactly the type of contractor you want in your home.",
            },
        ],
        compact: [
            "Quote process was simple and honest.",
            "Good protection for floors and stairs.",
            "No surprise change orders.",
            "Very smooth ceiling under pot lights.",
            "Crew cleaned up well after each day.",
            "Strong workmanship and communication.",
        ],
    },
    Burlington: {
        featured: [{
                name: "M. H.",
                area: "Aldershot",
                quote: "Our textured ceilings were dated and uneven. They removed everything and gave us a clean smooth finish.",
            },
            {
                name: "P. G.",
                area: "Appleby",
                quote: "Quick estimate, clear scope, and very respectful crew. Dust control was handled properly.",
            },
            {
                name: "L. B.",
                area: "Brant Hills",
                quote: "They coordinated around our electrician for pot lights and the final ceiling came out flawless.",
            },
        ],
        compact: [
            "Fast quote response and easy scheduling.",
            "Great prep and protection throughout.",
            "Ceilings look bright and modern now.",
            "Helpful recommendations on repairs.",
            "Finished on timeline with no headaches.",
            "Would recommend to Burlington homeowners.",
        ],
    },
    Waterdown: {
        featured: [{
                name: "D. S.",
                area: "Waterdown Core",
                quote: "Professional team and smooth process from estimate to finish. Our ceiling looks excellent.",
            },
            {
                name: "C. P.",
                area: "Flamborough",
                quote: "They explained everything clearly and handled the work with care. Great communication.",
            },
            {
                name: "W. T.",
                area: "East Waterdown",
                quote: "Clean jobsite, fair pricing, and quality result. The room feels bigger and brighter now.",
            },
        ],
        compact: [
            "Very tidy and organized crew.",
            "Clear timeline and no confusion.",
            "Good finish quality under direct light.",
            "Quick replies and easy booking.",
            "Helpful with lighting cutout planning.",
            "Strong overall value for the project.",
        ],
    },
};

export const cityLandingData = {
    general: {
        slug: "popcorn-ceiling-removal",
        city: "GTA & Nearby Areas",
        metaTitle: "Popcorn Ceiling Removal | Fast Price Range & Smooth Finish",
        metaDescription: "General popcorn ceiling removal ad landing page with a quick price range, dust-controlled setup, smooth finish options, and fast quote follow-up.",
        topPromoText: "GET A ROUGH PRICE RANGE • SAME-DAY QUOTE • DUST-CONTROLLED SETUP",
        heroSubline: "From Outdated Texture to a Smooth Modern Ceiling.",
        heroPromise: "Get quick price guidance, protected setup, and a smooth ceiling finish without renovation chaos.",
        intro: "Popcorn ceiling removal for homeowners who want a clear price range before booking. We protect the work area, remove or stabilize texture, repair the ceiling, and finish it smooth.",
        servingLine: "Serving Mississauga, Toronto, Oakville, Burlington, Hamilton, Milton, Etobicoke, North York, Grimsby, St. Catharines, and nearby GTA areas.",
        enhancedAdsPage: true,
        heroStats: [
            "15+ years experience",
            "700+ projects done",
            "Fully insured",
        ],
        servicesIncluded: [
            "Popcorn removal",
            "Ceiling repairs where needed",
            "Skim coat / smoothing",
            "Sanding, primer, optional paint",
        ],
        galleryCaptions: [
            "Main floor ceiling upgrade with full dust-controlled setup.",
            "Condo ceiling stripped and prepared for a smooth finish.",
            "Family room before/after popcorn texture removal.",
            "Open-concept ceiling skimmed for an even paint-ready surface.",
            "Bedroom ceiling detail after texture removal and sanding.",
            "Hallway transition blended to a smooth modern finish.",
            "Kitchen ceiling cleaned up for brighter overhead lighting.",
            "Open living area after removal and final prep.",
            "Dining space with flat finished ceiling and clean edges.",
            "Renovation ceiling staged for optional paint coat.",
        ],
    },
    mississauga: {
        slug: "popcorn-ceiling-removal-mississauga",
        city: "Mississauga",
        metaTitle: "Popcorn Ceiling Removal Mississauga | Fast Quotes, Smooth Finish",
        metaDescription: "Popcorn ceiling removal in Mississauga with protected setup, dust control, and smooth finish options. Call now or request a quick quote.",
        topPromoText: "FREE SAME-DAY QUOTE • SAFE & DUST-FREE CEILING REMOVAL",
        heroSubline: "From Popcorn to Smooth in No Time!",
        heroPromise: "Get a clear quote, protected setup, and a smooth ceiling finish without renovation chaos.",
        intro: "Popcorn ceiling removal in Mississauga homes from Port Credit to Clarkson and Meadowvale. We focus on clean execution, quick communication, and paint-ready results.",
        servingLine: "Serving Mississauga neighborhoods including Port Credit, Clarkson, Meadowvale, Erin Mills, and Cooksville.",
        galleryCaptions: [
            "Mississauga living room ceiling upgrade with full dust-controlled setup.",
            "Port Credit condo ceiling stripped and prepped for smooth finish.",
            "Clarkson family room before/after popcorn texture removal.",
            "Meadowvale main floor ceiling skimmed for an even paint-ready surface.",
            "Erin Mills bedroom ceiling detail after texture removal and sanding.",
            "Cooksville hallway transition blended to a smooth modern finish.",
            "Mississauga kitchen ceiling cleaned up for brighter overhead lighting.",
            "Port Credit open-concept area after removal and final prep.",
            "Clarkson dining space with flat finished ceiling and clean edges.",
            "Meadowvale renovation ceiling staged for optional paint coat.",
        ],
    },
    oakville: {
        slug: "popcorn-ceiling-removal-oakville",
        city: "Oakville",
        metaTitle: "Popcorn Ceiling Removal Oakville | Smooth Ceiling Specialists",
        metaDescription: "Oakville popcorn ceiling removal with protected prep, dust control, and smooth finish options. Call now or request your quote online.",
        topPromoText: "FREE SAME-DAY QUOTE • SAFE & DUST-FREE CEILING REMOVAL",
        heroSubline: "From Textured to Modern, Fast and Clean.",
        heroPromise: "Upgrade dated textured ceilings with a clear process, protected prep, and reliable finishing.",
        intro: "Popcorn ceiling removal in Oakville homes where finish quality matters. We help homeowners modernize ceilings with clean prep and consistent results.",
        servingLine: "Serving Oakville neighborhoods including Glen Abbey, Bronte, River Oaks, and surrounding areas.",
        galleryCaptions: [
            "Oakville living room popcorn removal with complete floor protection.",
            "Glen Abbey ceiling smoothing project with controlled dust setup.",
            "Bronte home ceiling before/after with texture removed cleanly.",
            "River Oaks ceiling skim finish prepared for final paint.",
            "Oakville bedroom ceiling patch blending after texture removal.",
            "Oakville hallway ceiling leveled for clean lighting reflection.",
            "Bronte dining room ceiling detail after sanding and cleanup.",
            "Glen Abbey open area with smooth finish and edge detail.",
            "River Oaks ceiling correction after old repair marks.",
            "Oakville project handoff with final prep complete.",
        ],
    },
    burlington: {
        slug: "popcorn-ceiling-removal-burlington",
        city: "Burlington",
        metaTitle: "Popcorn Ceiling Removal Burlington | Call Now, Get a Fast Quote",
        metaDescription: "Burlington popcorn ceiling removal with insured crews, protected setup, and smooth finish options. Request a quote or call now.",
        topPromoText: "FREE SAME-DAY QUOTE • SAFE & DUST-FREE CEILING REMOVAL",
        heroSubline: "From Popcorn to Smooth in No Time!",
        heroPromise: "From first quote to final cleanup, we keep popcorn removal clear, fast, and homeowner-friendly.",
        intro: "Popcorn ceiling removal in Burlington for homeowners who want smooth results with less disruption. We handle setup, removal, finishing, and optional paint prep.",
        servingLine: "Serving Burlington areas including Aldershot, Appleby, Brant Hills, and nearby neighborhoods.",
        galleryCaptions: [
            "Burlington living room ceiling removal with protected setup.",
            "Aldershot renovation ceiling prepped for full smooth finish.",
            "Appleby ceiling texture removed and surface leveled.",
            "Brant Hills main floor before/after popcorn removal.",
            "Burlington bedroom ceiling patch and blend detail.",
            "Aldershot hallway ceiling cleaned and ready for paint.",
            "Appleby kitchen ceiling upgrade for brighter light spread.",
            "Brant Hills ceiling project with careful corner finishing.",
            "Burlington open room ceiling after final sanding pass.",
            "City handoff photo showing smooth finish readiness.",
        ],
    },
    waterdown: {
        slug: "popcorn-ceiling-removal-waterdown",
        city: "Waterdown",
        metaTitle: "Popcorn Ceiling Removal Waterdown | Fast Local Quotes & Clean Finish",
        metaDescription: "Waterdown popcorn ceiling removal with protected setup, dust control, and smooth ceiling finishing. Call now or request a quote.",
        topPromoText: "FREE SAME-DAY QUOTE • SAFE & DUST-FREE CEILING REMOVAL",
        heroSubline: "Dust-Controlled Removal for Hamilton-Area Homes.",
        heroPromise: "Get a local, no-runaround process for removing textured ceilings and finishing them right.",
        intro: "Popcorn ceiling removal in Waterdown and nearby Hamilton-area communities. We keep the scope simple, the site protected, and the finish quality high.",
        servingLine: "Serving Waterdown, Flamborough, Carlisle, and nearby Hamilton-area communities.",
        galleryCaptions: [
            "Waterdown living room ceiling refreshed from heavy texture to smooth finish.",
            "Flamborough ceiling removal setup with floor and wall protection.",
            "Waterdown bedroom before/after texture removal result.",
            "Carlisle project ceiling skimmed and aligned for paint.",
            "Waterdown hallway ceiling transition corrected and blended.",
            "Flamborough open-space ceiling ready for optional paint.",
            "Waterdown kitchen ceiling detail after sanding and cleanup.",
            "Hamilton-area ceiling project with improved light reflection.",
            "Waterdown ceiling patch integration after old access cuts.",
            "Final Waterdown handoff with smooth finish confirmed.",
        ],
    },
};

export function getLandingData(key) {
    const cityData = cityLandingData[key];
    if (!cityData) return null;

    const reviews = cityReviews[cityData.city] || cityReviews.Mississauga;
    return {
        ...cityData,
        heroStats: cityData.heroStats || baseHeroStats,
        trustItems: [
            "Fully insured crew",
            "Protected setup + dust control",
            "Fast, clear quotes",
            "Smooth finish options",
        ],
        howItWorks: baseHowItWorks,
        servicesIncluded: baseServicesIncluded,
        otherServices: cityData.otherServices || baseOtherServices,
        faq: baseFaq,
        gallery: buildGallery(cityData.city, cityData.galleryCaptions),
        featuredReviews: reviews.featured,
        compactReviews: reviews.compact,
    };
}
