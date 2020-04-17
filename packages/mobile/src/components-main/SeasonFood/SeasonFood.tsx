import React, { FC } from 'react';

import {
  SeasonDetailsContentWrapperConnector
} from '../SeasonDetailsContentWrapper/SeasonDetailsContentWrapper.connector';
import { ISeasonFoodProps } from './SeasonFood.interface';
import {
  SwitchableGridOrList, TopLoadingSpinner
} from '../../components-layout';

export const SeasonFood: FC<ISeasonFoodProps> = ({
  isLoading,
  food,
  onFoodClick,
  isListViewShown,
  onToggleListView
}) => (
  <SeasonDetailsContentWrapperConnector>
    {
    !isLoading
      ? <SwitchableGridOrList
          isListViewShown={isListViewShown}
          onToggleListView={onToggleListView}
          data={food}
          onClick={onFoodClick} noResultsMessage='No results found' />
      : <TopLoadingSpinner />
    }
  </SeasonDetailsContentWrapperConnector>
);
