import Link from 'next/link';
import Image from 'next/image';
import { getRelatedProducts } from '@/data/products';
import { formatPrice } from '@/lib/formatPrice';
import styles from './RelatedProducts.module.css';

export default function RelatedProducts({ currentHandle, category }) {
  const related = getRelatedProducts(currentHandle, category, 4);

  if (related.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>You May Also Like</h2>
      <div className={styles.grid}>
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.handle}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={product.images[0].url}
                alt={product.title}
                fill
                sizes="(max-width: 480px) 50vw, (max-width: 992px) 50vw, 25vw"
              />
            </div>
            <span className={styles.cardTitle}>{product.title}</span>
            <span className={styles.cardPrice}>{formatPrice(product.price)}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
