import {
  IHydratedFood
} from '@chrisb-dev/seasonal-shared-models';

export interface ICurrentFoodDetailsDataState {
  isLoading: boolean;
  data?: IHydratedFood;
}
