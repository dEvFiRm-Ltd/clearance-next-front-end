import React from "react";
import PreorderBody from "@/components/FooterLinks/desktop/Pages/Preorder";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const Preorder = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <PreorderBody />
      <Footer />
    </div>
  );
};

export default Preorder;
