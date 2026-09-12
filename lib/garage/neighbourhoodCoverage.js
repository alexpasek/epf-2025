import { cities } from "../../data/cities";

// Existing EPF geography plus municipal place names; lists are examples, not boundary registers.
const names = slug => cities.find(city => city.slug === slug)?.neighborhoods.map(area => area.name) || [];
export const garageNeighbourhoodCoverage = {
  mississauga: {
    names: [...names("mississauga"), "Lisgar", "Creditview", "Rathwood", "Central Erin Mills", "Erindale", "Fairview", "Mississauga Valleys", "Ninth Line"],
    intro: "EPF provides garage drywall repair throughout Mississauga and all its neighbourhoods, including the areas below. Whether you are arranging a tape repair in Port Credit or a wider garage finishing estimate in Erin Mills, send the property location and the actual repair details together.",
    planning: "Include your postal code, nearest intersection and whether the garage is attached or detached. For a peeling joint, show both the lifted edge and the full wall. Confirm vehicle and storage clearance so the estimate reflects the space available to protect, repair and finish the surface.",
    faq: ["Do you cover all Mississauga neighbourhoods for garage drywall repair?", "Yes. EPF serves Mississauga citywide, including Port Credit, Streetsville, Erin Mills, Churchill Meadows, Meadowvale and the other areas listed here. Include your address or postal code when requesting an estimate so access, scope and scheduling can be confirmed."]
  },
  oakville: {
    names: [...names("oakville"), "Joshua Creek", "Joshua Meadows", "Glenorchy", "Eastlake", "West Oakville", "Sixteen Hollow"],
    intro: "Garage drywall repair is available throughout Oakville and all its neighbourhoods, including Bronte, Glen Abbey, River Oaks and the communities below. The same estimate can distinguish failed-joint repair from an optional upgrade to smoother painted walls.",
    planning: "For an Oakville finishing estimate, include the property location, planned paint sheen and the walls that will remain visible after shelving is installed. A neighbourhood name helps locate the job; photographs and an assessment establish which joints need repair and which surfaces only need finish improvement.",
    faq: ["Can I request garage repairs anywhere in Oakville?", "Yes. EPF covers Oakville neighbourhoods citywide, including Bronte, Glen Abbey, West Oak Trails, River Oaks and Iroquois Ridge. Give your location, photographs and intended finish when requesting an estimate; the listed areas are examples of coverage."]
  },
  burlington: {
    names: [...names("burlington"), "Kilbride", "Longmoor", "Pinedale", "Dynes"],
    intro: "EPF serves Burlington and all its neighbourhoods for garage drywall repairs, from Aldershot and Brant Hills to Orchard, Alton Village and rural Burlington. The areas below help you identify local coverage when planning wall repairs or overhead re-taping.",
    planning: "Send the Burlington address or nearest intersection along with views of shelving, the garage door track and the affected joints. If the garage must remain partly in use, describe that before the quote so protection, access and possible work stages can be discussed.",
    faq: ["Do you repair garage drywall across Burlington, including rural areas?", "Yes. Burlington coverage includes the named neighbourhoods and rural addresses such as Kilbride. Provide the property location, access details and repair photographs to confirm the assessment and scheduling arrangements for your project."]
  },
  hamilton: {
    names: [...names("hamilton"), "Ainslie Wood", "Strathcona", "Winona", "Flamborough", "Glanbrook"],
    intro: "Garage drywall repair is available across Hamilton and all its neighbourhoods and communities. Coverage includes the lower city, Hamilton Mountain, Ancaster, Dundas, Stoney Creek, Waterdown, Flamborough and Glanbrook, with neighbourhood examples below.",
    planning: "State the community and postal code in your Hamilton enquiry so the property location is clear. For a seam that has cracked again, add previous repair dates if known and photographs showing the full joint. The repair assessment depends on the board, joint and moisture conditions at the property, not its neighbourhood.",
    faq: ["Does Hamilton garage repair coverage include Ancaster, Dundas and Stoney Creek?", "Yes. EPF serves Hamilton citywide, including Ancaster, Dundas, Stoney Creek, Waterdown, Hamilton Mountain and rural Hamilton communities. Include your community and postal code with the repair details so the correct property and work scope can be confirmed."]
  },
  grimsby: {
    names: ["Downtown Grimsby", "Grimsby Beach", "Grimsby on the Lake", "Winston Road neighbourhood", "Casablanca Road area", "Nelles Beach area"],
    intro: "EPF provides garage drywall repair throughout Grimsby and all its neighbourhoods, including Downtown Grimsby, Grimsby Beach and Grimsby on the Lake. Named neighbourhoods and waterfront areas below are examples; coverage also includes other residential and rural addresses within the town.",
    planning: "For a Grimsby estimate, include your address or nearest intersection and identify each damaged seam or board section. If there are only a few repairs, group the photographs into one enquiry and state whether primer or painting is wanted, so the proposed scope and return visits can be assessed together.",
    faq: ["Do you serve Grimsby neighbourhoods beyond the waterfront?", "Yes. EPF serves Grimsby townwide, including downtown, waterfront neighbourhoods and other residential or rural addresses. The named areas are examples. Send your location and repair details to confirm access, the proposed scope and scheduling."]
  }
};

// Two relevant guides per requested market; the main commercial target stays the garage hub.
export const garageGuideMarkets = ["mississauga", "grimsby", "hamilton", "burlington", "oakville", "oakville", "burlington", "grimsby", "mississauga", "hamilton"];
