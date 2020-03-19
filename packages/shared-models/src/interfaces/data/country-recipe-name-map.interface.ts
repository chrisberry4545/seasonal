import {
  IDbBaseRecord
} from './db-base-record.interface';

export interface ICountryRecipeNameMap extends IDbBaseRecord {
  countryId: string;
  recipeId: string;
  name: string;
}
