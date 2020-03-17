import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export interface IRecipeForFoodInputProps {
  isLoading: boolean;
  currentFoodDetailsRecipes: IRecipe[] | undefined;
}

export interface IRecipeForFoodDispatchProps {
  onRecipeSelected: (recipeId: string) => void;
}

export interface IRecipeForFoodProps
  extends IRecipeForFoodInputProps, IRecipeForFoodDispatchProps {}
