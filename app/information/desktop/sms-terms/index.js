import React from "react";
import SmsTermsBody from "@/components/FooterLinks/desktop/Pages/SmsTerms";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const SmsTerms = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <SmsTermsBody />
      <Footer />
    </div>
  );
};

export default SmsTerms;
