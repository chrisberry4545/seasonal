import React, { FC } from 'react';
import './BareButton.scss';

export const BareButton: FC<{
  className?: string,
  onClick?: () => void
}> = ({
  className,
  children,
  onClick
}) => (
  <button className={`${(className || '')} c-bare-button`} onClick={onClick}>
    { children }
  </button>
);
