import React from "react";
import AboutUs from "@/components/FooterLinks/desktop/Pages/AboutUs";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const AboutUsPage = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
