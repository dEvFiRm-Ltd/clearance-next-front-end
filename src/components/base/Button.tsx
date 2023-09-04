import React, { FC } from "react";

type buttonType = {
  btnText: string;
  btnClass: string;
};

const Button: FC<buttonType> = ({ btnText, btnClass }) => {
  return (
    <div>
      <button type="button" className={`${btnClass}`}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
