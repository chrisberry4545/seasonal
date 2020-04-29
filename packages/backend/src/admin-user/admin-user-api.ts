import { generateRestApi } from '../api/admin/generate-rest-api';
import { adminCreateDbUser } from './admin-create-db-user';
import { adminDeleteDbUser } from './admin-delete-db-user';
import { adminEditDbUser } from './admin-edit-db-user';
import { adminGetAllDbUsers } from './admin-get-all-db-users';
import { adminGetOneDbUser } from './admin-get-one-db-user';

export const adminUserApi = () => generateRestApi({
  create: adminCreateDbUser,
  deleteOne: adminDeleteDbUser,
  edit: adminEditDbUser,
  getAll: adminGetAllDbUsers,
  getOne: adminGetOneDbUser
});
