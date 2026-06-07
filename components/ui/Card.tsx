import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-[var(--color-line)] bg-white/86 p-5 shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-accent-soft)] hover:bg-white hover:shadow-[var(--shadow-lift)] sm:rounded-[var(--radius-card)] sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
