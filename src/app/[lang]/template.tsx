import BottomHeader from "@/components/header/BottomHeader";
import MiddleHeader from "@/components/header/MiddleHeader";
import MobileHeader from "@/components/header/MobileHeader";
import TopHeader from "@/components/header/TopHeader";
import Footer from "@/components/home/Footer";
import { CartProvider } from "@/context/CartContext";
import { env } from "process";
import React from "react";

type TemplateProps = {
  children: React.ReactNode;
};
const Template: React.FC<TemplateProps> = async ({ children }) => {
  const categoryApiCall = await fetch(
    env.BASE_URL + "api/v10/web/home/categories",
    {
      next: { revalidate: 10 },
    }
  );
  const categoryResponse = await categoryApiCall.json();
  const categoryArr: Array<any> = categoryResponse.data.categories || [];
  return (
    <CartProvider>
      <>
        <TopHeader />
        <MobileHeader />
        <MiddleHeader />
        {process.env.MODE !== "prod" && (
          <BottomHeader bottomHeaderArr={categoryArr} />
        )}
        <main className="">{children}</main>
        <Footer />
      </>
    </CartProvider>
  );
};

export default Template;
