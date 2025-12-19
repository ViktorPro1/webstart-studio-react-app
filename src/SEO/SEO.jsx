import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_INFO } from '../utils/constants';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title ? `${title} | ${SITE_INFO.title}` : SITE_INFO.title;
  const siteDescription = description || SITE_INFO.description;
  const siteKeywords = keywords || SITE_INFO.keywords;
  const siteUrl = url || SITE_INFO.url;

  const baseUrl = 'https://web-start-studio.netlify.app';
  // Використовуємо вашу картинку webp
  const rawImage = image || '/web-start-studio-og.webp';
  const siteImage = rawImage.startsWith('http')
    ? rawImage
    : `${baseUrl}${rawImage}`;

  return (
    <Helmet>
      {/* Основні мета-теги */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Google, WhatsApp, Viber */}
      <meta itemprop="name" content={siteTitle} />
      <meta itemprop="description" content={siteDescription} />
      <meta itemprop="image" content={siteImage} />

      {/* Open Graph (Facebook, Telegram, Viber, Messenger) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:secure_url" content={siteImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="WebStart Studio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {/* SEO & Canonical */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Ukrainian" />
      <meta name="author" content="WebStart Studio" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;
