import bananaPowder from "@/assets/products/banana-powder.jpg";
import beetrootPowder from "@/assets/products/beetroot-powder.jpg";
import carrotPowder from "@/assets/products/carrot-powder.jpg";
import lemonPowder from "@/assets/products/lemon-powder.jpg";
import tomatoPowder from "@/assets/products/tomato-powder.jpg";
import moringaPowder from "@/assets/products/moringa-powder.jpg";
import curryLeavesPowder from "@/assets/products/curry-leaves-powder.jpg";
import bitterguardPowder from "@/assets/products/bitterguard-powder.jpg";
import amlaPowder from "@/assets/products/amla-powder.jpg";
import sweetPotatoPowder from "@/assets/products/sweet-potato-powder.jpg";
import palakPowder from "@/assets/products/palak-powder.jpg";
import dryDatesPowder from "@/assets/products/dry-dates-powder.jpg";
import gingerPowder from "@/assets/products/ginger-powder.jpg";
import papayaSoap from "@/assets/products/papaya-soap.jpg";
import ubtanSoap from "@/assets/products/ubtan-soap.jpg";
import walnutScrubSoap from "@/assets/products/walnut-scrub-soap.jpg";
import spirulinaSoap from "@/assets/products/spirulina-soap.jpg";
import wardrobeFreshener from "@/assets/products/wardrobe-freshener.jpg";
import carFreshener from "@/assets/products/car-freshener.jpg";
import morningTeaBags from "@/assets/products/morning-tea-bags.jpg";
import grapeJuice from "@/assets/products/grape-juice.jpg";
import pineappleJuice from "@/assets/products/pineapple-juice.jpg";
import perfumedCandles from "@/assets/products/perfumed-candles.jpg";
import hairOilShampoo from "@/assets/products/hair-oil-shampoo.jpg";
import henna from "@/assets/products/henna.jpg";
import footSoak from "@/assets/products/foot-soak.jpg";

export type Category = "Powders" | "Soaps" | "Fresheners" | "Juices" | "Others";

export interface Product {
  id: string;
  name: string;
  category: Category;
  /** null means no price provided — the card shows "Enquire for Price". */
  price: number | null;
  mrp?: number;
  weight?: string;
  image: string;
  description: string;
  available: boolean;
}

export const CATEGORIES: Array<"All" | Category> = [
  "All",
  "Powders",
  "Soaps",
  "Fresheners",
  "Juices",
  "Others",
];

const powder = (
  id: string,
  name: string,
  price: number,
  image: string,
  description: string,
): Product => ({
  id,
  name,
  category: "Powders",
  price,
  weight: "150 grams",
  image,
  description,
  available: true,
});

export const products: Product[] = [
  powder(
    "banana-powder",
    "Banana Powder",
    220,
    bananaPowder,
    "Sun-dried raw banana, finely ground for everyday meals and drinks.",
  ),
  powder(
    "beetroot-powder",
    "Beetroot Powder",
    280,
    beetrootPowder,
    "Deep ruby beetroot powder with a naturally sweet, earthy note.",
  ),
  powder(
    "carrot-powder",
    "Carrot Powder",
    240,
    carrotPowder,
    "Bright carrot powder, gently dried to keep its natural colour.",
  ),
  powder(
    "lemon-powder",
    "Lemon Powder",
    150,
    lemonPowder,
    "Zesty dried lemon powder for a fresh, tangy lift.",
  ),
  powder(
    "tomato-powder",
    "Tomato Powder",
    270,
    tomatoPowder,
    "Ripe tomatoes dried and ground for curries and gravies.",
  ),
  powder(
    "moringa-powder",
    "Moringa Powder",
    270,
    moringaPowder,
    "Shade-dried moringa leaves, finely milled into a vivid green powder.",
  ),
  powder(
    "curry-leaves-powder",
    "Curry Leaves Powder",
    150,
    curryLeavesPowder,
    "Fragrant curry leaves, dried and ground the traditional way.",
  ),
  powder(
    "bitterguard-powder",
    "Bitterguard Powder",
    220,
    bitterguardPowder,
    "Bitter gourd slices, carefully dried and powdered.",
  ),
  powder(
    "amla-powder",
    "Amla Powder",
    250,
    amlaPowder,
    "Indian gooseberry powder, a household favourite for generations.",
  ),
  powder(
    "sweet-potato-powder",
    "Sweet Potato Powder",
    250,
    sweetPotatoPowder,
    "Naturally sweet, mellow powder made from dried sweet potato.",
  ),
  powder(
    "palak-powder",
    "Palak Powder",
    260,
    palakPowder,
    "Fresh spinach leaves, shade-dried and stone-fine ground.",
  ),
  powder(
    "dry-dates-powder",
    "Dry Dates Powder",
    120,
    dryDatesPowder,
    "Ground dry dates with a warm, natural sweetness.",
  ),
  powder(
    "ginger-powder",
    "Ginger Powder",
    220,
    gingerPowder,
    "Aromatic dried ginger, freshly ground in small batches.",
  ),

  {
    id: "papaya-soap",
    name: "Papaya Soap",
    category: "Soaps",
    price: 250,
    image: papayaSoap,
    description: "Handmade papaya soap, cured slowly for a gentle everyday cleanse.",
    available: true,
  },
  {
    id: "ubtan-soap",
    name: "Ubtan",
    category: "Soaps",
    price: 250,
    image: ubtanSoap,
    description: "Traditional ubtan bar with turmeric and gram flour.",
    available: true,
  },
  {
    id: "walnut-scrub-soap",
    name: "Walnut Scrub Soap",
    category: "Soaps",
    price: 250,
    image: walnutScrubSoap,
    description: "Handmade soap with crushed walnut shell for a soft natural scrub.",
    available: true,
  },
  {
    id: "spirunila-soap",
    name: "Spirunila Soap",
    category: "Soaps",
    price: 250,
    image: spirulinaSoap,
    description: "Deep green spirulina bar, handmade in small batches.",
    available: true,
  },

  {
    id: "wardrobe-freshener",
    name: "Wardrobe Freshener",
    category: "Fresheners",
    price: 150,
    image: wardrobeFreshener,
    description: "Botanical sachet that keeps cupboards smelling clean and fresh.",
    available: true,
  },
  {
    id: "car-freshener",
    name: "Car Freshener",
    category: "Fresheners",
    price: 150,
    image: carFreshener,
    description: "Hanging sachet of dried botanicals for a naturally fresh car.",
    available: true,
  },

  {
    id: "morning-tea-bags",
    name: "Morning Tea Bags",
    category: "Juices",
    price: null,
    image: morningTeaBags,
    description: "Herbal morning tea bags, prepared and packed by hand.",
    available: true,
  },
  {
    id: "grape-juice",
    name: "Grape",
    category: "Juices",
    price: null,
    image: grapeJuice,
    description: "Natural grape juice, freshly prepared to order.",
    available: true,
  },
  {
    id: "pineapple-juice",
    name: "Pineapple",
    category: "Juices",
    price: null,
    image: pineappleJuice,
    description: "Natural pineapple juice, freshly prepared to order.",
    available: true,
  },

  {
    id: "perfumed-candles",
    name: "Perfumed Candles",
    category: "Others",
    price: null,
    image: perfumedCandles,
    description: "Hand-poured perfumed candles with botanical touches.",
    available: true,
  },
  {
    id: "hair-oil-and-shampoo",
    name: "Hair Oil and Shampoo",
    category: "Others",
    price: null,
    image: hairOilShampoo,
    description: "Herbal hair oil and shampoo prepared in the traditional way.",
    available: true,
  },
  {
    id: "henna",
    name: "Henna",
    category: "Others",
    price: null,
    image: henna,
    description: "Naturally sifted henna powder with a fine, smooth texture.",
    available: true,
  },
  {
    id: "foot-soak",
    name: "Foot Soak",
    category: "Others",
    price: null,
    image: footSoak,
    description: "Herbal foot soak blend with salts, petals and leaves.",
    available: true,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
