import React, { FC } from 'react';
import './BareButton.scss';
import { IButton } from './Button.interface';

export const BareButton: FC<IButton> = ({
  className,
  children,
  onClick,
  type = 'button',
  e2eTag
}) => (
  <button
    data-e2e={e2eTag}
    type={type}
    className={`${(className || '')} c-bare-button`}
    onClick={onClick}>
    { children }
  </button>
);
