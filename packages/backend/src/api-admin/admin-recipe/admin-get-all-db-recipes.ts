import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbRecipes } from './admin-get-db-recipes';

export const adminGetAllDbRecipes = async (): Promise<IRecipe[]> =>
  adminGetDbRecipes(null);
