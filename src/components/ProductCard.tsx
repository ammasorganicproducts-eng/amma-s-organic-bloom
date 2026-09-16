import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Heart, MessageCircle, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice, productEnquiry, waLink } from "@/lib/brand";
import { useShop } from "@/store/shop";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [added, setAdded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const wished = isWishlisted(product.id);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -7,
      y: ((e.clientX - r.left) / r.width - 0.5) * 7,
    });
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
      className="group h-full"
    >
      <motion.article
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 140, damping: 14 }}
        className="card-3d relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-ivory transition-colors group-hover:border-gold/45"
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            width={816}
            height={816}
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
          />
          <button
            type="button"
            aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            aria-pressed={wished}
            onClick={() => toggleWishlist(product.id)}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-ivory/85 backdrop-blur-md transition-transform hover:scale-110"
          >
            <Heart
              size={16}
              strokeWidth={1.6}
              className={wished ? "fill-destructive text-destructive" : "text-primary"}
            />
          </button>
          <span className="absolute left-3 top-3 rounded-full bg-emerald-dark/75 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-cream backdrop-blur-md">
            {product.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg leading-snug text-primary">{product.name}</h3>
          {product.weight && (
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              {product.weight}
            </p>
          )}
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-3 flex items-baseline gap-2">
            {product.price === null ? (
              <span className="font-display text-base italic text-bark">Enquire for Price</span>
            ) : (
              <span className="font-display text-2xl text-primary">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {product.price !== null && (
              <button
                type="button"
                onClick={() => {
                  addToCart(product.id);
                  setAdded(true);
                  window.setTimeout(() => setAdded(false), 1400);
                }}
                className="btn-base btn-emerald w-full !px-3 !py-2.5 !text-[0.68rem]"
              >
                {added ? (
                  <>
                    <Check size={14} strokeWidth={2} /> Added
                  </>
                ) : (
                  <>
                    <ShoppingBag size={14} strokeWidth={1.6} /> Add to Cart
                  </>
                )}
              </button>
            )}
            <a
              href={waLink(productEnquiry(product))}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline-gold w-full !px-3 !py-2.5 !text-[0.68rem] text-primary"
            >
              <MessageCircle size={14} strokeWidth={1.6} /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
