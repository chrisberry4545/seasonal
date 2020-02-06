import { IRecipe } from '@chrisb-dev/seasonal-shared';
import {
  adminGetAllDbRecipes,
  adminGetOneDbRecipe,
  adminCreateDbRecipe,
  adminDeleteDbRecipe,
  adminEditDbRecipe
} from '../data-access';

export const adminCreateRecipe = (
  recipe: IRecipe
): Promise<IRecipe> => adminCreateDbRecipe(recipe);

export const adminGetAllRecipes = (): Promise<IRecipe[]> =>
  adminGetAllDbRecipes();

export const adminGetOneRecipe = (
  recipeId: string
): Promise<IRecipe | null> => adminGetOneDbRecipe(recipeId);

export const adminEditRecipe = (
  recipe: IRecipe
): Promise<IRecipe> => adminEditDbRecipe(recipe);

export const adminDeleteRecipe = (
  recipeId: string
): Promise<IRecipe> => adminDeleteDbRecipe(recipeId);
