import Image from "next/image";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { WhatsappCta } from "@/components/sections/WhatsappCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/site/about";
import { onlineCtaContent } from "@/content/site/online-services";
import { specializationsContent } from "@/content/site/specializations";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = buildMetadata({
  title: "Sobre",
  description: aboutContent.description,
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
        ])}
      />
      <Section>
        <Container>
          <div className="relative grid gap-8 overflow-hidden rounded-[28px] border border-white/80 bg-white/60 p-5 shadow-[var(--shadow-soft)] backdrop-blur-2xl sm:rounded-[32px] sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:p-12">
            <BrandOrnament
              className="absolute -right-4 top-5 opacity-60"
              variant="monogram"
            />
            <div>
              <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
                Sobre
              </p>
              <h1 className="mt-5 text-[clamp(2.2rem,9.4vw,2.9rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[3.3rem]">
                {aboutContent.title}
              </h1>
              <p className="mt-6 text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:mt-8 sm:text-lg">
                {aboutContent.description}
              </p>
            </div>
            <div className="relative min-h-[22rem] overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[var(--color-surface-muted)] shadow-[var(--shadow-soft)] before:absolute before:inset-3 before:z-10 before:rounded-[22px] before:border before:border-[rgba(201,161,91,0.28)] before:content-[''] sm:min-h-[24rem] sm:rounded-[28px]">
              <BrandOrnament className="absolute right-5 top-5 z-10 h-24 w-20 opacity-[0.24]" />
              <Image
                alt="Dra. Eliane Gonçalves"
                className="scale-[1.28] object-contain object-bottom"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                src="/images/eliane/eliane-portrait-seated.png"
              />
            </div>
          </div>
        </Container>
      </Section>
      <EditorialSection
        eyebrow="Especializações"
        title={specializationsContent.title}
        items={specializationsContent.items}
      />
      <ReviewsSection />
      <WhatsappCta
        title={onlineCtaContent.title}
        description={onlineCtaContent.description}
      />
    </>
  );
}
