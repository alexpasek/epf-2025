// Explicit editorial additions to existing guides; no changes to unrelated posts.
const install='/services/drywall-installation/hamilton/';
const popcorn='/popcorn-ceiling-removal/hamilton/';
const additions={
 'drywall-contractor-hamilton-guide': {hub:install,anchor:'Hamilton drywall installation and finishing',area:'ancaster',text:'For a room with long sightlines, the Ancaster installation page explains board-to-finish planning and how to define the full visible surface.',label:'Ancaster drywall installation planning'},
 'basement-drywall-contractor-hamilton': {hub:install,anchor:'drywall installation in Hamilton',area:'hamilton-mountain',text:'The Hamilton Mountain page expands on bulkheads, ceiling clearance and keeping mechanical service points accessible before boarding.',label:'Hamilton Mountain basement drywall planning'},
 'basement-drywall-taping-mudding-hamilton': {hub:install,anchor:'Hamilton board installation and finishing',area:'binbrook',text:'For an unfinished basement, the Binbrook installation page helps define room boundaries, utility-space finishes and the information needed before hanging board.',label:'Binbrook drywall installation preparation'},
 'how-to-prepare-for-popcorn-ceiling-removal-hamilton': {hub:popcorn,anchor:'Hamilton popcorn ceiling removal service',area:'westdale',text:'If you will remain at home, the Westdale service page adds room-staging and daily-access considerations to your preparation list.',label:'Westdale ceiling removal and occupied-home planning'},
 'painted-vs-unpainted-popcorn-ceiling-removal-hamilton': {hub:popcorn,anchor:'popcorn ceiling removal in Hamilton',area:'dundas',text:'For retained plaster edges, coving or sloped ceilings, the Dundas service page explains how to define the finish boundary before selecting a method.',label:'Dundas ceiling removal planning'},
 'why-popcorn-ceiling-removal-needs-skim-coating-hamilton': {hub:popcorn,anchor:'Hamilton ceiling removal and refinishing',area:'ancaster',text:'The Ancaster service page looks at connected rooms and broad ceiling planes, where the boundary of a skim coat and the lighting deserve an early discussion.',label:'Ancaster smooth-ceiling scope'},
 'how-long-does-popcorn-ceiling-removal-take-hamilton': {hub:popcorn,anchor:'Hamilton popcorn ceiling removal',area:'stoney-creek',text:'For staged work in an occupied home, the Stoney Creek service page explains room release, repeated setup and access planning alongside the finishing schedule.',label:'Stoney Creek room-by-room ceiling planning'},
 'popcorn-ceiling-removal-in-older-hamilton-homes': {hub:popcorn,anchor:'Hamilton textured-ceiling assessment and removal',area:'kirkendall',text:'If decorative edges or existing wall finishes will remain, use the Kirkendall service page to plan protection and the transition to a newly smoothed ceiling.',label:'Kirkendall ceiling removal and retained finishes'},
 'cost-to-remove-popcorn-ceiling-hamilton': {hub:popcorn,anchor:'Hamilton popcorn ceiling removal scope',area:'durand',text:'For a shared-building project, the Durand service page covers access bookings, material documentation and finish boundaries that can affect the estimate.',label:'Durand condo ceiling planning'},
 'popcorn-ceiling-removal-hamilton-local-guide': {hub:popcorn,anchor:'Hamilton popcorn ceiling removal',area:'waterdown',text:'For a ceiling project within a larger renovation, the Waterdown page explains how to sequence lighting, surface finishing and protection of new floors or cabinets.',label:'Waterdown ceiling renovation planning'},
 'popcorn-ceiling-removal-dundas-local-guide': {hub:popcorn,anchor:'Hamilton popcorn ceiling removal',area:'dundas',text:'For a service estimate, the Dundas page lists the details to photograph around slopes, ceiling returns and retained decorative edges.',label:'Dundas popcorn ceiling removal service'},
 'how-to-prepare-for-popcorn-ceiling-removal-dundas': {hub:popcorn,anchor:'Hamilton ceiling removal service',area:'dundas',text:'The Dundas service page adds a focused quote checklist for ceiling heights, slopes and finishes that need to stay in place.',label:'Dundas ceiling assessment and quote preparation'},
};
const link=(href,label)=>`<a href="${href}" class="text-blue-600 font-semibold hover:underline">${label}</a>`;
export function addHamiltonContextLinks(post){
 const entry=additions[post.slug];
 if(!entry||!Array.isArray(post.content))return post;
 const target=entry.hub+entry.area+'/';
 const early=post.content.slice(0,Math.max(3,Math.ceil(post.content.length/3))).map(x=>typeof x==='string'?x:x.html||'').join(' ');
 const parts=[];
 if(!early.includes(`href="${entry.hub}"`))parts.push(`For service scope and city coverage, see ${link(entry.hub,entry.anchor)}.`);
 if(!early.includes(`href="${target}"`))parts.push(`${entry.text} See ${link(target,entry.label)}.`);
 if(!parts.length)return post;
 const content=[...post.content];content.splice(Math.min(3,content.length),0,{html:parts.join(' ')});
 return {...post,content};
}
