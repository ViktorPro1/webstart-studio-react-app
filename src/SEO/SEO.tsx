import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_INFO } from '../utils/constants';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
  const siteTitle = title ? `${title} | ${SITE_INFO.title}` : SITE_INFO.title;
  const siteDescription = description || SITE_INFO.description;
  const siteKeywords = keywords || SITE_INFO.keywords;
  const siteUrl = url || window.location.href;

  const baseUrl = 'https://web-start-studio.netlify.app';
  const rawImage = image || '/web-start-studio-og.jpg';
  const siteImage = rawImage.startsWith('http')
    ? rawImage
    : `${baseUrl}${rawImage}`;

  // JSON-LD Schema для організації
  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WebStart Studio',
    description: siteDescription,
    url: baseUrl,
    logo: `${baseUrl}/logo192.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'webstartstudio978@gmail.com',
      contactType: 'Customer Service',
      availableLanguage: ['Ukrainian', 'English']
    }
  };

  return (
    <Helmet>
      {/* Основні мета-теги */}
      <html lang="uk" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Google, WhatsApp, Viber */}
      <meta itemProp="name" content={siteTitle} />
      <meta itemProp="description" content={siteDescription} />
      <meta itemProp="image" content={siteImage} />

      {/* Open Graph (Facebook, Telegram, Viber, Messenger) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:secure_url" content={siteImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:site_name" content="WebStart Studio" />
      <meta property="og:locale" content="uk_UA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:image:alt" content={siteTitle} />

      {/* SEO & Canonical */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Ukrainian" />
      <meta name="author" content="WebStart Studio" />
      <link rel="canonical" href={siteUrl} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

export default SEO;
