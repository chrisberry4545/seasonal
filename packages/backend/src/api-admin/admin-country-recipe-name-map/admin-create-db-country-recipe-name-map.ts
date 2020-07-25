import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbCountryRecipeNameMap = async (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-country-to-recipe-name-map.sql`);
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [
      item.name,
      item.countryId,
      item.recipeId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
