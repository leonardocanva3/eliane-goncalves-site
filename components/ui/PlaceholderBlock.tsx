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
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-blue)]">
        Prévia
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
        {description}
      </p>
    </Card>
  );
}
