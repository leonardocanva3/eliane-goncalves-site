import Link from "next/link";
import { patientNavigation } from "@/lib/patient/patient-routes";

export function PatientSidebar() {
  return (
    <aside className="rounded-[30px] border border-white/76 bg-[var(--color-navy)] p-5 text-white shadow-[0_24px_72px_rgba(13,43,82,0.16)] lg:min-h-[calc(100vh-12rem)]">
      <div className="rounded-[24px] border border-white/12 bg-white/8 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-accent-soft)]">
          LM Health
        </p>
        <p className="mt-3 text-2xl font-semibold leading-tight">
          Área do Paciente
        </p>
        <p className="mt-3 text-sm leading-6 text-white/72">
          Base piloto preparada para uma experiência acolhedora e reutilizável.
        </p>
      </div>
      <nav className="mt-5 grid gap-2" aria-label="Navegação da área do paciente">
        {patientNavigation.map((item) => (
          <Link
            className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white"
            href={item.href}
            key={item.href}
          >
            <span aria-hidden="true">{item.emoji}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
