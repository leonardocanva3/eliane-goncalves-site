import Image from "next/image";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/site/home";

export function AboutPreview() {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.09em] text-[var(--color-brand-blue)]">
            Sobre
          </p>
          <h2 className="mt-4 text-[2.15rem] font-semibold leading-tight tracking-tight text-[var(--color-navy)] sm:text-[2.65rem] lg:text-[3.25rem]">
            {homeContent.aboutTitle}
          </h2>
          <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[var(--color-brand-blue-pale)] shadow-[var(--shadow-soft)] before:absolute before:inset-3 before:z-10 before:rounded-[26px] before:border before:border-[rgba(201,161,91,0.32)] before:content-['']">
            <BrandOrnament className="absolute right-5 top-5 z-10 h-24 w-20 opacity-[0.24]" />
            <Image
              alt="Dra. Eliane Gonçalves em atendimento"
              className="scale-[1.38] object-contain object-bottom"
              fill
              sizes="(min-width: 1024px) 34vw, 90vw"
              src="/images/eliane/eliane-portrait-yellow.png"
            />
          </div>
        </div>
        <Card className="relative overflow-hidden p-8">
          <BrandOrnament
            className="absolute -right-3 top-5 opacity-70"
            variant="monogram"
          />
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-14 bg-[var(--color-accent)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </div>
          <p className="text-lg leading-8 text-[var(--color-text-muted)]">
            {homeContent.aboutText}
          </p>
          <div className="mt-8">
            <LinkButton href="/sobre" variant="secondary">
              Conhecer trajetoria
            </LinkButton>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
