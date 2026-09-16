'use client';

import { RevealWrapper } from '@/components/ScrollReveal/ScrollReveal';
import styles from './Philosophy.module.css';

export default function Philosophy() {
  return (
    <section className={styles.philosophy} id="philosophy">
      <div className={styles.inner}>
        <RevealWrapper>
          <div className={styles.dividerTop}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerIcon}>✦</span>
            <span className={styles.dividerLine} />
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1}>
          <h2 className={styles.quote}>
            <span className={styles.quoteLine}>One Thread.</span>
            <span className={styles.quoteLine}>Countless Hands.</span>
            <span className={styles.quoteLine}>And a Timeless,</span>
            <span className={styles.quoteLine}>Unrelenting</span>
            <span className={styles.quoteLine}>Legacy of Craft.</span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={2}>
          <p className={styles.body}>
            Every piece in our collection is a testament to the centuries-old art of 
            Lucknowi Chikankari — meticulously hand-embroidered by skilled artisans 
            who have inherited this craft through generations.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
