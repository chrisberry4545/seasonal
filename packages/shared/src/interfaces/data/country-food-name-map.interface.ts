import { IAirtableBaseRecord } from '../airtable';
import { ICountry } from './country.interface';
import { IFood } from './food.interface';

export interface ICountryFoodNameMap extends IAirtableBaseRecord {
  country: ICountry;
  food: IFood;
  name: string;
}
