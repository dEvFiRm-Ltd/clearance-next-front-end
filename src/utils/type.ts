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
  star?:boolean; 
  starCount?:string;
};
export type linkType = {
  icon?: string;
  title: string;
  url: string;
};
export type linkImgType = {
  img:string;
  title: string;
  url: string;
};
export type commonSliderProps = {
  closeStateCb: () => void
  ref?: any
  deleteBtnText?: string
}
export type footerProps = {
  itemArr?: linkType[];
  socialArr?: linkType[];
  contactUsArr?: linkType[];
  hasBtn?: boolean;
  heading: string;
  contactUsText?: string;
  headingClass?: string;
};
