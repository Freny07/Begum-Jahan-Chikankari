import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { UIProvider } from '@/context/UIContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import WhatsAppWidget from '@/components/WhatsAppWidget/WhatsAppWidget';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

export const metadata = {
  title: {
    default: 'Begum Jahan Chikankari | Luxury Lucknowi Chikankari Online',
    template: '%s | Begum Jahan Chikankari',
  },
  description:
    'Discover the finest handcrafted Lucknowi Chikankari — timeless elegance woven by countless artisan hands. Shop premium kurtas, suits, sarees, and menswear.',
  keywords: [
    'Chikankari',
    'Lucknowi Chikankari',
    'Indian fashion',
    'handcrafted clothing',
    'kurta sets',
    'sarees',
    'luxury Indian wear',
    'Begum Jahan',
  ],
  authors: [{ name: 'Begum Jahan Chikankari' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Begum Jahan Chikankari',
    title: 'Begum Jahan Chikankari | Luxury Lucknowi Chikankari Online',
    description:
      'Discover the finest handcrafted Lucknowi Chikankari — timeless elegance woven by countless artisan hands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Begum Jahan Chikankari | Luxury Lucknowi Chikankari Online',
    description:
      'Discover the finest handcrafted Lucknowi Chikankari — timeless elegance woven by countless artisan hands.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FAF8F5" />
      </head>
      <body>
        <UIProvider>
          <CartProvider>
            <ScrollReveal />
            <AnnouncementBar />
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppWidget />
          </CartProvider>
        </UIProvider>
      </body>
    </html>
  );
}
