'use client'

export default function StructuredData() {
  // Person Schema for Borbála Nagy
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Borbála Nagy",
    "alternateName": ["Borbala Nagy", "Bori Nagy"],
    "jobTitle": ["Filmmaker", "Director", "Screenwriter"],
    "description": "Acclaimed filmmaker and director creating powerful stories through the female gaze, winner of multiple international awards including German Short Film Award and Hungarian Film Critics Prize.",
    "url": "https://borbalanagy.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://borbalanagy.com/images/about/ABOUT IMAGE.jpg",
      "width": 800,
      "height": 600
    },
    "sameAs": [
      "https://www.instagram.com/bori.nagy/",
      "https://vimeo.com/borbalanagy",
      "https://www.linkedin.com/in/borbalanagy",
      "https://www.imdb.com/name/borbalanagy"
    ],
    "nationality": "Hungarian",
    "birthPlace": {
      "@type": "Place",
      "name": "Hungary"
    },
    "workLocation": [
      {
        "@type": "Place",
        "name": "Berlin, Germany"
      },
      {
        "@type": "Place", 
        "name": "Budapest, Hungary"
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "DFFB - German Film and Television Academy Berlin"
    },
    "award": [
      {
        "@type": "Award",
        "name": "German Short Film Award - Best short fiction",
        "description": "Winner for exceptional achievement in short film directing"
      },
      {
        "@type": "Award", 
        "name": "Hungarian Film Critics' Prize - Best short film",
        "description": "Recognition from Hungarian film critics for outstanding work"
      },
      {
        "@type": "Award",
        "name": "Cannes Producers Network Award",
        "description": "Award from Cannes Film Festival for promising film project"
      }
    ],
    "knowsAbout": [
      "Filmmaking",
      "Film Direction", 
      "Screenwriting",
      "Female Gaze Cinema",
      "Short Films",
      "Feature Films",
      "European Cinema",
      "Independent Cinema",
      "Art House Films"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Film Director",
      "occupationLocation": {
        "@type": "Place",
        "name": "Europe"
      },
      "skills": ["Directing", "Screenwriting", "Film Production", "Storytelling"]
    }
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Borbála Nagy - Filmmaker Portfolio",
    "alternateName": "Borbala Nagy Filmmaker",
    "url": "https://borbalanagy.com",
    "description": "Official portfolio website of award-winning filmmaker and director Borbála Nagy",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://borbalanagy.com/works?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "author": {
      "@type": "Person",
      "name": "Borbála Nagy"
    },
    "creator": {
      "@type": "Person", 
      "name": "Borbála Nagy"
    }
  };

  // Organization Schema for professional work
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Borbála Nagy Films",
    "alternateName": "Borbala Nagy Production",
    "url": "https://borbalanagy.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://borbalanagy.com/images/about/ABOUT IMAGE.jpg"
    },
    "description": "Independent film production and direction by award-winning filmmaker Borbála Nagy",
    "founder": {
      "@type": "Person",
      "name": "Borbála Nagy"
    },
    "location": [
      {
        "@type": "Place",
        "name": "Berlin, Germany"
      },
      {
        "@type": "Place",
        "name": "Budapest, Hungary"
      }
    ],
    "knowsAbout": [
      "Film Production",
      "Independent Cinema", 
      "European Films",
      "Female Perspectives in Film"
    ]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://borbalanagy.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "About",
        "item": "https://borbalanagy.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3, 
        "name": "Works",
        "item": "https://borbalanagy.com/works"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://borbalanagy.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}