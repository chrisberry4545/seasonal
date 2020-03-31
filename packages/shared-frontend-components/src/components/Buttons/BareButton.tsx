import React, { FC } from 'react';
import './BareButton.scss';
import { IButton } from './Button.interface';

export const BareButton: FC<IButton> = ({
  className,
  children,
  onClick,
  type = 'button',
  ...rest
}) => (
  <button
    data-e2e={rest['data-e2e']}
    type={type}
    className={`${(className || '')} c-bare-button`}
    onClick={onClick}>
    { children }
  </button>
);
