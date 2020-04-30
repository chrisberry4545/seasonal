import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbRecipes } from './admin-get-db-recipes';

export const adminGetOneDbRecipe = async (
  id: string
): Promise<IRecipe> => {
  const result = await adminGetDbRecipes(id);
  return result && result[0];
};
