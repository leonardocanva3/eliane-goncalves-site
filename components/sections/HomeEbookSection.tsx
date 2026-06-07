import Image from "next/image";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { ebookContent } from "@/content/site/ebook";
import { ebookClickAttributes } from "@/lib/analytics/actions";
import { ebookAssets } from "@/lib/constants/ebook";

export function HomeEbookSection() {
  return (
    <Section className="relative overflow-hidden bg-[var(--color-surface-muted)]/60">
      <BrandOrnament className="absolute left-[6%] top-14 hidden h-28 w-24 opacity-[0.16] lg:block" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto w-full max-w-[20rem] min-[390px]:max-w-[21.5rem] lg:max-w-[24rem]">
            <div className="absolute -inset-6 rounded-[36px] bg-[rgba(201,161,91,0.10)] blur-3xl" />
            <div className="relative rotate-[-2.5deg] rounded-[28px] border border-white/80 bg-white/78 p-3 shadow-[0_32px_90px_rgba(13,43,82,0.16)] transition duration-300 hover:rotate-[-1.2deg] hover:-translate-y-1">
              <div className="relative aspect-[1414/2000] overflow-hidden rounded-[22px] bg-white">
                <Image
                  alt={ebookAssets.cover.alt}
                  className="object-contain"
                  fill
                  priority
                  sizes="(min-width: 1024px) 24rem, 78vw"
                  src={ebookAssets.cover.src}
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <BrandOrnament
              className="absolute -right-3 -top-6 hidden opacity-70 sm:block"
              variant="monogram"
            />
            <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
              LIVRO PUBLICADO
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-16 bg-[var(--color-accent)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </div>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.15rem,9.2vw,2.8rem)] font-semibold leading-[1.06] tracking-tight text-[var(--color-navy)] sm:text-[3rem] lg:text-[3.45rem]">
              O Poder
              <span className="block text-[var(--color-brand-blue)]">
                Mentalidade Positiva
              </span>
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:mt-7 sm:text-lg">
              <p>
                Além dos atendimentos psicológicos, compartilho neste livro reflexões e estratégias para desenvolver uma mentalidade mais equilibrada, fortalecer a inteligência emocional e construir uma relação mais saudável com seus pensamentos.
              </p>
              <p>
                Uma leitura prática para quem deseja compreender melhor suas emoções, superar desafios e desenvolver uma vida com mais consciência e propósito.
              </p>
            </div>
            <p className="mt-7 inline-flex rounded-full border border-[rgba(201,161,91,0.32)] bg-white/70 px-4 py-2.5 text-base font-semibold leading-5 text-[var(--color-navy)] shadow-[0_12px_30px_rgba(13,43,82,0.045)] sm:text-sm">
              Disponível em formato digital pela Hotmart.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                aria-label="Comprar e-book na Hotmart"
                href={ebookContent.hotmartUrl}
                rel="noopener noreferrer"
                target="_blank"
                {...ebookClickAttributes("home_ebook_primary")}
              >
                Comprar E-book
              </LinkButton>
              <LinkButton href="/ebook" variant="secondary">
                Conhecer o Livro
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
