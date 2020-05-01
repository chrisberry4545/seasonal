import React, { FC } from 'react';
import {
  IAllSeasonsRecipesProps
} from './AllSeasonsRecipes.interface';
import { AllSeasonsWrapper } from '../AllSeasonsWrapper/AllSeasonsWrapper';

export const AllSeasonsRecipes: FC<IAllSeasonsRecipesProps> = ({
  isLoading,
  increaseNumberOfAllSeasonsInView,
  onRecipeClick,
  seasons,
  isListViewShown,
  onToggleListView
}) => (
  <AllSeasonsWrapper
    propName='recipes'
    isLoading={isLoading}
    increaseNumberOfAllSeasonsInView={increaseNumberOfAllSeasonsInView}
    onItemClick={onRecipeClick}
    seasons={seasons}
    isListViewShown={isListViewShown}
    onToggleListView={onToggleListView} />
);
