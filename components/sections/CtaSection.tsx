import Image from "next/image";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/site/contact";
import { onlineCtaContent } from "@/content/site/online-services";
import { whatsappClickAttributes } from "@/lib/analytics/actions";

export function CtaSection() {
  return (
    <Section className="pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[var(--color-navy)] text-white shadow-[0_30px_84px_rgba(13,43,82,0.14)]">
          <BrandOrnament className="absolute left-[45%] top-7 hidden h-28 w-24 opacity-[0.18] lg:block" />
          <span className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
          <div className="grid gap-0 lg:grid-cols-[1fr_18rem] lg:items-stretch">
            <div className="px-5 py-10 sm:px-10 sm:py-12 lg:px-14">
              <div>
                <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-accent)] sm:tracking-[0.09em]">
                  Agendamento
                </p>
                <h2 className="mt-4 max-w-3xl text-[clamp(1.95rem,7.8vw,2.45rem)] font-semibold leading-[1.12] tracking-tight sm:text-4xl">
                  {onlineCtaContent.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/82 sm:leading-7">
                  {onlineCtaContent.description}
                </p>
              </div>
            <LinkButton
              aria-label="Agendar consulta pelo WhatsApp"
              className="mt-8 bg-[var(--color-accent)] text-[var(--color-navy)] hover:bg-[#d8b470]"
              href={contactContent.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
              {...whatsappClickAttributes("global_cta")}
            >
              Agendar pelo WhatsApp
            </LinkButton>
            </div>
            <div className="relative hidden min-h-[22rem] bg-[var(--color-surface)] lg:block">
              <Image
                alt="Dra. Eliane Gonçalves"
                className="object-cover object-center"
                fill
                sizes="18rem"
                src="/images/eliane/eliane-office-chair.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
