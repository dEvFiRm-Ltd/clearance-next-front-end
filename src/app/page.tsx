import BestSeller from "@/components/home/BestSeller";
import DressCard, { dressType } from "@/components/common/DressCard";
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
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <Banner />
      <div className="container flex flex-row justify-center mt-[30px] gap-4 md:gap-5 xl:gap-6 3xl:gap-7 flex-wrap">
        {dress.map((item: dressType, id: number) => (
          <DressCard key={id} image={item.image} title={item.title} />
        ))}
      </div>
      <BestSeller />
      <FlashSale />
      <DenimShop />
      <div className="container flex flex-row justify-center gap-x-[23px] mt-[30px] ">
        {dressTwo.map((item: dressType, id: number) => (
          <DressCard
            key={id}
            image={item.image}
            heading={item.heading}
            title={item.title}
            titleClass="!my-0"
            hightClass="!h-[703px]"
            withClass="!w-[580px]"
          />
        ))}
      </div>
      <div className="container mt-[60px] mb-10 flex flex-row justify-between">
        {verticalImage.map((item: any, i: number) => (
          <VerticalImage key={i} img={item.img} className="" />
        ))}
      </div>
      <div className="container mb-10 flex flex-row justify-between">
        {verticalImageTwo.map((item: any, i: number) => (
          <VerticalImage key={i} img={item.img} className="!h-[273px]" />
        ))}
      </div>
      <HandPicked />
      <RelatedSearches />
      <Footer />
    </>
  );
}
