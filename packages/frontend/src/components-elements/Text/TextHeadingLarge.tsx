import React, { FC } from 'react';
import './TextHeadingLarge.scss';
import { ITextInterface } from './Text.interface';

export const TextHeadingLarge: FC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-large`}>
    { children }
  </span>
);
