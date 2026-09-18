import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const BEST_SELLER_IDS = [
  "moringa-powder",
  "beetroot-powder",
  "amla-powder",
  "ubtan-soap",
  "curry-leaves-powder",
  "walnut-scrub-soap",
  "ginger-powder",
  "wardrobe-freshener",
];

export function BestSellers() {
  const featured = BEST_SELLER_IDS.map((id) => products.find((p) => p.id === id)).filter(
    (p): p is (typeof products)[number] => Boolean(p),
  );

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Most Loved"
          title="Best Selling Products"
          subtitle="Simple ingredients. Thoughtful preparation. Natural choices."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/products" className="btn-base btn-emerald">
            View All Products <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}
