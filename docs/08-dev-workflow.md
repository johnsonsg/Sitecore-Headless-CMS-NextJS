# Dev Workflow (How-to)

This is basically the workflow I use when working in this repo.

## Scripts

From the repo root:

- `npm run dev`
  - Starts Next.js in development mode.
  - Use this for day-to-day coding.

- `npm run build`
  - Runs a full production build.
  - Use this to confirm TypeScript + SSR integration is correct.

- `npm run start`
  - Runs the production server after `npm run build`.

- `npm run lint`
  - Runs Next.js ESLint rules.

## Typical daily loop

1. Start dev server:

```bash
npm run dev
```

2. Make a change (component mapping, layout JSON, UI)
3. Refresh browser
4. Before pushing work / creating a PR:

```bash
npm run build
npm run lint
```

## Working with the mock Layout Service

The mock endpoint lives at:

- `src/pages/api/layout.ts`

Use these routes:

- `/`
- `/about`
- `/tickets`

To add a new route:

1. Add it to the `allowed` set.
2. Decide what components appear in placeholders.

## Adding a new component (repeatable steps)

Example component name: `PromoCard`

1. Create the React component:
   - `src/components/PromoCard.tsx`

2. Register it in the component factory:
   - `src/lib/sitecore/componentFactory.ts`

3. Add it to layout JSON for a route:
   - `src/pages/api/layout.ts`

4. Verify in browser.

## Styling workflow

- Tailwind is global and available everywhere via `src/styles/globals.css`.
- MUI is available via `@mui/material`.

Recommended approach:

- Use MUI components for structure and accessibility.
- Use Tailwind utilities for layout and fast overrides.

If you need deeper control (input label, helper text), use MUI `slotProps` and attach Tailwind classes to the correct slot.

## State workflow

- Use Jotai atoms for client state that changes frequently:
  - cart badge
  - selected park
  - theme mode

- Treat Sitecore layout/content as server data; don’t over-store it in Jotai.

See `docs/07-state-management-jotai.md`.
