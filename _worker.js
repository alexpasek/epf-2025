import nextWorker from "./.vercel/output/static/_worker.js/index.js";

const INTERNAL_LINK_OPTIONS=[
  {id:"popcornService",href:"/services/popcorn-ceiling-removal",anchor:"Popcorn Ceiling Removal Service",description:"Step-by-step removal process and pricing info."},
  {id:"localAreas",href:"/service-areas/popcorn/toronto",anchor:"Toronto Popcorn Removal Areas",description:"Neighborhood-by-neighborhood coverage map."},
  {id:"ourWork",href:"/our-work",anchor:"Before & After Projects",description:"Project photos that showcase smooth ceilings."},
  {id:"contact",href:"/contact",anchor:"Request an Estimate",description:"Contact form for popcorn ceiling removal quotes."},
  {id:"blog",href:"/blog",anchor:"More Popcorn Ceiling Guides",description:"Resource library for homeowners planning texture removal."}
];

const POSTS_KEY='generated-posts';
const DEFAULT_SITE_URL='https://epfproservices.com';

function logBlogAutomation(message, details={}){
  console.log('[blog-automation]',message,details);
}

function warnBlogAutomation(message, details={}){
  console.warn('[blog-automation]',message,details);
}

function errorBlogAutomation(message, details={}){
  console.error('[blog-automation]',message,details);
}

function safeWebhookTarget(webhookUrl){
  try{
    const url=new URL(webhookUrl);
    return `${url.origin}${url.pathname}`;
  }catch(error){
    return 'invalid webhook URL';
  }
}

function parseJsonOrNull(text){
  try{
    return JSON.parse(text);
  }catch(error){
    return null;
  }
}

function isDuplicateAccepted(response,text){
  if(response.status!==409){ return false; }
  const json=parseJsonOrNull(text);
  return json?.error==='Duplicate blog url'&&Boolean(json?.duplicate);
}

function slugify(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80);
}

function resolveInternalLinks(ids){
  const map=new Map(INTERNAL_LINK_OPTIONS.map(opt=>[opt.id,opt]));
  return ids.map(id=>map.get(id)).filter(Boolean);
}

function getSiteUrl(env){
  return String(env.NEXT_PUBLIC_SITE_URL||DEFAULT_SITE_URL).replace(/\/$/,'');
}

function getBlogPostUrl(env,post){
  return `${getSiteUrl(env)}/blog/${post.slug}/`;
}

function buildBlogCreatedWebhookPayload(env,post){
  return {
    event:'BLOG_POST_CREATED',
    url:getBlogPostUrl(env,post),
    title:post.title,
    excerpt:post.excerpt,
    city:post.city||'',
    service:post.service||'Popcorn Ceiling Removal',
    publishedAt:post.publishedAt||new Date(`${post.date}T12:00:00Z`).toISOString()
  };
}

async function verifyBlogUrl(url){
  try{
    logBlogAutomation('Verifying live blog URL before webhook',{url});
    let response=await fetch(url,{method:'HEAD',redirect:'follow'});
    if(response.status===405){
      logBlogAutomation('HEAD returned 405; retrying blog URL verification with GET',{url});
      response=await fetch(url,{method:'GET',redirect:'follow'});
    }
    logBlogAutomation('Blog URL verification completed',{url,status:response.status});
    return {
      ok:response.status>=200&&response.status<400,
      status:response.status
    };
  }catch(error){
    warnBlogAutomation('Blog URL verification failed',{url,error:error?.message||'Unable to verify blog URL'});
    return {ok:false,error:error?.message||'Unable to verify blog URL'};
  }
}

async function sendBlogCreatedWebhook(env,post){
  const webhookUrl=env.GMB_POSTER_WEBHOOK_URL||env.BLOG_CREATED_WEBHOOK_URL;
  const secret=env.EPF_WEBHOOK_SECRET||env.GMB_POSTER_WEBHOOK_SECRET;

  logBlogAutomation('Preparing blog-created webhook',{
    slug:post?.slug,
    title:post?.title,
    siteUrl:getSiteUrl(env),
    hasWebhookUrl:Boolean(webhookUrl),
    hasSecret:Boolean(secret),
    webhookTarget:webhookUrl?safeWebhookTarget(webhookUrl):null
  });

  if(!webhookUrl){
    warnBlogAutomation('Blog created webhook skipped: GMB_POSTER_WEBHOOK_URL is not set',{slug:post?.slug});
    return {ok:false,skipped:true,error:'GMB_POSTER_WEBHOOK_URL is not set'};
  }

  if(!secret){
    warnBlogAutomation('Blog created webhook skipped: EPF_WEBHOOK_SECRET is not set',{slug:post?.slug});
    return {ok:false,skipped:true,error:'EPF_WEBHOOK_SECRET is not set'};
  }

  const payload=buildBlogCreatedWebhookPayload(env,post);
  const verification=await verifyBlogUrl(payload.url);
  if(!verification.ok){
    warnBlogAutomation('Blog created webhook skipped: blog URL is not live',{
      slug:post?.slug,
      url:payload.url,
      verification
    });
    return {
      ok:false,
      skipped:true,
      error:'Blog URL is not live',
      url:payload.url,
      verification
    };
  }

  try{
    logBlogAutomation('Sending blog-created webhook',{
      slug:post?.slug,
      url:payload.url,
      webhookTarget:safeWebhookTarget(webhookUrl)
    });
    const response=await fetch(webhookUrl,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        'x-epf-webhook-secret':secret
      },
      body:JSON.stringify(payload)
    });
    const text=await response.text();
    const duplicateAccepted=isDuplicateAccepted(response,text);
    if(!response.ok&&!duplicateAccepted){
      errorBlogAutomation('Blog created webhook failed',{
        slug:post?.slug,
        status:response.status,
        response:text.slice(0,500)
      });
      return {ok:false,status:response.status,error:text||response.statusText};
    }
    logBlogAutomation('Blog created webhook sent',{
      slug:post?.slug,
      url:payload.url,
      status:response.status,
      duplicate:duplicateAccepted,
      response:text.slice(0,200)
    });
    return {ok:true,status:response.status,duplicate:duplicateAccepted};
  }catch(error){
    errorBlogAutomation('Blog created webhook request error',{
      slug:post?.slug,
      error:error?.message||'Webhook request failed'
    });
    return {ok:false,error:error?.message||'Webhook request failed'};
  }
}

async function sendBlogCreatedWebhooks(env,posts){
  const items=Array.isArray(posts)?posts:[posts];
  const results=[];
  for(const post of items.filter(Boolean)){
    results.push(await sendBlogCreatedWebhook(env,post));
  }
  return results;
}

async function fetchGeneratedPosts(env){
  if(!env.BLOG_KV){
    warnBlogAutomation('BLOG_KV binding missing while fetching generated posts');
    return [];
  }
  const data=await env.BLOG_KV.get(POSTS_KEY,{type:'json'});
  const posts=Array.isArray(data)?data:[];
  logBlogAutomation('Fetched generated posts from KV',{count:posts.length});
  return posts;
}

async function saveGeneratedPosts(env,posts){
  if(!env.BLOG_KV){
    warnBlogAutomation('BLOG_KV binding missing while saving generated posts');
    return;
  }
  await env.BLOG_KV.put(POSTS_KEY,JSON.stringify(posts));
  await env.BLOG_KV.put(`${POSTS_KEY}:lastRun`,new Date().toISOString());
  logBlogAutomation('Saved generated posts to KV',{count:posts.length});
}

async function callOpenAI(env){
  if(!env.OPENAI_API_KEY){
    warnBlogAutomation('Missing OPENAI_API_KEY env for scheduler');
    return null;
  }
  logBlogAutomation('Requesting new generated blog post from OpenAI',{
    model:env.OPENAI_MODEL||'gpt-4.1-mini'
  });
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
    errorBlogAutomation('OpenAI request failed',{status:res.status,response:text.slice(0,500)});
    return null;
  }
  const json=await res.json();
  const content=json.choices?.[0]?.message?.content;
  if(!content){
    warnBlogAutomation('OpenAI response missing content');
    return null;
  }
  try{
    return JSON.parse(content);
  }catch(error){
    errorBlogAutomation('Unable to parse OpenAI response',{error:error?.message||'JSON parse failed'});
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
    publishedAt:new Date().toISOString(),
    excerpt:post.excerpt,
    city:post.city,
    service:'Popcorn Ceiling Removal',
    content:post.sections.map(s=>`${s.heading}. ${s.body}`),
    keywords:post.localKeywords,
    photos:post.photoIdeas,
    links:resolveInternalLinks(post.internalLinks)
  };
}

async function refreshGeneratedPosts(env){
  logBlogAutomation('Starting generated blog refresh',{
    siteUrl:getSiteUrl(env),
    hasBlogKv:Boolean(env.BLOG_KV),
    hasOpenAiKey:Boolean(env.OPENAI_API_KEY),
    hasWebhookUrl:Boolean(env.GMB_POSTER_WEBHOOK_URL||env.BLOG_CREATED_WEBHOOK_URL),
    hasWebhookSecret:Boolean(env.EPF_WEBHOOK_SECRET||env.GMB_POSTER_WEBHOOK_SECRET)
  });
  if(!env.BLOG_KV){
    warnBlogAutomation('BLOG_KV binding missing; skipping generation');
    return null;
  }
  const newPost=await generatePost(env);
  if(!newPost){
    warnBlogAutomation('No blog post generated; refresh skipped');
    return null;
  }
  logBlogAutomation('Generated new blog post',{
    slug:newPost.slug,
    title:newPost.title,
    url:getBlogPostUrl(env,newPost)
  });
  const existing=await fetchGeneratedPosts(env);
  const limit=parseInt(env.BLOG_POST_LIMIT||'30',10);
  const next=[newPost,...existing].slice(0,limit);
  await saveGeneratedPosts(env,next);
  const webhooks=await sendBlogCreatedWebhooks(env,[newPost]);
  logBlogAutomation('Generated blog refresh finished',{
    slug:newPost.slug,
    webhook:webhooks[0]||null
  });
  return {...newPost,webhook:webhooks[0]||null};
}

export default {
  async fetch(request, env, ctx) {
    const url=new URL(request.url);
    if(url.pathname==='/api/generated-posts'){
      logBlogAutomation('Generated posts API requested',{path:url.pathname});
      const posts=env.BLOG_KV?await fetchGeneratedPosts(env):[];
      return new Response(JSON.stringify(posts),{
        headers:{
          'content-type':'application/json',
          'cache-control':'no-store'
        }
      });
    }
    if(url.pathname==='/api/generated-posts/refresh' && request.method==='POST'){
      logBlogAutomation('Manual generated posts refresh requested',{path:url.pathname});
      if(!env.BLOG_KV){
        return new Response(JSON.stringify({error:'BLOG_KV not configured'}),{status:500,headers:{'content-type':'application/json'}});
      }
      if(env.BLOG_CRON_TOKEN){
        const auth=request.headers.get('Authorization');
        if(auth!==`Bearer ${env.BLOG_CRON_TOKEN}`){
          warnBlogAutomation('Manual generated posts refresh unauthorized');
          return new Response('Unauthorized',{status:401});
        }
      }
      const created=await refreshGeneratedPosts(env);
      if(!created){ return new Response(JSON.stringify({status:'skipped'}),{status:500,headers:{'content-type':'application/json'}}); }
      return new Response(JSON.stringify(created),{headers:{'content-type':'application/json'}});
    }
    return nextWorker.fetch(request, env, ctx);
  },
  async scheduled(event, env, ctx) {
    logBlogAutomation('Scheduled generated posts refresh triggered',{
      cron:event?.cron||null,
      scheduledTime:event?.scheduledTime||null
    });
    ctx.waitUntil(refreshGeneratedPosts(env));
  },
};
