import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <Image
        src="/images/hero-main.jpg"
        alt="Elegant white Chikankari anarkali in a traditional Lucknowi haveli"
        fill
        priority
        quality={90}
        className={styles.heroBg}
        sizes="100vw"
      />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <span className={styles.heroLabel}>New Collection 2026</span>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>The Art of</span>
          <span className={styles.heroTitleLine}>Chikankari</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Handcrafted luxury from the heart of Lucknow. Each piece tells
          a story of heritage, patience, and timeless elegance.
        </p>
        <div className={styles.heroActions}>
          <Link href="/collections/womens-wear" className={`${styles.heroBtn} ${styles.heroBtnPrimary}`}>
            Shop Women
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="/collections/mens-wear" className={`${styles.heroBtn} ${styles.heroBtnOutline}`}>
            Shop Men
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLabel}>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
