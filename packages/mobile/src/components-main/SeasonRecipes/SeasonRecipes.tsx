import React, { FC } from 'react';

import {
  TopLoadingSpinner, SwitchableGridOfList
} from '../../components-layout';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesProps } from './SeasonRecipes.interface';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';

export const SeasonRecipes: FC<ISeasonRecipesProps> = ({
  isLoading,
  recipes,
  onRecipeClick,
  isListViewShown,
  onToggleListView
}) => (
  <SeasonDetailsContentWrapperConnector>
    <DietaryFiltersConnector />
    {
      !isLoading
        ? <SwitchableGridOfList data={ recipes }
            onClick={ onRecipeClick }
            isListViewShown={isListViewShown}
            onToggleListView={onToggleListView}
            />
        : <TopLoadingSpinner />
    }
  </SeasonDetailsContentWrapperConnector>
);
