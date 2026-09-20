import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import g1 from "@/assets/gallery/g1.png";
import g2 from "@/assets/gallery/g2.png";
import g3 from "@/assets/gallery/g3.png";
import g4 from "@/assets/gallery/g4.png";

export type GalleryCategory =
  "Our Journey" | "Products" | "Behind the Scenes" | "Natural Ingredients" | "Packaging";

export interface GalleryItem {
  src: string;
  title: string;
  category: GalleryCategory;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: g1, title: "At our stall", category: "Our Journey" },
  { src: g2, title: "Meeting our customers", category: "Our Journey" },
  { src: g3, title: "Our product display", category: "Our Journey" },
  { src: g4, title: "Sharing what we make", category: "Our Journey" },
];

export function Gallery({
  preview = false,
  showHeading = true,
}: {
  preview?: boolean;
  showHeading?: boolean;
}) {
  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    const base =
      filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter);
    return preview ? base.slice(0, 6) : base;
  }, [filter, preview]);

  const filters = useMemo<Array<"All" | GalleryCategory>>(() => {
    const cats = Array.from(new Set(GALLERY_ITEMS.map((i) => i.category)));
    return ["All", ...cats];
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, items.length]);

  const active = index === null ? null : items[index];

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        {showHeading && (
          <SectionHeading
            eyebrow="Gallery"
            title="From Our Hands to Your Home"
            subtitle="A glimpse into Amma's Organic Products."
          />
        )}

        {!preview && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setIndex(null);
                }}
                className={`rounded-full border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
                  filter === f
                    ? "border-transparent bg-primary text-cream"
                    : "border-border text-foreground/70 hover:border-gold/50 hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        <div className="mt-12 columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:columns-4">
          {items.map((item, i) => (
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

        {preview && (
          <div className="mt-8 flex justify-center">
            <Link to="/gallery" className="btn-base btn-outline-gold text-primary">
              View Gallery <ArrowRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        )}
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
                setIndex((i) => ((i ?? 0) - 1 + items.length) % items.length);
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
                setIndex((i) => ((i ?? 0) + 1) % items.length);
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
