import BottomHeader from '@/components/header/BottomHeader';
import MiddleHeader from '@/components/header/MiddleHeader';
import MobileHeader from '@/components/header/MobileHeader';
import TopHeader from '@/components/header/TopHeader';
import Footer from '@/components/home/Footer';
import React from 'react'

type TemplateProps = {
    children: React.ReactNode;
  };
  const Template: React.FC<TemplateProps> = ({ children }) => {

    return (
      <div className="w-full">
        <TopHeader />
        <MobileHeader />
        <MiddleHeader />
        <BottomHeader />
        <main className="">{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default Template;