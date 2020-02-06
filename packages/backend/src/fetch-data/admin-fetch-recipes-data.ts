import { IRecipe } from '@chrisb-dev/seasonal-shared';
import {
  getAllRecipes,
  getSingleRecipe,
  createDbRecipe,
  deleteDbRecipe,
  editDbRecipe
} from '../data-access';

export const fetchAllRecipes = (): Promise<IRecipe[]> =>
  getAllRecipes();

export const fetchSingleRecipe = (
  recipeId: string
): Promise<IRecipe | null> => getSingleRecipe(recipeId);

export const createRecipe = (
  recipe: IRecipe
): Promise<IRecipe> => createDbRecipe(recipe);

export const editRecipe = (
  recipe: IRecipe
): Promise<IRecipe> => editDbRecipe(recipe);

export const deleteRecipe = (
  recipeId: string
): Promise<IRecipe> => deleteDbRecipe(recipeId);
