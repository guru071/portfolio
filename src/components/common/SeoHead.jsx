import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageByPath, SITE_URL, PROFILE_IMAGE, structuredData } from '../../data/portfolio.js';

export default function SeoHead() {
  const { pathname } = useLocation();
  const page = pageByPath(pathname.replace(/\/$/, '') || '/');
  useEffect(() => {
    if (!page) return;
    const url = `${SITE_URL}${page.path}`;
    document.title = page.title;
    const setMeta = (attribute, name, value) => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element); }
      element.content = value;
    };
    setMeta('name', 'description', page.description);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', page.path === '/' ? 'profile' : 'website');
    setMeta('property', 'og:image', PROFILE_IMAGE);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', PROFILE_IMAGE);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = url;
    let schema = document.getElementById('portfolio-schema');
    if (!schema) { schema = document.createElement('script'); schema.id = 'portfolio-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify(structuredData(page));
  }, [page]);
  return null;
}
