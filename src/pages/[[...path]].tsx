import * as React from 'react';
import type { GetServerSideProps } from 'next';
import type { LayoutServiceData } from '@/lib/sitecore/types';
import { Placeholder } from '@/components/sitecore/Placeholder';
import { fetchLayoutData } from '@/lib/sitecore/fetchLayoutData';

type PageProps = {
  layoutData: LayoutServiceData;
  path: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const segments = (context.params?.path as string[] | undefined) ?? [];
  const path = `/${segments.join('/')}`.replace(/\/$/, '') || '/';

  const layoutData = await fetchLayoutData({ path, context });

  if (!layoutData?.sitecore?.route) {
    return { notFound: true };
  }

  return { props: { layoutData, path } };
};

export default function RoutePage({ layoutData, path }: PageProps) {
  const route = layoutData.sitecore.route;

  if (!route) return null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-4 text-sm text-gray-500">Route: {path}</div>
      <Placeholder name="main" rendering={route} />
    </main>
  );
}
