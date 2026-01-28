# Headless Sitecore + Next.js (Learning Sandbox)

This repo is a beginner-friendly sandbox to learn the **Sitecore headless rendering model** using **Next.js + React + TypeScript**.

It starts with a **mock Sitecore Layout Service** so you can learn the rendering pipeline *before* you have access to a real Sitecore instance.

## Quick Start

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/tickets`

## Key Files

- Catch-all route (Sitecore-style routing): `src/pages/[[...path]].tsx`
- Mock Layout Service endpoint: `src/pages/api/layout.ts`
- Placeholder renderer: `src/components/sitecore/Placeholder.tsx`
- Component mapping: `src/lib/sitecore/componentFactory.ts`

## Docs (start here)

- [docs/00-onboarding.md](docs/00-onboarding.md)
- [docs/01-overview.md](docs/01-overview.md)
- [docs/02-architecture.md](docs/02-architecture.md)
- [docs/03-layout-service-and-placeholders.md](docs/03-layout-service-and-placeholders.md)
- [docs/04-from-mock-to-real-sitecore.md](docs/04-from-mock-to-real-sitecore.md)
- [docs/05-troubleshooting.md](docs/05-troubleshooting.md)
- [docs/06-styling-tailwind-and-mui.md](docs/06-styling-tailwind-and-mui.md)
- [docs/07-state-management-jotai.md](docs/07-state-management-jotai.md)

Onboarding/how-to references:

- [docs/08-dev-workflow.md](docs/08-dev-workflow.md)
- [docs/11-installation-notes.md](docs/11-installation-notes.md)
- [docs/09-sitecore-integration-checklist.md](docs/09-sitecore-integration-checklist.md)
- [docs/10-glossary.md](docs/10-glossary.md)

## Notes

- This repo is intentionally small and “hand-rolled” so you can see the moving parts. When you connect to real Sitecore, we’ll likely switch to the official Sitecore JSS packages for Next.js.
