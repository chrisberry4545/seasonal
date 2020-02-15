import React, { FC } from 'react';
import './icon.scss';

export const BurgerIcon: FC<{}> = () => (
  <svg viewBox='0 0 24 24' className='c-icon'>
    <rect height='2' width='24' y='5'></rect>
    <rect height='2' width='24' y='11'></rect>
    <rect height='2' width='24' y='17'></rect>
  </svg>
);
