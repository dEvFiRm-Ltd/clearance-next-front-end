import React from "react";
import OrderQueryBody from "@/components/FooterLinks/desktop/Pages/OrderQuery";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const OrderQuery = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <OrderQueryBody />
      <Footer />
    </div>
  );
};

export default OrderQuery;
