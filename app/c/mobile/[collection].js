import Header from "@/components/Header/mobile";
import Footer from "@/components/Footer/mobile";
import RelatedSearches from "@/components/RelatedSearches/mobile";
import CollectionBody from "@/components/C/mobile";
import { useRouter } from "next/router";
import SideMenu from "@/components/Header/mobile/navigationWrapper";
import React from "react";
export default function Collections() {
  const handleClickOutsideBox = (event) => {
    if (typeof window !== "undefined") {
      // 👇️ the element the user clicked
      const box = document?.getElementById("navigation-wrapper-element");
      if (!box.contains(event.target)) {
        document
          .getElementById("navigation-wrapper-element")
          ?.classList.remove("open");
        document.getElementById("nav-open-mask")?.classList.remove("open");
        document?.removeEventListener("click", handleClickOutsideBox);
      }
    }
  };
  const router = useRouter();
  const openSideBar = () => {
    if (typeof window !== "undefined") {
      document
        .getElementById("navigation-wrapper-element")
        ?.classList.add("open");
      document.getElementById("nav-open-mask")?.classList.add("open");
      setTimeout(() => {
        document?.addEventListener("click", handleClickOutsideBox);
      }, 100);
    }
  };
  const closeSideBar = () => {
    if (typeof window !== "undefined") {
      document
        .getElementById("navigation-wrapper-element")
        ?.classList.remove("open");
      document.getElementById("nav-open-mask")?.classList.remove("open");
      document?.removeEventListener("click", handleClickOutsideBox);
    }
  };
  return (
    <div className="relative">
      <Header
        openSideBar={(e) => {
          openSideBar(e);
        }}
      />
      <SideMenu
        closeSideBar={() => {
          closeSideBar();
        }}
        elements={mainPageData?.categories}
      />
      <CollectionBody name={router.query.collection} />
      <RelatedSearches />
      <Footer />
    </div>
  );
}
