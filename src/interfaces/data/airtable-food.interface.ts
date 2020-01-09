import {
  IFood
} from './food.interface';

export interface IAirtableFood extends IFood {
  primaryFoodInRecipe?: string[];
  secondaryFoodInRecipe?: string[];
  seasons: string[];
}
