'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/formatPrice';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  const handleOverlayClick = useCallback(() => {
    closeCart();
  }, [closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isCartOpen ? styles.open : ''}`}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`${styles.drawer} ${isCartOpen ? styles.open : ''}`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className={styles.drawerHeader}>
          <h2 className={styles.drawerTitle}>Your Cart</h2>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.emptyCart}>
            <div className={styles.emptyIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>Your Cart is Empty</h3>
            <p className={styles.emptyText}>Discover our handcrafted Chikankari collection.</p>
            <Link href="/collections/womens-wear" className={styles.shopLink} onClick={closeCart}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    {item.image && (
                      <Image src={item.image} alt={item.title} fill sizes="80px" />
                    )}
                  </div>
                  <div className={styles.itemDetails}>
                    <Link
                      href={`/products/${item.handle}`}
                      className={styles.itemTitle}
                      onClick={closeCart}
                    >
                      {item.title}
                    </Link>
                    <span className={styles.itemSize}>Size: {item.size}</span>
                    <span className={styles.itemPrice}>{formatPrice(item.price)}</span>
                    <div className={styles.itemActions}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className={styles.qty}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.drawerFooter}>
              <div className={styles.subtotalRow}>
                <span className={styles.subtotalLabel}>Subtotal</span>
                <span className={styles.subtotalPrice}>{formatPrice(subtotal)}</span>
              </div>
              <p className={styles.shippingNote}>Shipping calculated at checkout</p>
              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
