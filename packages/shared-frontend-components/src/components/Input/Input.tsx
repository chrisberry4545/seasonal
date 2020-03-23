import React, { FC, KeyboardEventHandler } from 'react';
import './Input.scss';

export const Input: FC<{
  className?: string,
  type?: 'text' | 'number' | 'password',
  placeholder?: string,
  onChange: (newValue: string) => void,
  onKeyDown?: KeyboardEventHandler,
  value?: string | number
}> = ({
  children,
  className,
  type = 'text',
  placeholder,
  onChange,
  onKeyDown,
  value
}) => (
  <input
    className={`${(className || '')} c-input`}
    placeholder={placeholder}
    type={type}
    value={value}
    onKeyDown={onKeyDown}
    onChange={(event) => onChange(event.target.value)}>
    { children }
  </input>
);
