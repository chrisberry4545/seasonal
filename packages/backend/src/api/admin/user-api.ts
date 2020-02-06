import {
  createUser,
  fetchUserById,
  fetchAllUsers,
  deleteUser,
  editUser
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const userApi = () => generateRestApi({
  create: createUser,
  deleteOne: deleteUser,
  edit: editUser,
  getAll: fetchAllUsers,
  getOne: fetchUserById
});
