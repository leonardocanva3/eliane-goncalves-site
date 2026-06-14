import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { patientAreaUrl as defaultPatientAreaUrl } from "@/lib/constants/patient-area";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Área do Paciente",
  path: "/area-do-paciente",
});

const patientAreaUrl =
  process.env.NEXT_PUBLIC_LM_HEALTH_PATIENT_URL ??
  defaultPatientAreaUrl;

export default function PatientAreaPage() {
  const previewItems = [
    "Orientações",
    "Materiais em PDF",
    "Vídeos de apoio",
    "Conteúdos em áudio",
    "Exercícios",
    "Livros recomendados",
    "Informações importantes",
  ];

  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/60 p-5 shadow-[var(--shadow-soft)] backdrop-blur-2xl sm:rounded-[32px] sm:p-10 lg:p-12">
          <div className="absolute right-10 top-10 h-44 w-44 rounded-full border border-[rgba(201,161,91,0.18)]" />
          <div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-[rgba(13,43,82,0.045)] blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
                Área do Paciente
              </p>
              <h1 className="mt-5 text-[clamp(2.25rem,9.6vw,2.9rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-[3.3rem]">
                Acompanhe seu cuidado com mais clareza
              </h1>
              <p className="mt-6 max-w-3xl text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:mt-7 sm:text-lg">
                Esta área foi criada para facilitar o acesso a orientações,
                materiais de apoio e informações importantes do seu
                acompanhamento. Para acessar, utilize o botão abaixo e entre com
                seus dados de paciente.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <LinkButton
                  className="w-full px-7 py-4 sm:w-auto"
                  href={patientAreaUrl}
                >
                  Acessar minha área do paciente
                </LinkButton>
              </div>
            </div>
            <div className="relative z-10 min-h-[21rem] overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)] sm:rounded-[28px]">
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/72 bg-white/78 px-4 py-2 text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-navy)] shadow-[var(--shadow-soft)] backdrop-blur sm:left-5 sm:top-5">
                Acesso online
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
          <div className="relative z-10 mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {previewItems.map((item, index) => (
              <Card className="group min-h-[9.5rem] p-6 sm:min-h-[10rem] sm:p-7" key={item}>
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-[14px] border border-[rgba(201,161,91,0.24)] bg-[var(--color-brand-blue-pale)] text-sm font-semibold text-[var(--color-navy)] transition group-hover:border-[var(--color-accent)] group-hover:bg-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold tracking-tight text-[var(--color-navy)]">
                  {item}
                </p>
                <p className="mt-3 text-base leading-8 text-[var(--color-text-muted)] sm:mt-4">
                  Disponível na área do paciente para apoiar seu processo de
                  acompanhamento.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
