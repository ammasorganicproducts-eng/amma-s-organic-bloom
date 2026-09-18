import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { products, type Category } from "@/data/products";
import powders from "@/assets/products/moringa-powder.jpg";
import soaps from "@/assets/products/ubtan-soap.jpg";
import fresheners from "@/assets/products/wardrobe-freshener.jpg";
import juices from "@/assets/products/pineapple-juice.jpg";
import others from "@/assets/products/perfumed-candles.jpg";

const CARDS: Array<{ category: Category; image: string; blurb: string }> = [
  { category: "Powders", image: powders, blurb: "Naturally dried, stone-fine ground" },
  { category: "Soaps", image: soaps, blurb: "Handmade and slowly cured" },
  { category: "Fresheners", image: fresheners, blurb: "Dried botanical sachets" },
  { category: "Juices", image: juices, blurb: "Freshly prepared to order" },
  { category: "Others", image: others, blurb: "Candles, henna, hair care and more" },
];

export function FeaturedCategories() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Featured Categories"
          subtitle="Find what you need — every range is prepared by hand in small batches."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {CARDS.map((card, i) => (
            <Reveal key={card.category} delay={i * 0.08}>
              <Link
                to="/products"
                search={{ category: card.category }}
                className="group card-3d block h-full overflow-hidden rounded-2xl border border-border bg-ivory"
              >
                <img
                  src={card.image}
                  alt={card.category}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-display text-xl text-primary">{card.category}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{card.blurb}</p>
                  <span className="mt-3 flex items-center gap-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                    {products.filter((p) => p.category === card.category).length} items
                    <ArrowRight
                      size={12}
                      strokeWidth={1.8}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
