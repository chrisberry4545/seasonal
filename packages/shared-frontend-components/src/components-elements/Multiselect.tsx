import React, { FC } from 'react';
import './Multiselect.scss';

export interface ISelectOption {
  label: string;
  value: string | number;
}

export const Multiselect: FC<{
  className?: string,
  onChange: (newValue: Array<(string | number)>) => void,
  options: ISelectOption[],
  value: Array<(string | number)>
}> = ({
  className,
  onChange,
  options,
  value
}) => {
  const onOptionClicked = (selectedValue: string | number) => {
    const isSelected = value.includes(selectedValue as string);
    const newValue = isSelected
      ? value.filter((innerValue) => innerValue !== selectedValue)
      : [...value, selectedValue];
    onChange(newValue);
  };

  return <div
    className={`c-multiselect ${(className || '')}`}>
      {
        options.map((option) =>
          <div key={option.value}
            onClick={() => onOptionClicked(option.value)}>
              {option.label}
          </div>
        )
      }
  </div>;
};
