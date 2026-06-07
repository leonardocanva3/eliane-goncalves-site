import Link from "next/link";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { WhatsappCta } from "@/components/sections/WhatsappCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { servicesContent } from "@/content/services";
import { contactContent } from "@/content/site/contact";
import {
  onlineAdvantagesContent,
  onlineAudienceContent,
  onlineCtaContent,
  onlineProcessContent,
  onlineServicesContent,
} from "@/content/site/online-services";
import { whatsappClickAttributes } from "@/lib/analytics/actions";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/seo/structured-data";

export const metadata = buildMetadata({
  title: "Servicos",
  description: onlineServicesContent.description,
  path: "/servicos",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Serviços", path: "/servicos" },
          ]),
          getFaqSchema(
            onlineProcessContent.items.map((item) => {
              const [question, ...answer] = item.split(" – ");
              return {
                question,
                answer: answer.join(" – ") || item,
              };
            }),
          ),
        ]}
      />
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
              {onlineServicesContent.title}
            </p>
            <h1 className="mt-4 text-[clamp(2.2rem,9.4vw,2.9rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[3.3rem]">
              {onlineServicesContent.subtitle}
            </h1>
            <p className="mt-5 text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg">
              {onlineServicesContent.description}
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {servicesContent.map((service, index) => (
              <Link className="min-w-0" href={`/${service.slug}`} key={service.slug}>
                <Card className="relative h-full min-h-[14rem] min-w-0 overflow-hidden p-6 transition hover:-translate-y-1 hover:border-[var(--color-accent-soft)] sm:min-h-[16rem] sm:p-8">
                  <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />
                  <span className="mb-6 flex items-center justify-between">
                    <span className="block h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_7px_rgba(201,161,91,0.12)]" />
                    <span className="text-sm font-semibold text-[rgba(13,43,82,0.36)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-4 text-[1.55rem] font-semibold leading-tight tracking-tight text-[var(--color-navy)] sm:text-[1.65rem]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-text)] sm:mt-5 sm:leading-7">
                    {service.summary}
                  </p>
                </Card>
              </Link>
            ))}
            <Card className="relative flex h-full min-h-[20rem] min-w-0 flex-col justify-center overflow-hidden border-[rgba(201,161,91,0.36)] bg-[var(--color-navy)] p-6 text-white shadow-[0_24px_70px_rgba(13,43,82,0.16)] hover:border-[var(--color-accent)] hover:bg-[var(--color-navy)] sm:min-h-[22rem] sm:p-8">
              <span className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full border border-[rgba(201,161,91,0.28)]" />
              <span className="absolute bottom-0 left-8 h-px w-28 bg-[var(--color-accent)]" />
              <BrandOrnament className="absolute right-6 top-6 h-20 w-16 opacity-[0.18]" />
              <div className="relative z-10 flex min-h-full flex-col justify-center">
                <span className="mb-6 block h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_7px_rgba(201,161,91,0.18)]" />
                <h2 className="max-w-sm text-[1.65rem] font-semibold leading-tight tracking-tight text-white">
                  Seu bem-estar emocional merece atenção.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/86">
                  Buscar ajuda psicológica é um ato de cuidado consigo mesmo. Estou aqui para acolher sua história, compreender suas necessidades e caminhar ao seu lado com ética, respeito e profissionalismo.
                </p>
                <span className="mt-7 h-px w-16 bg-[var(--color-accent)]" />
                <LinkButton
                  aria-label="Agendar consulta pelo WhatsApp"
                  className="mt-8 w-full bg-[var(--color-accent)] text-[var(--color-navy)] hover:bg-[#d8b470]"
                  href={contactContent.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  {...whatsappClickAttributes("services_page_grid_cta")}
                >
                  Agendar Consulta
                </LinkButton>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
      <EditorialSection
        title={onlineAdvantagesContent.title}
        items={onlineAdvantagesContent.items}
      />
      <EditorialSection
        title={onlineAudienceContent.title}
        description={onlineAudienceContent.description}
        items={onlineAudienceContent.items}
        tone="navy"
      />
      <EditorialSection
        title={onlineProcessContent.title}
        items={onlineProcessContent.items}
      />
      <WhatsappCta
        title={onlineCtaContent.title}
        description={onlineCtaContent.description}
      />
    </>
  );
}
