import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_INFO } from '../utils/constants';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title ? `${title} | ${SITE_INFO.title}` : SITE_INFO.title;
  const siteDescription = description || SITE_INFO.description;
  const siteImage = image || SITE_INFO.image;
  const siteUrl = url || SITE_INFO.url;
  const siteKeywords = keywords || SITE_INFO.keywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Ukrainian" />
      <meta name="author" content="WebStart Studio" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;
