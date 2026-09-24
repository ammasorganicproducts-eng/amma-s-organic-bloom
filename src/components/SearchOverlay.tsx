import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ShoppingBag, X } from "lucide-react";
import { products } from "@/data/products";
import { useShop } from "@/store/shop";
import { formatPrice, productEnquiry, SHIPPING_MESSAGE, waLink } from "@/lib/brand";

export function SearchOverlay() {
  const { drawer, closeDrawer, addToCart } = useShop();
  const open = drawer === "search";
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 120);
    else setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeDrawer]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) =>
      `${p.name} ${p.category} ${p.description} ${p.weight ?? ""}`.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[75] overflow-y-auto"
        >
          <div
            className="absolute inset-0 bg-emerald-dark/70 backdrop-blur-md"
            onClick={closeDrawer}
          />
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-3xl px-4 py-16 md:py-24"
          >
            <div
              className="glass-panel rounded-2xl p-4 md:p-6"
              style={{ backgroundColor: "var(--ivory)" }}
            >
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Search size={20} strokeWidth={1.5} className="shrink-0 text-gold" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search powders, soaps, juices…"
                  aria-label="Search products"
                  className="w-full min-w-0 bg-transparent font-display text-xl text-primary outline-none placeholder:text-muted-foreground/70 md:text-2xl"
                />
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={closeDrawer}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-primary"
                >
                  <X size={17} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-4 max-h-[55vh] overflow-y-auto">
                {query.trim() === "" ? (
                  <p className="px-1 py-6 text-center text-sm text-muted-foreground">
                    Try “banana”, “powder”, “soap” or “moringa”.
                  </p>
                ) : results.length === 0 ? (
                  <p className="px-1 py-6 text-center text-sm text-muted-foreground">
                    No products matched “{query}”.
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {results.map((p) => (
                      <li
                        key={p.id}
                        className="grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-gold/35 hover:bg-cream"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          width={112}
                          height={112}
                          loading="lazy"
                          className="h-14 w-14 shrink-0 rounded-lg object-cover"
                        />
                        <div className="min-w-0">
                          <p className="truncate font-display text-base text-primary">{p.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {p.category}
                            {p.weight ? ` · ${p.weight}` : ""} ·{" "}
                            {p.price === null ? "Enquire for Price" : formatPrice(p.price)}
                          </p>
                          <p className="text-[0.62rem] text-muted-foreground">{SHIPPING_MESSAGE}</p>
                        </div>
                        {p.price !== null ? (
                          <button
                            type="button"
                            onClick={() => addToCart(p.id)}
                            className="btn-base btn-emerald shrink-0 !px-3 !py-2 !text-[0.62rem]"
                          >
                            <ShoppingBag size={12} strokeWidth={1.7} /> Add
                          </button>
                        ) : (
                          <a
                            href={waLink(productEnquiry(p))}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-base btn-outline-gold shrink-0 !px-3 !py-2 !text-[0.62rem] text-primary"
                          >
                            Enquire
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
