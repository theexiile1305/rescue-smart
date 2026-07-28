import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site-config";
import { staticRoutes } from "@/lib/routes";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/ratgeber/${article.slug}`,
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
