import React from "react";
import ReturnPrivacyBody from "@/components/FooterLinks/desktop/Pages/ReturnPrivacy";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const ReturnPrivacy = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <ReturnPrivacyBody />
      <Footer />
    </div>
  );
};

export default ReturnPrivacy;
