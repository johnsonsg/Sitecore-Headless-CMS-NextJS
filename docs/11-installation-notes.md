# Installation Notes (Detailed)

This repo intentionally includes multiple libraries that are commonly used on enterprise sites.

## Dependencies overview

### Next.js + React + TypeScript

Used for routing, SSR, and React rendering.

Install:

```bash
npm install
```

### Tailwind CSS (v4)

Tailwind is used as the **primary global CSS baseline** and utility system.

Key files:

- `src/styles/globals.css` (imports Tailwind)
- `postcss.config.js` (enables Tailwind PostCSS plugin)

Notes:

- Tailwind v4 uses `@tailwindcss/postcss`.
- Some older docs mention `npx tailwindcss init -p`; in Tailwind v4 the CLI is a separate package and this command can fail depending on your setup.
- This repo uses a minimal PostCSS configuration and CSS import instead of relying on the Tailwind CLI.

### MUI (Material UI) + Emotion

MUI provides accessible, tested UI components.

Install:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled @emotion/server
```

SSR setup (Pages Router):

- `src/pages/_document.tsx` extracts critical CSS for SSR.
- `src/createEmotionCache.ts` ensures stable style ordering.

### Jotai

Jotai is used for client-side state:

- theme mode
- cart badge
- selected park

Install:

```bash
npm install jotai
```

Persistence:

- Atoms use `localStorage` via `atomWithStorage`.

## Environment variables

This sandbox does not require env vars.

When you integrate real Sitecore, you will likely add:

- `SITECORE_HOST`
- `SITECORE_API_KEY`
- `SITECORE_SITE_NAME`

(Exact names depend on your team.)
