import React, { FC } from 'react';

import {
  ImageGrid, TopLoadingSpinner
} from '../../components-layout';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonRecipesProps } from './SeasonRecipes.interface';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';

export const SeasonRecipes: FC<ISeasonRecipesProps> = ({
  isLoading,
  recipes,
  onRecipeClick
}) => (
  <SeasonDetailsContentWrapperConnector>
    <DietaryFiltersConnector />
    {
      !isLoading
        ? <ImageGrid data={ recipes } onClick={ onRecipeClick } />
        : <TopLoadingSpinner />
    }
  </SeasonDetailsContentWrapperConnector>
);
