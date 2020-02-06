import {
  IAirtableBaseRecord
} from '../airtable';

export interface IRecipe extends IAirtableBaseRecord {
  name: string;
  linkUrl: string;
  imageUrlSmall: string;
  isVegan?: boolean;
  isVegetarian?: boolean;
  primaryFoodInRecipeIds?: string[];
  secondaryFoodInRecipeIds?: string[];
}
