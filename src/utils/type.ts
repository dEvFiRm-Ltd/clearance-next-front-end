import { ReactElement, ReactNode } from "react";

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

// ---------

export type buttonProps = {
  btnType?: "submit" | "reset" | "button";
  btnText?: string;
  btnClass?: string;
  icon?: string;
  suffixIcon?: string;
  prefixIcon?: string;
  disabled?: boolean;
  variant?: "primary" | "outlined" | "naked" | "link";
} & (
  | {
      btnType?: "reset" | "button";
      actionCb: () => void;
    }
  | {
      btnType?: "submit";
      actionCb?: never;
    }
);

export type checkboxProps = {
  identifier: string;
  label?: string;
  groupClass?: string;
  stateData?: string;
  isChecked?: boolean;
  onChangeCb: (e: boolean) => void;
};

export type modalProps = {
  visible: boolean;
  modalClass?: string;
  title?: string;
  children: ReactElement;
  closeCb: () => void;
};

export type searchFieldProps = {
  onFocus: () => void;
  onBlur: () => void;
};

export type dropDowns = {
  title?: string
}
export type componentProps = {
  groupClass?: string
  currentItem: string
  dropdownItems: string[]
  onChangeCb: (e: dropDowns) => void
}
export type tabTypes={
  text:string;
  content:ReactNode;
}
export type tabProps={
  actionCb:()=> void;
  value:string;
  tabArr:tabTypes[]
}
export type recommendType = {
  title: string;
};
export type recommendProps = {
  recommendArr: recommendType[];
  heading:string;
  btnClass:string;
};

export type FilterItemType = {
  title: string;
  labels: labelType[];
};

export type cartSideBarProps = {
  value: boolean;
  setCart: (e: boolean) => void;
};

export type dressType = {
  image: string;
  title?: string;
  url?: string;
  heading?: string;
  hightClass?: string;
  withClass?: string;
  totalProduct?: number;
};

export type filterType = {
  title: string;
  actionCb: () => void;
  viewStateCb: boolean;
  icon: string;
  labels: labelType[];
  actionCbView: () => void;
};

export type labelType = {
  label: string;
};


export type buttonProps2 = {
  btnType?: "submit" | "reset" | "button";
  btnText?: string;
  btnText2?: string;
  groupClass?: string;
  prefixIcon?: string;
  actionCb: () => void;
};

export type modalBodyProps = {
  children: ReactNode;
  modalBodyClass?: string;
};

export type sectionCardType = {
  url?: string;
  sectionArr: any[];
};
export type starProps={
  review?:string;
}
export type imageType = {
  img: string;
  className: string;
  objectClass?: string;
  item?:any
};
export type bottomHeaderProps = {
  bottomHeaderArr: any;
};
export type MobileHeaderProp = {
  navArr: any[];
};

export type langType = {
  name: string;
  value: 'en' | 'ae';
};
export type bannerPropsType = {
  imgArr: Array<any>;
};
export type bestSellerPropsType = {
  imgArr: Array<any>;
};

export type brandsType = {
  url: string;
  logo: string;
};
export type brandProps = {
  brandArr: brandsType[];
};

export type featureProductProps = {
  featureProductArr?: any[];
  titleEn: string;
  titleAe: string;
};
export type flashSaleProps = {
  flashSaleArr: any;
};

 export type Product = {
  thumbnail: string;
  name: string;
  offer_price: string;
  price: string;
  qty: number;
  checked?: boolean;
  variant: [
    {
      size: string[];
    },
    {
      fit: string[];
    },
    {
      color: string[];
    },
  ];
};

export type CartContextValue = {
  cartItem: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  totalPrice: number;
  increaseQuantity: (index: number) => void;
  itemCount: number;
  savingAmount: number;
  toggleCheckProduct: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  isCartOpen?: boolean | any;
  setIsCartOpen?: any;
};
