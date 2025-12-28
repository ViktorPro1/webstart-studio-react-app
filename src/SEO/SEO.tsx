// src/seo/SEO.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_INFO } from '../utils/constants';
import { getSEOData } from './seoData';

interface SEOProps {
  path?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  schemaType?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  path, 
  title, 
  description, 
  keywords, 
  image, 
  schemaType 
}) => {
  const baseUrl = 'https://web-start-studio.netlify.app';
  
  let finalSeo;
  
  if (path) {
    const seoData = getSEOData(path);
    finalSeo = {
      title: seoData.title,
      description: seoData.description,
      keywords: Array.isArray(seoData.keywords) 
        ? seoData.keywords.join(', ') 
        : seoData.keywords,
      url: `${baseUrl}${path}`,
      schemaType: seoData.schemaType || 'WebPage',
      ogImage: seoData.ogImage
    };
  } else {
    finalSeo = {
      title: title ? `${title} | ${SITE_INFO.title}` : SITE_INFO.title,
      description: description || SITE_INFO.description,
      keywords: keywords || SITE_INFO.keywords,
      url: SITE_INFO.url,
      schemaType: schemaType || 'WebPage'
    };
  }

  const rawImage = image || finalSeo.ogImage || '/web-start-studio-og.jpg';
  const siteImage = rawImage.startsWith('http')
    ? rawImage
    : `${baseUrl}${rawImage}`;

  // Динамічна Schema.org розмітка
  const getSchemaMarkup = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': finalSeo.schemaType || 'WebPage',
      name: finalSeo.title,
      description: finalSeo.description,
      url: finalSeo.url
    };

    // 👇 ВИПРАВЛЕНО ТУТ
    if (finalSeo.schemaType === 'Organization') {  // 👈 ЗМІНЕНО
      return {
        ...baseSchema,
        '@type': 'Organization',  // 👈 ЗМІНЕНО
        name: 'WebStart Studio',
        url: baseUrl,
        telephone: '+380661391932',
        email: 'webstartstudio978@gmail.com',
        // ❌ БЕЗ address
        areaServed: [
          { '@type': 'Country', name: 'Україна' }
        ]
      };
    }

    return baseSchema;
  };

  return (
    <Helmet>
      <html lang="uk" />
      <title>{finalSeo.title}</title>
      <meta name="description" content={finalSeo.description} />
      <meta name="keywords" content={finalSeo.keywords} />
      <link rel="canonical" href={finalSeo.url} />

      {/* Open Graph */}
      <meta property="og:title" content={finalSeo.title} />
      <meta property="og:description" content={finalSeo.description} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={finalSeo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="uk_UA" />

      {/* Twitter */}
      <meta name="twitter:title" content={finalSeo.title} />
      <meta name="twitter:description" content={finalSeo.description} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(getSchemaMarkup())}
      </script>
    </Helmet>
  );
};

export default SEO;