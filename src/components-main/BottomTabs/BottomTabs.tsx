import React, { SFC } from 'react';

import './BottomTabs.scss';

import {
  BareButton
} from '../../components-elements';
import { IBottomTabProps } from './BottomTabs.interface';

const addTabClasses = (isSelected: boolean) => (
  `c-bottom-tabs__tab ${
    isSelected
      ? ' c-bottom-tabs__tab--selected'
      : ''
  }`
);

export const BottomTabs: SFC<IBottomTabProps> = ({
  isCurrentTabFood,
  isCurrentTabRecipes,
  goToFoodTab,
  goToRecipesTab
}) => (
  <nav className='c-bottom-tabs'>
    <BareButton
      className={addTabClasses(isCurrentTabFood)}
      onClick={goToFoodTab}>
      Food
    </BareButton>
    <BareButton
      className={addTabClasses(isCurrentTabRecipes)}
      onClick={goToRecipesTab}>
      Recipes
    </BareButton>
  </nav>
);
