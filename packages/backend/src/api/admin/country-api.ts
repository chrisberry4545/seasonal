import {
  adminGetAllCountries,
  adminGetOneCountry,
  adminCreateCountry,
  adminDeleteCountry,
  adminEditCountry
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const countryApi = () => generateRestApi({
  create: adminCreateCountry,
  deleteOne: adminDeleteCountry,
  edit: adminEditCountry,
  getAll: adminGetAllCountries,
  getOne: adminGetOneCountry
});
