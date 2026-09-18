'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import styles from './faq.module.css';

const FAQ_DATA = [
  {
    category: 'Orders & Shipping',
    items: [
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery within India takes 5-7 business days. Express shipping (2-3 business days) is available at checkout for select pincodes.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes! We ship to over 30 countries worldwide. International orders typically arrive within 10-15 business days. Customs duties, if applicable, are the responsibility of the buyer.',
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order ships, you\'ll receive a tracking link via email and WhatsApp. You can also reach out to us anytime at hello@begumjahan.com.',
      },
      {
        q: 'Is free shipping available?',
        a: 'Yes — all orders above ₹5,000 within India qualify for free standard shipping.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 7 days of delivery. Items must be unworn, unwashed, and in their original packaging with all tags attached.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'Simply email us at hello@begumjahan.com or message us on WhatsApp with your order number. We\'ll arrange a reverse pickup within 48 hours.',
      },
      {
        q: 'Can I exchange for a different size?',
        a: 'Absolutely. Size exchanges are free of charge. Just reach out to us within 7 days of delivery and we\'ll send the new size as soon as the original is picked up.',
      },
    ],
  },
  {
    category: 'Product & Care',
    items: [
      {
        q: 'Is your Chikankari hand-embroidered?',
        a: 'Yes — every single piece in our collection is 100% hand-embroidered by skilled artisans in Lucknow. We never use machine embroidery.',
      },
      {
        q: 'How should I care for my Chikankari garment?',
        a: 'We recommend gentle hand washing in cold water with a mild detergent. Avoid wringing. Dry flat in shade. Iron on medium heat from the reverse side. Do not bleach.',
      },
      {
        q: 'Do you offer custom sizing?',
        a: 'Yes, we offer custom sizing on most of our pieces. Please contact us with your measurements and we\'ll craft it to fit you perfectly. Custom orders take 2-3 weeks.',
      },
    ],
  },
  {
    category: 'Payments',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards, UPI, net banking, Paytm, and Cash on Delivery (COD) for orders within India.',
      },
      {
        q: 'Is COD available?',
        a: 'Yes, Cash on Delivery is available for orders within India up to ₹15,000. A small COD fee of ₹50 applies.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = useCallback((idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  let globalIndex = 0;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Everything you need to know about shopping with Begum Jahan Chikankari.
        </p>
      </div>

      <div className={styles.content}>
        {FAQ_DATA.map((cat) => (
          <div key={cat.category} className={styles.category}>
            <h2 className={styles.categoryTitle}>{cat.category}</h2>
            {cat.items.map((item) => {
              const idx = globalIndex++;
              return (
                <div key={idx} className={styles.faqItem}>
                  <button
                    className={`${styles.question} ${openIndex === idx ? styles.open : ''}`}
                    onClick={() => toggle(idx)}
                    aria-expanded={openIndex === idx}
                  >
                    {item.q}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`${styles.answer} ${openIndex === idx ? styles.open : ''}`}>
                    <div className={styles.answerBody}>{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Still have questions? We&apos;d love to help.
          </p>
          <Link href="/contact" className={styles.ctaLink}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
