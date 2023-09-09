export type bannerProps={
  img:string;
  url:string;
}
export type flashSaleCardProps = {
  groupClass?: string;  
  imgClass?: string;
  btnClass?: string;
  check?: boolean;
  img: string;
  preSaleImgSticker?: string;
  discount?: string;
  text: string;
  salePrice: string;
  price?: string;
  text2?: string;  
  review?:string;
  btnText?:string;
  colorImg?:string[];
  actionCb?:()=>void
};
export type linkType = {
  icon?: string;
  title: string;
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


export type dropDownType ={
  title:string;
  btnClass:string;
  actionCb: () => void;
}

// for modals 
export type commonModalProps = {
  viewState: boolean
  closeStateCb: () => void
  ref?: any
  deleteBtnText?: string
  data?:any
}