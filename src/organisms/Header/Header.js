import React from 'react';

import './Header.scss';

import {
  BareButton,
  BurgerIcon,
  TextHeadingLarge
} from '../../elements';

import {
  SeasonMenuConnecter
} from '../SeasonMenu/SeasonMenu.connector';

export const Header = ({
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
    <SeasonMenuConnecter key='season-menu' />
  </header>
);
