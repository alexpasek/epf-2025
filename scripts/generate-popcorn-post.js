#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
const { config:loadEnv }=require('dotenv');

const envFiles=['.env.local','.env'];
for(const file of envFiles){
  loadEnv({path:file,override:false});
}

const OPENAI_API_KEY=process.env.OPENAI_API_KEY;
if(!OPENAI_API_KEY){
  console.error('Missing OPENAI_API_KEY environment variable.');
  process.exit(1);
}

const MODEL=process.env.OPENAI_MODEL||'gpt-4.1-mini';
const OUTPUT_LIMIT=parseInt(process.env.BLOG_SECTION_COUNT??'5',10);
const dataPath=path.join(process.cwd(),'data','generated-posts.json');
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://epf-2025.pages.dev';

const INTERNAL_LINK_OPTIONS=[
  {id:'popcornService',href:'/services/popcorn-ceiling-removal',anchor:'Popcorn Ceiling Removal Service',description:'Step-by-step removal process and pricing info.'},
  {id:'localAreas',href:'/service-areas/popcorn/toronto',anchor:'Toronto Popcorn Removal Areas',description:'Neighborhood-by-neighborhood coverage map.'},
  {id:'ourWork',href:'/our-work',anchor:'Before & After Projects',description:'Project photos that showcase smooth ceilings.'},
  {id:'contact',href:'/contact',anchor:'Request an Estimate',description:'Contact form for popcorn ceiling removal quotes.'},
  {id:'blog',href:'/blog',anchor:'More Popcorn Ceiling Guides',description:'Resource library for homeowners planning texture removal.'}
];

function slugify(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80);
}

async function callOpenAI(){
  const today=new Date().toISOString().split('T')[0];
  const schema={
    name:'popcorn_blog_post',
    schema:{
      type:'object',
      additionalProperties:false,
      required:['title','excerpt','sections','city','neighborhood','localKeywords','internalLinks','photoIdeas'],
      properties:{
        title:{type:'string',description:'Compelling title about popcorn ceiling removal for homeowners.'},
        excerpt:{type:'string',description:'1 sentence teaser (<=200 chars).'},
        city:{type:'string',description:'GTA city to target (e.g., Toronto, Mississauga).'},
        neighborhood:{type:'string',description:'Neighborhood within the city (e.g., Leslieville).'},
        localKeywords:{
          type:'array',
          minItems:3,
          maxItems:6,
          items:{type:'string',description:'Human-readable keyword phrases.'}
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
          maxItems:OUTPUT_LIMIT,
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

  const prompt=`Write a unique, conversational blog post about popcorn ceiling removal for homeowners near ${today}. Focus on Greater Toronto Area neighborhoods and naturally incorporate the supplied local SEO keywords. Mention protective prep, cleanup timelines, pricing factors and why to work with Wallpaper Removal Pro. Reference actual pages from ${siteUrl} to encourage internal linking, and close with a helpful CTA. Provide photo ideas that describe what to shoot to support the story.`;

  const res=await fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${OPENAI_API_KEY}`
    },
    body:JSON.stringify({
      model:MODEL,
      temperature:0.7,
      response_format:{type:'json_schema',json_schema:schema},
      messages:[
        {role:'system',content:'You are a marketing writer for a popcorn ceiling removal contractor in the Greater Toronto Area. Your copy must be human, specific and non-repetitive.'},
        {role:'user',content:prompt}
      ]
    })
  });

  if(!res.ok){
    const text=await res.text();
    throw new Error(`OpenAI request failed: ${res.status} ${text}`);
  }
  const json=await res.json();
  const content=json.choices?.[0]?.message?.content;
  if(!content){ throw new Error('OpenAI response missing content'); }
  return JSON.parse(content);
}

function resolveInternalLinks(ids){
  const map=new Map(INTERNAL_LINK_OPTIONS.map(opt=>[opt.id,opt]));
  return ids.map(id=>{
    const opt=map.get(id);
    return opt?opt:null;
  }).filter(Boolean);
}

async function run(){
  const post=await callOpenAI();
  const baseSlug=slugify(`${post.city}-${post.neighborhood}-${post.title}`);
  const datedSlug=`${baseSlug}-${Date.now()}`.slice(0,96);
  const entry={
    title:post.title,
    slug:datedSlug,
    date:new Date().toISOString().split('T')[0],
    excerpt:post.excerpt,
    content:post.sections.map(s=>`${s.heading}. ${s.body}`),
    keywords:post.localKeywords,
    photos:post.photoIdeas,
    links:resolveInternalLinks(post.internalLinks)
  };

  let existing=[];
  if(fs.existsSync(dataPath)){
    existing=JSON.parse(fs.readFileSync(dataPath,'utf8'));
  }
  existing.unshift(entry);
  fs.writeFileSync(dataPath,JSON.stringify(existing,null,2));
  console.log(`Created blog post: ${entry.title} (${entry.slug})`);
}

run().catch(err=>{
  console.error(err);
  process.exit(1);
});
