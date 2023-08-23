'use client';

import React, { useEffect } from 'react';
import Header from '../../../../components/Header/desktop';
import Footer from '../../../../components/Footer/desktop';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import HTMLRenderer from '../../../../helpers/HTMLRenderer';
import LoadingComponent from '../../../../components/LoadingComponent/desktop';
import RightSideChat from '../../../../components/RightSideChat/desktop';

const PageFooter = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state?.mainReducer?.footerPage);
  const loading = useSelector((state) => state?.mainReducer?.loading);
  const param = useParams();
  const { page } = param;
  const mainCategories = useSelector(
    (state) => state.mainReducer.mainCategories
  );
  const mainPageData = useSelector((state) => state.mainReducer.mainPageData);
  useEffect(() => {
    dispatch({ type: 'GET_CONTENT_FOOTER', payload: { page } });
  }, [page]);
  return (
    <div className="relative min-w-[1024px]">
      <Header
        loading={false}
        categories={mainPageData?.categories}
        collection={true}
      />
      <div className="pt-[150px]">
        <div className="flex items-center justify-center">
          {!loading && <h1>{content?.title}</h1>}
        </div>

        <div className="p-10">
          {content?.content && <HTMLRenderer htmlContent={content?.content} />}
        </div>
      </div>
      <RightSideChat />
      <Footer />
    </div>
  );
};

export default PageFooter;
