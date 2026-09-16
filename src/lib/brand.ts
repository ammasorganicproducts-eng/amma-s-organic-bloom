import type { Product } from "@/data/products";

export const BRAND = {
  name: "Amma's Organic Products",
  tagline: "Choose Natural. Choose Healthy.",
  phoneDisplay: "9676102373",
  phoneTel: "+919676102373",
  whatsapp: "919676102373",
  email: "ammasorganicproducts@gmail.com",
  address:
    "HIG-7, Near VMC Kalyana Mandapam, Crombay Road, Bhavanipuram, Vijayawada, Beside Just Bake",
  hours: "Mon – Sun · 7:00 AM – 10:00 PM",
  instagram:
    "https://www.instagram.com/ammas__organic__powders?stkn=dmR0dnp0eTlkNDU3",
  youtube: "https://youtube.com/@godsgrace5577?si=EbgGX5UiCeCh8MP8",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BRAND.address,
)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  BRAND.address,
)}&output=embed`;

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export const waLink = (message: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;

export const productLabel = (p: Product) => (p.weight ? `${p.name} (${p.weight})` : p.name);

export const productEnquiry = (p: Product) =>
  p.price === null
    ? `Hello ${BRAND.name}, I'm interested in ${productLabel(p)}. Please share the price and more details.`
    : `Hello ${BRAND.name}, I'm interested in ${productLabel(p)} priced at ${formatPrice(
        p.price,
      )}. Please share more details.`;

export const generalEnquiry = `Hello ${BRAND.name}, I would like to know more about your products.`;

export const orderMessage = (
  lines: Array<{ product: Product; qty: number }>,
  total: number,
) => {
  const items = lines
    .map(({ product, qty }) => {
      const size = product.weight ? ` – ${product.weight}` : "";
      const amount =
        product.price === null
          ? " – Price on enquiry"
          : ` – ${formatPrice(product.price * qty)}`;
      return `${product.name}${size} × ${qty}${amount}`;
    })
    .join(", ");
  return `Hello ${BRAND.name}, I would like to place an order: ${items}. Total: ${formatPrice(
    total,
  )}. Please confirm availability and delivery details.`;
};
