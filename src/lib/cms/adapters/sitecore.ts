import type { CmsLayoutData } from '@/lib/cms/types';
import type { LayoutServiceData } from '@/lib/sitecore/types';

export function sitecoreLayoutToCms(layout: LayoutServiceData): CmsLayoutData {
  return {
    cms: {
      context: layout.sitecore?.context ?? {},
      route: layout.sitecore?.route ?? null,
    },
  };
}
