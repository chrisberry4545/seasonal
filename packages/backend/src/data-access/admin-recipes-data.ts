import { queryPostgres, getSqlQuery } from '../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared';

export const adminCreateDbRecipe = async (
  recipe: IRecipe
): Promise<IRecipe> => {
  const createRecipeQuery = await getSqlQuery('admin-create-recipe.sql');
  const result = await queryPostgres<IRecipe>(
    createRecipeQuery,
    [
      recipe.linkUrl,
      recipe.imageUrlSmall,
      recipe.isVegetarian,
      recipe.isVegan,
      recipe.name,
      recipe.primaryFoodInRecipeIds,
      recipe.secondaryFoodInRecipeIds
    ]
  );
  return result.rows && result.rows[0];
};

const getRecipesQuery = (): Promise<string> =>
  getSqlQuery('admin-get-recipes.sql');

export const adminGetAllDbRecipes = async (): Promise<IRecipe[]> => {
  const getAllRecipesQuery = await getRecipesQuery();
  const result = await queryPostgres<IRecipe>(
    getAllRecipesQuery,
    [null]
  );
  return result.rows;
};

export const adminGetOneDbRecipe = async (
  recipeId: string
): Promise<IRecipe> => {
  const recipeQuery = await getRecipesQuery();
  const result = await queryPostgres<IRecipe>(
    recipeQuery,
    [recipeId]
  );
  return result.rows && result.rows[0];
};

export const adminEditDbRecipe = async (
  recipe: IRecipe
): Promise<IRecipe> => {
  const createRecipeQuery = await getSqlQuery('admin-edit-recipe.sql');
  const result = await queryPostgres<IRecipe>(
    createRecipeQuery,
    [
      recipe.id,
      recipe.linkUrl,
      recipe.imageUrlSmall,
      recipe.isVegetarian,
      recipe.isVegan,
      recipe.name,
      recipe.primaryFoodInRecipeIds,
      recipe.secondaryFoodInRecipeIds
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbRecipe = async (
  recipeId: string
): Promise<IRecipe> => {
  const deleteRecipeQuery = await getSqlQuery('admin-delete-recipe.sql');
  const result = await queryPostgres<IRecipe>(
    deleteRecipeQuery,
    [recipeId]
  );
  return result.rows && result.rows[0];
};
