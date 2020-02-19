import { IAirtableBaseRecord } from '../airtable';

export interface ICountryFoodNameMap extends IAirtableBaseRecord {
  countryId: string;
  foodId: string;
  name: string;
}
