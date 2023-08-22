import React from "react";
import TrackOrderBody from "@/components/FooterLinks/desktop/Pages/TrackOrder";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const TrackOrder = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <TrackOrderBody />
      <Footer />
    </div>
  );
};

export default TrackOrder;
