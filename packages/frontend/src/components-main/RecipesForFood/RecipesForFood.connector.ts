import { connect } from 'react-redux';
import {
  RecipesForFood
} from './RecipesForFood';
import {
  selectIsFoodDataOrBasicSeasonsLoading,
  selectVisibleRecipesForFoodDetailsData,
  foodDetailsSelectRecipe
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../store';
import {
  IRecipesForFoodInputProps,
  IRecipesForFoodDispatchProps
} from './RecipesForFood.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IRecipesForFoodInputProps => ({
  currentFoodDetailsRecipes: selectVisibleRecipesForFoodDetailsData(state),
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IRecipesForFoodDispatchProps => ({
  onRecipeSelected: (recipeId: string) => (
    dispatch(foodDetailsSelectRecipe(recipeId))
  )
});

export const RecipesForFoodConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesForFood);
