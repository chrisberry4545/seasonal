import {
  fetchAllRecipes, fetchSingleRecipe, createRecipe, deleteRecipe, editRecipe
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const recipeApi = () => generateRestApi({
  create: createRecipe,
  deleteOne: deleteRecipe,
  edit: editRecipe,
  getAll: fetchAllRecipes,
  getOne: fetchSingleRecipe
});
