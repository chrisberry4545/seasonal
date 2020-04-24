import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonsFoodInputProps {
  isLoading: boolean;
  isListViewShown: boolean;
  seasons: IHydratedSeason[] | undefined;
}

export interface IAllSeasonsFoodDispatchProps {
  increaseNumberOfAllSeasonsInView: () => void;
  onFoodClick: (foodItemId: string) => void;
  onToggleListView: () => void;
}

export interface IAllSeasonsFoodProps
  extends IAllSeasonsFoodInputProps, IAllSeasonsFoodDispatchProps {}
