import React, { FC } from 'react';
import './PrimaryButton.scss';

export const PrimaryButton: FC<{
  className?: string,
  onClick?: () => void
}> = ({
  className,
  children,
  onClick
}) => (
  <button className={`${(className || '')} c-primary-button`}
    onClick={onClick}>
    { children }
  </button>
);
