import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-blue)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-navy)]">
          Pagina nao encontrada
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-text-muted)]">
          A rota solicitada nao existe ou ainda nao foi preparada.
        </p>
        <Link
          className="mt-8 inline-flex text-sm font-semibold text-[var(--color-brand-blue)]"
          href="/"
        >
          Voltar ao inicio
        </Link>
      </Container>
    </Section>
  );
}
