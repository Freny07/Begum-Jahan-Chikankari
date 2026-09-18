'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useUI } from '@/context/UIContext';
import { NAV_LINKS, WOMENS_CATEGORIES, MENS_CATEGORIES, SITE_NAME } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { itemCount, openCart } = useCart();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, isAnnouncementVisible, openSearch } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubMenu = useCallback((menu) => {
    setOpenSubMenu((prev) => (prev === menu ? null : menu));
  }, []);

  const handleMobileLinkClick = useCallback(() => {
    closeMobileMenu();
    setOpenSubMenu(null);
  }, [closeMobileMenu]);

  const headerClass = `${styles.header} ${isScrolled || isMobileMenuOpen ? styles.solid : styles.transparent} ${isAnnouncementVisible ? styles.withAnnouncement : ''}`;

  return (
    <header className={headerClass} id="site-header">
      <div className={styles.headerInner}>
        {/* Hamburger (Mobile) */}
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        {/* Desktop Left Nav */}
        <nav className={styles.navLeft} aria-label="Primary navigation">
          <Link href="/collections/new-arrivals" className={styles.navLink}>
            New Arrivals
          </Link>

          {/* Women's Wear Dropdown */}
          <div className={styles.navDropdown}>
            <Link href="/collections/womens-wear" className={styles.navLink}>
              Women&apos;s Wear
            </Link>
            <div className={styles.dropdownPanel}>
              {WOMENS_CATEGORIES.map((cat) => (
                <Link key={cat.href} href={cat.href} className={styles.dropdownLink}>
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Men's Wear Dropdown */}
          <div className={styles.navDropdown}>
            <Link href="/collections/mens-wear" className={styles.navLink}>
              Men&apos;s Wear
            </Link>
            <div className={styles.dropdownPanel}>
              {MENS_CATEGORIES.map((cat) => (
                <Link key={cat.href} href={cat.href} className={styles.dropdownLink}>
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo} aria-label={`${SITE_NAME} - Home`}>
            Begum Jahan
            <span className={styles.logoSub}>Chikankari</span>
          </Link>
        </div>

        {/* Desktop Right Nav + Icons */}
        <div className={styles.navRight}>
          {NAV_LINKS.right.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}

          <div className={styles.iconGroup}>
            {/* Search */}
            <button className={styles.iconBtn} onClick={openSearch} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* User */}
            <Link href="/account" className={styles.iconBtn} aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            {/* Cart */}
            <button className={styles.iconBtn} onClick={openCart} aria-label={`Cart (${itemCount} items)`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className={styles.cartBadge} key={itemCount}>
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNavList} aria-label="Mobile navigation">
          <Link
            href="/collections/new-arrivals"
            className={styles.mobileNavLink}
            onClick={handleMobileLinkClick}
          >
            New Arrivals
          </Link>

          {/* Women's Wear */}
          <button
            className={styles.mobileNavLink}
            onClick={() => toggleSubMenu('womens')}
            aria-expanded={openSubMenu === 'womens'}
          >
            Women&apos;s Wear
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{
                transform: openSubMenu === 'womens' ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`${styles.mobileSubMenu} ${openSubMenu === 'womens' ? styles.open : ''}`}>
            <Link href="/collections/womens-wear" className={styles.mobileSubLink} onClick={handleMobileLinkClick}>
              View All
            </Link>
            {WOMENS_CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href} className={styles.mobileSubLink} onClick={handleMobileLinkClick}>
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Men's Wear */}
          <button
            className={styles.mobileNavLink}
            onClick={() => toggleSubMenu('mens')}
            aria-expanded={openSubMenu === 'mens'}
          >
            Men&apos;s Wear
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{
                transform: openSubMenu === 'mens' ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`${styles.mobileSubMenu} ${openSubMenu === 'mens' ? styles.open : ''}`}>
            <Link href="/collections/mens-wear" className={styles.mobileSubLink} onClick={handleMobileLinkClick}>
              View All
            </Link>
            {MENS_CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href} className={styles.mobileSubLink} onClick={handleMobileLinkClick}>
                {cat.label}
              </Link>
            ))}
          </div>

          <Link
            href="/our-story"
            className={styles.mobileNavLink}
            onClick={handleMobileLinkClick}
          >
            Our Story
          </Link>

          <Link
            href="/contact"
            className={styles.mobileNavLink}
            onClick={handleMobileLinkClick}
          >
            Contact
          </Link>
        </nav>

        <div className={styles.mobileSocials}>
          <a href="https://instagram.com" className={styles.mobileSocialLink} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" className={styles.mobileSocialLink} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://pinterest.com" className={styles.mobileSocialLink} target="_blank" rel="noopener noreferrer">
            Pinterest
          </a>
        </div>
      </div>
    </header>
  );
}
