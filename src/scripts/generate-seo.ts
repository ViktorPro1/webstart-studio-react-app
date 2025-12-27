// scripts/generate-seo.ts
import * as fs from 'fs';
import * as path from 'path';

/**
 * Простий скрипт для генерації sitemap.xml та robots.txt
 * Використовується перед деплоєм на Netlify
 */
const generateSEO = () => {
  console.log('🔧 Генерую SEO файли...');
  
  const baseUrl = 'https://web-start-studio.netlify.app';
  
  // 1. Створюємо robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /client-portal
Disallow: /admin

Sitemap: ${baseUrl}/sitemap.xml

# WebStart Studio - SEO оптимізація
# Згенеровано: ${new Date().toISOString()}`;

  // 2. Список всіх сторінок (встав свої реальні шляхи з AppRoutes.tsx)
  const allPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/for-whom', priority: '0.8', changefreq: 'monthly' },
    { path: '/technical-details', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/seo', priority: '0.9', changefreq: 'weekly' },
    { path: '/services/web-apps', priority: '0.9', changefreq: 'weekly' },
    { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'yearly' },
    // ... додай інші сторінки з твого AppRoutes.tsx
  ];

  // 3. Генеруємо sitemap.xml
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

  // 4. Записуємо файли в папку public
  const publicDir = path.join(__dirname, '../public');
  
  // Переконуємось що папка public існує
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Записуємо robots.txt
  fs.writeFileSync(
    path.join(publicDir, 'robots.txt'),
    robotsTxt,
    'utf8'
  );

  // Записуємо sitemap.xml
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

// Виконуємо скрипт
generateSEO();