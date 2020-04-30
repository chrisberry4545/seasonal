import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getSeasonsWithFood } from './get-seasons-with-food';

export const getOneSeasonsWithFood = async (
  seasonIndex: number,
  regionId: string
): Promise<IHydratedSeason> => {
  const result = await getSeasonsWithFood(seasonIndex, regionId);
  return result && result[0];
};
