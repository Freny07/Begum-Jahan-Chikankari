/** Site-wide constants */

export const SITE_NAME = 'Begum Jahan Chikankari';
export const SITE_TAGLINE = 'Luxury Lucknowi Chikankari';
export const SITE_DESCRIPTION = 'Discover the finest handcrafted Lucknowi Chikankari — timeless elegance woven by countless artisan hands. Shop premium kurtas, suits, sarees, and menswear.';

export const WHATSAPP_NUMBER = '919999999999'; // Replace with actual
export const WHATSAPP_MESSAGE = 'Hi! I am interested in your Chikankari collection.';

export const NAV_LINKS = {
  left: [
    { label: 'New Arrivals', href: '/collections/new-arrivals' },
    { label: "Women's Wear", href: '/collections/womens-wear', hasSubmenu: true },
    { label: "Men's Wear", href: '/collections/mens-wear', hasSubmenu: true },
  ],
  right: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const WOMENS_CATEGORIES = [
  { label: 'Kurta Sets', href: '/collections/kurta-sets' },
  { label: 'Anarkalis', href: '/collections/anarkalis' },
  { label: 'Sarees', href: '/collections/sarees' },
  { label: 'Dupattas', href: '/collections/dupattas' },
  { label: 'Co-Ord Sets', href: '/collections/co-ord-sets' },
  { label: 'Sharara Sets', href: '/collections/sharara-sets' },
];

export const MENS_CATEGORIES = [
  { label: 'Kurta Pajama', href: '/collections/kurta-pajama' },
  { label: 'Nehru Jackets', href: '/collections/nehru-jackets' },
  { label: 'Shirts', href: '/collections/shirts' },
];

export const FOOTER_LINKS = {
  shop: [
    { label: "Women's Wear", href: '/collections/womens-wear' },
    { label: "Men's Wear", href: '/collections/mens-wear' },
    { label: 'New Arrivals', href: '/collections/new-arrivals' },
    { label: 'Best Sellers', href: '/collections/best-sellers' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '/policies/shipping-returns' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook' },
    { label: 'Pinterest', href: 'https://pinterest.com/', icon: 'pinterest' },
  ],
};

export const ANNOUNCEMENTS = [
  'Free Shipping on Orders Above ₹5,000',
  'Handcrafted with Love in Lucknow',
  'Use Code BEGUM500 for ₹500 Off Your First Order',
];
