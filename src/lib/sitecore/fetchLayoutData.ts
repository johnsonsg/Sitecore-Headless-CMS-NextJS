import type { GetServerSidePropsContext } from 'next';
import type { LayoutServiceData } from '@/lib/sitecore/types';

type FetchLayoutArgs = {
  path: string;
  context: Pick<GetServerSidePropsContext, 'req'>;
};

function getBaseUrl(req: GetServerSidePropsContext['req']) {
  const proto = (req.headers['x-forwarded-proto'] as string | undefined) ?? 'http';
  const host = req.headers.host;
  return `${proto}://${host}`;
}

export async function fetchLayoutData({ path, context }: FetchLayoutArgs): Promise<LayoutServiceData> {
  const mode = (process.env.SITECORE_MODE ?? 'mock').toLowerCase();

  // Default: use our local mock endpoint.
  if (mode === 'mock') {
    const baseUrl = getBaseUrl(context.req);
    const res = await fetch(`${baseUrl}/api/layout?path=${encodeURIComponent(path)}`);
    return (await res.json()) as LayoutServiceData;
  }

  // Real Sitecore Layout Service (JSS-style). This expects Sitecore to return a LayoutServiceData-compatible payload.
  if (mode === 'sitecore') {
    const layoutServiceUrl = process.env.SITECORE_LAYOUT_SERVICE_URL;
    const apiKey = process.env.SITECORE_API_KEY;
    const siteName = process.env.SITECORE_SITE_NAME ?? 'website';
    const language = process.env.SITECORE_LANGUAGE ?? 'en';

    if (!layoutServiceUrl) {
      throw new Error('SITECORE_LAYOUT_SERVICE_URL is required when SITECORE_MODE=sitecore');
    }

    const url = new URL(layoutServiceUrl);
    // JSS Layout Service commonly expects these query params:
    // - item: route path (e.g. /about)
    // - sc_lang: language
    // - sc_site: site name
    // - sc_apikey: API key (if required)
    url.searchParams.set('item', path);
    url.searchParams.set('sc_lang', language);
    url.searchParams.set('sc_site', siteName);
    if (apiKey) url.searchParams.set('sc_apikey', apiKey);

    const res = await fetch(url.toString(), {
      headers: {
        accept: 'application/json',
      },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Layout Service request failed (${res.status}): ${body.slice(0, 500)}`);
    }

    return (await res.json()) as LayoutServiceData;
  }

  throw new Error(`Unknown SITECORE_MODE: ${mode}`);
}
