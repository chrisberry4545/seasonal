import React, { FC } from 'react';
import './TextHeadingSmall.scss';
import { ITextInterface } from './Text.interface';

export const TextHeadingSmall: FC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-small`}>
    { children }
  </span>
);
