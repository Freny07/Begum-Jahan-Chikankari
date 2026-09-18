import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.ornament}>404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.text}>
        The page you&apos;re looking for may have been moved, deleted, or perhaps
        it never existed. Let&apos;s get you back to something beautiful.
      </p>
      <Link href="/" className={styles.homeLink}>
        Return Home
      </Link>
    </div>
  );
}
