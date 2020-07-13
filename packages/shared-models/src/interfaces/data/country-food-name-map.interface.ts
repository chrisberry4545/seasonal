import {
  IDbBaseRecord
} from './db-base-record.interface';
import { LANGUAGES } from '../../enums';

export interface ICountryFoodNameMap extends IDbBaseRecord {
  countryId: string;
  foodId: string;
  name: string;
  languages: LANGUAGES[];
}
