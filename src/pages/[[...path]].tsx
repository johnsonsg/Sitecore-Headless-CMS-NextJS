import * as React from 'react';
import type { GetServerSideProps } from 'next';
import type { CmsLayoutData } from '@/lib/cms/types';
import { Placeholder } from '@/components/cms/Placeholder';
import { fetchLayoutData } from '@/lib/cms/fetchLayoutData';

type PageProps = {
  layoutData: CmsLayoutData;
  path: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const segments = (context.params?.path as string[] | undefined) ?? [];
  const path = `/${segments.join('/')}`.replace(/\/$/, '') || '/';

  const layoutData = await fetchLayoutData({ path, context });

  if (!layoutData?.cms?.route) {
    return { notFound: true };
  }

  return { props: { layoutData, path } };
};

export default function RoutePage({ layoutData, path }: PageProps) {
  const route = layoutData.cms.route;

  if (!route) return null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-4 text-sm text-gray-500">Route: {path}</div>
      <Placeholder name="main" rendering={route} />
    </main>
  );
}
