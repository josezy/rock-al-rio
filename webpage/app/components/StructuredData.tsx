export default function StructuredData() {
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": "Festival Internacional Rock al Río 2025",
    "description": "El festival de rock más grande del oriente antioqueño. 20 años de historia cultural en Rionegro, Antioquia con más de 300 bandas participantes desde 2009.",
    "startDate": "2025-11-15T12:00:00-05:00",
    "endDate": "2025-11-15T23:59:59-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Parqueadero del Estadio Alberto Grisales",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Parqueadero del Estadio Alberto Grisales",
        "addressLocality": "Rionegro",
        "addressRegion": "Antioquia",
        "addressCountry": "Colombia"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Festival Internacional Rock al Río",
      "url": "https://rockalriocolombia.org",
      "sameAs": [
        "https://www.facebook.com/Rockalriofest",
        "https://www.instagram.com/rockalriofest/",
        "https://www.youtube.com/@RockAlRioColombia"
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "COP",
      "availability": "https://schema.org/InStock",
      "description": "Entrada solidaria con donación de alimentos o material reciclable"
    },
    "image": [
      "https://rockalriocolombia.org/banner.jpg"
    ],
    "url": "https://rockalriocolombia.org",
    "genre": ["Rock", "Metal", "Alternative Rock", "Reggae", "Ska", "Hip-hop"]
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Festival Internacional Rock al Río",
    "url": "https://rockalriocolombia.org",
    "logo": "https://rockalriocolombia.org/logo.jpg",
    "image": "https://rockalriocolombia.org/banner.jpg",
    "description": "El festival de rock más grande del oriente antioqueño. 20 años de historia cultural en Rionegro, Antioquia con más de 300 bandas participantes desde 2009. Un catalizador de desarrollo socioeconómico y cultural.",
    "foundingDate": "2009",
    "location": {
      "@type": "Place",
      "name": "Rionegro, Antioquia, Colombia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rionegro",
        "addressRegion": "Antioquia",
        "addressCountry": "Colombia"
      }
    },
    "sameAs": [
      "https://www.facebook.com/Rockalriofest",
      "https://www.instagram.com/rockalriofest/",
      "https://www.youtube.com/@RockAlRioColombia"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contacto@rockalriocolombia.org",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Festival Internacional Rock al Río",
    "url": "https://rockalriocolombia.org",
    "description": "El festival de rock más grande del oriente antioqueño. 20 años de historia cultural en Rionegro, Antioquia.",
    "inLanguage": "es-CO",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rockalriocolombia.org/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  );
}