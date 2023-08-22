import React from "react";
import FaqsBody from "@/components/FooterLinks/desktop/Pages/Faqs";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const Fags = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <FaqsBody />
      <Footer />
    </div>
  );
};

export default Fags;
