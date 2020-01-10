import React, { FC } from 'react';
import './RadioButton.scss';

export const RadioButton: FC<{
  className?: string,
  defaulToChecked?: boolean,
  groupName: string,
  value: string,
  label: string
}> = ({
  className,
  defaulToChecked,
  groupName,
  value,
  label
}) => (
  <label
    htmlFor={value}
    className={`${(className || '')} c-radio-button ${
      defaulToChecked ? 'c-radio-button--selected' : ''
    }`}>
    <input
      className='c-radio-button__input'
      defaultChecked={defaulToChecked}
      id={value}
      type='radio'
      name={groupName}
      value={value} />
    {label}
  </label>
);
