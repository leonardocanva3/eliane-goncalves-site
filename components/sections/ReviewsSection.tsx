import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { reviewsContent } from "@/content/site/reviews";

export function ReviewsSection() {
  return (
    <Section className="bg-white/54">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-brand-blue)] sm:tracking-[0.16em]">
            Confiança
          </p>
          <h2 className="mt-4 text-[clamp(2.1rem,8.8vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {reviewsContent.title}
          </h2>
        </div>
        <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {reviewsContent.items.map((review) => (
            <Card className="flex h-full flex-col justify-between" key={review.author}>
              <div className="mb-5 flex gap-1 text-lg leading-none text-[var(--color-brand-blue)]" aria-hidden="true">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-base leading-8 text-[var(--color-text-muted)]">
                {review.quote}
              </p>
              <p className="mt-6 text-base font-semibold text-[var(--color-navy)]">
                {review.author}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
