import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Heart, MessageCircle, ShoppingBag } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { productDetail } from "@/lib/product-details";
import { formatPrice, productEnquiry, SHIPPING_MESSAGE, waLink } from "@/lib/brand";
import { useShop } from "@/store/shop";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/Reveal";
import NotFound from "@/pages/NotFound";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProduct(productId) : undefined;

  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [added, setAdded] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Amma's Organic Products`;
    }
  }, [product]);

  if (!product) {
    return <NotFound />;
  }

  const detail = productDetail(product);
  const wished = isWishlisted(product.id);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const thumbs = [product.image, product.image, product.image];

  return (
    <>
      <div className="bg-cream px-5 pb-10 pt-28 md:px-10 md:pt-36">
        <div className="mx-auto max-w-[1200px]">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} strokeWidth={1.7} /> Back to all products
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-3xl border border-gold/25 bg-ivory shadow-[0_24px_60px_oklch(0.29_0.062_158_/_0.14)]">
                <img
                  src={thumbs[activeThumb]}
                  alt={product.name}
                  width={816}
                  height={816}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-4 flex gap-3">
                {thumbs.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveThumb(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-20 w-20 overflow-hidden rounded-xl border transition-colors ${
                      activeThumb === i ? "border-gold" : "border-border hover:border-gold/50"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow text-gold">{product.category}</span>
              <h1 className="mt-3 font-display text-[2.2rem] leading-tight text-primary sm:text-5xl">
                {product.name}
              </h1>
              {product.weight && (
                <p className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {product.weight}
                </p>
              )}
              <span className="gold-line mt-5 block h-px w-24" aria-hidden />

              <p className="mt-6 text-sm leading-[1.9] text-foreground/75 md:text-[0.95rem]">
                {product.description}
              </p>

              <p className="mt-6 font-display text-4xl text-primary">
                {product.price === null ? (
                  <span className="text-2xl italic text-bark">Enquire for Price</span>
                ) : (
                  formatPrice(product.price)
                )}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{SHIPPING_MESSAGE}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {product.price !== null && (
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product.id);
                      setAdded(true);
                      window.setTimeout(() => setAdded(false), 1400);
                    }}
                    className="btn-base btn-emerald flex-1"
                  >
                    {added ? (
                      <>
                        <Check size={15} strokeWidth={2} /> Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={15} strokeWidth={1.6} /> Add to Cart
                      </>
                    )}
                  </button>
                )}
                <a
                  href={waLink(productEnquiry(product))}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-gold flex-1"
                >
                  <MessageCircle size={15} strokeWidth={1.6} /> Enquire on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-pressed={wished}
                  className="btn-base btn-outline-gold text-primary"
                >
                  <Heart
                    size={15}
                    strokeWidth={1.6}
                    className={wished ? "fill-destructive text-destructive" : ""}
                  />
                  {wished ? "Saved" : "Wishlist"}
                </button>
              </div>

              <dl className="mt-10 space-y-6 border-t border-border pt-8">
                <Block title="Benefits">
                  <ul className="space-y-2">
                    {detail.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block title="How to Use">
                  <ul className="space-y-2">
                    {detail.usage.map((u) => (
                      <li key={u} className="flex items-start gap-2.5">
                        <span className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block title="Ingredients">{detail.ingredients}</Block>
              </dl>
            </motion.div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section-pad bg-background">
          <div className="mx-auto max-w-[1300px] px-5 md:px-10">
            <SectionHeading eyebrow="You May Also Like" title="Related Products" />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="eyebrow text-gold">{title}</dt>
      <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</dd>
    </div>
  );
}
