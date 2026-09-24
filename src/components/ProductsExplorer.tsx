import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { CATEGORIES, products, type Category, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { formatPrice, productEnquiry, SHIPPING_MESSAGE, waLink } from "@/lib/brand";
import { useShop } from "@/store/shop";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

const SORTS: Array<{ value: Sort; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name: A – Z" },
];

export function ProductsExplorer({
  initialCategory = "All",
}: {
  initialCategory?: "All" | Category;
}) {
  const [active, setActive] = useState<"All" | Category>(initialCategory);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const { addToCart } = useShop();

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => (active === "All" ? true : p.category === active));
    if (q) {
      list = list.filter((p) =>
        `${p.name} ${p.category} ${p.description} ${p.weight ?? ""}`.toLowerCase().includes(q),
      );
    }
    const withPrice = (p: Product) => p.price ?? Number.POSITIVE_INFINITY;
    if (sort === "price-asc") list = [...list].sort((a, b) => withPrice(a) - withPrice(b));
    if (sort === "price-desc") list = [...list].sort((a, b) => withPrice(b) - withPrice(a));
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [active, query, sort]);

  const countFor = (cat: "All" | Category) =>
    cat === "All" ? products.length : products.filter((p) => p.category === cat).length;

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto grid max-w-[1300px] gap-8 px-5 md:px-10 lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <h2 className="eyebrow text-gold">Categories</h2>
          <div className="no-scrollbar mt-4 flex w-full max-w-full gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`flex shrink-0 items-center justify-between gap-3 rounded-full border px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.16em] transition-colors lg:w-full lg:rounded-xl ${
                  active === cat
                    ? "border-transparent bg-primary text-cream"
                    : "border-border text-foreground/70 hover:border-gold/50 hover:text-primary"
                }`}
              >
                {cat}
                <span className="text-[0.62rem] opacity-70">{countFor(cat)}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border bg-ivory px-4 py-2.5">
              <Search size={16} strokeWidth={1.6} className="shrink-0 text-gold" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                aria-label="Search products"
                className="w-full min-w-0 bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground/70"
              />
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              aria-label="Sort products"
              className="rounded-full border border-border bg-ivory px-4 py-2.5 text-sm text-primary outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {visible.length} product{visible.length === 1 ? "" : "s"}
          </p>

          {visible.length === 0 ? (
            <p className="mt-16 text-center text-sm text-muted-foreground">
              No products matched your search.
            </p>
          ) : (
            <motion.div layout className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((product) => (
                  <motion.div key={product.id} layout exit={{ opacity: 0, scale: 0.95 }}>
                    <ProductCard product={product} onQuickView={setQuickView} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] flex items-center justify-center bg-emerald-dark/70 p-4 backdrop-blur-sm"
            onClick={() => setQuickView(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid w-full max-w-3xl gap-6 overflow-hidden rounded-3xl bg-ivory p-5 sm:grid-cols-2 sm:p-7"
            >
              <button
                type="button"
                aria-label="Close quick view"
                onClick={() => setQuickView(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-ivory text-primary"
              >
                <X size={17} strokeWidth={1.5} />
              </button>
              <img
                src={quickView.image}
                alt={quickView.name}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="flex flex-col">
                <span className="eyebrow text-gold">{quickView.category}</span>
                <h3 className="mt-2 font-display text-3xl text-primary">{quickView.name}</h3>
                {quickView.weight && (
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {quickView.weight}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {quickView.description}
                </p>
                <p className="mt-4 font-display text-2xl text-primary">
                  {quickView.price === null ? (
                    <span className="text-lg italic text-bark">Enquire for Price</span>
                  ) : (
                    formatPrice(quickView.price)
                  )}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{SHIPPING_MESSAGE}</p>
                <div className="mt-6 flex flex-col gap-2">
                  {quickView.price !== null && (
                    <button
                      type="button"
                      onClick={() => addToCart(quickView.id)}
                      className="btn-base btn-emerald w-full"
                    >
                      <ShoppingBag size={14} strokeWidth={1.6} /> Add to Cart
                    </button>
                  )}
                  <a
                    href={waLink(productEnquiry(quickView))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-base btn-gold w-full"
                  >
                    <MessageCircle size={14} strokeWidth={1.6} /> Enquire on WhatsApp
                  </a>
                  <Link
                    to={`/products/${quickView.id}`}
                    onClick={() => setQuickView(null)}
                    className="btn-base btn-outline-gold w-full text-primary"
                  >
                    View Full Details <ArrowRight size={14} strokeWidth={1.6} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
