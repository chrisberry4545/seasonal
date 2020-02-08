import {
  adminGetAllRegions,
  adminGetOneRegion,
  adminCreateRegion,
  adminDeleteRegion,
  adminEditRegion
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const regionApi = () => generateRestApi({
  create: adminCreateRegion,
  deleteOne: adminDeleteRegion,
  edit: adminEditRegion,
  getAll: adminGetAllRegions,
  getOne: adminGetOneRegion
});
