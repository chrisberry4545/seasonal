import { generateRestApi } from '../api/admin/generate-rest-api';
import { adminCreateDbCountryFoodNameMap } from './admin-create-db-country-food-name-map';
import { adminDeleteDbCountryFoodNameMap } from './admin-delete-db-country-food-name-map';
import { adminEditDbCountryFoodNameMap } from './admin-edit-db-country-food-name-map';
import { adminGetAllDbCountryFoodNameMaps } from './admin-get-all-db-country-food-name-map';
import { adminGetOneDbCountryFoodNameMap } from './admin-get-one-db-country-food-name-map';

export const adminCountryFoodNameMapApi = () => generateRestApi({
  create: adminCreateDbCountryFoodNameMap,
  deleteOne: adminDeleteDbCountryFoodNameMap,
  edit: adminEditDbCountryFoodNameMap,
  getAll: adminGetAllDbCountryFoodNameMaps,
  getOne: adminGetOneDbCountryFoodNameMap
});
