'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RevealWrapper } from '@/components/ScrollReveal/ScrollReveal';
import styles from './AsSeenOn.module.css';

export default function AsSeenOn() {
  return (
    <section className={styles.section} aria-labelledby="as-seen-on-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <RevealWrapper>
            <span className={styles.label}>As Seen On</span>
            <h2 id="as-seen-on-title" className={styles.title}>
              The Royal Edit
            </h2>
          </RevealWrapper>
          
          <RevealWrapper delay={1}>
            <blockquote className={styles.quote}>
              "Begum Jahan brings the royal heritage of Awadh into the modern wardrobe. 
              The craftsmanship is simply unparalleled, making every piece feel like a cherished heirloom."
            </blockquote>
          </RevealWrapper>

          <RevealWrapper delay={2}>
            <Link href="/collections/royal-edit" className={styles.link}>
              Shop The Look
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </RevealWrapper>
        </div>

        <RevealWrapper className={styles.imageCol} delay={1}>
          <Image
            src="/images/style_anarkali_1789585424677.jpg"
            alt="Celebrity wearing Begum Jahan Chikankari"
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            className={styles.image}
          />
        </RevealWrapper>
      </div>
    </section>
  );
}
