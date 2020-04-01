import {
  IRecipe
} from '@chrisb-dev/seasonal-shared-models';

export interface ISeasonRecipesInputProps {
  isLoading: boolean;
  isListViewShown: boolean;
  recipes: IRecipe[] | undefined;
}

export interface ISeasonRecipesDispatchProps {
  onRecipeClick: (recipeItemId: string) => void;
  onToggleListView: () => void;
}

export interface ISeasonRecipesProps extends
  ISeasonRecipesInputProps, ISeasonRecipesDispatchProps {}
