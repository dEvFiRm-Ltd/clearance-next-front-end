import DressCard, { dressType } from "@/components/common/DressCard";
import Banner from "@/components/home/Banner";
import FlashSale from "@/components/home/FlashSale";

import VerticalImage from "@/components/common/VerticalImage";

import { env } from "node:process";
import FeatureProduct from "@/components/home/FeatureProduct";
import SectionCard from "@/components/common/SectionCard";
import BestSeller from "@/components/home/BestSeller";
import DenimShop from "@/components/home/DenimShop";
import { bestSellerData, dressTwo } from "@/static";
import { TwoBanner } from "@/components/home/TwoBanner";

export default async function Home({
  params: { lang },
}: {
  params: { [key: string]: any };
}) {
  const bannerApiCall = await fetch(
    env.BASE_URL + "api/v10/web/home/main-banner",
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const bannerResponse = await bannerApiCall.json();

  const mainBannerArr: Array<any> = bannerResponse.data.main_banners || [];

  const sectionApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/home-sections?category_slug=web-home-section_333",
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const sectionResponse = await sectionApiCall.json();
  const sectionArr: Array<any> = sectionResponse.data.sections || [];

  let category = [
    sectionArr[0]?.hs_banner,
    sectionArr[0]?.hs_banner2,
    sectionArr[1]?.hs_banner,
    sectionArr[1]?.hs_banner2,
    sectionArr[1]?.hs_banner3,
    sectionArr[1]?.hs_banner4,
  ];
  let twoImage = [sectionArr[2]?.hs_banner, sectionArr[2]?.hs_banner2];

  const categoryApiCall = await fetch(
    env.BASE_URL + "api/v10/web/home/categories",
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const categoryResponse = await categoryApiCall.json();
  const categoryArr: Array<any> = categoryResponse.data.categories || [];

  const footerBannerApiCall = await fetch(
    env.BASE_URL + "api/v10/web/home/footer-banner",
    {
      next: { revalidate: 1 },
    }
  );
  const footerBannerResponse = await footerBannerApiCall.json();
  const footerBannerArr: Array<any> =
    footerBannerResponse.data.footer_banners || [];

  const flashDealsApiCall = await fetch(
    env.BASE_URL + "api/v10/web/home/flashDeals",
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const flashDealsResponse = await flashDealsApiCall.json();
  const flashDealsArr: Array<any> =
    flashDealsResponse.data.flash_deals_products || [];
  const featureProductApiCall = await fetch(
    env.BASE_URL + "api/v10/web/home/feature-product",
    {
      next: { revalidate: 1 },
    }
  );
  const featureProductResponse = await featureProductApiCall.json();
  const featureProductArr: Array<any> =
    featureProductResponse.data.featured_products || [];

  const supermarketDealsApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/products?category_slug=Supermarket-Deals_43&offset=1&limit=7",
    {
      next: { revalidate: 1 },
    }
  );
  const supermarketDealsResponse = await supermarketDealsApiCall.json();
  const supermarketDealsArr: Array<any> =
    supermarketDealsResponse.data.products || [];
  const womenApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/products?category_slug=women_1&offset=1&limit=7",
    {
      next: { revalidate: 1 },
    }
  );
  const womenResponse = await womenApiCall.json();
  const womenArr: Array<any> = womenResponse.data.products || [];

  const menApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/products?category_slug=Men_36&offset=1&limit=7",
    {
      next: { revalidate: 1 },
    }
  );
  const menResponse = await menApiCall.json();
  const menArr: Array<any> = menResponse.data.products || [];

  const girlApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/products?category_slug=Girls_164&offset=1&limit=7",
    {
      next: { revalidate: 1 },
    }
  );
  const girlResponse = await girlApiCall.json();
  const girlArr: Array<any> = girlResponse.data.products || [];

  const boysApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/products?category_slug=Boys_165&offset=1&limit=7",
    {
      next: { revalidate: 1 },
    }
  );
  const boysResponse = await boysApiCall.json();
  const boysArr: Array<any> = boysResponse.data.products || [];

  const sportsOutdoorsApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/products?category_slug=Sports-Outdoors_299&offset=1&limit=7",
    {
      next: { revalidate: 1 },
    }
  );
  const sportsOutdoorsResponse = await sportsOutdoorsApiCall.json();
  const sportsOutdoorsArr: Array<any> =
    sportsOutdoorsResponse.data.products || [];

  const wholeSaleApiCall = await fetch(
    env.BASE_URL +
      "api/v10/web/home/products?category_slug=wholesale_323&offset=1&limit=7",
    {
      next: { revalidate: 1 },
    }
  );
  const wholeSaleResponse = await wholeSaleApiCall.json();
  const wholeSaleArr: Array<any> = wholeSaleResponse.data.products || [];

  return (
    <>
      <Banner imgArr={mainBannerArr} />
      <div className="container w-full flex flex-row justify-center mt-2 md:mt-[30px] flex-wrap">
        {category?.map((item: any, index: number) => (
          <DressCard
            key={item?.id}
            image={
              "https://www.stylewe.com/image/catalog/activity/pO4x5Hy03S1695285465.webp"
            }
            url={item?.url}
            withClass={index <= 1 ? "w-[50%] lg:w-1/6 " : "w-[25%] lg:w-1/6"}
            hightClass={index <= 1 ? "aspect-[16/21]" : "aspect-[40/53]"}
          />
        ))}
      </div>
      {/* <SectionCard sectionArr={twoImage} /> */}
      <BestSeller imgArr={bestSellerData} />
      <FlashSale flashSaleArr={flashDealsArr} />
      <DenimShop />
      {/* mobile  */}
      <div className="container flex items-center flex-row flex-wrap justify-center mt-[30px] lg:!hidden">
        {dressTwo.map((item: dressType, id: number) => (
          <DressCard
            key={id}
            image={item?.image}
            heading={item?.heading}
            title={item?.title}
            hightClass={
              id === 0
                ? "!aspect-[750/481] lg:!aspect-[583/793]"
                : "!aspect-[375/374] lg:!aspect-[583/793]"
            }
            withClass={
              id === 0 ? "!w-full lg:!w-[33.33%]" : "!w-1/2 lg:!w-[33.33%]"
            }
          />
        ))}
      </div>
      {/* lg  */}
      <div className="container items-center flex-row flex-wrap justify-center mt-[30px] !hidden lg:!flex">
        {dressTwo.map((item: dressType, id: number) => (
          <DressCard
            key={id}
            image={item?.image2 ? item.image2 : item.image}
            heading={item?.heading}
            title={item?.title}
            hightClass={
              id === 0
                ? "!aspect-[750/481] lg:!aspect-[583/793]"
                : "!aspect-[375/374] lg:!aspect-[583/793]"
            }
            withClass={
              id === 0 ? "!w-full lg:!w-[33.33%]" : "!w-1/2 lg:!w-[33.33%]"
            }
          />
        ))}
      </div>
      {/* <div className="container flex flex-wrap flex-row justify-center gap-5 ">
        {footerBannerArr.splice(0, 2).map((item: any) => (
          <VerticalImage
            key={item?.id}
            img={item?.photo}
            item={item}
            className="w-full bg-ash xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] aspect-[851/479] object-contain"
          />
        ))}
      </div> */}
      {/* <div className='container flex flex-row flex-wrap justify-center gap-5 '> */}
      {/* <div className="container flex flex-row space-x-2 justify-center max-w-screen mt-5">
        {footerBannerArr.splice(0, 2).map((item: any) => (
          <VerticalImage
            key={item?.id}
            img={item?.photo}
            item={item}
            // className='w-[336px] sm:w-[616px] md:w-[744px] lg:w-[1000px] xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] h-[170px] sm:h-[240px] md:h-[273px]'
            className="w-1/2 lg:w-[1000px] xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] h-[170px] sm:h-[240px] md:h-[273px]"
            objectClass="!object-fill lg:!object-cover"
          />
        ))}
      </div> */}
      <TwoBanner />
      <FeatureProduct
        featureProductArr={featureProductArr}
        titleAe="منتج مميز"
        titleEn="Feature Product"
        whitelist={true}
        variants={true}
      />
      {/* <Brands brandArr={brandsDataArr} /> */}
      <FeatureProduct
        featureProductArr={supermarketDealsArr}
        titleAe="عروض السوبر ماركت"
        titleEn="Supermarket Deals"
      />
      <FeatureProduct
        featureProductArr={womenArr}
        titleAe="نحيف"
        titleEn="Women"
      />
      <FeatureProduct featureProductArr={menArr} titleAe="رجال" titleEn="Man" />
      <FeatureProduct
        featureProductArr={girlArr}
        titleAe="فتيات"
        titleEn="Girls"
      />
      <FeatureProduct
        featureProductArr={boysArr}
        titleAe="أولاد"
        titleEn="Boys"
      />
      <FeatureProduct
        featureProductArr={sportsOutdoorsArr}
        titleAe="الرياضة والهواء الطلق"
        titleEn="Sports outdoors"
      />
      <FeatureProduct
        featureProductArr={wholeSaleArr}
        titleAe="بالجملة"
        titleEn="wholesale"
      />
    </>
  );
}
