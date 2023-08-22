import React from 'react';
import { NextPage } from 'next';
import RightSideChat from '@/components/RightSideChat/desktop';

const HomePage: NextPage = () => {
    return (
        <div className="relative min-w-[1024px]">
            {/*{mainPageData?.popup_banners?.length > 0 && (*/}
            {/*  <FloatingLeft popupBanners={mainPageData?.popup_banners} />*/}
            {/*)}*/}
            <RightSideChat />
            {/* <ModalPopup show={show} onClose={() => setShow(false)} /> */}
            {/* <Header
                loading={loading}
                categories={mainPageData?.categories}
                collection={true}
            /> */}

            {/* <InitialHeader /> */}
            {/* <Body
                loading={loading || authLoading}
                mainBanners={mainPageData?.main_banners}
                footerBanners={mainPageData?.footer_banners}
                featuredProducts={mainPageData?.featured_products}
                flashSale={flashSale?.flash_deals_products}
                categories={mainPageData?.categories}
                mainCategories={mainCategories}
            /> */}
            {/*<RelatedSearches />*/}
            {/* {loading ? null : <Footer />} */}
            <div id="modal-root"></div>
            <div id="popup"></div>
        </div>
    );
};

export default HomePage;
