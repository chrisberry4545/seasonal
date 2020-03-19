import {
  IDbBaseRecord
} from './db-base-record.interface';

export interface ICountryFoodNameMap extends IDbBaseRecord {
  countryId: string;
  foodId: string;
  name: string;
}
