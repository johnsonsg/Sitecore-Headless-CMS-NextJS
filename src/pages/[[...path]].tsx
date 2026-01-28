import * as React from 'react';
import type { GetServerSideProps } from 'next';
import type { LayoutServiceData } from '@/lib/sitecore/types';
import { Placeholder } from '@/components/sitecore/Placeholder';

type PageProps = {
  layoutData: LayoutServiceData;
  path: string;
};

function getBaseUrl(req: Parameters<GetServerSideProps>[0]['req']) {
  const proto = (req.headers['x-forwarded-proto'] as string | undefined) ?? 'http';
  const host = req.headers.host;
  return `${proto}://${host}`;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const segments = (context.params?.path as string[] | undefined) ?? [];
  const path = `/${segments.join('/')}`.replace(/\/$/, '') || '/';

  const baseUrl = getBaseUrl(context.req);
  const res = await fetch(`${baseUrl}/api/layout?path=${encodeURIComponent(path)}`);
  const layoutData = (await res.json()) as LayoutServiceData;

  if (!layoutData?.sitecore?.route) {
    return { notFound: true };
  }

  return { props: { layoutData, path } };
};

export default function RoutePage({ layoutData, path }: PageProps) {
  const route = layoutData.sitecore.route;

  if (!route) return null;

  return (
    <main className="mx-auto max-w-[900px] px-4 py-10">
      <div className="mb-4 text-sm text-gray-500">Route: {path}</div>
      <Placeholder name="main" rendering={route} />
    </main>
  );
}
