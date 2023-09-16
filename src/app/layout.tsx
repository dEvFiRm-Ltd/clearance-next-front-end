import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/styles/all.min.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BodyScripts from '@/components/bodyScript';

const inter = Inter({ subsets: ['latin'] });

const defaultDescription =
  '<p><strong>Clearance is the ecommerce version  and the online operational name of Master out';
const defaultTitle = 'Welcome To Clearance';
export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'w7Rg8tKsLoDqyDOlmhKNC87QeqiHY43bywUhQ-t9rnw',
    other: {
      'facebook-domain-verification': 'zoknztesouqjk3pz7fylptbpl98pt3',
      'tiktok-pixel': 'tiktok-pixel-content',
      'smart-look': 'Smart Look content',
      'microsoft-clarity': 'Microsoft Clarity content',
    },
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: string;
}) {
  console.log('params', params);

  return (
    <html lang='en'>
      <head>
        {' '}
        <meta property='og:title' content='clearance' key='title' />
      </head>
      <body className={inter.className}>
        {children}
        <BodyScripts />
      </body>
    </html>
  );
}

