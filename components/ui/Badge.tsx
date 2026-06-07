import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-blue)]",
        className,
      )}
      {...props}
    />
  );
}
