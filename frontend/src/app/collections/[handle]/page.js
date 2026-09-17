'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard/ProductCard';
import { getCollectionByHandle, getProductsByCollection } from '@/data/products';
import styles from './collection.module.css';

export default function CollectionPage() {
  const { handle } = useParams();
  const [sortBy, setSortBy] = useState('featured');

  const collection = getCollectionByHandle(handle);
  const rawProducts = getProductsByCollection(handle);

  const products = useMemo(() => {
    const sorted = [...rawProducts];
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'title-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return sorted;
  }, [rawProducts, sortBy]);

  const collectionTitle = collection?.title || handle.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const collectionDesc = collection?.description || '';

  return (
    <div className={styles.page}>
      {/* Collection Header */}
      <div className={styles.collectionHeader}>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{collectionTitle}</span>
        </div>
        <h1 className={styles.collectionTitle}>{collectionTitle}</h1>
        {collectionDesc && <p className={styles.collectionDescription}>{collectionDesc}</p>}
        <p className={styles.productCount}>{products.length} {products.length === 1 ? 'Product' : 'Products'}</p>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.filterGroup}>
          <button className={styles.filterBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
            Filter
          </button>
        </div>

        <select
          className={styles.sortSelect}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">A – Z</option>
          <option value="title-desc">Z – A</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className={styles.productGrid}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className={styles.emptyState}>
            <h2 className={styles.emptyTitle}>No Products Found</h2>
            <p className={styles.emptyText}>Check back soon — new pieces are always being added.</p>
          </div>
        )}
      </div>
    </div>
  );
}
