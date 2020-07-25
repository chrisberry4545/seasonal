import {
  IDbBaseRecord
} from './db-base-record.interface';
import { LANGUAGES } from '../../enums';

export interface ICountryRecipeNameMap extends IDbBaseRecord {
  countryId: string;
  recipeId: string;
  name: string;
  languages: LANGUAGES[];
}
