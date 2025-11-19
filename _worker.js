import { handlePagesFunction } from "@cloudflare/next-on-pages";

const INTERNAL_LINK_OPTIONS=[
  {id:"popcornService",href:"/services/popcorn-ceiling-removal",anchor:"Popcorn Ceiling Removal Service",description:"Step-by-step removal process and pricing info."},
  {id:"localAreas",href:"/service-areas/popcorn/toronto",anchor:"Toronto Popcorn Removal Areas",description:"Neighborhood-by-neighborhood coverage map."},
  {id:"ourWork",href:"/our-work",anchor:"Before & After Projects",description:"Project photos that showcase smooth ceilings."},
  {id:"contact",href:"/contact",anchor:"Request an Estimate",description:"Contact form for popcorn ceiling removal quotes."},
  {id:"blog",href:"/blog",anchor:"More Popcorn Ceiling Guides",description:"Resource library for homeowners planning texture removal."}
];

const POSTS_KEY='generated-posts';

function slugify(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80);
}

function resolveInternalLinks(ids){
  const map=new Map(INTERNAL_LINK_OPTIONS.map(opt=>[opt.id,opt]));
  return ids.map(id=>map.get(id)).filter(Boolean);
}

async function fetchGeneratedPosts(env){
  if(!env.BLOG_KV){ return []; }
  const data=await env.BLOG_KV.get(POSTS_KEY,{type:'json'});
  return Array.isArray(data)?data:[];
}

async function saveGeneratedPosts(env,posts){
  if(!env.BLOG_KV){ return; }
  await env.BLOG_KV.put(POSTS_KEY,JSON.stringify(posts));
  await env.BLOG_KV.put(`${POSTS_KEY}:lastRun`,new Date().toISOString());
}

async function callOpenAI(env){
  if(!env.OPENAI_API_KEY){
    console.warn('Missing OPENAI_API_KEY env for scheduler');
    return null;
  }
  const today=new Date().toISOString().split('T')[0];
  const schema={
    name:'popcorn_blog_post',
    schema:{
      type:'object',
      additionalProperties:false,
      required:['title','excerpt','sections','city','neighborhood','localKeywords','internalLinks','photoIdeas'],
      properties:{
        title:{type:'string'},
        excerpt:{type:'string'},
        city:{type:'string'},
        neighborhood:{type:'string'},
        localKeywords:{
          type:'array',
          minItems:3,
          maxItems:6,
          items:{type:'string'}
        },
        internalLinks:{
          type:'array',
          minItems:2,
          maxItems:3,
          items:{type:'string',enum:INTERNAL_LINK_OPTIONS.map(opt=>opt.id)}
        },
        photoIdeas:{
          type:'array',
          minItems:2,
          maxItems:4,
          items:{
            type:'object',
            required:['description','alt'],
            properties:{
              description:{type:'string'},
              alt:{type:'string'}
            }
          }
        },
        sections:{
          type:'array',
          minItems:3,
          maxItems:5,
          items:{
            type:'object',
            required:['heading','body'],
            properties:{
              heading:{type:'string'},
              body:{type:'string'}
            }
          }
        }
      }
    }
  };
  const prompt=`Write a unique, conversational blog post about popcorn ceiling removal for homeowners in the Greater Toronto Area. Reference neighbourhood-level context and ${today} timelines, describe prep, cleanup and pricing drivers, and include internal link prompts using the supplied identifiers. Provide relevant photo ideas with alt text suggestions.`;
  const res=await fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${env.OPENAI_API_KEY}`
    },
    body:JSON.stringify({
      model:env.OPENAI_MODEL||'gpt-4.1-mini',
      temperature:0.7,
      response_format:{type:'json_schema',json_schema:schema},
      messages:[
        {role:'system',content:'You are a marketing writer for Popcorn Ceiling Removal Pro, a popcorn ceiling removal contractor in the Greater Toronto Area. Sound human, local and specific.'},
        {role:'user',content:prompt}
      ]
    })
  });
  if(!res.ok){
    const text=await res.text();
    console.error('OpenAI request failed',res.status,text);
    return null;
  }
  const json=await res.json();
  const content=json.choices?.[0]?.message?.content;
  if(!content){ return null; }
  try{
    return JSON.parse(content);
  }catch(error){
    console.error('Unable to parse OpenAI response',error);
    return null;
  }
}

async function generatePost(env){
  const post=await callOpenAI(env);
  if(!post){ return null; }
  const baseSlug=slugify(`${post.city}-${post.neighborhood}-${post.title}`);
  const datedSlug=`${baseSlug}-${Date.now()}`.slice(0,96);
  return{
    title:post.title,
    slug:datedSlug,
    date:new Date().toISOString().split('T')[0],
    excerpt:post.excerpt,
    content:post.sections.map(s=>`${s.heading}. ${s.body}`),
    keywords:post.localKeywords,
    photos:post.photoIdeas,
    links:resolveInternalLinks(post.internalLinks)
  };
}

async function refreshGeneratedPosts(env){
  if(!env.BLOG_KV){
    console.warn('BLOG_KV binding missing; skipping generation');
    return null;
  }
  const newPost=await generatePost(env);
  if(!newPost){ return null; }
  const existing=await fetchGeneratedPosts(env);
  const limit=parseInt(env.BLOG_POST_LIMIT||'30',10);
  const next=[newPost,...existing].slice(0,limit);
  await saveGeneratedPosts(env,next);
  return newPost;
}

export default {
  async fetch(request, env, ctx) {
    const url=new URL(request.url);
    if(url.pathname==='/api/generated-posts'){
      const posts=env.BLOG_KV?await fetchGeneratedPosts(env):[];
      return new Response(JSON.stringify(posts),{
        headers:{
          'content-type':'application/json',
          'cache-control':'no-store'
        }
      });
    }
    if(url.pathname==='/api/generated-posts/refresh' && request.method==='POST'){
      if(!env.BLOG_KV){
        return new Response(JSON.stringify({error:'BLOG_KV not configured'}),{status:500,headers:{'content-type':'application/json'}});
      }
      if(env.BLOG_CRON_TOKEN){
        const auth=request.headers.get('Authorization');
        if(auth!==`Bearer ${env.BLOG_CRON_TOKEN}`){
          return new Response('Unauthorized',{status:401});
        }
      }
      const created=await refreshGeneratedPosts(env);
      if(!created){ return new Response(JSON.stringify({status:'skipped'}),{status:500,headers:{'content-type':'application/json'}}); }
      return new Response(JSON.stringify(created),{headers:{'content-type':'application/json'}});
    }
    return handlePagesFunction(request, env, ctx);
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshGeneratedPosts(env));
  },
};
