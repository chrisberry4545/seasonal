import {
  IHydratedFood
} from '../../interfaces';

export interface ICurrentFoodDetailsDataState {
  isLoading: boolean;
  data?: IHydratedFood;
}
