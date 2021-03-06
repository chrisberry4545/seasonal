import React, { FC } from 'react';
import './icon.scss';
import { IIcon } from './Icon.interface';

export const ArrowIcon: FC<IIcon> = ({
  className
}) => (
  <svg className={`c-icon${className ? ` ${className}` : ''}`} viewBox='0 0 24 24'>
    <g strokeLinecap='round' strokeWidth='2' stroke='#000'>
      <line x1='1' y1='11' x2='6' y2='5' />
      <line x1='1' y1='11' x2='6' y2='17' />
      <line x1='2' y1='11' x2='22' y2='11' />
    </g>
  </svg>
);
