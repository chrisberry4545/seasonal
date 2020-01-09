import React, { FC } from 'react';
import './TextHeadingMedium.scss';
import { ITextInterface } from './Text.interface';

export const TextHeadingMedium: FC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-medium`}>
    { children }
  </span>
);
