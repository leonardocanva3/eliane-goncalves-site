import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/site/contact";
import { whatsappClickAttributes } from "@/lib/analytics/actions";

type WhatsappCtaProps = {
  title: string;
  description: string;
};

export function WhatsappCta({ title, description }: WhatsappCtaProps) {
  return (
    <Section className="py-12 sm:py-16">
      <Container>
        <div className="rounded-[28px] border border-[var(--color-line)] bg-white px-5 py-9 shadow-[var(--shadow-soft)] sm:rounded-[32px] sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-[clamp(1.9rem,7.5vw,2.35rem)] font-semibold leading-[1.12] tracking-tight text-[var(--color-navy)] sm:text-3xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:leading-7">
                {description}
              </p>
            </div>
            <LinkButton
              aria-label="Agendar consulta pelo WhatsApp"
              href={contactContent.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
              {...whatsappClickAttributes("section_cta")}
            >
              Agendar pelo WhatsApp
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
