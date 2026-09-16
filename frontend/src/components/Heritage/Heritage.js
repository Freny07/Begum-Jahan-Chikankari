import Image from 'next/image';
import styles from './Heritage.module.css';

export default function Heritage() {
  return (
    <section className={styles.heritage} id="heritage" aria-label="Lucknow Heritage">
      <div className={styles.imageWrapper}>
        <Image
          src="/images/heritage-lucknow.jpg"
          alt="Historic Lucknowi architecture with ornate Mughal-era arches and intricate stone carvings at golden hour"
          fill
          quality={85}
          className={styles.image}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
