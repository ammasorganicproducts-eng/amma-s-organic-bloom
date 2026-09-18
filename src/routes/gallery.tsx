import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";

const title = "Gallery | Amma's Organic Products";
const description =
  "Photos from Amma's Organic Products — our stalls, our handmade products, natural ingredients and moments with the families we serve.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="From Our Hands to Your Home"
        subtitle="A glimpse into Amma's Organic Products."
      />
      <Gallery showHeading={false} />
      <CallToAction />
    </>
  );
}
