# Glossary

## Headless CMS
A CMS that manages content but does not control the rendering layer. Content is delivered via APIs.

## Sitecore Layout Service
A Sitecore API that returns a JSON representation of a page layout (route + placeholders + components).

## JSS (JavaScript Services)
Sitecore’s framework/tooling for building JavaScript-based renderings and headless apps.

## Route
A URL path (e.g. `/about`) that resolves to a page layout.

## Placeholder
A named region on a page that can contain components (renderings). Examples: `main`, `header`, `footer`.

## Rendering / Component Rendering
A component instance placed on a page. It has:

- `componentName` (what React component to render)
- `fields` (content data)

## Fields
Content values coming from Sitecore. Example: `title`, `text`, `image`.

## SSR (Server-Side Rendering)
Render HTML on the server per request.

## SSG (Static Site Generation)
Render HTML at build time.

## ISR (Incremental Static Regeneration)
Regenerate static pages in the background on a schedule.
