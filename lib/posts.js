import generatedFallback from '@/data/generated-posts.json';

const staticPosts=[
  {
    title:'Wallpaper Removal in Toronto: Cost, Timeline & Process',
    slug:'wallpaper-removal-toronto-guide',
    date:'2025-10-01',
    excerpt:'Exactly how we remove wallpaper in GTA homes—prep, removal, repairs, skim and paint.',
    content:[
      'We start with floor and furniture protection, outlet covers off and dust containment.',
      'Depending on material we score, soak or steam, then remove the paper in sections.',
      'Adhesive residue is washed off so primer bonds. Any torn drywall is repaired.',
      'We skim-coat for flatness, sand with HEPA extraction, prime and apply finish coats.',
      'Most rooms take 1–2 days depending on layers, adhesive and repairs.'
    ]
  },
  {
    title:'Popcorn Ceiling Removal: What Affects Cost?',
    slug:'popcorn-ceiling-removal-cost-timeline',
    date:'2025-10-01',
    excerpt:'Square footage, height, access and repairs drive price. Here’s how to plan your project.',
    content:[
      'We isolate the room, protect surfaces and scrape texture clean.',
      'Where needed we skim coat, sand with extraction, then prime and paint for a bright finish.',
      'Apartments and condos often require extra protection and scheduling with management.',
      'Typical living rooms finish in 1–2 days; whole homes vary by size and repairs.'
    ]
  },
  {
    title:'Drywall Installation: Studs to Paint-Ready',
    slug:'drywall-installation-steps',
    date:'2025-10-01',
    excerpt:'From layout checks to taped seams and sanding—our complete drywall workflow.',
    content:[
      'We verify framing, moisture zones and blocking for fixtures.',
      'We install the right board type, fasten properly, and tape with paper or Fibatape as appropriate.',
      'Multiple compound coats are sanded with HEPA extraction to a smooth finish.',
      'We prime to reveal imperfections and spot-fix before paint.'
    ]
  },
  {
    title:'Interior Painting Sheens & Where to Use Them',
    slug:'interior-painting-sheen-guide',
    date:'2025-10-01',
    excerpt:'Matte vs. eggshell vs. satin—what lasts and looks best.',
    content:[
      'Washable matte/eggshell on walls for easy touch-ups; satin/semi-gloss on trim and doors.',
      'Good paint + good prep beats more coats of cheap paint every time.'
    ]
  },
  {
    title:'How We Keep Jobsites Clean: Dust Control',
    slug:'dust-control-renovation-gta',
    date:'2025-10-01',
    excerpt:'HEPA extraction, smart containment and tidy cleanup for live-in projects.',
    content:[
      'We combine surface protection, negative air and extraction sanding to keep dust down.',
      'Daily cleanup and clear communication make projects smoother for families and pets.'
    ]
  }
];

const DEFAULT_ENDPOINT=process.env.GENERATED_POSTS_ENDPOINT
  || process.env.NEXT_PUBLIC_GENERATED_POSTS_URL
  || (process.env.NEXT_PUBLIC_SITE_URL?`${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/,'')}/api/generated-posts`:null);

async function fetchGeneratedPosts(){
  if(DEFAULT_ENDPOINT){
    try{
      const res=await fetch(DEFAULT_ENDPOINT,{cache:'no-store'});
      if(res.ok){
        const data=await res.json();
        if(Array.isArray(data)){ return data; }
      }
    }catch(err){
      console.warn('Failed to fetch generated posts, falling back to local data:',err?.message??err);
    }
  }
  return Array.isArray(generatedFallback)?generatedFallback:[];
}

export async function getPosts(){
  const generated=await fetchGeneratedPosts();
  return [...generated,...staticPosts].sort((a,b)=>new Date(b.date)-new Date(a.date));
}

export async function getPostBySlug(slug){
  const allPosts=await getPosts();
  return allPosts.find(p=>p.slug===slug);
}

export { staticPosts };
