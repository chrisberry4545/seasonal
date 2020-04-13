import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';

export interface IAllBasicSeasonsState {
  isLoading: boolean;
  data?: IBaseSeason[];
}
