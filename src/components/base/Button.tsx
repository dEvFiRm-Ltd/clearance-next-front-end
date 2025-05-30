import React, { FC } from 'react';

type buttonProps = {
  btnType?: 'submit' | 'reset' | 'button';
  btnText?: string;
  btnClass?: string;
  icon?: string;
  suffixIcon?: string;
  prefixIcon?: string;
  disabled?: boolean;
  variant?: 'primary' | 'outlined' | 'naked' | 'link';
} & (
  | {
      btnType?: 'reset' | 'button';
      actionCb: () => void;
    }
  | {
      btnType?: 'submit';
      actionCb?: never;
    }
);

const Button: FC<buttonProps> = ({
  btnText,
  icon,
  suffixIcon,
  prefixIcon,
  disabled,
  btnClass = '',
  actionCb,
  btnType = 'button',
  variant = 'primary',
}) => {
  return (
    <button
      disabled={disabled}
      type={btnType}
      onClick={actionCb}
      className={`w-full font-normal flex justify-center items-center baseBtnClass ${
        icon ? 'px-0 py-0' : ''
      } ${suffixIcon ? 'flex gap-x-2' : ''} ${
        prefixIcon ? 'flex gap-x-2' : ''
      } ${btnText ? 'text-sm text-center py-2.5 px-7' : ''} ${
        variant === 'primary'
          ? 'bg-[#31353c] text-white'
          : variant === 'outlined'
          ? 'bg-white text-[#31353c] border border-[#31353c]'
          : variant === 'naked'
          ? 'text-[#31353c] bg-white'
          : variant === 'link'
          ? 'text-[#31353c] bg-white underline'
          : ''
      } ${btnClass}`}
    >
      {prefixIcon && <i className={`text-sm ${prefixIcon}`}></i>}
      {icon && <i className={`text-sm ${icon}`}></i>}
      {btnText}
      {suffixIcon && <i className={`text-sm ${suffixIcon}`}></i>}
    </button>
  );
};

export default Button;

