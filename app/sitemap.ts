import type { MetadataRoute } from "next";
import { allPublicRoutes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPublicRoutes.map((route) => ({
    url: new URL(route.href, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority: route.href === "/" ? 1 : 0.7,
  }));
}
