import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { estimateOakvilleCeiling } from '../lib/oakvilleCeilingPricing.mjs';
const require = createRequire(import.meta.url);
const values = { area: '500', condition: 'unpainted', height: 'standard', repairs: 'minor', finish: 'primer' };

test('published area allowance and selected finish arithmetic', () => {
  const base = estimateOakvilleCeiling(values);
  assert.deepEqual([base.low, base.high], [2875, 4875]);
  const painted = estimateOakvilleCeiling({ ...values, finish: 'paint' });
  assert.deepEqual([painted.low, painted.high], [3325, 5675]);
});
test('invalid or out-of-range area never produces a quote', () => {
  for (const area of ['', 0, 0.5, -1, 'bad', 'Infinity', 100001]) {
    assert.equal(estimateOakvilleCeiling({ ...values, area }), null);
  }
});
test('all option combinations disclose unpriced work without invented surcharges', () => {
  for (const condition of ['unpainted', 'painted', 'unsure'])
    for (const height of ['standard', 'high'])
      for (const repairs of ['minor', 'visible', 'unsure'])
        for (const finish of ['primer', 'paint']) {
          const result = estimateOakvilleCeiling({ ...values, condition, height, repairs, finish });
          assert(result.low > 0 && result.high >= result.low);
          if (condition !== 'unpainted') assert(result.notes.some(n => n.includes('Painted or uncertain')));
          if (height === 'high') assert(result.notes.some(n => n.includes('access allowance')));
          if (repairs !== 'minor') assert(result.notes.some(n => n.includes('Repair work')));
        }
});
test('consolidated routes use one-hop 301s with and without trailing slash', async () => {
  const redirects = require('../data/oakvilleRedirects.json');
  const routes = await require('../next.config.js').redirects();
  for (const [from, to] of Object.entries(redirects)) {
    assert(!redirects[to], `Redirect chain: ${to}`);
    for (const source of [from, from.slice(0, -1)]) {
      assert(routes.some(r => r.source === source && r.destination === to && r.statusCode === 301));
    }
  }
});
test('sitemap discovery and supplemental blog paths exclude redirect sources', async () => {
  const redirects = require('../data/oakvilleRedirects.json');
  const config = require('../next-sitemap.config.js');
  for (const from of Object.keys(redirects)) assert.equal(await config.transform(config, from), null);
  const extra = await config.additionalPaths();
  assert(!extra.some(p => redirects[p.loc]));
});
