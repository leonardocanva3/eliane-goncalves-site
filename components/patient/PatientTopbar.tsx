import { patientConfig } from "@/lib/patient/patient-config";

type PatientTopbarProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PatientTopbar({
  eyebrow,
  title,
  description,
}: PatientTopbarProps) {
  return (
    <header className="rounded-[30px] border border-white/78 bg-white/72 p-6 shadow-[var(--shadow-soft)] backdrop-blur sm:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-navy)] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-text-muted)]">
            {description}
          </p>
        </div>
        <div className="rounded-full border border-[rgba(201,161,91,0.28)] bg-[var(--color-brand-blue-pale)] px-5 py-3 text-sm font-semibold text-[var(--color-navy)]">
          {patientConfig.brandName}
        </div>
      </div>
    </header>
  );
}
