import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SeoHead({ 
  title = "GURUPRASATH D | Founder, CEO & Software Developer | GOAT'ECH & MAGH'S", 
  description = "GURUPRASATH D is the Founder and CEO of GOAT'ECH and MAGH'S. An expert Software Developer, Student at Mailam Engineering College, and Alumni of Bonne Nehru Hr Sec School. View his portfolio, resume, and tech projects.",
  url = "https://guruprasath.goatech.tech"
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://guruprasath.goatech.tech/#person",
    "name": "GURUPRASATH D",
    "alternateName": ["Guruprasath", "Guru Prasath D", "Guruprasath Developer"],
    "jobTitle": ["Founder", "CEO", "Software Developer", "Full Stack Engineer"],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "GOAT'ECH",
        "url": "https://goatech.tech"
      },
      {
        "@type": "Organization",
        "name": "MAGH'S",
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
        "alternateName": "BONNE NEHRU",
        "sameAs": "https://bonnenehru.edu.in/"
      }
    ],
    "url": url,
    "image": "https://guruprasath.goatech.tech/images/team/guruprasath-d.jpg",
    "sameAs": [
      "https://github.com/guru071",
      "https://www.linkedin.com/in/guru-prasath-bb8328382",
      "https://instagram.com/infinity.maghs",
      "https://instagram.com/maghs.guruprasath",
      "https://youtube.com/@goat-u9m2v",
      "https://x.com/goatechmaghs",
      "https://goatech.tech",
      "https://maghs.tech",
      "https://goatech.tech/team/guruprasath-d"
    ],
    "description": "GURUPRASATH D is a visionary Software Developer, Student at Mailam Engineering College, and Founder/CEO of GOAT'ECH and MAGH'S.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tindivanam",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "knowsAbout": ["Software Development", "React", "Python", "Web Engineering", "Artificial Intelligence"]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="GURUPRASATH D, GURUPRASATH, GURUPRASATH D MAILAM ENGINEERING COLLEGE, GURUPRASATH BONNE NEHRU, GURUPRASATH D FOUNDER, GURUPRASATH D CEO, GURUPRASATH D DEVELOPER, GURUPRASATH D STUDENT, GOAT'ECH Founder, MAGH'S CEO, Software Developer Tamil Nadu" />
      <meta name="author" content="GURUPRASATH D" />
      
      {/* Geo-Targeting */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tamil Nadu" />

      {/* Open Graph */}
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

      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}