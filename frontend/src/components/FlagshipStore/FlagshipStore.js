'use client';

import Image from 'next/image';
import { RevealWrapper } from '@/components/ScrollReveal/ScrollReveal';
import styles from './FlagshipStore.module.css';

export default function FlagshipStore() {
  return (
    <section className={styles.section} aria-labelledby="store-title">
      <div className={styles.bg}>
        <Image
          src="/images/heritage-lucknow.jpg"
          alt="Lucknow architecture"
          fill
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <RevealWrapper>
          <span className={styles.label}>Visit Us</span>
          <h2 id="store-title" className={styles.title}>
            The Flagship Store
          </h2>
          <div className={styles.divider} />
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <div className={styles.info}>
            <address className={styles.address}>
              Begum Jahan Hazratganj<br />
              Lucknow, Uttar Pradesh 226001<br />
              India
            </address>
            <p className={styles.timing}>
              Monday – Sunday<br />
              11:00 AM – 8:30 PM
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={2}>
          <a
            href="https://maps.google.com/?q=Hazratganj+Lucknow"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Get Directions
          </a>
        </RevealWrapper>
      </div>
    </section>
  );
}
