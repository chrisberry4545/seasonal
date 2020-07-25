import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsSeasonName } from './admin-create-db-translations-season-name';
import { adminDeleteDbTranslationsSeasonName } from './admin-delete-db-translations-season-name';
import { adminEditDbTranslationsSeasonName } from './admin-edit-db-translations-season-name';
import { adminGetAllDbTranslationsSeasonNames } from './admin-get-all-db-translations-season-name';
import { adminGetOneDbTranslationsSeasonName } from './admin-get-one-db-translations-season-name';

export const apiAdminTranslationsSeasonName = () => generateRestApi({
  create: adminCreateDbTranslationsSeasonName,
  deleteOne: adminDeleteDbTranslationsSeasonName,
  edit: adminEditDbTranslationsSeasonName,
  getAll: adminGetAllDbTranslationsSeasonNames,
  getOne: adminGetOneDbTranslationsSeasonName
});
