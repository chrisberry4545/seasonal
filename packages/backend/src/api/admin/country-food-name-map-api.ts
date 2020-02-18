import {
  adminGetAllCountryFoodNameMaps,
  adminGetOneCountryFoodNameMap,
  adminCreateCountryFoodNameMap,
  adminDeleteCountryFoodNameMap,
  adminEditCountryFoodNameMap
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const countryFoodNameMapApi = () => generateRestApi({
  create: adminCreateCountryFoodNameMap,
  deleteOne: adminDeleteCountryFoodNameMap,
  edit: adminEditCountryFoodNameMap,
  getAll: adminGetAllCountryFoodNameMaps,
  getOne: adminGetOneCountryFoodNameMap
});
