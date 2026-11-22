import Link from "next/link";
import ResponsiveImage from "@/components/ResponsiveImage";

// The five priority cities each have dedicated pages for both services.
const localServiceQuestions = {
  Mississauga: {
    image: "/services/local-questions/mississauga.webp",
    alt: "Painted textured ceiling above a smooth bulkhead in a living room",
    ceiling: "EPF Pro Services handles painted popcorn ceilings in Mississauga. If yours is in a condo, tell us whether the ceiling is concrete or drywall and send any work-hour restrictions. The surface underneath the paint helps determine whether removal or skim coating makes sense.",
    drywall: "EPF repairs drywall and can include repainting in the quote. For holes left by an electrician or plumber, send one photo of the whole wall as well as a close-up of each opening. That lets us price the patches and agree where the paint should stop.",
  },
  Oakville: {
    image: "/services/local-questions/oakville.webp",
    alt: "Window light across a textured dining room ceiling",
    ceiling: "EPF Pro Services removes or resurfaces painted popcorn ceilings in Oakville. In a room with tall windows, daylight can reveal ridges after the texture comes off. Ask us to include the skim coat, primer inspection and any finish painting you want in the estimate.",
    drywall: "EPF can patch damaged drywall and repaint the affected wall. If a previous patch shows through the paint, show us how it looks from the doorway in daylight. A raised edge needs smoothing, while a flat patch with a different sheen may need primer and paint.",
  },
  Burlington: {
    image: "/services/local-questions/burlington.webp",
    alt: "A continuous textured ceiling over a living and dining area",
    ceiling: "EPF Pro Services assesses painted popcorn ceilings for removal and smooth refinishing in Burlington. If the living room opens into the dining room, photograph the ceiling from both ends. We can show you where the finish could stop and quote the connected rooms together if needed.",
    drywall: "EPF repairs drywall seams, cracks and openings in Burlington. If a partition has already been removed, the narrow strip it leaves may sit between two different wall or ceiling heights. We check that transition before quoting the patch and repaint.",
  },
  Hamilton: {
    image: "/services/local-questions/hamilton.webp",
    alt: "Feathered drywall repair beside a painted door frame",
    ceiling: "EPF Pro Services handles painted popcorn ceiling removal and refinishing in Hamilton, including Dundas. If the texture is heavily painted or the ceiling has earlier repairs, we assess what can stay in place before pricing the work. Leave older, unidentified texture undisturbed until it has been assessed.",
    drywall: "EPF repairs damaged drywall and can repaint it once the repair is ready. If a seam keeps opening beside a door, tell us when it last returned. We check the joint and the surrounding board before deciding whether it needs fresh tape or a larger repair.",
  },
  Milton: {
    image: "/services/local-questions/milton.webp",
    alt: "A small drywall patch on a stair landing wall",
    ceiling: "EPF Pro Services can assess and refinish painted popcorn ceilings in Milton. For a stairwell, include a photo from the landing so we can plan access and protect the stairs. Ask for separate pricing for a primed ceiling and one with the final paint coats.",
    drywall: "EPF patches drywall and offers repainting in Milton. For a dent or hole on a stair landing, include the wall from corner to corner and tell us if you have the original paint. We can discuss whether a touch-up will blend or a full wall coat is a better finish.",
  },
};

export const localQuestionCities = Object.keys(localServiceQuestions);

export default function LocalServiceQuestions() {
  return (
    <div className="mt-6 space-y-5">
      {Object.entries(localServiceQuestions).map(([city, { image, alt, ceiling, drywall }]) => {
        const href = `/popcorn-ceiling-removal/${city.toLowerCase()}/`;
        const repairHref = `/services/drywall-repair/${city.toLowerCase()}/`;
        return (
          <article key={city} id={city.toLowerCase()} className="overflow-hidden rounded-2xl border border-slate-200 md:grid md:grid-cols-[minmax(180px,1fr)_3fr]">
            <ResponsiveImage src={image} alt={alt} loading="lazy" width={800} height={480}
              sizes="(min-width: 768px) 260px, 100vw"
              className="h-44 w-full object-cover md:h-full" />
            <div className="p-5 md:p-6">
              <h3 className="text-2xl font-bold">{city}</h3>
              <div className="mt-4 grid gap-5 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold">Who can remove a painted popcorn ceiling in {city}?</h4>
                  <p className="mt-2 text-gray-700">{ceiling}</p>
                  <Link className="mt-3 inline-block font-semibold text-blue-700 underline" href={href}>
                    Popcorn ceiling removal in {city}
                  </Link>
                </div>
                <div>
                  <h4 className="font-semibold">Which contractor can repair drywall and repaint the wall in {city}?</h4>
                  <p className="mt-2 text-gray-700">{drywall}</p>
                  <Link className="mt-3 inline-block font-semibold text-blue-700 underline" href={repairHref}>
                    Drywall repair in {city}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
