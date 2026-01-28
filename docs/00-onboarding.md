# Getting Started

This repository is a learning sandbox that mirrors a real-world **Sitecore headless** build:

- **Next.js + React + TypeScript** for the front end
- A **Layout Service** (mocked here) that returns Sitecore-like JSON
- Component rendering driven by **placeholders** + `componentName` mapping
- **Tailwind CSS** as the primary global styling baseline
- **MUI (Material UI)** as a component library, overridden when needed with Tailwind
- **Jotai** for client-side application state (theme, cart badge, selected park)

## 0) What you should know first

### What is “Sitecore headless” in one sentence?

Sitecore manages **content + page composition** and exposes a JSON “layout” payload; your Next.js app renders that payload into React components.

### What is mocked vs real in this repo?

- Mocked: `GET /api/layout?path=/about` returns a Sitecore-like layout JSON.
- Real Sitecore: Layout JSON would come from Sitecore Layout Service / JSS / GraphQL.

This allows you to learn the rendering pipeline before you have a Sitecore instance.

## 1) Prerequisites (macOS)

### Required

- Node.js (LTS recommended)
- npm (comes with Node)

### Quick checks

```bash
node -v
npm -v
```

If you run into strange issues, the safest baseline is:

- Node LTS
- A clean `node_modules`

## 2) Install

From the repo root:

```bash
npm install
```

What this does:

- Installs Next.js, React, TypeScript
- Installs Tailwind CSS (v4) + PostCSS plugin
- Installs MUI (Material UI) + Emotion (MUI styling engine)
- Installs Jotai for state management

## 3) Run (development)

```bash
npm run dev
```

Open:

- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/tickets

### Common gotcha

If you stop the dev server (Ctrl+C), `curl http://localhost:3000/...` will fail.

## 4) Build (production compile)

```bash
npm run build
```

This verifies:

- TypeScript types
- Next.js compilation
- MUI SSR wiring does not break builds
- Tailwind processing works

## 5) Where to start reading code

1. Routing entry:
   - `src/pages/[[...path]].tsx`
2. Layout data source (mock Layout Service):
   - `src/pages/api/layout.ts`
3. Placeholder rendering:
   - `src/components/sitecore/Placeholder.tsx`
4. Component mapping:
   - `src/lib/sitecore/componentFactory.ts`
5. Styling baseline:
   - `src/styles/globals.css`
6. Global UI + state:
   - `src/pages/_app.tsx`
   - `src/components/layout/SiteHeader.tsx`
   - `src/state/atoms.ts`

## 6) First-day checklist

If you’re new to this repo, these are the Day 1 goals I’d aim for:

- [ ] Run the app locally (`npm install`, `npm run dev`)
- [ ] Understand how routing maps to layout JSON (read docs 02 + 03)
- [ ] Add a new component (read doc 03 exercise)
- [ ] Toggle theme + confirm persistence (Jotai)
- [ ] Understand how we’ll swap mock Layout Service → real Sitecore

## 7) Next steps (learning path)

Follow in order:

- `docs/01-overview.md`
- `docs/02-architecture.md`
- `docs/03-layout-service-and-placeholders.md`
- `docs/06-styling-tailwind-and-mui.md`
- `docs/07-state-management-jotai.md`
- `docs/09-sitecore-integration-checklist.md`
