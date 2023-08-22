import React from "react";
import PrivacyBody from "@/components/FooterLinks/desktop/Pages/Privacy";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const Privacy = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <PrivacyBody />
      <Footer />
    </div>
  );
};

export default Privacy;
