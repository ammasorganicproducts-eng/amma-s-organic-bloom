import { motion } from "framer-motion";
import { Leaf, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { generalEnquiry, waLink } from "@/lib/brand";

export function CallToAction() {
  return (
    <section className="emerald-surface grain section-pad relative overflow-hidden">
      {[
        { left: "8%", top: "18%", size: 34, dur: 9 },
        { left: "26%", top: "70%", size: 22, dur: 12 },
        { left: "72%", top: "22%", size: 28, dur: 11 },
        { left: "88%", top: "64%", size: 20, dur: 14 },
      ].map((leaf, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-gold/20"
          style={{ left: leaf.left, top: leaf.top }}
          animate={{ y: [0, -18, 0], rotate: [0, 14, 0] }}
          transition={{ duration: leaf.dur, repeat: Infinity, ease: "easeInOut" }}
        >
          <Leaf size={leaf.size} strokeWidth={1.1} />
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-[2.1rem] leading-tight text-cream sm:text-5xl">
            Bring Natural Goodness{" "}
            <span className="text-gold-gradient italic">Home.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-cream/70 md:text-base">
            Explore our homemade organic products and discover simple, natural choices for everyday
            living.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#products" className="btn-base btn-gold">
              Explore Products
            </a>
            <a
              href={waLink(generalEnquiry)}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline-gold text-cream"
            >
              <MessageCircle size={15} strokeWidth={1.6} /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
