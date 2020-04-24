import React, { FC } from 'react';

import {
  IAllSeasonsFoodProps
} from './AllSeasonsFood.interface';
import { AllSeasonsWrapper } from '../AllSeasonsWrapper/AllSeasonsWrapper';

export const AllSeasonsFood: FC<IAllSeasonsFoodProps> = ({
  isLoading,
  increaseNumberOfAllSeasonsInView,
  onFoodClick,
  seasons,
  isListViewShown,
  onToggleListView
}) => (
  <AllSeasonsWrapper
    propName='food'
    isLoading={isLoading}
    increaseNumberOfAllSeasonsInView={increaseNumberOfAllSeasonsInView}
    onItemClick={onFoodClick}
    seasons={seasons}
    isListViewShown={isListViewShown}
    onToggleListView={onToggleListView} />
);
