import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbRegionFoodSeasonMaps } from './admin-get-db-region-food-season-maps';

export const adminGetOneDbRegionFoodSeasonMap = async (
  id: string
): Promise<IRegionFoodSeasonMap | undefined> => {
  const result = await adminGetDbRegionFoodSeasonMaps(id);
  return result[0];
};
