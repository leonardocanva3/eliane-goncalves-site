import { cn } from "@/lib/utils/cn";

type PatientModuleCardProps = {
  emoji: string;
  title: string;
  description: string;
  meta?: string;
  className?: string;
};

export function PatientModuleCard({
  emoji,
  title,
  description,
  meta,
  className,
}: PatientModuleCardProps) {
  return (
    <article
      className={cn(
        "min-h-40 rounded-[26px] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[0_14px_40px_rgba(13,43,82,0.052)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-3xl" aria-hidden="true">
          {emoji}
        </span>
        {meta ? (
          <span className="rounded-full border border-[rgba(201,161,91,0.28)] bg-[var(--color-brand-blue-pale)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-navy)]">
            {meta}
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-tight text-[var(--color-navy)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
        {description}
      </p>
    </article>
  );
}
