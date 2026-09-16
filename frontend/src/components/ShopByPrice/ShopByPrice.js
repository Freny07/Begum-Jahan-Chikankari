'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RevealWrapper } from '@/components/ScrollReveal/ScrollReveal';
import styles from './ShopByPrice.module.css';

const PRICE_RANGES = [
  {
    label: 'Under ₹5,000',
    href: '/collections/all?price=0-5000',
    image: '/images/price_1_1789585277370.jpg',
  },
  {
    label: '₹5,000 - ₹10,000',
    href: '/collections/all?price=5000-10000',
    image: '/images/price_2_1789585287124.jpg',
  },
  {
    label: '₹10,000 - ₹25,000',
    href: '/collections/all?price=10000-25000',
    image: '/images/price_3_1789585301961.jpg',
  },
  {
    label: 'Luxury (₹25,000+)',
    href: '/collections/all?price=25000-',
    image: '/images/price_4_1789585314453.jpg',
  },
];

export default function ShopByPrice() {
  return (
    <section className={styles.section} aria-labelledby="shop-by-price-title">
      <div className="container">
        <RevealWrapper className={styles.header}>
          <h2 id="shop-by-price-title" className={styles.title}>
            Shop By Price
          </h2>
        </RevealWrapper>

        <div className={styles.grid}>
          {PRICE_RANGES.map((range, index) => (
            <RevealWrapper key={range.label} delay={index + 1}>
              <Link href={range.href} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={range.image}
                    alt={range.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className={styles.image}
                  />
                </div>
                <span className={styles.label}>{range.label}</span>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
