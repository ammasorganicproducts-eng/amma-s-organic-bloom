# Bright Premium Hero Redesign

## Scope

Redesign only the homepage hero and the navbar’s visual treatment. Preserve all navigation, search, wishlist, cart, WhatsApp behavior, and every section below the hero unchanged.

## Build

- Replace the dark full-bleed hero with a spacious warm-ivory and pale-sage split composition.
- Place the existing Amma’s logo prominently above the preparation label, followed by the exact heading, description, and two CTAs.
- Create a new bright product photograph featuring organic powders, herbs, vegetables, soaps, wood, glass, and warm natural light for the right side.
- Add four compact benefit highlights, horizontal on desktop and a 2 × 2 grid on mobile.
- Add restrained botanical details, gold flecks, layered shadows, subtle pointer parallax, calm entrance animations, and an organic green lower transition.
- Restyle the existing floating navbar with an ivory glass surface, fine gold border, gentle shadow, and unchanged controls.

## Responsive and Quality Checks

- Keep imagery below text on phones, preserve readable spacing, fit both CTA buttons without overflow, and avoid excessive hero height.
- Verify desktop and 390 px mobile layouts, navbar controls, hero links, visual brightness, image loading, horizontal overflow, and browser errors.

## Technical Details

- Update `Hero.tsx` and only the navbar classes needed for its light appearance.
- Add hero-specific semantic colors and utilities in the existing design system only where required.
- Use the current logo asset and Framer Motion; no data, commerce logic, or lower-page components will change.
