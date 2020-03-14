import { IHydratedSeason } from '../../interfaces';

export interface IAllSeasonDataWithFoodState {
  isFoodLoading: boolean;
  isRecipesLoading: boolean;
  data?: IHydratedSeason[];
  numberOfSeasonsInView: number;
}
