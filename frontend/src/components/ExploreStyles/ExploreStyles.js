'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RevealWrapper } from '@/components/ScrollReveal/ScrollReveal';
import styles from './ExploreStyles.module.css';

const STYLES = [
  {
    label: 'Kurta Sets',
    href: '/collections/kurta-sets',
    image: '/images/style_kurta_1789585413476.jpg',
  },
  {
    label: 'Anarkalis',
    href: '/collections/anarkalis',
    image: '/images/style_anarkali_1789585424677.jpg',
  },
  {
    label: 'Sarees',
    href: '/collections/sarees',
    image: '/images/style_saree_1789585438110.jpg',
  },
  {
    label: 'Dupattas',
    href: '/collections/dupattas',
    image: '/images/style_dupatta_1789585450873.jpg',
  },
  {
    label: 'Menswear',
    href: '/collections/mens-wear',
    image: '/images/style_menswear_1789585465701.jpg',
  },
];

export default function ExploreStyles() {
  return (
    <section className={styles.section} aria-labelledby="explore-styles-title">
      <RevealWrapper className={styles.header}>
        <h2 id="explore-styles-title" className={styles.title}>
          Explore Styles
        </h2>
        <Link href="/collections/all" className={styles.viewAll}>
          View All
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </RevealWrapper>

      <div className={styles.grid}>
        {STYLES.map((style, index) => (
          <RevealWrapper key={style.label} delay={index + 1} className={styles.card}>
            <Link href={style.href} style={{ display: 'block', width: '100%', height: '100%' }}>
              <Image
                src={style.image}
                alt={style.label}
                fill
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 33vw, 20vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.label}>{style.label}</span>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
