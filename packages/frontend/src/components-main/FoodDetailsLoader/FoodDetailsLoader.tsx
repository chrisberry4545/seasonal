import React, { FC } from 'react';
import {
  CentralLoadingSpinner
} from '../../components-layout';
import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';

export const FoodDetailsLoader: FC<IFoodDetailsLoaderInputProps> = ({
  isLoading
}) => <CentralLoadingSpinner isLoading={isLoading} />;
