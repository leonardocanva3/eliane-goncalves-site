import Image from "next/image";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";

const patientPreviewItems = [
  "Orientações",
  "Materiais em PDF",
  "Vídeos YouTube",
  "Spotify",
  "Exercícios",
  "Livros recomendados",
];

export function HomePatientAreaSection() {
  return (
    <Section className="bg-white/54">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur-2xl sm:p-10 lg:p-12">
          <BrandOrnament
            className="absolute -right-4 top-8 hidden opacity-70 sm:block"
            variant="monogram"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.09em] text-[var(--color-brand-blue)]">
                Área do Paciente
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-16 bg-[var(--color-accent)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </div>
              <h2 className="mt-6 max-w-2xl text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[2.8rem] lg:text-[3.2rem]">
                Um espaço preparado para apoiar sua jornada.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
                A área do paciente está organizada como uma experiência futura
                para reunir materiais, orientações e recursos de apoio em um
                ambiente simples, acolhedor e seguro.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {patientPreviewItems.map((item) => (
                  <div
                    className="rounded-[20px] border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-navy)]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <LinkButton href="/area-do-paciente" variant="secondary">
                  Conhecer Área do Paciente
                </LinkButton>
              </div>
            </div>
            <div className="relative z-10 overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-[var(--color-surface-muted)] shadow-[var(--shadow-lift)]">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-white/72 bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-navy)] shadow-[var(--shadow-soft)] backdrop-blur">
                Preview
              </div>
              <div className="relative min-h-[24rem]">
                <Image
                  alt="Dra. Eliane Gonçalves em atendimento"
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  src="/images/eliane/eliane-child-session.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
