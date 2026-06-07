import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-[var(--color-brand-blue)] text-white shadow-[0_16px_40px_rgba(13,43,82,0.14)] hover:-translate-y-0.5 hover:bg-[var(--color-brand-blue-dark)] hover:shadow-[0_22px_54px_rgba(13,43,82,0.18)]",
  secondary:
    "border border-[var(--color-line)] bg-white/78 text-[var(--color-navy)] shadow-[0_12px_32px_rgba(13,43,82,0.045)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white",
  ghost:
    "text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)]",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold leading-tight transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
