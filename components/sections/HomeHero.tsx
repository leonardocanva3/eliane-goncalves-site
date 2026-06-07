import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { homeContent } from "@/content/site/home";
import { contactContent } from "@/content/site/contact";
import { whatsappClickAttributes } from "@/lib/analytics/actions";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[var(--color-surface-muted)] opacity-70" />
      <BrandOrnament className="animate-ornament-float absolute right-[8%] top-24 -z-10 hidden h-36 w-32 opacity-20 lg:block" />
      <Container className="grid gap-9 py-9 sm:py-14 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-soft-rise">
          <Badge>{homeContent.eyebrow}</Badge>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
          <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,10vw,2.9rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[3.05rem] lg:text-[3.25rem] xl:text-[3.65rem]">
            {homeContent.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.0625rem] font-medium leading-8 text-[var(--color-brand-blue)] sm:text-xl">
            {homeContent.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:text-lg">
            {homeContent.description}
          </p>
          <p className="mt-4 text-[1.0625rem] font-semibold leading-7 text-[var(--color-navy)] sm:text-lg">
            {homeContent.closing}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <LinkButton
              aria-label="Agendar consulta pelo WhatsApp"
              href={contactContent.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
              {...whatsappClickAttributes("home_hero")}
            >
              {homeContent.primaryCta}
            </LinkButton>
            <LinkButton href="/servicos" variant="secondary">
              {homeContent.secondaryCta}
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] sm:max-w-[38rem] lg:max-w-none">
          <div className="absolute -left-8 top-16 h-40 w-40 rounded-full bg-[rgba(201,161,91,0.14)] blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-64 w-64 rounded-full bg-[rgba(13,43,82,0.08)] blur-3xl" />
          <div className="absolute -right-4 top-7 z-10 hidden h-20 w-20 rounded-full border border-[rgba(201,161,91,0.34)] bg-white/62 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:block">
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]" />
          </div>
          <div className="relative rounded-[32px] border border-white/80 bg-white/50 p-2 shadow-[0_36px_96px_rgba(13,43,82,0.09)] backdrop-blur-2xl before:absolute before:-left-3 before:top-12 before:h-28 before:w-px before:bg-[var(--color-accent)] before:content-['']">
            <div
              className="relative aspect-[4/5.15] overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-[var(--color-surface-muted)] sm:aspect-[4/5] lg:aspect-[0.92/1]"
            >
              <BrandOrnament className="absolute right-6 top-8 z-10 h-28 w-24 opacity-20" />
              <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-full bg-white/60 blur-2xl" />
              <Image
                alt="Dra. Eliane Gonçalves"
                className="scale-[1.14] object-contain object-bottom px-0 pt-3 drop-shadow-[0_28px_44px_rgba(13,43,82,0.14)] sm:scale-[1.08] lg:scale-[1.16]"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                src="/images/eliane/eliane-hero.png"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-[22px] border border-white/72 bg-white/90 p-4 shadow-[0_18px_48px_rgba(13,43,82,0.08)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
                <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)]">
                  Atendimento online e presencial
                </p>
                <p className="mt-2 text-base font-semibold leading-6 tracking-tight text-[var(--color-navy)] sm:text-lg">
                  Psicologia Online e Presencial com Terapia Cognitivo Comportamental
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
