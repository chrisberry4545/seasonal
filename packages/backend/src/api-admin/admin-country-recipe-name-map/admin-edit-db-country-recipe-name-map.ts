import { queryPostgres, getSqlQuery } from '../../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbCountryRecipeNameMap = async (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-country-to-recipe-name-map.sql`);
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [
      item.id,
      item.name,
      item.countryId,
      item.recipeId,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
