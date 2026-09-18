import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bright.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { generalEnquiry, waLink } from "@/lib/brand";

const BENEFITS = [
  { icon: Leaf, first: "Homemade", second: "with Care" },
  { icon: Leaf, first: "Pure & Natural", second: "Ingredients" },
  { icon: ShieldCheck, first: "No Preservatives", second: "& No Chemicals" },
  { icon: Heart, first: "Health", second: "Support" },
];

const GOLD_DOTS = [
  { left: "7%", top: "23%", size: 4, delay: 0 },
  { left: "45%", top: "11%", size: 3, delay: 1.1 },
  { left: "93%", top: "31%", size: 4, delay: 0.6 },
  { left: "51%", top: "75%", size: 3, delay: 1.7 },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 22 });
  const sy = useSpring(my, { stiffness: 55, damping: 22 });
  const imageX = useTransform(sx, [-0.5, 0.5], ["-1.4%", "1.4%"]);
  const imageY = useTransform(sy, [-0.5, 0.5], ["-1%", "1%"]);
  const leafX = useTransform(sx, [-0.5, 0.5], ["10px", "-10px"]);
  const leafY = useTransform(sy, [-0.5, 0.5], ["7px", "-7px"]);

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="hero-light relative isolate min-h-[100svh] overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-glow absolute -left-24 top-24 h-72 w-72 rounded-full" />
        <div className="hero-glow absolute -right-24 bottom-16 h-80 w-80 rounded-full opacity-60" />
        {GOLD_DOTS.map((dot, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-gold/55"
            style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
            animate={reduceMotion ? false : { opacity: [0.25, 0.75, 0.25], scale: [1, 1.35, 1] }}
            transition={{ duration: 4, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-7 px-5 pb-24 pt-24 md:min-h-[100svh] md:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] md:px-8 md:pb-24 md:pt-28 lg:gap-12 lg:px-14 xl:px-20">
        <div className="relative z-10 mx-auto w-full max-w-2xl md:mx-0">
          <motion.div {...reveal(0.12)} className="flex flex-col items-start">
            <div className="hero-logo-shell grid h-28 w-28 shrink-0 place-items-center rounded-full sm:h-36 sm:w-36 lg:h-[168px] lg:w-[168px]">
              <img
                src={logoAsset.url}
                alt="Amma's Organic Products logo"
                width={168}
                height={168}
                className="h-[88%] w-[88%] rounded-full object-contain"
              />
            </div>
            <p className="mt-4 text-[0.62rem] font-medium tracking-[0.26em] text-primary/70 sm:text-[0.7rem]">
              PURE · NATURAL · HEALTHY
            </p>
          </motion.div>

          <motion.p {...reveal(0.24)} className="hero-label mt-5 inline-flex items-center rounded-full px-4 py-2 text-[0.58rem] font-medium tracking-[0.18em] text-primary sm:text-[0.65rem]">
            NATURAL · HOMEMADE · CAREFULLY PREPARED
          </motion.p>

          <motion.h1 {...reveal(0.36)} className="mt-5 font-display text-[2.75rem] leading-[0.98] text-primary sm:text-[3.55rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[4.65rem]">
            Natural Goodness,
            <br />
            <span className="text-gold italic">Made With Care.</span>
          </motion.h1>

          <motion.p {...reveal(0.48)} className="mt-5 max-w-xl text-sm leading-7 text-foreground/72 sm:text-[0.95rem]">
            Homemade organic powders, healthy food products, natural juices and personal-care
            essentials — thoughtfully prepared for healthier everyday living.
          </motion.p>

          <motion.div {...reveal(0.6)} className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-7 text-[0.69rem] font-medium tracking-[0.14em] text-primary-foreground shadow-[0_12px_28px_color-mix(in_oklab,var(--primary)_22%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-deep sm:w-auto">
              <Link to="/products">
                EXPLORE PRODUCTS <ArrowRight size={15} strokeWidth={1.7} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary/45 bg-ivory/70 px-7 text-[0.69rem] font-medium tracking-[0.1em] text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-ivory hover:text-primary sm:w-auto">
              <a href={waLink(generalEnquiry)} target="_blank" rel="noreferrer">
                <MessageCircle size={16} strokeWidth={1.7} /> ENQUIRE ON WHATSAPP
              </a>
            </Button>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 border-y border-gold/25 sm:grid-cols-4">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.first}
                  {...reveal(0.72 + index * 0.08)}
                  className="flex min-h-20 items-center gap-2.5 border-gold/20 px-2.5 py-3 odd:border-r sm:min-h-24 sm:flex-col sm:items-start sm:justify-center sm:border-r sm:px-3 sm:last:border-r-0"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf/10 text-primary">
                    <Icon size={16} strokeWidth={1.5} />
                  </span>
                  <span className="text-[0.65rem] font-medium leading-4 text-primary/80 sm:text-[0.62rem]">
                    {benefit.first}<br />{benefit.second}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[380px] w-full max-w-[620px] sm:h-[470px] md:h-[min(70svh,690px)] md:min-h-[460px]"
        >
          <motion.div style={reduceMotion ? {} : { x: imageX, y: imageY }} className="hero-image-frame absolute inset-3 overflow-hidden md:inset-0">
            <img
              src={heroImage}
              alt="Bright arrangement of organic powders, fresh vegetables, herbs and handmade soaps"
              width={1200}
              height={1400}
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            style={reduceMotion ? {} : { x: leafX, y: leafY }}
            animate={reduceMotion ? false : { rotate: [-5, 2, -5], y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hero-leaf-card absolute -left-1 top-[18%] hidden h-20 w-20 rotate-[-12deg] place-items-center rounded-full text-primary md:grid"
            aria-hidden
          >
            <Leaf size={34} strokeWidth={1.1} />
          </motion.div>
          <motion.div
            animate={reduceMotion ? false : { y: [0, -8, 0], rotate: [7, 11, 7] }}
            transition={{ duration: 6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="hero-leaf-card absolute -right-1 bottom-[15%] hidden h-16 w-16 place-items-center rounded-full text-gold md:grid"
            aria-hidden
          >
            <Sparkles size={24} strokeWidth={1.2} />
          </motion.div>
        </motion.div>
      </div>

      <svg className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 w-full text-primary md:h-16" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,76 C210,28 412,95 653,63 C896,31 1126,11 1440,63 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
