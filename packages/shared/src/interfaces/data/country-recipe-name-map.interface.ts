import { IAirtableBaseRecord } from '../airtable';
import { IRecipe } from './recipe.interface';
import { ICountry } from './country.interface';

export interface ICountryRecipeNameMap extends IAirtableBaseRecord {
  country: ICountry;
  recipe: IRecipe;
  name: string;
}
