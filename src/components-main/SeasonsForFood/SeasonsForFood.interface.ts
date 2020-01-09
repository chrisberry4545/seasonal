import { ISelectableItem } from '@chrisb-dev/seasonal-shared';

export interface ISeasonForFoodInputProps {
  isLoading: boolean;
  seasonsSelectedForFood: ISelectableItem[] | undefined;
}

export interface ISeasonForFoodDispatchProps {
  onSeasonSelected: (seasonIndex: number) => void;
}

export interface ISeasonForFoodProps
  extends ISeasonForFoodInputProps, ISeasonForFoodDispatchProps {}
