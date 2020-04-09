import React, { FC } from 'react';

import { RadioButton } from './RadioButton';

import './RadioButtonGroup.scss';

export const RadioButtonGroup: FC<{
  className?: string,
  radioButtonClassName?: string,
  groupName: string,
  radioButtons: Array<{
    value: string,
    label: string
  }>,
  selectedValue?: string,
  onChange: (newValue: string) => void
}> = ({
  className,
  radioButtonClassName,
  selectedValue,
  groupName,
  radioButtons,
  onChange
}) => (
  <div
    className={`${(className || '')} c-radio-button-group`}
    onChange={
      (event) => onChange((event.target as HTMLInputElement).value)
    }>
    {
      radioButtons.map(({ value, label }) => (
        <RadioButton
          key={value}
          className={radioButtonClassName}
          defaultToChecked={selectedValue === value}
          groupName={groupName}
          value={value}
          label={label}
        />
      ))
    }
  </div>
);
