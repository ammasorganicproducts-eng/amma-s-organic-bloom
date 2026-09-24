const HIGHLIGHTS = [
  { icon: "🌍", label: "Worldwide Shipping Available", featured: false },
  { icon: "🎨", label: "No Added Colours", featured: false },
  { icon: "🌱", label: "No Artificial Flavours", featured: false },
  { icon: "🚫", label: "No Preservatives", featured: false },
  { icon: "💚", label: "Made with Natural Ingredients", featured: false },
  { icon: "✨", label: "Naturally Made", featured: false },
  { icon: "🌾", label: "Quality Ingredients", featured: false },
  { icon: "❤️", label: "Made with Care", featured: false },
  { icon: "🌿", label: "Pure & Natural", featured: false },
  { icon: "", label: "FSSAI Approved", featured: true },
] as const;

function HighlightGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="highlight-marquee-group" aria-hidden={duplicate || undefined}>
      {HIGHLIGHTS.map((highlight) => (
        <div
          key={highlight.label}
          className={`highlight-marquee-item${highlight.featured ? " highlight-marquee-item-featured" : ""}`}
        >
          {highlight.icon && <span className="highlight-marquee-icon">{highlight.icon}</span>}
          <span>{highlight.label}</span>
        </div>
      ))}
    </div>
  );
}

export function HighlightMarquee() {
  return (
    <section className="highlight-marquee grain" aria-label="Product highlights">
      <div className="highlight-marquee-window">
        <div className="highlight-marquee-track">
          <HighlightGroup />
          <HighlightGroup duplicate />
        </div>
      </div>
    </section>
  );
}