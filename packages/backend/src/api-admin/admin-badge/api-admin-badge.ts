import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbBadge } from './admin-create-db-badge';
import { adminDeleteDbBadge } from './admin-delete-db-badge';
import { adminEditDbBadge } from './admin-edit-db-badge';
import { adminGetAllDbBadges } from './admin-get-all-db-badges';
import { adminGetOneDbBadge } from './admin-get-one-db-badge';

export const apiAdminBadge = () => generateRestApi({
  create: adminCreateDbBadge,
  deleteOne: adminDeleteDbBadge,
  edit: adminEditDbBadge,
  getAll: adminGetAllDbBadges,
  getOne: adminGetOneDbBadge
});
