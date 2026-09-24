import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { reviews } from "@/data/reviews";

export function ReviewsPreview() {
  return (
    <section className="homepage-section-pad bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Kind Words"
          title="What Our Customers Say"
          subtitle="A few notes from families who cook and care with Amma's products."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <article className="card-3d grain h-full rounded-2xl border border-gold/20 bg-ivory p-6">
                <div className="flex gap-1 text-gold" aria-label={`${review.rating} out of 5`}>
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={14} strokeWidth={1.4} className="fill-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-5 font-display text-lg text-primary">{review.name}</p>
                <p className="text-[0.66rem] uppercase tracking-[0.18em] text-gold">
                  {review.place}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
