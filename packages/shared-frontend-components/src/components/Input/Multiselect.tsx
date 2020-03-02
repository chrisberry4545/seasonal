import React, { FC } from 'react';
import { ISelectOption } from './select-option.interface';
import './Multiselect.scss';

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
    value && value.includes(optionValue);
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
            className={
              'c-multi-select-option' + (
                isSelected(option.value)
                  ? ' c-multi-select-option--selected'
                  : ''
              )
            }
            onClick={() => onOptionClicked(option.value)}>
              {option.label}
          </div>
        )
      }
  </div>;
};
