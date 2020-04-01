import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonDataWithFoodState {
  isFoodLoading: boolean;
  isRecipesLoading: boolean;
  data?: IHydratedSeason[];
  numberOfSeasonsInView: number;
}
