import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bright.jpg";
import ammaLogo from "@/assets/amma_logo.png";
import { Button } from "@/components/ui/button";
import { generalEnquiry, waLink } from "@/lib/brand";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="hero-light relative isolate min-h-0 overflow-hidden bg-background md:min-h-[100svh]"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-5 px-4 pb-10 pt-20 sm:gap-6 sm:px-5 sm:pb-14 sm:pt-24 md:min-h-[100svh] md:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] md:gap-7 md:px-8 md:pb-24 md:pt-28 lg:gap-12 lg:px-14 xl:px-20">
        <div className="relative z-10 mx-auto w-full max-w-2xl md:mx-0">
          <motion.div {...reveal(0.12)} className="flex flex-col items-start">
            <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-[260px] lg:w-[260px]">
              <img
                src={ammaLogo}
                alt="Amma's Organic Products"
                width={168}
                height={168}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-2 text-[0.62rem] font-medium tracking-[0.26em] text-primary/70 sm:mt-4 sm:text-[0.7rem]">
              PURE · NATURAL · HEALTHY
            </p>
          </motion.div>

          <motion.p
            {...reveal(0.24)}
            className="hero-label mt-3 inline-flex items-center rounded-full px-3 py-1.5 text-[0.58rem] font-medium tracking-[0.18em] text-primary sm:mt-5 sm:px-4 sm:py-2 sm:text-[0.65rem]"
          >
            NATURAL · HOMEMADE · CAREFULLY PREPARED
          </motion.p>

          <motion.h1
            {...reveal(0.36)}
            className="mt-4 font-display text-[2.35rem] leading-[0.96] text-primary sm:mt-5 sm:text-[3.55rem] md:text-[3.2rem] lg:text-[4rem] xl:text-[4.65rem]"
          >
            Natural Goodness,
            <br />
            <span className="text-gold italic">Made With Care.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.48)}
            className="mt-4 max-w-xl text-[16px] font-medium leading-6 text-foreground/72 sm:mt-5 sm:text-[17px] sm:leading-7 md:text-[18px] lg:text-[19px]"
          >
            Homemade organic powders, healthy food products, natural juices and personal-care
            essentials — thoughtfully prepared for healthier everyday living.
          </motion.p>

          <motion.div
            {...reveal(0.6)}
            className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full bg-primary px-5 text-[0.69rem] font-medium tracking-[0.14em] text-primary-foreground shadow-[0_12px_28px_color-mix(in_oklab,var(--primary)_22%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-deep sm:w-auto sm:px-7"
            >
              <Link to="/products">
                EXPLORE PRODUCTS <ArrowRight size={15} strokeWidth={1.7} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-full border-primary/45 bg-ivory/70 px-4 text-[0.69rem] font-medium tracking-[0.1em] text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-ivory hover:text-primary sm:w-auto sm:px-7"
            >
              <a href={waLink(generalEnquiry)} target="_blank" rel="noreferrer">
                <MessageCircle size={16} strokeWidth={1.7} /> ENQUIRE ON WHATSAPP
              </a>
            </Button>
          </motion.div>

        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[280px] w-full max-w-[620px] sm:h-[340px] md:h-[min(70svh,690px)] md:min-h-[460px]"
        >
          <div className="hero-image-frame absolute inset-3 overflow-hidden md:inset-0">
            <img
              src={heroImage}
              alt="Bright arrangement of organic powders, fresh vegetables, herbs and handmade soaps"
              width={1200}
              height={1400}
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 w-full text-primary md:h-16"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,76 C210,28 412,95 653,63 C896,31 1126,11 1440,63 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
}
