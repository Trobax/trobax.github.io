# Zakaria Hammoud — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **GSAP 3 (ScrollTrigger + SplitText)** and **Framer Motion**. Exported as a static site and deployed to GitHub Pages.

## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the dev server on http://localhost:3000 |
| `npm run build` | Static export to `./out`                     |
| `npm run lint`  | Lint with oxlint                             |

## Structure

```
src/
  app/
    layout.tsx        # Root layout, metadata, next/font
    page.tsx          # Home page (section composition)
    globals.css       # Tailwind v4 @theme tokens + global styles
    orbiting-demo/    # Demo route
  components/
    *.jsx             # Page sections (client components)
    ui/timeline.tsx   # Pinned horizontal GSAP timeline ("Product Storyline")
  data.js             # Portfolio content
public/               # Static assets
```

## Timeline component

`src/components/ui/timeline.tsx` pins its section and scrolls a track horizontally with ScrollTrigger. The scroll distance is measured from the DOM, so it adapts to any viewport. Each milestone reveals as its node crosses a fixed on-screen playhead (`containerAnimation`). The progress rail always ends exactly at that playhead.

```tsx
<Timeline
  title="Product"
  highlight="Storyline"
  items={[{ id: "2020-march", year: "2020", month: "March", content: "..." }]}
/>
```

> Do not add `overflow-hidden` / `overflow-x-hidden` to any ancestor of the timeline. It creates a scroll container and breaks pinning. Horizontal overflow is clipped on `<body>` with `overflow-x: clip` instead.
