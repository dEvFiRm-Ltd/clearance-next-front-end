import React from "react";
import TermsBody from "@/components/FooterLinks/desktop/Pages/Terms";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const Terms = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <TermsBody />
      <Footer />
    </div>
  );
};

export default Terms;
