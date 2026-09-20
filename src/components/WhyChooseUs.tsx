import { Reveal, SectionHeading } from "@/components/Reveal";

const REASONS = [
  {
    icon: "🌿",
    title: "Homemade With Care",
    text: "Every batch is prepared with attention and care, the way it would be made at home.",
  },
  {
    icon: "🍃",
    title: "Pure & Natural Ingredients",
    text: "We stay focused on natural ingredients and simple, thoughtful preparation.",
  },
  {
    icon: "🤍",
    title: "No Preservatives & No Chemicals",
    text: "Our products are made without added preservatives or chemicals.",
  },
  {
    icon: "✨",
    title: "Health Support",
    text: "Natural choices to support a simple, healthy and honest way of living.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="emerald-surface grain section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading eyebrow="The Difference" title="Why Choose Amma's?" light />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.1}>
              <article className="glass-dark h-full rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2">
                <span className="text-4xl" aria-hidden>
                  {reason.icon}
                </span>
                <h3 className="mt-5 font-display text-2xl leading-snug text-cream">
                  {reason.title}
                </h3>
                <span className="gold-line mt-4 block h-px w-12" aria-hidden />
                <p className="mt-4 text-sm leading-relaxed text-cream/70">{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
