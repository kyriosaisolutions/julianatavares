# Studio Juliana Tavares — Landing Page

### A premium one-page site adapted from the Scarlett layout, restyled in the JT sage + nude identity, with arched imagery, curved SVG text, and a complete scroll animation system.  
  
**RULE: THE LANDING PAGE MUST BE IN PORTUGUESE BRAZIL (THE CUSTOMER IS FROM BRAZIL)**

## Design tokens (src/styles.css)

Add semantic tokens in oklch equivalents of:

- sage `#A8B89C`, sage-light `#C5D1B9`, sage-dark `#7A8B6E`
- nude `#D4B5A8`, nude-light `#F2E4DC`
- cream `#FAF7F2` (background), ink `#2A2A2A` (foreground)
Register each in `@theme inline` as `--color-sage`, `--color-nude`, etc. so Tailwind utilities (`bg-sage`, `text-nude`) work. Load Cormorant Garamond (300/400 + italic) and Inter via Google Fonts in `__root.tsx` head links; expose as `--font-display` and `--font-sans`.

## Dependencies

`bun add framer-motion gsap @studio-freight/lenis`

## File structure

```
src/
  routes/index.tsx              # page composition
  components/site/
    Header.tsx                  # sticky nav + JT SVG logo + Book CTA
    Hero.tsx                    # headline, dual arched images, curved text, social rail
    About.tsx                   # pill + serif title + letter reveal
    Services.tsx                # 3 arched cards, GSAP pinned horizontal reveal
    Gallery.tsx                 # masonry of 6 arched images with column parallax
    Testimonials.tsx            # 3-card carousel, sage-light bg
    BookingCTA.tsx              # full-width sage block, WhatsApp CTA
    Footer.tsx                  # 3-col footer
    ArchedImage.tsx             # reusable arch component
    CurvedText.tsx              # SVG textPath circular text
    CircleArrow.tsx             # decorative SVG arrow
    Pill.tsx                    # serif italic pill label
    JTLogo.tsx                  # stylized SVG logo
  lib/
    useLenis.ts                 # Lenis init + GSAP ScrollTrigger sync
    useGsap.ts                  # gsap.context helper
```

## Sections (1:1 with brief)

1. **Header** — sticky, cream + blur on scroll, JT logo left, center nav (About/Services/Gallery/Contact), nude pill "Book Appointment" right.
2. **Hero** — left serif H1 "Beauty that *frees* your curls" (italic + nude on "frees", circle-arrow), "Learn more" with circular arrow; right two arched images (front large w/ sage-light bg, back smaller w/ sage-dark bg + CurvedText ring); far-right vertical social rail with nude lines.
3. **About** — nude-light pill, large serif title with per-letter scroll reveal, paragraph, "Discover our story" + circle arrow.
4. **Services** — three arched cards (Wavy / Curly / Coily), backgrounds sage-light / nude-light / sage. GSAP `pin` for ~150vh with horizontal staggered card reveal.
5. **Gallery** — masonry of 6 arched images, columns with different `yPercent` parallax (-5 to -15), hover zoom + nude overlay "View case".
6. **Testimonials** — horizontal carousel, 3 visible cards, round photos + nude stars, sage-light bg.
7. **Booking CTA** — full-width sage, cream serif headline, large nude WhatsApp button, support line.
8. **Footer** — 3 columns, thin divider, copyright.

## Animations

- **Framer Motion `whileInView**` with `{ once: true, margin: "-100px" }` for all section titles (opacity + y), service-card stagger (0.15s), gallery fade+scale 0.95→1.
- **GSAP ScrollTrigger `scrub: true**`: hero parallax (front image `yPercent: -10`, back `-25`), curved text rotation 0→360 across hero, gallery column parallax.
- **GSAP ScrollTrigger `pin: true**`: Services section pinned 150% vh, horizontal card reveal.
- **Letter reveal**: split About title into spans, animate with ScrollTrigger.
- **Lenis**: init in root layout; `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add` integration.
- **Micro-interactions**: button hover arrow translate-x + scale, arched image hover scale 1.03 / 0.6s.

## Reusable primitives

- `ArchedImage`: `border-radius: 50% 50% 0 0 / 30% 30% 0 0`, colored bg layer behind, `overflow-hidden`, `<img>` w/ object-cover.
- `CurvedText`: SVG with circular `<path id>` + `<textPath href>` so text follows the arc (not CSS rotation).
- `CircleArrow`: inline SVG, thin stroke, nude.
- `Pill`: rounded-full, nude-light bg, serif italic.
- `JTLogo`: SVG large serif "JT" + tiny tracked sans-serif "STUDIO JULIANA TAVARES" + tagline.

## Images

Use the provided Unsplash URLs directly via `<img>` (remote, no asset import needed); supply alt text. Gallery uses 6 textured-hair URLs varying queries.

## Responsive

- Mobile (<768): single-column hero, stacked services (no pin, no horizontal reveal — fallback to vertical stack with stagger), 2-col gallery, disable heavy scrub parallax (keep whileInView reveals).
- Tablet: 2-col gallery, keep services grid (no pin).
- Desktop: full spec.

## SEO (root + index head)

- Title <60: "Studio Juliana Tavares — Wavy, Curly & Coily Hair Specialist"
- Meta description <160: focused on textured hair care.
- Single H1 in Hero; semantic `<section>` per block; alt text on every image; LocalBusiness JSON-LD with name, address placeholder, contact.

## Out of scope

No backend, no booking form logic (CTA links to `https://wa.me/...` placeholder), no CMS, no auth.

## Technical notes

- Lenis + GSAP init runs client-only (guard with `useEffect`); ScrollTrigger registered once.
- Avoid `useEffect`+fetch — no data loading needed.
- All colors via semantic tokens; no raw hex in components.
- Replace placeholder `src/routes/index.tsx`.