import { Card } from "@/components/ui/Card";

type PlaceholderBlockProps = {
  title: string;
  description: string;
};

export function PlaceholderBlock({
  title,
  description,
}: PlaceholderBlockProps) {
  return (
    <Card>
      <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.16em]">
        Prévia
      </p>
      <h1 className="mt-4 text-[clamp(2.25rem,9.5vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:text-base">
        {description}
      </p>
    </Card>
  );
}
