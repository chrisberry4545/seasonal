import {
  IHydratedFood
} from '@chrisb-dev/seasonal-shared-models';

export interface ICurrentFoodDetailsState {
  isLoading: boolean;
  data?: IHydratedFood;
}
