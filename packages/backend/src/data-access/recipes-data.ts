import { queryPostgres, getSqlQuery } from '../postgres';
import { IRecipe } from '@chrisb-dev/seasonal-shared';

const getRecipesQuery = (): Promise<string> =>
  getSqlQuery('get-recipes.sql');

export const getAllRecipes = async (): Promise<IRecipe[]> => {
  const getAllRecipesQuery = await getRecipesQuery();
  const result = await queryPostgres<IRecipe>(
    getAllRecipesQuery,
    [null]
  );
  return result.rows;
};

export const getSingleRecipe = async (
  recipeId: string
): Promise<IRecipe> => {
  const recipeQuery = await getRecipesQuery();
  const result = await queryPostgres<IRecipe>(
    recipeQuery,
    [recipeId]
  );
  return result.rows && result.rows[0];
};

export const createDbRecipe = async (
  recipe: IRecipe
): Promise<IRecipe> => {
  const createRecipeQuery = await getSqlQuery('create-recipe.sql');
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

export const editDbRecipe = async (
  recipe: IRecipe
): Promise<IRecipe> => {
  const createRecipeQuery = await getSqlQuery('edit-recipe.sql');
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

export const deleteDbRecipe = async (
  recipeId: string
): Promise<IRecipe> => {
  const deleteRecipeQuery = await getSqlQuery('delete-recipe.sql');
  const result = await queryPostgres<IRecipe>(
    deleteRecipeQuery,
    [recipeId]
  );
  return result.rows && result.rows[0];
};
