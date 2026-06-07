import Link from "next/link";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/site/contact";
import { homeContent } from "@/content/site/home";
import { specializationsContent } from "@/content/site/specializations";
import { whatsappClickAttributes } from "@/lib/analytics/actions";
import { formatDisplayText } from "@/lib/utils/formatDisplayText";

export function ServicesOverview() {
  return (
    <Section className="bg-white/54">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
            Serviços
          </p>
          <h2 className="mt-4 text-[clamp(2.05rem,8.5vw,2.65rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-navy)] sm:text-[2.85rem] lg:text-[3.25rem]">
            {specializationsContent.title}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg">
            {homeContent.servicesIntro}
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.services.map((service, index) => (
            <Link className="min-w-0" href={service.href} key={service.href}>
              <Card className="group relative h-full min-h-[13.5rem] min-w-0 overflow-hidden p-6 transition hover:-translate-y-1 hover:border-[var(--color-accent-soft)] sm:min-h-[15rem] sm:p-8">
                <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />
                <span className="mb-6 flex items-center justify-between">
                  <span className="block h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_7px_rgba(201,161,91,0.12)]" />
                  <span className="text-sm font-semibold text-[rgba(13,43,82,0.36)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="text-[1.45rem] font-semibold leading-tight tracking-tight text-[var(--color-navy)] sm:text-[1.35rem]">
                  {service.label}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-text)] sm:mt-5 sm:leading-7">
                  {service.description}
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
              <h3 className="max-w-sm text-[1.6rem] font-semibold leading-tight tracking-tight text-white sm:text-[1.5rem]">
                Seu bem-estar emocional merece atenção.
              </h3>
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
                {...whatsappClickAttributes("services_grid_cta")}
              >
                Agendar Consulta
              </LinkButton>
            </div>
          </Card>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {specializationsContent.items.map((item) => (
            <Card className="relative min-h-[11rem] overflow-hidden p-6 sm:min-h-[12.5rem] sm:p-8" key={item}>
              <span className="absolute right-6 top-6 h-10 w-10 rounded-full border border-[rgba(201,161,91,0.18)]" />
              <span className="mb-5 block h-px w-12 bg-[var(--color-accent)]" />
              <p className="text-base leading-8 text-[var(--color-text)]">
                {formatDisplayText(item)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
