import DressCard from '@/components/common/DressCard';
import Banner from '@/components/home/Banner';
import FlashSale from '@/components/home/FlashSale';

import VerticalImage from '@/components/common/VerticalImage';

import { env } from 'node:process';
import FeatureProduct from '@/components/home/FeatureProduct';
import SectionCard from '@/components/common/SectionCard';

export default async function Home({
  params: { lang },
}: {
  params: { [key: string]: any };
}) {
  const bannerApiCall = await fetch(
    env.BASE_URL + 'api/v10/web/home/main-banner',
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const bannerResponse = await bannerApiCall.json();

  const mainBannerArr: Array<any> = bannerResponse.data.main_banners || [];

  const sectionApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/home-sections?category_slug=web-home-section_333',
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const sectionResponse = await sectionApiCall.json();
  const sectionArr: Array<any> = sectionResponse.data.sections || [];
  console.log('🚀 ~ file: page.tsx:37 ~ sectionArr:', sectionArr[0]);

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
    env.BASE_URL + 'api/v10/web/home/categories',
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const categoryResponse = await categoryApiCall.json();
  const categoryArr: Array<any> = categoryResponse.data.categories || [];

  const footerBannerApiCall = await fetch(
    env.BASE_URL + 'api/v10/web/home/footer-banner',
    {
      next: { revalidate: 1 },
    }
  );
  const footerBannerResponse = await footerBannerApiCall.json();
  const footerBannerArr: Array<any> =
    footerBannerResponse.data.footer_banners || [];

  const flashDealsApiCall = await fetch(
    env.BASE_URL + 'api/v10/web/home/flashDeals',
    {
      next: { revalidate: 1 },
      headers: { lang },
    }
  );
  const flashDealsResponse = await flashDealsApiCall.json();
  const flashDealsArr: Array<any> =
    flashDealsResponse.data.flash_deals_products || [];
  const featureProductApiCall = await fetch(
    env.BASE_URL + 'api/v10/web/home/feature-product',
    {
      next: { revalidate: 1 },
    }
  );
  const featureProductResponse = await featureProductApiCall.json();
  const featureProductArr: Array<any> =
    featureProductResponse.data.featured_products || [];

  /*  const supermarketDealsApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/products?category_slug=Supermarket-Deals_43&offset=1&limit=7',
    {
      next: { revalidate: 1 },
    }
  );
  const supermarketDealsResponse = await supermarketDealsApiCall.json();
  const supermarketDealsArr: Array<any> =
    supermarketDealsResponse.data.products || [];   const womenApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/products?category_slug=women_1&offset=1&limit=7',
    {
      next: { revalidate: 1 },
    }
  );
  const womenResponse = await womenApiCall.json();
  const womenArr: Array<any> = womenResponse.data.products || []; 

  const menApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/products?category_slug=Men_36&offset=1&limit=7',
    {
      next: { revalidate: 1 },
    }
  );
  const menResponse = await menApiCall.json();
  const menArr: Array<any> = menResponse.data.products || [];

  const girlApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/products?category_slug=Girls_164&offset=1&limit=7',
    {
      next: { revalidate: 1 },
    }
  );
  const girlResponse = await girlApiCall.json();
  const girlArr: Array<any> = girlResponse.data.products || [];

  const boysApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/products?category_slug=Boys_165&offset=1&limit=7',
    {
      next: { revalidate: 1 },
    }
  );
  const boysResponse = await boysApiCall.json();
  const boysArr: Array<any> = boysResponse.data.products || [];

  const sportsOutdoorsApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/products?category_slug=Sports-Outdoors_299&offset=1&limit=7',
    {
      next: { revalidate: 1 },
    }
  );
  const sportsOutdoorsResponse = await sportsOutdoorsApiCall.json();
  const sportsOutdoorsArr: Array<any> =
    sportsOutdoorsResponse.data.products || [];

  const wholeSaleApiCall = await fetch(
    env.BASE_URL +
      'api/v10/web/home/products?category_slug=wholesale_323&offset=1&limit=7',
    {
      next: { revalidate: 1 },
    }
  );
  const wholeSaleResponse = await wholeSaleApiCall.json();
  const wholeSaleArr: Array<any> = wholeSaleResponse.data.products || [];*/

  return (
    <>
      <Banner imgArr={mainBannerArr} />
      {/*  <div className='container w-full flex flex-row justify-center mt-2 md:mt-5 xl:gap-3 2xl:gap-5 flex-wrap'>
        {category?.map((item: any, index: number) => (
          <DressCard
            key={item.id}
            image={item?.photo}
            url={item.url}
            withClass={
              index === 0
                ? 'w-[47%] mr-1'
                : index === 1
                ? 'w-[47%] ml-1'
                : 'w-[25%]'
            }
            hightClass={index <= 1 ? 'aspect-[16/15]' : 'aspect-[40/53]'}
          />
        ))}
      </div> */}
      <SectionCard sectionArr={twoImage} />
      {/* <BestSeller imgArr={footerBannerArr} /> */}
      <FlashSale flashSaleArr={flashDealsArr} />
      {/* <DenimShop />
      <div className="container flex flex-col items-center sm:flex-row sm:flex-wrap md:flex-nowrap justify-center gap-y-5 md:gap-y-0 sm:gap-x-3 lg:gap-x-4 2xl:gap-x-5 3xl:gap-x-[23px] mt-[30px] ">
        {dressTwo.map((item: dressType, id: number) => (
          <DressCard
            key={id}
            image={item.image}
            heading={item.heading}
            title={item.title}
            hightClass="!h-[430px] sm:!h-[380px] md:!h-[350px] lg:!h-[420px] xl:!h-[520px] 2xl:!h-[640px] 3xl:!h-[703px]"
            withClass="!w-[336px] sm:!w-[302px] md:!w-[240px] lg:!w-[322.67px] xl:!w-[405.33px] 2xl:!w-[485.33px] 3xl:!w-[580px]"
          />
        ))}
      </div> */}
      <div className='container flex flex-wrap flex-row justify-center gap-5 '>
        {footerBannerArr.map((item: any) => (
          <VerticalImage
            key={item.id}
            img={item.photo}
            item={item}
            className='w-full bg-ash xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] aspect-[851/479] object-contain'
          />
        ))}
      </div>
      {/* <div className="container flex flex-row flex-wrap justify-center gap-5 ">
        {footerBannerArr.splice(0, 2).map((item: any) => (
          <VerticalImage
            key={item.id}
            img={item.photo}
            item={item}
            className="w-[336px] sm:w-[616px] md:w-[744px] lg:w-[1000px] xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] h-[170px] sm:h-[240px] md:h-[273px]"
            objectClass="!object-cover"
          />
        ))}
      </div> */}
      <FeatureProduct
        featureProductArr={featureProductArr}
        titleAe='منتج مميز'
        titleEn='Feature Product'
      />
      {/* <Brands brandArr={brandsDataArr} /> */}
      {/* <FeatureProduct featureProductArr={supermarketDealsArr} titleAe='عروض السوبر ماركت' titleEn="Supermarket Deals" />
      <FeatureProduct featureProductArr={womenArr} titleAe='نحيف' titleEn="Women" />
      <FeatureProduct featureProductArr={menArr} titleAe='رجال' titleEn="Man" />
      <FeatureProduct featureProductArr={girlArr} titleAe='فتيات' titleEn="Girls" />
      <FeatureProduct featureProductArr={boysArr} titleAe='أولاد' titleEn="Boys" />
      <FeatureProduct featureProductArr={sportsOutdoorsArr} titleAe='الرياضة والهواء الطلق' titleEn="Sports outdoors" />
      <FeatureProduct featureProductArr={wholeSaleArr} titleAe='بالجملة' titleEn="wholesale" /> */}
    </>
  );
}

