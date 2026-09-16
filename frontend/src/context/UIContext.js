'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
    document.body.classList.add('no-scroll');
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('no-scroll');
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      return next;
    });
  }, []);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
    document.body.classList.add('no-scroll');
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    document.body.classList.remove('no-scroll');
  }, []);

  const dismissAnnouncement = useCallback(() => {
    setIsAnnouncementVisible(false);
    try {
      sessionStorage.setItem('bjc-announcement-dismissed', 'true');
    } catch (e) {}
  }, []);

  return (
    <UIContext.Provider
      value={{
        isMobileMenuOpen,
        isSearchOpen,
        isAnnouncementVisible,
        openMobileMenu,
        closeMobileMenu,
        toggleMobileMenu,
        openSearch,
        closeSearch,
        dismissAnnouncement,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
