import { Clock, Instagram, Mail, MapPin, MessageCircle, Navigation, Phone, Youtube } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { BRAND, generalEnquiry, mapEmbedUrl, mapsUrl, waLink } from "@/lib/brand";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Amma's"
          subtitle="Come by the store, call us, or send a message on WhatsApp — we're happy to help."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-panel h-full rounded-3xl p-7 md:p-9">
              <ul className="space-y-6">
                <InfoRow icon={<MapPin size={18} strokeWidth={1.5} />} label="Address">
                  {BRAND.address}
                </InfoRow>
                <InfoRow icon={<Phone size={18} strokeWidth={1.5} />} label="Phone">
                  <a href={`tel:${BRAND.phoneTel}`} className="hover:text-primary">
                    {BRAND.phoneDisplay}
                  </a>
                </InfoRow>
                <InfoRow icon={<Mail size={18} strokeWidth={1.5} />} label="Email">
                  <a href={`mailto:${BRAND.email}`} className="break-all hover:text-primary">
                    {BRAND.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<Clock size={18} strokeWidth={1.5} />} label="Hours">
                  {BRAND.hours}
                </InfoRow>
              </ul>

              <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
                <a href={`tel:${BRAND.phoneTel}`} className="btn-base btn-emerald w-full">
                  <Phone size={14} strokeWidth={1.7} /> Call Now
                </a>
                <a
                  href={waLink(generalEnquiry)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-gold w-full"
                >
                  <MessageCircle size={14} strokeWidth={1.7} /> WhatsApp
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="btn-base btn-outline-gold w-full text-primary"
                >
                  <Mail size={14} strokeWidth={1.7} /> Email Us
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-outline-gold w-full text-primary"
                >
                  <Navigation size={14} strokeWidth={1.7} /> Get Directions
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <span className="eyebrow text-muted-foreground">Follow</span>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-primary transition-all hover:-translate-y-1 hover:bg-gold/15"
                >
                  <Instagram size={17} strokeWidth={1.5} />
                </a>
                <a
                  href={BRAND.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-primary transition-all hover:-translate-y-1 hover:bg-gold/15"
                >
                  <Youtube size={17} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl border border-gold/25 shadow-[0_20px_50px_oklch(0.29_0.062_158_/_0.14)]">
              <iframe
                title={`Map showing ${BRAND.name}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[380px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ivory text-gold">
        {icon}
      </span>
      <div className="min-w-0">
        <span className="eyebrow text-muted-foreground">{label}</span>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{children}</p>
      </div>
    </li>
  );
}
