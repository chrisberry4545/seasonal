import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getDbSeasonsWithFood } from './get-db-seasons-with-food';

export const getAllDbSeasonsWithFood = async (
  regionId: string
): Promise<IHydratedSeason[]> => getDbSeasonsWithFood(null, regionId);
