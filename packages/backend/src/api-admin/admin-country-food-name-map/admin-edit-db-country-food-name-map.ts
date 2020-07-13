import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbCountryFoodNameMap = async (
  item: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-country-to-food-name-map.sql`);
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [
      item.id,
      item.name,
      item.countryId,
      item.foodId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
