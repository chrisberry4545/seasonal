import {
  IHydratedSeason
} from '../../interfaces';

export interface ICurrentSeasonDataState {
  currentSeasonIndex: number;
  isFoodLoading: boolean;
  isRecipesLoading: boolean;
  data?: IHydratedSeason;
}
