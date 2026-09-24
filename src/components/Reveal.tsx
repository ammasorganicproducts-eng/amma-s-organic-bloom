import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && <span className="eyebrow text-gold">{eyebrow}</span>}
      <h2
        className={`mt-3 font-display text-[2.25rem] font-semibold leading-tight sm:text-[2.75rem] lg:text-[3.25rem] ${
          light ? "text-cream" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <span
        className={`gold-line mt-5 h-px w-24 ${align === "center" ? "" : "self-start"}`}
        aria-hidden
      />
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-[1rem] font-medium leading-relaxed md:text-[1.08rem] ${
            light ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
