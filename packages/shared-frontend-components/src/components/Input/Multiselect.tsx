import React, { FC } from 'react';
import { ISelectOption } from './select-option.interface';
import './Multiselect.scss';
import { BareButton } from '../Buttons';

export const Multiselect: FC<{
  className?: string,
  onChange: (newValue: Array<(string | number)>) => void,
  options: ISelectOption[],
  value: Array<(string | number)> | null
}> = ({
  className,
  onChange,
  options,
  value
}) => {

  const valueToUse = value || [];
  const isSelected = (optionValue: string | number) =>
    valueToUse && valueToUse.includes(optionValue);
  const onOptionClicked = (selectedValue: string | number) => {
    const newValue = isSelected(selectedValue)
      ? valueToUse.filter((innerValue) => innerValue !== selectedValue)
      : [...valueToUse, selectedValue];
    onChange(newValue);
  };

  return <div
    className={`c-multiselect ${(className || '')}`}>
      {
        options && options.map((option) =>
          <BareButton key={option.value}
            className={
              'c-multi-select-option' + (
                isSelected(option.value)
                  ? ' c-multi-select-option--selected'
                  : ''
              )
            }
            onClick={() => onOptionClicked(option.value)}>
              {option.label}
          </BareButton>
        )
      }
  </div>;
};
