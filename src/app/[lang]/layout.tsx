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
import { CartProvider } from '@/context/CartContext';
import TopHeader from '@/components/header/TopHeader';
import MobileHeader from '@/components/header/MobileHeader';
import MiddleHeader from '@/components/header/MiddleHeader';
import BottomHeader from '@/components/header/BottomHeader';
import Footer from '@/components/home/Footer';
import { env } from 'process';

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { [key: string]: any };
}) {
  const categoryApiCall = await fetch(
    env.BASE_URL + 'api/v10/web/home/categories',
    {
      next: { revalidate: 1 },
      headers: { lang: params.lang },
    }
  );
  const categoryResponse = await categoryApiCall.json();
  const categoryArr: Array<any> = categoryResponse.data.categories || [];
  return (
    <html lang={params.lang}>
      <head>
        {' '}
        <meta property='og:title' content='clearance' key='title' />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <TopHeader />
          <MobileHeader />
          <MiddleHeader />
          {process.env.NEXT_PUBLIC_MODE !== 'prod' && (
            <BottomHeader bottomHeaderArr={categoryArr} />
          )}
          <main className=''>{children}</main>
          <Footer />
        </CartProvider>
        <BodyScripts />
      </body>
    </html>
  );
}

