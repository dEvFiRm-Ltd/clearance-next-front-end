import React from "react";
import AboutCreditWalletBody from "@/components/FooterLinks/desktop/Pages/AboutCreditWallet";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const AboutCreditWallet = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <AboutCreditWalletBody />
      <Footer />
    </div>
  );
};

export default AboutCreditWallet;
