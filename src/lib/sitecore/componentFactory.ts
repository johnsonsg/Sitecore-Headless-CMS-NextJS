import Hero from '@/components/Hero';

export function getComponent(componentName: string) {
  switch (componentName) {
    case 'Hero':
      return Hero;
    default:
      return null;
  }
}
