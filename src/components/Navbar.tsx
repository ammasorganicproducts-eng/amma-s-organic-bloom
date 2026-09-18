import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useShop } from "@/store/shop";
import { generalEnquiry, waLink } from "@/lib/brand";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist, openDrawer } = useShop();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
      >
        <div
          className={`hero-nav mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full transition-all duration-500 lg:grid-cols-[auto_1fr_auto] ${
            scrolled
              ? "px-3 py-1.5 shadow-[0_12px_34px_oklch(0.29_0.062_158_/_0.13)] md:px-5"
              : "px-3 py-2.5 md:px-6"
          }`}
        >
          <Logo compact={scrolled} />

          <nav className="hidden items-center justify-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "!text-primary after:!scale-x-100" }}
                className="relative rounded-full px-3 py-2 text-[0.8rem] font-normal tracking-wide text-foreground/80 transition-colors hover:text-primary after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-1.5">
            <button
              type="button"
              aria-label="Search products"
              onClick={() => openDrawer("search")}
              className="hidden h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-gold/15 sm:flex"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open wishlist"
              onClick={() => openDrawer("wishlist")}
              className="relative hidden h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-gold/15 sm:flex"
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlist.length > 0 && <Badge>{wishlist.length}</Badge>}
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={() => openDrawer("cart")}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-gold/15"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && <Badge>{cartCount}</Badge>}
            </button>
            <a
              href={waLink(generalEnquiry)}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-emerald ml-1 hidden !px-4 !py-2 !text-[0.68rem] lg:inline-flex"
            >
              <MessageCircle size={14} strokeWidth={1.6} /> WhatsApp
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-gold/15 lg:hidden"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-emerald-dark/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="emerald-surface grain absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto p-6"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow text-gold">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-cream"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.45 }}
                  >
                    <Link
                      to={link.to}
                      activeOptions={{ exact: link.to === "/" }}
                      activeProps={{ className: "!text-gold" }}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-gold/15 py-3 font-display text-2xl text-cream/95"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openDrawer("search");
                  }}
                  className="btn-base btn-outline-gold w-full text-cream"
                >
                  <Search size={15} strokeWidth={1.6} /> Search
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openDrawer("wishlist");
                  }}
                  className="btn-base btn-outline-gold w-full text-cream"
                >
                  <Heart size={15} strokeWidth={1.6} /> Wishlist ({wishlist.length})
                </button>
                <a
                  href={waLink(generalEnquiry)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-gold w-full"
                >
                  <MessageCircle size={15} strokeWidth={1.6} /> Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[0.6rem] font-medium text-emerald-dark">
      {children}
    </span>
  );
}
