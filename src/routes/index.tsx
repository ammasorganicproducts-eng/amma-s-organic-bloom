import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { TrustIntro } from "@/components/TrustIntro";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { BestSellers } from "@/components/BestSellers";
import { WhyShopPreview } from "@/components/WhyShopPreview";
import { ReviewsPreview } from "@/components/ReviewsPreview";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";

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
