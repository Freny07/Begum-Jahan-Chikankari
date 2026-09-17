import { SITE_NAME } from '@/lib/constants';
import styles from './contact.module.css';

export const metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: 'Get in touch with Begum Jahan Chikankari. Visit our Lucknow store, email us, or call for enquiries about our handcrafted collections.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          We would love to hear from you. Whether it&apos;s a question about our products, 
          a custom order, or just to say hello — drop us a message.
        </p>
      </div>

      <div className={styles.layout}>
        {/* Contact Form */}
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input id="name" type="text" className={styles.input} placeholder="Your name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input id="email" type="email" className={styles.input} placeholder="you@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone (Optional)</label>
            <input id="phone" type="tel" className={styles.input} placeholder="+91 " />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textarea} placeholder="Tell us what you're looking for..." required />
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>

        {/* Info Column */}
        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Visit Our Store</span>
            <p className={styles.infoText}>
              Begum Jahan Hazratganj<br />
              Lucknow, Uttar Pradesh 226001<br />
              India
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Store Hours</span>
            <p className={styles.infoText}>
              Monday – Sunday<br />
              11:00 AM – 8:30 PM
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Email</span>
            <p className={styles.infoText}>
              <a href="mailto:hello@begumjahan.com" className={styles.infoLink}>hello@begumjahan.com</a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Phone / WhatsApp</span>
            <p className={styles.infoText}>
              <a href="tel:+919999999999" className={styles.infoLink}>+91 99999 99999</a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Follow Us</span>
            <p className={styles.infoText}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Instagram</a>
              {' · '}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Facebook</a>
              {' · '}
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>Pinterest</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
