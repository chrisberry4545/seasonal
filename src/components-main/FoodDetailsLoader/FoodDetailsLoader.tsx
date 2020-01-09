import React, { FC } from 'react';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';
import { TopLoadingSpinner } from '../../components-layout';

export const FoodDetailsLoader: FC<IFoodDetailsLoaderInputProps> = ({
  isLoading
}) => (
  isLoading
    ? <TopLoadingSpinner />
    : null
);
