import {
  ISeasonRecipesInputProps, ISeasonRecipesDispatchProps
} from './SeasonRecipes.interface';

import { connect } from 'react-redux';
import {
  SeasonRecipes
} from './SeasonRecipes';
import {
  selectVisibleRecipeData,
  recipeItemClicked,
  selectIsCurrentSeasonRecipesLoading,
  selectIsListViewShown,
  toggleListView
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IState } from '../../store';

import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonRecipesInputProps => {
  return {
    isListViewShown: selectIsListViewShown(state),
    isLoading: selectIsCurrentSeasonRecipesLoading(state),
    recipes: selectVisibleRecipeData(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonRecipesDispatchProps => ({
  onRecipeClick: (recipeItemId) => (
    dispatch(recipeItemClicked(recipeItemId))
  ),
  onToggleListView: () => dispatch(toggleListView())
});

export const SeasonRecipesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonRecipes);
