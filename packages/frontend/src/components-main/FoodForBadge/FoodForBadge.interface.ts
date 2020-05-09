import { IFood } from '@chrisb-dev/seasonal-shared-models';

export interface IFoodForBadgeInputProps {
  isLoading: boolean;
  currentBadgeFood: IFood[] | undefined;
}

export interface IFoodForBadgeDispatchProps {
  onFoodSelected: (foodId: string) => void;
}

export interface IFoodForBadgeProps
  extends IFoodForBadgeInputProps, IFoodForBadgeDispatchProps {}
