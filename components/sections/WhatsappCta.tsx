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
    <Section className="py-16">
      <Container>
        <div className="rounded-[32px] border border-[var(--color-line)] bg-white px-6 py-10 shadow-[var(--shadow-soft)] sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-navy)]">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
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
