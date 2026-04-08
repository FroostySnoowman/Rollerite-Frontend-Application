# Anvil Coffee Co. (Marketing Site)

A **React + TypeScript + Vite** front-end for a fictional coffee shop, **Anvil Coffee Co.**: neubrutalist UI (hard borders, offset shadows), **light/dark** theme with persistence, **multi-page** routing, responsive layout, accessible navigation (skip link, mobile menu focus handling), and **lazy-loaded** routes. **No backend** — the contact form is UI-only.

---

## Table of contents

1. [What the app does](#what-the-app-does)
2. [Requirements](#requirements)
3. [Setup](#setup)
4. [Scripts](#scripts)
5. [Theming](#theming)
6. [Routing and pages](#routing-and-pages)
7. [Assets](#assets)
8. [Build and preview](#build-and-preview)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)
11. [License](#license)

---

## What the app does

| Area | Summary |
|------|---------|
| **Branding** | **Anvil Coffee Co.** — wordmark **Anvil** in the nav; full name in the footer and metadata. |
| **Pages** | **Home** (hero, story, menu highlights, visit), **Menu**, **About** (team cards), **Contact** (placeholder form + hours/address). |
| **Layout** | Sticky **navbar** (desktop links + CTA, mobile drawer with `aria-*` and focus trap), **footer** with nav + social placeholders. |
| **Theme** | **`data-theme`** on `<html>` (`light` / `dark`), CSS variables in `src/index.css`, toggle in the nav. **localStorage** key `anvil-coffee-theme`; inline script in `index.html` reduces flash on first paint. |
| **Scroll** | **Scroll-to-top** on pathname change (`src/components/layout/ScrollToTop.tsx`). |
| **Styling** | **Tailwind CSS v4** via `@tailwindcss/vite`, plus custom **neu-*** classes (cards, shadows, press states) and **Syne** + **DM Sans** from Google Fonts. |
| **Performance** | Route-level **code splitting** with `React.lazy` + `Suspense` in `App.tsx`. |
| **Contact** | Form **`preventDefault`** + ephemeral success message — no API. |

---

## Requirements

- **Node.js** **20.x** or **22.x** LTS recommended (Vite 5 and the toolchain are tested against supported Node releases; very old or odd versions may warn or fail).
- **npm** (or another client that respects `package-lock.json`).

Dependencies are declared in `package.json` (React 19, React Router 7, Tailwind 4, Vite 5, TypeScript 6, ESLint 9).

---

## Setup

1. **Clone** or copy the project and open the project directory.

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the dev server** (HMR enabled):

   ```bash
   npm run dev
   ```

   Open the URL Vite prints (usually `http://localhost:5173`).

4. **Optional — production build** (see [Build and preview](#build-and-preview)).

There is **no** `.env` file or API keys for this app; everything runs in the browser.

---

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Dev** | `npm run dev` | Vite dev server with hot reload |
| **Build** | `npm run build` | `tsc -b` (project references) then `vite build` → output in `dist/` |
| **Preview** | `npm run preview` | Serves the `dist/` build locally (run after `npm run build`) |
| **Lint** | `npm run lint` | ESLint over the repo |

---

## Theming

- **Mechanism**: `html[data-theme="light"]` and `html[data-theme="dark"]` in `src/index.css` define **tokens** (`--bg-page`, `--fg`, `--accent`, `--border`, shadows, etc.).
- **React**: `ThemeProvider` reads/writes **`data-theme`** and **`localStorage`** (`anvil-coffee-theme`).
- **First visit**: If no stored value, **`prefers-color-scheme`** chooses light vs dark (mirrored in `index.html` inline script and `ThemeContext`).

To rebrand storage without migrating users, change **`THEME_STORAGE_KEY`** in `ThemeContext.tsx` **and** the `k` variable in `index.html` to the same string.

---

## Routing and pages

| Route | Component | Notes |
|-------|-----------|--------|
| `/` | `Home` | Hero, story, highlights, visit |
| `/menu` | `Menu` | Category lists + placeholder prices |
| `/about` | `About` | Copy + team cards |
| `/contact` | `Contact` | Form UI only |

**React Router** (`BrowserRouter`) is used; static hosts must be configured for **SPA fallback** to `index.html` (see [Deployment](#deployment)).

---

## Assets

- Images live under **`public/images/`** and are referenced as **`/images/...`** (copied to `dist/` as-is by Vite).
- **Google Fonts** (Syne, DM Sans) load from `fonts.googleapis.com` (requires network in dev/build unless you self-host).

---

## Build and preview

```bash
npm run build
npm run preview
```

- **Output**: `dist/` — static HTML, hashed JS/CSS, and `public/` assets.
- **Typecheck**: `tsc -b` runs before Vite build (uses `tsconfig.app.json` / `tsconfig.node.json` as wired by the template).

---

## Deployment

This is a **static SPA**. After `npm run build`, upload **`dist/`** to any static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, etc.).

Configure the host so **all document routes** (e.g. `/menu`, `/about`) **serve `index.html`** — otherwise direct loads or refreshes on nested paths will 404.

---

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| **`npm run build` fails** | Node version (prefer 20/22 LTS); run `npm install` again; read `tsc` and Vite errors in the terminal |
| **Blank page or module errors** | Browser console; ensure dev URL matches Vite’s origin; clear cache |
| **Theme wrong on first paint** | `index.html` script vs `ThemeContext` both use the same **`anvil-coffee-theme`** key |
| **404 on refresh** for `/menu`, etc. | Host **SPA rewrite** to `index.html` |
| **Images missing in production** | Files exist under `public/images/`; paths start with **`/images/`** |
| **ESLint failures** | `npm run lint` — fix or adjust `eslint.config.js` |

---

## License

Open source under the [MIT License](LICENSE): use, copy, modify, merge, publish, distribute, sublicense, and/or sell without restriction, provided the license notice is included in copies. The software is provided **as is**, without warranty.