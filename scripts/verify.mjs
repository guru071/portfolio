import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pages, SITE_URL } from '../src/data/portfolio.js';
const titles = new Set(), descriptions = new Set();
for (const page of pages) {
  const html = await readFile(page.path === '/' ? 'dist/index.html' : `dist/__seo/${page.path.slice(1)}.html`,'utf8');
  assert.equal((html.match(/<title>/g)||[]).length,1,`${page.path}: title count`);
  assert.equal((html.match(/<meta name="description"/g)||[]).length,1,`${page.path}: description count`);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`${page.path}: h1 count`);
  assert.ok(html.includes(`href="${SITE_URL}${page.path}"`),`${page.path}: canonical`);
  assert.ok(!html.includes('aggregateRating'),`${page.path}: unverified ratings`);
  titles.add(page.title); descriptions.add(page.description);
}
assert.equal(titles.size,pages.length); assert.equal(descriptions.size,pages.length);
const sitemap = await readFile('dist/sitemap.xml','utf8');
for(const page of pages) assert.ok(sitemap.includes(`<loc>${SITE_URL}${page.path}</loc>`));
console.log('Verified page titles, descriptions, headings, canonical URLs and sitemap.');
