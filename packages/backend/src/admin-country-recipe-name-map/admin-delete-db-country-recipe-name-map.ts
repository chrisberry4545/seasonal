import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbCountryRecipeNameMap = async (
  id: string
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-delete-country-to-recipe-name-map.sql`);
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
