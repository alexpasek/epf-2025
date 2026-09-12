import { garageGuideMarkets } from "./garage/neighbourhoodCoverage";
import { garageCities } from "./garage/cityContent";
import { garageGuidePosts } from "./garageGuidePosts";
import { garageArticleFaqs } from "./garage/articleFaqs";
import peeling from "./garage/articles/peeling";
import replacement from "./garage/articles/replacement";
import cracks from "./garage/articles/cracks";
import ceiling from "./garage/articles/ceiling";
import levels from "./garage/articles/levels";
import rough from "./garage/articles/rough";
import skimming from "./garage/articles/skimming";
import cost from "./garage/articles/cost";
import painting from "./garage/articles/painting";
import recurring from "./garage/articles/recurring";

const bodies = [peeling, replacement, cracks, ceiling, levels, rough, skimming, cost, painting, recurring];
const hub = "/services/garage-drywall-repair/";
const escape = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
// Small formatter for authored paragraphs, headings and links only; no runtime filesystem reads.
const inline = s => escape(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,label,href)=>`<a href="${href}" class="font-semibold text-blue-700 hover:underline">${label}</a>`);
function paragraphs(text) {
  return text.trim().split(/\n\s*\n/).map(block=>{
    if(block.startsWith("## ")) return {html:`<h2>${escape(block.slice(3))}</h2>`};
    return block.includes("](") ? {html:inline(block)} : block;
  });
}
function buildPost(meta,index) {
  const image = `/blog/${meta.slug}-featured.webp`;
  const content = paragraphs(bodies[index]);
  content.splice(2,0,{html:`<div class="my-6 rounded-2xl border border-slate-200 bg-white p-6"><h2>Start with the condition you can see</h2><p class="mt-3">Use these observations to prepare the assessment, not to diagnose concealed construction. Pair each detail photograph with a wider view so the repair area, adjoining surfaces and access are clear.</p><div class="mt-5 grid gap-4 md:grid-cols-3">${meta.checks.map(([title,body])=>`<section class="rounded-xl bg-slate-50 p-4"><h3 class="font-bold">${escape(title)}</h3><p class="mt-2">${escape(body)}</p></section>`).join("")}</div></div>`});
  const middle=content.findIndex((p,i)=>i>content.length/2&&p.html?.startsWith("<h2>"));
  content.splice(middle,0,{html:`<aside class="my-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6"><h3 class="font-bold">Contractor field note: define the handoff</h3><p class="mt-3">Keep the repair boundary, surface finishing and painting area identifiable in the quote. They can be different sizes. If a condition cannot be confirmed from photos, name the assessment needed before cosmetic work proceeds.</p><p class="mt-3"><a href="${hub}" class="font-semibold text-blue-700 hover:underline">Review EPF's garage repair options</a> or <a href="/quote/" class="font-semibold text-blue-700 hover:underline">describe your garage for an estimate</a>.</p></aside>`});
  const market = garageCities.find(city => city.slug === garageGuideMarkets[index]);
  content.push({html:`<section class="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"><h2>Planning this repair in ${escape(market.name)}</h2><p class="mt-3">${escape(market.coverage.planning)}</p><p class="mt-3">EPF serves all ${escape(market.name)} neighbourhoods. Review <a href="${hub}${market.slug}/#neighbourhoods" class="font-semibold text-blue-700 hover:underline">${escape(market.name)} garage repair coverage and neighbourhoods</a>, then include your location with the repair details when requesting an estimate.</p></section>`});
  const support = garageGuidePosts.filter(p=>meta.related.includes(p.slug));
  return {
    ...meta, h1:meta.title, date:"2026-09-11", reviewedBy:"EPF Pro Services", image, imageAlt:meta.alt,
    fieldGuideLayout:true, schemaType:"BlogPosting", articleSection:"Garage drywall repair", serviceType:"Garage drywall repair and re-taping",
    mainKeyword:meta.keyword, blogType:meta.type, searchIntent:"Homeowner repair decisions and pre-estimate research", topicalCluster:"Drywall repair / garage repairs", pillarPage:hub, targetServicePage:hub,
    about:meta.keyword, keywords:[meta.keyword,"garage drywall repair"], quickAnswer:meta.excerpt, content,
    faqs:garageArticleFaqs[meta.slug].map(([question,answer])=>({question,answer})),
    photos:[{src:image,alt:meta.alt,description:"Generated illustration for this guide; not a photographed EPF project."},...support.map(p=>({src:`/blog/${p.slug}-featured.webp`,alt:p.alt,description:"Generated supporting illustration showing a related garage repair condition; not an EPF project photo."}))],
    relatedLinks:[{href:hub,anchor:"Garage drywall repair and re-taping",description:"Assess failed joints, damaged board and the appropriate finishing handoff."},{href:"/services/drywall-repair/",anchor:"Drywall repair for other rooms",description:"Plan wider wall and ceiling repairs beyond the garage."},...support.map(p=>({href:`/blog/${p.slug}/`,anchor:p.title,description:p.excerpt,image:`/blog/${p.slug}-featured.webp`,imageAlt:p.alt}))],
    relatedLinksEyebrow:"Garage repair planning", relatedLinksHeading:"Choose the next step for your garage"
  };
}
export const garageDrywallPosts = garageGuidePosts.map(buildPost);
