// src/seo/SEO.tsx (виправлений)
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_INFO } from '../utils/constants';
import { getSEOData } from './seoData'; // 👈 Виправлений імпорт

interface SEOProps {
  path?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  schemaType?: string;
}

interface FinalSEO {
  title: string;
  description: string;
  keywords: string;
  url: string;
  schemaType: string;
  ogImage?: string;
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
  
  // Якщо передали path - використовуємо нову систему
  let finalSeo: FinalSEO;
  
  if (path) {
    const seoData = getSEOData(path); // Отримуємо дані з централізованої системи
    
    // Перетворюємо PageSEO в FinalSEO
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
    // Стара система для сумісності
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

    // Додаткові поля залежно від типу
    if (finalSeo.schemaType === 'LocalBusiness') {
      return {
        ...baseSchema,
        '@type': 'LocalBusiness',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'UA'
        },
        telephone: '+380661391932'
      };
    }

    return baseSchema;
  };

  return (
    <Helmet>
      {/* Основні мета-теги */}
      <html lang="uk" />
      <title>{finalSeo.title}</title>
      <meta name="description" content={finalSeo.description} />
      <meta name="keywords" content={finalSeo.keywords} />

      {/* Canonical URL */}
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
