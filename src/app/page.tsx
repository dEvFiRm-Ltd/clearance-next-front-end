import BestSeller from "@/components/home/BestSeller";
import DressCard, { dressType } from "@/components/common/DressCard";
import Banner from "@/components/home/Banner";
import BottomHeader from "@/components/header/BottomHeader";
import FlashSale from "@/components/home/FlashSale";
import DenimShop from "@/components/home/DenimShop";
import MiddleHeader from "@/components/header/MiddleHeader";
import TopHeader from "@/components/header/TopHeader";
import { dress, dressTwo, verticalImage, verticalImageTwo } from "@/static";
import VerticalImage from "@/components/common/VerticalImage";
import RelatedSearches from "@/components/home/RelatedSearches";
import Footer from "@/components/home/Footer";
import HandPicked from "@/components/home/HandPicked";
import MobileHeader from "@/components/header/MobileHeader";

export default function Home() {
  return (
    <>
      <TopHeader />
      <MobileHeader />
      <MiddleHeader />
      <BottomHeader />
      <Banner />
      <div className="container flex flex-row justify-center mt-[30px] gap-4 md:gap-5 xl:gap-6 3xl:gap-7 flex-wrap">
        {dress.map((item: dressType, id: number) => (
          <DressCard
            key={id}
            image={item.image}
            title={item.title}
            url={item.url}
          />
        ))}
      </div>
      <BestSeller />
      <FlashSale />
      <DenimShop />
      <div className="container flex flex-col items-center sm:flex-row sm:flex-wrap md:flex-nowrap justify-center gap-y-5 md:gap-y-0 sm:gap-x-3 lg:gap-x-4 2xl:gap-x-5 3xl:gap-x-[23px] mt-[30px] ">
        {dressTwo.map((item: dressType, id: number) => (
          <DressCard
            key={id}
            url={item.url}
            image={item.image}
            heading={item.heading}
            title={item.title}
            hightClass="!h-[430px] sm:!h-[380px] md:!h-[350px] lg:!h-[420px] xl:!h-[520px] 2xl:!h-[640px] 3xl:!h-[703px]"
            withClass="!w-[336px] sm:!w-[302px] md:!w-[240px] lg:!w-[322.67px] xl:!w-[405.33px] 2xl:!w-[485.33px] 3xl:!w-[580px]"
          />
        ))}
      </div>
      <div className="container mt-[60px] mb-5 3xl:mb-10 flex flex-wrap flex-row justify-center gap-x-5 gap-y-3">
        {verticalImage.map((item: any, i: number) => (
          <VerticalImage
            key={i}
            img={item.img}
            className="w-[336px] sm:w-[616px] md:w-[744px] lg:w-[1000px] xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[405px] xl:h-[350px] 2xl:h-[380px] 3xl:h-[405px]"
          />
        ))}
      </div>
      <div className="container mb-10 flex flex-row flex-wrap justify-center gap-x-5 gap-y-3">
        {verticalImageTwo.map((item: any, i: number) => (
          <VerticalImage
            key={i}
            img={item.img}
            className="w-[336px] sm:w-[616px] md:w-[744px] lg:w-[1000px] xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] h-[170px] sm:h-[240px] md:h-[273px]"
            objectClass="!object-cover"
          />
        ))}
      </div>
      <HandPicked />
      <RelatedSearches />
      <Footer />
    </>
  );
}
