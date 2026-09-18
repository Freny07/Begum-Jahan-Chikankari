import { SITE_NAME } from '@/lib/constants';

export const metadata = {
  title: `FAQ | ${SITE_NAME}`,
  description: 'Find answers to common questions about orders, shipping, returns, sizing, and care for Begum Jahan Chikankari products.',
};

export default function FAQLayout({ children }) {
  return children;
}
