import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsCountryName } from './admin-create-db-translations-country-name';
import { adminDeleteDbTranslationsCountryName } from './admin-delete-db-translations-country-name';
import { adminEditDbTranslationsCountryName } from './admin-edit-db-translations-country-name';
import { adminGetAllDbTranslationsCountryNames } from './admin-get-all-db-translations-country-name';
import { adminGetOneDbTranslationsCountryName } from './admin-get-one-db-translations-country-name';

export const apiAdminTranslationsCountryName = () => generateRestApi({
  create: adminCreateDbTranslationsCountryName,
  deleteOne: adminDeleteDbTranslationsCountryName,
  edit: adminEditDbTranslationsCountryName,
  getAll: adminGetAllDbTranslationsCountryNames,
  getOne: adminGetOneDbTranslationsCountryName
});
