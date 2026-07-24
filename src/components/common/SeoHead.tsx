import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  faq?: { question: string; answer: string };
  spaceName?: string;
  breadcrumbs?: { name: string; url: string }[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl = 'https://chroma28.studio',
  faq,
  spaceName,
  breadcrumbs
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Schema LocalBusiness
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Chroma28 Studio',
      'image': 'https://chroma28.studio/og-image.jpg',
      '@id': 'https://chroma28.studio',
      'url': 'https://chroma28.studio',
      'telephone': '+96170000000',
      'priceRange': '$$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Main Highway, Antelias Commercial District',
        'addressLocality': 'Antelias',
        'addressRegion': 'Metn, Mount Lebanon',
        'postalCode': '1200',
        'addressCountry': 'LB'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 33.915,
        'longitude': 35.590
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '08:00',
        'closes': '22:00'
      },
      'sameAs': [
        'https://instagram.com/chroma28.studio'
      ]
    };

    // FAQ Schema
    const faqSchema = faq ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [{
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }]
    } : null;

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': b.name,
        'item': b.url
      }))
    } : null;

    // Inject JSON-LD
    const scriptId = 'chroma28-json-ld';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const combinedSchemas = [localBusinessSchema];
    if (faqSchema) combinedSchemas.push(faqSchema as any);
    if (breadcrumbSchema) combinedSchemas.push(breadcrumbSchema as any);

    scriptTag.textContent = JSON.stringify(combinedSchemas);

  }, [title, description, canonicalUrl, faq, spaceName, breadcrumbs]);

  return null;
};

export default SeoHead;
