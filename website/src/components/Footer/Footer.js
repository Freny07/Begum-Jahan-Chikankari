'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Connect to newsletter API
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.footerLogo}>
              Begum Jahan
              <span className={styles.footerLogoSub}>Chikankari</span>
            </Link>
            <p className={styles.brandTagline}>
              Celebrating the timeless art of Lucknowi Chikankari — handcrafted with love, 
              one thread at a time.
            </p>
            <div className={styles.socialIcons}>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Shop</h3>
            {FOOTER_LINKS.shop.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Help Links */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Help</h3>
            {FOOTER_LINKS.help.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterCol}>
            <h3 className={styles.colTitle}>Stay in the Loop</h3>
            <p className={styles.newsletterText}>
              Get the latest from Begum Jahan — new collections, exclusive offers, and stories from our artisans.
            </p>
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={styles.newsletterInput}
                required
                aria-label="Email for newsletter"
              />
              <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
            {subscribed && (
              <p style={{ fontSize: '12px', color: 'rgba(250,248,245,0.8)', marginTop: '4px' }}>
                Thank you for subscribing!
              </p>
            )}
            <div className={styles.paymentRow}>
              <span className={styles.paymentIcon}>VISA</span>
              <span className={styles.paymentIcon}>MASTERCARD</span>
              <span className={styles.paymentIcon}>UPI</span>
              <span className={styles.paymentIcon}>RUPAY</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
