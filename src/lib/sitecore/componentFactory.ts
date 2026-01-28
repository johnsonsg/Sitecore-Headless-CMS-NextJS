import Hero from '@/components/Hero';
import PromoCard from '@/components/PromoCard';
import FeatureList from '@/components/FeatureList';

export function getComponent(componentName: string) {
  switch (componentName) {
    case 'Hero':
      return Hero;
    case 'PromoCard':
      return PromoCard;
    case 'FeatureList':
      return FeatureList;
    default:
      return null;
  }
}
