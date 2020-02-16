import React, { FC } from 'react';
import './Input.scss';

export const Input: FC<{
  className?: string,
  type?: 'text' | 'number' | 'password',
  placeholder?: string,
  onChange: (newValue: string) => void,
  value?: string | number
}> = ({
  children,
  className,
  type = 'text',
  placeholder,
  onChange,
  value
}) => (
  <input
    className={`${(className || '')} c-input`}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(event) => onChange(event.target.value)}>
    { children }
  </input>
);
