import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import styles from './policy.module.css';

export const metadata = {
  title: `Shipping & Returns | ${SITE_NAME}`,
  description: 'Learn about our shipping timelines, delivery charges, return policy, and exchange process at Begum Jahan Chikankari.',
};

export default function ShippingReturnsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Shipping & Returns</h1>
        <p className={styles.subtitle}>
          We want every experience with Begum Jahan to be seamless — from order to unboxing and beyond.
        </p>
      </div>

      <div className={styles.content}>
        {/* Shipping */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Shipping</h2>
          <div className={styles.body}>
            <p>
              All orders are processed within <strong>1-2 business days</strong>. Once dispatched,
              you will receive a tracking link via email and WhatsApp.
            </p>

            <div className={styles.highlight}>
              <p>✦ Free shipping on all orders above ₹5,000 within India.</p>
            </div>

            <p><strong>Domestic Shipping (India)</strong></p>
            <ul>
              <li>Standard Delivery: 5-7 business days — ₹99 (free above ₹5,000)</li>
              <li>Express Delivery: 2-3 business days — ₹249</li>
              <li>Cash on Delivery (COD): Available up to ₹15,000 — ₹50 COD fee applies</li>
            </ul>

            <p><strong>International Shipping</strong></p>
            <ul>
              <li>Delivery within 10-15 business days</li>
              <li>Shipping charges calculated at checkout based on destination</li>
              <li>Customs duties and import taxes, if applicable, are the buyer&apos;s responsibility</li>
            </ul>
          </div>
        </section>

        {/* Returns */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Returns</h2>
          <div className={styles.body}>
            <p>
              We accept returns within <strong>7 days of delivery</strong>. To be eligible for a return,
              items must meet the following conditions:
            </p>
            <ul>
              <li>Unworn, unwashed, and undamaged</li>
              <li>In original packaging with all tags attached</li>
              <li>Free from perfume, deodorant, or any other marks</li>
            </ul>

            <p>
              <strong>How to return:</strong> Email us at{' '}
              <a href="mailto:hello@begumjahan.com">hello@begumjahan.com</a> or message us on
              WhatsApp with your order number. We&apos;ll arrange a reverse pickup within 48 hours.
            </p>

            <p>
              Refunds are processed to the original payment method within <strong>5-7 business days</strong> after
              we receive and inspect the returned item.
            </p>
          </div>
        </section>

        {/* Exchanges */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exchanges</h2>
          <div className={styles.body}>
            <p>
              Size exchanges are <strong>free of charge</strong>. Simply reach out to us within 7 days
              of delivery and we&apos;ll send the correct size once the original is picked up. Subject to availability.
            </p>
          </div>
        </section>

        {/* Damaged Items */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Damaged or Defective Items</h2>
          <div className={styles.body}>
            <p>
              If you receive a damaged or defective item, please contact us within <strong>48 hours</strong> of
              delivery with photographs. We will arrange a free replacement or full refund — no questions asked.
            </p>
          </div>
        </section>

        {/* Non-returnable */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Non-Returnable Items</h2>
          <div className={styles.body}>
            <ul>
              <li>Custom or made-to-order pieces</li>
              <li>Items purchased during final sale or clearance</li>
              <li>Gift cards</li>
            </ul>
          </div>
        </section>

        <div className={styles.highlight}>
          <p>
            Have a question? <Link href="/contact">Contact us</Link> — we&apos;re here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
