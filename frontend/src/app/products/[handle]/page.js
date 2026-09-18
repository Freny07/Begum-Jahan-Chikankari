'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { getProductByHandle } from '@/data/products';
import { formatPrice } from '@/lib/formatPrice';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import styles from './product.module.css';

export default function ProductPage() {
  const { handle } = useParams();
  const product = getProductByHandle(handle);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  const toggleAccordion = useCallback((key) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  }, []);

  const handleAddToCart = useCallback(() => {
    if (!product) return;
    if (product.sizes.length > 1 && !selectedSize) {
      alert('Please select a size.');
      return;
    }
    addItem({
      id: `${product.id}-${selectedSize || 'one-size'}`,
      title: product.title,
      price: product.price,
      size: selectedSize || product.sizes[0],
      image: product.images[0]?.url,
      handle: product.handle,
    });
  }, [product, selectedSize, addItem]);

  // Product not found
  if (!product) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Product Not Found</h1>
          <p className={styles.notFoundText}>The piece you&apos;re looking for may have been sold or is no longer available.</p>
          <Link href="/collections/womens-wear" className={styles.backLink}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const savings = product.compareAtPrice ? product.compareAtPrice - product.price : 0;
  const activeImage = product.images[activeImageIndex];

  return (
    <div className={styles.page}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <Link href={`/collections/${product.category}`} className={styles.breadcrumbLink}>
          {product.category.replace(/-/g, ' ')}
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{product.title}</span>
      </div>

      {/* Product Layout */}
      <div className={styles.productLayout}>
        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={activeImage.url}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 992px) 100vw, 55vw"
              quality={90}
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImageIndex ? styles.active : ''}`}
                  onClick={() => setActiveImageIndex(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={img.url} alt={img.alt} fill sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <span className={styles.vendor}>{product.vendor}</span>
          <h1 className={styles.productTitle}>{product.title}</h1>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <>
                <span className={styles.comparePrice}>{formatPrice(product.compareAtPrice)}</span>
                <span className={styles.saveBadge}>Save {formatPrice(savings)}</span>
              </>
            )}
          </div>

          <div className={styles.divider} />

          {/* Size Selection */}
          <div className={styles.sizeSection}>
            <span className={styles.sizeLabel}>
              Size{selectedSize ? `: ${selectedSize}` : ''}
            </span>
            <div className={styles.sizeGrid}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className={styles.addToCartRow}>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className={styles.wishlistBtn} aria-label="Add to wishlist">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* Accordion Details */}
          <div className={styles.accordionGroup}>
            {/* Description */}
            <div className={styles.accordionItem}>
              <button
                className={`${styles.accordionTrigger} ${openAccordion === 'description' ? styles.open : ''}`}
                onClick={() => toggleAccordion('description')}
              >
                Description
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'description' ? styles.open : ''}`}>
                <div className={styles.accordionBody}>
                  {product.description}
                </div>
              </div>
            </div>

            {/* Fabric & Care */}
            <div className={styles.accordionItem}>
              <button
                className={`${styles.accordionTrigger} ${openAccordion === 'fabric' ? styles.open : ''}`}
                onClick={() => toggleAccordion('fabric')}
              >
                Fabric & Care
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'fabric' ? styles.open : ''}`}>
                <div className={styles.accordionBody}>
                  <strong>Fabric:</strong> {product.fabric}<br />
                  <strong>Care:</strong> {product.care}
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className={styles.accordionItem}>
              <button
                className={`${styles.accordionTrigger} ${openAccordion === 'shipping' ? styles.open : ''}`}
                onClick={() => toggleAccordion('shipping')}
              >
                Shipping & Returns
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`${styles.accordionContent} ${openAccordion === 'shipping' ? styles.open : ''}`}>
                <div className={styles.accordionBody}>
                  Free shipping on orders above ₹5,000. Standard delivery within 5-7 business days.
                  Easy returns within 7 days of delivery. Items must be unworn and in original packaging.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentHandle={product.handle} category={product.tags.find(t => t !== 'bestseller' && t !== 'new-arrival' && t !== 'womens-wear' && t !== 'mens-wear') || product.category} />
    </div>
  );
}
