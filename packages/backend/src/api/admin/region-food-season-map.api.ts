import {
  adminGetAllRegionFoodSeasonMaps,
  adminGetOneRegionFoodSeasonMap,
  adminCreateRegionFoodSeasonMap,
  adminDeleteRegionFoodSeasonMap,
  adminEditRegionFoodSeasonMap
} from '../../fetch-data';

import { generateRestApi } from './generate-rest-api';

export const regionFoodSeasonMapApi = () => generateRestApi({
  create: adminCreateRegionFoodSeasonMap,
  deleteOne: adminDeleteRegionFoodSeasonMap,
  edit: adminEditRegionFoodSeasonMap,
  getAll: adminGetAllRegionFoodSeasonMaps,
  getOne: adminGetOneRegionFoodSeasonMap
});
