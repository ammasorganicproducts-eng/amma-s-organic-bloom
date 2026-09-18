import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="emerald-surface grain relative overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
      <div
        className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1200px] text-center"
      >
        <span className="eyebrow text-gold">{eyebrow}</span>
        <h1 className="mt-4 font-display text-[2.2rem] leading-tight text-cream sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        <span className="gold-line mx-auto mt-6 block h-px w-24" aria-hidden />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/72 md:text-[0.98rem]">
            {subtitle}
          </p>
        )}
      </motion.div>
    </header>
  );
}
