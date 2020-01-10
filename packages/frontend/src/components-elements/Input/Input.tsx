import React, { FC } from 'react';
import './Input.scss';

export const Input: FC<{
  className?: string,
  type?: 'text' | 'number',
  placeholder?: string,
  onChange: (newValue: string) => void
}> = ({
  children,
  className,
  type = 'text',
  placeholder,
  onChange
}) => (
  <input
    className={`${(className || '')} c-input`}
    placeholder={placeholder}
    type={type}
    onChange={(event) => onChange(event.target.value)}>
    { children }
  </input>
);
