export type bannerProps = {
  img: string;
  url: string;
};
export type flashSaleCardProps = {
  url?: string;
  groupClass?: string;
  imgClass?: string;
  btnClass?: string;
  check?: boolean;
  img: string;
  preSaleImgSticker?: string;
  discount?: string;
  text: string;
  salePrice: number | string;
  price?: number | string;
  text2?: string;
  review?: string;
  btnText?: string;
  colorImg?: string[];
  actionCb?: () => void;
  variant?: object[];
  imgVariantSmall?: boolean;
  whitelist?: boolean;
  addToCartIcon?: boolean;
  variants?: boolean;
  salePriceClass?:string;
  priceClass?:string;
};
export type linkType = {
  icon?: string;
  url: string;
  titleEn: string;
  titleAe: string;
};
export type linkImgType = {
  img: string;
  title: string;
  url: string;
};
export type commonSliderProps = {
  closeStateCb: () => void;
  ref?: any;
  deleteBtnText?: string;
};
export type footerProps = {
  itemArr?: linkType[];
  socialArr?: linkType[];
  contactUsArr?: linkType[];
  hasBtn?: boolean;
  headingEn: string;
  headingAe: string;
  contactUsTextEn?: string;
  contactUsTextAe?: string;
  headingClass?: string;
  groupClass?: string;
};
export type subCategoryProps = {
  itemArr?: linkType[];
  heading: string;
  headingClass?: string;
  groupClass?: string;
};

export type dropDownType = {
  title: string;
  btnClass: string;
  actionCb: () => void;
};

// for modals
export type commonModalProps = {
  viewState: boolean;
  closeStateCb: () => void;
  ref?: any;
  deleteBtnText?: string;
  data?: any;
};
