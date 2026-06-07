import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Área do Paciente",
  path: "/area-do-paciente",
});

export default function PatientAreaPage() {
  const previewItems = [
    "Orientações",
    "Materiais em PDF",
    "Vídeos YouTube",
    "Spotify",
    "Exercícios",
    "Livros recomendados",
  ];

  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/60 p-6 shadow-[var(--shadow-soft)] backdrop-blur-2xl sm:p-10 lg:p-12">
          <div className="absolute right-10 top-10 h-44 w-44 rounded-full border border-[rgba(201,161,91,0.18)]" />
          <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-[rgba(13,43,82,0.045)] blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.09em] text-[var(--color-brand-blue)]">
                Preview
              </p>
              <h1 className="mt-5 text-[2.55rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[3.3rem]">
                Área do Paciente
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
                [Placeholder: rota reservada para futura area autenticada. Nenhum
                login, banco de dados ou backend real foi implementado nesta etapa.]
              </p>
            </div>
            <div className="relative z-10 min-h-[21rem] overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-white/72 bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-navy)] shadow-[var(--shadow-soft)] backdrop-blur">
                Em preparação
              </div>
              <Image
                alt="Dra. Eliane Gonçalves"
                className="object-cover object-center"
                fill
                sizes="(min-width: 1024px) 28vw, 90vw"
                src="/images/eliane/eliane-child-session.jpg"
              />
            </div>
          </div>
          <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewItems.map((item, index) => (
              <Card className="group min-h-[10rem] p-7" key={item}>
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-[14px] border border-[rgba(201,161,91,0.24)] bg-[var(--color-brand-blue-pale)] text-sm font-semibold text-[var(--color-navy)] transition group-hover:border-[var(--color-accent)] group-hover:bg-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold tracking-tight text-[var(--color-navy)]">
                  {item}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                  Área preparada para organização futura dentro da experiência
                  do paciente.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
