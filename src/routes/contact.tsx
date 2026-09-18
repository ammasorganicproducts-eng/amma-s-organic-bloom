import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { BRAND, waLink } from "@/lib/brand";

const title = "Contact Amma's Organic Products | Vijayawada";
const description =
  "Call, WhatsApp, email or visit Amma's Organic Products in Bhavanipuram, Vijayawada. Open Mon–Sun, 7:00 AM – 10:00 PM.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const message = `Hello ${BRAND.name}, my name is ${form.name || "—"} (${
    form.phone || "phone not shared"
  }). ${form.message || "I would like to know more about your products."}`;

  return (
    <>
      <PageHeader
        eyebrow="Find Us"
        title="Visit Amma's"
        subtitle="Come by the store, call us, or send a message on WhatsApp — we're happy to help."
      />

      <Contact />

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[760px] px-5 md:px-10">
          <SectionHeading
            eyebrow="Write to Us"
            title="Send a Message"
            subtitle="Fill in your details and we'll continue the conversation on WhatsApp."
          />

          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(waLink(message), "_blank", "noopener");
              }}
              className="glass-panel mt-12 space-y-4 rounded-3xl p-6 md:p-9"
            >
              <Field label="Your Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-ivory px-4 py-3 text-sm text-primary outline-none focus:border-gold/60"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  inputMode="tel"
                  className="w-full rounded-xl border border-border bg-ivory px-4 py-3 text-sm text-primary outline-none focus:border-gold/60"
                  placeholder="10-digit mobile number"
                />
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-ivory px-4 py-3 text-sm text-primary outline-none focus:border-gold/60"
                  placeholder="What would you like to know?"
                />
              </Field>
              <button type="submit" className="btn-base btn-emerald w-full">
                <Send size={14} strokeWidth={1.7} /> Send via WhatsApp
              </button>
              <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                <MessageCircle size={13} strokeWidth={1.6} /> Your message opens in WhatsApp — no
                account needed on our side.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
