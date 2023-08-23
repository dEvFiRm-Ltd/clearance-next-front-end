import React from "react";
import IntellectualBody from "@/components/FooterLinks/desktop/Pages/Intellectual";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const Intellectual = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <IntellectualBody />
      <Footer />
    </div>
  );
};

export default Intellectual;
