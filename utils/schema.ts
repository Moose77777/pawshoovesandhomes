import { COMPANY_NAME, PHONE_NUMBER, EMAIL_ADDRESS, SERVICES, FAQS, TESTIMONIALS } from '../constants';

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": COMPANY_NAME,
  "image": "https://paws-hooves-homes.com/images/logo.png",
  "telephone": PHONE_NUMBER,
  "email": EMAIL_ADDRESS,
  "url": "https://paws-hooves-homes.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "The Waterfront",
    "addressLocality": "Grantham",
    "addressRegion": "Lincolnshire",
    "postalCode": "NG31 6QQ",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.9122,
    "longitude": -0.6387
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "07:00",
    "closes": "20:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Grantham" },
    { "@type": "City", "name": "Stamford" },
    { "@type": "City", "name": "Bourne" },
    { "@type": "City", "name": "Sleaford" },
    { "@type": "AdministrativeArea", "name": "Lincolnshire" },
    { "@type": "Place", "name": "Vale of Belvoir" }
  ],
  "priceRange": "££"
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Pet Sitting & Dog Walking",
  "provider": {
    "@type": "LocalBusiness",
    "name": COMPANY_NAME
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Lincolnshire"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pet Care Services",
    "itemListElement": SERVICES.map((service) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription
      }
    }))
  }
});

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateReviewSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": COMPANY_NAME,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": TESTIMONIALS.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": TESTIMONIALS.map((review) => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.clientName
    },
    "datePublished": "2023-01-01", 
    "reviewBody": review.content,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString()
    }
  }))
});