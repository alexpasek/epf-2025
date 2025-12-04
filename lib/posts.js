import generatedFallback from '@/data/generated-posts.json';

const staticPosts=[
  {
    title:'Popcorn Ceiling Removal in Mississauga: What You Should Know',
    slug:'mississauga-popcorn-ceiling-removal-guide',
    date:'2025-11-12',
    excerpt:'Mississauga popcorn ceiling removal guide: why homeowners do it, how the process works, and what to expect.',
    content:[
      'Popcorn ceilings were common in Mississauga homes from Lorne Park and Port Credit to Erin Mills, Clarkson, Applewood, and Meadowvale. Now most homeowners want them gone because they trap dust, cast shadows, and make rooms feel older.',
      'This guide explains why Mississauga homeowners remove popcorn ceilings, how the process works, and what to expect if you decide to smooth yours.',
      'Why people remove popcorn ceilings: instant modernization, brighter rooms with even light reflection, easier cleaning and repainting, and stronger resale appeal because buyers prefer smooth ceilings.',
      'What to expect step by step: protection and prep with plastic, drop sheets, sealed vents, and HEPA filtration; careful scraping of the texture; multiple skim coats to a Level 5 smooth finish; dust-controlled sanding with HEPA vacuums; a high-quality primer; then two coats of premium flat ceiling paint.',
      'Timelines: a typical Mississauga townhouse or bungalow (1,200–1,500 sq ft of ceilings) finishes in about two days, depending on repairs and paint thickness. We coordinate pot light layout between skim coats so fixtures sit cleanly.',
      'How to make it low-stress: schedule around your daily routines, clear small items from rooms, and share photos or a quick video so we can confirm scope and timing before arrival.',
      'If you are in Port Credit, Erin Mills, Lorne Park, Clarkson, Meadowvale, Applewood, or anywhere in Mississauga, smoothing popcorn ceilings is one of the highest-impact updates you can make for a brighter, cleaner home.'
    ],
    keywords:[
      'Smooth, bright ceilings for Mississauga homes',
      'Dust-controlled popcorn removal you can live through',
      'Mississauga crew that keeps floors and furniture clean',
      'Level 5 skim so the paint lays flat and even',
      'Ceilings prepped for pot lights without the mess',
      'Kitchen makeover that starts with clean ceilings',
      'Trusted team for Mississauga ceiling updates',
      'Ready for a quote when you are'
    ],
    links:[
      { href:'/popcorn-ceiling-removal/mississauga/', anchor:'See Mississauga popcorn ceiling removal details', description:'Neighborhood list, pricing notes, FAQs, and booking.' },
      { href:'/popcorn-ceiling-removal/mississauga/erin-mills/', anchor:'Erin Mills popcorn ceiling removal', description:'Local project photos and what to expect in your area.' },
      { href:'/popcorn-ceiling-removal/mississauga/port-credit/', anchor:'Port Credit popcorn ceiling removal', description:'Lakefront homes with careful dust control.' },
      { href:'/popcorn-ceiling-removal/mississauga/lorne-park/', anchor:'Lorne Park popcorn ceiling removal', description:'Heritage and custom homes with Level 5 finishes.' },
      { href:'/popcorn-ceiling-removal/mississauga/clarkson/', anchor:'Clarkson popcorn ceiling removal', description:'Smooth ceilings for splits, semis, and townhomes.' },
      { href:'/popcorn-ceiling-removal/', anchor:'GTA popcorn ceiling removal overview', description:'City list, FAQs, and booking info.' },
      { href:'/services/popcorn-ceiling-removal/', anchor:'How our popcorn ceiling removal process works', description:'Dust control, skim coat, prime and paint details.' },
      { href:'/blog/popcorn-ceiling-removal-cost-timeline/', anchor:'Popcorn ceiling removal cost and timeline guide', description:'What drives price and scheduling across the GTA.' },
      { href:'https://www.mississauga.ca/city-hall/', anchor:'City of Mississauga City Hall', description:'Local permit, bylaw, and renovation guidance for Mississauga homeowners.' }
    ]
  },
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
