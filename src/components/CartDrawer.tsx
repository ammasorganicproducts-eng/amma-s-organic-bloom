import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useShop } from "@/store/shop";
import { formatPrice, orderMessage, waLink } from "@/lib/brand";

export function CartDrawer() {
  const { drawer, closeDrawer, cartLines, cartTotal, setQty, removeFromCart } = useShop();
  const open = drawer === "cart";

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
                <span className="eyebrow text-gold">Your Bag</span>
                <h2 className="font-display text-2xl text-primary">Shopping Cart</h2>
              </div>
              <button
                type="button"
                aria-label="Close cart"
                onClick={closeDrawer}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </header>

            {cartLines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <ShoppingBag size={38} strokeWidth={1} className="text-gold" />
                <p className="font-display text-2xl text-primary">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add a few natural essentials and they will appear here.
                </p>
                <button type="button" onClick={closeDrawer} className="btn-base btn-emerald mt-2">
                  Browse Products
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                  {cartLines.map(({ product, qty }) => (
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
                        <p className="truncate font-display text-base text-primary">
                          {product.name}
                        </p>
                        {product.weight && (
                          <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                            {product.weight}
                          </p>
                        )}
                        <div className="mt-2 flex items-center gap-2">
                          <QtyButton
                            label="Decrease quantity"
                            onClick={() => setQty(product.id, qty - 1)}
                          >
                            <Minus size={13} strokeWidth={2} />
                          </QtyButton>
                          <span className="w-5 text-center text-sm">{qty}</span>
                          <QtyButton
                            label="Increase quantity"
                            onClick={() => setQty(product.id, qty + 1)}
                          >
                            <Plus size={13} strokeWidth={2} />
                          </QtyButton>
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        <span className="font-display text-lg text-primary">
                          {product.price === null ? "—" : formatPrice(product.price * qty)}
                        </span>
                        <button
                          type="button"
                          aria-label={`Remove ${product.name}`}
                          onClick={() => removeFromCart(product.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 size={15} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <footer className="border-t border-border px-5 py-5">
                  <div className="flex items-baseline justify-between">
                    <span className="eyebrow text-muted-foreground">Total</span>
                    <span className="font-display text-3xl text-primary">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  <a
                    href={waLink(orderMessage(cartLines, cartTotal))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-base btn-gold mt-4 w-full"
                  >
                    Continue on WhatsApp
                  </a>
                  <p className="mt-3 text-center text-[0.7rem] text-muted-foreground">
                    Orders are confirmed over WhatsApp — no online payment needed.
                  </p>
                </footer>
              </>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function QtyButton({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-gold hover:bg-gold/12"
    >
      {children}
    </button>
  );
}
