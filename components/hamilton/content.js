import areas from '@/data/hamilton-neighborhoods.json';
import { SITE_URL } from '@/app/config';
import { socialImages } from '@/lib/responsiveImages';
export { areas };
export const base = SITE_URL.replace(/\/$/, '');
export const services = {
  drywall: { name: 'Drywall installation', hub: '/services/drywall-installation/hamilton/', root: '/services/drywall-installation/', summary: 'Board hanging, joint taping, mudding and sanding, with an agreed Level 4 or Level 5 finish for walls and ceilings.', guides: [['drywall-contractor-hamilton-guide', 'Choosing a Hamilton drywall contractor'], ['basement-drywall-contractor-hamilton', 'Basement installation planning'], ['level-4-vs-level-5-drywall-finish-gta', 'Comparing Level 4 and Level 5 finishes']] },
  popcorn: { name: 'Popcorn ceiling removal', hub: '/popcorn-ceiling-removal/hamilton/', root: '/services/popcorn-ceiling-removal/', summary: 'Texture assessment, room protection, removal where suitable, ceiling repairs, skim coating and an agreed primer or painted finish.', guides: [['how-to-prepare-for-popcorn-ceiling-removal-hamilton', 'Preparing your Hamilton home'], ['painted-vs-unpainted-popcorn-ceiling-removal-hamilton', 'Painted versus unpainted texture'], ['why-popcorn-ceiling-removal-needs-skim-coating-hamilton', 'Why skim coating matters']] },
};
export const imageAlts = {
  'hamilton-smooth-ceiling': 'Bright living room with a smooth matte ceiling and daylight from a wide window',
  'hamilton-drywall-basement': 'Basement drywall boards with unfinished joints and a service bulkhead',
  'hamilton-ceiling-protection': 'Protected room with an intact textured ceiling before assessment and ceiling work',
  'hamilton-drywall-transitions': 'Sloped drywall ceiling with taped joints around a dormer window',
};
export const altFor = src => imageAlts[src.split('/').pop().replace('.png','')];
export function areaMetadata(area, type) {
  const s = services[type];
  const title = `${s.name} ${area.name} | EPF`;
  const description = `${s.name} in ${area.name}, Hamilton. ${type === 'popcorn' ? area.popcornFocus : area.focus}. Explore scope, finish options and the details to send for an itemized quote.`;
  const url = `${base}${s.hub}${area.slug}/`;
  const images = socialImages([{url: area.image, alt: altFor(area.image)}]);
  return {title:{absolute:title},description,alternates:{canonical:url},robots:{index:true,follow:true},openGraph:{title,description,url,type:'website',locale:'en_CA',images},twitter:{card:'summary_large_image',title,description,images:images.map(i=>i.url)}};
}
