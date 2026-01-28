# Layout Service and Placeholders

## What is “layout data”?

Layout data is a structured JSON representation of a page:

- the route (`/about`)
- the components on the page
- the content fields for those components
- the placeholder (region) structure

In this repo the layout data type is defined in `src/lib/sitecore/types.ts`.

## Example payload shape

The mock endpoint returns a shape like:

- `sitecore.context` (site/language, etc.)
- `sitecore.route` (null if not found)
- `sitecore.route.placeholders.main` (array of renderings)

Each rendering has:

- `componentName` (example: `Hero`)
- `fields` (example: `title`, `text`)

## How the React rendering works

1. The route page fetches layout JSON.
2. It calls:

- `Placeholder name="main" rendering={route}`

3. `Placeholder` loops `route.placeholders.main` and maps each rendering:

- `getComponent(rendering.componentName)`

4. The matching component receives the `rendering` (including `fields`).

## Exercise: add a second component

A great way to learn is to add a second component:

1. Create `src/components/PromoCard.tsx`
2. Add it to `src/lib/sitecore/componentFactory.ts`
3. Update `src/pages/api/layout.ts` to return a `PromoCard` rendering in `main`

When you refresh the page, your new component should appear.

In real Sitecore, step (3) would be done by content authors in the editor.
