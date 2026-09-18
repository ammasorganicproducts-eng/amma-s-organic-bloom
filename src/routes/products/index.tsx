import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { CallToAction } from "@/components/CallToAction";
import { CATEGORIES, type Category } from "@/data/products";

const title = "All Products | Amma's Organic Products";
const description =
  "Browse every product from Amma's Organic Products — organic powders, handmade soaps, natural fresheners, juices and more. Filter, search and enquire on WhatsApp.";

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): { category?: Category } => {
    const value = search["category"];
    const valid = CATEGORIES.includes(value as Category) && value !== "All";
    return valid ? { category: value as Category } : {};
  },
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
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();

  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Our Natural Collection"
        subtitle="Simple ingredients. Thoughtful preparation. Natural choices."
      />
      <ProductsExplorer key={category ?? "All"} initialCategory={category ?? "All"} />
      <CallToAction />
    </>
  );
}
