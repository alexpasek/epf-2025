const CITY_CONFIG = {
  oakville: {
    name: "Oakville",
    adjective: "Oakville",
    servicePath: "/services/drywall-repair/oakville/",
    contractorPath: "/services/drywall-contractor/oakville/",
    installPath: "/services/drywall-installation/oakville/",
    areas:
      "Old Oakville, Bronte, Glen Abbey, River Oaks, West Oak Trails, Joshua Creek, Iroquois Ridge, College Park, and Uptown Core",
    housing:
      "Oakville repairs often happen in finished family homes, lakefront properties, newer subdivisions, townhomes, and condo units where bright rooms, long walls, pot lights, and premium paint make patch quality easy to judge.",
    quoteContext:
      "Access can be simple in detached homes, but tight townhomes, condo elevators, stairwells, designer finishes, and occupied rooms can change the setup and protection plan.",
  },
  burlington: {
    name: "Burlington",
    adjective: "Burlington",
    servicePath: "/services/drywall-repair/burlington/",
    contractorPath: "/services/drywall-contractor/burlington/",
    installPath: "/services/drywall-installation/burlington/",
    areas:
      "Aldershot, Downtown Burlington, Roseland, Millcroft, Headon, Tyandaga, Brant Hills, Shoreacres, Orchard, Tansley, and Longmoor",
    housing:
      "Burlington drywall repair often involves family homes near the lake, mature neighbourhood houses, newer subdivisions, finished basements, townhomes, and condos where water stains, settlement cracks, and moving damage need clean blending.",
    quoteContext:
      "Lake-adjacent homes, basement ceilings, textured older repairs, condo rules, and high-traffic family spaces can all affect how much protection, drying, sanding, and repainting are needed.",
  },
  ancaster: {
    name: "Ancaster",
    adjective: "Ancaster",
    servicePath: "/services/drywall-repair/",
    contractorPath: "/services/drywall-contractor/hamilton/",
    installPath: "/services/drywall-installation/hamilton/",
    areas:
      "Meadowlands, Old Ancaster, Clearview, Oakhill, Mohawk Meadows, Scenic Woods, and nearby west Hamilton areas",
    housing:
      "Ancaster projects often include larger family homes, finished basements, older plaster-adjacent repairs, stairwells, renovated main floors, and newer subdivision homes with settlement cracks or nail pops.",
    quoteContext:
      "Basement access, tall foyers, stairwell damage, textured older surfaces, and multi-room repairs can change the quote even when the visible drywall damage looks small.",
  },
  grimsby: {
    name: "Grimsby",
    adjective: "Grimsby",
    servicePath: "/services/drywall-repair/grimsby/",
    contractorPath: "/services/drywall-contractor/grimsby/",
    installPath: "/services/drywall-installation/grimsby/",
    areas:
      "Grimsby Beach, Casablanca, Main Street, Mountain Brow, West Grimsby, East Grimsby, Livingston, and Nelles Corners",
    housing:
      "Grimsby drywall repair often involves lake-area homes, newer builds near the QEW, escarpment properties, finished basements, and renovation projects where moisture history, settlement, and daylight can expose weak patches.",
    quoteContext:
      "Lake humidity, roof or plumbing stains, basement access, rural property scheduling, and newer-home settlement repairs can affect whether the work is a small patch, a wider tape repair, or a board replacement.",
  },
};

const CONTACT_PATH = "/quote/";

const basePhotos = (city, keyword, topicLabel) => [
  {
    src: "/gallery/drywall-repair/drywall-repair-service00001.webp",
    alt: `${city.name} drywall repair compound feathered around a wall patch`,
    description: `Generated featured image prompt: realistic professional home renovation photo for ${keyword}, showing a drywall repair patch being feathered in a protected ${city.name} home, natural daylight, no text or logos.`,
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00002.webp",
    alt: `${topicLabel} drywall damage prepared for repair in ${city.name}`,
    description: `Supporting image prompt: close-up ${topicLabel.toLowerCase()} drywall repair stage in an Ontario home, protected floors, clean tools, realistic compound work, no faces, no text.`,
  },
  {
    src: "/gallery/drywall-repair/drywall-repair-service00003.webp",
    alt: `Paint-ready drywall repair finish in ${city.name}`,
    description: `Supporting image prompt: sanded and primed paint-ready drywall repair finish in a ${city.name} home, clean daylight, subtle realistic surface texture, no logos.`,
  },
];

const commonRelatedLinks = (city) => [
  {
    href: city.servicePath,
    anchor:
      city.servicePath === "/services/drywall-repair/"
        ? "drywall repair services"
        : `drywall repair in ${city.name}`,
    description:
      city.servicePath === "/services/drywall-repair/"
        ? `Main drywall repair service page for ${city.name} homeowners needing holes, cracks, stains, tape repairs, and paint-ready patching.`
        : `Local service page for ${city.name} holes, cracks, water damage, ceiling repairs, and paint-ready patching.`,
  },
  ...(city.servicePath === "/services/drywall-repair/"
    ? []
    : [
        {
          href: "/services/drywall-repair/",
          anchor: "drywall repair services",
          description:
            "Main service hub for drywall patching, crack repair, water damage repair, sanding, priming, and paint-ready finishing.",
        },
      ]),
  {
    href: city.contractorPath,
    anchor: `${city.name} drywall contractor`,
    description:
      "Broader drywall contractor support for mixed repair, installation, finishing, and renovation scopes.",
  },
  {
    href: "/services/interior-painting/",
    anchor: "interior painting services",
    description:
      "Useful when the repaired wall or ceiling needs repainting after compound, sanding, primer, or stain blocking.",
  },
  {
    href: CONTACT_PATH,
    anchor: `${city.name} drywall repair quote`,
    description:
      "Send photos, room details, ceiling height, and timing for a clear written quote.",
  },
];

const supportSections = (city, topicLabel) => [
  heading(`How EPF plans ${topicLabel.toLowerCase()} from photos`),
  `A useful photo quote starts with context. A close-up shows the damaged material, but it does not show access, room size, lighting, ceiling height, trim, flooring, furniture, or whether the repair sits in a high-visibility area. That is why EPF Pro Services asks for both close and wide photos. The repair method may change once we see whether the damage is on a flat wall, outside corner, stairwell, ceiling, finished basement, condo wall, or main-floor feature wall.`,
  `For ${city.name} homeowners, the first photo set should include the damaged spot, the whole wall or ceiling, and the room entrance. If water, plumbing, electrical, moving, shelving, or previous DIY work caused the damage, mention that history. If the room has pot lights, strong window light, dark paint, glossy paint, or a smooth ceiling, mention that too. Those details help us decide whether a simple patch is enough or whether wider feathering, primer, repainting, or board replacement should be discussed before booking.`,
  `The goal of photo review is not to replace professional judgement on site. It is to narrow the scope so the homeowner understands likely steps, timing, access needs, and finish expectations. A clear quote conversation prevents the common problem where a homeowner expects an invisible painted finish, but the priced scope only included a rough patch or unprimed compound.`,
  heading("Protection and dust control during drywall repair"),
  `Drywall repair can be dusty when it is unmanaged. EPF Pro Services plans protection before sanding starts. Floors, nearby furniture, trim, and traffic paths may need covering. In occupied homes, the work area should be kept organized so drywall dust does not drift through bedrooms, kitchens, basements, or condo hallways. Vacuum-assisted sanding and careful cleanup help keep the job practical for families who need the room back quickly.`,
  `Protection is especially important when the repair is near finished hardwood, stair runners, kitchen cabinets, built-ins, closets, electronics, or freshly painted surfaces. The amount of setup depends on the repair size and location. A small wall dent may need light protection. A ceiling repair, tape seam, corner bead replacement, or multi-area pre-paint repair needs more staging because compound, sanding, primer, and cleanup all touch a larger part of the room.`,
  `Dust control does not mean the work is magically dust-free. It means the process is planned: isolate what should be isolated, sand only when compound is ready, avoid overworking the surface, vacuum as work progresses, and leave the room in a condition that is ready for primer or paint. That difference matters in ${city.name} homes where the repair is often happening inside finished living space, not an empty construction shell.`,
  heading("Finish levels, lighting, and why some patches show"),
  `A drywall patch can be structurally sound and still look wrong after paint. The reason is usually finish quality, lighting, primer, or paint blending. Long walls, smooth ceilings, low-angle daylight, pot lights, and darker colours reveal ridges and sanding scratches. A small patch beside a window may need wider feathering than a larger patch in a closet because light decides what the eye sees.`,
  `Level 4 and Level 5 language can be useful, but homeowners do not need to memorize trade terms to make a good decision. The practical question is this: how visible is the surface, and how smooth does it need to look after paint? A standard repair may be right for a laundry room or low-visibility wall. A smoother finish may be needed for ceilings, feature walls, open-concept rooms, and areas under critical light.`,
  `Primer is part of finish quality. Raw compound is more porous than painted drywall, so paint can dry differently over the repair. That creates flashing, dull spots, or a visible halo. A paint-ready drywall repair should make primer needs clear. Sometimes the painter or homeowner handles primer and paint after EPF completes the repair. Other times the repair and painting should be planned together so the final wall or ceiling blends properly.`,
  heading(`Common mistakes to avoid with ${topicLabel.toLowerCase()}`),
  `The first mistake is rushing dry time. Compound that is coated too quickly can shrink, crack, or sand poorly. The second mistake is patching too narrowly. A small visible defect may need a wider repair so the edge disappears gradually. The third mistake is painting raw compound without primer. The fourth mistake is assuming touch-up paint will blend when the existing paint is older, faded, or a different sheen.`,
  `Another common mistake is ignoring the cause. A water stain should not be patched until the source is stopped and the drywall condition is understood. A recurring crack should not be treated like a one-time scratch. Loose corner bead should not be buried under compound. Bubbling tape should not be painted flat and called repaired. The visible mark is only the starting point.`,
  `DIY repairs can be reasonable for very small nail holes or low-visibility marks. Professional repair becomes more valuable when the surface is visible, the damage has returned before, the repair is overhead, the area needs a sharp corner, the wall will be repainted, or the homeowner is preparing for photos, buyers, tenants, or a renovation handoff.`,
  heading(`How to prepare your ${city.name} home before the repair`),
  `Before the crew arrives, clear small items away from the damaged wall or ceiling where practical. Move fragile decor, loose furniture, and anything that blocks access. If the repair is in a condo, confirm elevator, parking, loading, and quiet-hour requirements. If the repair is in a basement, stairwell, or tight hallway, note any access limits in advance so protection can be planned properly.`,
  `If the damage came from a leak, confirm the leak has stopped. If you suspect mold, repeated moisture, contaminated water, or a musty smell, contact the proper remediation or inspection professional before cosmetic drywall repair. EPF Pro Services does not make mold remediation or medical claims. Drywall finishing should happen after the underlying concern has been addressed and the area is ready to rebuild.`,
  `For painting, decide whether you want EPF to leave the surface paint-ready only or whether you also need repaint planning. Paint-ready means the drywall repair is stable, sanded, and ready for primer or paint. It does not guarantee that old paint will match a new touch-up. That distinction protects the homeowner from disappointment and keeps the quote honest.`,
  heading("What a clean handoff should include"),
  `At the end of a professional drywall repair, the homeowner should understand what was repaired, what still needs primer or paint, and whether a touch-up or full wall repaint is the better finish choice. The surface should be stable, sanded, and free of obvious ridges. The work area should be cleaned enough that the next step is practical, whether that next step is primer, painting, listing photos, or moving furniture back.`,
  `A clean handoff also means the quote matched the scope. If the job changed because damaged drywall was soft, tape was loose, corner bead moved, or a previous patch failed under paint, that should be explained. Homeowners deserve a repair that solves the actual condition, not only the part visible in the first photo.`,
  cta(city, `${city.name} drywall repair services`),
];

const cta = (city, anchor) => ({
  html: `<div class="my-8 rounded-3xl border border-blue-200 bg-blue-50 p-6"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">${city.name} drywall repair help</p><p class="mt-2 text-lg font-semibold text-slate-900">Planning a repair in ${city.name}? Send photos to EPF Pro Services or review our <a href="${city.servicePath}" class="text-blue-600 font-semibold hover:underline">${anchor}</a> options before you repaint, list, or close the wall back up.</p></div>`,
});

const heading = (text) => ({ html: `<h2>${text}</h2>` });
const subheading = (text) => ({ html: `<h3>${text}</h3>` });

const localIntro = (city, topic) =>
  `${topic} in ${city.name} has to be planned around the way the room will look after paint, not only how the damage looks before compound. ${city.housing} EPF Pro Services treats drywall repair as a finish-quality job: protect the room, stabilize the surface, use proper backing or tape where needed, build compound in controlled coats, sand with dust control, prime correctly, and leave the wall or ceiling paint-ready.`;

const cityContext = (city) =>
  `Local context matters across ${city.areas}. ${city.quoteContext} A small dent on a low-visibility basement wall is not the same job as a ceiling stain under pot lights, a stairwell crack, a condo wall beside daylight, or a patched main-floor wall that will be painted with a low-sheen finish.`;

const quoteFactors = (city) => [
  heading(`What affects a ${city.name} drywall repair quote`),
  `The quote depends on damage size, damage location, surface stability, access, ceiling height, number of repair areas, whether the work is on a wall or ceiling, whether previous patches need to be corrected, whether stain-block primer is needed, and whether painting is included. The same visible mark can price differently if it is beside trim, above stairs, on a ceiling, under harsh light, or inside an occupied room that needs careful protection.`,
  `Photos help make the first estimate more accurate. Send one close-up, one wider photo showing the full wall or ceiling, one photo from the doorway, and notes about the cause. Include whether the area was affected by plumbing, electrical work, moving, water, settlement, tape failure, or a previous repair. For ${city.name} homes, also mention ceiling height, parking or condo access, and whether the room needs to stay usable during the repair.`,
  `EPF Pro Services prices around the full repair sequence, not only the patch size. A proper quote should account for floor protection, loose material removal, backing, tape, compound coats, drying time, sanding, primer, cleanup, and the paint plan. That keeps the scope clear before work starts and avoids surprise expectations after the repair is already sanded.`,
];

const callEpf = (city, issue) => [
  heading(`When to call EPF for ${issue} in ${city.name}`),
  `Call when the repair is in a visible room, when paint quality matters, when the damage is larger than a simple nail hole, when the repair is overhead, when tape has failed, when water staining is involved, or when a previous patch still shows through paint. These are the situations where the repair method matters more than a quick coat of compound.`,
  `EPF Pro Services is a practical fit when you want dust-controlled sanding, clean protection, stable backing, proper taping, paint-ready finishing, Level 4 or Level 5 judgement, and a clear photo-based quote. We do not treat drywall repair as a cosmetic smear. The goal is a surface that can be primed and painted without pulling your eye back to the damaged spot.`,
  cta(city, `${city.name} drywall repair quote`),
];

const relatedBlock = (city) => [
  heading(`Related local pages and drywall terms this guide covers`),
  {
    html: `For the local service overview, start with <a href="${city.servicePath}" class="text-blue-600 font-semibold hover:underline">${city.name} drywall repair services</a>. If the repair is part of broader renovation work, compare <a href="${city.installPath}" class="text-blue-600 font-semibold hover:underline">drywall installation in ${city.name}</a> and <a href="/services/interior-painting/" class="text-blue-600 font-semibold hover:underline">interior painting services</a>. For scheduling, send photos through the <a href="${CONTACT_PATH}" class="text-blue-600 font-semibold hover:underline">drywall repair quote page</a>.`,
  },
  `Terms covered on this page include drywall repair ${city.name}, drywall patching ${city.name}, paint-ready drywall repair, drywall sanding, drywall primer, drywall tape repair, corner bead repair, nail pop repair, wall dent repair, ceiling drywall repair, water stain repair, and Level 4 or Level 5 finish decisions.`,
];

const beforePaintingContent = (city) => [
  localIntro(city, `Drywall repair before painting`),
  cityContext(city),
  {
    html: `If the wall or ceiling has dents, nail pops, tape cracks, stains, or old patch edges, start with <a href="${city.servicePath}" class="text-blue-600 font-semibold hover:underline">drywall repair in ${city.name} before painting</a> so the new paint is not forced to hide surface defects it cannot hide.`,
  },
  cta(city, `paint-ready drywall repair in ${city.name}`),
  heading("Quick answer"),
  `Fix drywall damage before painting whenever the surface has holes, nail pops, failed tape, dents, corner chips, ceiling cracks, water stains, rough old patches, or exposed compound. Paint does not level a wall. It usually makes defects easier to see because sheen, daylight, and roller texture highlight patch edges.`,
  heading(`What to fix before repainting a ${city.name} home`),
  subheading("Nail pops, dents, and anchor holes"),
  `Nail pops and anchor holes are small, but they should not be ignored before repainting. A nail pop needs the loose fastener dealt with, not only a dab of compound. Anchor holes may need patching, sanding, and primer so the paint does not sink differently over the repair. In main living areas, several small defects can make a freshly painted wall look tired.`,
  subheading("Corner chips and high-traffic wall damage"),
  `Corners around hallways, stairwells, bedrooms, and moving paths often take more abuse than flat walls. Chipped corner bead or dented outside corners should be tightened, rebuilt, feathered, sanded, and primed before painting. A bulky corner repair can look worse than the original chip, so the compound has to be blended wider than many homeowners expect.`,
  subheading("Failed tape, open seams, and small ceiling cracks"),
  `Tape problems should be repaired before paint because the crack usually returns if the tape is loose underneath. Caulking a drywall seam is not a proper finish repair. Loose tape may need to be cut out and replaced, then covered with controlled compound coats that feather beyond the failed seam.`,
  subheading("Water stains and previous leak marks"),
  `A dry water stain still needs careful handling. First, the source should be stopped and the drywall should be firm. If the surface is soft, swollen, moldy, or repeatedly wet, cosmetic drywall repair should wait until the moisture issue is properly addressed. If the drywall is stable, stain-block primer may be needed before repainting so the stain does not bleed back.`,
  heading("Why primer matters over compound"),
  `Raw joint compound absorbs paint differently than the surrounding painted wall. Without primer, a patch can flash as a dull or shiny area even if the sanding was good. Primer helps seal the repair and creates a more even surface for finish paint. In rooms with strong daylight or low-sheen paint, primer is not optional if the goal is a clean result.`,
  heading("When spot painting is not enough"),
  `Touch-up paint may work on newer walls with the same paint can, but many repairs need more. If the paint is old, faded, unknown, or a different sheen, a small spot touch-up can leave a visible halo. Repainting the full wall from corner to corner often gives a cleaner result because the eye sees one consistent plane instead of a patch inside an older finish.`,
  heading("When a full ceiling or full wall repaint is better"),
  `Full repainting is often better for ceilings, open-concept walls, stairwells, rooms with pot lights, and walls that receive direct daylight. This does not mean every drywall repair needs full painting. It means the paint plan should be discussed before the repair starts so the final expectation is realistic.`,
  heading("How EPF prepares drywall for a better finish"),
  `EPF Pro Services checks whether the damaged area needs surface patching, backing, tape, corner bead work, stain blocking, wider feathering, or a repaint plan. We protect floors, control sanding dust, keep compound layers thin enough to dry properly, and leave the repair paint-ready for the homeowner or painter.`,
  ...quoteFactors(city),
  ...callEpf(city, "drywall repair before painting"),
  ...relatedBlock(city),
];

const beforeSellingContent = (city) => [
  localIntro(city, `Drywall repair before selling a home`),
  cityContext(city),
  {
    html: `Before listing photos, showings, tenant turnover, or move-out walkthroughs, review <a href="${city.servicePath}" class="text-blue-600 font-semibold hover:underline">drywall repair before selling a ${city.name} home</a> so small wall and ceiling defects do not become buyer distractions.`,
  },
  cta(city, `drywall repair before selling in ${city.name}`),
  heading("Quick answer"),
  `Repair visible drywall damage before selling when holes, dents, stains, bad patches, cracked seams, or chipped corners make the home look poorly maintained. The goal is not to renovate everything. It is to remove obvious distractions before listing photos, showings, appraisals, tenant turnover, or closing repairs.`,
  heading("Wall and ceiling defects buyers notice quickly"),
  subheading("Picture holes, shelf anchors, and TV mount damage"),
  `Small holes from pictures and shelves can make a room feel unfinished once furniture is removed. TV mounts often leave clusters of anchors, cable openings, crushed paper, and paint mismatches. These repairs should be patched, sanded, primed, and painted with a plan that suits the whole wall.`,
  subheading("Furniture dents and stairwell wall damage"),
  `Move-out damage often appears in stairwells, hallways, bedrooms, and tight corners. Buyers may not object to one small dent, but repeated marks suggest the house needs work. A clean drywall repair before listing can make the home feel better cared for without changing the room layout.`,
  subheading("Ceiling stains and settlement cracks"),
  `Ceiling stains get attention because buyers worry about leaks. The leak source should be resolved first, and any soft or damaged material should be assessed before cosmetic repair. Settlement cracks also need honest handling. A hairline cosmetic crack is different from a recurring structural movement concern, and the repair should match the cause.`,
  heading("Why bad DIY patches hurt buyer confidence"),
  `A raised patch, rough sanding mark, unprimed compound spot, or mismatched paint can be more obvious than the original damage. Buyers may wonder what else was rushed. A cleaner repair shows that the seller handled visible maintenance before inviting offers or tenant applications.`,
  heading("Repair only or repaint too?"),
  `Some selling-prep repairs only need localized patching and touch-up. Others need a full wall or ceiling repaint to blend properly. The decision depends on paint age, sheen, colour, room lighting, and whether the repair is in a high-visibility area. A practical contractor should explain this before pricing the work.`,
  heading("Fast photo-based quote process"),
  `EPF Pro Services can often start with photos. Send close-ups of each damaged area, a wider room photo, and timing for listing photos, open houses, tenant move-in, or closing. This helps us decide whether the scope is a small patch visit, a multi-area repair, or a repair-and-paint preparation job.`,
  heading("Scheduling before photos or showings"),
  `Drywall compound needs drying time, and paint may need a second coat. Do not wait until the day before listing photos if the repair involves tape, corner bead, water staining, or ceiling work. The earlier the damage is assessed, the easier it is to avoid rushed repairs that still show under camera lighting.`,
  ...quoteFactors(city),
  ...callEpf(city, "drywall repair before selling"),
  ...relatedBlock(city),
];

const tapeRepairContent = (city) => [
  localIntro(city, `Drywall tape repair`),
  cityContext(city),
  {
    html: `For bubbling tape, open seams, inside corner cracks, or ceiling joint failure, start with <a href="${city.servicePath}" class="text-blue-600 font-semibold hover:underline">drywall tape repair in ${city.name}</a> so the loose joint is rebuilt instead of hidden temporarily.`,
  },
  cta(city, `professional drywall repair in ${city.name}`),
  heading("Quick answer"),
  `Drywall tape repair is needed when tape bubbles, peels, cracks, opens at a seam, fails in an inside corner, or shows through paint. A lasting repair usually means removing loose material, retaping where needed, applying controlled compound coats, feathering wider than the seam, sanding, priming, and repainting with a realistic blend plan.`,
  heading("Common drywall tape problems"),
  subheading("Bubbling or peeling tape"),
  `Bubbling tape usually means the tape has lost bond or was embedded poorly. Painting over it traps the problem. The loose section should be opened, removed where needed, reset with compound, and feathered so the repaired area does not sit proud of the wall.`,
  subheading("Open seams and cracked joints"),
  `Open seams often happen where movement, poor original taping, moisture, or fast drying weakened the joint. A narrow smear of compound may hide the line for a short time, but it rarely solves loose tape. The repair has to stabilize the joint and rebuild the surface wider than the crack.`,
  subheading("Inside corner tape failure"),
  `Inside corners need a sharp, straight finish. Loose corner tape can wrinkle, split, or create a shadow line after paint. The repair may require cutting out failed tape, bedding new paper tape, shaping both sides of the corner, sanding carefully, and priming before finish paint.`,
  subheading("Ceiling tape cracks"),
  `Ceiling tape cracks are especially visible under pot lights and daylight. Gravity also makes overhead compound harder to control. A ceiling seam repair may need wider feathering, careful sanding, and often a broader ceiling repaint to blend the repair properly.`,
  heading("Why quick caulking is not a proper drywall tape fix"),
  `Caulk can move, shrink, collect dust, and telegraph through paint. It does not replace failed tape or rebuild a joint. There are limited trim-adjacent situations where flexible sealant has a role, but an open drywall seam or tape bubble should be repaired with drywall materials and a proper finish sequence.`,
  heading("When tape must be removed and replaced"),
  `Tape should usually be removed when it is loose, blistered, contaminated, badly wrinkled, or no longer bonded to the wall. If only the surface compound cracked but the tape is stable, a reinforced surface repair may be enough. The correct choice depends on what is loose underneath.`,
  heading("Mesh tape vs paper tape"),
  `Paper tape is common for inside corners and many joint repairs because it folds cleanly and creates a strong embedded seam. Mesh tape can be useful in certain flat repair situations, especially with the right compound. The material matters less than correct embedding, coat thickness, drying time, and feathering.`,
  heading("Compound coats, sanding, and primer"),
  `Tape repair usually needs multiple coats. The first coat embeds or resets the tape. Later coats widen and flatten the transition. Sanding should remove ridges without digging into the paper. Primer seals the repair so the finished paint does not flash along the joint line.`,
  heading("Why tape repair must be feathered wider than the failed seam"),
  `A seam is a long straight line, and straight lines are easy to see after paint. Feathering spreads the transition so light does not catch a ridge. This is why a professional repair often looks larger during compound work than the original crack. The wider repair is what helps the finished wall look calmer.`,
  ...quoteFactors(city),
  ...callEpf(city, "drywall tape repair"),
  ...relatedBlock(city),
];

const cornerBeadContent = (city) => [
  localIntro(city, `Corner bead drywall repair`),
  cityContext(city),
  {
    html: `For dented outside corners, cracked edges, moving damage, and chipped hallway corners, use <a href="${city.servicePath}" class="text-blue-600 font-semibold hover:underline">corner bead drywall repair in ${city.name}</a> before the damage spreads or gets painted over.`,
  },
  cta(city, `corner bead drywall repair in ${city.name}`),
  heading("Quick answer"),
  `Corner bead drywall repair is needed when outside wall corners are dented, chipped, cracked, loose, or visibly rounded from impact. Small chips can often be rebuilt. Loose or crushed bead may need fastening, partial replacement, or full replacement before compound, sanding, primer, and paint-ready finishing.`,
  heading("Common corner bead damage"),
  subheading("Dented outside corners"),
  `Outside corners take impact from furniture, vacuums, baby gates, moving boxes, laundry baskets, and daily traffic. A dent may look minor, but if the bead is bent underneath, compound alone can crack again. The repair starts by checking whether the bead is stable.`,
  subheading("Chipped corner edges"),
  `Chipped edges are common in hallways, bedrooms, stairwells, and near door frames. The loose material should be removed so the new compound bonds to a firm edge. The repair then needs to be shaped cleanly so the corner does not become lumpy or rounded.`,
  subheading("Cracked corner bead"),
  `Cracking along an outside corner can mean movement, poor fastening, impact, or failed compound over the bead. If the bead moves when pressed, it should be secured or replaced before finish work. Covering a loose corner with more compound usually leads to another crack.`,
  heading("Hallway, stairwell, and moving damage"),
  `High-traffic areas need sharper repair work because the eye catches corner lines quickly. Stairwells are especially demanding because the corner may be seen from above and below. Moving damage should be repaired before painting or listing so the wall edges look straight again.`,
  heading("Metal corner bead vs paper-faced bead"),
  `Metal bead is durable but can dent, rust in moisture-prone situations, or separate if fasteners fail. Paper-faced bead can blend well but may bubble or split if poorly installed or damaged. The repair method depends on the bead type, the amount of movement, and whether the damage is cosmetic or structural to the corner finish.`,
  heading("When corner bead can be repaired"),
  `A corner can often be repaired when the bead is still straight and secure, the damage is shallow, and the surrounding drywall is stable. The repair may involve scraping loose compound, reshaping the corner, applying thin coats, sanding straight, priming, and repainting.`,
  heading("When corner bead should be replaced"),
  `Replacement is usually better when the bead is crushed, loose, badly rusted, sharply bent, or cracked along a long section. Replacing bead takes more setup, but it creates a stronger base. This is important near stairwells, busy hallways, rental turnover, or homes being prepared for sale.`,
  heading("How to feather compound without a bulky corner"),
  `A clean corner bead repair has to keep the edge sharp while spreading compound far enough onto both wall faces. If the compound is too narrow, the repair edge flashes. If it is too heavy, the corner looks swollen. Good sanding and light checks make the difference before primer goes on.`,
  heading("Primer and paint-ready finishing"),
  `Raw compound around a corner must be primed before finish paint. Corners catch hand marks and daylight, so skipped primer can leave flashing or uneven sheen. A paint-ready repair means the corner is stable, shaped, sanded, sealed where needed, and ready for the final paint plan.`,
  ...quoteFactors(city),
  ...callEpf(city, "corner bead drywall repair"),
  ...relatedBlock(city),
];

const TOPICS = [
  {
    key: "before-painting",
    slug: "drywall-repair-before-painting",
    label: "Drywall Repair Before Painting",
    title: (city) =>
      `Drywall Repair Before Painting in ${city.name}: What to Fix Before You Repaint`,
    metaTitle: (city) =>
      `Drywall Repair Before Painting in ${city.name} | Paint-Ready Wall Prep`,
    metaDescription: (city) =>
      `What to fix before repainting in ${city.name}: nail pops, dents, failed tape, stains, patch flashing, primer, and paint-ready drywall repair.`,
    excerpt: (city) =>
      `A practical ${city.name} homeowner guide to drywall repair before painting, including nail pops, dents, failed tape, stains, primer, patch flashing, and repaint planning.`,
    keyword: (city) => `drywall repair before painting ${city.name}`,
    serviceType: (city) => `${city.name} drywall repair before painting`,
    content: beforePaintingContent,
    faqs: (city) => [
      {
        q: `Should I repair drywall before painting in ${city.name}?`,
        a: "Yes. Paint does not hide holes, raised patches, loose tape, water stains, or sanding ridges. Repair, sand, and prime first so the finish paint has a stable surface.",
      },
      {
        q: "Can I just spot paint over a drywall patch?",
        a: "Sometimes, but older paint, faded colour, sheen differences, and strong daylight often make spot painting visible. A full wall repaint is cleaner when the repair is in a main room.",
      },
      {
        q: "Does EPF leave drywall repairs ready for paint?",
        a: "Yes. EPF Pro Services focuses on paint-ready drywall repair with protection, compound control, sanding, primer guidance, and a clear repaint plan.",
      },
    ],
  },
  {
    key: "before-selling",
    slug: "drywall-repair-before-selling-home",
    label: "Drywall Repair Before Selling",
    title: (city) =>
      `Drywall Repair Before Selling a Home in ${city.name}: Walls, Ceilings & Move-Out Damage`,
    metaTitle: (city) =>
      `Drywall Repair Before Selling in ${city.name} | Listing Prep Guide`,
    metaDescription: (city) =>
      `Drywall repair before selling in ${city.name}: TV mount holes, dents, ceiling stains, bad patches, move-out damage, photo quotes, and repaint planning.`,
    excerpt: (city) =>
      `A ${city.name} guide for sellers, landlords, realtors, and homeowners fixing drywall damage before listing photos, showings, renting, or moving out.`,
    keyword: (city) => `drywall repair before selling home ${city.name}`,
    serviceType: (city) => `${city.name} drywall repair before selling`,
    content: beforeSellingContent,
    faqs: (city) => [
      {
        q: `Is drywall repair worth it before selling in ${city.name}?`,
        a: "Often, yes. Visible holes, dents, stains, cracked seams, and bad patches can distract buyers and make the home feel less maintained.",
      },
      {
        q: "How soon before listing photos should drywall be repaired?",
        a: "Book as early as possible. Compound and paint need drying time, especially for ceiling stains, tape repairs, corner bead work, and full wall repainting.",
      },
      {
        q: "Can EPF quote from photos before a listing deadline?",
        a: "Yes. Send close-ups, wide room photos, timing, and whether painting is needed so EPF can advise the cleanest repair scope.",
      },
    ],
  },
  {
    key: "tape-repair",
    slug: "drywall-tape-repair",
    label: "Drywall Tape Repair",
    title: (city) =>
      `Drywall Tape Repair in ${city.name}: Bubbling Tape, Open Seams & Cracked Joints`,
    metaTitle: (city) =>
      `Drywall Tape Repair in ${city.name} | Bubbling Tape & Cracked Seams`,
    metaDescription: (city) =>
      `Drywall tape repair in ${city.name} for bubbling tape, peeling seams, inside corners, ceiling cracks, compound coats, sanding, primer, and paint-ready finishing.`,
    excerpt: (city) =>
      `A homeowner guide to drywall tape repair in ${city.name}, including bubbling tape, open seams, inside corner failure, ceiling cracks, sanding, primer, and repaint planning.`,
    keyword: (city) => `drywall tape repair ${city.name}`,
    serviceType: (city) => `${city.name} drywall tape repair`,
    content: tapeRepairContent,
    faqs: (city) => [
      {
        q: `Can bubbling drywall tape be repaired in ${city.name} homes?`,
        a: "Yes. Loose tape usually needs to be opened, removed where needed, reset or replaced, coated, sanded, primed, and painted.",
      },
      {
        q: "Should I caulk a cracked drywall seam?",
        a: "No for most drywall seams. Caulk does not replace failed tape. A proper tape repair uses drywall materials and wider feathering.",
      },
      {
        q: "Why does tape repair look wider than the original crack?",
        a: "Feathering spreads the transition so the repaired seam does not leave a ridge or straight shadow line after paint.",
      },
    ],
  },
  {
    key: "corner-bead",
    slug: "corner-bead-drywall-repair",
    label: "Corner Bead Drywall Repair",
    title: (city) =>
      `Corner Bead Drywall Repair in ${city.name}: Dented Corners, Cracked Edges & Clean Re-Finishing`,
    metaTitle: (city) =>
      `Corner Bead Drywall Repair in ${city.name} | Dented Wall Corners`,
    metaDescription: (city) =>
      `Corner bead drywall repair in ${city.name} for dented outside corners, cracked edges, chipped bead, moving damage, feathering, primer, and paint-ready finishing.`,
    excerpt: (city) =>
      `A practical ${city.name} guide to corner bead drywall repair for dented outside corners, chipped wall edges, cracked bead, hallway damage, and paint-ready finishing.`,
    keyword: (city) => `corner bead drywall repair ${city.name}`,
    serviceType: (city) => `${city.name} corner bead drywall repair`,
    content: cornerBeadContent,
    faqs: (city) => [
      {
        q: `Can dented corner bead be repaired in ${city.name}?`,
        a: "Yes if the bead is still secure and mostly straight. Loose, crushed, or long damaged sections may need partial or full replacement.",
      },
      {
        q: "Why do outside drywall corners crack again?",
        a: "Corners crack again when the bead is loose, bent, poorly fastened, or covered with compound without stabilizing the base.",
      },
      {
        q: "Does corner bead repair need painting?",
        a: "Usually yes. The compound should be primed and the repaired corner painted. A full wall repaint may blend better than a small touch-up.",
      },
    ],
  },
];

const buildPost = (city, topic) => {
  const keyword = topic.keyword(city);
  const image = `/blog/${topic.slug}-${city.name.toLowerCase()}-featured.png`;
  return {
    title: topic.title(city),
    metaTitle: topic.metaTitle(city),
    h1: topic.title(city),
    slug: `${topic.slug}-${city.name.toLowerCase()}`,
    date: "2026-06-11",
    excerpt: topic.excerpt(city),
    metaDescription: topic.metaDescription(city),
    author: "Alex - EPF Pro Services",
    reviewedBy: "EPF Pro Services",
    articleSection: "Drywall repair",
    serviceType: topic.serviceType(city),
    schemaType: "BlogPosting",
    image,
    keywords: [
      keyword,
      `drywall repair ${city.name}`,
      `drywall patching ${city.name}`,
      `paint-ready drywall repair ${city.name}`,
      `drywall contractor ${city.name}`,
    ],
    quickAnswer: topic.excerpt(city),
    photos: basePhotos(city, keyword, topic.label),
    content: [...topic.content(city), ...supportSections(city, topic.label)],
    faqs: topic.faqs(city),
    links: commonRelatedLinks(city),
  };
};

export const localDrywallRepairCityPosts = Object.values(CITY_CONFIG).flatMap(
  (city) => TOPICS.map((topic) => buildPost(city, topic)),
);
