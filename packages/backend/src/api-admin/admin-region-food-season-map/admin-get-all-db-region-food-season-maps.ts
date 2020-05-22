import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbRegionFoodSeasonMaps } from './admin-get-db-region-food-season-maps';

export const adminGetAllDbRegionFoodSeasonMaps = async (): Promise<IRegionFoodSeasonMap[]> =>
  adminGetDbRegionFoodSeasonMaps(null);
