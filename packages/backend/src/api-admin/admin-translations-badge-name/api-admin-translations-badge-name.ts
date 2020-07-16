import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbTranslationsBadgeName } from './admin-create-db-translations-badge-name';
import { adminDeleteDbTranslationsBadgeName } from './admin-delete-db-translations-badge-name';
import { adminEditDbTranslationsBadgeName } from './admin-edit-db-translations-badge-name';
import { adminGetAllDbTranslationsBadgeNames } from './admin-get-all-db-translations-badge-name';
import { adminGetOneDbTranslationsBadgeName } from './admin-get-one-db-translations-badge-name';

export const apiAdminTranslationsBadgeName = () => generateRestApi({
  create: adminCreateDbTranslationsBadgeName,
  deleteOne: adminDeleteDbTranslationsBadgeName,
  edit: adminEditDbTranslationsBadgeName,
  getAll: adminGetAllDbTranslationsBadgeNames,
  getOne: adminGetOneDbTranslationsBadgeName
});
