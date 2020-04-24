import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonsRecipesInputProps {
  isLoading: boolean;
  isListViewShown: boolean;
  seasons: IHydratedSeason[] | undefined;
}

export interface IAllSeasonsRecipesDispatchProps {
  increaseNumberOfAllSeasonsInView: () => void;
  onRecipeClick: (recipeId: string) => void;
  onToggleListView: () => void;
}

export interface IAllSeasonsRecipesProps
  extends IAllSeasonsRecipesInputProps, IAllSeasonsRecipesDispatchProps {}
