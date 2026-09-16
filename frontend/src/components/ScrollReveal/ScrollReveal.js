'use client';

import { useEffect } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

export function RevealWrapper({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <Tag className={`reveal ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
