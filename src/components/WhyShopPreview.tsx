import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const POINTS = [
  { icon: "🌿", title: "Homemade With Care", text: "Every batch prepared with attention." },
  { icon: "🍃", title: "Pure & Natural", text: "Natural ingredients, simple preparation." },
  { icon: "✨", title: "No Preservatives", text: "Made without preservatives or chemicals." },
  { icon: "🤍", title: "Health Support", text: "Natural choices for everyday living." },
];

export function WhyShopPreview() {
  return (
    <section className="emerald-surface grain section-pad relative overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading eyebrow="The Difference" title="Why Shop With Us" light />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.09}>
              <article className="glass-dark h-full rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2">
                <span className="text-3xl" aria-hidden>
                  {point.icon}
                </span>
                <h3 className="mt-4 font-display text-xl leading-snug text-cream">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/why-choose-us" className="btn-base btn-gold">
            Learn More <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}
