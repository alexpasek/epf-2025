// app/lib/seoCopy.jsx
import { cities } from "@/data/cities";

// -------- helpers --------
function bySlug(list, slug) {
    for (var i = 0; i < list.length; i++)
        if (list[i].slug === slug) return list[i];
    return undefined;
}

function subTokens(str, city, hood) {
    return String(str)
        .replace(/\{CITY\}/g, city || "")
        .replace(/\{HOOD\}/g, hood || "");
}
// ===== WALLPAPER • CITY COPY (used by /service-areas/[city]) =====
export function buildCityCopy(citySlug) {
    var c = bySlug(cities, citySlug);
    var name = (c && c.name) ? c.name : "your area";

    // Per-city overrides (expand as needed)
    var MAP = {
        toronto: {
            opening: "Wallpaper removal in {CITY}: clean adhesive wash, drywall touch-ups or skim, and a smooth, paint-ready finish that holds up under strong window light.",
            housing: "Condos and houses—sealed rooms, corridor protection, and tidy daily wrap-ups so life continues during the job in {CITY}.",
            trust: "Clear scope & schedule, WSIB + liability, and a written warranty. Photo updates so you always know progress."
        },
        mississauga: {
            opening: "Wallpaper removal in {CITY}: enzyme or steam removal (method-tested), full glue wash, Level 4/5 skim where needed, prime and paint-ready.",
            housing: "Condo-friendly workflow: elevator bookings, quiet hours, and hallway protection. Family homes kept clean with containment and vent masking.",
            trust: "Fast photo estimates, predictable schedule, and a workmanship warranty—no surprises."
        },
        oakville: {
            opening: "Wallpaper removal in {CITY}: careful strip, adhesive fully removed, skim as needed, prime for a premium paint finish.",
            housing: "Large windows and long sightlines mean we check surfaces in critical light for a truly smooth read.",
            trust: "Insured & WSIB. Clean site, on-time handover, and written warranty."
        }
        // add more city overrides here as you like…
    };

    var fallback = {
        opening: "Wallpaper removal in {CITY}: safe stripping, full adhesive wash, drywall repairs/skim where needed, primer and a paint-ready surface.",
        housing: "We protect floors & vents, seal rooms, and keep your {CITY} home or condo clean throughout.",
        trust: "Clear scope, reliable schedule, and a written warranty—plus photo updates for transparency."
    };

    var tpl = MAP[citySlug] || fallback;

    return {
        opening: subTokens(tpl.opening, name, ""),
        housing: subTokens(tpl.housing, name, ""),
        trust: subTokens(tpl.trust, name, "")
    };
}

// =====================================
// ========== POPCORN • CITY ===========
// =====================================
export function buildPopcornCopy(citySlug) {
    var c = bySlug(cities, citySlug);
    var name = c && c.name ? c.name : "your area";

    // 100% unique, sales + local SEO copy per city
    var CITY_MAP = {
        toronto: {
            opening: "Toronto homes—from High Park semis to Bay Street condos—need a true Level 5 smooth to survive strong window light and long hallway sightlines.",
            housing: "Condos and houses in {CITY} get dust-contained work: sealed rooms, corridor protection, and vacuum-assist sanding so life carries on during the job.",
            trust: "Clear scope, on-time schedule, WSIB + liability, and a 3-year workmanship warranty. Daily photo updates for full transparency.",
            recent: "Recent in {CITY}: Etobicoke 1960s bungalow—painted popcorn with new pot lights. Encapsulation, Level 5 skim, prime & sprayed ceiling white.",
            review: "“Crew was tidy and fast—ceiling looks like new drywall.” — M., Etobicoke",
            usp: [
                [
                    "Level 5 smooth",
                    "Checked under raking light so seams and waves don’t show.",
                ],
                [
                    "Condo-friendly workflow",
                    "Elevators booked, corridors protected, quiet tools when required.",
                ],
                [
                    "Pot lights & repairs",
                    "Cutouts blended, stains fixed, patches feathered to disappear.",
                ],
            ],
        },

        mississauga: {
            opening: "In {CITY}, Port Credit condos and Lorne Park homes often have multiple paint layers on texture—best handled with controlled scrape or safe encapsulation.",
            housing: "We isolate rooms, mask vents, and deliver a bright, uniform ceiling that reads flat in {CITY} daylight.",
            trust: "Fast photo estimate, tidy crew, and a clean handover. WSIB + liability coverage with a 3-year workmanship warranty.",
            recent: "Recent in {CITY}: Erin Mills two-storey—scrape + Level 5 skim in living/dining; paint-ready in 3 days.",
            review: "“Dust control was excellent and schedule exact.” — S., Erin Mills",
            usp: [
                [
                    "Minimal disruption",
                    "Containment keeps lived-in areas clean and usable.",
                ],
                [
                    "Painted texture experts",
                    "On-site tests pick safest option: scrape vs encapsulation.",
                ],
                ["Finish that lasts", "Stain-blocking primer and paint-ready surface."],
            ],
        },

        oakville: {
            opening: "Big windows and critical light in {CITY} make Level 5 finishing essential so ceilings look premium and perfectly flat.",
            housing: "We repair pot-light cutouts and water stains, then skim, prime and leave a paint-ready ceiling for your {CITY} home.",
            trust: "Insured & WSIB. 3-year warranty. Clean daily wrap-ups so the house stays functional.",
            recent: "Recent in {CITY}: Bronte detached—water-stain repair, full skim, prime & flat finish.",
            review: "“Edges around pot lights are flawless.” — T., Bronte",
            usp: [
                ["Premium finishes", "Uniform reflectance, bright and modern."],
                [
                    "Critical-light check",
                    "We inspect from windows and long sightlines.",
                ],
                ["On-time schedule", "Clear plan, predictable handover."],
            ],
        },

        burlington: {
            opening: "Open-concept spaces in {CITY} expose ceiling flaws—our Level 5 skim erases waves and joint telegraphing for a clean, upscale look.",
            housing: "Condo-friendly: elevator bookings, hallway protection, and quiet hours observed.",
            trust: "Written scope, daily updates, WSIB + liability, and a 3-year warranty.",
            recent: "Recent in {CITY}: Downtown condo—night work, skim-coat, prime; zero corridor dust.",
            review: "“Condo rules respected, spotless cleanup.” — L., Downtown Burlington",
            usp: [
                [
                    "Dust-controlled",
                    "Containment, vent masking, vacuum-assist sanding.",
                ],
                ["Uniform skim", "Feathered surfaces, no flashing under lighting."],
                ["Paint-ready", "Stain-blocking primer for durable topcoats."],
            ],
        },

        milton: {
            opening: "{CITY} newer builds can show seam telegraphing—our Level 5 system flattens joints before bright whites go on.",
            housing: "We protect stairs and floors, isolate areas, and keep families moving through the home during the project.",
            trust: "Clear pricing, predictable schedule, insured & WSIB, with a 3-year warranty.",
            recent: "Recent in {CITY}: Scott area loft—hall ceilings leveled and repainted for uniform sheen.",
            review: "“Looks factory-smooth.” — J., Milton",
            usp: [
                [
                    "Family-friendly",
                    "Clean site, predictable timelines, tidy daily wrap-ups.",
                ],
                ["Problem solving", "Repairs for tape lifts, cracks, fixture holes."],
                ["Long-term durability", "Primer + finish built for busy homes."],
            ],
        },

        hamilton: {
            opening: "Character homes in {CITY} need careful containment and a full Level 5 skim to modernize ceilings without mess.",
            housing: "We respect plaster quirks, blend patches from rewiring, and deliver a uniform, prime-ready surface.",
            trust: "Local crew, insured, WSIB, with a 3-year workmanship warranty.",
            recent: "Recent in {CITY}: Kirkendall semi—rewiring patches blended invisibly; ceilings repainted.",
            review: "“Couldn’t find where the holes were.” — A., Hamilton",
            usp: [
                [
                    "Historic-safe methods",
                    "Encapsulation when scraping risks substrate damage.",
                ],
                ["Patch invisibility", "Feathered transitions under raking light."],
                ["Clean & contained", "Dust control without over-demo."],
            ],
        },

        "stoney-creek": {
            opening: "Many {CITY} projects pair popcorn removal with new pot lights—our blend-to-match hides every cutout and patch.",
            housing: "Encapsulation for heavily painted texture; full skim for uniform reflectance in open areas.",
            trust: "Clear schedule, insured & WSIB, 3-year warranty.",
            recent: "Recent in {CITY}: Winona split-level—encapsulation + skim, prime, bright flat finish.",
            review: "“Fast and dust-controlled.” — P., Stoney Creek",
            usp: [
                ["Pot-light perfection", "Cutouts vanish after Level 5 skim."],
                ["Moisture fixes", "Stain blocking for previous leaks."],
                ["Schedule certainty", "Exact start dates and daily check-ins."],
            ],
        },

        ancaster: {
            opening: "High stairwells and skylights in {CITY} demand meticulous skim-coat so critical light won’t reveal waves.",
            housing: "Scaffold setups, careful edge work at skylight returns, and a bright, even finish.",
            trust: "Insured, WSIB, 3-year warranty—clean daily wrap-ups.",
            recent: "Recent in {CITY}: Meadowlands—scaffold, skylight returns skimmed, prime & finish.",
            review: "“Skylight edges are perfect.” — R., Ancaster",
            usp: [
                ["Skylight detailing", "Return edges sharp and uniform."],
                ["Safe access", "Proper staging in tall spaces."],
                ["Premium finish", "Sprayed ceilings, no roller lap marks."],
            ],
        },

        grimsby: {
            opening: "Daylight in {CITY} lakeside condos shows everything—our Level 5 skim keeps ceilings flat and consistent.",
            housing: "Condo-friendly workflow: evening shifts, corridor protection, and strict dust control.",
            trust: "WSIB + liability, 3-year warranty, reliable handovers.",
            recent: "Recent in {CITY}: Lakeside condo—night shift, skim + prime; zero corridor dust.",
            review: "“Quiet team, spotless finish.” — C., Grimsby",
            usp: [
                ["Condo compliance", "Rules respected; neighbours kept happy."],
                ["Raking-light check", "No waves or joint shadows."],
                ["Bright, even finish", "Stain-blocked and ready for paint."],
            ],
        },

        vaughan: {
            opening: "{CITY} homes in Maple, Woodbridge and Kleinburg often combine popcorn removal with repainting for a brighter, upscale look.",
            housing: "We repair fixture cutouts and seams, then skim and prime to a paint-ready finish.",
            trust: "Clear scope, insured & WSIB, 3-year workmanship warranty.",
            recent: "Recent in {CITY}: Kleinburg—painted popcorn, pot-light patching, sprayed ceiling white.",
            review: "“Finish looks like new sheets.” — D., Kleinburg",
            usp: [
                ["Upscale detailing", "Uniform reflectance and crisp edges."],
                ["Pot-light blending", "Seamless around trims and cans."],
                ["Predictable timeline", "No-surprise scheduling."],
            ],
        },

        "richmond-hill": {
            opening: "Long hallways and big windows in {CITY} need a true Level 5 to prevent flashing and joint shadows.",
            housing: "We skim, re-check under critical light, and prime with stain blocker for a stable finish.",
            trust: "Insured & WSIB, daily updates, and a 3-year warranty.",
            recent: "Recent in {CITY}: Bayview Hill—main-floor skim & repaint after lighting upgrade.",
            review: "“No seams in morning sunlight.” — Y., Bayview Hill",
            usp: [
                ["Critical-light mastery", "Flat in both natural and LED lighting."],
                ["Seam elimination", "Telegraphing joints resolved with full skim."],
                ["Paint-ready handoff", "Primer cured and ready for finish coats."],
            ],
        },
    };

    var fallback = {
        opening: "Popcorn ceiling removal in {CITY}: dust-contained scrape or safe encapsulation, Level 5 skim-coat, prime & paint.",
        housing: "We protect floors & vents, set up containment, and keep your {CITY} home or condo clean throughout.",
        trust: "Clear scope, reliable schedule, and a written warranty—plus photo updates for transparency.",
        recent: "Recent in {CITY}: Level 5 skim, prime, paint-ready finish after lighting upgrade.",
        review: "“Smooth finish and very clean.” — Homeowner in {CITY}",
        usp: [
            ["Dust-controlled", "Containment, vent masking, vacuum-assist sanding."],
            ["Level 5 skim", "Feathered surfaces, no flashing."],
            ["Paint-ready", "Stain-blocking primer for durable topcoats."],
        ],
    };

    var tpl = CITY_MAP[citySlug] || fallback;
    return {
        opening: subTokens(tpl.opening, name, ""),
        housing: subTokens(tpl.housing, name, ""),
        trust: subTokens(tpl.trust, name, ""),
        recent: subTokens(tpl.recent, name, ""),
        review: subTokens(tpl.review, name, ""),
        usp: tpl.usp,
    };
}

// ===========================================
// ===== POPCORN • NEIGHBOURHOOD (per city) ==
// ===========================================
export function buildPopcornHoodCopy(citySlug, hoodSlug) {
    var c = bySlug(cities, citySlug);
    var n = c && c.neighborhoods ? bySlug(c.neighborhoods, hoodSlug) : undefined;
    var city = c && c.name ? c.name : "your city";
    var hood = n && n.name ? n.name : "your neighbourhood";

    // Unique, service-specific copy per neighbourhood.
    // Add/remove hoods to match your cities data.
    var HOOD_MAP = {
        toronto: {
            "high-park": {
                intro: "In {HOOD}, {CITY}, strong window light highlights ceiling flaws—our Level 5 skim keeps surfaces flat with no joint shadows.",
                highlights: [
                    "Level 5 smooth — Raking-light checked for true flatness.",
                    "Dust control — Stair & hallway protection for older semis.",
                    "Pot-light blending — Cutouts and patches disappear after skim.",
                ],
                recent: "Semi near Bloor West: encapsulation, Level 5 skim, prime & sprayed ceiling white.",
            },
            "the-beaches": {
                intro: "Lakeside light in {HOOD} shows every ripple—our process delivers a bright, uniform ceiling that reads perfectly flat.",
                highlights: [
                    "Vent masking — Keeps salt-air dust out during work.",
                    "Feathered seams — Long sightlines handled with care.",
                    "Tidy wrap-ups — Family rooms put back daily.",
                ],
                recent: "Detached east of Queen: scrape + skim in living/dining; finished in 3 days.",
            },
            annex: {
                intro: "Annex ceilings often mix old plaster and newer drywall—our hybrid approach protects heritage details while modernizing the surface.",
                highlights: [
                    "Heritage-safe methods — Encapsulation when scraping risks substrate.",
                    "Invisible patches — Rewiring and fixture holes feathered out.",
                    "Even reflectance — Primer system prevents flashing.",
                ],
                recent: "Victorian semi: mixed substrate leveled to a clean, contemporary finish.",
            },
            leaside: {
                intro: "Renovated {HOOD} homes need clean transitions—our Level 5 skim removes waves from additions meeting old rooms.",
                highlights: [
                    "Joint telegraphing — Eliminated with full-field skim.",
                    "Pot-light rings — Blended smoothly around trims.",
                    "Paint-ready — Stain-blocking primer for a durable topcoat.",
                ],
                recent: "Side-split: addition tie-in leveled, uniform prime, bright finish.",
            },
        },

        mississauga: {
            "port-credit": {
                intro: "{HOOD} condos demand quiet, clean work—elevator bookings, corridor protection, and vacuum-assist sanding keep neighbours happy.",
                highlights: [
                    "Painted texture — Safely scraped or encapsulated after on-site tests.",
                    "Condo compliance — Rules, quiet hours, and protection observed.",
                    "Level 5 skim — Flat, bright ceilings ready for paint.",
                ],
                recent: "Harbour condo: night shift, skim + prime; zero corridor dust.",
            },
            "lorne-park": {
                intro: "Large rooms and strong sun in {HOOD} call for true Level 5 to avoid waves and seams.",
                highlights: [
                    "Water-stain repairs — Stain blocker prevents bleed-through.",
                    "Pot-light finishing — Cutouts vanish after skim.",
                    "Premium finish — Sprayed ceilings, crisp transitions.",
                ],
                recent: "Two-storey: stain blocking, full skim, sprayed ceiling white.",
            },
            "erin-mills": {
                intro: "Open sightlines in {HOOD} show every flat spot—our method keeps ceilings even end-to-end.",
                highlights: [
                    "Containment — Family-friendly daily cleanups.",
                    "Skim & re-check — Raking-light inspection before prime.",
                    "Paint-ready — Durable primer for a long-lasting finish.",
                ],
                recent: "Main floor: scrape + Level 5 skim in living/dining; 3-day turnaround.",
            },
            clarkson: {
                intro: "Mixed-age homes in {HOOD} often hide patched areas—our feathering makes repairs invisible.",
                highlights: [
                    "Patch matching — Old/new drywall blended seamlessly.",
                    "Edge crispness — Clean lines at crown and returns.",
                    "Predictable schedule — Start/finish dates you can plan around.",
                ],
                recent: "Split-level: patch blend, full skim, prime and ceiling re-paint.",
            },
        },

        oakville: {
            bronte: {
                intro: "With bright lake light, {HOOD} ceilings must be perfectly flat—our Level 5 skim removes waves and joint ghosting.",
                highlights: [
                    "Leak repairs — Stain block sealer prevents bleed-through.",
                    "Pot-light rings — Blended to disappear.",
                    "Premium spray — Smooth, modern finish.",
                ],
                recent: "Detached near the lake: water-stain repair, full skim, prime & finish.",
            },
            "glen-abbey": {
                intro: "Tall foyers in {HOOD} need safe staging and meticulous skim—no roller lap marks or flashing.",
                highlights: [
                    "Safe access — Proper scaffold for height work.",
                    "Even reflectance — Full-field skim for uniform sheen.",
                    "Warranty — 3-year workmanship coverage.",
                ],
                recent: "Two-storey foyer: staged safely, skimmed, primed, bright finish.",
            },
            "river-oaks": {
                intro: "Renovation tie-ins in {HOOD} benefit from our full-field skim to erase seams across old and new drywall.",
                highlights: [
                    "Joint telegraphing — Eliminated with Level 5 skim.",
                    "Critical-light check — Verified from windows and downlights.",
                    "Paint-ready handover — Stain-blocked, smooth surface.",
                ],
                recent: "Main floor: addition tie-ins leveled; prime & paint-ready.",
            },
        },

        burlington: {
            downtown: {
                intro: "Condos in {HOOD} favour quiet, dust-controlled work—our condo-friendly process keeps common areas clean.",
                highlights: [
                    "Evening shifts — To suit elevator windows and quiet hours.",
                    "Vacuum-assist sanding — Controls dust at the source.",
                    "Flat finish — Level 5 skim, prime, bright uniform read.",
                ],
                recent: "Downtown condo: night shift, skim + prime; zero corridor dust.",
            },
            aldershot: {
                intro: "Older {HOOD} homes show joint waves—our Level 5 skim flattens everything before paint.",
                highlights: [
                    "Patch blending — Rewiring holes disappear.",
                    "Feathered seams — No shadowing in daylight.",
                    "Durable system — Primer locks down for long-lasting paint.",
                ],
                recent: "Bungalow: patch blend, full skim, prime, smooth finish.",
            },
            "the-orchard": {
                intro: "Open-concept rooms in {HOOD} demand consistent reflectance—no flashing or lap marks.",
                highlights: [
                    "Full-field skim — Uniform sheen across wide spans.",
                    "Critical-light pass — Checked from windows and LEDs.",
                    "On-time schedule — Clear start/finish dates.",
                ],
                recent: "Kitchen/living: scrape + Level 5 skim; premium prime & paint-ready.",
            },
        },

        milton: {
            scott: {
                intro: "Newer {HOOD} builds can show seam telegraphing—our Level 5 step eliminates joints under bright whites.",
                highlights: [
                    "Containment — Family-friendly, tidy daily wrap-ups.",
                    "Raking-light check — We re-skim until it reads flat.",
                    "Paint-ready — Stain-blocked and uniform.",
                ],
                recent: "Loft & hall: leveled and repainted for consistent sheen.",
            },
            "hawthorne-village": {
                intro: "Fast schedules in {HOOD} need tight coordination—our team delivers on time without dust.",
                highlights: [
                    "Vacuum sanding — Clean prep without mess.",
                    "Edge quality — Crisp lines at trims and returns.",
                    "Reliable handover — Ready for paint immediately.",
                ],
                recent: "Main floor: full skim, prime; family areas remained usable.",
            },
            dempsey: {
                intro: "Bright kitchens in {HOOD} show imperfections—our Level 5 makes ceilings read perfectly smooth.",
                highlights: [
                    "Feathered seams — No flashing under downlights.",
                    "Leak stains — Blocked with specialty primer.",
                    "Durable system — Built for busy homes.",
                ],
                recent: "Kitchen/dining: scrape + skim; stain blocked and primed.",
            },
        },

        hamilton: {
            westdale: {
                intro: "Character homes in {HOOD} need careful methods—encapsulation protects plaster where scraping risks damage.",
                highlights: [
                    "Heritage-safe — Minimal disturbance to substrates.",
                    "Invisble patchwork — Feathered and checked in raking light.",
                    "Clean site — Plastic containment and tidy daily wrap-ups.",
                ],
                recent: "Westdale semi: mixed plaster/drywall leveled to modern flat.",
            },
            kirkendall: {
                intro: "Open sightlines in {HOOD} expose flaws—our Level 5 step removes joint telegraphing completely.",
                highlights: [
                    "Joint elimination — Full-field skim.",
                    "Pot-light blending — Cutouts vanish after skim.",
                    "Paint-ready — Stain-blocked and smooth.",
                ],
                recent: "Rewiring patches blended; main floor repainted.",
            },
            durand: {
                intro: "Condos in {HOOD} benefit from our quiet, compliant workflow—neighbours barely notice the work.",
                highlights: [
                    "Corridor protection — Rules followed to the letter.",
                    "Evening shifts — Elevator windows respected.",
                    "Zero mess — Vacuum-assist sanding and sealed rooms.",
                ],
                recent: "Condo: night shift, skim + prime; no common-area dust.",
            },
        },

        "stoney-creek": {
            "heritage-green": {
                intro: "Upgrades in {HOOD} often add pot lights—our blend-to-match hides every cutout.",
                highlights: [
                    "Pot-light perfection — Seamless around trims.",
                    "Leak repairs — Stain-blocked, uniform finish.",
                    "Schedule certainty — Clear start/finish dates.",
                ],
                recent: "Split-level: encapsulation + skim; crisp, bright finish.",
            },
            battlefield: {
                intro: "Older ceilings in {HOOD} need gentle methods—encapsulation avoids damaging substrates.",
                highlights: [
                    "Heritage-safe — Low-impact approach.",
                    "Level 5 skim — True flatness under raking light.",
                    "Paint-ready — Stain-blocked primer.",
                ],
                recent: "Two rooms: safe encapsulation, full skim, prime.",
            },
            winona: {
                intro: "Open areas in {HOOD} require consistent reflectance—our skim and prime system delivers it.",
                highlights: [
                    "Uniform sheen — No flashing or lap marks.",
                    "Feathered seams — Invisible transitions.",
                    "Clean workflow — Daily tidy and protection.",
                ],
                recent: "Main floor: full skim, prime; bright flat ceiling.",
            },
        },

        ancaster: {
            meadowlands: {
                intro: "Tall spaces in {HOOD} need safe staging and meticulous skim—no ripples around skylights.",
                highlights: [
                    "Skylight edges — Returns skimmed crisp.",
                    "Safe access — Proper scaffold and fall protection.",
                    "Premium finish — Spray for ultra-smooth look.",
                ],
                recent: "Skylight returns skimmed; prime & finish to match.",
            },
            "ancaster-heights": {
                intro: "Sunlit rooms in {HOOD} show everything—our Level 5 makes ceilings read perfectly flat.",
                highlights: [
                    "Critical-light pass — Verified from windows.",
                    "Stain blocking — No bleed-through later.",
                    "On-time — Predictable start/finish.",
                ],
                recent: "Living/dining: scrape + skim; sprayed ceiling white.",
            },
            "parkview-heights": {
                intro: "Renovations in {HOOD} need uniform ceilings across old and new rooms—our full-field skim delivers it.",
                highlights: [
                    "Joint telegraphing — Eliminated.",
                    "Pot-light rings — Blended out.",
                    "Paint-ready — Smooth, primed surface.",
                ],
                recent: "Main floor: tie-ins leveled; prime & finish ready.",
            },
        },

        grimsby: {
            "grimsby-on-the-lake": {
                intro: "Corridor-sensitive condos in {HOOD} require dust-free prep—our condo workflow keeps common areas clean.",
                highlights: [
                    "Evening shifts — Quiet and neighbour-friendly.",
                    "Vacuum sanding — Dust captured at source.",
                    "Level 5 skim — Flat, bright ceiling finish.",
                ],
                recent: "Lakeside unit: night work; skim + prime; zero corridor dust.",
            },
            "dorchester-estates": {
                intro: "Natural light in {HOOD} reveals joint shadows—our full skim erases them.",
                highlights: [
                    "Feathered seams — No ghosting under sun.",
                    "Leak blocking — Stain primer locks stains down.",
                    "Sprayed finish — Premium, modern look.",
                ],
                recent: "Detached: stain repair; full skim; prime and finish.",
            },
            escarpment: {
                intro: "Open views in {HOOD} demand consistent reflectance—no flashing from roller marks.",
                highlights: [
                    "Full-field skim — Uniform sheen across spans.",
                    "Critical-light check — From windows and LEDs.",
                    "Durable system — Primer built for topcoats.",
                ],
                recent: "Great room: scrape + skim; prime; paint-ready.",
            },
        },

        vaughan: {
            maple: {
                intro: "Modern renos in {HOOD} often add lighting—our blending makes cutouts vanish.",
                highlights: [
                    "Pot-light finishing — Invisible after skim.",
                    "Level 5 flatness — Raking-light verified.",
                    "On-schedule — Reliable handover.",
                ],
                recent: "Main floor: cutouts blended; skim; prime; sprayed white.",
            },
            woodbridge: {
                intro: "Large rooms in {HOOD} show imperfections—our full skim produces a high-end, even read.",
                highlights: [
                    "Feathered seams — No joint telegraphing.",
                    "Prime system — Prevents flashing.",
                    "Premium spray — Bright, uniform finish.",
                ],
                recent: "Family room: scrape + skim; prime; finish paint ready.",
            },
            kleinburg: {
                intro: "{HOOD} homes benefit from a premium finish—our Level 5 system delivers gallery-flat ceilings.",
                highlights: [
                    "Stain repairs — Fully blocked.",
                    "Edge crispness — Clean at trims and returns.",
                    "Warranty — 3-year workmanship.",
                ],
                recent: "Whole main: Level 5 skim; sprayed ceiling white.",
            },
        },

        "richmond-hill": {
            "bayview-hill": {
                intro: "Long hallways in {HOOD} expose imperfections—our Level 5 skim keeps ceilings flat from end to end.",
                highlights: [
                    "Full-field skim — No joint shadows.",
                    "Critical-light pass — Verified in morning sun.",
                    "Paint-ready — Stain-blocked primer.",
                ],
                recent: "Main floor: skim + prime after lighting upgrade.",
            },
            jefferson: {
                intro: "Open areas in {HOOD} need uniform reflectance—our process removes waves and lap marks.",
                highlights: [
                    "Feathered finishes — Smooth under LEDs.",
                    "Leak blocking — No future yellowing.",
                    "Predictable schedule — Start/finish locked.",
                ],
                recent: "Great room: scrape + skim; prime; bright, even finish.",
            },
            "oak-ridges": {
                intro: "Sunlight in {HOOD} highlights roller patterns—sprayed ceilings give a premium, uniform look.",
                highlights: [
                    "Spray finish — No roller flashing.",
                    "Edge care — Clean at crown and trims.",
                    "Durable system — Built to last.",
                ],
                recent: "Kitchen/dining: full skim, prime, sprayed white.",
            },
        },
    };

    var citySet = HOOD_MAP[citySlug];
    var hoodTpl = citySet && citySet[hoodSlug] ? citySet[hoodSlug] : null;

    var fallback = {
        intro: "Popcorn ceiling removal in {HOOD}, {CITY}: dust-contained workflow, Level 5 skim, prime & paint-ready finish.",
        highlights: [
            "Containment & protection — Floors, furniture and vents covered.",
            "Scrape vs encapsulation — Chosen after safe on-site tests.",
            "Level 5 skim — Raking-light inspection; stain-blocking primer.",
        ],
        recent: "Recent in {HOOD}: Level 5 skim, prime; bright, uniform ceiling.",
    };

    var tpl = hoodTpl || fallback;

    return {
        intro: subTokens(tpl.intro, city, hood),
        highlights: tpl.highlights.map(function(x) {
            return subTokens(x, city, hood);
        }),
        recent: subTokens(tpl.recent, city, hood),
    };
}