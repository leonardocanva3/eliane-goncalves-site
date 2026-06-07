import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { contactContent } from "@/content/site/contact";
import { contactClickAttributes, whatsappClickAttributes } from "@/lib/analytics/actions";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contato",
  description: contactContent.title,
  path: "/contato",
});

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/80 bg-white/60 p-5 shadow-[var(--shadow-soft)] backdrop-blur-2xl sm:rounded-[32px] sm:p-10">
            <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]">
              Contato
            </p>
            <h1 className="mt-5 text-[clamp(2.25rem,9.6vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-5xl">
              {contactContent.title}
            </h1>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                aria-label="Agendar consulta pelo WhatsApp"
                href={contactContent.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
                {...whatsappClickAttributes("contact_page")}
              >
                WhatsApp
              </LinkButton>
              <LinkButton
                aria-label="Abrir localização no Google Maps"
                href={contactContent.mapUrl}
                rel="noopener noreferrer"
                target="_blank"
                variant="secondary"
                {...contactClickAttributes("map")}
              >
                Localização
              </LinkButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              contactContent.whatsapp,
              contactContent.instagram,
              contactContent.locationCta,
              contactContent.address,
              contactContent.phone,
              contactContent.email,
            ].map((item) => (
              <div
                className="rounded-[22px] border border-[var(--color-line)] bg-white/86 p-5 text-base leading-8 text-[var(--color-text)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-soft)] hover:bg-white hover:shadow-[var(--shadow-lift)] sm:rounded-[24px] sm:p-6 sm:leading-7"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
