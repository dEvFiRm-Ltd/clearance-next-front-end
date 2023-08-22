import React from "react";
import SiteMapBody from "@/components/FooterLinks/desktop/Pages/SiteMap";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const SiteMap = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <SiteMapBody />
      <Footer />
    </div>
  );
};

export default SiteMap;
