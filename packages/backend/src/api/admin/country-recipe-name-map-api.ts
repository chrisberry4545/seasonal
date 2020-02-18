import {
  adminGetAllCountryRecipeNameMaps,
  adminGetOneCountryRecipeNameMap,
  adminCreateCountryRecipeNameMap,
  adminDeleteCountryRecipeNameMap,
  adminEditCountryRecipeNameMap
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const countryRecipeNameMapApi = () => generateRestApi({
  create: adminCreateCountryRecipeNameMap,
  deleteOne: adminDeleteCountryRecipeNameMap,
  edit: adminEditCountryRecipeNameMap,
  getAll: adminGetAllCountryRecipeNameMaps,
  getOne: adminGetOneCountryRecipeNameMap
});
