'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/formatPrice';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  if (!product) return null;

  const { title, handle, price, compareAtPrice, images } = product;
  const primaryImage = images?.[0]?.url || product.image; // Fallback for mock data
  const secondaryImage = images?.[1]?.url || primaryImage;

  return (
    <Link href={`/products/${handle}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {primaryImage && (
          <Image
            src={primaryImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.primaryImage}
          />
        )}
        {secondaryImage && (
          <Image
            src={secondaryImage}
            alt={`${title} - Alternate view`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.secondaryImage}
          />
        )}
      </div>

      <div className={styles.info}>
        <span className={styles.vendor}>Begum Jahan</span>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(price)}</span>
          {compareAtPrice && compareAtPrice > price && (
            <span className={styles.comparePrice}>{formatPrice(compareAtPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
