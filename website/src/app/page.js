import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: `url('/images/hero-placeholder.jpg')`,
            backgroundColor: '#3a2f2a',
          }}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>New Collection 2026</span>
          <h1 className={styles.heroTitle}>
            The Art of<br />
            Chikankari
          </h1>
          <p className={styles.heroSubtitle}>
            Handcrafted luxury from the heart of Lucknow. Each piece tells a story 
            of heritage, patience, and timeless elegance.
          </p>
          <Link href="/collections/new-arrivals" className={styles.heroBtn}>
            Explore Collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className={styles.scrollIndicator}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Brand Philosophy - temporary placeholder */}
      <section className={styles.placeholder}>
        <div className="container">
          <h2 className={styles.placeholderTitle}>
            One Thread. Countless Hands.
          </h2>
          <p className={styles.placeholderText}>
            And a timeless, unrelenting legacy of craft. Each stitch carries forward
            centuries of tradition from the artisan workshops of Lucknow.
          </p>
        </div>
      </section>

      {/* More sections will be added in Phase 2 (Prompts 9-18) */}
      <section className={styles.placeholder} style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <p className={styles.placeholderText}>
            ✦ Homepage sections (collections, best sellers, new arrivals, celebrity styles, flagship store) 
            will be built in the next phase.
          </p>
        </div>
      </section>
    </>
  );
}
