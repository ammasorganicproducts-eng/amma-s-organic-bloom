import { Reveal, SectionHeading } from "@/components/Reveal";

const CARDS = [
  {
    icon: "🌿",
    title: "Homemade",
    text: "Carefully prepared with attention and care.",
  },
  {
    icon: "🍃",
    title: "Natural",
    text: "Natural ingredients and simple choices.",
  },
  {
    icon: "🤍",
    title: "Honest",
    text: "Quality products made with care.",
  },
  {
    icon: "🏡",
    title: "Homegrown",
    text: "A small business bringing traditional goodness closer to every home.",
  },
];

export function TrustIntro() {
  return (
    <section className="homepage-section-pad relative bg-background">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Our Promise"
          title="Rooted in Nature. Made With Care."
          subtitle="Amma's Organic Products is a small homegrown business offering natural, homemade and carefully prepared products for everyday wellness and personal care."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <article className="card-3d grain h-full rounded-2xl border border-gold/20 bg-ivory p-7">
                <span className="text-3xl" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="mt-5 font-display text-[20px] font-semibold text-primary sm:text-[22px] lg:text-[25px]">
                  {card.title}
                </h3>
                <span className="gold-line mt-3 block h-px w-10" aria-hidden />
                <p className="mt-4 text-[15px] font-medium leading-relaxed text-muted-foreground sm:text-[16px] lg:text-[18px]">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
