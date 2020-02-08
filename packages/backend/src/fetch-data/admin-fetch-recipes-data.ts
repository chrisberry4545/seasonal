import { IRecipe } from '@chrisb-dev/seasonal-shared';
import {
  adminGetAllDbRecipes,
  adminGetOneDbRecipe,
  adminCreateDbRecipe,
  adminDeleteDbRecipe,
  adminEditDbRecipe
} from '../data-access';

export const adminCreateRecipe = (
  item: IRecipe
): Promise<IRecipe> => adminCreateDbRecipe(item);

export const adminGetAllRecipes = (): Promise<IRecipe[]> =>
  adminGetAllDbRecipes();

export const adminGetOneRecipe = (
  id: string
): Promise<IRecipe | null> => adminGetOneDbRecipe(id);

export const adminEditRecipe = (
  item: IRecipe
): Promise<IRecipe> => adminEditDbRecipe(item);

export const adminDeleteRecipe = (
  id: string
): Promise<IRecipe> => adminDeleteDbRecipe(id);
