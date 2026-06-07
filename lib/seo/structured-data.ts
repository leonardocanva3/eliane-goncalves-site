import { siteConfig } from "@/lib/constants/site";

const address = {
  "@type": "PostalAddress",
  streetAddress: "Via Veneto, 1323 Santa Felicidade",
  addressLocality: "Curitiba",
  addressRegion: "PR",
  addressCountry: "BR",
};

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.professionalTitle,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/images/eliane/eliane-hero.png`,
    worksFor: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/eliane/eliane-hero.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address,
    areaServed: ["Curitiba", "Brasil"],
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.professionalTitle,
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function getFaqSchema(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
