import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustIntro } from "@/components/TrustIntro";
import { About } from "@/components/About";
import { ProductGrid } from "@/components/ProductGrid";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { SearchOverlay } from "@/components/SearchOverlay";
import { ShopProvider } from "@/store/shop";

const title = "Amma's Organic Products | Homemade Organic Powders, Vijayawada";
const description =
  "Homemade organic powders, handmade soaps, natural juices and personal-care essentials from Amma's Organic Products, Vijayawada. Choose Natural. Choose Healthy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ShopProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustIntro />
        <About />
        <ProductGrid />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
      <WishlistDrawer />
      <SearchOverlay />
    </ShopProvider>
  );
}
