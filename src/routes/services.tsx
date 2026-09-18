import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CallToAction } from "@/components/CallToAction";

const title = "Our Services | Amma's Organic Products";
const description =
  "Organic products, natural personal care, gift packs, festival hampers, bulk orders and reseller orders from Amma's Organic Products, Vijayawada.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

const EXTRA = [
  {
    icon: "🎁",
    title: "Gift Packs",
    text: "Curated combinations of powders, soaps and fresheners, packed to gift.",
  },
  {
    icon: "🪔",
    title: "Festival Hampers",
    text: "Special occasion hampers put together for Diwali, Sankranti, weddings and housewarmings.",
  },
  {
    icon: "📦",
    title: "Bulk Orders",
    text: "Larger quantities for families, offices and events — prepared to order.",
  },
  {
    icon: "🤝",
    title: "Reseller Orders",
    text: "Supply arrangements for shops and small businesses who want to stock our range.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Natural, quality products made with care — helping families choose healthier and more natural options."
      />

      <Services />

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <SectionHeading
            eyebrow="Made to Order"
            title="Gifting, Hampers & Bulk"
            subtitle="Tell us the occasion and the budget on WhatsApp and we will put a pack together."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {EXTRA.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="card-3d h-full rounded-3xl border border-gold/20 bg-ivory p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-cream text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-primary">{item.title}</h3>
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
