import React, { FC } from 'react';
import './PrimaryButton.scss';

export const PrimaryButton: FC<{
  className?: string,
  onClick?: () => void,
  type?: 'button' | 'submit'
}> = ({
  className,
  children,
  onClick,
  type = 'button'
}) => (
  <button type={type} className={`${(className || '')} c-primary-button`}
    onClick={onClick}>
    { children }
  </button>
);
