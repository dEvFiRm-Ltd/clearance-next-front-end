import '@/styles/globals.css';
import '@/styles/login.css';
import '@/styles/mobile.css';
import '@/styles/flashsale.css';
import '@/styles/login-mobile.css';
import 'rc-slider/assets/index.css';
import '@/styles/card.css';
import '@/styles/root.css';
import '@/styles/payment.css';
import '@/styles/about-us.css';
import '@/styles/product-details.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import '../styles/Loading.css';
import '../styles/spinner.css';
import 'owl.carousel/dist/assets/owl.carousel.css';

import App from './app.js';
import BodyScripts from './BodyScripts';

const defaultDescription =
  '<p><strong>Clearance is the ecommerce version  and the online operational name of Master out';
const defaultTitle = 'Welcome To Clearance';

export const metadata = {
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
export default function RootLayout({ Component, children }) {
  return (
    <html>
      <body>
        <App>{children}</App>
        <BodyScripts />
      </body>
    </html>
  );
}
