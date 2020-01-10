import { IRecipe } from '@chrisb-dev/seasonal-shared';

export interface IRecipeTableInputProps {
  isCurrentTabFood: boolean;
  recipes: IRecipe[] | undefined;
  isLoading: boolean;
}

export interface IRecipeTableDispatchProps {
  onRecipeClick: (recipeItemId: string) => void;
}

export interface IRecipeTableProps
  extends IRecipeTableInputProps, IRecipeTableDispatchProps {}
