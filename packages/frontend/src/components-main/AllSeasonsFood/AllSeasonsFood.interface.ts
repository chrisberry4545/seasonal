import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonsFoodInputProps {
  isCurrentTabFood: boolean;
  isLoading: boolean;
  seasons: IHydratedSeason[] | undefined;
  hasMoreSeasonsInAllSeasonsView: boolean;
}

export interface IAllSeasonsFoodDispatchProps {
  increaseNumberOfAllSeasonsInView: () => void;
  onFoodClick: (foodItemId: string) => void;
}

export interface IAllSeasonsFoodProps
  extends IAllSeasonsFoodInputProps, IAllSeasonsFoodDispatchProps {}
