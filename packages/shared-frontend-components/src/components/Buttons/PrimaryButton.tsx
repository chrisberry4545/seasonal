import React, { FC } from 'react';
import './PrimaryButton.scss';
import { IButton } from './Button.interface';

export const PrimaryButton: FC<IButton> = ({
  className,
  children,
  onClick,
  type = 'button',
  ...rest
}) => (
  <button
    data-e2e={rest['data-e2e']}
    type={type} className={`${(className || '')} c-primary-button`}
    onClick={onClick}>
    { children }
  </button>
);
