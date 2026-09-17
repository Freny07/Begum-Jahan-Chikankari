import Image from 'next/image';
import { SITE_NAME } from '@/lib/constants';
import styles from './story.module.css';

export const metadata = {
  title: `Our Story | ${SITE_NAME}`,
  description: 'Discover the heritage behind Begum Jahan Chikankari — a story of Lucknow, artisan craft, and timeless elegance passed through generations.',
};

export default function OurStoryPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.heroBanner}>
        <Image
          src="/images/heritage-lucknow.jpg"
          alt="Historic Lucknow architecture"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Our Story</h1>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <section className={styles.section}>
          <span className={styles.sectionLabel}>The Beginning</span>
          <h2 className={styles.sectionTitle}>Born in Lucknow</h2>
          <div className={styles.sectionBody}>
            <p>
              Begum Jahan Chikankari was founded with a singular vision — to preserve and celebrate 
              the centuries-old art of Lucknowi Chikankari while making it accessible to the modern world. 
              Rooted in the culturally rich lanes of Hazratganj, our journey began with a deep reverence 
              for the artisans who have kept this craft alive through generations.
            </p>
            <p>
              What started as a small family endeavour has grown into a beloved brand, yet our core 
              remains unchanged — every piece we create is a conversation between heritage and the hand 
              that embroiders it.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <span className={styles.sectionLabel}>The Craft</span>
          <h2 className={styles.sectionTitle}>Needle, Thread, Patience</h2>
          <div className={styles.sectionBody}>
            <p>
              Chikankari is one of the most delicate and intricate forms of hand embroidery in the world, 
              originating in Lucknow over 400 years ago. Each piece passes through up to 16 stages of 
              craftsmanship — from block printing the design on fabric, to the meticulous hand-stitching 
              of motifs using techniques like tepchi, bakhiya, phanda, and jaali.
            </p>
            <p>
              A single garment can take anywhere from 15 days to 3 months to complete, depending on the 
              complexity of the design. There are no shortcuts, no machines — only the quiet devotion of 
              skilled hands.
            </p>
          </div>
        </section>

        {/* Image Break */}
        <div className={styles.imageBreak}>
          <Image
            src="/images/style_dupatta_1789585450873.jpg"
            alt="Artisan Chikankari embroidery detail"
            fill
            sizes="100vw"
          />
        </div>

        <section className={styles.section}>
          <span className={styles.sectionLabel}>Our Promise</span>
          <h2 className={styles.sectionTitle}>Authenticity Above All</h2>
          <div className={styles.sectionBody}>
            <p>
              In a market flooded with machine-made imitations, we remain committed to authentic, 
              hand-embroidered Chikankari. We work directly with artisan families in Lucknow, 
              ensuring fair wages, dignified working conditions, and the preservation of a craft 
              that is as much a part of India&apos;s cultural identity as its monuments.
            </p>
            <p>
              When you wear Begum Jahan, you wear the work of real hands — and the legacy of an entire city.
            </p>
          </div>
        </section>

        {/* Values */}
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>✦</div>
            <h3 className={styles.valueTitle}>100% Handcrafted</h3>
            <p className={styles.valueText}>
              Every stitch is placed by hand — no machines, no shortcuts.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>♡</div>
            <h3 className={styles.valueTitle}>Artisan First</h3>
            <p className={styles.valueText}>
              Fair wages and dignified conditions for every artisan we partner with.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>◇</div>
            <h3 className={styles.valueTitle}>Heritage Craft</h3>
            <p className={styles.valueText}>
              Preserving a 400-year-old tradition for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
