import { useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Gallery as GallerySection } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Amma's Organic Products";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="From Our Hands to Your Home"
        subtitle="A glimpse into Amma's Organic Products."
      />
      <GallerySection showHeading={false} />
      <CallToAction />
    </>
  );
}
