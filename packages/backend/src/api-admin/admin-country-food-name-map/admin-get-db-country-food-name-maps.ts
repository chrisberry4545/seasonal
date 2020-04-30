import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbCountryFoodNameMaps = async (
  id: string | null
): Promise<ICountryFoodNameMap[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-country-to-food-name-maps.sql`);
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [id]
  );
  return result.rows;
};
