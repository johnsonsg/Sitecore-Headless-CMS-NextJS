# Connecting this Next.js app to a real Sitecore

This repo currently uses a mock Layout Service endpoint so you can understand the pipeline without needing a Sitecore environment.

When you’re ready, you can point the app at a real Sitecore **Layout Service**.

## What you need from Sitecore

To connect, you need:

- A Sitecore instance that exposes the Layout Service endpoint (JSS/headless)
- The Layout Service URL (example shape: `/sitecore/api/layout/render/jss`)
- A site name (often `website`)
- A language (often `en`)
- Sometimes an API key (`sc_apikey`) depending on how the endpoint is configured

## Configure the app

1) Create an env file:

- Copy `.env.example` → `.env.local`

2) Set the mode and variables:

```bash
SITECORE_MODE=sitecore
SITECORE_LAYOUT_SERVICE_URL=https://YOUR_SITECORE_HOST/sitecore/api/layout/render/jss
SITECORE_SITE_NAME=website
SITECORE_LANGUAGE=en
SITECORE_API_KEY=YOUR_API_KEY_IF_REQUIRED
```

3) Run the app:

```bash
npm run dev
```

## How the request works (SSR)

The catch-all route page:

- [src/pages/[[...path]].tsx](../src/pages/%5B%5B...path%5D%5D.tsx)

runs `getServerSideProps`, which calls:

- [src/lib/sitecore/fetchLayoutData.ts](../src/lib/sitecore/fetchLayoutData.ts)

That helper checks `SITECORE_MODE`:

- `mock` → calls the local mock endpoint (`/api/layout`)
- `sitecore` → calls your real Sitecore Layout Service endpoint

Because `getServerSideProps` runs on the server, this is **server-side rendering (SSR)**.

## Important note about “setting up Sitecore” on macOS

Running a full Sitecore XP/XM instance locally is not as simple as running a Node app.

Common real-world paths are:

- **XM Cloud** (cloud-hosted): easiest way to get a real Sitecore authoring environment without managing infra.
- **A hosted/self-managed Sitecore environment** (dev/test): you connect to an existing Sitecore URL.
- **Local containers/VMs**: depending on the Sitecore product/version, this may require Windows-based infrastructure.

If you tell me which Sitecore you’re planning to use (XM Cloud vs XP/XM self-hosted, and version), I can give you a concrete “do this, then this” setup path.
