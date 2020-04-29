import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbCountryRecipeNameMaps = async (
  id: string | null
): Promise<ICountryRecipeNameMap[]> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-get-country-to-recipe-name-maps.sql`);
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [id]
  );
  return result.rows;
};
