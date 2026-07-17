import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNavigation, serviceRoutes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <Container className="grid gap-9 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:py-14">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            alt={`${siteConfig.name} - ${siteConfig.professionalTitle}`}
            className="mb-8 h-[180px] w-[180px] object-contain"
            height={176}
            src="/images/eliane/eliane-logotipo.png"
            width={260}
          />
          <p className="max-w-[320px] text-center text-[16px] leading-[1.8] text-[#6B7280]">
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
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
        <p className="mt-1 text-[11px] leading-5 text-[var(--color-text-soft)]/70">
          Site e SEO Google feito por:{" "}
          <Link
            className="hover:text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            href="https://www.oleonardomachado.com.br"
          >
            www.oleonardomachado.com.br
          </Link>
        </p>
      </Container>
    </footer>
  );
}
