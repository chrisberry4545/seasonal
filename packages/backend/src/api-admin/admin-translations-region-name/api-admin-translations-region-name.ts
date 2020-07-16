import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsRegionName } from './admin-create-db-translations-region-name';
import { adminDeleteDbTranslationsRegionName } from './admin-delete-db-translations-region-name';
import { adminEditDbTranslationsRegionName } from './admin-edit-db-translations-region-name';
import { adminGetAllDbTranslationsRegionNames } from './admin-get-all-db-translations-region-name';
import { adminGetOneDbTranslationsRegionName } from './admin-get-one-db-translations-region-name';

export const apiAdminTranslationsRegionName = () => generateRestApi({
  create: adminCreateDbTranslationsRegionName,
  deleteOne: adminDeleteDbTranslationsRegionName,
  edit: adminEditDbTranslationsRegionName,
  getAll: adminGetAllDbTranslationsRegionNames,
  getOne: adminGetOneDbTranslationsRegionName
});
