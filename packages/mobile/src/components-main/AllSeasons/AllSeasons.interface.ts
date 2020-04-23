import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonsInputProps {
  isLoading: boolean;
  isListViewShown: boolean;
  seasons: IHydratedSeason[] | undefined;
}

export interface IAllSeasonsDispatchProps {
  increaseNumberOfAllSeasonsInView: () => void;
  onFoodClick: (foodItemId: string) => void;
  onToggleListView: () => void;
}

export interface IAllSeasonsProps
  extends IAllSeasonsInputProps, IAllSeasonsDispatchProps {}
