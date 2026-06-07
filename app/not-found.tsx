import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.16em]">
          404
        </p>
        <h1 className="mt-4 text-[clamp(2.25rem,9.5vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-4xl">
          Pagina nao encontrada
        </h1>
        <p className="mt-5 max-w-xl text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:text-base">
          A rota solicitada nao existe ou ainda nao foi preparada.
        </p>
        <Link
          className="mt-8 inline-flex min-h-12 items-center text-base font-semibold text-[var(--color-brand-blue)] sm:text-sm"
          href="/"
        >
          Voltar ao inicio
        </Link>
      </Container>
    </Section>
  );
}
