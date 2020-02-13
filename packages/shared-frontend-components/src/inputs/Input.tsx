import React, { FC } from 'react';

export const Input: FC<{
  className?: string,
  type?: 'text' | 'number',
  placeholder?: string,
  onChange: (newValue: string) => void,
  value: string | number
}> = ({
  className,
  type = 'text',
  placeholder,
  onChange,
  value
}) => (
  <input
    className={`${(className || '')}`}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(event) => onChange(event.target.value)} />
);
