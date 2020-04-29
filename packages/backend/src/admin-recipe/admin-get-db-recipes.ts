import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbRecipes = async (
  id: string | null
): Promise<IRecipe[]> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-get-recipes.sql`);
  const result = await queryPostgres<IRecipe>(
    query,
    [id]
  );
  return result.rows;
};
