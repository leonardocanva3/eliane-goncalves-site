import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { ebookClickAttributes } from "@/lib/analytics/actions";

export function HomeSecondBookSection() {
  return (
    <Section
      aria-labelledby="da-celula-ao-infinito-title"
      className="relative overflow-hidden bg-[var(--color-surface-muted)]/60"
      id="da-celula-ao-infinito"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto w-full max-w-[20rem] min-[390px]:max-w-[21.5rem] lg:max-w-[24rem]">
            <div className="absolute -inset-6 rounded-[36px] bg-[rgba(201,161,91,0.10)] blur-3xl" />
            <div className="relative rotate-[-2.5deg] rounded-[28px] border border-white/80 bg-white/78 p-3 shadow-[0_32px_90px_rgba(13,43,82,0.16)] transition duration-300 hover:rotate-[-1.2deg] hover:-translate-y-1">
              <Image
                alt="Capa do livro Da Célula ao Infinito, de Eliane F. Gonçalves"
                className="h-auto w-full rounded-[22px]"
                height={1414}
                sizes="(min-width: 1024px) 24rem, (min-width: 390px) 21.5rem, 85vw"
                src="/images/ebook/da-celula-ao-infinito-cover.webp"
                width={1000}
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
              NOVO LIVRO DA AUTORA
            </p>
            <div aria-hidden="true" className="mt-5 flex items-center gap-3">
              <span className="h-px w-16 bg-[var(--color-accent)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </div>
            <h2
              className="mt-6 max-w-2xl text-[clamp(2.15rem,9.2vw,2.8rem)] font-semibold leading-[1.06] tracking-tight text-[var(--color-navy)] sm:text-[3rem] lg:text-[3.45rem]"
              id="da-celula-ao-infinito-title"
            >
              Da Célula <span className="block">ao Infinito</span>
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:mt-7 sm:text-lg">
              <p>
                Da origem da vida à construção da consciência, uma jornada de
                descobertas sobre o que nos torna únicos. Em Da Célula ao Infinito,
                Eliane F. Gonçalves convida você a refletir sobre superação,
                gratidão, escolhas conscientes e a conexão entre corpo, mente e
                espiritualidade.
              </p>
              <p>
                Uma leitura que une reflexões sobre ciência, psicologia e
                propósito, convidando você a reconhecer sua própria história e
                descobrir novas possibilidades de transformação.
              </p>
            </div>
            <p className="mt-7 inline-flex rounded-full border border-[rgba(201,161,91,0.32)] bg-white/70 px-4 py-2.5 text-base font-semibold leading-5 text-[var(--color-navy)] shadow-[0_12px_30px_rgba(13,43,82,0.045)] sm:text-sm">
              Disponível em formato digital pela Hotmart
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                aria-label="Comprar E-book Da Célula ao Infinito na Hotmart (abre em nova aba)"
                href="https://go.hotmart.com/D108248066X"
                rel="noopener noreferrer"
                target="_blank"
                {...ebookClickAttributes("home_da_celula_ao_infinito_primary")}
              >
                Comprar E-book
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
