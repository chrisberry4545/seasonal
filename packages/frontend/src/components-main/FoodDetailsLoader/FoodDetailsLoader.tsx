import React, { FC } from 'react';

import './FoodDetailsLoader.scss';

import {
  LoadingSpinner
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';

export const FoodDetailsLoader: FC<IFoodDetailsLoaderInputProps> = ({
  isLoading
}) => (
  isLoading
    ? <div className='c-food-details-loader'>
      <LoadingSpinner />
    </div>
    : null
);
