import { IAirtableBaseRecord } from '../airtable';

export interface ICountryRecipeNameMap extends IAirtableBaseRecord {
  countryId: string;
  recipeId: string;
  name: string;
}
