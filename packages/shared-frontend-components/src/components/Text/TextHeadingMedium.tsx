import React, { FC } from 'react';
import './TextHeadingMedium.scss';
import { IText } from './Text.interface';

export const TextHeadingMedium: FC<IText> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-medium`}>
    { children }
  </span>
);
