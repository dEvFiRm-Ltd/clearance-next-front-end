"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header/mobile";
import Footer from "@/components/Footer/mobile";
import ProductDetails from "@/components/productdetails/mobile";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../../../components/LoadingComponent/mobile";
import AddToCartButton from "../../../../components/productdetails/mobile/AddToCartButton";
import SideMenu from "../../../../components/Header/mobile/navigationWrapper";
import Head from "next/head";
import ModalSearch from "../../../../components/Header/mobile/ModalSearch";
// import { Transition } from "@headlessui/react";
import RightSideChat from "../../../../components/RightSideChat/mobile";
const ProductDetailsPage = () => {
  const product = useSelector((state) => state?.ProductReducer?.Product);
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.ProductReducer?.loading);
  const mainLoading = useSelector((state) => state?.mainReducer?.loading);
  const [requestAddProduct, setRequestAddProduct] = useState(false);
  const [requestedProduct, setRequestedProduct] = useState(null);
  const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
  const [recentlyProduct, setRecentlyProduct] = useState([]);
  const sync = useSelector((store) => store.CartReducer.sync);
  const mainCategories = useSelector(
    (state) => state.mainReducer.mainPageData?.categories
  );

  const syncSessionStorage = useSelector(
    (state) => state?.ProductReducer?.syncSessionStorage
  );
  const productLoading = useSelector(
    (state) => state?.ProductReducer?.productLoading
  );
  useEffect(() => {
    slug && dispatch({ type: "PRODUCT_DETAILS", payload: { id: slug } });
  }, [slug]);

  useEffect(() => {
    if (!mainCategories?.length > 0) {
      dispatch({
        type: "GET_SECTIONS_SAGA",
      });
    }
  }, [mainCategories]);
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRecentlyProduct = JSON.parse(
        sessionStorage.getItem("RECENTLY_PRODUCT")
      );
      if (storedRecentlyProduct) {
        setRecentlyProduct(storedRecentlyProduct);
      }
    }
  }, [loading, syncSessionStorage]);
  const [showToast, setShowToast] = useState({});
  const [selectedSize, setSelectedSize] = useState(
      null
  );
  const [isSizeRequired, setIsSizeRequired] = useState(
    product?.variation?.length > 0
  );
  useEffect(() => {
    setIsSizeRequired(product?.variation?.length > 0)
  }, [product]);
  const cartLoading = useSelector((state) => state?.CartReducer?.cartLoading);
  const addedToCart = useSelector((state) => state?.CartReducer?.addedToCart);
  function capitalizeFirstChars(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Capitalize the first character of each word
    const capitalizedWords = words.map((word) => {
      const firstChar = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstChar + restOfWord;
    });

    // Join the capitalized words back into a string
    const capitalizedStr = capitalizedWords.join(" ");

    return capitalizedWords.join(" ");
  }
  const newSlug = slug?.replace(/-/g, " ");
  const title = newSlug && capitalizeFirstChars(newSlug);

  function handleClose() {
    dispatch({
      type: "REMOVE_PRODUCT_CART",
      payload: null,
    });
    setSelectedSize("");
    setIsSizeRequired(false);
  }

  const addProduct = (product) => {
    setRequestAddProduct(!requestAddProduct);
    // console.log("Added product:", product);
    setRequestedProduct(product);
  };

  const _closeAfterSuccess = () => {
    if (addedToCart && !cartLoading) {
      handleClose();
      dispatch({ type: "RESET_ADDED_TO_CART" });
    }
  };

  useEffect(() => {
    if (addedToCart) {
      _closeAfterSuccess();
    }
  }, [addedToCart, cartLoading]);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  function handleOpenSearchModal() {
    setOpenSearchModal(true);
  }
  function handleCloseSearchModal() {
    setOpenSearchModal(false);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      openSearchModal
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    }
  }, [openSearchModal]);
  return (
    <>
      <div className="relative">
        <Header
          handleOpenSearchModal={handleOpenSearchModal}
          handleCloseSearchModal={handleCloseSearchModal}
          openSideBar={(e) => {
            openSideBar(e);
          }}
        />

        {/* {(productLoading || mainLoading) && <LoadingComponent />} */}
        <ProductDetails
          requestisSizeRequired={requestAddProduct}
          requestAddProduct={requestAddProduct}
          requestedProduct={requestedProduct}
          product={product}
          recentlyProduct={recentlyProduct}
          showToastDetails={showToast}
        />
        {/*) : (*/}
        {/*  <div className="h-[90vh]">*/}
        {/*    <LoadingComponent />*/}
        {/*  </div>*/}
        {/*)}*/}
        <Footer />
        <div id="modal-root"></div>
        <AddToCartButton
          addToCart={(product) => addProduct(product)}
          product={product}
        />
        <SideMenu
          closeSideBar={() => {
            closeSideBar();
          }}
          elements={mainPageData?.categories}
        />
        <RightSideChat />
      </div>
      {/* <Transition
        show={openSearchModal}
        enter="transition-opacity duration-0"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}
        <div
          className={` fixed top-0  left-0 w-full h-full bg-black bg-opacity-50 transition-transform duration-300 transform ${
            openSearchModal
              ? "translate-x-0 z-[999999]"
              : "-translate-x-full z-0"
          }`}
        >
          <ModalSearch handleCloseSearchModal={handleCloseSearchModal} />
        </div>
      {/* </Transition> */}
    </>
  );
};

export default ProductDetailsPage;
