import type { NextApiRequest, NextApiResponse } from 'next';
import type { LayoutServiceData } from '@/lib/sitecore/types';

function layoutForPath(path: string): LayoutServiceData {
  const routeName = path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-');

  const title =
    path === '/'
      ? 'Hello from a Mock Sitecore Layout Service'
      : `Hello from ${path} (mock Sitecore)`;

  const text =
    path === '/'
      ? 'This page is rendered from Sitecore-like JSON. Next step: swap this mock endpoint for real Sitecore Layout Service + the Sitecore JSS SDK.'
      : 'In a real setup, this layout JSON comes from Sitecore and is editable by authors.';

  return {
    sitecore: {
      context: {
        language: 'en',
        site: 'website',
      },
      route: {
        name: routeName,
        placeholders: {
          main: [
            {
              uid: `hero-${routeName}`,
              componentName: 'Hero',
              fields: {
                title: { value: title },
                text: { value: text },
              },
            },
          ],
        },
      },
    },
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pathParam = req.query.path;
  const path = Array.isArray(pathParam) ? pathParam[0] : pathParam;

  if (!path || typeof path !== 'string' || !path.startsWith('/')) {
    res.status(400).json({ error: 'Query string "path" must be a string starting with "/".' });
    return;
  }

  // Small demo: pretend only a few routes exist.
  const allowed = new Set(['/', '/about', '/tickets']);
  if (!allowed.has(path)) {
    const notFound: LayoutServiceData = { sitecore: { context: {}, route: null } };
    res.status(200).json(notFound);
    return;
  }

  res.status(200).json(layoutForPath(path));
}
