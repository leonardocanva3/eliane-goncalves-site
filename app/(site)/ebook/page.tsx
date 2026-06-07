import Image from "next/image";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { ebookContent } from "@/content/site/ebook";
import { buildMetadata } from "@/lib/seo/metadata";
import { ebookClickAttributes } from "@/lib/analytics/actions";
import { ebookAssets } from "@/lib/constants/ebook";
import { formatDisplayText } from "@/lib/utils/formatDisplayText";

export const metadata = buildMetadata({
  title: "Ebook",
  description: ebookContent.description,
  path: "/ebook",
  image: ebookAssets.cover,
});

export default function EbookPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/60 p-6 shadow-[var(--shadow-soft)] backdrop-blur-2xl sm:p-10">
            <BrandOrnament
              className="absolute -right-4 top-4 opacity-60"
              variant="monogram"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.09em] text-[var(--color-brand-blue)]">
              E-book
            </p>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
            <h1 className="mt-5 max-w-4xl text-[2.55rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[3.3rem]">
              {ebookContent.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
              {formatDisplayText(ebookContent.description)}
            </p>
            <div className="mt-10">
              <LinkButton
                aria-label="Comprar e-book na Hotmart"
                href={ebookContent.hotmartUrl}
                rel="noopener noreferrer"
                target="_blank"
                {...ebookClickAttributes("ebook_page")}
              >
                {ebookContent.buttonLabel}
              </LinkButton>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-white/78 p-3 shadow-[var(--shadow-lift)] transition duration-300 hover:-translate-y-0.5">
            <span className="absolute right-7 top-7 z-10 h-12 w-12 rounded-full border border-[rgba(201,161,91,0.28)] bg-white/54 backdrop-blur" />
            <div className="relative aspect-[1414/2000] overflow-hidden rounded-[24px] bg-white">
              <Image
                alt={ebookAssets.cover.alt}
                className="object-contain"
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 90vw"
                src={ebookAssets.cover.src}
              />
            </div>
            <div className="relative border-t border-white/70 bg-white/82 p-8">
              <span className="absolute left-8 top-0 h-px w-20 bg-[var(--color-accent)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-brand-blue)]">
                Livro digital
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[var(--color-navy)]">
                {ebookContent.title}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
