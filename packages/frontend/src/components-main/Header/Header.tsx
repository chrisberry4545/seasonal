import React, { FC } from 'react';

import './Header.scss';

import {
  BareButton,
  BurgerIcon,
  TextHeadingLarge
} from '@chrisb-dev/seasonal-shared-frontend-components';
import {
  SearchBarConnecter
} from '../';
import { IHeaderDispatchProps } from './Header.interface';

export const Header: FC<IHeaderDispatchProps> = ({
  onMenuOpen
}) => (
  <header className='c-header'>
    <BareButton className='c-header__btn' onClick={onMenuOpen}>
      <BurgerIcon />
    </BareButton>
    <h1 className='c-header__text'>
      <TextHeadingLarge>
        Eat Seasonal
      </TextHeadingLarge>
    </h1>
    <SearchBarConnecter />
  </header>
);
