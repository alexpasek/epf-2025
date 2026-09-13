const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');
const root = path.join(__dirname, '..');
const output = path.join(root, 'public/_images');
const widths = [320, 640, 960, 1280, 1600, 1920];
const version = 'webp-q80-v1';
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '_images') return [];
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
async function main() {
  fs.mkdirSync(output, { recursive: true });
  const manifest = {}, dimensions = {}, skipped = [];
  const files = walk(path.join(root, 'public')).filter(file => /\.(png|jpe?g|webp|avif|gif|svg)$/i.test(file));
  let index = 0;
  async function worker() {
    while (index < files.length) {
      const file = files[index++];
      const src = '/' + path.relative(path.join(root, 'public'), file).split(path.sep).join('/');
      let meta;
      try { meta = await sharp(file).metadata(); } catch { skipped.push(src); continue; }
      if (!meta.width || !meta.height) continue;
      // autoOrient matches the orientation browsers display for EXIF-tagged photographs.
      const rotated = [5, 6, 7, 8].includes(meta.orientation);
      const width = rotated ? meta.height : meta.width;
      const height = rotated ? meta.width : meta.height;
      dimensions[src] = { width, height };
      if (width < 320 || meta.format === 'svg' || (meta.pages || 1) > 1) continue;
      const bytes = fs.readFileSync(file);
      const hash = crypto.createHash('sha256').update(bytes).update(version).digest('hex').slice(0, 16);
      const name = path.basename(file, path.extname(file)).toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 65);
      const sizes = [...new Set([...widths.filter(w => w <= width), Math.min(width, 1920)])].sort((a,b)=>a-b);
      const variants = [];
      for (const size of sizes) {
        const filename = `${name}-${hash}-${size}.webp`;
        const target = path.join(output, filename);
        if (!fs.existsSync(target)) await sharp(bytes).rotate().resize({ width: size, withoutEnlargement: true }).webp({ quality: 80 }).toFile(target);
        variants.push({ width: size, src: '/_images/' + filename });
      }
      const preferred = variants.filter(item => item.width <= 1280);
      const fallback = [...preferred].reverse().find(item => fs.statSync(path.join(root, "public", item.src)).size <= 450000) || preferred[0] || variants[0];
      manifest[src] = { width, height, src: fallback.src, variants };
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
  const sort = object => Object.fromEntries(Object.entries(object).sort(([a],[b])=>a.localeCompare(b)));
  fs.writeFileSync(path.join(root, 'lib/responsiveImages.json'), JSON.stringify(sort(manifest)) + '\n');
  fs.writeFileSync(path.join(root, 'lib/imageDimensions.json'), JSON.stringify(sort(dimensions), null, 2) + '\n');
  console.log(`Responsive images: ${Object.keys(manifest).length} source assets; ${Object.keys(dimensions).length} dimensions recorded.`);
  if (skipped.length) console.log('Undecodable originals preserved (not used by inspected pages): ' + skipped.join(', '));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
