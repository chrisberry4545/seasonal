import { generateRestApi } from '../api/admin/generate-rest-api';
import { adminCreateDbCountryRecipeNameMap } from './admin-create-db-country-recipe-name-map';
import { adminDeleteDbCountryRecipeNameMap } from './admin-delete-db-country-recipe-name-map';
import { adminEditDbCountryRecipeNameMap } from './admin-edit-db-country-recipe-name-map';
import { adminGetAllDbCountryRecipeNameMaps } from './admin-get-all-db-country-recipe-name-map';
import { adminGetOneDbCountryRecipeNameMap } from './admin-get-one-db-country-recipe-name-map';

export const adminCountryRecipeNameMapApi = () => generateRestApi({
  create: adminCreateDbCountryRecipeNameMap,
  deleteOne: adminDeleteDbCountryRecipeNameMap,
  edit: adminEditDbCountryRecipeNameMap,
  getAll: adminGetAllDbCountryRecipeNameMaps,
  getOne: adminGetOneDbCountryRecipeNameMap
});
