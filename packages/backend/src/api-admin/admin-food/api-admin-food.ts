import { generateRestApi } from '../../api-utils/generate-rest-api';
import { adminCreateDbFood } from './admin-create-db-food';
import { adminDeleteDbFood } from './admin-delete-db-food';
import { adminEditDbFood } from './admin-edit-db-food';
import { adminGetAllDbFood } from './admin-get-all-db-food';
import { adminGetOneDbFood } from './admin-get-one-db-food';

export const apiAdminFood = () => generateRestApi({
  create: adminCreateDbFood,
  deleteOne: adminDeleteDbFood,
  edit: adminEditDbFood,
  getAll: adminGetAllDbFood,
  getOne: adminGetOneDbFood
});
