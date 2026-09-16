import Hero from '@/components/Hero/Hero';
import Philosophy from '@/components/Philosophy/Philosophy';
import Heritage from '@/components/Heritage/Heritage';
import ShopByPrice from '@/components/ShopByPrice/ShopByPrice';
import ExploreStyles from '@/components/ExploreStyles/ExploreStyles';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import AsSeenOn from '@/components/AsSeenOn/AsSeenOn';
import FlagshipStore from '@/components/FlagshipStore/FlagshipStore';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Heritage />
      <ShopByPrice />
      <ExploreStyles />
      <FeaturedProducts title="Best Sellers" />
      <FeaturedProducts title="New Arrivals" />
      <AsSeenOn />
      <FlagshipStore />
    </>
  );
}
