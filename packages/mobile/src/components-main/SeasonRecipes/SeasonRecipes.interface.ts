import {
  IRecipe
} from '@chrisb-dev/seasonal-shared-models';

export interface ISeasonRecipesInputProps {
  isLoading: boolean;
  recipes: IRecipe[] | undefined;
}

export interface ISeasonRecipesDispatchProps {
  onRecipeClick: (recipeItemId: string) => void;
}

export interface ISeasonRecipesProps extends
  ISeasonRecipesInputProps, ISeasonRecipesDispatchProps {}
