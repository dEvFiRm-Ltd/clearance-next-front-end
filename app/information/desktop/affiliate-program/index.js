import React from "react";
import AffiliateProgramBody from "@/components/FooterLinks/desktop/Pages/AffiliateProgram";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const AffiliateProgram = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <AffiliateProgramBody />
      <Footer />
    </div>
  );
};

export default AffiliateProgram;
