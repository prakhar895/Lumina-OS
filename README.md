[README.md](https://github.com/user-attachments/files/31126971/README.md)
# Lumina OS, Landing Page

A prod# Lumina OS, Landing Page

A product launch landing page for a fictional spatial computing operating system, built as a frontend engineering exercise. The design brief called for layered glassmorphism on a near-black canvas; the engineering brief called for it to stay fast and accessible anyway.

**[View live site](https://lumina-os-seven.vercel.app/)**

<img width="1076" height="16384" alt="lumina-os-seven vercel app_" src="https://github.com/user-attachments/assets/4f4e0ff2-5991-4f9d-835c-8ffdd660eb6a" />


## About

Lumina OS is not a real product. The page exists to solve a specific problem: translucent, heavily blurred interfaces look excellent in a design tool and tend to fall apart in a browser. `backdrop-filter` is expensive, dark translucent surfaces routinely fail contrast checks, and parallax implemented naively will wreck scroll performance.

The goal was to build the design as specified without compromising on any of that.

## Design

- Near-black base (`#08090B`) with translucent glass surfaces, 8% white borders, and soft inner highlights on the top edge of each card
- Pale ice blue (`#A8D8F0`) reserved exclusively for interactive elements
- Sodium orange (`#E8763A`) as a warm counterpoint, used exactly twice across the entire page
- Geometric grotesque type - tight tracking on headlines, wide tracking on small-caps labels
- Desktop-first at 1440px, with a mobile layout at 390px
- All text meets WCAG AA contrast against the blurred surfaces behind it

Five sections: hero with layered depth composition, a six-card feature grid with working toggles, an interactive capability showcase, a technical specifications table, and a closing call to action.

## Engineering constraints

**Blur performance.** No more than six blurred surfaces in the DOM at once. `backdrop-filter` is never animated and never applied to an element being transformed during scroll. Every blurred surface has a solid semi-opaque fallback underneath, gated behind `@supports`, so the design holds up where the filter is unsupported or disabled. `will-change` is applied only while a card is in viewport and removed afterward.

**Motion.** Entrance animations run through `IntersectionObserver` rather than scroll listeners, animating transform and opacity only. Hero parallax uses a single rAF-throttled handler that reads `scrollY` once per frame and writes to CSS custom properties,  no per-element listeners. Everything is wrapped in a `prefers-reduced-motion` check; with reduced motion the content appears immediately in its final state and parallax is disabled entirely.

**Accessibility.** Semantic landmarks, a single `h1`, logical heading order, and a skip link. Feature toggles are real checkbox inputs with accessible labels, visually restyled, with state conveyed through border weight and a text label rather than colour alone. The capability showcase is a proper tab pattern, roving tabindex, arrow key navigation, `aria-selected`, `aria-controls`, and matching tabpanel roles. Focus rings meet 3:1 contrast against the glass surfaces, which is the usual failure point on dark translucent designs.

**Budget.** Under 100KB of JavaScript gzipped. No animation library and no 3D library, CSS transitions and the Web Animations API only. Self-hosted variable font as woff2, subset to latin, preloaded, with `font-display: swap` and no external font request. Hero visual served as AVIF with a WebP fallback, explicit dimensions, preloaded; everything below the fold is lazy loaded. Target was Lighthouse 100 across all four categories with zero cumulative layout shift.

## Built with

- React + Vite
- TypeScript
- Tailwind CSS

## Process

The interface was designed in Google Stitch from a written brief, then implemented in Google AI Studio against that markup and a design token file. The full design and implementation prompts are included in this repository.
A product launch landing page for a fictional spatial computing operating system, built as a frontend engineering exercise. The design brief called for layered glassmorphism on a near-black canvas; the engineering brief called for it to stay fast and accessible anyway.

---

**[View live site](https://lumina-os-seven.vercel.app/)**

[README.md](https://github.com/user-attachments/files/31127158/README.md)


## About

Lumina OS is not a real product. The page exists to solve a specific problem: translucent, heavily blurred interfaces look excellent in a design tool and tend to fall apart in a browser. `backdrop-filter` is expensive, dark translucent surfaces routinely fail contrast checks, and parallax implemented naively will wreck scroll performance.

The goal was to build the design as specified without compromising on any of that.

## Design

- Near-black base (`#08090B`) with translucent glass surfaces, 8% white borders, and soft inner highlights on the top edge of each card
- Pale ice blue (`#A8D8F0`) reserved exclusively for interactive elements
- Sodium orange (`#E8763A`) as a warm counterpoint, used exactly twice across the entire page
- Geometric grotesque type — tight tracking on headlines, wide tracking on small-caps labels
- Desktop-first at 1440px, with a mobile layout at 390px
- All text meets WCAG AA contrast against the blurred surfaces behind it

Five sections: hero with layered depth composition, a six-card feature grid with working toggles, an interactive capability showcase, a technical specifications table, and a closing call to action.

## Engineering constraints

**Blur performance.** No more than six blurred surfaces in the DOM at once. `backdrop-filter` is never animated and never applied to an element being transformed during scroll. Every blurred surface has a solid semi-opaque fallback underneath, gated behind `@supports`, so the design holds up where the filter is unsupported or disabled. `will-change` is applied only while a card is in viewport and removed afterward.

**Motion.** Entrance animations run through `IntersectionObserver` rather than scroll listeners, animating transform and opacity only. Hero parallax uses a single rAF-throttled handler that reads `scrollY` once per frame and writes to CSS custom properties, no per-element listeners. Everything is wrapped in a `prefers-reduced-motion` check; with reduced motion the content appears immediately in its final state and parallax is disabled entirely.

**Accessibility.** Semantic landmarks, a single `h1`, logical heading order, and a skip link. Feature toggles are real checkbox inputs with accessible labels, visually restyled, with state conveyed through border weight and a text label rather than colour alone. The capability showcase is a proper tab pattern - roving tabindex, arrow key navigation, `aria-selected`, `aria-controls`, and matching tabpanel roles. Focus rings meet 3:1 contrast against the glass surfaces, which is the usual failure point on dark translucent designs.

**Budget.** Under 100KB of JavaScript gzipped. No animation library and no 3D library, CSS transitions and the Web Animations API only. Self-hosted variable font as woff2, subset to latin, preloaded, with `font-display: swap` and no external font request. Hero visual served as AVIF with a WebP fallback, explicit dimensions, preloaded; everything below the fold is lazy loaded. Built against a target of Lighthouse 100 across all four categories. Current scores on the deployed build: 91 performance, 95 accessibility, 100 best practices, 100 SEO.

## Built with

- React + Vite
- TypeScript
- Tailwind CSS

## Running locally

```bash
git clone https://github.com/prakhar895/lumina-os.git
cd lumina-os
npm install
npm run dev
```

No API keys, no environment variables, no backend, no external services. Fonts and imagery are self-hosted, so the page makes zero third-party network requests at runtime.

To check the production build, including the Pages base path:

```bash
npm run build
npm run preview
```

`vite.config.js` sets `base: '/lumina-os/'`. Change it if you fork this under a different repository name, or the built asset paths will 404 on Pages.

## Structure

```
src/
├── data/
│   ├── features.ts          Six feature cards: title, body copy, icon key
│   ├── capabilities.ts      Four showcase entries with preview captions
│   └── specs.ts             Specification label/value pairs
├── lib/
│   ├── tokens.ts            Colour, radius, spacing and type constants
│   └── featureReducer.ts    Toggle state, actions, initial state
├── hooks/
│   ├── useReveal.ts         IntersectionObserver entrance animation
│   ├── useParallax.ts       Single rAF handler writing CSS custom properties
│   ├── useReducedMotion.ts  prefers-reduced-motion listener
│   └── useTabList.ts        Roving tabindex and arrow key navigation
├── components/
│   ├── GlassPanel.tsx       Shared blurred surface with solid fallback
│   ├── Hero.tsx             Headline, buttons, receding spatial panels
│   ├── FeatureGrid.tsx      Six cards driven by the reducer
│   ├── FeatureCard.tsx      Restyled checkbox toggle with state label
│   ├── Showcase.tsx         Tablist, tabpanels, large preview panel
│   ├── SpecTable.tsx        Two-column table, hairline dividers
│   ├── ClosingCta.tsx       Centered headline and single button
│   ├── Footer.tsx           Four link columns and fine print
│   └── SkipLink.tsx         Skip to main content
├── styles/
│   ├── tokens.css           Design tokens as CSS custom properties
│   └── index.css            Tailwind layers, @font-face, focus ring
├── App.tsx                  Landmarks, section order, state wiring
└── main.tsx                 Entry point
public/
├── fonts/                   Variable woff2, latin subset, preloaded
└── media/                   Hero visual as AVIF with WebP fallback
.github/workflows/deploy.yml  Builds and publishes to Pages on push to main
DESIGN.md                     Token reference the implementation is held to
```

---

Fictional concept. Built as a frontend engineering exercise.
