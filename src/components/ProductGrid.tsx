import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { CATEGORIES, products, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/Reveal";
import { useShop } from "@/store/shop";

export function ProductGrid() {
  const [active, setActive] = useState<"All" | Category>("All");
  const { openDrawer } = useShop();

  const visible = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="products" className="section-pad relative bg-background">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Shop"
          title="Our Natural Collection"
          subtitle="Simple ingredients. Thoughtful preparation. Natural choices."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                active === cat
                  ? "text-cream"
                  : "border border-border text-foreground/70 hover:border-gold/50 hover:text-primary"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="category-pill"
                  className="emerald-surface absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => openDrawer("search")}
            className="flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-gold/12"
          >
            <Search size={13} strokeWidth={1.7} /> Search
          </button>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <motion.div key={product.id} layout exit={{ opacity: 0, scale: 0.95 }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
