import React, { FC } from 'react';
import './icon.scss';
import { IIcon } from './Icon.interface';

export const CrossIcon: FC<IIcon> = ({
  className
}) => (
  <svg className={`c-icon ${className ? ` ${className}` : ''}`}  viewBox='0 0 24 24'>
    {/* tslint:disable-next-line */}
    <polygon points='19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12' />
  </svg>
);
