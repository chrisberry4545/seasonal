import { connect } from 'react-redux';
import {
  RecipesForFood
} from './RecipesForFood';
import {
  selectIsFoodDataOrBasicSeasonsLoading,
  selectVisibleRecipesForFoodDetailsData,
  foodDetailsSelectRecipe
} from '@chrisb-dev/seasonal-shared';

import { IState } from '../../interfaces';
import {
  IRecipeForFoodInputProps,
  IRecipeForFoodDispatchProps
} from './RecipesForFood.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IRecipeForFoodInputProps => ({
  currentFoodDetailsRecipes: selectVisibleRecipesForFoodDetailsData(state),
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IRecipeForFoodDispatchProps => ({
  onRecipeSelected: (recipeId: string) => (
    dispatch(foodDetailsSelectRecipe(recipeId))
  )
});

export const RecipesForFoodConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesForFood);
