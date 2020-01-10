import React, { FC } from 'react';

import './FoodTable.scss';

import {
  ImageGrid
} from '../../components-layout';

import {
  LoadingSpinner
} from '../../components-elements';
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
      : <ImageGrid data={food} onClick={onFoodClick} />
    : null
);
