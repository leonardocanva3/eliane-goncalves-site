import { Card } from "@/components/ui/Card";
import { BrandOrnament } from "@/components/ui/BrandOrnament";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { formatDisplayText } from "@/lib/utils/formatDisplayText";

type EditorialSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  items?: string[];
  tone?: "light" | "navy";
};

export function EditorialSection({
  eyebrow,
  title,
  subtitle,
  description,
  items,
  tone = "light",
}: EditorialSectionProps) {
  const isNavy = tone === "navy";

  return (
    <Section
      className={
        isNavy
          ? "relative overflow-hidden bg-[var(--color-navy)]"
          : undefined
      }
    >
      <Container>
        {isNavy ? (
          <BrandOrnament className="animate-ornament-float absolute right-[8%] top-10 hidden h-32 w-28 opacity-[0.18] lg:block" />
        ) : null}
        <div
          className={
            isNavy
              ? "grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
              : "grid gap-10 lg:grid-cols-[0.82fr_1.18fr]"
          }
        >
          <div className="animate-soft-rise">
            {eyebrow ? (
              <p
                className={
                  isNavy
                    ? "text-base font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-accent)] sm:tracking-[0.09em]"
                    : "text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.09em]"
                }
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              className={
                isNavy
                  ? "mt-5 text-[clamp(2.15rem,9vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-white sm:text-[3.35rem] lg:text-[3.85rem]"
                  : "mt-4 text-[clamp(2rem,8vw,2.55rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-navy)] sm:text-4xl lg:text-5xl"
              }
            >
              {title}
            </h2>
            {subtitle ? (
              <p
                className={
                  isNavy
                    ? "mt-5 text-lg font-medium leading-8 text-white/90 sm:mt-6 sm:text-2xl"
                    : "mt-5 text-lg font-medium leading-8 text-[var(--color-brand-blue)] sm:text-xl"
                }
              >
                {formatDisplayText(subtitle)}
              </p>
            ) : null}
            {isNavy ? (
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-20 bg-[var(--color-accent)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </div>
            ) : null}
          </div>

          <Card className={isNavy ? "relative overflow-hidden border-white/10 bg-white/90 p-6 shadow-[0_18px_54px_rgba(0,0,0,0.12)] hover:bg-white sm:p-7" : ""}>
            {isNavy ? (
              <span className="absolute right-6 top-6 h-12 w-12 rounded-full border border-[rgba(201,161,91,0.16)]" />
            ) : null}
            {description ? (
              <p
                className={
                  isNavy
                    ? "text-base leading-8 text-[var(--color-text)] sm:text-lg"
                    : "text-[1.0625rem] leading-8 text-[var(--color-text-muted)] sm:text-lg"
                }
              >
                {description}
              </p>
            ) : null}
            {items?.length ? (
              <ul className={description ? "mt-8 space-y-4" : "space-y-4"}>
                {items.map((item) => (
                  <li
                    className={
                      isNavy
                        ? "rounded-[22px] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 text-base leading-8 text-[var(--color-text)] transition hover:border-[var(--color-accent-soft)] hover:bg-white sm:rounded-[24px]"
                        : "rounded-[22px] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 text-base leading-8 text-[var(--color-text)] transition hover:border-[var(--color-accent-soft)] hover:bg-white sm:rounded-[24px]"
                    }
                    key={item}
                  >
                    {formatDisplayText(item)}
                  </li>
                ))}
              </ul>
            ) : null}
          </Card>
        </div>
      </Container>
    </Section>
  );
}
