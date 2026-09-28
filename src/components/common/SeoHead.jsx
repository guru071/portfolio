import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SeoHead({
  title,
  description = "GOAT'ECH (Greatest Of All Time Technology) is an elite software development and technology startup based in India. We specialize in building cutting-edge mobile applications, high-performance web platforms, sophisticated enterprise solutions, and next-generation UI/UX designs. Partnered closely with MAGH'S Technology, our ecosystem empowers businesses with robust, scalable software, API architecture, and seamless cloud integrations. Explore our flagship products including MaghGo, TN Voting, and Smart Aqua, crafted with precision by our founders Guruprasath D, Aditya R, Abdul Kapur S, and Abishek R.",
  canonical,
  schema = null,
  type = 'website',
  image = 'https://goatech.tech/images/goatech-og-banner.png'
}) {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname || '/';
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const defaultCanonical = `https://goatech.tech${normalizedPath}`;
    
    let finalCanonical = defaultCanonical;
    if (canonical) {
      const cleanCanonical = canonical.split('?')[0].replace(/\/$/, '');
      finalCanonical = cleanCanonical || 'https://goatech.tech/';
    }

    let fullTitle = "GOAT'ECH | Software Development & Technology Solutions | India";
    if (title) {
      if (title.includes("GOAT'ECH") || title.includes("Greatest Of All Time")) {
        fullTitle = title;
      } else {
        fullTitle = `${title} | GOAT'ECH`;
      }
    }
    document.title = fullTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "GOAT'ECH, Greatest Of All Time Technology, MAGH'S Technology, MaghGo, TN Voting, Smart Aqua, Nothing IDE, software development, web development, mobile apps, Android apps, enterprise software, API development, React, FastAPI, India startup, technology solutions, Guruprasath D, Aditya R, Team Sparrow, tech ecosystem";


    const setMetaTag = (attrName, attrValue, content) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('property', 'og:site_name', "GOAT'ECH - Greatest Of All Time Technology");
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:locale', 'en_US');

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@goatech');
    setMetaTag('name', 'twitter:creator', '@guruprasath');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', finalCanonical);

    let scriptTag = document.getElementById('json-ld-seo');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-seo';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://goatech.tech/#organization",
      "name": "GOAT'ECH",
      "legalName": "Greatest Of All Time Technology",
      "alternateName": ["GOAT Technology", "Greatest Of All Time Technology"],
      "url": "https://goatech.tech/",
      "logo": {"@type": "ImageObject", "url": "https://goatech.tech/images/goatech-logo.jpeg"},
      "description": "GOAT'ECH is a technology startup in India building software and technology solutions.",
      "founder": [{"@id": "https://goatech.tech/team/guruprasath-d#person"}, {"@id": "https://goatech.tech/team/aditya-r#person"}, {"@id": "https://goatech.tech/team/abdul-kapur-s#person"}, {"@id": "https://goatech.tech/team/abishek-r#person"}],
      "brand": {"@type": "Brand", "name": "GOAT'ECH", "url": "https://goatech.tech/"}
    };

    let schemaContent;
    if (schema) {
      if (Array.isArray(schema)) {
        schemaContent = {
          "@context": "https://schema.org",
          "@graph": schema
        };
      } else {
        schemaContent = schema;
      }
    } else {
      schemaContent = defaultOrganizationSchema;
    }

    scriptTag.textContent = JSON.stringify(schemaContent, null, 2);
  }, [location.pathname, title, description, canonical, schema, type, image]);

  return null;
}
