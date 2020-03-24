import React, { FC } from 'react';
import './TextHeadingLarge.scss';
import { IText } from './Text.interface';

export const TextHeadingLarge: FC<IText> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-large`}>
    { children }
  </span>
);
