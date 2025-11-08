import type { MetadataRoute } from 'next';
import { AppConfig } from '@/utils/AppConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teg.lv';

  // Define all pages with their priorities
  const pages = [
    { path: '', priority: 1.0 }, // Homepage
    { path: '/services', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/appointments', priority: 0.9 },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for all locales
  AppConfig.locales.forEach((locale) => {
    pages.forEach(({ path, priority }) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'daily' : 'weekly',
        priority,
        alternates: {
          languages: Object.fromEntries(
            AppConfig.locales.map(loc => [loc, `${baseUrl}/${loc}${path}`]),
          ),
        },
      });
    });
  });

  return sitemap;
}
