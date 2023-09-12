"use client";
import FrequentlyBuy from "@/components/product-details-page/FrequentlyBuy";
import ProductDetails from "@/components/product-details-page/ProductDetails";
import RecentlyViewed from "@/components/product-details-page/RecentlyViewed";
import RelatedProduct from "@/components/product-details-page/RelatedProduct";
import React from "react";


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
