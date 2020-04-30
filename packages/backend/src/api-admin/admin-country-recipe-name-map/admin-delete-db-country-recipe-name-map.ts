import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbCountryRecipeNameMap = async (
  id: string
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-country-to-recipe-name-map.sql`);
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
