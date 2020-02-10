import {
  adminGetAllFood,
  adminGetOneFood,
  adminCreateFood,
  adminDeleteFood,
  adminEditFood
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const foodApi = () => generateRestApi({
  create: adminCreateFood,
  deleteOne: adminDeleteFood,
  edit: adminEditFood,
  getAll: adminGetAllFood,
  getOne: adminGetOneFood
});
