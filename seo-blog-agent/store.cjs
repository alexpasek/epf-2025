const fs = require("fs/promises");
const path = require("path");

const STORE_PATH = process.env.SEO_BLOG_AGENT_STORE_PATH
  ? path.resolve(process.env.SEO_BLOG_AGENT_STORE_PATH)
  : path.join(process.cwd(), "seo-blog-agent", "data", "store.json");
const DEFAULT_STORE = {
  jobs: [],
  keywordIdeas: [],
  competitorPages: [],
  epfPages: [],
  competitionComparisons: [],
  blogDrafts: [],
  automationRuns: [],
  agentActivity: [],
  publishLogs: [],
  gmbDrafts: [],
};

async function ensureStore() {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, JSON.stringify(DEFAULT_STORE, null, 2));
  }
}

async function readStore() {
  await ensureStore();
  const raw = await fs.readFile(STORE_PATH, "utf8");
  const parsed = JSON.parse(raw || "{}");
  return { ...DEFAULT_STORE, ...parsed };
}

async function writeStore(store) {
  await ensureStore();
  await fs.writeFile(STORE_PATH, `${JSON.stringify({ ...DEFAULT_STORE, ...store }, null, 2)}\n`);
}

async function updateStore(mutator) {
  const store = await readStore();
  const result = await mutator(store);
  await writeStore(store);
  return result;
}

function byId(collection, id) {
  return collection.find((item) => item.id === id);
}

function upsert(collection, item) {
  const index = collection.findIndex((entry) => entry.id === item.id);
  if (index >= 0) collection[index] = item;
  else collection.unshift(item);
  return item;
}

module.exports = {
  STORE_PATH,
  readStore,
  writeStore,
  updateStore,
  byId,
  upsert,
};
