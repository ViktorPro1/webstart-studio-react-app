// src/SEO/utils/schema-generator.ts
// Варіант 1: Оголосити тип локально (якщо не вдається імпортувати)
interface PageSEO {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  noindex?: boolean;
  schemaType?: string;
  ogImage?: string;
}

// Варіант 2: Якщо хочете імпортувати, спробуйте абсолютний шлях
// import type { PageSEO } from '@/SEO/seoData';
// або
// import type { PageSEO } from '../../SEO/seoData';

export interface SchemaConfig {
  siteUrl: string;
  siteName: string;
  siteLogo: string;
  siteDescription: string;
  contactEmail?: string;
  contactPhone?: string;
  socialProfiles?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate: string;
  founders: Array<{
    '@type': string;
    name: string;
  }>;
  address: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
  };
  contactPoint?: {
    '@type': string;
    contactType: string;
    availableLanguage: string[];
    email?: string;
    telephone?: string;
  };
  sameAs?: string[];
}

interface HowToSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  step: Array<{
    '@type': string;
    position: number;
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
  totalTime?: string;
  estimatedCost?: {
    '@type': string;
    currency: string;
    value: string;
  };
}

/**
 * Генерує базову Schema.org розмітку для сайту
 */
export const generateWebsiteSchema = (config: SchemaConfig) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': config.siteName,
    'url': config.siteUrl,
    'description': config.siteDescription,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${config.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    'inLanguage': 'uk-UA'
  };
};

/**
 * Генерує Schema.org для організації
 */
export const generateOrganizationSchema = (config: SchemaConfig): OrganizationSchema => {
  const organization: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': config.siteName,
    'url': config.siteUrl,
    'logo': config.siteLogo,
    'description': config.siteDescription,
    'foundingDate': '2023-01-01',
    'founders': [{
      '@type': 'Person',
      'name': 'WebStart Studio Team'
    }],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'UA',
      'addressLocality': 'Київ'
    }
  };

  // Додаємо контакти якщо є
  if (config.contactEmail || config.contactPhone) {
    organization.contactPoint = {
      '@type': 'ContactPoint',
      'contactType': 'customer service',
      'availableLanguage': ['Ukrainian', 'English']
    };

    if (config.contactEmail) {
      organization.contactPoint.email = config.contactEmail;
    }
    if (config.contactPhone) {
      organization.contactPoint.telephone = config.contactPhone;
    }
  }

  // Додаємо соцмережі
  if (config.socialProfiles) {
    organization.sameAs = Object.values(config.socialProfiles).filter(Boolean) as string[];
  }

  return organization;
};

/**
 * Генерує Schema.org для конкретної сторінки
 */
export const generatePageSchema = (pageSEO: PageSEO, config: SchemaConfig) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': pageSEO.schemaType || 'WebPage',
    'name': pageSEO.title,
    'description': pageSEO.description,
    'url': `${config.siteUrl}${pageSEO.path}`,
    'inLanguage': 'uk-UA',
    'isPartOf': {
      '@type': 'WebSite',
      'name': config.siteName,
      'url': config.siteUrl
    }
  };

  // Додаткові поля залежно від типу сторінки
  switch (pageSEO.schemaType) {
    case 'LocalBusiness':
    case 'ProfessionalService':
      return {
        ...baseSchema,
        '@type': 'ProfessionalService',
        'serviceType': pageSEO.keywords[0],
        'areaServed': {
          '@type': 'Country',
          'name': 'Україна'
        },
        'openingHours': 'Mo-Fr 09:00-18:00',
        'priceRange': '$$'
      };

    case 'Service':
      return {
        ...baseSchema,
        '@type': 'Service',
        'provider': {
          '@type': 'Organization',
          'name': config.siteName
        },
        'serviceType': pageSEO.keywords.join(', ')
      };

    case 'Product':
      return {
        ...baseSchema,
        '@type': 'Product',
        'offers': {
          '@type': 'Offer',
          'availability': 'https://schema.org/InStock',
          'priceCurrency': 'UAH'
        }
      };

    case 'Article':
    case 'BlogPosting':
      return {
        ...baseSchema,
        '@type': 'Article',
        'headline': pageSEO.title,
        'author': {
          '@type': 'Organization',
          'name': config.siteName
        },
        'publisher': {
          '@type': 'Organization',
          'name': config.siteName,
          'logo': {
            '@type': 'ImageObject',
            'url': config.siteLogo
          }
        },
        'datePublished': new Date().toISOString(),
        'dateModified': new Date().toISOString()
      };

    case 'FAQPage':
      return {
        ...baseSchema,
        '@type': 'FAQPage',
        'mainEntity': [] // Тут будуть питання-відповіді
      };

    case 'Course':
      return {
        ...baseSchema,
        '@type': 'Course',
        'provider': {
          '@type': 'Organization',
          'name': config.siteName
        },
        'hasCourseInstance': {
          '@type': 'CourseInstance',
          'courseMode': 'online'
        }
      };

    default:
      return baseSchema;
  }
};

/**
 * Генерує BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (breadcrumbs: Array<{
  name: string;
  url: string;
}>) => {
  const items = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items
  };
};

/**
 * Генерує FAQ schema
 */
export const generateFAQSchema = (questions: Array<{
  question: string;
  answer: string;
}>) => {
  const items = questions.map(item => ({
    '@type': 'Question',
    'name': item.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': item.answer
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items
  };
};

/**
 * Генерує HowTo schema (для інструкцій)
 */
export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
  totalTime?: string;
  estimatedCost?: string;
}): HowToSchema => {
  const steps = howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    'position': index + 1,
    'name': step.name,
    'text': step.text,
    ...(step.image && { image: step.image }),
    ...(step.url && { url: step.url })
  }));

  const schema: HowToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': howTo.name,
    'description': howTo.description,
    'step': steps
  };

  if (howTo.totalTime) {
    schema.totalTime = howTo.totalTime;
  }

  if (howTo.estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      'currency': 'UAH',
      'value': howTo.estimatedCost
    };
  }

  return schema;
};

/**
 * Утиліта для валідації JSON-LD
 */
export const validateSchema = (schema: unknown): boolean => {
  try {
    const jsonStr = JSON.stringify(schema);
    
    // Базова перевірка
    const hasContext = jsonStr.includes('"@context":"https://schema.org"');
    const hasType = jsonStr.includes('"@type":');
    
    // Перевірка розміру (не більше 50KB)
    const sizeInBytes = new Blob([jsonStr]).size;
    const isValidSize = sizeInBytes < 50000; // 50KB
    
    return hasContext && hasType && isValidSize;
  } catch (error) {
    console.error('Помилка валідації schema:', error);
    return false;
  }
};