# From Mock to Real Sitecore

This doc explains the path from the current mock setup to a real Sitecore integration.

## What you need from the Sitecore environment

For a real Sitecore XP/XM (e.g. 10.2.1) headless integration, you typically need:

- The Sitecore **content delivery** host (or edge/CD endpoint)
- The **Layout Service** endpoint URL
- An API key / authentication approach (varies by setup)
- A Site name and language(s)

## What changes in this repo

Today:

- `src/pages/api/layout.ts` generates JSON locally.

Later:

- Replace that mock with a server-side fetch to Sitecore’s Layout Service.
- Add environment variables (host, api key, site name, etc.).

## Recommended incremental approach

1. Keep the current `[[...path]].tsx` route and replace only the fetch URL.
2. Match the JSON shape returned by Sitecore.
3. Add more components in your `componentFactory` as Sitecore renderings appear.
4. Once the pipeline works, consider moving to Sitecore’s official JSS for Next.js packages to reduce manual plumbing.

## Production considerations

- **Preview vs Production**: editors need preview/editing endpoints; public users need fast caching.
- **Caching**: layout requests can be cached aggressively for anonymous traffic.
- **Personalization**: may require per-user context and can limit caching.
- **Commerce**: cart/checkout usually lives in separate APIs, not in Sitecore layout.
