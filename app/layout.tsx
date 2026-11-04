import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const cormorant = Cormorant_Garamond({ variable: '--font-cormorant', subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://srivastavayushi.github.io/jayinfracity/'),
  title: 'Jay Infracity Pvt. Ltd. | Real Estate in Ayodhya',
  description: 'Explore real estate opportunities with Jay Infracity Pvt. Ltd. in Ayodhya and enquire directly on WhatsApp.',
  openGraph: {
    title: 'Jay Infracity Pvt. Ltd. | Real Estate in Ayodhya',
    description: 'Explore real estate opportunities in Ayodhya and enquire directly on WhatsApp.',
    images: [{ url: './og.png', width: 1672, height: 941, alt: 'Jay Infracity — Real Estate in Ayodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay Infracity Pvt. Ltd. | Real Estate in Ayodhya',
    description: 'Explore real estate opportunities in Ayodhya and enquire directly on WhatsApp.',
    images: ['./og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${cormorant.variable}`}>{children}</body></html>;
}
