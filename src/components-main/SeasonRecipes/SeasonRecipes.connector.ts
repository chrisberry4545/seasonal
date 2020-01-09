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
  selectIsCurrentSeasonRecipesLoading
} from '@chrisb-dev/seasonal-shared';
import { IState } from '../../interfaces';

import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonRecipesInputProps => {
  return {
    isLoading: selectIsCurrentSeasonRecipesLoading(state),
    recipes: selectVisibleRecipeData(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonRecipesDispatchProps => ({
  onRecipeClick: (recipeItemId) => (
    dispatch(recipeItemClicked(recipeItemId))
  )
});

export const SeasonRecipesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonRecipes);
