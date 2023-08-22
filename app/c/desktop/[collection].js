import FloatingLeft from "@/components/FloatingDiscount/desktop";
import RightSideChat from "@/components/RightSideChat/desktop";
import Header from "@/components/Header/desktop";
import Footer from "@/components/Footer/desktop";
import RelatedSearches from "@/components/RelatedSearches/desktop";
import CollectionBody from "@/components/C/desktop";
import Annousement from "@/components/Header/desktop/annousmentTop";
import { useRouter } from "next/router";
import React from "react";
export default function Collections() {
  const router = useRouter();
  return (
    <div className="relative min-w-[1024px]">
      {/*<FloatingLeft />*/}
      <RightSideChat />
      <Annousement />
      <Header collection={false} />
      <CollectionBody name={router.query.collection} />
      <RelatedSearches />
      <Footer />
    </div>
  );
}
