import React from "react";
import ChooseSizeBody from "@/components/FooterLinks/desktop/Pages/ChooseSize";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const ChooseSize = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <ChooseSizeBody />
      <Footer />
    </div>
  );
};

export default ChooseSize;
