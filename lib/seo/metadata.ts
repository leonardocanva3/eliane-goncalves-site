import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
  image,
}: MetadataInput = {}): Metadata {
  const absoluteUrl = new URL(path, siteConfig.url).toString();
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.professionalTitle}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      "Eliane Gonçalves",
      "psicóloga",
      "psicoterapia online",
      "psicologia infantil",
      "psicologia perinatal",
      "Terapia Cognitivo Comportamental",
      "Curitiba",
    ],
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image?.url ?? "/images/og/default.png",
          width: image?.width ?? 1200,
          height: image?.height ?? 630,
          alt: image?.alt ?? `${siteConfig.name} - ${siteConfig.professionalTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image?.url ?? "/images/og/default.png"],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
