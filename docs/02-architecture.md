# Architecture (High Level)

## Moving parts

**Next.js app (this repo)**

- Handles routing and server-side data fetching.
- Renders a component tree from Sitecore-like layout JSON.

**Layout Service (mock today, Sitecore later)**

- Returns a JSON payload describing:
  - the current route
  - placeholders (regions)
  - renderings (components) within placeholders
  - fields (content)

## Request flow

When you load `/about`:

1. Next.js matches the catch-all page: `src/pages/[[...path]].tsx`
2. `getServerSideProps` calls `GET /api/layout?path=/about`
3. The response includes `sitecore.route.placeholders.main[]`
4. The `Placeholder` component loops those renderings and does:

- `componentName` → React component lookup (`componentFactory`)
- passes the rendering’s `fields` into the component

## Key concept: placeholders

A **placeholder** is a named region on the page (e.g. `main`, `header`, `footer`).

In Sitecore, authors place components into placeholders using a page editor.

In this repo, the placeholder tree is defined by JSON returned from the mock endpoint.

## Where commerce/analytics fit

Many large brands (like theme parks) separate concerns:

- **Sitecore**: content + page composition + personalization
- **Commerce system**: cart, checkout, pricing (can be Sitecore or not)
- **Analytics/experimentation**: Optimizely, Google Tag Manager, custom dataLayer

Those scripts you saw on SeaWorld.com are typical and can exist on both MVC and headless builds.
