import { siteConfig } from "@/lib/constants/site";

export function getCanonicalUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
