import { queryPostgres, getSqlQuery } from '../../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbRecipes = async (
  id: string | null
): Promise<IRecipe[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-recipes.sql`);
  const result = await queryPostgres<IRecipe>(
    query,
    [id]
  );
  return result.rows;
};
