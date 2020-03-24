import React, { FC } from 'react';
import './TextSmall.scss';
import { IText } from './Text.interface';

export const TextSmall: FC<IText> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-small`}>
    { children }
  </span>
);
