import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="conteudo" className="flex-1">
        {children}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
