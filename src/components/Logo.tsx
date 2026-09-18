import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import { BRAND } from "@/lib/brand";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={BRAND.name}>
      <img
        src={logoAsset.url}
        alt={`${BRAND.name} logo`}
        width={56}
        height={56}
        className={`shrink-0 rounded-full object-contain drop-shadow-[0_2px_6px_oklch(0.29_0.062_158_/_0.3)] transition-all duration-500 ${
          compact ? "h-9 w-9" : "h-11 w-11 md:h-12 md:w-12"
        }`}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate font-display text-[0.95rem] tracking-wide text-primary md:text-[1.05rem]">
          Amma&apos;s Organic
        </span>
        <span className="eyebrow mt-1 truncate text-[0.52rem] text-gold md:text-[0.55rem]">
          Pure · Natural · Healthy
        </span>
      </span>
    </Link>
  );
}
