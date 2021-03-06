import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbCountry } from './admin-create-db-country';
import { adminDeleteDbCountry } from './admin-delete-db-country';
import { adminEditDbCountry } from './admin-edit-db-country';
import { adminGetAllDbCountries } from './admin-get-all-db-countries';
import { adminGetOneDbCountry } from './admin-get-one-db-country';

export const apiAdminCountry = () => generateRestApi({
  create: adminCreateDbCountry,
  deleteOne: adminDeleteDbCountry,
  edit: adminEditDbCountry,
  getAll: adminGetAllDbCountries,
  getOne: adminGetOneDbCountry
});
