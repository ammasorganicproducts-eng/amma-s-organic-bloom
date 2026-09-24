import { motion } from "framer-motion";
import aboutImage from "@/assets/about.jpg";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="about-section section-pad relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-1">
          <div className="relative">
            <span
              className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-tl-3xl border-l border-t border-gold/50 md:block"
              aria-hidden
            />
            <motion.div
              whileHover={{ rotateY: -5, rotateX: 3 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              style={{ perspective: 1000 }}
              className="overflow-hidden rounded-3xl shadow-[0_30px_60px_oklch(0.29_0.062_158_/_0.18)]"
            >
              <img
                src={aboutImage}
                alt="Organic powders, handmade soaps and fresh leaves arranged on cream linen"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <span
              className="absolute -bottom-4 -right-4 hidden h-28 w-28 rounded-br-3xl border-b border-r border-gold/50 md:block"
              aria-hidden
            />
          </div>
        </Reveal>

        <div className="order-2">
          <Reveal>
            <span className="eyebrow text-gold">Our Story</span>
            <h2 className="about-section-title mt-3 font-display text-[2.15rem] leading-tight text-primary sm:text-[2.65rem] lg:text-[3rem]">
              About Amma&apos;s Organic Products
            </h2>
            <span className="gold-line mt-5 block h-px w-24" aria-hidden />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-section-description mt-7 space-y-5 text-[1.05rem] font-medium leading-[1.9] text-foreground/75 md:text-[1.1rem]">
              <p>
                Amma&apos;s Organic Products is a small homegrown business offering natural,
                homemade and carefully prepared products for everyday wellness and personal care.
              </p>
              <p>
                We offer a range of organic powders, healthy food products, natural juices, handmade
                soaps and other natural products — each one prepared with care.
              </p>
              <p>
                Our aim is simple: to bring quality, traditional goodness and natural choices to
                every home. We believe in simple, healthy and honest living.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="about-section-quote mt-8 border-l-2 border-gold pl-5 font-display text-[1.35rem] font-semibold italic leading-relaxed text-primary md:text-[1.6rem]">
              Choose Natural. Choose Healthy. Choose Amma&apos;s Organic Products.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
