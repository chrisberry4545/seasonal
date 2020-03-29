import React, { FC } from 'react';

import './BottomTabs.scss';

import {
  BareButton
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { IBottomTabProps } from './BottomTabs.interface';

const addTabClasses = (isSelected: boolean) => (
  `c-bottom-tabs__tab ${
    isSelected
      ? ' c-bottom-tabs__tab--selected'
      : ''
  }`
);

export const BottomTabs: FC<IBottomTabProps> = ({
  isCurrentTabFood,
  isCurrentTabRecipes,
  goToFoodTab,
  goToRecipesTab
}) => (
  <nav className='c-bottom-tabs'>
    <BareButton
      e2eTag='bottom-tab-food'
      className={addTabClasses(isCurrentTabFood)}
      onClick={goToFoodTab}>
      Food
    </BareButton>
    <BareButton
      e2eTag='bottom-tab-recipes'
      className={addTabClasses(isCurrentTabRecipes)}
      onClick={goToRecipesTab}>
      Recipes
    </BareButton>
  </nav>
);
