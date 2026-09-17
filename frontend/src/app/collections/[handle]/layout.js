import { MOCK_COLLECTIONS } from '@/data/products';
import { SITE_NAME } from '@/lib/constants';

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const collection = MOCK_COLLECTIONS.find((c) => c.handle === handle);

  if (!collection) {
    return { title: `Collection | ${SITE_NAME}` };
  }

  return {
    title: `${collection.title} | ${SITE_NAME}`,
    description: collection.description,
  };
}

export function generateStaticParams() {
  return MOCK_COLLECTIONS.map((c) => ({ handle: c.handle }));
}

export default function CollectionLayout({ children }) {
  return children;
}
