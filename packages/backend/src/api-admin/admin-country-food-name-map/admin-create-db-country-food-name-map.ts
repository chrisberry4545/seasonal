import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbCountryFoodNameMap = async (
  item: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-country-to-food-name-map.sql`);
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [
      item.name,
      item.countryId,
      item.foodId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
