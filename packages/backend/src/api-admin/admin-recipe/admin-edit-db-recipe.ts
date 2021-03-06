import { queryPostgres, getSqlQuery } from '../../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbRecipe = async (
  item: IRecipe
): Promise<IRecipe> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-recipe.sql`);
  const result = await queryPostgres<IRecipe>(
    query,
    [
      item.id,
      item.linkUrl,
      item.imageUrlSmall,
      item.isVegetarian,
      item.isVegan,
      item.name,
      item.primaryFoodInRecipeIds,
      item.secondaryFoodInRecipeIds,
      item.languages
    ]
  );
  return result.rows && result.rows[0];
};
