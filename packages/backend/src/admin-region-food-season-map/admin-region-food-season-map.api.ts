import { generateRestApi } from '../api/admin/generate-rest-api';
import { adminCreateDbRegionFoodSeasonMap } from './admin-create-db-region-food-season-map';
import { adminDeleteDbRegionFoodSeasonMap } from './admin-delete-db-region-food-season-map';
import { adminEditDbRegionFoodSeasonMap } from './admin-edit-db-region-food-season-map';
import { adminGetAllDbRegionFoodSeasonMaps } from './admin-get-all-db-region-food-season-map';
import { adminGetOneDbRegionFoodSeasonMap } from './admin-get-one-db-region-food-season-map';

export const adminRegionFoodSeasonMapApi = () => generateRestApi({
  create: adminCreateDbRegionFoodSeasonMap,
  deleteOne: adminDeleteDbRegionFoodSeasonMap,
  edit: adminEditDbRegionFoodSeasonMap,
  getAll: adminGetAllDbRegionFoodSeasonMaps,
  getOne: adminGetOneDbRegionFoodSeasonMap
});
