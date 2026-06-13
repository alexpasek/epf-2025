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
const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||'https://epfproservices.com').replace(/\/$/,'');

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

  const prompt=`Write a unique, conversational blog post about popcorn ceiling removal for homeowners near ${today}. Focus on Greater Toronto Area neighborhoods and naturally incorporate the supplied local SEO keywords. Mention protective prep, cleanup timelines, pricing factors and why to work with Popcorn Ceiling Removal Pro. Reference actual pages from ${siteUrl} to encourage internal linking, and close with a helpful CTA. Provide photo ideas that describe what to shoot to support the story.`;

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

function getBlogPostUrl(entry){
  return `${siteUrl}/blog/${entry.slug}/`;
}

function buildBlogCreatedWebhookPayload(entry){
  return {
    event:'BLOG_POST_CREATED',
    url:getBlogPostUrl(entry),
    title:entry.title,
    excerpt:entry.excerpt,
    city:entry.city||'',
    service:entry.service||'Popcorn Ceiling Removal',
    publishedAt:entry.publishedAt||new Date(`${entry.date}T12:00:00Z`).toISOString()
  };
}

async function verifyBlogUrl(url){
  try{
    let response=await fetch(url,{method:'HEAD',redirect:'follow'});
    if(response.status===405){
      response=await fetch(url,{method:'GET',redirect:'follow'});
    }
    return {
      ok:response.status>=200&&response.status<400,
      status:response.status
    };
  }catch(error){
    return {ok:false,error:error.message||'Unable to verify blog URL'};
  }
}

async function sendBlogCreatedWebhook(entry){
  const webhookUrl=process.env.GMB_POSTER_WEBHOOK_URL||process.env.BLOG_CREATED_WEBHOOK_URL;
  const secret=process.env.EPF_WEBHOOK_SECRET||process.env.GMB_POSTER_WEBHOOK_SECRET;

  if(!webhookUrl){
    console.warn('Blog created webhook skipped: GMB_POSTER_WEBHOOK_URL is not set');
    return {ok:false,skipped:true,error:'GMB_POSTER_WEBHOOK_URL is not set'};
  }

  if(!secret){
    console.warn('Blog created webhook skipped: EPF_WEBHOOK_SECRET is not set');
    return {ok:false,skipped:true,error:'EPF_WEBHOOK_SECRET is not set'};
  }

  const payload=buildBlogCreatedWebhookPayload(entry);
  const verification=await verifyBlogUrl(payload.url);
  if(!verification.ok){
    console.warn(
      `Blog created webhook skipped: blog URL is not live (${payload.url})`,
      verification,
    );
    return {
      ok:false,
      skipped:true,
      error:'Blog URL is not live',
      url:payload.url,
      verification
    };
  }

  try{
    const response=await fetch(webhookUrl,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        'x-epf-webhook-secret':secret
      },
      body:JSON.stringify(payload)
    });
    const text=await response.text();
    if(!response.ok){
      console.error(`Blog created webhook failed: ${response.status} ${text}`);
      return {ok:false,status:response.status,error:text||response.statusText};
    }
    console.log(`Blog created webhook sent: ${payload.url}`);
    return {ok:true,status:response.status};
  }catch(error){
    console.error(`Blog created webhook error: ${error.message}`);
    return {ok:false,error:error.message};
  }
}

async function sendBlogCreatedWebhooks(entries){
  const items=Array.isArray(entries)?entries:[entries];
  const results=[];
  for(const entry of items.filter(Boolean)){
    results.push(await sendBlogCreatedWebhook(entry));
  }
  return results;
}

async function run(){
  const post=await callOpenAI();
  const baseSlug=slugify(`${post.city}-${post.neighborhood}-${post.title}`);
  const datedSlug=`${baseSlug}-${Date.now()}`.slice(0,96);
  const entry={
    title:post.title,
    slug:datedSlug,
    date:new Date().toISOString().split('T')[0],
    publishedAt:new Date().toISOString(),
    excerpt:post.excerpt,
    city:post.city,
    service:'Popcorn Ceiling Removal',
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
  await sendBlogCreatedWebhooks([entry]);
}

run().catch(err=>{
  console.error(err);
  process.exit(1);
});
