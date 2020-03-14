import { queryPostgres, getSqlQuery } from '../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbRecipe = async (
  item: IRecipe
): Promise<IRecipe> => {
  const query = await getSqlQuery('admin-create-recipe.sql');
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

const getRecipesQuery = (): Promise<string> =>
  getSqlQuery('admin-get-recipes.sql');

export const adminGetAllDbRecipes = async (): Promise<IRecipe[]> => {
  const query = await getRecipesQuery();
  const result = await queryPostgres<IRecipe>(
    query,
    [null]
  );
  return result.rows;
};

export const adminGetOneDbRecipe = async (
  id: string
): Promise<IRecipe> => {
  const query = await getRecipesQuery();
  const result = await queryPostgres<IRecipe>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};

export const adminEditDbRecipe = async (
  item: IRecipe
): Promise<IRecipe> => {
  const query = await getSqlQuery('admin-edit-recipe.sql');
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
      item.secondaryFoodInRecipeIds
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbRecipe = async (
  id: string
): Promise<IRecipe> => {
  const query = await getSqlQuery('admin-delete-recipe.sql');
  const result = await queryPostgres<IRecipe>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
