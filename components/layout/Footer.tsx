import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNavigation, serviceRoutes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            alt={`${siteConfig.name} - ${siteConfig.professionalTitle}`}
            className="h-20 w-[220px] object-contain"
            height={176}
            src="/images/eliane/eliane-logotipo.png"
            width={260}
          />
          <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-text-muted)]">
            Psicologia Online e Presencial com Terapia Cognitivo Comportamental
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-navy)]">
            Navegacao
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-[var(--color-navy)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-navy)]">
            Servicos
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
            {serviceRoutes.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-[var(--color-navy)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-[var(--color-line)] py-6 text-xs text-[var(--color-text-soft)]">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Arquitetura inicial
          preparada para SEO, analytics e expansoes futuras.
        </p>
      </Container>
    </footer>
  );
}
