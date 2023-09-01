import BestSeller from "@/components/home/BestSeller";
import DressCard from "@/components/common/DressCard";
import Banner from "@/components/home/Banner";
import BottomHeader from "@/components/home/BottomHeader";
import FlashSale from "@/components/home/FlashSale";
import DenimShop from "@/components/home/DenimShop";
import MiddleHeader from "@/components/home/MiddleHeader";
import TopHeader from "@/components/home/TopHeader";
import { dress, dressTwo, verticalImage, verticalImageTwo } from "@/static";
import VerticalImage from "@/components/common/VerticalImage";
import RelatedSearches from "@/components/home/RelatedSearches";
import Footer from "@/components/home/Footer";
import HandPicked from "@/components/home/HandPicked";

export default function Home() {
  return (
    <>
      {/* <TopHeader /> */}
      {/* <MiddleHeader /> */}
      {/* <BottomHeader /> */}
      <Banner />
      <div className="container flex flex-row flex-wrap justify-center gap-x-7 mt-[30px] ">
        {dress.map((item: any, i: number) => (
          <DressCard key={i} image={item.image} title={item.title} />
        ))}
      </div>
      {/* <BestSeller /> */}
      {/* <FlashSale /> */}
      {/* <DenimShop /> */}
      <div className="container flex flex-col items-center sm:flex-row sm:flex-wrap md:flex-nowrap justify-center gap-y-5 md:gap-y-0 sm:gap-x-3 lg:gap-x-4 2xl:gap-x-5 3xl:gap-x-[23px] mt-[30px] ">
        {dressTwo.map((item: any, i: number) => (
          <DressCard
            key={i}
            image={item.image}
            title="shop now"
            titleClass="!my-0 text-base sm:text-sm lg:text-base xl:text-xl leading-6 sm:leading-5 lg:leading-6 xl:leading-8"
            hightClass="h-[430px] sm:h-[380px] md:h-[350px] lg:h-[420px] xl:!h-[520px] 2xl:!h-[640px] 3xl:!h-[703px]"
            withClass="w-[336px] sm:w-[302px] md:w-[240px] lg:w-[322.67px] xl:w-[405.33px] 2xl:w-[485.33px] 3xl:!w-[580px]"
            title2Class="text-base sm:text-sm lg:text-lg xl:text-2xl leading-6 sm:leading-4 lg:leading-7 xl:leading-10"
            title2={item.title2}
          />
        ))}
      </div>
      <div className="container mt-[60px] xl:mb-5 3xl:mb-10 flex flex-row justify-center gap-x-5">
        {verticalImage.map((item: any, i: number) => (
          <VerticalImage
            key={i}
            img={item.img}
            className="xl:w-[614px] 2xl:w-[738px] 3xl:w-[880px] xl:h-[350px] 2xl:h-[380px] 3xl:h-[405px]"
          />
        ))}
      </div>
      <div className="container mb-10 flex flex-row justify-center gap-x-5">
        {verticalImageTwo.map((item: any, i: number) => (
          <VerticalImage
            key={i}
            img={item.img}
            className="w-[880px] h-[273px]"
            objectClass="!object-cover"
          />
        ))}
      </div>
      <HandPicked />
      {/* <RelatedSearches /> */}
      {/* <Footer /> */}
    </>
  );
}
