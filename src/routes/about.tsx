import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { CallToAction } from "@/components/CallToAction";
import { generalEnquiry, waLink } from "@/lib/brand";

const title = "About Amma's Organic Products | Our Story, Mission & Values";
const description =
  "The story behind Amma's Organic Products — a small homegrown Vijayawada business making natural, homemade powders, soaps and wellness essentials with care.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const PILLARS = [
  {
    title: "Our Mission",
    text: "To bring quality, traditional goodness and natural choices to every home — prepared the way we would make it for our own family.",
  },
  {
    title: "Our Vision",
    text: "A kitchen in every home stocked with simple, honest, natural products people can trust and understand.",
  },
  {
    title: "Our Values",
    text: "Simple, healthy and honest living — no shortcuts, no preservatives, no chemicals, no claims we cannot stand behind.",
  },
];

const PROCESS = [
  { step: "01", title: "Sourcing", text: "Fresh produce and natural ingredients, chosen by hand." },
  { step: "02", title: "Cleaning", text: "Washed, trimmed and prepared carefully before drying." },
  { step: "03", title: "Drying", text: "Shade or sun dried slowly to keep colour and aroma." },
  { step: "04", title: "Grinding", text: "Ground fine in small batches, never in bulk." },
  { step: "05", title: "Packing", text: "Packed clean and fresh, ready for your kitchen." },
];

const TIMELINE = [
  { year: "The Beginning", text: "A home kitchen, a stone grinder and a few jars of powder made for family." },
  { year: "Word Spreads", text: "Neighbours and friends start asking for their own jars every month." },
  { year: "Growing Range", text: "Handmade soaps, fresheners, juices and personal care join the powders." },
  { year: "Today", text: "A small homegrown business serving families across Vijayawada and beyond." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Amma's Organic Products"
        subtitle="A small homegrown business offering natural, homemade and carefully prepared products for everyday wellness and personal care."
      />

      <About />

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <SectionHeading eyebrow="What Guides Us" title="Mission, Vision & Values" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <article className="card-3d h-full rounded-3xl border border-gold/20 bg-ivory p-8">
                  <Leaf size={26} strokeWidth={1.2} className="text-gold" />
                  <h3 className="mt-5 font-display text-2xl text-primary">{pillar.title}</h3>
                  <span className="gold-line mt-4 block h-px w-12" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <SectionHeading
            eyebrow="How We Make It"
            title="The Homemade Process"
            subtitle="Traditional goodness, step by step — the same way it has always been done at home."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-border bg-ivory p-6">
                  <span className="font-display text-3xl text-gold">{item.step}</span>
                  <h3 className="mt-3 font-display text-xl text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="emerald-surface grain section-pad relative overflow-hidden">
        <div className="relative mx-auto max-w-[900px] px-5 md:px-10">
          <SectionHeading eyebrow="Our Journey" title="From Home Kitchen to Your Home" light />
          <ol className="mt-12 space-y-6 border-l border-gold/30 pl-6">
            {TIMELINE.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.1}>
                <li className="relative">
                  <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <h3 className="font-display text-2xl text-cream">{entry.year}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{entry.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link to="/products" className="btn-base btn-gold">
              Explore Products <ArrowRight size={14} strokeWidth={1.6} />
            </Link>
            <a
              href={waLink(generalEnquiry)}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline-gold text-cream"
            >
              <MessageCircle size={15} strokeWidth={1.6} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
