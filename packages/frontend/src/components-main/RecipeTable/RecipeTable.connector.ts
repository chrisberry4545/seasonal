import { connect } from 'react-redux';
import {
  RecipeTable
} from './RecipeTable';
import {
  selectIsCurrentTabFood
} from '../../store';
import {
  selectVisibleRecipeData,
  recipeItemClicked,
  selectIsCurrentSeasonRecipesLoading
} from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IState } from '../../interfaces';
import {
  IRecipeTableInputProps,
  IRecipeTableDispatchProps
} from './RecipeTable.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IRecipeTableInputProps => {
  return {
    isCurrentTabFood: selectIsCurrentTabFood(state),
    isLoading: selectIsCurrentSeasonRecipesLoading(state),
    recipes: selectVisibleRecipeData(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IRecipeTableDispatchProps => {
  return {
    onRecipeClick: (recipeItemId) => dispatch(recipeItemClicked(recipeItemId))
  };
};

export const RecipeTableConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeTable);
