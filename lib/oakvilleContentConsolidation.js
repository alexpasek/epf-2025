import redirects from '@/data/oakvilleRedirects.json';

// Also normalize links in remotely generated posts. Archived source entries are
// retained for traceability but excluded from listings and served through 301s.
function directLinks(value) {
  if (typeof value === 'string') {
    return Object.entries(redirects).reduce((text, [from, to]) => text.split(from).join(to), value);
  }
  if (Array.isArray(value)) return value.map(directLinks);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, directLinks(item)]));
  return value;
}
const additions = {
  'how-to-prepare-for-popcorn-ceiling-removal-oakville': [
    { html: '<strong>Before the estimate: a photo and access checklist</strong>' },
    'Send wide photos from two corners of each room, a close-up of the texture, rough dimensions and ceiling height. Photograph lights, vents, crown moulding, stains, cracks, skylights, speakers and old patches. Explain what furniture cannot move, where materials can be staged, and any parking, elevator or work-hour rules. Share pets, work-from-home schedules and listing deadlines before the work is booked.',
  ],
  'popcorn-ceiling-removal-cost-oakville': [
    { html: '<strong>Removal, primer and finished paint are separate decisions</strong>' },
    'After removal, a ceiling may still show torn paper, uneven compound or old patch edges. Compare the complete repair and finish scope. Primer seals repaired areas and helps reveal defects before paint; finish paint alone cannot correct those defects. For bright open rooms, confirm whether full-field Level 5 skimming and inspection under the actual lighting are included.',
    { html: '<a href="/popcorn-ceiling-removal/oakville/#cost">Use the Oakville ceiling cost estimator and room budgets</a> to plan a scope before requesting a written quote.' },
  ],
  'painted-popcorn-ceiling-removal-oakville': [
    { html: '<strong>How unpainted texture changes the comparison</strong>' },
    'Unpainted texture can release more readily, but that does not mean the surface underneath is ready for paint. Old joints, nail pops and repairs may still need full-field skimming. Compare the final finish, not just the ease of scraping. Neither paint clues nor a photograph can rule out asbestos; arrange professional testing before disturbing suspected older material.',
  ],
  'oakville-popcorn-ceiling-removal-guide': [
    { html: '<strong>Basements and phased renovations</strong>' },
    'In a basement, include low bulkheads, vents, access to mechanical equipment and ventilation in the ceiling plan. Keep necessary service access available. Drying time may differ from an open upstairs room. Resolve active moisture problems before refinishing, and coordinate fixture openings before the final skim and paint. For an occupied house, agree the room sequence and safe route through the home before work starts.',
    { html: '<a href="/popcorn-ceiling-removal/oakville/">Compare Oakville popcorn ceiling removal services, costs and finish options</a>, then send room photos for a quote.' },
  ],
};
export function consolidateOakvillePosts(posts) {
  return posts.filter(post => !redirects[`/blog/${post.slug}/`]).map(post => {
    const result = directLinks(post);
    if (!additions[post.slug]) return result;
    result.content = [...(result.content || []).filter(item => !(typeof item === 'string' && item.includes('Internal linking matters for SEO'))), ...additions[post.slug]];
    result.content = result.content.map(item => typeof item === 'string' ? item.replace('That conversation strengthens the whole topical prep cluster because it ties', 'That conversation ties') : item);
    if (post.slug === 'oakville-popcorn-ceiling-removal-guide') {
      // Those old photo entries are prompts, not project records; do not render
      // neighbourhood-labelled placeholders as evidence.
      result.photos = [];
      const seen = new Set();
      result.links = (result.links || []).filter(link => {
        if (seen.has(link.href)) return false;
        seen.add(link.href); return true;
      });
      result.content = result.content.map(item => typeof item === 'string' ? item
        .replace('Next comes removal or encapsulation. We test a 2x2 section to understand paint build-up.', 'Before any disturbance, suspected older texture needs professional testing. Once cleared, we assess paint build-up and choose a removal or resurfacing method.')
        .replace('typically take three days including paint', 'may take around three days including paint for straightforward scopes; inspection confirms the schedule')
        .replace('This is where we also coordinate pot lights or speaker cut-outs with your electrician so trim rings sit tight.', 'Plan pot lights and speaker cut-outs with your licensed electrician before final skimming so trim rings sit correctly without reopening finished work.') : item);
    }
    result.dateModified = '2026-09-30';
    return result;
  });
}
