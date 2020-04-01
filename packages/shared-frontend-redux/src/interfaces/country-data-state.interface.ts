import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export interface ICountryState {
  isLoading: boolean;
  data?: ICountry[];
}
