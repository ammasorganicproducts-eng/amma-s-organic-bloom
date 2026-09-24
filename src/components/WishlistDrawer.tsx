import { AnimatePresence, motion } from "framer-motion";
import { Heart, ShoppingBag, X } from "lucide-react";
import { useShop } from "@/store/shop";
import { formatPrice, productEnquiry, SHIPPING_MESSAGE, waLink } from "@/lib/brand";

export function WishlistDrawer() {
  const { drawer, closeDrawer, wishlistProducts, toggleWishlist, addToCart } = useShop();
  const open = drawer === "wishlist";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70]"
        >
          <div
            className="absolute inset-0 bg-emerald-dark/50 backdrop-blur-sm"
            onClick={closeDrawer}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ivory shadow-[0_0_60px_oklch(0.19_0.04_162_/_0.3)]"
          >
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <span className="eyebrow text-gold">Saved</span>
                <h2 className="font-display text-2xl text-primary">Your Wishlist</h2>
              </div>
              <button
                type="button"
                aria-label="Close wishlist"
                onClick={closeDrawer}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </header>

            {wishlistProducts.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <Heart size={38} strokeWidth={1} className="text-gold" />
                <p className="font-display text-2xl text-primary">Nothing saved yet</p>
                <p className="text-sm text-muted-foreground">
                  Tap the heart on any product to keep it here for later.
                </p>
              </div>
            ) : (
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {wishlistProducts.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-[72px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      width={144}
                      height={144}
                      loading="lazy"
                      className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-display text-base text-primary">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.price === null ? "Enquire for Price" : formatPrice(product.price)}
                      </p>
                      <p className="text-[0.62rem] text-muted-foreground">{SHIPPING_MESSAGE}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {product.price !== null ? (
                          <button
                            type="button"
                            onClick={() => addToCart(product.id)}
                            className="btn-base btn-emerald !px-3 !py-1.5 !text-[0.62rem]"
                          >
                            <ShoppingBag size={12} strokeWidth={1.7} /> Add
                          </button>
                        ) : (
                          <a
                            href={waLink(productEnquiry(product))}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-base btn-emerald !px-3 !py-1.5 !text-[0.62rem]"
                          >
                            Enquire
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.id)}
                          className="btn-base btn-outline-gold !px-3 !py-1.5 !text-[0.62rem] text-primary"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <Heart size={16} className="shrink-0 fill-destructive text-destructive" />
                  </div>
                ))}
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
