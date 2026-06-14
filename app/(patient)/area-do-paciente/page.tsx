import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/site/contact";
import { patientPortalUrl } from "@/lib/constants/patient-area";
import { whatsappClickAttributes } from "@/lib/analytics/actions";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Área do Paciente",
  description:
    "Entenda como funciona a Área do Paciente da Eliane Gonçalves, com acesso por link seguro individual enviado pelo WhatsApp.",
  path: "/area-do-paciente",
});

const steps = [
  "A paciente realiza seu acompanhamento com a Eliane.",
  "A Eliane envia um link seguro individual pelo WhatsApp.",
  "Pelo link, a paciente acessa sua área exclusiva com orientações e materiais.",
];

const resources = [
  "Próximas consultas",
  "Orientações personalizadas",
  "Materiais de apoio",
  "Vídeos recomendados",
  "Links úteis",
  "Recursos extras do acompanhamento",
];

const mockups = [
  {
    title: "Acesso individual",
    eyebrow: "Link seguro",
    lines: ["Convite recebido pelo WhatsApp", "Entrada direcionada para paciente"],
  },
  {
    title: "Painel da paciente",
    eyebrow: "Acompanhamento",
    lines: ["Próxima consulta", "Orientações recentes", "Materiais destacados"],
  },
  {
    title: "Orientações",
    eyebrow: "Conteúdos",
    lines: ["Cuidados combinados", "Vídeos recomendados", "Materiais de apoio"],
  },
];

function ScreenMockup({
  eyebrow,
  lines,
  title,
}: {
  eyebrow: string;
  lines: string[];
  title: string;
}) {
  return (
    <div className="min-h-[18rem] rounded-[24px] border border-[var(--color-line)] bg-white p-4 shadow-[var(--shadow-soft)] sm:p-5">
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-soft)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-blue)]" />
      </div>
      <div className="pt-5">
        <p className="text-xs font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)]">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-tight tracking-tight text-[var(--color-navy)]">
          {title}
        </h3>
        <div className="mt-5 grid gap-3">
          {lines.map((line, index) => (
            <div
              className="rounded-[18px] border border-[var(--color-line)] bg-[var(--color-surface-muted)] p-4"
              key={line}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--color-navy)]">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold leading-5 text-[var(--color-navy)]">
                  {line}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PatientAreaPage() {
  return (
    <>
      <Section className="pb-10 sm:pb-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)]">
                Área do Paciente
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.25rem,9vw,3.65rem)] font-semibold leading-[1.06] tracking-tight text-[var(--color-navy)]">
                Área do Paciente: um espaço digital para apoiar seu
                acompanhamento
              </h1>
              <p className="mt-6 max-w-3xl text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:text-lg">
                A Eliane Gonçalves oferece um ambiente exclusivo para pacientes
                acessarem orientações, materiais de apoio e informações
                importantes de forma simples e segura.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <LinkButton
                  className="w-full px-7 py-4 sm:w-auto"
                  href={patientPortalUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Sou paciente e já recebi meu link de acesso
                </LinkButton>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-text-muted)]">
                Use apenas se você já recebeu seu link seguro pelo WhatsApp.
              </p>
            </div>

            <div className="rounded-[28px] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-lift)] sm:p-6">
              <div className="rounded-[22px] bg-[var(--color-brand-blue)] p-5 text-white sm:p-6">
                <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-accent-soft)]">
                  Acesso orientado
                </p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
                  O caminho principal é pelo link seguro individual.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/78">
                  O acesso real não começa por um login genérico no site. Cada
                  paciente recebe da Eliane um link próprio pelo WhatsApp, de
                  acordo com o acompanhamento realizado.
                </p>
              </div>
              <div className="mt-5 grid gap-3">
                {["WhatsApp", "Link individual", "Área exclusiva"].map(
                  (item, index) => (
                    <div
                      className="flex min-h-14 items-center gap-3 rounded-[18px] border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3"
                      key={item}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--color-navy)]">
                        {index + 1}
                      </span>
                      <span className="font-semibold text-[var(--color-navy)]">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white/54">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)]">
                Como funciona
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,7vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-navy)]">
                Um acesso pensado para complementar o cuidado.
              </h2>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  className="grid gap-4 rounded-[24px] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)] sm:grid-cols-[auto_1fr] sm:p-6"
                  key={step}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-base font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-lg font-semibold leading-7 text-[var(--color-navy)]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)]">
              O que você encontra
            </p>
            <h2 className="mt-4 text-[clamp(1.9rem,7vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-navy)]">
              Recursos organizados para apoiar o acompanhamento.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <div
                className="min-h-32 rounded-[24px] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-soft)] hover:shadow-[var(--shadow-lift)]"
                key={resource}
              >
                <span className="block h-1.5 w-12 rounded-full bg-[var(--color-accent)]" />
                <h3 className="mt-5 text-xl font-semibold leading-tight tracking-tight text-[var(--color-navy)]">
                  {resource}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-surface-muted)]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)]">
                Segurança e privacidade
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,7vw,2.65rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-navy)]">
                Acesso individual, vinculado ao acompanhamento.
              </h2>
            </div>
            <p className="rounded-[24px] border border-[var(--color-line)] bg-white p-6 text-lg leading-8 text-[var(--color-text-muted)] shadow-[var(--shadow-soft)] sm:p-8">
              O acesso é individual. Cada paciente recebe um link seguro
              próprio. As informações são vinculadas ao acompanhamento realizado
              com a profissional.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)]">
              Demonstração visual
            </p>
            <h2 className="mt-4 text-[clamp(1.9rem,7vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-navy)]">
              Uma prévia limpa do ambiente digital da paciente.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {mockups.map((mockup) => (
              <ScreenMockup
                eyebrow={mockup.eyebrow}
                key={mockup.title}
                lines={mockup.lines}
                title={mockup.title}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white/54 py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-5 border-y border-[var(--color-line)] py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Esta experiência digital é disponibilizada com apoio do Meu Painel
              / LM Health.
            </p>
            <Link
              className="text-sm font-semibold text-[var(--color-navy)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition hover:text-[var(--color-brand-blue-dark)]"
              href="https://www.oleonardomachado.com.br/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Conheça a tecnologia utilizada
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-brand-blue)] px-5 py-9 text-white shadow-[var(--shadow-lift)] sm:rounded-[32px] sm:px-10 sm:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-[clamp(1.9rem,7vw,2.65rem)] font-semibold leading-[1.1] tracking-tight">
                  Já é paciente?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
                  Se você já recebeu seu link de acesso pelo WhatsApp,
                  utilize-o para entrar na sua área exclusiva. Caso ainda não
                  tenha recebido, solicite diretamente à profissional.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <LinkButton
                  className="w-full border border-white/18 bg-white px-7 py-4 text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] sm:w-auto"
                  href={patientPortalUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Acessar com meu link seguro
                </LinkButton>
                <LinkButton
                  className="w-full border border-white/22 bg-transparent px-7 py-4 text-white hover:border-white/50 hover:bg-white/10 sm:w-auto"
                  href={contactContent.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  {...whatsappClickAttributes("patient_area_final_cta")}
                >
                  Falar com a Eliane
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
