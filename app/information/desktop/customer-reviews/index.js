import React from "react";
import CustomerReviewsBody from "@/components/FooterLinks/desktop/Pages/CustomerReviews";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const CustomerReviews = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <CustomerReviewsBody />
      <Footer />
    </div>
  );
};

export default CustomerReviews;
