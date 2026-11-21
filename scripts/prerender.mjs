import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pages, SITE_URL, PROFILE_IMAGE, structuredData } from '../src/data/portfolio.js';
import { render } from '../.ssr/entry-server.js';
const template = await readFile('dist/index.html','utf8');
const esc = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
await mkdir('dist/__seo', { recursive: true });
for (const page of pages) {
  const url = `${SITE_URL}${page.path}`;
  const tags = `<link rel="canonical" href="${esc(url)}" />\n<meta property="og:type" content="${page.path === '/' ? 'profile' : 'website'}" />\n<meta property="og:title" content="${esc(page.title)}" />\n<meta property="og:description" content="${esc(page.description)}" />\n<meta property="og:url" content="${esc(url)}" />\n<meta property="og:image" content="${PROFILE_IMAGE}" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:title" content="${esc(page.title)}" />\n<meta name="twitter:description" content="${esc(page.description)}" />\n<meta name="twitter:image" content="${PROFILE_IMAGE}" />\n<script id="portfolio-schema" type="application/ld+json">${JSON.stringify(structuredData(page)).replaceAll('<','\\u003c')}</script>`;
  const html = template.replace(/<title>.*?<\/title>/, `<title>${esc(page.title)}</title>`).replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${esc(page.description)}" />`).replace('</head>', `${tags}\n</head>`).replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  await writeFile(page.path === '/' ? 'dist/index.html' : `dist/__seo/${page.path.slice(1)}.html`, html);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p=>`  <url><loc>${SITE_URL}${p.path}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile('dist/sitemap.xml', sitemap);
console.log(`Prerendered ${pages.length} pages and generated sitemap.`);
