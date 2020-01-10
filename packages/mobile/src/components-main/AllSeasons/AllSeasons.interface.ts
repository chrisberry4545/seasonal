import { IHydratedSeason } from '@chrisb-dev/seasonal-shared';

export interface IAllSeasonsInputProps {
  isLoading: boolean;
  seasons: IHydratedSeason[] | undefined;
}

export interface IAllSeasonsDispatchProps {
  increaseNumberOfAllFoodSeasonsInView: () => void;
  onFoodClick: (foodItemId: string) => void;
}

export interface IAllSeasonsProps
  extends IAllSeasonsInputProps, IAllSeasonsDispatchProps {}
