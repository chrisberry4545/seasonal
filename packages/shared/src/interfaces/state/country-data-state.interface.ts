import {
  ICountry
} from '../data/country.interface';

export interface ICountryState {
  isLoading: boolean;
  data?: ICountry[];
}
