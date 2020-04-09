import React, { FC } from 'react';
import './RadioButton.scss';

export const RadioButton: FC<{
  className?: string,
  defaultToChecked?: boolean,
  groupName: string,
  value: string,
  label: string
}> = ({
  className,
  defaultToChecked,
  groupName,
  value,
  label
}) => (
  <label
    data-e2e={`radio-btn-${value}`}
    htmlFor={value}
    className={`${(className || '')} c-radio-button${
      defaultToChecked ? ' c-radio-button--selected' : ''
    }`}>
    <input
      className='c-radio-button__input'
      defaultChecked={defaultToChecked}
      id={value}
      type='radio'
      name={groupName}
      value={value} />
    {label}
  </label>
);
