# Overview: Sitecore Headless + Next.js

## Goal

Learn the core pattern that most “Sitecore + React/Next.js” implementations use:

1. A **route** is requested (example: `/about`).
2. The app fetches **layout data** (page definition + components) from Sitecore (or a mock).
3. The app renders a **placeholder tree** (regions) and maps `componentName` → React component.

This repo implements that flow using a mock endpoint so you can focus on the concepts.

## What you have in this repo

- A Next.js Pages Router app (TypeScript)
- A catch-all route that represents Sitecore-managed URLs
- A mock Layout Service response that looks like Sitecore layout JSON
- A simple component mapping (currently just `Hero`)

## How this relates to real Sitecore

There are two common Sitecore “headless” families:

- **Sitecore XP/XM (self-hosted)** (ex: Sitecore 10.2.1)
  - Typically uses **JSS + Layout Service** (REST) and/or **GraphQL**.
- **Sitecore XM Cloud**
  - Often uses **Experience Edge** (GraphQL), still based on the same “layout + components” idea.

For interview prep, learning the rendering flow is the big win: it transfers across versions.

## Next steps

1. Read [docs/03-layout-service-and-placeholders.md](docs/03-layout-service-and-placeholders.md)
2. Add another component and place it on a route (practice component mapping).
3. Swap the mock endpoint to a real Sitecore endpoint when you have access.
