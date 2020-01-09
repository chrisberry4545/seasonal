import React, { FC } from 'react';
import './TextMedium.scss';
import { ITextInterface } from './Text.interface';

export const TextMedium: FC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-medium`}>
    { children }
  </span>
);
