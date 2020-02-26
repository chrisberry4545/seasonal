import React, { FC } from 'react';

export const Checkbox: FC<{
  className?: string,
  onChange: (newValue: boolean) => void,
  value: boolean
}> = ({
  className,
  onChange,
  value
}) => (
  <input
    className={`${(className || '')}`}
    type='checkbox'
    checked={value}
    onChange={(event) => onChange(event.target.checked)} />
);
