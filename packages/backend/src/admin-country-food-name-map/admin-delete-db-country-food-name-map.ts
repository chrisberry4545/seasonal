import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbCountryFoodNameMap = async (
  id: string
): Promise<ICountryFoodNameMap> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-delete-country-to-food-name-map.sql`);
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
