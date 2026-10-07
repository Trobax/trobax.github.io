# Zakaria Hammoud — Senior Software Engineer Portfolio

Personal portfolio built with **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **GSAP 3 (ScrollTrigger + SplitText)**, and **Framer Motion**. Designed with an engineering / terminal-inspired minimal aesthetic, exported as a static site, and deployed to GitHub Pages.

---

## Tech Stack

- **Framework**: Next.js (App Router, static export)
- **UI Library**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 (`@theme` tokens, zero unnecessary dependencies)
- **Typography**: JetBrains Mono (code/mono accents) & Inter (body)
- **Animations & Interactivity**:
  - **GSAP 3** (`ScrollTrigger` + `SplitText`) for horizontal timeline scrub & reveals
  - **Custom Canvas 3D Icon Cloud** for interactive skills globe
  - **Framer Motion** for UI transitions & modal dialogs
- **Icons**: Lucide Icons & Simple Icons CDN

---

## Getting Started

### Prerequisites

- **Node.js** 20+ (Node 22 / 24 recommended)
- **npm** 10+

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build & Export

```bash
npm run build
```

Generates a static production export in the `./out` directory.

### Linting

```bash
npm run lint
```

Fast linting powered by `oxlint`.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout, Google fonts (Inter & JetBrains Mono), SEO metadata
│   ├── page.tsx           # Main page orchestrating all sections
│   └── globals.css        # Tailwind v4 theme tokens (terminal palette, hairline borders)
├── components/
│   ├── Navbar.jsx         # Editor-style top bar with file-based navigation (01.about, 02.skills...)
│   ├── Hero.jsx           # Terminal session hero ($ whoami, $ cat summary.txt, $ echo $STACK)
│   ├── About.jsx          # Aligned 2x2 window grid (profile.json, bio.md, core_stack, design_tools)
│   ├── Skills.jsx         # Skills overview with 3D canvas icon sphere & category tags
│   ├── Education.jsx      # Changelog-style degrees & certifications
│   ├── Projects.jsx       # Repo-card styled project showcase with README modals
│   ├── Contact.jsx        # CLI-flag styled interactive contact form & direct reach-out
│   ├── Footer.jsx         # Clean monospace copyright and navigation
│   ├── SectionHeader.jsx  # Consistent code-comment styled section headers (01 // about.md)
│   └── ui/
│       ├── icon-cloud.jsx # Interactive 3D Fibonacci sphere canvas for technology icons
│       └── timeline.tsx   # Pinned horizontal GSAP timeline (03 // experience.log)
├── data.js                # Single source of truth for portfolio content & experience
└── public/
    └── favicon.svg        # Terminal prompt (>_) SVG icon with green accent
```

---

## Architecture & Notable Components

### 1. Horizontal GSAP Timeline (`src/components/ui/timeline.tsx`)
Pins the viewport and translates the milestones track horizontally using GSAP `ScrollTrigger`.
- Milestones reveal dynamically as their node passes the fixed on-screen playhead (`containerAnimation`).
- Includes a closing interactive callout panel (`$ git checkout -b next-chapter`).
- **Important**: Horizontal overflow is handled via `overflow-x: clip` on `<body>` to avoid creating a scroll container that would break pinning.

### 2. Interactive 3D Icon Cloud (`src/components/ui/icon-cloud.jsx`)
- Custom, dependency-free HTML5 Canvas implementation using a spherical Fibonacci lattice.
- Drag to spin, inertial coasting, hover pause, and active icon inspection.
- Pulls vector icons directly from Simple Icons CDN tinted to the palette.

---

## Deployment

Automated via GitHub Actions in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `master`. Exports the static bundle to `./out` and deploys to GitHub Pages.

---

## License

MIT © [Zakaria Hammoud](https://github.com/Trobax)
