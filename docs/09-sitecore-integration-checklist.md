# Sitecore Integration Checklist (Mock → Real)

This is a practical checklist you can follow when you get access to a real Sitecore environment.

## 1) Confirm the Sitecore flavor

Common scenarios:

- Sitecore **XP/XM 10.2.x** (self-hosted)
  - Often uses Layout Service (JSS) and/or GraphQL.

- Sitecore **XM Cloud**
  - Often uses Experience Edge (GraphQL) and XM Cloud-specific tooling.

This repo is currently closest to the XP/XM “Layout Service returns JSON” model.

## 2) Collect required environment values

Ask your team for:

- Delivery host URL (content delivery / edge)
- Layout Service endpoint shape and required query params
- Site name
- Language(s)
- Authentication method (API key, cookies, headers, etc.)

## 3) Replace the mock layout fetch

Today the route page fetches:

- `GET /api/layout?path=/about`

In a real integration you’ll typically:

- Fetch directly from Sitecore in `getServerSideProps`
- Or keep a server-side proxy route (like `/api/layout`) that forwards to Sitecore

Why keep a proxy?

- Hide credentials from the browser
- Standardize caching
- Normalize response shape

## 4) Validate routing rules

Decide how to map Sitecore routes to Next.js URLs:

- Sitecore usually owns the URL structure.
- You typically need a catch-all route (already present): `[[...path]].tsx`

## 5) Component naming strategy

In Sitecore, renderings/components typically have a name.

In React, you’ll map that name to a component.

Checklist:

- [ ] Define a stable naming convention (e.g. `Hero`, `PromoCard`, `ContentBlock`)
- [ ] Add every rendering to `componentFactory`
- [ ] Decide what to do with unknown components (render null vs placeholder debug)

## 6) Editing / Experience Editor (future)

Sitecore page editing usually requires extra integration:

- editing host setup
- special scripts / markup
- different endpoints for preview

This sandbox does not implement editing mode yet.

## 7) Performance + caching

Large public sites often need:

- cached layout responses for anonymous traffic
- ISR/SSG for marketing pages (optional)
- SSR for personalized routes

Start with SSR while learning; optimize once correct.

## 8) Security

- Never expose Sitecore API keys to the browser.
- Prefer server-side fetch or server-side proxy routes.

## 9) Go-live readiness

Before go-live:

- [ ] Error handling for missing routes
- [ ] Logging/monitoring around layout fetch
- [ ] Timeouts + retries
- [ ] CDN caching strategy

