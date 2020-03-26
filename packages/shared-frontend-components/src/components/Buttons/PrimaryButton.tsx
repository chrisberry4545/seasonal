import React, { FC } from 'react';
import './PrimaryButton.scss';

export const PrimaryButton: FC<{
  className?: string,
  onClick?: () => void,
  type?: 'button' | 'submit',
  e2eName?: string
}> = ({
  className,
  children,
  onClick,
  type = 'button',
  e2eName
}) => (
  <button
    data-e2e={e2eName}
    type={type} className={`${(className || '')} c-primary-button`}
    onClick={onClick}>
    { children }
  </button>
);
