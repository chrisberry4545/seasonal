import {
  IDbBaseRecord
} from './db-base-record.interface';

export interface IRecipe extends IDbBaseRecord {
  name: string;
  linkUrl: string;
  imageUrlSmall: string;
  isVegan?: boolean;
  isVegetarian?: boolean;
  primaryFoodInRecipeIds?: string[];
  secondaryFoodInRecipeIds?: string[];
  languages?: string[];
}
