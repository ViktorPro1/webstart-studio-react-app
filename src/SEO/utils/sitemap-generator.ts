import { SEO_CONFIG } from '../seoData';
import type { PageSEO } from '../seoData'; // type-only import
import { SITE_INFO } from '../../utils/constants';

/**
 * Генерує XML для sitemap
 */
export const generateSitemapXML = (): string => {
  const baseUrl = SITE_INFO.url || 'https://web-start-studio.netlify.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Фільтруємо сторінки, які потрібно індексувати
  const indexablePages = Object.values(SEO_CONFIG).filter((page: PageSEO) => 
    !page.noindex && page.priority > 0
  );

  const urlEntries = indexablePages.map((page: PageSEO) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries}
</urlset>`;
};

/**
 * Генерує sitemap для Google News (якщо є новинні статті)
 */
export const generateNewsSitemap = (articles: Array<{
  url: string;
  title: string;
  publicationDate: string;
  language: string;
}>) => {
  const baseUrl = SITE_INFO.url || 'https://web-start-studio.netlify.app';
  
  const newsEntries = articles.map(article => `
  <news:news>
    <news:publication>
      <news:name>WebStart Studio Blog</news:name>
      <news:language>${article.language}</news:language>
    </news:publication>
    <news:publication_date>${article.publicationDate}</news:publication_date>
    <news:title>${article.title}</news:title>
  </news:news>
  <loc>${baseUrl}${article.url}</loc>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsEntries}
</urlset>`;
};

/**
 * Перевіряє чи існує sitemap та його валідність
 */
export const validateSitemap = (xmlContent: string): boolean => {
  try {
    // Базова перевірка структури
    const hasUrlset = xmlContent.includes('<urlset');
    const hasUrls = xmlContent.includes('<url>');
    const hasProperClosing = xmlContent.includes('</urlset>');
    
    return hasUrlset && hasUrls && hasProperClosing;
  } catch (error) {
    console.error('Помилка валідації sitemap:', error);
    return false;
  }
};

/**
 * Допоміжна функція для отримання sitemap XML як рядка
 */
export const getSitemapAsString = (): string => {
  return generateSitemapXML();
};