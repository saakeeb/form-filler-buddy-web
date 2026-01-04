export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Form Filler Buddy',
    applicationCategory: 'BrowserExtension',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '5',
      bestRating: '5',
      worstRating: '1',
    },
    description:
      'A smart Chrome extension that automatically fills web forms with your saved data or realistic test data.',
    url: 'https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic',
    author: {
      '@type': 'Person',
      name: 'Nazmus Sakib',
      url: 'https://github.com/saakeeb',
    },
    featureList: [
      'Smart Auto-Fill',
      'Custom Field Management',
      'Website-Specific Fields',
      'Test Data Generator',
      'Password Protection',
      'Privacy First',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Form Filler Buddy',
    description:
      'A smart Chrome extension that automatically fills web forms with your saved data or realistic test data.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://formfillerbuddy.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          (process.env.NEXT_PUBLIC_BASE_URL || 'https://formfillerbuddy.com') +
          '/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Form Filler Buddy',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://formfillerbuddy.com',
    logo:
      (process.env.NEXT_PUBLIC_BASE_URL || 'https://formfillerbuddy.com') +
      '/assets/images/icon128.png',
    sameAs: [
      'https://github.com/Sakib-Space/form-filler-buddy',
      'https://chromewebstore.google.com/detail/form-filler-buddy/iihmcahgacmeofhbgjjhgflbffcmdnic',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


