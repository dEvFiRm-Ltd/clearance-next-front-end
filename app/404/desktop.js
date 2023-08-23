"use client";
import Link from "@/helpers/Link";
import FloatingLeft from "@/components/FloatingDiscount/desktop";
import RightSideChat from "@/components/RightSideChat/desktop";
import Header from "@/components/Header/desktop";
import Footer from "@/components/Footer/desktop";
import React from "react";
export default function Custom404() {
  return (
    <div className="relative min-w-[1024px]">
      {/*<FloatingLeft />*/}
      <RightSideChat />
      <Header collection={false} />
      <div className="layout-container">
        <div className="indexstyle-sc-106biaf-0 kOQlpN">
          <h4 className="error-code">404</h4>
          <div className="error-tips">
            The page you are looking for cannot be found, or an error occurred.
          </div>
          <Link href="/">
            <a className="indexstyle-sc-147lzxr-0 iiKxiz back-to-home">
              <div className="children-container">BACK TO HOMEPAGE</div>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
