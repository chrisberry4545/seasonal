import { connect } from 'react-redux';
import {
  AllSeasonsRecipes
} from './AllSeasonsRecipes';

import { IState } from '../../store';
import {
  IAllSeasonsRecipesInputProps,
  IAllSeasonsRecipesDispatchProps
} from './AllSeasonsRecipes.interface';
import { Dispatch } from 'redux';
import {
  selectIsAllSeasonsFoodLoading,
  selectAllSeasonsVisibleRecipesData,
  increaseNumberOfAllSeasonsInView,
  toggleListView,
  selectIsListViewShown,
  recipeItemClicked
} from '@chrisb-dev/seasonal-shared-frontend-redux';

const mapStateToProps = (
  state: IState
): IAllSeasonsRecipesInputProps => ({
  isListViewShown: selectIsListViewShown(state),
  isLoading: selectIsAllSeasonsFoodLoading(state),
  seasons: selectAllSeasonsVisibleRecipesData(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IAllSeasonsRecipesDispatchProps => ({
  increaseNumberOfAllSeasonsInView: () => (
    dispatch(increaseNumberOfAllSeasonsInView())
  ),
  onRecipeClick: (recipeId: string) => dispatch(recipeItemClicked(recipeId)),
  onToggleListView: () => dispatch(toggleListView())
});

export const AllSeasonsRecipesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSeasonsRecipes);
