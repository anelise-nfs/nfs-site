# North Fork Solutions Site

Single-page marketing website for North Fork Solutions, built with React + TypeScript + Vite and deployed on Netlify.

## Stack

- **React 19** — component-based UI
- **TypeScript** — type-safe throughout
- **Vite 6** — dev server and build tooling
- **vite-react-ssg** — static site generation (pre-renders HTML at build time)
- **react-router-dom** — required by vite-react-ssg (single route at `/`)
- **Vanilla CSS** — per-component CSS files, no UI library
- **Heroicons** — SVG icon set (`@heroicons/react`)
- **Netlify** — hosting + contact form handling (via `data-netlify`)

## Fonts

- **Playfair Display** — headings
- **Urbanist** — body and UI text

Both loaded via Google Fonts.

## Project Structure

```
src/
├── assets/
│   ├── css/          # Per-component and per-screen CSS files
│   └── graphics/     # SVGs and images
├── components/       # Reusable UI components (Nav, Hero, Button, etc.)
├── hooks/            # Custom React hooks (useReveal)
├── screens/          # Page sections (About, Services, Work, Contact)
├── App.tsx           # Root — scroll progress bar, custom cursor, layout
└── index.css         # Global styles and CSS custom properties (brand tokens)
```

## Brand Tokens (CSS custom properties)

Defined in `src/index.css`:

| Variable           | Value                    |
| ------------------ | ------------------------ |
| `--nfs-green`      | `#0ac993`                |
| `--nfs-blue`       | `#0a9fc1`                |
| `--nfs-dark-blue`  | `#038dab`                |
| `--nfs-dark-grey`  | `#213547`                |
| `--nfs-light-grey` | `rgba(33, 53, 71, 0.65)` |

## Dev

Requires Node 20+.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
