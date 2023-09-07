import React, { FC, } from 'react'

type buttonProps = {
  btnType?: 'submit' | 'reset' | 'button'
  btnText?: string
  btnClass?: string
  icon?: string
  suffixIcon?: string
  prefixIcon?: string
  variant?: 'primary' | 'outlined' | 'naked' | 'link'
} & (
  | {
      btnType?: 'reset' | 'button'
      actionCb: () => void
    }
  | {
      btnType?: 'submit'
      actionCb?: never
    }
)

const Button: FC<buttonProps> = ({
  btnText,
  icon,
  suffixIcon,
  prefixIcon,
  btnClass,
  actionCb,
  btnType = 'button',
  variant = 'primary',
}) => {
  return (
    <button
      type={btnType}
      onClick={actionCb}
      className={`w-full font-normal flex justify-center items-center ${
        icon ? 'px-0 py-0' : ''
      } ${suffixIcon ? 'flex gap-x-2' : ''} ${
        prefixIcon ? 'flex gap-x-2' : ''
      } ${
        btnText ? 'text-sm text-center py-2.5 px-7' : ''
      } ${
        variant === 'primary'
          ? 'bg-black-primary text-white'
          : variant === 'outlined'
          ? 'bg-white text-black-primary border border-black-primary'          
          : variant === 'naked'
          ? 'text-black-primary bg-white'
          : variant === 'link'
          ? 'text-black-primary bg-white underline'
          : ''
      } ${btnClass}`}
    >
      {prefixIcon && <i className={`text-base ${prefixIcon}`}></i>}
      {icon && <i className={`text-base ${icon}`}></i>}
      {btnText}
      {suffixIcon && <i className={`text-base ${suffixIcon}`}></i>}
    </button>
  )
}

export default Button