import { IFood } from './food.interface';
import { IBaseSeason } from './base-season.interface';
import { IRecipe } from './recipe.interface';

export interface IHydratedFood extends IFood {
  seasons: IBaseSeason[];
  primaryFoodInRecipe?: IRecipe[];
  secondaryFoodInRecipe?: IRecipe[];
}
