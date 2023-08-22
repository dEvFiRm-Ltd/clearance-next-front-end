import Section from './section';
import SwiperComponents from './swiper';
import BannerNoSwipper from './BannerNoSwipper';
import Products from './products';
import Sale from './sale';
import Categories from './categories';
import MainCategories from './MainCategories';
import { LoaderCategories, BannerLogo } from '@/helpers/Loader/Loading';
import React, { useState } from 'react';
import Toast from '../../../helpers/Toast/Big';
import { useSelector } from 'react-redux';
const Body = ({
  loading,
  mainBanners,
  footerBanners,
  featuredProducts,
  flashSale,
  categories,
  mainCategories,
}) => {
  const [showToast, setShowToast] = useState({});
  const toastMessage = useSelector((state) => state?.CartReducer.toastMessage);
  return (
    <div
      className={`mx-auto empty:hidden`}
      style={
        mainBanners?.hasPadding
          ? { paddingTop: `${mainBanners?.padding}px` }
          : { paddingTop: '0px' }
      }
    >
      {!loading ? (
        <SwiperComponents loading={loading} section={mainBanners} />
      ) : (
        <div
          className="flex flex-row"
          style={{
            height: '80vh',
            paddingTop: '100px',
            padding: '30px',
          }}
        >
          <BannerLogo width={'100vw'} height={'85vh'} viewBox={'0 0 100 50'} />
        </div>
      )}
      <Categories loading={loading} section={categories} />
      {/*{categories?.categories ? (*/}
      {/*) : null}*/}
      {/*{section.isFeatured ? <SwiperComponent section={section} /> : null}*/}
      {footerBanners ? <BannerNoSwipper section={footerBanners} /> : null}
      {flashSale ? (
        <Sale section={flashSale} />
      ) : (
        <LoaderCategories count={6} />
      )}
      {/*{section.isPhotos ? <Photos section={section} /> : null}*/}
      {featuredProducts ? (
        <Products section={featuredProducts} />
      ) : (
        <LoaderCategories count={6} />
      )}
      {mainCategories ? (
        <MainCategories section={mainCategories?.categories} />
      ) : (
        <>
          <LoaderCategories count={6} />
          <LoaderCategories count={6} />
        </>
      )}

      {toastMessage && <Toast message={toastMessage} timeout={4000} />}
    </div>
  );
};

export default Body;
