import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { patientConfig } from "@/lib/patient/patient-config";
import { patientRoutes } from "@/lib/patient/patient-routes";

export function LoginForm() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <section className="rounded-[34px] border border-white/80 bg-[var(--color-navy)] p-7 text-white shadow-[0_28px_80px_rgba(13,43,82,0.2)] sm:p-10">
        <div className="inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-accent-soft)]">
          {patientConfig.professionalLabel}
        </div>
        <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl">
          {patientConfig.brandName}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">
          Acesse sua área preparada com cuidado pela Dra. Eliane.
        </p>
        <div className="mt-10 grid gap-3 text-sm text-white/76">
          <p>🌿 Orientações entre sessões</p>
          <p>📚 Materiais organizados com carinho</p>
          <p>🔐 Estrutura preparada para autenticação futura</p>
        </div>
      </section>

      <section className="rounded-[34px] border border-white/80 bg-white/86 p-6 shadow-[var(--shadow-lift)] backdrop-blur sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
          Entrar
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-navy)]">
          Área do Paciente
        </h2>
        <p className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
          Login visual de demonstração. A autenticação real será conectada ao
          Supabase Auth em uma próxima fase.
        </p>
        <form className="mt-8 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold text-[var(--color-navy)]">
            Email
            <input
              className="min-h-14 rounded-full border border-[var(--color-line)] bg-white px-5 text-base font-normal text-[var(--color-text)] shadow-[0_10px_28px_rgba(13,43,82,0.04)] outline-none transition focus:border-[var(--color-accent)]"
              name="email"
              placeholder="seu@email.com"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-[var(--color-navy)]">
            Senha
            <input
              className="min-h-14 rounded-full border border-[var(--color-line)] bg-white px-5 text-base font-normal text-[var(--color-text)] shadow-[0_10px_28px_rgba(13,43,82,0.04)] outline-none transition focus:border-[var(--color-accent)]"
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
          </label>
          <Button className="mt-2 w-full" type="button">
            Entrar
          </Button>
        </form>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <Link className="text-[var(--color-navy)] hover:text-[var(--color-accent)]" href={patientRoutes.patient}>
            Ver dashboard demo
          </Link>
          <span className="text-[var(--color-text-soft)]">•</span>
          <Link className="text-[var(--color-navy)] hover:text-[var(--color-accent)]" href={patientRoutes.admin}>
            Ver admin demo
          </Link>
        </div>
      </section>
    </div>
  );
}
