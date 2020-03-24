import React, { FC } from 'react';
import './TextHeadingSmall.scss';
import { IText } from './Text.interface';

export const TextHeadingSmall: FC<IText> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-small`}>
    { children }
  </span>
);
