'use client';

import { useState, useEffect, useCallback } from 'react';
import { useUI } from '@/context/UIContext';
import { ANNOUNCEMENTS } from '@/lib/constants';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const { isAnnouncementVisible, dismissAnnouncement } = useUI();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animState, setAnimState] = useState('active');

  // Auto-rotate announcements
  useEffect(() => {
    if (!isAnnouncementVisible || ANNOUNCEMENTS.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnnouncementVisible, currentIndex]);

  const goToNext = useCallback(() => {
    setAnimState('exitUp');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
      setAnimState('enterDown');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimState('active');
        });
      });
    }, 300);
  }, []);

  const goToPrev = useCallback(() => {
    setAnimState('exitUp');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
      setAnimState('enterDown');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimState('active');
        });
      });
    }, 300);
  }, []);

  return (
    <div className={`${styles.bar} ${!isAnnouncementVisible ? styles.hidden : ''}`} role="banner">
      <div className={styles.content}>
        <button className={styles.arrowBtn} onClick={goToPrev} aria-label="Previous announcement">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.textWrapper}>
          <span className={`${styles.text} ${styles[animState]}`}>
            {ANNOUNCEMENTS[currentIndex]}
          </span>
        </div>

        <button className={styles.arrowBtn} onClick={goToNext} aria-label="Next announcement">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <button className={styles.closeBtn} onClick={dismissAnnouncement} aria-label="Dismiss announcement">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
