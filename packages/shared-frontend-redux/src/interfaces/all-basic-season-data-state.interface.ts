import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllBasicSeasonDataState {
  isLoading: boolean;
  data?: IBaseSeason[];
}
