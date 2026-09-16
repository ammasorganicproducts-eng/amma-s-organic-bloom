import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import g1 from "@/assets/gallery/g1.png.asset.json";
import g2 from "@/assets/gallery/g2.png.asset.json";
import g3 from "@/assets/gallery/g3.png.asset.json";
import g4 from "@/assets/gallery/g4.png.asset.json";
import aboutImage from "@/assets/about.jpg";
import moringa from "@/assets/products/moringa-powder.jpg";
import ubtan from "@/assets/products/ubtan-soap.jpg";
import candles from "@/assets/products/perfumed-candles.jpg";

/**
 * GALLERY SLOTS — easy to update.
 * Replace `src` with your own photo (drop it in src/assets/gallery/ and import it),
 * then edit the title and category. Add or remove entries freely.
 */
export interface GalleryItem {
  src: string;
  title: string;
  category: "Our Journey" | "Products" | "Behind the Scenes" | "Natural Ingredients" | "Packaging";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: g1.url, title: "At our stall", category: "Our Journey" },
  { src: moringa, title: "Freshly ground moringa", category: "Products" },
  { src: g2.url, title: "Meeting our customers", category: "Our Journey" },
  { src: aboutImage, title: "Morning preparation", category: "Behind the Scenes" },
  { src: g3.url, title: "Our product display", category: "Our Journey" },
  { src: ubtan, title: "Handmade ubtan bars", category: "Products" },
  { src: g4.url, title: "Sharing what we make", category: "Our Journey" },
  { src: candles, title: "Hand-poured candles", category: "Packaging" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % GALLERY_ITEMS.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => ((i ?? 0) - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  const active = index === null ? null : GALLERY_ITEMS[index];

  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="From Our Hands to Your Home"
          subtitle="A glimpse into Amma's Organic Products."
        />

        <div className="mt-14 columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:columns-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.button
              key={item.title + i}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-border break-inside-avoid"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-emerald-dark/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="eyebrow block text-gold">{item.category}</span>
                <span className="mt-1 block font-display text-lg text-cream">{item.title}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-emerald-dark/92 p-4 backdrop-blur-sm"
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => setIndex(null)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => ((i ?? 0) - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
              }}
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream md:left-8"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl"
            >
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[75vh] w-auto rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center">
                <span className="eyebrow block text-gold">{active.category}</span>
                <span className="mt-1 block font-display text-xl text-cream">{active.title}</span>
              </figcaption>
            </motion.figure>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => ((i ?? 0) + 1) % GALLERY_ITEMS.length);
              }}
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream md:right-8"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
