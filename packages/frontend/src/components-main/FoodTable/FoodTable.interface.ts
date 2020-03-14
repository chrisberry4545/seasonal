import { IFood } from '@chrisb-dev/seasonal-shared-models';

export interface IFoodTableInputProps {
  isCurrentTabFood: boolean;
  food: IFood[] | undefined;
  isLoading: boolean;
}

export interface IFoodTableDispatchProps {
  onFoodClick: (foodItemId: string) => void;
}

export interface IFoodTableProps
  extends IFoodTableInputProps, IFoodTableDispatchProps {}
