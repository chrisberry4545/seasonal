import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getSeasonsWithFood } from './get-seasons-with-food';

export const getAllSeasonsWithFood = async (
  regionId: string
): Promise<IHydratedSeason[]> => getSeasonsWithFood(null, regionId);
