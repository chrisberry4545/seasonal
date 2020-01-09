import React, { FC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from './../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodProps } from './SeasonFood.interface';

import {
  ImageGrid, TopLoadingSpinner
} from '../../components-layout';

export const SeasonFood: FC<ISeasonFoodProps> = ({
  isLoading,
  food,
  onFoodClick
}) => (
  <SeasonDetailsContentWrapperConnector>
    {
    !isLoading
      ? <ImageGrid data={ food } onClick={onFoodClick} noResultsMessage='No results found' />
      : <TopLoadingSpinner />
    }
  </SeasonDetailsContentWrapperConnector>
);
