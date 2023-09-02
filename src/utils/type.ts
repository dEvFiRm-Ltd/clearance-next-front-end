export type bannerProps={
  img:string;
  url:string;
}
export type flashSaleCardProps = {
  groupClass?: string;  
  imgClass?: string;
  img: string;
  preSaleImgSticker?: string;
  discount?: string;
  text: string;
  SalePrice: string;
  Price?: string;
  text2?: string;  
};
export type linkType = {
  title: string;
  url: string;
};
export type footerProps = {
  itemArr: linkType[];
  heading: string;
  headingClass?: string;
};
