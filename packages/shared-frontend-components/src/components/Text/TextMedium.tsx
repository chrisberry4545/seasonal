import React, { FC } from 'react';
import './TextMedium.scss';
import { IText } from './Text.interface';

export const TextMedium: FC<IText> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-medium`}>
    { children }
  </span>
);
