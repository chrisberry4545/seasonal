import React, { FC } from 'react';
import { ISelectOption } from './select-option.interface';
import './Select.scss';

export const Select: FC<{
  className?: string,
  onChange: (newValue: string) => void,
  options: ISelectOption[],
  value: string | number
}> = ({
  className,
  onChange,
  options,
  value
}) => (
  <select
    className={`${(className || '')} c-select`}
    value={value}
    onChange={(event) => onChange(event.target.value)}>
      {
        options.map((option) =>
          <option key={option.value} value={option.value}>{option.label}</option>
        )
      }
  </select>
);
