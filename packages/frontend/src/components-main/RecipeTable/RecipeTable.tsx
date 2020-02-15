import React, { FC } from 'react';

import './RecipeTable.scss';

import {
  ImageGrid
} from '../../components-layout';

import {
  LoadingSpinner
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { IRecipeTableProps } from './RecipeTable.interface';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';

export const RecipeTable: FC<IRecipeTableProps> = ({
  isCurrentTabFood,
  isLoading,
  recipes,
  onRecipeClick
}) => (
  !isCurrentTabFood
    ? <div>
      <DietaryFiltersConnector />
      {
        isLoading
        ? <div className='c-food-table__loading-spinner-wrapper'>
          <LoadingSpinner />
        </div>
        : <ImageGrid data={recipes} onClick={onRecipeClick} />
      }
    </div>
    : null
);
