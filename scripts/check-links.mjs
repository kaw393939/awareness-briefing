import { readdir, readFile } from 'node:fs/promises';
import { resolve, relative, join } from 'node:path';

const root = resolve('docs/.vitepress/dist');
const base = '/awareness-briefing/';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]))).flat();
}
const files = new Set(await walk(root));
const pages = new Map();
for (const path of files) {
  if (path.endsWith('.html')) pages.set(path, await readFile(path, 'utf8'));
}
const errors = [];
let checked = 0;
for (const [path, html] of pages) {
  for (const match of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (!value || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) continue;
    const url = new URL(value, 'https://local.test' + base + relative(root, path));
    if (!url.pathname.startsWith(base)) {
      errors.push(`${relative(root, path)}: URL outside configured base: ${value}`);
      continue;
    }
    const target = resolve(root, decodeURIComponent(url.pathname.slice(base.length)) || 'index.html');
    const candidates = [target, target + '.html', join(target, 'index.html')];
    const found = candidates.find(p => files.has(p));
    checked++;
    if (!found) errors.push(`${relative(root, path)}: missing target: ${value}`);
    else if (url.hash && pages.has(found)) {
      const id = decodeURIComponent(url.hash.slice(1));
      const ids = [...pages.get(found).matchAll(/\bid="([^"]*)"/g)].map(m => m[1]);
      if (!ids.includes(id)) errors.push(`${relative(root, path)}: missing fragment: ${value}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log(`Checked ${checked} internal links/assets across ${pages.size} generated pages.`);
