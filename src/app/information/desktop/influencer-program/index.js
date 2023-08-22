import React from "react";
import InfluenceBody from "@/components/FooterLinks/desktop/Pages/Influence";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const Influence = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <InfluenceBody />
      <Footer />
    </div>
  );
};

export default Influence;
