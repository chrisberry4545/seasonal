import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbCountryRecipeNameMap = async (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-create-country-to-recipe-name-map.sql`);
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [
      item.name,
      item.countryId,
      item.recipeId
    ]
  );
  return result.rows && result.rows[0];
};
