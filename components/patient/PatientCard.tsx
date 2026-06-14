import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type PatientCardProps = {
  emoji?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function PatientCard({
  emoji,
  title,
  children,
  className,
}: PatientCardProps) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-white/78 bg-white/82 p-5 shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-soft)] hover:bg-white sm:p-6",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        {emoji ? (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-[rgba(201,161,91,0.26)] bg-[var(--color-brand-blue-pale)] text-2xl">
            {emoji}
          </span>
        ) : null}
        <div>
          <h2 className="text-xl font-semibold leading-tight text-[var(--color-navy)]">
            {title}
          </h2>
          <div className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
