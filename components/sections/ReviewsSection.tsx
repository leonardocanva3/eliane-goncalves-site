import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { reviewsContent } from "@/content/site/reviews";

export function ReviewsSection() {
  return (
    <Section className="bg-white/54">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-blue)]">
            Confiança
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {reviewsContent.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviewsContent.items.map((review) => (
            <Card className="flex h-full flex-col justify-between" key={review.author}>
              <div className="mb-5 flex gap-1 text-[var(--color-brand-blue)]" aria-hidden="true">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {review.quote}
              </p>
              <p className="mt-6 text-sm font-semibold text-[var(--color-navy)]">
                {review.author}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
