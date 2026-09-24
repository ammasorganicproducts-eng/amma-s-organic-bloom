import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { ProductsExplorer } from "@/components/ProductsExplorer";
import { CallToAction } from "@/components/CallToAction";
import { CATEGORIES, type Category } from "@/data/products";

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const validCategory =
    categoryParam && CATEGORIES.includes(categoryParam as Category) && categoryParam !== "All"
      ? (categoryParam as Category)
      : "All";

  useEffect(() => {
    document.title =
      validCategory !== "All"
        ? `${validCategory} | Amma's Organic Products`
        : "All Products | Amma's Organic Products";
  }, [validCategory]);

  return (
    <>
      <PageHeader
        className="products-page-header"
        eyebrow="Shop"
        title="Our Natural Collection"
        subtitle="Simple ingredients. Thoughtful preparation. Natural choices."
      />
      <ProductsExplorer key={validCategory} initialCategory={validCategory} />
      <CallToAction />
    </>
  );
}
