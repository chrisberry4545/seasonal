import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllSeasonState {
  isFoodLoading: boolean;
  isRecipesLoading: boolean;
  data?: IHydratedSeason[];
  numberOfSeasonsInView: number;
}
