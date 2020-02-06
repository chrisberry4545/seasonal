import {
  adminGetAllRecipes,
  adminGetOneRecipe,
  adminCreateRecipe,
  adminDeleteRecipe,
  adminEditRecipe
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const recipeApi = () => generateRestApi({
  create: adminCreateRecipe,
  deleteOne: adminDeleteRecipe,
  edit: adminEditRecipe,
  getAll: adminGetAllRecipes,
  getOne: adminGetOneRecipe
});
