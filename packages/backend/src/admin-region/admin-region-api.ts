import { generateRestApi } from '../api/admin/generate-rest-api';
import { adminCreateDbRegion } from './admin-create-db-region';
import { adminDeleteDbRegion } from './admin-delete-db-region';
import { adminEditDbRegion } from './admin-edit-db-region';
import { adminGetAllDbRegions } from './admin-get-all-db-regions';
import { adminGetOneDbRegion } from './admin-get-one-db-region';

export const adminRegionApi = () => generateRestApi({
  create: adminCreateDbRegion,
  deleteOne: adminDeleteDbRegion,
  edit: adminEditDbRegion,
  getAll: adminGetAllDbRegions,
  getOne: adminGetOneDbRegion,
  idsAreUUIDs: false
});
