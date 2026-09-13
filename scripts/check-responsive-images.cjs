const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const sharp = require('sharp');
const root = path.join(__dirname, '..');
const manifest = require('../lib/responsiveImages.json');
(async () => {
  let count = 0, originalBytes = 0, fallbackBytes = 0, largeFallbacks = [];
  for (const [src, item] of Object.entries(manifest)) {
    const original = path.join(root, 'public', src);
    assert(fs.existsSync(original), src);
    originalBytes += fs.statSync(original).size;
    let previous = 0;
    for (const variant of item.variants) {
      assert(variant.width > previous && variant.width <= item.width, src);
      previous = variant.width;
      const file = path.join(root, 'public', variant.src);
      const meta = await sharp(file).metadata();
      assert.equal(meta.format, 'webp', file);
      assert.equal(meta.width, variant.width, file);
      assert.equal(meta.height, Math.round(item.height * variant.width / item.width), file);
      count++;
    }
    assert(item.variants.some(v => v.src === item.src), src);
    const size = fs.statSync(path.join(root, 'public', item.src)).size;
    fallbackBytes += size;
    if (size > 500000) largeFallbacks.push({ src, bytes: size });
  }
  assert.equal(largeFallbacks.length, 0, JSON.stringify(largeFallbacks));
  console.log(JSON.stringify({ sources: Object.keys(manifest).length, variants: count, originalBytes, fallbackBytes, reductionPercent: Math.round(100 * (1 - fallbackBytes / originalBytes)), largeFallbacks }, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
