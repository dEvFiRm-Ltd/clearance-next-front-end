'use client';

import React, { useEffect, useState } from "react";
import Header from '../../../../components/Header/mobile';
import Footer from '../../../../components/Footer/mobile';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import HTMLRenderer from '../../../../helpers/HTMLRenderer';
import LoadingComponent from "../../../../components/LoadingComponent/desktop";
import RightSideChat from "../../../../components/RightSideChat/mobile";

const PageFooter = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state?.mainReducer?.footerPage);
  const loading = useSelector((state) => state?.mainReducer?.loading);
  const param = useParams();
  const { page } = param;   const mainCategories = useSelector(
    (state) => state.mainReducer.mainCategories
  );
  const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
  useEffect(() => {
    dispatch({ type: 'GET_CONTENT_FOOTER', payload: { page } });
  }, [page]);

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
        handleOpenSearchModal={handleOpenSearchModal}
        handleCloseSearchModal={handleCloseSearchModal}
        openSideBar={(e) => {
          openSideBar(e);
        }}
        loading={false}
        categories={mainPageData?.categories}
        collection={true}
      />
      <div className="pt-[50px]">
        <div className="flex items-center justify-center">
          {!loading && <h1>{content?.title}</h1>}
        </div>
        {loading ? (
          // <LoadingComponent />
          ""
        ) : (
          <div className="p-10">
            {content?.content && (
              <HTMLRenderer htmlContent={content?.content} />
            )}
          </div>
        )}
      </div>
      <RightSideChat />
      <Footer />
    </div>
  );
};

export default PageFooter;
