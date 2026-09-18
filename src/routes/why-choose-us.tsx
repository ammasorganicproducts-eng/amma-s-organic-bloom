import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CallToAction } from "@/components/CallToAction";

const title = "Why Choose Us | Amma's Organic Products";
const description =
  "Homemade with care, pure natural ingredients, no preservatives or chemicals, quality assurance, traditional preparation and fresh ingredients.";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyChooseUsPage,
});

const MORE = [
  {
    icon: "✅",
    title: "Quality Assurance",
    text: "Every batch is checked by hand before it is packed — colour, aroma and texture.",
  },
  {
    icon: "🪔",
    title: "Traditional Preparation",
    text: "Slow drying and small-batch grinding, exactly the way it is done at home.",
  },
  {
    icon: "🥬",
    title: "Fresh Ingredients",
    text: "Produce is bought fresh and prepared quickly, never stored for long.",
  },
];

function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Difference"
        title="Why Choose Amma's?"
        subtitle="Simple, healthy and honest living — that is the whole idea behind everything we make."
      />

      <WhyChooseUs />

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <SectionHeading eyebrow="And Also" title="Care in Every Batch" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {MORE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="card-3d h-full rounded-3xl border border-gold/20 bg-ivory p-8">
                  <span className="text-3xl" aria-hidden>
                    {item.icon}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-primary">{item.title}</h3>
                  <span className="gold-line mt-4 block h-px w-12" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
