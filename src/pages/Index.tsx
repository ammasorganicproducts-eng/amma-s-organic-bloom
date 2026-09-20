import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { TrustIntro } from "@/components/TrustIntro";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { BestSellers } from "@/components/BestSellers";
import { WhyShopPreview } from "@/components/WhyShopPreview";
import { ReviewsPreview } from "@/components/ReviewsPreview";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";

export default function Index() {
  useEffect(() => {
    document.title = "Amma's Organic Products | Homemade Organic Powders, Vijayawada";
  }, []);

  return (
    <>
      <Hero />
      <TrustIntro />
      <FeaturedCategories />
      <BestSellers />
      <WhyShopPreview />
      <ReviewsPreview />
      <Gallery preview />
      <CallToAction />
    </>
  );
}
