import {
  IHydratedSeason
} from '@chrisb-dev/seasonal-shared-models';

export interface ICurrentSeasonDataState {
  currentSeasonIndex: number;
  isFoodLoading: boolean;
  isRecipesLoading: boolean;
  data?: IHydratedSeason;
}
