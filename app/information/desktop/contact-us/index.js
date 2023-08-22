import React from "react";
import ContactUsBody from "@/components/FooterLinks/desktop/Pages/ContactUs";
import Footer from "@/components/Footer/desktop";
import Header from "@/components/Header/desktop";
const ContactUs = () => {
  return (
    <div className="relative min-w-[1024px]">
      <Header />
      <ContactUsBody />
      <Footer />
    </div>
  );
};

export default ContactUs;
