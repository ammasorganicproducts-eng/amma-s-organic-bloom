import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { SearchOverlay } from "@/components/SearchOverlay";
import { ShopProvider } from "@/store/shop";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ShopProvider>
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
      <WishlistDrawer />
      <SearchOverlay />
    </ShopProvider>
  );
}
