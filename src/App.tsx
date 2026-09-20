import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { SiteLayout } from "@/components/SiteLayout";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetails from "@/pages/ProductDetails";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SiteLayout>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
