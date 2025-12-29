/**
 * generate-seo.ts
 *
 * Скрипт для автоматичної генерації SEO-файлів перед деплоєм:
 * - robots.txt — керує індексацією сторінок пошуковими системами
 * - sitemap.xml — перелік всіх сторінок для пошукових систем
 *
 * Використовує:
 * - baseUrl — базова URL-адреса сайту
 * - allPages — список усіх маршрутів сайту з AppRoutes.tsx
 *
 * Процес:
 * 1. Формує robots.txt з дозволами/заборонами для ботів
 * 2. Створює sitemap.xml з priority та changefreq для кожної сторінки
 * 3. Записує файли у папку public
 *
 * Виконання:
 * - Скрипт запускається командою `ts-node scripts/generate-seo.ts` або через npm-скрипт
 */



import * as fs from 'fs';
import * as path from 'path';


const generateSEO = () => {
  console.log('🔧 Генерую SEO файли...');
  
  const baseUrl = 'https://web-start-studio.netlify.app';
  
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /client-portal
Disallow: /admin

Sitemap: ${baseUrl}/sitemap.xml

# WebStart Studio - SEO оптимізація
# Згенеровано: ${new Date().toISOString()}`;

  const allPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/for-whom', priority: '0.8', changefreq: 'monthly' },
    { path: '/technical-details', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/seo', priority: '0.9', changefreq: 'weekly' },
    { path: '/services/web-apps', priority: '0.9', changefreq: 'weekly' },
    { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'yearly' },
    { path: '/diy-vs-us', priority: '0.7', changefreq: 'monthly' },
    { path: '/platform-comparison', priority: '0.7', changefreq: 'monthly' },
    { path: '/common-mistakes', priority: '0.7', changefreq: 'monthly' },
    { path: '/faq', priority: '0.6', changefreq: 'monthly' },
    { path: '/security-tips', priority: '0.6', changefreq: 'monthly' },
    { path: '/testimonials', priority: '0.6', changefreq: 'monthly' },
    { path: '/instruction', priority: '0.6', changefreq: 'monthly' },
    { path: '/edit-instruction', priority: '0.6', changefreq: 'monthly' },
    { path: '/briefs', priority: '0.6', changefreq: 'monthly' },
    { path: '/bonus', priority: '0.5', changefreq: 'monthly' },
    { path: '/certificate-gift', priority: '0.5', changefreq: 'monthly' },
    { path: '/interactive-quiz', priority: '0.5', changefreq: 'monthly' },
    { path: '/promo', priority: '0.7', changefreq: 'monthly' },
    { path: '/webstart-lab', priority: '0.6', changefreq: 'monthly' },
    { path: '/youtube-channel', priority: '0.6', changefreq: 'monthly' },
    { path: '/canva-services', priority: '0.6', changefreq: 'monthly' },
    { path: '/pc-service', priority: '0.6', changefreq: 'monthly' },
    { path: '/poland-tax', priority: '0.6', changefreq: 'monthly' },
    { path: '/innovations', priority: '0.6', changefreq: 'monthly' },

    // Client Portal
    { path: '/client-portal', priority: '0.4', changefreq: 'monthly' },

    // Legal
    { path: '/legal/privacy-policy', priority: '0.3', changefreq: 'monthly' },
    { path: '/legal/third-party-cookies', priority: '0.3', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'monthly' },
    { path: '/terms-of-use', priority: '0.3', changefreq: 'monthly' },

    // Generators
    { path: '/generators/portfolio-text', priority: '0.5', changefreq: 'weekly' },
    { path: '/generators/project-checker', priority: '0.5', changefreq: 'weekly' },
    { path: '/generators/resume-structure', priority: '0.5', changefreq: 'weekly' },

    // Templates
    { path: '/templates/portfolio', priority: '0.5', changefreq: 'weekly' },
    { path: '/templates/resume', priority: '0.5', changefreq: 'weekly' },
    { path: '/templates/landing', priority: '0.5', changefreq: 'weekly' },

     // Services
    { path: '/services/social-media', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/animations', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/ecommerce', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/blog', priority: '0.7', changefreq: 'weekly' },
    { path: '/services/personalized-landing', priority: '0.7', changefreq: 'weekly' },

    // Blog
    { path: '/blog/landing-trends', priority: '0.5', changefreq: 'monthly' },
    { path: '/blog/portfolio-tips', priority: '0.5', changefreq: 'monthly' },
    { path: '/blog/resume-tips', priority: '0.5', changefreq: 'monthly' },

    // AI Services
    { path: '/ai-automation', priority: '0.6', changefreq: 'weekly' },
    { path: '/ai-prompting', priority: '0.6', changefreq: 'weekly' },
    { path: '/prompt-editor', priority: '0.6', changefreq: 'weekly' },
    { path: '/prompt-showcase', priority: '0.6', changefreq: 'weekly' },
    { path: '/prompt-studio', priority: '0.6', changefreq: 'weekly' },

    // Google Ads
    { path: '/google-ads/learning', priority: '0.6', changefreq: 'monthly' },
    { path: '/google-ads/calculator', priority: '0.6', changefreq: 'monthly' },
    { path: '/google-ads/generator', priority: '0.6', changefreq: 'monthly' },
    { path: '/google-ads/comparison', priority: '0.6', changefreq: 'monthly' },
    { path: '/google-ads/glossary', priority: '0.6', changefreq: 'monthly' },
    { path: '/google-ads/keywords', priority: '0.6', changefreq: 'monthly' },

    // Facebook Ads
    { path: '/facebook-ads/ad-calculator', priority: '0.6', changefreq: 'monthly' },
    { path: '/facebook-ads/target-advertising', priority: '0.6', changefreq: 'monthly' },
    { path: '/facebook-ads/target-explanation', priority: '0.6', changefreq: 'monthly' },
    { path: '/facebook-ads/utm-generator', priority: '0.6', changefreq: 'monthly' },

    // International
    { path: '/international/en', priority: '0.4', changefreq: 'monthly' },
    { path: '/international/fr', priority: '0.4', changefreq: 'monthly' },
    { path: '/international/pl', priority: '0.4', changefreq: 'monthly' },
    { path: '/international/cz', priority: '0.4', changefreq: 'monthly' },
    { path: '/international/sv', priority: '0.4', changefreq: 'monthly' },
    { path: '/international/de', priority: '0.4', changefreq: 'monthly' },

    // Assistant
    { path: '/assistant', priority: '0.5', changefreq: 'monthly' },
  ];


  const today = new Date().toISOString().split('T')[0];
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  const publicDir = path.join(__dirname, '../public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(publicDir, 'robots.txt'),
    robotsTxt,
    'utf8'
  );

  fs.writeFileSync(
    path.join(publicDir, 'sitemap.xml'),
    sitemapXml,
    'utf8'
  );

  console.log(`✅ Готово! Створено:
  - ${publicDir}/robots.txt
  - ${publicDir}/sitemap.xml
  - ${allPages.length} сторінок в sitemap`);
};

generateSEO();