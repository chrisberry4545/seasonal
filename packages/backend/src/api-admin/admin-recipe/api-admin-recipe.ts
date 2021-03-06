import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbRecipe } from './admin-create-db-recipe';
import { adminDeleteDbRecipe } from './admin-delete-db-recipe';
import { adminEditDbRecipe } from './admin-edit-db-recipe';
import { adminGetAllDbRecipes } from './admin-get-all-db-recipes';
import { adminGetOneDbRecipe } from './admin-get-one-db-recipe';

export const apiAdminRecipe = () => generateRestApi({
  create: adminCreateDbRecipe,
  deleteOne: adminDeleteDbRecipe,
  edit: adminEditDbRecipe,
  getAll: adminGetAllDbRecipes,
  getOne: adminGetOneDbRecipe
});
