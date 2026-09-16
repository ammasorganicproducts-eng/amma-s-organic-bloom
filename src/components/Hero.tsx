import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Leaf, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { generalEnquiry, waLink } from "@/lib/brand";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  delay: (i % 7) * 1.4,
  duration: 16 + (i % 5) * 4,
  size: 10 + (i % 4) * 6,
  drift: ((i % 3) - 1) * 40,
}));

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(sx, [-0.5, 0.5], ["-2.5%", "2.5%"]);
  const bgY = useTransform(sy, [-0.5, 0.5], ["-2.5%", "2.5%"]);
  const cardX = useTransform(sx, [-0.5, 0.5], ["1.6%", "-1.6%"]);
  const cardY = useTransform(sy, [-0.5, 0.5], ["1.2%", "-1.2%"]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-emerald-dark"
    >
      <motion.div
        className="absolute inset-[-4%]"
        style={{ x: bgX, y: bgY }}
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroImage}
          alt="Homemade organic powders, herbs and handmade soaps arranged on a wooden surface"
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.19 0.04 162 / 0.92) 0%, oklch(0.19 0.04 162 / 0.72) 42%, oklch(0.19 0.04 162 / 0.35) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute text-gold/25"
            style={{ left: `${p.left}%`, bottom: -40 }}
            animate={{ y: [0, -900], x: [0, p.drift, 0], rotate: [0, 180, 360], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          >
            <Leaf size={p.size} strokeWidth={1.2} />
          </motion.span>
        ))}
      </div>

      <motion.div
        style={{ x: cardX, y: cardY, opacity: Math.max(0, 1 - scrollY / 620) }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-24"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="eyebrow inline-flex items-center gap-3 rounded-full border border-gold/30 bg-emerald-dark/30 px-4 py-2 text-gold backdrop-blur-md"
          >
            Natural • Homemade • Carefully Prepared
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.7rem] leading-[1.05] text-cream sm:text-6xl lg:text-[4.6rem]"
          >
            Natural Goodness,
            <br />
            <span className="text-gold-gradient italic">Made With Care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-cream/75 md:text-base"
          >
            Homemade organic powders, healthy food products, natural juices and personal-care
            essentials — prepared in small batches with simple ingredients and honest care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#products" className="btn-base btn-gold">
              Explore Products
            </a>
            <a
              href={waLink(generalEnquiry)}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline-gold text-cream"
            >
              <MessageCircle size={15} strokeWidth={1.6} /> Enquire on WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
