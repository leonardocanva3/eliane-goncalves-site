import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNavigation, serviceRoutes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <Container className="grid gap-9 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:py-14">
        <div>
          <Image
            alt={`${siteConfig.name} - ${siteConfig.professionalTitle}`}
            className="h-[4.75rem] w-[210px] object-contain sm:h-20 sm:w-[220px]"
            height={176}
            src="/images/eliane/eliane-logotipo.png"
            width={260}
          />
          <p className="mt-3 max-w-md text-base leading-8 text-[var(--color-text-muted)] lg:text-sm lg:leading-7">
            Psicologia Online e Presencial com Terapia Cognitivo Comportamental
          </p>
        </div>
        <div>
          <p className="text-base font-semibold text-[var(--color-navy)] lg:text-sm">
            Navegacao
          </p>
          <ul className="mt-4 space-y-1 text-base text-[var(--color-text-muted)] lg:space-y-3 lg:text-sm">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-11 min-w-11 items-center hover:text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] xl:min-h-0 xl:min-w-0" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-base font-semibold text-[var(--color-navy)] lg:text-sm">
            Servicos
          </p>
          <ul className="mt-4 space-y-1 text-base text-[var(--color-text-muted)] lg:space-y-3 lg:text-sm">
            {serviceRoutes.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-11 min-w-11 items-center hover:text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] xl:min-h-0 xl:min-w-0" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-[var(--color-line)] pb-24 pt-6 text-base leading-7 text-[var(--color-text-soft)] sm:pb-8 xl:text-sm xl:leading-6">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Arquitetura inicial
          preparada para SEO, analytics e expansoes futuras.
        </p>
      </Container>
    </footer>
  );
}
