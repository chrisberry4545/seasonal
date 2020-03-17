import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonsInputProps {
  isLoading: boolean;
  seasons: IHydratedSeason[] | undefined;
  hasMoreSeasonsInAllSeasonsView: boolean;
}

export interface IAllSeasonsDispatchProps {
  increaseNumberOfAllFoodSeasonsInView: () => void;
  onFoodClick: (foodItemId: string) => void;
}

export interface IAllSeasonsProps
  extends IAllSeasonsInputProps, IAllSeasonsDispatchProps {}
