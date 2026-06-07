import Image from "next/image";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { WhatsappCta } from "@/components/sections/WhatsappCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import type { ServiceContent } from "@/content/services/types";
import { onlineCtaContent } from "@/content/site/online-services";
import {
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo/structured-data";
import { formatDisplayText } from "@/lib/utils/formatDisplayText";

const serviceImages: Record<string, { src: string; alt: string; fit: string }> = {
  "psicologia-infantil": {
    src: "/images/eliane/eliane-child-session.jpg",
    alt: "Dra. Eliane Gonçalves em atendimento infantil",
    fit: "object-cover",
  },
  "psicologia-perinatal": {
    src: "/images/eliane/eliane-portrait-yellow.png",
    alt: "Dra. Eliane Gonçalves",
    fit: "scale-[1.2] object-contain object-bottom",
  },
  "coaching-psicologico": {
    src: "/images/eliane/eliane-portrait-seated.png",
    alt: "Dra. Eliane Gonçalves",
    fit: "scale-[1.18] object-contain object-bottom",
  },
  "analise-comportamental": {
    src: "/images/eliane/eliane-office-chair.png",
    alt: "Dra. Eliane Gonçalves",
    fit: "object-cover object-center",
  },
  "psicoterapia-online": {
    src: "/images/eliane/eliane-hero.png",
    alt: "Dra. Eliane Gonçalves",
    fit: "scale-[1.24] object-contain object-bottom",
  },
};

export function ServicePreparedPage({ service }: { service: ServiceContent }) {
  const image = serviceImages[service.slug];
  const faqItems =
    service.sections
      ?.filter((section) => section.title && (section.description || section.lead))
      .map((section) => ({
        question: section.title as string,
        answer: section.description ?? section.lead ?? "",
      })) ?? [];

  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: service.title, path: `/${service.slug}` },
          ]),
          ...(faqItems.length >= 2 ? [getFaqSchema(faqItems)] : []),
        ]}
      />
      <Section>
        <Container>
          <div className="relative grid gap-8 overflow-hidden rounded-[28px] border border-white/80 bg-white/60 p-5 shadow-[var(--shadow-soft)] backdrop-blur-2xl sm:rounded-[32px] sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:p-12">
            <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-[rgba(201,161,91,0.10)] blur-3xl" />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
                {service.eyebrow}
              </p>
              <h1 className="mt-5 text-[clamp(2.18rem,9.4vw,2.9rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[3.3rem]">
                {formatDisplayText(service.title)}
              </h1>
              {service.subtitle ? (
                <p className="mt-5 text-[1.0625rem] font-medium leading-8 text-[var(--color-brand-blue)] sm:text-lg">
                  {service.subtitle}
                </p>
              ) : null}
              <p className="mt-6 text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:mt-8 sm:text-lg">
                {service.summary}
              </p>
            </div>
            {image ? (
              <div className="relative min-h-[22rem] overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[var(--color-surface-muted)] shadow-[var(--shadow-soft)] sm:min-h-[26rem] sm:rounded-[28px]">
                <Image
                  alt={image.alt}
                  className={image.fit}
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  src={image.src}
                />
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      {service.sections?.map((section, index) => (
        <EditorialSection
          description={section.description}
          eyebrow={index === 0 ? service.title : undefined}
          items={section.items}
          key={`${service.slug}-${section.title ?? index}`}
          subtitle={section.lead}
          title={section.title ?? service.title}
          tone={index % 2 === 0 ? "light" : "navy"}
        />
      ))}

      <WhatsappCta
        title={onlineCtaContent.title}
        description={onlineCtaContent.description}
      />
    </>
  );
}
