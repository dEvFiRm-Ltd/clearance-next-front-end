"use client";
import Button from "@/components/base/Button";
import SelectField, { dropDowns } from "@/components/base/SelectField";
import Tab from "@/components/base/Tab";
import StarList from "@/components/common/StarList";
import FrequentlyBuy from "@/components/product-details-page/FrequentlyBuy";
import ProductDetails from "@/components/product-details-page/ProductDetails";
import RecentlyViewed from "@/components/product-details-page/RecentlyViewed";
import RelatedProduct from "@/components/product-details-page/RelatedProduct";
import React, { useState } from "react";


const ProductDetailsPage = () => {
  
  return (
    <>      
      <ProductDetails/>
      <FrequentlyBuy/>
      <RecentlyViewed/>
      <RelatedProduct/>
    </>
  );
};

export default ProductDetailsPage;
