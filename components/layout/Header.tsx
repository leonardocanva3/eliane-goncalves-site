"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { primaryNavigation } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(252,252,251,0.78)] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_40px_rgba(13,43,82,0.035)] backdrop-blur-2xl">
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link
          className="group relative flex h-16 w-[168px] shrink-0 items-center overflow-visible focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:w-[224px]"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt={`${siteConfig.name} - ${siteConfig.professionalTitle}`}
            className="absolute left-0 top-1/2 h-24 w-[252px] max-w-none -translate-y-1/2 object-contain sm:h-[6.4rem] sm:w-[358px]"
            height={176}
            priority
            src="/images/eliane/eliane-logotipo.png"
            width={260}
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center rounded-full border border-[var(--color-line)] bg-white/68 p-1 shadow-[0_12px_34px_rgba(13,43,82,0.04)] lg:flex"
        >
          {primaryNavigation.map((item) => (
            <Link
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition duration-300 hover:bg-white hover:text-[var(--color-navy)] hover:shadow-[0_8px_24px_rgba(13,43,82,0.045)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LinkButton href="/contato">Agendar Consulta</LinkButton>
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/82 text-[var(--color-navy)] shadow-[0_12px_30px_rgba(13,43,82,0.06)] transition hover:bg-white lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition ${isOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-4 rounded-full bg-current transition ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </Container>
      <div
        className={`overflow-hidden lg:hidden ${isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"} transition-all duration-300`}
        id="mobile-navigation"
      >
        <Container className="pb-5">
          <nav
            aria-label="Navegação mobile"
            className="rounded-[24px] border border-[var(--color-line)] bg-white/94 p-2 shadow-[var(--shadow-lift)] backdrop-blur-2xl"
          >
            {primaryNavigation.map((item) => (
              <Link
                className="block rounded-[18px] px-4 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-brand-blue-pale)]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton
              className="mt-2 w-full"
              href="/contato"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consulta
            </LinkButton>
          </nav>
        </Container>
      </div>
    </header>
  );
}
