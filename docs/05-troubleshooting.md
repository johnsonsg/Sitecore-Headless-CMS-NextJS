# Troubleshooting

## Dev server stops / curl can’t connect

If you start `npm run dev` and then hit `Ctrl+C`, the server will stop and any `curl` requests to `localhost:3000` will fail.

Use:

```bash
npm run dev
```

…and leave it running while you browse routes in your browser.

## Warning: non-standard NODE_ENV

If your shell environment sets a non-standard `NODE_ENV`, Next.js can warn and behave inconsistently.

This repo’s scripts force standard values:

- `npm run dev` uses `NODE_ENV=development`
- `npm run build` uses `NODE_ENV=production`

If you still see warnings, check your shell profile for `NODE_ENV`.

## create-next-app error: project name cannot contain capital letters

`create-next-app` enforces npm package naming rules. If your folder name contains capital letters (example: `headlessReact`), scaffolding can fail.

Workarounds:

- Create the app in a lowercase directory name, or
- Create the app and then edit `package.json` `name` to be lowercase.

This repo’s `package.json` name is already lowercase.

## Tailwind v4: `npx tailwindcss init -p` may fail

Tailwind v4 can be installed without using the Tailwind CLI. Some setups fail to run `npx tailwindcss init -p` because the CLI is a separate package.

This repo uses:

- `postcss.config.js` with `@tailwindcss/postcss`
- `src/styles/globals.css` importing Tailwind

So you do not need the Tailwind CLI to work.

## Warning: Next.js inferred wrong workspace root

If Next.js finds lockfiles outside this folder, it may pick the wrong root.

This repo sets `turbopack.root` in `next.config.mjs` to keep Next.js anchored to this folder.

## 404 when visiting a route

The mock Layout Service only allows these routes:

- `/`
- `/about`
- `/tickets`

Add routes in `src/pages/api/layout.ts` (the `allowed` set) to expand.
