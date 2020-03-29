import React, { FC } from 'react';
import './PrimaryButton.scss';
import { IButton } from './Button.interface';

export const PrimaryButton: FC<IButton> = ({
  className,
  children,
  onClick,
  type = 'button',
  e2eTag
}) => (
  <button
    data-e2e={e2eTag}
    type={type} className={`${(className || '')} c-primary-button`}
    onClick={onClick}>
    { children }
  </button>
);
