import React, { FC } from 'react';
import './TextSmall.scss';
import { ITextInterface } from './Text.interface';

export const TextSmall: FC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-small`}>
    { children }
  </span>
);
