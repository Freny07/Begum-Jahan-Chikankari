import { MOCK_PRODUCTS } from '@/data/products';
import { SITE_NAME } from '@/lib/constants';

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.handle === handle);

  if (!product) {
    return { title: `Product | ${SITE_NAME}` };
  }

  return {
    title: `${product.title} | ${SITE_NAME}`,
    description: product.description?.slice(0, 160),
  };
}

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((p) => ({ handle: p.handle }));
}

export default function ProductLayout({ children }) {
  return children;
}
