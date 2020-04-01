import React, { FC } from 'react';

import './FoodTable.scss';

import {
  ImageGrid
} from '../../components-layout';

import {
  LoadingSpinner
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { IFoodTableProps } from './FoodTable.interface';

export const FoodTable: FC<IFoodTableProps> = ({
  isCurrentTabFood,
  isLoading,
  food,
  onFoodClick
}) => (
  isCurrentTabFood
    ? isLoading
      ? <div className='c-food-table__loading-spinner-wrapper'>
        <LoadingSpinner />
      </div>
      : <Switable <ImageGrid data-e2e='food-grid'
          data={food} onClick={onFoodClick} />
    : null
);
