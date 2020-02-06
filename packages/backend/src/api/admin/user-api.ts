import {
  adminCreateUser,
  adminGetOneUser,
  adminGetAllUsers,
  adminDeleteUser,
  adminEditUser
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const userApi = () => generateRestApi({
  create: adminCreateUser,
  deleteOne: adminDeleteUser,
  edit: adminEditUser,
  getAll: adminGetAllUsers,
  getOne: adminGetOneUser
});
