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

  const isSelected = (optionValue: string | number) =>
    value.includes(optionValue);
  const onOptionClicked = (selectedValue: string | number) => {
    const newValue = isSelected(selectedValue)
      ? value.filter((innerValue) => innerValue !== selectedValue)
      : [...value, selectedValue];
    onChange(newValue);
  };

  return <div
    className={`c-multiselect ${(className || '')}`}>
      {
        options.map((option) =>
          <div key={option.value}
            className={isSelected(option.value) ? 'c-multi-select-option--selected' : ''}
            onClick={() => onOptionClicked(option.value)}>
              {option.label}
          </div>
        )
      }
  </div>;
};
