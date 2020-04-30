import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbRegionFoodSeasonMaps } from './admin-get-db-region-food-season-map';

export const adminGetOneDbRegionFoodSeasonMap = async (
  id: string
): Promise<IRegionFoodSeasonMap> => {
  const result = await adminGetDbRegionFoodSeasonMaps(id);
  return result[0];
};
