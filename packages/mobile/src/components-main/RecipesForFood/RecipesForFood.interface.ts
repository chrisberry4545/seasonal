import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export interface IRecipeForFoodInputProps {
  isLoading: boolean;
  isListViewShown: boolean;
  currentFoodDetailsRecipes: IRecipe[] | undefined;
}

export interface IRecipeForFoodDispatchProps {
  onRecipeSelected: (recipeId: string) => void;
  onToggleListView: () => void;
}

export interface IRecipeForFoodProps
  extends IRecipeForFoodInputProps, IRecipeForFoodDispatchProps {}
