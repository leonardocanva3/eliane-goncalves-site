type PatientEmptyStateProps = {
  emoji: string;
  title: string;
  description: string;
};

export function PatientEmptyState({
  emoji,
  title,
  description,
}: PatientEmptyStateProps) {
  return (
    <div className="rounded-[26px] border border-dashed border-[rgba(201,161,91,0.42)] bg-[rgba(245,239,228,0.58)] p-6 text-center">
      <div className="text-3xl" aria-hidden="true">
        {emoji}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[var(--color-navy)]">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
        {description}
      </p>
    </div>
  );
}
