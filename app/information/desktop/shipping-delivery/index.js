import React from "react";
import ShippingBody from "@/components/FooterLinks/desktop/Pages/Shipping";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const Shipping = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <ShippingBody />
      <Footer />
    </div>
  );
};

export default Shipping;
