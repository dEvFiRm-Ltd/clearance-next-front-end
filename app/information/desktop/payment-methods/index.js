import React from "react";
import PaymentMethodBody from "@/components/FooterLinks/desktop/Pages/PaymentMethod";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const PaymentMethod = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <PaymentMethodBody />
      <Footer />
    </div>
  );
};

export default PaymentMethod;
