import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
//   checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="flex gap-2 items-center cursor-pointer overflow-hidden filter-checkbox">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4"
        // checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className="text-[#484C52] text-[14px] leading-[17px] flex-1 truncate select-none">{label}</span>
    </label>
  );
};

export default Checkbox;
