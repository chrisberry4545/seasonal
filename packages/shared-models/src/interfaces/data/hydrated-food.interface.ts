import { IFood } from './food.interface';
import { IBaseSeason } from './base-season.interface';
import { IRecipe } from './recipe.interface';
import { IBadge } from './badge.interface';

export interface IHydratedFood extends IFood {
  seasons: IBaseSeason[];
  primaryFoodInRecipe?: IRecipe[];
  secondaryFoodInRecipe?: IRecipe[];
  badges?: IBadge[];
}
