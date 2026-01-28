# Styling: Tailwind + MUI (Global)

This project uses **both**:

- **Tailwind CSS** for utility classes (fast layout tweaks and spacing)
- **MUI (Material UI)** for higher-level, accessible React components (Card, Button, Typography, etc.)

## What “global” means here

- Tailwind utilities are available everywhere because we import a global CSS file in `src/pages/_app.tsx`.
- MUI theme is global because we wrap the app with `ThemeProvider` in `src/pages/_app.tsx`.

## Why we disabled Tailwind Preflight

Tailwind includes a CSS reset called **Preflight**.

We want Tailwind to be the **primary baseline** in this project, so Preflight is enabled.

Because of that, we **do not** use MUI’s `CssBaseline` here.

Tailwind is enabled in `src/styles/globals.css` with:

```css
@import "tailwindcss";
```

## How Tailwind overrides MUI styles

MUI injects Emotion-generated styles at runtime. To make Tailwind “win” when you add Tailwind utility classes via `className`, we:

- use an Emotion cache configured with `prepend: true`
- wrap the app in `StyledEngineProvider injectFirst`

This causes MUI’s generated styles to appear earlier in the document, so your global CSS (Tailwind) can override when specificity is equal.

## Where the MUI theme lives

- `src/theme.ts` defines the global theme.

## SSR notes (important for Next.js Pages Router)

MUI uses Emotion for styling, and without SSR setup you can get a flash of unstyled content.

We support SSR by:

- creating an Emotion cache: `src/createEmotionCache.ts`
- extracting critical CSS in `src/pages/_document.tsx`

## Quick check

- Run `npm run dev`
- Refresh the page
- You should see:
  - Tailwind utilities working (e.g. spacing classes)
  - MUI components styled correctly with no flicker
