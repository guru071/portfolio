import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SeoHead({ 
  title = "GURUPRASATH D | Founder & CEO of GOAT'ECH & MAGH'S Technology", 
  description = "GURUPRASATH D is the visionary Founder and CEO of GOAT'ECH and MAGH'S Technology in Tamil Nadu, India. Software Developer, Architect, and Tech Entrepreneur.",
  url = "https://guruprasath.goatech.tech",
  type = "profile"
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://guruprasath.goatech.tech/#person",
    "name": "GURUPRASATH D",
    "alternateName": ["Guruprasath", "Guru Prasath D", "Guruprasath Developer", "Guruprasath CEO", "Guruprasath GOAT'ECH"],
    "disambiguatingDescription": "Tech Founder and CEO of GOAT'ECH and MAGH'S Technology in Tamil Nadu. Software Architect and Full Stack Developer.",
    "jobTitle": ["Founder", "Chief Executive Officer", "Software Architect", "Full Stack Engineer"],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "GOAT'ECH",
        "alternateName": "Greatest Of All Time Technology",
        "url": "https://goatech.tech",
        "sameAs": ["https://goatech.tech"]
      },
      {
        "@type": "Organization",
        "name": "MAGH'S Technology",
        "foundingDate": "2024-10-06",
        "url": "https://maghs.tech"
      }
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Mailam Engineering College",
        "sameAs": "https://mailamengg.com/"
      },
      {
        "@type": "HighSchool",
        "name": "Bonne Nehru Hr Sec School",
        "sameAs": "https://bonnenehru.edu.in/"
      }
    ],
    "url": url,
    "image": "https://guruprasath.goatech.tech/images/team/guruprasath-d.jpg",
    "sameAs": [
      "https://github.com/guru071",
      "https://www.linkedin.com/in/guru-prasath-bb8328382",
      "https://instagram.com/infinity.sparrow",
      "https://instagram.com/infinity.maghs",
      "https://instagram.com/maghs.guruprasath",
      "https://goatech.tech/team/guruprasath-d",
      "https://youtube.com/@goat-u9m2v",
      "https://x.com/goatechmaghs"
    ],
    "description": "GURUPRASATH D is the top technology founder of GOAT'ECH and MAGH'S Technology. An elite Software Developer based in Tamil Nadu, India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tindivanam",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "knowsAbout": ["Software Development", "React", "Python", "Web Engineering", "Artificial Intelligence", "Tech Startups", "Entrepreneurship"]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": url,
    "name": title,
    "description": description,
    "about": {
      "@id": "https://guruprasath.goatech.tech/#person"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="GURUPRASATH D, GURUPRASATH, GURUPRASATH D FOUNDER, GURUPRASATH D CEO, GOAT'ECH, MAGH'S Technology, GURUPRASATH D Software Developer, Guruprasath D Tech Founder, GURUPRASATH D Tamil Nadu, Guruprasath D Mailam Engineering, Guruprasath D Bonne Nehru" />
      <meta name="author" content="GURUPRASATH D" />
      
      {/* Geo-Targeting to dominate local/national search for the name */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tamil Nadu" />
      <meta name="geo.position" content="12.2393;79.6606" />
      <meta name="ICBM" content="12.2393, 79.6606" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://guruprasath.goatech.tech/images/team/guruprasath-d.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://guruprasath.goatech.tech/images/team/guruprasath-d.jpg`} />

      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
}
