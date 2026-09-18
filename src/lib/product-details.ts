import type { Category, Product } from "@/data/products";

export interface ProductDetail {
  benefits: string[];
  usage: string[];
  ingredients: string;
}

/**
 * Presentational copy for the product detail pages.
 * Written as general, non-medical descriptions — no health claims,
 * and no prices or product data are defined here.
 */
const BY_CATEGORY: Record<Category, ProductDetail> = {
  Powders: {
    benefits: [
      "Prepared at home in small batches",
      "No added preservatives or chemicals",
      "Naturally dried and finely ground",
      "Easy to add to everyday cooking and drinks",
    ],
    usage: [
      "Mix a spoonful into warm water, milk, juice or buttermilk.",
      "Stir into batters, soups, curries, chapati dough or rice.",
      "Store in a cool, dry place and close the lid tightly after use.",
    ],
    ingredients: "100% naturally dried produce, ground fine. Nothing else added.",
  },
  Soaps: {
    benefits: [
      "Handmade and cured slowly in small batches",
      "Made with natural ingredients",
      "No harsh chemicals added",
      "Gentle enough for everyday use",
    ],
    usage: [
      "Lather with water and rinse well.",
      "Keep the bar on a dry soap dish between uses so it lasts longer.",
    ],
    ingredients: "Natural oils, botanical powders and plant-based additions.",
  },
  Fresheners: {
    benefits: [
      "Made with dried botanicals",
      "Light, natural fragrance",
      "No synthetic sprays",
      "Neat and easy to place anywhere",
    ],
    usage: [
      "Hang or place inside a wardrobe, drawer or car.",
      "Press gently now and then to refresh the fragrance.",
    ],
    ingredients: "Dried flowers, leaves and natural aromatic botanicals.",
  },
  Juices: {
    benefits: [
      "Freshly prepared to order",
      "Natural ingredients only",
      "No artificial colours",
      "Made in small quantities",
    ],
    usage: ["Best enjoyed fresh. Keep refrigerated and consume the same day."],
    ingredients: "Fresh fruit and natural ingredients.",
  },
  Others: {
    benefits: [
      "Prepared by hand with care",
      "Natural ingredients",
      "Made in small batches",
      "Traditional preparation methods",
    ],
    usage: ["Use as directed on the pack. Please message us for any guidance."],
    ingredients: "Natural and plant-based ingredients.",
  },
};

export const productDetail = (product: Product): ProductDetail => BY_CATEGORY[product.category];
