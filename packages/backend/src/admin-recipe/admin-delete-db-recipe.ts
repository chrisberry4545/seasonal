import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbRecipe = async (
  id: string
): Promise<IRecipe> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-delete-recipe.sql`);
  const result = await queryPostgres<IRecipe>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
