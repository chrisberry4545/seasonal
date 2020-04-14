import {
  IHydratedSeason
} from '@chrisb-dev/seasonal-shared-models';

export interface ICurrentSeasonState {
  currentSeasonIndex: number;
  isFoodLoading: boolean;
  isRecipesLoading: boolean;
  data?: IHydratedSeason;
}
