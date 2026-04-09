import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://vmwebsolutions.in';

const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/hyderabad-web-design', priority: 0.9, changefreq: 'weekly' },
  { path: '/gym-website-developer-india', priority: 0.9, changefreq: 'weekly' },
  { path: '/coaching-institute-website-development', priority: 0.9, changefreq: 'weekly' },
  { path: '/real-estate-website-design-india', priority: 0.9, changefreq: 'weekly' },
  { path: '/services', priority: 0.8, changefreq: 'monthly' },
  { path: '/portfolio', priority: 0.8, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { path: '/testimonials', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.7, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.7, changefreq: 'yearly' },
];

/**
 * Advanced Scale Strategy: 
 * As the site expands to 50+ or 500+ pages, dynamic routes are fetched here 
 * (e.g., from an API, Headless CMS, or Markdown directory scanner).
 * If the page count exceeds 50,000, logic branches should split into a Sitemap Index.
 */
async function getDynamicBlogRoutes() {
  // Placeholder for future blog implementation
  return [];
}

async function generateSitemap() {
  console.log('Running SEO Sitemap Generator...');
  try {
    const dynamicRoutes = await getDynamicBlogRoutes();
    const allRoutes = [...staticRoutes, ...dynamicRoutes];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    // Injected image-sitemap namespace for future advanced image indexing capabilities
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

    const lastmod = new Date().toISOString().split('T')[0];

    for (const route of allRoutes) {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority.toFixed(1)}</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += `</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    await fs.mkdir(publicDir, { recursive: true });

    await fs.writeFile(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
    console.log('✅ Successfully compiled sitemap.xml into public/ directory.');
  } catch (error) {
    console.error('❌ Sitemap compilation failed:', error);
    process.exit(1);
  }
}

generateSitemap();
