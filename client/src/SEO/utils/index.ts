// Sitemap утиліти
export {
  generateSitemapXML,
  generateNewsSitemap,
  validateSitemap
} from './sitemap-generator';

// Robots утиліти
export {
  generateRobotsTxt,
  generateRobotsMeta,
  validateRobotsTxt,
  getRobotsConfig
} from './robots-generator';

// Schema утиліти
export {
  generateWebsiteSchema,
  generateOrganizationSchema,
  generatePageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateHowToSchema,
  validateSchema,
  type SchemaConfig
} from './schema-generator';

/**
 * Ініціалізація всіх SEO файлів
 * Використовувати тільки в Node.js середовищі під час збірки
 */
export const initializeSEOFiles = async (): Promise<void> => {
  if (typeof window === 'undefined') {
    try {
      const fs = await import('fs');
      const path = await import('path');
      
      // Генеруємо та зберігаємо sitemap
      const { generateSitemapXML } = await import('./sitemap-generator');
      const sitemapContent = generateSitemapXML();
      const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
      fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
      console.log('✅ Sitemap.xml створено');
      
      // Генеруємо та зберігаємо robots.txt
      const { generateRobotsTxt } = await import('./robots-generator');
      const robotsContent = generateRobotsTxt();
      const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
      fs.writeFileSync(robotsPath, robotsContent, 'utf8');
      console.log('✅ Robots.txt створено');
      
      console.log('✅ SEO файли успішно ініціалізовані');
    } catch (error) {
      console.error('Помилка ініціалізації SEO файлів:', error);
    }
  }
};