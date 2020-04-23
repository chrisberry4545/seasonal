import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonsRecipesInputProps {
  isCurrentTabRecipes: boolean;
  isLoading: boolean;
  seasons: IHydratedSeason[] | undefined;
  hasMoreSeasonsInAllSeasonsView: boolean;
}

export interface IAllSeasonsRecipesDispatchProps {
  increaseNumberOfAllSeasonsInView: () => void;
  onRecipeClick: (recipeId: string) => void;
}

export interface IAllSeasonsRecipesProps
  extends IAllSeasonsRecipesInputProps, IAllSeasonsRecipesDispatchProps {}
