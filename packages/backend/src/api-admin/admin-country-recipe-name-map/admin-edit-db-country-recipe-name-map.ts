import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbCountryRecipeNameMap = async (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-edit-country-to-recipe-name-map.sql`);
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [
      item.id,
      item.name,
      item.countryId,
      item.recipeId
    ]
  );
  return result.rows && result.rows[0];
};
