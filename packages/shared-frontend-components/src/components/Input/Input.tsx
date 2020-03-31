import React, { FC, KeyboardEventHandler } from 'react';
import './Input.scss';

export const Input: FC<{
  className?: string,
  type?: 'text' | 'number' | 'password',
  placeholder?: string,
  onChange: (newValue: string) => void,
  onKeyDown?: KeyboardEventHandler,
  value?: string | number,
  'data-e2e'?: string
}> = ({
  children,
  className,
  type = 'text',
  placeholder,
  onChange,
  onKeyDown,
  value,
  ...rest
}) => (
  <input
    data-e2e={rest['data-e2e']}
    className={`${(className || '')} c-input`}
    placeholder={placeholder}
    type={type}
    value={value}
    onKeyDown={onKeyDown}
    onChange={(event) => onChange(event.target.value)}>
    { children }
  </input>
);
