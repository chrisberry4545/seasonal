import { connect } from 'react-redux';
import {
  RecipesForFood
} from './RecipesForFood';
import {
  selectIsFoodDataOrBasicSeasonsLoading,
  selectVisibleRecipesForFoodDetailsData,
  foodDetailsSelectRecipe,
  selectIsListViewShown,
  toggleListView
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../store';
import {
  IRecipeForFoodInputProps,
  IRecipeForFoodDispatchProps
} from './RecipesForFood.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IRecipeForFoodInputProps => ({
  currentFoodDetailsRecipes: selectVisibleRecipesForFoodDetailsData(state),
  isListViewShown: selectIsListViewShown(state),
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IRecipeForFoodDispatchProps => ({
  onRecipeSelected: (recipeId: string) => (
    dispatch(foodDetailsSelectRecipe(recipeId))
  ),
  onToggleListView: () => dispatch(toggleListView())
});

export const RecipesForFoodConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesForFood);
