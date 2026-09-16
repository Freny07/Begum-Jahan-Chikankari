'use client';

import { useRef, useCallback } from 'react';
import Link from 'next/link';
import { RevealWrapper } from '@/components/ScrollReveal/ScrollReveal';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './FeaturedProducts.module.css';

// Mock data for featured products
const MOCK_PRODUCTS = [
  {
    handle: 'ivory-anarkali',
    title: 'Ivory Chikankari Anarkali',
    price: 35000,
    image: '/images/product_1.jpg',
  },
  {
    handle: 'blush-pink-kurta-set',
    title: 'Blush Pink Kurta Set',
    price: 18500,
    image: '/images/product_2.jpg',
  },
  {
    handle: 'sage-green-saree',
    title: 'Sage Green Sheer Saree',
    price: 22000,
    compareAtPrice: 25000,
    image: '/images/product_3.jpg',
  },
  {
    handle: 'white-kurta-pajama',
    title: 'Premium Mens Kurta Pajama',
    price: 15000,
    image: '/images/product_4.jpg',
  },
];

export default function FeaturedProducts({ title = 'Best Sellers', products = MOCK_PRODUCTS }) {
  const trackRef = useRef(null);

  const scrollLeft = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }, []);

  return (
    <section className={styles.section} aria-labelledby="featured-products-title">
      <RevealWrapper className={styles.header}>
        <h2 id="featured-products-title" className={styles.title}>
          {title}
        </h2>
      </RevealWrapper>

      <div className={styles.carouselWrapper}>
        <div className={styles.track} ref={trackRef}>
          {products.map((product, index) => (
            <RevealWrapper key={product.handle} delay={index + 1} className={styles.slide}>
              <ProductCard product={product} />
            </RevealWrapper>
          ))}
        </div>

        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={scrollLeft} aria-label="Scroll left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className={styles.controlBtn} onClick={scrollRight} aria-label="Scroll right">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
