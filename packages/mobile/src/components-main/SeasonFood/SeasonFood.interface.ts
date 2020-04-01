import {
  IFood
} from '@chrisb-dev/seasonal-shared-models';

export interface ISeasonFoodInputProps {
  isLoading: boolean;
  isListViewShown: boolean;
  food: IFood[] | undefined;
}

export interface ISeasonFoodDispatchProps {
  onFoodClick: (foodItemId: string) => void;
  onToggleListView: () => void;
}

export interface ISeasonFoodProps
  extends ISeasonFoodInputProps, ISeasonFoodDispatchProps {}
