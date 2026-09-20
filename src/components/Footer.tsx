import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import ammaLogo from "@/assets/amma_logo.png";
import { BRAND } from "@/lib/brand";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

const PRODUCT_LINKS = ["Powders", "Soaps", "Fresheners", "Juices", "Others"] as const;

export function Footer() {
  return (
    <footer className="emerald-surface grain relative overflow-hidden pt-16">
      <div className="relative mx-auto max-w-[1300px] px-5 pb-10 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={ammaLogo}
                alt="Amma's Organic Products"
                width={56}
                height={56}
                loading="lazy"
                className="h-12 w-12 rounded-full object-contain"
              />
              <span className="font-display text-xl leading-tight text-cream">
                Amma&apos;s Organic
                <br />
                Products
              </span>
            </div>
            <p className="mt-5 font-display text-lg italic text-gold">{BRAND.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-cream transition-all hover:-translate-y-1 hover:bg-gold/20"
              >
                <Instagram size={17} strokeWidth={1.5} />
              </a>
              <a
                href={BRAND.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-cream transition-all hover:-translate-y-1 hover:bg-gold/20"
              >
                <Youtube size={17} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Quick Links</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/why-choose-us" className="transition-colors hover:text-gold">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Products</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
              {PRODUCT_LINKS.map((p) => (
                <li key={p}>
                  <Link
                    to={`/products?category=${encodeURIComponent(p)}`}
                    className="transition-colors hover:text-gold"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Contact</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
              <li>
                <a href={`tel:${BRAND.phoneTel}`} className="transition-colors hover:text-gold">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>
            <h3 className="eyebrow mt-7 text-gold">Address</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">{BRAND.address}</p>
            <p className="mt-3 text-sm text-cream/70">{BRAND.hours}</p>
          </div>
        </div>

        <div className="gold-line mt-12 h-px w-full opacity-40" aria-hidden />
        <p className="mt-6 text-center text-xs text-cream/55">
          © 2026 {BRAND.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
