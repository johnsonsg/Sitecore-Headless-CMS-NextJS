# State Management: useContext vs Jotai (and what to use here)

## The rule of thumb

- **Server data** (content/layout coming from Sitecore) → fetch per-route and pass as props.
- **Client state** (cart badge, filters, selected park, UI toggles) → a client store can help.

## Why Jotai works well for this kind of site

Jotai is a good fit for “Sitecore + Next.js” because:

- It’s small and easy to reason about.
- State is split into small atoms (avoids big context objects that re-render everything).
- Persistence is simple (atoms backed by `localStorage`).

## What we implemented

- A persisted theme mode atom (`light`/`dark`)
- A persisted cart count atom
- A persisted selected park atom

See:

- `src/state/atoms.ts`
- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/ThemeEffect.tsx`

## Theme: Tailwind + MUI

- Tailwind is the global baseline (Preflight enabled).
- MUI still provides component styles, but Tailwind can override them when you apply utility classes.

The theme toggle drives:

- Tailwind dark mode by toggling `document.documentElement.classList`.
- MUI palette mode by recreating the theme based on the atom.

## Interview-friendly talking points

- Use Context for stable “app services” (config, API clients) and small cross-cutting concerns.
- Use a dedicated store (Jotai) for interactive client state that changes frequently.
- Keep Sitecore layout/content as server data; don’t over-store it on the client.
