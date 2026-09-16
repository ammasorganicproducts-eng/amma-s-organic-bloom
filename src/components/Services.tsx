import { Reveal, SectionHeading } from "@/components/Reveal";

const SERVICES = [
  {
    icon: "🌿",
    title: "Organic & Natural Products",
    items: [
      "Homemade organic powders",
      "Healthy and wellness powders",
      "Natural juices",
      "Vegetable & fruit-based products",
    ],
  },
  {
    icon: "🧼",
    title: "Natural Personal Care",
    items: [
      "Handmade organic soaps",
      "Ubtan and face masks",
      "Natural skin-care products",
      "Wardrobe fresheners",
      "Car fresheners",
    ],
  },
  {
    icon: "📦",
    title: "Custom Orders",
    items: [
      "Gift packs and combo packs",
      "Festival & special occasion hampers",
      "Bulk orders",
      "Reseller orders",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading eyebrow="What We Offer" title="Our Services" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.12}>
              <article className="card-3d glass-panel grain relative h-full overflow-hidden rounded-3xl p-8">
                <span
                  className="pointer-events-none absolute -right-8 -top-8 text-8xl opacity-[0.07]"
                  aria-hidden
                >
                  {service.icon}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-ivory text-2xl shadow-[0_8px_20px_oklch(0.29_0.062_158_/_0.1)]">
                  {service.icon}
                </span>
                <h3 className="mt-6 font-display text-2xl leading-snug text-primary">
                  {service.title}
                </h3>
                <span className="gold-line mt-4 block h-px w-12" aria-hidden />
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            We focus on providing natural, quality products made with care, helping families choose
            healthier and more natural options.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
