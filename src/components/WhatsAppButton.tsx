import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generalEnquiry, waLink } from "@/lib/brand";

export function WhatsAppButton() {
  return (
    <motion.a
      href={waLink(generalEnquiry)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
      className="group fixed bottom-5 right-4 z-[65] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_oklch(0.62_0.16_145_/_0.45)] md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" aria-hidden />
      <MessageCircle size={24} strokeWidth={1.7} className="relative" />
      <span className="pointer-events-none absolute right-[4.2rem] hidden whitespace-nowrap rounded-full bg-emerald-dark px-4 py-2 text-xs text-cream opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with us
      </span>
    </motion.a>
  );
}
