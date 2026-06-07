import { cn } from "@/lib/utils/cn";

type BrandOrnamentProps = {
  className?: string;
  variant?: "leaf" | "monogram";
};

export function BrandOrnament({
  className,
  variant = "leaf",
}: BrandOrnamentProps) {
  if (variant === "monogram") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none select-none font-serif text-7xl leading-none text-[rgba(201,161,91,0.18)]",
          className,
        )}
      >
        EG
      </div>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none text-[var(--color-accent)]", className)}
      fill="none"
      viewBox="0 0 112 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 116C49 82 62 48 93 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
      <path
        d="M65 70C79 69 91 62 98 49C84 50 72 57 65 70Z"
        fill="currentColor"
        fillOpacity="0.36"
      />
      <path
        d="M51 92C64 88 73 80 78 67C65 71 56 79 51 92Z"
        fill="currentColor"
        fillOpacity="0.28"
      />
      <path
        d="M60 49C72 45 80 37 84 25C72 29 64 37 60 49Z"
        fill="currentColor"
        fillOpacity="0.34"
      />
      <path
        d="M39 102C28 96 20 87 16 75C29 79 37 88 39 102Z"
        fill="currentColor"
        fillOpacity="0.22"
      />
    </svg>
  );
}
