import { Link } from "react-router-dom";
import ammaLogo from "@/assets/amma_logo.png";
import { BRAND } from "@/lib/brand";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 flex-1 items-center gap-2.5 lg:flex-none" aria-label={BRAND.name}>
      <img
        src={ammaLogo}
        alt="Amma's Organic Products"
        width={56}
        height={56}
        className={`shrink-0 rounded-full object-contain drop-shadow-[0_2px_6px_oklch(0.29_0.062_158_/_0.3)] transition-all duration-500 ${
          compact ? "h-9 w-9" : "h-10 w-10 md:h-14 md:w-14"
        }`}
      />
      <span className="flex min-w-0 flex-1 flex-col leading-none lg:flex-none">
        <span className="header-brand-name whitespace-nowrap font-display tracking-wide text-primary">
          Amma&apos;s Organic
        </span>
        <span className="header-brand-tagline eyebrow mt-1 whitespace-nowrap text-gold">
          Pure · Natural · Healthy
        </span>
      </span>
    </Link>
  );
}
