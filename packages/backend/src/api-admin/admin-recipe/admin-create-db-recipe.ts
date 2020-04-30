import { queryPostgres, getSqlQuery } from '../../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbRecipe = async (
  item: IRecipe
): Promise<IRecipe> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-recipe.sql`);
  const result = await queryPostgres<IRecipe>(
    query,
    [
      item.linkUrl,
      item.imageUrlSmall,
      item.isVegetarian,
      item.isVegan,
      item.name,
      item.primaryFoodInRecipeIds,
      item.secondaryFoodInRecipeIds
    ]
  );
  return result.rows && result.rows[0];
};
