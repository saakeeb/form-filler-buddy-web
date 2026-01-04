import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://formfillerbuddy.com';

export function generateSEOMetadata({
  title,
  description,
  path = '',
  image = '/assets/images/icon128.png',
  type = 'website',
}: SEOProps): Metadata {
  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}${image}`;

  return {
    title: `${title} | Form Filler Buddy`,
    description,
    keywords: [
      'form filler',
      'autofill',
      'chrome extension',
      'form automation',
      'test data generator',
      'form helper',
      'browser extension',
      'auto fill forms',
      'form filler buddy',
      'chrome form filler',
      'autofill extension',
      'form automation tool',
      'test data filler',
      'web form automation',
    ],
    authors: [{ name: 'Nazmus Sakib' }],
    creator: 'Nazmus Sakib',
    publisher: 'Nazmus Sakib',
    openGraph: {
      type,
      title: `${title} | Form Filler Buddy`,
      description,
      url,
      siteName: 'Form Filler Buddy',
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Form Filler Buddy`,
      description,
      images: [imageUrl],
      creator: '@saakeeb',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

