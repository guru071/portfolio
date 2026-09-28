import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SeoHead({ 
  title = "GURUPRASATH D | Founder & CEO of GOAT'ECH", 
  description = "Official portfolio of Guruprasath D, Founder & CEO of GOAT'ECH and MAGH'S Technology. Expert Software Architect and Developer based in Tamil Nadu, India.",
  url = "https://guruprasath.goatech.tech"
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Guruprasath D",
    "jobTitle": "Founder and CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "GOAT'ECH"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Mailam Engineering College"
      },
      {
        "@type": "HighSchool",
        "name": "Bonne Nehru Hr Sec School"
      }
    ],
    "url": url,
    "sameAs": [
      "https://github.com/guru071",
      "https://www.linkedin.com/in/guru-prasath-bb8328382",
      "https://instagram.com/maghs.guruprasath",
      "https://youtube.com/@goat-u9m2v",
      "https://x.com/goatechmaghs",
      "https://goatech.tech",
      "https://maghs.tech",
      "https://goatech.tech/team/guruprasath-d"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Guruprasath D, Guruprasath GOAT'ECH, Guruprasath MAGHS, CEO of GOAT'ECH, Mailam Engineering College Alumni, Software Developer Tamil Nadu, React Developer India, Python Developer Tamil Nadu, Guruprasath portfolio, Tech Founder India" />
      <meta name="author" content="Guruprasath D" />
      
      {/* Geo-Targeting to dominate local search */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tamil Nadu" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/images/team/guruprasath-d.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}/images/team/guruprasath-d.jpg`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}
