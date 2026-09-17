'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUI } from '@/context/UIContext';
import { MOCK_PRODUCTS } from '@/data/products';
import { formatPrice } from '@/lib/formatPrice';
import styles from './SearchOverlay.module.css';

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUI();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isSearchOpen) {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Escape key closes search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) closeSearch();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return MOCK_PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [query]);

  const handleLinkClick = useCallback(() => {
    closeSearch();
    setQuery('');
  }, [closeSearch]);

  return (
    <div className={`${styles.overlay} ${isSearchOpen ? styles.open : ''}`} role="dialog" aria-label="Search">
      <button className={styles.closeBtn} onClick={closeSearch} aria-label="Close search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className={styles.searchContainer}>
        <div className={styles.inputWrapper}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query.length >= 2 && (
          <div className={styles.results}>
            {results.length > 0 ? (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.handle}`}
                  className={styles.resultItem}
                  onClick={handleLinkClick}
                >
                  <div className={styles.resultImage}>
                    <Image
                      src={product.images[0].url}
                      alt={product.title}
                      fill
                      sizes="50px"
                    />
                  </div>
                  <div className={styles.resultInfo}>
                    <span className={styles.resultTitle}>{product.title}</span>
                    <span className={styles.resultPrice}>{formatPrice(product.price)}</span>
                  </div>
                </Link>
              ))
            ) : (
              <p className={styles.noResults}>No results found for &ldquo;{query}&rdquo;</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
