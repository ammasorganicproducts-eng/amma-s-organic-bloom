import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bright.jpg";
import ammaLogo from "@/assets/amma_logo.png";
import { Button } from "@/components/ui/button";
import { generalEnquiry, waLink } from "@/lib/brand";

const BENEFITS = [
  { icon: Leaf, first: "Homemade", second: "with Care" },
  { icon: Leaf, first: "Pure & Natural", second: "Ingredients" },
  { icon: ShieldCheck, first: "No Preservatives", second: "& No Chemicals" },
  { icon: Heart, first: "Health", second: "Support" },
];

const GOLD_DOTS = [
  { left: "8%", top: "30%", size: 4, delay: 0 },
  { left: "31%", top: "16%", size: 3, delay: 1.1 },
  { left: "91%", top: "27%", size: 4, delay: 0.6 },
  { left: "69%", top: "72%", size: 3, delay: 1.7 },
];

function BotanicalCorner({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <motion.div
      className={`pointer-events-none absolute top-20 z-0 hidden h-64 w-56 text-primary/45 sm:block lg:h-80 lg:w-72 ${
        isLeft ? "-left-10" : "-right-10 scale-x-[-1]"
      }`}
      animate={{ y: [0, -6, 0], rotate: isLeft ? [-1, 1, -1] : [1, -1, 1] }}
      transition={{ duration: isLeft ? 9 : 10, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <span className="absolute left-12 top-5 h-52 w-px rotate-[31deg] bg-primary/20 lg:h-64" />
      <Leaf className="absolute left-9 top-3 h-24 w-24 rotate-[-28deg] drop-shadow-sm lg:h-28 lg:w-28" strokeWidth={0.8} />
      <Leaf className="absolute left-24 top-20 h-20 w-20 rotate-[28deg] text-leaf/45 drop-shadow-sm lg:h-24 lg:w-24" strokeWidth={0.9} />
      <Leaf className="absolute left-10 top-32 h-16 w-16 rotate-[-36deg] text-gold/45 lg:h-20 lg:w-20" strokeWidth={0.8} />
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 22 });
  const sy = useSpring(my, { stiffness: 55, damping: 22 });
  const imageX = useTransform(sx, [-0.5, 0.5], ["-1.2%", "1.2%"]);
  const imageY = useTransform(sy, [-0.5, 0.5], ["-0.8%", "0.8%"]);

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - bounds.left) / bounds.width - 0.5);
        my.set((event.clientY - bounds.top) / bounds.height - 0.5);
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
        <div className="absolute left-1/2 top-36 h-72 w-72 -translate-x-1/2 rounded-full border border-gold/10 sm:h-96 sm:w-96" />
        <div className="absolute left-1/2 top-44 h-56 w-56 -translate-x-1/2 rounded-full border border-primary/10 sm:h-80 sm:w-80" />
        <BotanicalCorner side="left" />
        <BotanicalCorner side="right" />
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 pb-24 pt-24 text-center sm:px-8 sm:pt-28 lg:px-14 lg:pt-32 xl:min-h-[100svh] xl:justify-center xl:pb-28 xl:pt-28">
        <div className="relative z-20 mx-auto flex w-full max-w-[720px] flex-col items-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="hero-logo-shell grid h-[148px] w-[148px] shrink-0 place-items-center rounded-full sm:h-[164px] sm:w-[164px] md:h-[188px] md:w-[188px] lg:h-[216px] lg:w-[216px] 2xl:h-[248px] 2xl:w-[248px]">
              <img
                src={ammaLogo}
                alt="Amma's Organic Products"
                width={250}
                height={250}
                fetchPriority="high"
                className="h-[90%] w-[90%] rounded-full object-contain"
              />
            </div>
            <p className="mt-3 text-[0.6rem] font-medium tracking-[0.26em] text-primary/70 sm:mt-4 sm:text-[0.7rem]">
              PURE · NATURAL · HEALTHY
            </p>
          </motion.div>

          <motion.p
            {...reveal(0.24)}
            className="hero-label mt-4 inline-flex items-center rounded-full px-3.5 py-2 text-[0.5rem] font-medium tracking-[0.14em] text-primary min-[390px]:text-[0.55rem] sm:mt-5 sm:px-4 sm:text-[0.65rem] sm:tracking-[0.18em]"
          >
            NATURAL · HOMEMADE · CAREFULLY PREPARED
          </motion.p>

          <motion.h1
            {...reveal(0.36)}
            className="mt-4 font-display text-[2.65rem] leading-[0.98] text-primary sm:mt-5 sm:text-[3.6rem] md:text-[4.25rem] lg:text-[4.65rem]"
          >
            Natural Goodness,
            <br />
            <span className="text-gold italic">Made With Care.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.48)}
            className="mt-4 max-w-2xl text-sm leading-6 text-foreground/72 sm:mt-5 sm:text-[0.95rem] sm:leading-7"
          >
            Homemade organic powders, healthy food products, natural juices and personal-care
            essentials — thoughtfully prepared for healthier everyday living.
          </motion.p>

          <motion.div
            {...reveal(0.6)}
            className="mt-6 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-primary px-7 text-[0.69rem] font-medium tracking-[0.14em] text-primary-foreground shadow-[0_12px_28px_color-mix(in_oklab,var(--primary)_22%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-deep sm:w-auto"
            >
              <Link to="/products">
                EXPLORE PRODUCTS <ArrowRight size={15} strokeWidth={1.7} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-primary/45 bg-ivory/70 px-7 text-[0.69rem] font-medium tracking-[0.1em] text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-ivory hover:text-primary sm:w-auto"
            >
              <a href={waLink(generalEnquiry)} target="_blank" rel="noreferrer">
                <MessageCircle size={16} strokeWidth={1.7} /> ENQUIRE ON WHATSAPP
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto mt-8 h-[260px] w-full max-w-[540px] sm:h-[320px] lg:h-[350px] xl:absolute xl:right-[3.5%] xl:top-[34%] xl:mt-0 xl:h-[390px] xl:w-[270px] 2xl:right-[5%] 2xl:h-[440px] 2xl:w-[330px]"
        >
          <motion.div
            style={reduceMotion ? {} : { x: imageX, y: imageY }}
            className="hero-image-frame absolute inset-3 overflow-hidden xl:inset-0"
          >
            <img
              src={heroImage}
              alt="Bright arrangement of organic powders, fresh vegetables, herbs and handmade soaps"
              width={1200}
              height={1400}
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <motion.span
            animate={reduceMotion ? false : { y: [0, -7, 0], rotate: [-7, -2, -7] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hero-leaf-card absolute left-0 top-[18%] grid h-14 w-14 place-items-center rounded-full text-primary sm:h-16 sm:w-16 xl:-left-7"
            aria-hidden
          >
            <Leaf size={26} strokeWidth={1.1} />
          </motion.span>
          <motion.span
            animate={reduceMotion ? false : { y: [0, -6, 0], rotate: [7, 11, 7] }}
            transition={{ duration: 6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="hero-leaf-card absolute bottom-[13%] right-0 grid h-12 w-12 place-items-center rounded-full text-gold xl:-right-5"
            aria-hidden
          >
            <Sparkles size={20} strokeWidth={1.2} />
          </motion.span>
        </motion.div>

        <div className="relative z-20 mt-7 grid w-full max-w-[780px] grid-cols-2 border-y border-gold/25 sm:grid-cols-4 xl:mt-9">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.first}
                {...reveal(0.72 + index * 0.08)}
                className="flex min-h-20 items-center justify-center gap-2.5 border-gold/20 px-2 py-3 odd:border-r sm:min-h-20 sm:flex-col sm:border-r sm:px-3 sm:last:border-r-0"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf/10 text-primary">
                  <Icon size={16} strokeWidth={1.5} />
                </span>
                <span className="text-left text-[0.62rem] font-medium leading-4 text-primary/80 sm:text-center">
                  {benefit.first}
                  <br />
                  {benefit.second}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 w-full text-primary md:h-16"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0,76 C210,28 412,95 653,63 C896,31 1126,11 1440,63 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}